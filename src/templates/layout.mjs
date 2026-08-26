// Каркас страницы: <head>, шапка, строка режима, мобильная панель, футер.
// Все ссылки строго относительные — сайт живёт по подпути /green-eco-engineering/.

import { company } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { groups } from '../data/groups.mjs'
import { icon } from './icons.mjs'

/* ------------------------------------------------ двуязычные помощники */

export function esc (value) {
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Атрибуты для клиентского переключателя языка. */
export function bi (pair) {
  return `data-ru="${esc(pair.ru)}" data-uz="${esc(pair.uz)}"`
}

/** Двуязычный элемент: в разметке русский текст, узбекский — в data-uz. */
export function el (tag, cls, pair, extra = '') {
  const c = cls ? ` class="${cls}"` : ''
  const e = extra ? ' ' + extra : ''
  return `<${tag}${c} ${bi(pair)}${e}>${esc(pair.ru)}</${tag}>`
}

/* ------------------------------------------------------------- шапка */

const NAV = [
  { href: 'services/index.html', text: { ru: 'Услуги', uz: 'Xizmatlar' } },
  { href: 'services/elektrolaboratoriya.html', text: { ru: 'Электролаборатория', uz: 'Elektrolaboratoriya' } },
  { href: 'index.html#credentials', text: { ru: 'Документы и допуски', uz: 'Hujjatlar va ruxsatlar' } },
  { href: 'index.html#plate', text: { ru: 'Компания', uz: 'Kompaniya' } },
  { href: 'index.html#contact', text: { ru: 'Контакты', uz: 'Aloqa' } }
]

const BRAND_MARK = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false"><path d="M1 9h16" stroke="currentColor" stroke-width="1.5"/><rect x="6" y="6" width="6" height="6" fill="currentColor"/><path d="M9 1v5M9 12v5" stroke="currentColor" stroke-width="1.5"/></svg>`

function header (base) {
  const nav = NAV.map(item =>
    `<a class="site-nav__link" href="${base}${item.href}" ${bi(item.text)}>${esc(item.text.ru)}</a>`
  ).join('')

  return `<header class="site-header" data-header>
  <div class="site-header__inner">
    <a class="brand" href="${base || './'}">
      <span class="brand__mark">${BRAND_MARK}</span>
      <span class="brand__name">GREEN ECO ENGINEERING</span>
    </a>
    <nav class="site-nav" data-aria-ru="Основная навигация" data-aria-uz="Asosiy navigatsiya" aria-label="Основная навигация">${nav}</nav>
    <div class="header-actions">
      <a class="header-phone" href="tel:${company.phone}">${company.phoneDisplay}</a>
      <div class="lang" role="group" aria-label="Язык сайта">
        <button type="button" class="lang__btn is-active" data-lang-switch="ru" aria-pressed="true">RU</button>
        <button type="button" class="lang__btn" data-lang-switch="uz" aria-pressed="false">UZ</button>
      </div>
      <button type="button" class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="nav-panel"
        data-aria-ru="Меню" data-aria-uz="Menyu" aria-label="Меню">
        <span class="icon-menu">${icon('menu', { size: 22 })}</span>
        <span class="icon-close">${icon('close', { size: 22 })}</span>
      </button>
    </div>
  </div>
</header>

<div class="mode-bar">
  <div class="mode-bar__inner" tabindex="0" role="group"
    data-aria-ru="Режим работы компании" data-aria-uz="Kompaniya ish tartibi" aria-label="Режим работы компании">
    <span class="mode-bar__item"><span class="mode-bar__mark"></span><span ${bi({ ru: 'Ташкент', uz: 'Toshkent' })}>Ташкент</span></span>
    <span class="mode-bar__item">UTC+5<span data-clock></span></span>
    <span class="mode-bar__item" ${bi({ ru: 'Электролаборатория: приём заявок', uz: 'Elektrolaboratoriya: ariza qabul qilinadi' })}>Электролаборатория: приём заявок</span>
    <span class="mode-bar__item" ${bi({ ru: 'Пн–Сб 09:00–18:00', uz: 'Du–Sha 09:00–18:00' })}>Пн–Сб 09:00–18:00</span>
    <span class="mode-bar__item" ${bi({ ru: 'Аварийные выезды 24/7', uz: 'Avariya chaqiruvlari 24/7' })}>Аварийные выезды 24/7</span>
  </div>
</div>

<div class="nav-panel" id="nav-panel" data-nav-panel>
  <nav class="nav-panel__list" data-aria-ru="Мобильная навигация" data-aria-uz="Mobil navigatsiya" aria-label="Мобильная навигация">
    ${NAV.map(item => `<a class="nav-panel__link" href="${base}${item.href}">
      <span ${bi(item.text)}>${esc(item.text.ru)}</span>${icon('arrowRight', { size: 18, cls: 'icon' })}
    </a>`).join('')}
    <a class="nav-panel__link" href="tel:${company.phone}">
      <span>${company.phoneDisplay}</span>${icon('phone', { size: 18, cls: 'icon' })}
    </a>
  </nav>
</div>`
}

/* -------------------------------------------------------------- футер */

function footer (base) {
  const catalogLinks = groups.map(group => `<div class="footer-col">
    ${el('h2', 'label footer-col__title', group.title)}
    <ul>${group.slugs.map(slug => {
      const section = sections.find(item => item.slug === slug)
      return `<li><a href="${base}services/${section.slug}.html" ${bi(section.title)}>${esc(section.title.ru)}</a></li>`
    }).join('')}</ul>
  </div>`).join('')

  return `<footer class="site-footer draft-grid">
  <div class="page">
    <div class="footer-grid">
      <div>
        <div class="brand" style="margin-bottom:var(--s3)">
          <span class="brand__mark">${BRAND_MARK}</span>
          <span class="brand__name">GREEN ECO ENGINEERING</span>
        </div>
        ${el('p', 't-small', {
          ru: 'Электромонтаж, пусконаладка, электролабораторные испытания, пожарная безопасность и автоматика для промышленных и коммерческих объектов Узбекистана.',
          uz: 'O‘zbekistonning sanoat va tijorat obyektlari uchun elektromontaj, ishga tushirish, elektrolaboratoriya sinovlari, yong‘in xavfsizligi va avtomatika.'
        })}
        <dl class="plate" style="margin-top:var(--s4)">
          <div class="plate__row"><dt class="plate__key">ИНН / STIR</dt><dd class="plate__val">${company.taxId}</dd></div>
          <div class="plate__row"><dt class="plate__key" ${bi({ ru: 'Телефон', uz: 'Telefon' })}>Телефон</dt><dd class="plate__val"><a href="tel:${company.phone}">${company.phoneDisplay}</a></dd></div>
          <div class="plate__row"><dt class="plate__key">E-mail</dt><dd class="plate__val"><a href="mailto:${company.email}">${company.email}</a></dd></div>
        </dl>
      </div>
      ${catalogLinks}
    </div>
    <div class="footer-bottom">
      ${el('span', 'label', {
        ru: `${company.legalName.ru} · ИНН ${company.taxId} · ${company.addressShort.ru}`,
        uz: `${company.legalName.uz} · STIR ${company.taxId} · ${company.addressShort.uz}`
      })}
      <span class="label">© ${new Date().getFullYear()} · <a href="${base}sitemap.xml" style="text-decoration:underline">sitemap.xml</a></span>
    </div>
  </div>
</footer>`
}

/* ------------------------------------------------------ каркас страницы */

export function page ({ base = '', title, description, canonical, jsonLd, body, bodyClass = '', noindex = false }) {
  const ld = Array.isArray(jsonLd) ? jsonLd : [jsonLd]

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<script>document.documentElement.className='js'</script>
<title>${esc(title.ru)}</title>
<meta name="description" content="${esc(description.ru)}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}">
<link rel="canonical" href="${canonical}">
<link rel="sitemap" type="application/xml" href="${company.baseUrl}sitemap.xml">
<meta property="og:type" content="website">
<meta property="og:site_name" content="GREEN ECO ENGINEERING">
<meta property="og:title" content="${esc(title.ru)}">
<meta property="og:description" content="${esc(description.ru)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="ru_UZ">
<meta property="og:locale:alternate" content="uz_UZ">
<meta property="og:image" content="${company.baseUrl}assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="GREEN ECO ENGINEERING — электромонтаж, пусконаладка и электролаборатория">
<meta name="twitter:card" content="summary_large_image">
${ld.map(item => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join('\n')}
<link rel="icon" type="image/svg+xml" href="${base}assets/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&amp;family=IBM+Plex+Sans:wdth,wght@75..100,400..700&amp;display=swap">
<link rel="stylesheet" href="${base}assets/styles.css">
</head>
<body${bodyClass ? ` class="${bodyClass}"` : ''}
  data-title-ru="${esc(title.ru)}" data-title-uz="${esc(title.uz)}"
  data-desc-ru="${esc(description.ru)}" data-desc-uz="${esc(description.uz)}">
<a class="skip-link" href="#main" ${bi({ ru: 'Перейти к содержанию', uz: 'Kontentga o‘tish' })}>Перейти к содержанию</a>
${header(base)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(base)}
<script src="${base}assets/site.js" defer></script>
</body>
</html>`
}

export { company, sections, groups, icon }
