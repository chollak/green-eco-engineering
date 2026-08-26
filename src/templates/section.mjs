// Страница направления работ. Одна на каждый из 17 разделов.

import { company } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { groups } from '../data/groups.mjs'
import { enrichment } from '../data/enrichment.mjs'
import { page, esc, bi, el } from './layout.mjs'
import { icon } from './icons.mjs'
import { plate, rubric, faqList, faqJsonLd, contactBand } from './components.mjs'

const BRAND = ' — GREEN ECO ENGINEERING'

/** Бренд в title дописывается, только если строка остаётся в пределах выдачи (~65 знаков). */
function withBrand (title) {
  return title.length + BRAND.length <= 65 ? title + BRAND : title
}

/** Шифр вида работ: 03.04 — раздел и порядковый номер. Инженер цитирует его в заявке. */
const code = (section, index) => `${section.num}.${String(index + 1).padStart(2, '0')}`

function servicesBlock (section) {
  return `<ol class="svc-list">${section.services.map((service, index) => `<li class="svc-item">
    <span class="svc-item__code">${code(section, index)}</span>
    <span ${bi(service)}>${esc(service.ru)}</span>
  </li>`).join('')}</ol>`
}

function asideCard (section, extra) {
  return `<aside class="aside-card doc-layout__aside">
  ${el('h2', 't-h3', { ru: 'Посчитать объём работ', uz: 'Ish hajmini hisoblash' })}
  ${el('p', 't-small', {
    ru: `Пришлите ТЗ, однолинейную схему или просто опишите объект — вернём смету по направлению «${section.title.ru}» с разбивкой по позициям.`,
    uz: `TT, bir chiziqli sxema yuboring yoki obyektni tavsiflang — «${section.title.uz}» yo‘nalishi bo‘yicha pozitsiyalarga bo‘lingan smeta qaytaramiz.`
  })}
  <a class="btn btn--primary btn--block" href="#contact">
    <span ${bi({ ru: 'Запросить смету', uz: 'Smeta so‘rash' })}>Запросить смету</span>
    ${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
  </a>
  <a class="btn btn--ghost btn--block" href="tel:${company.phone}">
    ${icon('phone', { size: 18, cls: 'icon' })}<span>${company.phoneDisplay}</span>
  </a>
  ${plate([
    { key: { ru: 'Видов работ', uz: 'Ish turlari' }, value: { ru: String(section.services.length), uz: String(section.services.length) } },
    { key: { ru: 'Шифр раздела', uz: 'Bo‘lim shifri' }, value: { ru: section.num, uz: section.num } },
    { key: { ru: 'Смета', uz: 'Smeta' }, value: { ru: '1–2 рабочих дня', uz: '1–2 ish kuni' } },
    { key: { ru: 'География', uz: 'Geografiya' }, value: company.addressShort }
  ])}
  ${extra}
</aside>`
}

function neighbours (current) {
  const group = groups.find(item => item.slugs.includes(current.slug))
  const items = sections.map(section => `<a href="${section.slug}.html"${section.slug === current.slug ? ' aria-current="page"' : ''}>
    <span class="n" aria-hidden="true">${section.num}</span>
    <span ${bi(section.title)}>${esc(section.title.ru)}</span>
  </a>`).join('')

  return `<section class="section" aria-labelledby="others-h">
  <div class="page stack">
    <div>
      ${rubric(group ? group.title : { ru: 'Каталог', uz: 'Katalog' })}
      ${el('h2', 't-h2', { ru: 'Все направления работ', uz: 'Barcha ish yo‘nalishlari' }, 'id="others-h"')}
    </div>
    <nav class="nav-sections" aria-label="Другие направления">${items}</nav>
  </div>
</section>`
}

