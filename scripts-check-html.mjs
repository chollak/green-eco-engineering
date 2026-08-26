import { readFileSync, readdirSync } from 'node:fs'

const pages = ['index.html', '404.html', 'services/index.html',
  ...readdirSync('services').filter(f => f !== 'index.html').map(f => `services/${f}`)]

const problems = []
const add = (sev, page, what) => problems.push({ sev, page, what })

const titles = new Map()
const descs = new Map()

for (const page of pages) {
  const html = readFileSync(page, 'utf8')

  // 1. дубли id
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1])
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (dupes.length) add('критично', page, `дубли id: ${[...new Set(dupes)].join(', ')}`)

  // 2. абсолютные пути
  const abs = html.match(/(?:href|src)="\/(?!\/)[^"]*"/g)
  if (abs) add('критично', page, `абсолютные пути: ${[...new Set(abs)].join(', ')}`)

  // 3. вложенные интерактивные элементы
  if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*?<a\b/.test(html)) add('критично', page, 'ссылка внутри ссылки')
  if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*?<button\b/.test(html)) add('критично', page, 'кнопка внутри ссылки')

  // 4. заголовки
  const h1 = (html.match(/<h1\b/g) || []).length
  if (h1 !== 1) add('критично', page, `h1 на странице: ${h1}`)
  const levels = [...html.matchAll(/<h([1-4])\b/g)].map(m => +m[1])
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) { add('важно', page, `пропуск уровня заголовка: h${levels[i-1]} → h${levels[i]}`); break }
  }

  // 5. JSON-LD
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]) } catch (e) { add('критично', page, `невалидный JSON-LD: ${e.message.slice(0, 60)}`) }
  }

  // 6. мета
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || ''
  if (titles.has(title)) add('важно', page, `title дублирует ${titles.get(title)}`)
  titles.set(title, page)
  if (descs.has(desc)) add('важно', page, `description дублирует ${descs.get(desc)}`)
  descs.set(desc, page)
  if (title.length > 75) add('мелочь', page, `title ${title.length} знаков (норма до ~65)`)
  if (desc.length < 100 || desc.length > 180) add('мелочь', page, `description ${desc.length} знаков`)

  // 7. формы: каждое поле с label
  for (const m of html.matchAll(/<(input|select|textarea)\b[^>]*id="([^"]+)"/g)) {
    if (!html.includes(`for="${m[2]}"`) && !/aria-label/.test(m[0])) add('важно', page, `поле #${m[2]} без label`)
  }

  // 8. текстовые стрелки и галочки
  const glyphs = (html.match(/[→✓✔✕≥]/g) || []).length
  if (glyphs) add('важно', page, `текстовых глифов без поддержки шрифта: ${glyphs}`)

  // 9. апострофы: проектное решение — U+2018/U+2019 (см. scripts-normalize-apostrophes.mjs)
  const badApos = (html.match(/[\u02BB\u02BC]/g) || []).length
  if (badApos) add('важно', page, `модификаторы U+02BB/U+02BC вместо U+2018/U+2019: ${badApos}`)

  // 10. lang и base
  if (!/<html lang="ru">/.test(html)) add('важно', page, 'нет lang на <html>')
}

console.log(`Проверено страниц: ${pages.length}`)
if (!problems.length) console.log('Автопроверка HTML: замечаний нет')
else {
  for (const sev of ['критично', 'важно', 'мелочь']) {
    const list = problems.filter(p => p.sev === sev)
    if (!list.length) continue
    console.log(`\n=== ${sev.toUpperCase()} (${list.length}) ===`)
    list.forEach(p => console.log(`  [${p.page}] ${p.what}`))
  }
}
