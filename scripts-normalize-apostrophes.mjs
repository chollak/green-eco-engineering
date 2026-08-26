#!/usr/bin/env node
/**
 * Приводит узбекские апострофы к единому виду: U+02BB → U+2018, U+02BC → U+2019.
 *
 * ПОЧЕМУ НЕ ОРФОГРАФИЧЕСКИ ВЕРНЫЕ U+02BB / U+02BC.
 * Замерено в браузере на IBM Plex Sans (кегль 40px, canvas measureText):
 *
 *   U+02BB ʻ — 24.00px   (шире буквы «o», у которой 22.40px)
 *   U+2018 ‘ — 10.92px
 *
 * Глиф U+02BB в этой гарнитуре нарисован как модификатор с большими боковыми
 * свисаниями: «To‘liq» набирается как «To ʻ liq» — читается как опечатка.
 * U+2018 в Plex имеет форму перевёрнутой запятой, то есть ровно ту, которую
 * ожидает узбекский читатель, и набирается плотно.
 * Если гарнитура сменится — перепроверить замером и, если новый шрифт рисует
 * U+02BB нормально, вернуть орфографически верный вариант.
 *
 * ЗАМЕНЯЮТСЯ ТОЛЬКО ЭТИ ДВА СИМВОЛА. Прямую кавычку и обратный апостроф
 * трогать нельзя: первая — терминатор строки JS, второй — шаблонный литерал.
 *
 * Запуск: node scripts-normalize-apostrophes.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'

const TARGETS = ['src/data', 'src/templates']
const RULES = [
  { from: 'ʻ', to: '‘', label: 'ʻ→‘' },
  { from: 'ʼ', to: '’', label: 'ʼ→’' }
]

let changed = 0

for (const dir of TARGETS) {
  for (const name of (await readdir(dir)).filter(file => file.endsWith('.mjs'))) {
    const path = join(dir, name)
    const source = await readFile(path, 'utf8')
    let fixed = source
    const report = []

    for (const rule of RULES) {
      const count = fixed.split(rule.from).length - 1
      if (!count) continue
      fixed = fixed.split(rule.from).join(rule.to)
      report.push(`${rule.label} ${count}`)
    }

    if (fixed !== source) {
      await writeFile(path, fixed, 'utf8')
      console.log(`${path}: ${report.join(', ')}`)
      changed++
    }
  }
}

console.log(changed ? `Файлов изменено: ${changed}` : 'Апострофы уже нормализованы')
