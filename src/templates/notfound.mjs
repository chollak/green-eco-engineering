// 404. GitHub Pages отдаёт этот файл на любой несуществующий путь.

import { company } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { page, esc, bi, el } from './layout.mjs'
import { icon } from './icons.mjs'

export function notFoundPage () {
  const links = sections.slice(0, 8).map(section =>
    `<a href="services/${section.slug}.html">
      <span class="n" aria-hidden="true">${section.num}</span>
      <span ${bi(section.title)}>${esc(section.title.ru)}</span>
    </a>`
  ).join('')

  const body = `<section class="section section--hero draft-grid">
  <div class="page stack">
    <p class="stamp">HTTP 404 · ${esc(company.legalName.ru)} · ИНН ${company.taxId}</p>
    ${el('h1', 't-display', { ru: 'Страница не найдена', uz: 'Sahifa topilmadi' })}
    ${el('p', 't-lead', {
      ru: 'Адрес устарел или содержит опечатку. Ниже — основные разделы; полный каталог из 109 видов работ открывается одной ссылкой.',
      uz: 'Manzil eskirgan yoki xato yozilgan. Quyida — asosiy bo‘limlar; 109 ta ish turidan iborat to‘liq katalog bitta havola bilan ochiladi.'
    })}
    <div class="hero__actions">
      <a class="btn btn--primary" href="index.html">
        <span ${bi({ ru: 'На главную', uz: 'Bosh sahifaga' })}>На главную</span>
        ${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
      </a>
      <a class="btn btn--ghost" href="services/index.html">
        <span ${bi({ ru: 'Каталог работ', uz: 'Ishlar katalogi' })}>Каталог работ</span>
      </a>
    </div>
    ${el('h2', 't-h3', { ru: 'Основные направления работ', uz: 'Asosiy ish yo‘nalishlari' }, 'id="nf-h"')}
    <nav class="nav-sections" aria-labelledby="nf-h">${links}</nav>
  </div>
</section>`

  return page({
    base: '',
    title: { ru: 'Страница не найдена — GREEN ECO ENGINEERING', uz: 'Sahifa topilmadi — GREEN ECO ENGINEERING' },
    description: { ru: 'Страница не найдена. Откройте каталог из 109 видов работ или главную страницу GREEN ECO ENGINEERING — электромонтаж и электролаборатория в Ташкенте.', uz: 'Sahifa topilmadi. 109 ta ish turidan iborat katalogni yoki GREEN ECO ENGINEERING bosh sahifasini oching.' },
    canonical: `${company.baseUrl}404.html`,
    jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Страница не найдена' },
    body
  })
}
