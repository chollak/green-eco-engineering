#!/usr/bin/env node
/**
 * Готовит веб-версии фотографий: до двух размеров × два формата.
 *
 *   src/photos/<slug>.jpg          мастер первого кадра раздела
 *   src/photos/<slug>-2.jpg        второй кадр того же раздела, -3, -4 и так далее
 *   assets/photos/<имя>-800.jpg    для телефонов
 *   assets/photos/<имя>-1600.jpg   для десктопа
 *   ...и то же в .webp — он вдвое легче, а <picture> сам выберет формат
 *
 * ПОЧЕМУ РАЗМЕРЫ СЧИТАЮТСЯ, А НЕ ЗАДАНЫ СПИСКОМ.
 * Часть исходников пришла от клиента в экранном разрешении (447–1280 px).
 * Растянуть их до 1600 значит раздуть вес и получить мыло: апскейл не
 * добавляет деталей. Поэтому берём только те стандартные ширины, что меньше
 * оригинала, и native-ширину сверху — если она даёт заметный выигрыш.
 *
 * Побочный продукт — src/data/photo-sizes.mjs: что реально сгенерировано.
 * По нему шаблон собирает srcset и проставляет width/height, поэтому в вёрстку
 * не попадают ссылки на несуществующие файлы и не возникает сдвига вёрстки.
 *
 * Требуется ffmpeg (вместе с ffprobe) и cwebp — оба ставятся через brew.
 * Запуск: node scripts-photos.mjs
 */
import { execFile } from 'node:child_process'
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises'
import { promisify } from 'node:util'
import { join, basename, extname } from 'node:path'

const run = promisify(execFile)
const SRC = 'src/photos'
const OUT = 'assets/photos'
const MANIFEST = 'src/data/photo-sizes.mjs'
const WIDTHS = [800, 1600]
const JPEG_QUALITY = 4   // шкала ffmpeg -q:v: 2 лучшее, 31 худшее
const WEBP_QUALITY = 78
/** Ниже этого выигрыша native-ширина не стоит отдельного файла. */
const NATIVE_GAIN = 1.15

async function dimensions (path) {
  const { stdout } = await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0:s=x', path])
  const [width, height] = stdout.trim().split('x').map(Number)
  return { width, height }
}

async function sizeOf (path) {
  const info = await stat(path)
  return Math.round(info.size / 1024)
}

/** Стандартные ширины меньше оригинала плюс native, если он заметно крупнее. */
function targetWidths (sourceWidth) {
  const standard = WIDTHS.filter(width => width < sourceWidth)
  const largest = standard[standard.length - 1] || 0
  if (sourceWidth >= largest * NATIVE_GAIN) standard.push(sourceWidth)
  return standard
}

function manifestFile (entries) {
  const rows = entries.map(([name, data]) =>
    `  '${name}': { width: ${data.width}, height: ${data.height}, outputs: [${data.outputs.join(', ')}] }`
  ).join(',\n')

  return `// СГЕНЕРИРОВАНО scripts-photos.mjs — править руками бессмысленно.
//
// Что реально лежит в assets/photos: ширины готовых файлов и размер самого
// крупного из них. Шаблон берёт отсюда srcset и width/height.

export const photoSizes = {
${rows}
}
`
}

async function main () {
  await mkdir(OUT, { recursive: true })

  const files = (await readdir(SRC)).filter(name => extname(name) === '.jpg').sort()
  if (!files.length) {
    console.log(`В ${SRC} нет исходников. Положите файлы с именами по slug раздела.`)
    return
  }

  const report = []
  const manifest = []

  for (const file of files) {
    const name = basename(file, '.jpg')
    const source = join(SRC, file)
    const { width: sourceWidth } = await dimensions(source)
    const widths = targetWidths(sourceWidth)
    let largest = null

    for (const width of widths) {
      const jpeg = join(OUT, `${name}-${width}.jpg`)
      const webp = join(OUT, `${name}-${width}.webp`)

      await run('ffmpeg', ['-loglevel', 'error', '-y', '-i', source,
        '-vf', `scale=${width}:-2:flags=lanczos`, '-q:v', String(JPEG_QUALITY), jpeg])

      await run('cwebp', ['-quiet', '-q', String(WEBP_QUALITY), '-resize', String(width), '0',
        source, '-o', webp])

      largest = await dimensions(jpeg)
      report.push({ name, width, jpeg: await sizeOf(jpeg), webp: await sizeOf(webp) })
    }

    manifest.push([name, { ...largest, outputs: widths }])
  }

  await writeFile(MANIFEST, manifestFile(manifest), 'utf8')

  const totalJpeg = report.reduce((sum, row) => sum + row.jpeg, 0)
  const totalWebp = report.reduce((sum, row) => sum + row.webp, 0)
  const thin = manifest.filter(([, data]) => data.width < 1600)

  console.log(`Обработано снимков: ${files.length}\n`)
  console.log('файл'.padEnd(34) + 'ширина'.padEnd(9) + 'jpeg'.padEnd(9) + 'webp')
  for (const row of report) {
    console.log(row.name.padEnd(34) + String(row.width).padEnd(9) + `${row.jpeg} КБ`.padEnd(9) + `${row.webp} КБ`)
  }
  console.log(`\nИтого: jpeg ${totalJpeg} КБ, webp ${totalWebp} КБ`)
  console.log(`Манифест: ${MANIFEST}`)

  if (thin.length) {
    console.log(`\nНиже 1600 px по ширине — ${thin.length} шт., на десктопе будут мягкими:`)
    for (const [name, data] of thin) console.log(`  ${name.padEnd(32)} ${data.width}×${data.height}`)
  }
}

main().catch(error => {
  console.error('Не удалось обработать фотографии:', error.stack || error.message)
  process.exitCode = 1
})
