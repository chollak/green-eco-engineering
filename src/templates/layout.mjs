import { company, stats } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { icon } from './icons.mjs'

/* ---------- Хелперы двуязычного вывода ---------- */
export function esc (value) {
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Атрибуты data-ru / data-uz для клиентского переключателя языка. */
export function attrs (pair) {
  return `data-ru="${esc(pair.ru)}" data-uz="${esc(pair.uz)}"`
}

/** Двуязычный элемент: в разметке — русский текст, узбекский в data-атрибуте. */
export function bi (tag, className, pair, extra = '') {
  const cls = className ? ` class="${className}"` : ''
  return `<${tag}${cls} ${attrs(pair)}${extra ? ' ' + extra : ''}>${esc(pair.ru)}</${tag}>`
}

/* ---------- Шапка ---------- */
function navMenu (base) {
  const items = sections.map(section =>
    `<a href="${base}services/${section.slug}.html"><b>${section.num}</b><span ${attrs(section.title)}>${esc(section.title.ru)}</span></a>`
  ).join('')

  return `<nav>
  <a href="${base}index.html" class="nav-logo">
    <div class="nav-logo-icon">${icon('bolt')}</div>
    <div class="nav-logo-text">GREEN ECO ENGINEERING<span ${attrs(company.tagline)}>${esc(company.tagline.ru)}</span></div>
  </a>
  <ul class="nav-links">
    <li class="nav-drop">
      <button class="nav-drop-toggle" ${attrs({ ru: 'Услуги', uz: 'Xizmatlar' })}>Услуги</button>
      <div class="nav-drop-menu">${items}</div>
    </li>
    <li><a href="${base}index.html#process" ${attrs({ ru: 'Как работаем', uz: 'Qanday ishlaymiz' })}>Как работаем</a></li>
    <li><a href="${base}index.html#about" ${attrs({ ru: 'О компании', uz: 'Kompaniya haqida' })}>О компании</a></li>
    <li><a href="${base}index.html#industries" ${attrs({ ru: 'Отрасли', uz: 'Sohalar' })}>Отрасли</a></li>
    <li><a href="${base}index.html#contact" ${attrs({ ru: 'Контакты', uz: 'Aloqa' })}>Контакты</a></li>
  </ul>
  <div class="nav-right">
    <div class="lang-toggle">
      <button class="lang-btn active" data-lang="ru">RU</button>
      <button class="lang-btn" data-lang="uz">UZ</button>
    </div>
    <a href="${base}index.html#contact" class="nav-cta" ${attrs({ ru: 'Оставить заявку', uz: 'Ariza qoldirish' })}>Оставить заявку</a>
    <button class="nav-burger" aria-label="Меню"><span></span><span></span><span></span></button>
  </div>
</nav>`
}

/* ---------- Блок контактов с формой ---------- */
export function contactBlock (base) {
  const options = sections.map(section =>
    `<option value="${section.slug}" ${attrs(section.title)}>${esc(section.title.ru)}</option>`
  ).join('')

  return `<section id="contact"><div class="wrap"><div class="contact-grid">
  <div class="reveal">
    ${bi('p', 'section-tag', { ru: 'Контакты', uz: 'Aloqa' })}
    ${bi('h2', 'section-h2', { ru: 'Обсудим ваш объект', uz: 'Obyektingizni muhokama qilamiz' })}
    ${bi('p', 'section-p', {
      ru: 'Опишите задачу — инженер перезвонит, уточнит детали и предложит решение со сметой. Выезд на объект в Ташкенте и области.',
      uz: 'Vazifani tavsiflang — muhandis qo‘ng‘iroq qilib, tafsilotlarni aniqlaydi va smeta bilan yechim taklif qiladi. Toshkent va viloyatga chiqamiz.'
    })}
    <div class="contact-info">
      <div class="contact-item"><div class="contact-item-icon">${icon('phone')}</div><div>
        ${bi('div', 'contact-item-label', { ru: 'Телефон', uz: 'Telefon' })}
        <div class="contact-item-value"><a href="tel:${company.phone}">${company.phoneDisplay}</a></div></div></div>
      <div class="contact-item"><div class="contact-item-icon">${icon('mail')}</div><div>
        ${bi('div', 'contact-item-label', { ru: 'Электронная почта', uz: 'Elektron pochta' })}
        <div class="contact-item-value"><a href="mailto:${company.email}">${company.email}</a></div></div></div>
      <div class="contact-item"><div class="contact-item-icon">${icon('pin')}</div><div>
        ${bi('div', 'contact-item-label', { ru: 'Адрес', uz: 'Manzil' })}
        ${bi('div', 'contact-item-value', company.address)}</div></div>
      <div class="contact-item"><div class="contact-item-icon">${icon('clock')}</div><div>
        ${bi('div', 'contact-item-label', { ru: 'Режим работы', uz: 'Ish tartibi' })}
        ${bi('div', 'contact-item-value', company.workHours)}</div></div>
      <div class="contact-item"><div class="contact-item-icon">${icon('id')}</div><div>
        <div class="contact-item-label">ИНН / STIR</div>
        <div class="contact-item-value">${company.taxId}</div></div></div>
    </div>
  </div>
  <form class="contact-form reveal" id="lead-form" novalidate>
    <div class="form-row">
      <div class="form-group">${bi('label', '', { ru: 'Ваше имя', uz: 'Ismingiz' })}
        <input type="text" id="inp-name" data-ph-ru="Акбар Юсупов" data-ph-uz="Akbar Yusupov" placeholder="Акбар Юсупов" /></div>
      <div class="form-group">${bi('label', '', { ru: 'Компания', uz: 'Kompaniya' })}
        <input type="text" id="inp-company" data-ph-ru="ООО «Пример»" data-ph-uz="«Namuna» MChJ" placeholder="ООО «Пример»" /></div>
    </div>
    <div class="form-group">${bi('label', '', { ru: 'Телефон', uz: 'Telefon' })}
      <input type="tel" id="inp-phone" placeholder="+998 __ ___ __ __" /></div>
    <div class="form-group">${bi('label', '', { ru: 'Направление работ', uz: 'Ish yo‘nalishi' })}
      <select id="inp-service">
        <option value="" ${attrs({ ru: 'Выберите направление', uz: 'Yo‘nalishni tanlang' })}>Выберите направление</option>
        ${options}
      </select></div>
    <div class="form-group">${bi('label', '', { ru: 'Задача', uz: 'Vazifa' })}
      <textarea id="inp-msg" data-ph-ru="Опишите объект и что нужно сделать..." data-ph-uz="Obyektni va nima qilish kerakligini yozing..." placeholder="Опишите объект и что нужно сделать..."></textarea></div>
    <button type="submit" class="btn-primary" style="width:100%;justify-content:center" ${attrs({ ru: 'Отправить заявку →', uz: 'Ariza yuborish →' })}>Отправить заявку →</button>
    <div id="form-error" style="display:none;color:#b23b3b;font-size:.84rem"></div>
    ${bi('div', '', { ru: '✅ Заявка отправлена. Инженер свяжется с вами в рабочее время.', uz: '✅ Ariza yuborildi. Muhandis ish vaqtida bog‘lanadi.' }, 'id="form-success"')}
    ${bi('p', 'form-note', {
      ru: 'Нажимая кнопку, вы соглашаетесь на обработку контактных данных для ответа на заявку.',
      uz: 'Tugmani bosish orqali arizaga javob berish uchun kontakt ma’lumotlaringizni qayta ishlashga rozilik bildirasiz.'
    })}
  </form>
</div></div></section>`
}

/* ---------- CTA-полоса ---------- */
export function ctaStrip (pair, sub) {
  return `<section><div class="wrap"><div class="cta-strip reveal">
  <div>${bi('h3', '', pair)}${sub ? bi('p', '', sub) : ''}</div>
  <a href="tel:${company.phone}" class="btn-primary">${company.phoneDisplay}</a>
</div></div></section>`
}

/* ---------- Подвал ---------- */
function footer (base) {
  const columns = sections.slice(0, 8).map(section =>
    `<li><a href="${base}services/${section.slug}.html" ${attrs(section.title)}>${esc(section.title.ru)}</a></li>`
  ).join('')
  const columns2 = sections.slice(8).map(section =>
    `<li><a href="${base}services/${section.slug}.html" ${attrs(section.title)}>${esc(section.title.ru)}</a></li>`
  ).join('')

  return `<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo">GREEN <span>ECO</span> ENGINEERING</div>
      ${bi('p', 'footer-about', {
        ru: 'Электромонтаж, пусконаладка, электролабораторные испытания, пожарная безопасность и автоматика для предприятий Узбекистана.',
        uz: 'O‘zbekiston korxonalari uchun elektromontaj, ishga tushirish, elektrolaboratoriya sinovlari, yong‘in xavfsizligi va avtomatika.'
      })}
      <div style="margin-top:1.2rem;display:flex;flex-direction:column;gap:.4rem;font-size:.85rem">
        <a href="tel:${company.phone}" style="text-decoration:none">${company.phoneDisplay}</a>
        <a href="mailto:${company.email}" style="text-decoration:none">${company.email}</a>
      </div>
    </div>
    <div class="footer-col">
      ${bi('h4', '', { ru: 'Направления', uz: 'Yo‘nalishlar' })}
      <ul>${columns}</ul>
    </div>
    <div class="footer-col">
      ${bi('h4', '', { ru: 'Ещё направления', uz: 'Yana yo‘nalishlar' })}
      <ul>${columns2}</ul>
    </div>
  </div>
  <div class="footer-bottom">
    ${bi('div', '', {
      ru: `${company.legalName.ru} • ИНН ${company.taxId} • Ташкент, Узбекистан`,
      uz: `${company.legalName.uz} • STIR ${company.taxId} • Toshkent, O‘zbekiston`
    })}
    <div>© ${new Date().getFullYear()} GREEN ECO ENGINEERING</div>
  </div>
</footer>`
}

/* ---------- Каркас страницы ---------- */
export function page ({ base = '', title, description, canonical, jsonLd, body }) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title.ru)}</title>
<meta name="description" content="${esc(description.ru)}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${canonical}" />
<meta property="og:title" content="${esc(title.ru)}" />
<meta property="og:description" content="${esc(description.ru)}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="ru_UZ" />
<meta property="og:url" content="${canonical}" />
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
<link rel="icon" type="image/svg+xml" href="${base}assets/favicon.svg" />
<link rel="stylesheet" href="${base}assets/styles.css" />
</head>
<body data-title-ru="${esc(title.ru)}" data-title-uz="${esc(title.uz)}">
${navMenu(base)}
${body}
${footer(base)}
<script src="${base}assets/site.js"></script>
</body>
</html>`
}

export { stats }
