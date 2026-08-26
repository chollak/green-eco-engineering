// Числа, которые сайт называет вслух, считаются из данных, а не пишутся руками:
// иначе при добавлении услуги страница начнёт врать в 17 местах сразу.

import { sections } from './sections.mjs'

export const SECTION_COUNT = sections.length
export const SERVICE_COUNT = sections.reduce((total, section) => total + section.services.length, 0)

/** Шесть направлений выводятся крупными плитками, остальные — компактными строками. */
export const KEY_SLUGS = [
  'elektromontazhnye-raboty',
  'elektrolaboratoriya',
  'pozharnaya-bezopasnost',
  'vysokovoltnye-raboty',
  'puskonaladochnye-raboty',
  'solnechnye-elektrostancii'
]

export const KEY_COUNT = KEY_SLUGS.length
export const REST_COUNT = SECTION_COUNT - KEY_COUNT

/** Русское склонение: 1 вид, 2–4 вида, 5+ видов. */
export function pluralKind (count) {
  const tail = count % 100
  if (tail >= 11 && tail <= 14) return 'видов'
  switch (count % 10) {
    case 1: return 'вид'
    case 2: case 3: case 4: return 'вида'
    default: return 'видов'
  }
}