export function sectionPage (section) {
  const extra = enrichment[section.slug]
  const faqItems = extra ? extra.faq : []

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: section.title.ru,
    serviceType: section.title.ru,
    description: (extra ? extra.seoDescription.ru : section.short.ru),
    url: `${company.baseUrl}services/${section.slug}.html`,
    areaServed: { '@type': 'Country', name: 'Узбекистан' },
    provider: {
      '@type': 'ElectricalContractor',
      name: company.name,
      taxID: company.taxId,
      telephone: company.phone,
      url: company.baseUrl
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: section.title.ru,
      itemListElement: section.services.map(item => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: item.ru }
      }))
    }
  }

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: company.baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: `${company.baseUrl}services/index.html` },
      { '@type': 'ListItem', position: 3, name: section.title.ru, item: `${company.baseUrl}services/${section.slug}.html` }
    ]
  }

  const body = `<section class="section section--hero draft-grid" aria-labelledby="doc-h">
  <div class="page stack">
    <nav class="crumbs label" aria-label="Хлебные крошки">
      <a href="../index.html" ${bi({ ru: 'Главная', uz: 'Bosh sahifa' })}>Главная</a>
      <span class="crumbs__sep" aria-hidden="true">/</span>
      <a href="index.html" ${bi({ ru: 'Услуги', uz: 'Xizmatlar' })}>Услуги</a>
      <span class="crumbs__sep" aria-hidden="true">/</span>
      <span ${bi(section.title)}>${esc(section.title.ru)}</span>
    </nav>
    <p class="stamp" ${bi({
      ru: `РАЗДЕЛ ${section.num} · ${section.services.length} ВИДОВ РАБОТ · ${company.legalName.ru} · ИНН ${company.taxId}`,
      uz: `${section.num}-BO‘LIM · ${section.services.length} TA ISH TURI · ${company.legalName.uz} · STIR ${company.taxId}`
    })}>РАЗДЕЛ ${section.num} · ${section.services.length} ВИДОВ РАБОТ · ${esc(company.legalName.ru)} · ИНН ${company.taxId}</p>
    ${el('h1', 't-display', section.title, 'id="doc-h"')}
    ${el('p', 't-lead', section.intro)}
    <div class="hero__actions">
      <a class="btn btn--primary" href="#contact">
        <span ${bi({ ru: 'Запросить смету', uz: 'Smeta so‘rash' })}>Запросить смету</span>
        ${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
      </a>
      <a class="btn btn--ghost" href="tel:${company.phone}">
        ${icon('phone', { size: 18, cls: 'icon' })}<span>${company.phoneDisplay}</span>
      </a>
    </div>
  </div>
</section>

<section class="section section--major" aria-labelledby="scope-h">
  <div class="page doc-layout">
    <div class="stack stack--wide">
      <div>
        ${rubric({ ru: 'Состав работ', uz: 'Ishlar tarkibi' })}
        ${el('h2', 't-h2', { ru: 'Что входит в направление', uz: 'Yo‘nalishga nimalar kiradi' }, 'id="scope-h"')}
      </div>
      ${servicesBlock(section)}

      ${extra ? `<div>
        ${el('h3', 'label', { ru: 'Что получает заказчик', uz: 'Buyurtmachi nima oladi' })}
        <ul class="check-list" style="margin-top:var(--s3)">${extra.outcomes.map(item =>
          `<li>${icon('check', { size: 18, cls: 'icon' })}<span ${bi(item)}>${esc(item.ru)}</span></li>`
        ).join('')}</ul>
      </div>` : ''}

      ${extra ? `<div>
        ${el('h3', 'label', { ru: 'Типовые объекты', uz: 'Tipik obyektlar' })}
        ${el('p', 't-body', extra.objects, 'style="margin-top:var(--s2)"')}
      </div>` : ''}
    </div>
    ${asideCard(section, '')}
  </div>
</section>

${faqItems.length ? `<section class="section surface--sunk" aria-labelledby="sfaq-h">
  <div class="page stack">
    <div>
      ${rubric({ ru: 'Вопросы по направлению', uz: 'Yo‘nalish bo‘yicha savollar' })}
      ${el('h2', 't-h2', { ru: 'Что спрашивают до заказа', uz: 'Buyurtmadan oldin nima so‘rashadi' }, 'id="sfaq-h"')}
    </div>
    ${faqList(faqItems, `faq-${section.slug}`)}
  </div>
</section>` : ''}

${neighbours(section)}

${contactBand('../')}`

  return page({
    base: '../',
    title: {
      ru: withBrand(extra ? extra.seoTitle.ru : section.title.ru),
      uz: withBrand(extra ? extra.seoTitle.uz : section.title.uz)
    },
    description: extra ? extra.seoDescription : section.short,
    canonical: `${company.baseUrl}services/${section.slug}.html`,
    jsonLd: faqItems.length ? [service, breadcrumbs, faqJsonLd(faqItems)] : [service, breadcrumbs],
    body
  })
}
