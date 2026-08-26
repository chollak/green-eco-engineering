#!/usr/bin/env node
/**
 * Готовит веб-версии фотографий: два размера × два формата.
 *
 *   src/photos/<slug>.jpg          мастер (обработан, ~1672px по ширине)
 *   assets/photos/<slug>-800.jpg   для телефонов
 *   assets/photos/<slug>-1600.jpg  для десктопа
 *   ...и то же в .webp — он вдвое легче, а <picture> сам выберет формат
 *
 * Требуется ffmpeg и cwebp (оба ставятся через brew).
 * Запуск: node scripts-photos.mjs
 */
import { execFile } from 'node:child_process'
import { readdir, mkdir, stat } from 'node:fs/promises'
import { promisify } from 'node:util'
import { join, basename, extname } from 'node:path'

const run = promisify(execFile)
const SRC = 'src/photos'
const OUT = 'assets/photos'
const WIDTHS = [800, 1600]
const JPEG_QUALITY = 4   // шкала ffmpeg -q:v: 2 лучшее, 31 худшее
const WEBP_QUALITY = 78

async function sizeOf (path) {
  const info = await stat(path)
  return Math.round(info.size / 1024)
}

async function main () {
  await mkdir(OUT, { recursive: true })

  const files = (await readdir(SRC)).filter(name => extname(name) === '.jpg')
  if (!files.length) {
    console.log(`В ${SRC} нет исходников. Положите файлы с именами по slug раздела.`)
    return
  }

  const report = []

  for (const file of files) {
    const slug = basename(file, '.jpg')
    const source = join(SRC, file)

    for (const width of WIDTHS) {
      const jpeg = join(OUT, `${slug}-${width}.jpg`)
      const webp = join(OUT, `${slug}-${width}.webp`)

      await run('ffmpeg', ['-loglevel', 'error', '-y', '-i', source,
        '-vf', `scale=${width}:-2:flags=lanczos`, '-q:v', String(JPEG_QUALITY), jpeg])

      await run('cwebp', ['-quiet', '-q', String(WEBP_QUALITY), '-resize', String(width), '0',
        source, '-o', webp])

      report.push({ slug, width, jpeg: await sizeOf(jpeg), webp: await sizeOf(webp) })
    }
  }

  const totalJpeg = report.reduce((sum, row) => sum + row.jpeg, 0)
  const totalWebp = report.reduce((sum, row) => sum + row.webp, 0)

  console.log(`Обработано снимков: ${files.length}\n`)
  console.log('раздел'.padEnd(30) + 'ширина'.padEnd(9) + 'jpeg'.padEnd(9) + 'webp')
  for (const row of report) {
    console.log(row.slug.padEnd(30) + String(row.width).padEnd(9) + `${row.jpeg} КБ`.padEnd(9) + `${row.webp} КБ`)
  }
  console.log(`\nИтого: jpeg ${totalJpeg} КБ, webp ${totalWebp} КБ`)
  console.log('На странице раздела грузится ровно один файл — остальное отсекают srcset и lazy-loading.')
}

main().catch(error => {
  console.error('Не удалось обработать фотографии:', error.stack || error.message)
  process.exitCode = 1
})
