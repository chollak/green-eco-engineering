import { company } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { icon } from './icons.mjs'
import { page, bi, attrs, esc, contactBlock, ctaStrip } from './layout.mjs'

function servicesList (section) {
  return section.services
    .map(service => `<div class="svc-item reveal" ${attrs(service)}>${esc(service.ru)}</div>`)
    .join('')
}

function sideCard (section) {
  return `<aside class="side-card reveal">
    ${bi('h3', '', { ru: 'Нужен расчёт?', uz: 'Hisob-kitob kerakmi?' })}
    ${bi('p', '', {
      ru: `Опишите объект — подготовим смету по направлению «${section.title.ru}» и назовём срок.`,
      uz: `Obyektni tavsiflang — «${section.title.uz}» yo‘nalishi bo‘yicha smeta tayyorlab, muddatni aytamiz.`
    })}
    <div class="side-contact">
      <a href="tel:${company.phone}">${icon('phone')}${company.phoneDisplay}</a>
      <a href="mailto:${company.email}">${icon('mail')}${company.email}</a>
    </div>
    <a href="#contact" class="btn-primary" style="width:100%;justify-content:center" ${attrs({ ru: 'Оставить заявку', uz: 'Ariza qoldirish' })}>Оставить заявку</a>
  </aside>`
}

function otherSections (current) {
  const links = sections.map(section => {
    const cls = section.slug === current.slug ? 'other-link current' : 'other-link'
    return `<a class="${cls}" href="${section.slug}.html"><b>${section.num}</b><span ${attrs(section.title)}>${esc(section.title.ru)}</span></a>`
  }).join('')

  return `<section class="other-sections"><div class="wrap">
    <div class="reveal">
      ${bi('p', 'section-tag', { ru: 'Каталог', uz: 'Katalog' })}
      ${bi('h2', 'section-h2', { ru: 'Другие направления', uz: 'Boshqa yo‘nalishlar' })}
    </div>
    <div class="other-grid">${links}</div>
  </div></section>`
}

export function sectionPage (section) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: section.title.ru,
    serviceType: section.title.ru,
    description: section.short.ru,
    url: `${company.baseUrl}services/${section.slug}.html`,
    areaServed: { '@type': 'Country', name: 'Узбекистан' },
    provider: {
      '@type': 'Organization',
      name: company.name,
      taxID: company.taxId,
      telephone: company.phone,
      url: company.baseUrl
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: section.title.ru,
      itemListElement: section.services.map(service => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.ru }
      }))
    }
  }

  const body = `<section class="hero page-hero">
  <div class="hero-bg-grid"></div><div class="hero-glow"></div>
  <div class="hero-inner">
    <div class="breadcrumbs">
      <a href="../index.html" ${attrs({ ru: 'Главная', uz: 'Bosh sahifa' })}>Главная</a><span>/</span>
      <a href="../index.html#catalog" ${attrs({ ru: 'Услуги', uz: 'Xizmatlar' })}>Услуги</a><span>/</span>
      <span ${attrs(section.title)}>${esc(section.title.ru)}</span>
    </div>
    <div class="page-hero-num" ${attrs({ ru: `Раздел ${section.num}`, uz: `${section.num}-bo‘lim` })}>Раздел ${section.num}</div>
    <h1 ${attrs(section.title)}>${esc(section.title.ru)}</h1>
    ${bi('p', 'lead', section.intro)}
    <div class="hero-actions" style="margin-top:2rem">
      <a href="#contact" class="btn-primary" ${attrs({ ru: 'Получить смету', uz: 'Smeta olish' })}>Получить смету</a>
      <a href="tel:${company.phone}" class="btn-outline">${company.phoneDisplay}</a>
    </div>
  </div>
</section>

<section><div class="wrap svc-layout">
  <div>
    <div class="reveal" style="margin-bottom:1.8rem">
      ${bi('p', 'section-tag', { ru: 'Состав работ', uz: 'Ishlar tarkibi' })}
      ${bi('h2', 'section-h2', { ru: 'Что входит в направление', uz: 'Yo‘nalishga nimalar kiradi' })}
    </div>
    <div class="svc-list">${servicesList(section)}</div>
  </div>
  ${sideCard(section)}
</div></section>

${ctaStrip(
    { ru: 'Выезд инженера и оценка объёма — бесплатно', uz: 'Muhandis chiqishi va hajmni baholash — bepul' },
    { ru: 'Работаем по Ташкенту и всей территории Узбекистана. Аварийные выезды — круглосуточно.', uz: 'Toshkent va butun O‘zbekiston bo‘ylab ishlaymiz. Avariya chaqiruvlari — kunu tun.' }
  )}

${otherSections(section)}

${contactBlock('../')}`

  return page({
    base: '../',
    title: {
      ru: `${section.title.ru} — GREEN ECO ENGINEERING`,
      uz: `${section.title.uz} — GREEN ECO ENGINEERING`
    },
    description: { ru: section.short.ru, uz: section.short.uz },
    canonical: `${company.baseUrl}services/${section.slug}.html`,
    jsonLd,
    body
  })
}
