#!/usr/bin/env node
/**
 * Приводит узбекские апострофы к нормативным символам.
 *
 *   oʻ / gʻ           → U+02BB  ʻ (modifier letter turned comma)
 *   taʼmir, maʼlumot  → U+02BC  ʼ (modifier letter apostrophe)
 *
 * Типографские кавычки U+2018/U+2019 в этой роли — распространённая ошибка:
 * они кавычки, а не буквенные знаки. Обе гарнитуры проекта (IBM Plex Sans и Mono)
 * содержат U+02BB и U+02BC — проверено разбором cmap.
 *
 * Русские строки проекта апострофов не содержат (кавычки — «ёлочки»),
 * поэтому замена по файлу безопасна.
 *
 * Запуск: node scripts-normalize-apostrophes.mjs
 */
import { readFile, writeFile } from 'node:fs/promises'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

const TARGETS = ['src/data', 'src/templates']
const LEFT_QUOTE = '‘'
const RIGHT_QUOTE = '’'
const TURNED_COMMA = 'ʻ'
const MODIFIER_APOSTROPHE = 'ʼ'

let changed = 0

for (const dir of TARGETS) {
  const files = (await readdir(dir)).filter(name => name.endsWith('.mjs'))

  for (const name of files) {
    const path = join(dir, name)
    const source = await readFile(path, 'utf8')

    const fixed = source
      .split(LEFT_QUOTE).join(TURNED_COMMA)
      .split(RIGHT_QUOTE).join(MODIFIER_APOSTROPHE)

    if (fixed !== source) {
      await writeFile(path, fixed, 'utf8')
      const left = source.split(LEFT_QUOTE).length - 1
      const right = source.split(RIGHT_QUOTE).length - 1
      console.log(`${path}: ‘→ʻ ${left}, ’→ʼ ${right}`)
      changed++
    }
  }
}

console.log(changed ? `Файлов изменено: ${changed}` : 'Апострофы уже нормализованы')
