// services/index.html — весь каталог работ одним документом с фильтром.
// Каталог сгруппирован по кластерам жизненного цикла объекта, а не по алфавиту:
// алфавитный список читается как выгрузка из прайса.

import { company } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { groups, groupSections } from '../data/groups.mjs'
import { SECTION_COUNT, SERVICE_COUNT, pluralKind } from '../data/counts.mjs'
import { page, esc, bi, el } from './layout.mjs'
import { icon } from './icons.mjs'
import { rubric, contactBand } from './components.mjs'

const code = (section, index) => `${section.num}.${String(index + 1).padStart(2, '0')}`

function groupBlock (group) {
  const items = groupSections(group, sections).map(section => `<article class="dir-tile" data-item
    data-title="${esc(section.title.ru.toLowerCase())} ${esc(section.title.uz.toLowerCase())}"
    data-services="${esc(section.services.map(s => `${s.ru} ${s.uz}`).join(' ').toLowerCase())}">
    <span class="dir-tile__num" aria-hidden="true">${section.num}</span>
    <h3 class="t-h3"><a href="${section.slug}.html" ${bi(section.title)}>${esc(section.title.ru)}</a></h3>
    <ol class="svc-list">${section.services.map((service, index) => `<li class="svc-item">
      <span class="svc-item__code">${code(section, index)}</span>
      <span ${bi(service)}>${esc(service.ru)}</span>
    </li>`).join('')}</ol>
    <span class="dir-tile__foot">
      <span class="label" ${bi({ ru: `${section.services.length} видов работ`, uz: `${section.services.length} ta ish turi` })}>${section.services.length} ${pluralKind(section.services.length)} работ</span>
      <a href="${section.slug}.html" class="label" ${bi({ ru: 'К разделу', uz: 'Bo‘limga' })}>К разделу</a>
    </span>
  </article>`).join('')

  return `<section class="section" id="${group.id}" data-group="${group.id}" aria-labelledby="g-${group.id}">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        <div class="group-head">
          <span class="group-head__num" aria-hidden="true">${group.num}</span>
          ${el('h2', 't-h2', group.title, `id="g-${group.id}"`)}
        </div>
      </div>
      ${el('p', 't-lead', group.lead)}
    </div>
    <div class="panel panel--2" data-reveal>${items}</div>
  </div>
</section>`
}

export function catalogPage () {
  const tags = groups.map(group =>
    `<button type="button" class="filter__tag" data-filter="${group.id}" aria-pressed="false" ${bi(group.title)}>${esc(group.title.ru)}</button>`
  ).join('')

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: company.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${company.baseUrl}services/index.html` }
    ]
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Каталог работ GREEN ECO ENGINEERING',
    numberOfItems: sections.length,
    itemListElement: sections.map((section, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: section.title.ru,
      url: `${company.baseUrl}services/${section.slug}.html`
    }))
  }

  const body = `<section class="section section--hero draft-grid" aria-labelledby="cat-h">
  <div class="page stack">
    <nav class="crumbs label" aria-label="Хлебные крошки">
      <a href="../index.html" ${bi({ ru: 'Главная', uz: 'Bosh sahifa' })}>Главная</a>
      <span class="crumbs__sep" aria-hidden="true">/</span>
      <span ${bi({ ru: 'Услуги', uz: 'Xizmatlar' })}>Услуги</span>
    </nav>
    <p class="stamp">${esc(company.legalName.ru)} · ИНН ${company.taxId} · ${SECTION_COUNT} РАЗДЕЛОВ · ${SERVICE_COUNT} ВИДОВ РАБОТ</p>
    ${el('h1', 't-display', { ru: 'Каталог работ', uz: 'Ishlar katalogi' }, 'id="cat-h"')}
    ${el('p', 't-lead', {
      ru: 'Полный перечень: 17 направлений, 109 видов работ. Сгруппированы по этапу жизни объекта — от ввода питания до эксплуатации, а не по алфавиту.',
      uz: 'To‘liq ro‘yxat: 17 yo‘nalish, 109 ta ish turi. Alifbo bo‘yicha emas, obyekt hayoti bosqichi bo‘yicha guruhlangan — quvvat kiritishdan ekspluatatsiyagacha.'
    })}
    <div class="filter">
      <label class="visually-hidden" for="filter-input" ${bi({ ru: 'Поиск по каталогу', uz: 'Katalog bo‘yicha qidiruv' })}>Поиск по каталогу</label>
      <input type="search" id="filter-input" class="filter__input" data-filter-input
        data-ph-ru="Поиск: заземление, ВРУ, муфта, УЗО…" data-ph-uz="Qidiruv: yerga ulash, VRU, mufta, UZO…"
        placeholder="Поиск: заземление, ВРУ, муфта, УЗО…">
      <div class="filter__tags">
        <button type="button" class="filter__tag" data-filter="all" aria-pressed="true" ${bi({ ru: 'Все направления', uz: 'Barcha yo‘nalishlar' })}>Все направления</button>
        ${tags}
      </div>
      <p class="filter__count" data-filter-count aria-live="polite"></p>
    </div>
  </div>
</section>

${groups.map(groupBlock).join('\n')}

${contactBand('../')}`

  return page({
    base: '../',
    title: {
      ru: 'Каталог работ: 17 направлений, 109 видов — GREEN ECO ENGINEERING',
      uz: 'Ishlar katalogi: 17 yo‘nalish, 109 tur — GREEN ECO ENGINEERING'
    },
    description: {
      ru: `Полный каталог электромонтажных работ: монтаж и высоковольтные работы, пусконаладка, электролаборатория, пожарная безопасность, автоматика, обслуживание. ${SERVICE_COUNT} ${pluralKind(SERVICE_COUNT)} работ.`,
      uz: 'Elektromontaj ishlarining to‘liq katalogi: montaj va yuqori kuchlanish, ishga tushirish, elektrolaboratoriya, yong‘in xavfsizligi, avtomatika, xizmat ko‘rsatish. 109 ta ish turi.'
    },
    canonical: `${company.baseUrl}services/index.html`,
    jsonLd: [jsonLd, breadcrumbs],
    body
  })
}
