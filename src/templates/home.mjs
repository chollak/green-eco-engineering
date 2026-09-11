// Главная страница. Порядок секций задан дизайн-спецификацией «ПРОТОКОЛ»:
// сначала проверяемые факты, потом каталог, и только затем текст о компании.

import { company, commitments, stats, industries } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { groups } from '../data/groups.mjs'
import { content } from '../data/content.mjs'
import { enrichment } from '../data/enrichment.mjs'
import { SECTION_COUNT, SERVICE_COUNT, KEY_SLUGS, KEY_COUNT, REST_COUNT, pluralKind } from '../data/counts.mjs'
import { page, esc, bi, el } from './layout.mjs'
import { icon } from './icons.mjs'
import {
  plate, passportPlate, standardChips, rubric,
  faqList, faqJsonLd, contactBand, sldDiagram, sldLegend, photoFigure
} from './components.mjs'

const bySlug = slug => sections.find(item => item.slug === slug)

/* ------------------------------------------------------- 01. Титульный блок */

function hero () {
  const items = commitments.map(item => `<div class="commit__item">
    <span class="label" ${bi(item.label)}>${esc(item.label.ru)}</span>
    <span class="commit__value" ${bi(item.value)}>${esc(item.value.ru)}</span>
  </div>`).join('')

  return `<section class="section section--hero draft-grid" aria-labelledby="hero-h">
  <div class="page stack stack--wide">
    <div>
      <p class="stamp" ${bi({
        ru: `${company.legalName.ru} · ИНН ${company.taxId} · РЕГ. ${company.registered} · ТАШКЕНТ`,
        uz: `${company.legalName.uz} · STIR ${company.taxId} · RO‘YXAT ${company.registered} · TOSHKENT`
      })}>${esc(company.legalName.ru)} · ИНН ${company.taxId} · РЕГ. ${company.registered} · ТАШКЕНТ</p>
      <h1 class="t-display" id="hero-h" ${bi({
        ru: `${content.hero.headline.ru} ${content.hero.headlineAccent.ru}`,
        uz: `${content.hero.headline.uz} ${content.hero.headlineAccent.uz}`
      })}>${esc(content.hero.headline.ru)} ${esc(content.hero.headlineAccent.ru)}</h1>
    </div>
    ${el('p', 't-lead', content.hero.lead)}
    <div class="commit" data-reveal>${items}</div>
    <div class="hero__actions">
      <a class="btn btn--primary" href="#contact">
        <span ${bi(content.hero.cta1)}>${esc(content.hero.cta1.ru)}</span>${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
      </a>
      <a class="btn btn--ghost" href="tel:${company.phone}">
        ${icon('phone', { size: 18, cls: 'icon' })}<span>${company.phoneDisplay}</span>
      </a>
    </div>
    <p class="emergency">${icon('bolt', { size: 16 })}
      <span ${bi({ ru: 'Аварийная служба', uz: 'Avariya xizmati' })}>Аварийная служба</span> <b>24/7</b>
    </p>
  </div>
</section>`
}

/* --------------------------------------------- 02. Технический паспорт */

function passportSection () {
  const statItems = stats.map(stat => `<div class="stat">
    <span class="stat__value">${esc(stat.value)}${stat.unit ? `<span class="stat__unit" ${bi(stat.unit)}>${esc(stat.unit.ru)}</span>` : ''}</span>
    <span class="label stat__label" ${bi(stat.label)}>${esc(stat.label.ru)}</span>
  </div>`).join('')

  return `<section class="section" id="plate" aria-labelledby="plate-h">
  <div class="page layout-a">
    <p class="coord" aria-hidden="true">02</p>
    <div class="stack stack--wide">
      <div>
        ${rubric({ ru: 'Технический паспорт', uz: 'Texnik pasport' })}
        ${el('h2', 't-h2', { ru: 'Проверяемые данные компании', uz: 'Kompaniyaning tekshiriladigan ma’lumotlari' }, 'id="plate-h"')}
      </div>
      <div data-reveal>${passportPlate()}</div>
      <div class="stat-strip" data-reveal>${statItems}</div>
      <div>
        ${el('p', 'label', { ru: 'Работаем по нормам', uz: 'Me’yorlar bo‘yicha ishlaymiz' })}
        <div style="margin-top:var(--s2)">${standardChips()}</div>
      </div>
    </div>
  </div>
</section>`
}

/* --------------------------------------------------------- 03. Каталог */

function catalogSection () {
  const tiles = KEY_SLUGS.map(slug => {
    const section = bySlug(slug)
    const first = section.services.slice(0, 3)
    return `<a class="dir-tile" href="services/${section.slug}.html">
      <span class="dir-tile__num" aria-hidden="true">${section.num}</span>
      ${el('h3', 't-h3', section.title)}
      <ul class="dir-tile__list">${first.map(service =>
        `<li ${bi(service)}>${esc(service.ru)}</li>`
      ).join('')}</ul>
      <span class="dir-tile__foot">
        <span class="label" ${bi({ ru: `${section.services.length} видов работ`, uz: `${section.services.length} ta ish turi` })}>${section.services.length} ${pluralKind(section.services.length)} работ</span>
        ${icon('arrowRight', { size: 18, cls: 'icon' })}
      </span>
    </a>`
  }).join('')

  const rest = sections.filter(section => !KEY_SLUGS.includes(section.slug))
  const rows = rest.map(section => `<a class="dir-row" href="services/${section.slug}.html">
    <span class="dir-row__num" aria-hidden="true">${section.num}</span>
    <span class="dir-row__title" ${bi(section.title)}>${esc(section.title.ru)}</span>
    <span class="dir-row__count">${section.services.length}</span>
  </a>`).join('')

  return `<section class="section section--major" id="catalog" aria-labelledby="catalog-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: `Каталог · ${SERVICE_COUNT} ${pluralKind(SERVICE_COUNT)} работ`, uz: `Katalog · ${SERVICE_COUNT} ta ish turi` })}
        ${el('h2', 't-h2', { ru: `${SECTION_COUNT} направлений под одним договором`, uz: `Bitta shartnoma ostida ${SECTION_COUNT} yo‘nalish` }, 'id="catalog-h"')}
      </div>
      ${el('p', 't-lead', {
        ru: `Основные направления — крупным планом (${KEY_COUNT}). Остальные ${REST_COUNT} закрывают смежные системы объекта: от кранового хозяйства до слаботочки.`,
        uz: `Asosiy yo‘nalishlar — yiriklashtirilgan (${KEY_COUNT} ta). Qolgan ${REST_COUNT} tasi obyektning qo‘shni tizimlarini qamrab oladi: kran xo‘jaligidan kuchsiz tok tizimlarigacha.`
      })}
    </div>
    <div class="dir-tiles" data-reveal>${tiles}</div>
    <div class="dir-rows" data-reveal>${rows}</div>
    <p><a class="btn btn--ghost" href="services/index.html">
      <span ${bi({ ru: `Все ${SERVICE_COUNT} ${pluralKind(SERVICE_COUNT)} работ одним списком`, uz: `Barcha ${SERVICE_COUNT} ta ish turi bitta ro‘yxatda` })}>Все ${SERVICE_COUNT} ${pluralKind(SERVICE_COUNT)} работ одним списком</span>
      ${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
    </a></p>
  </div>
</section>`
}

/* ---------------------------------------------------- 04. Цепь энергии */

const CHAIN = [
  { stage: { ru: 'Ввод', uz: 'Kirish' }, slug: 'vysokovoltnye-raboty', note: { ru: '6/10 кВ, ТП и КТП, ячейки, силовые трансформаторы', uz: '6/10 kV, TP va KTP, yacheykalar, kuch transformatorlari' } },
  { stage: { ru: 'Распределение', uz: 'Taqsimlash' }, slug: 'elektromontazhnye-raboty', note: { ru: 'ВРУ и ГРЩ, шинопроводы, внутренние и наружные сети', uz: 'VRU va GRSH, shinoprovodlar, ichki va tashqi tarmoqlar' } },
  { stage: { ru: 'Трассы', uz: 'Trassalar' }, slug: 'kabelnye-seti', note: { ru: 'силовые и контрольные кабели, муфты, поиск повреждений', uz: 'kuch va nazorat kabellari, muftalar, shikastlanishlarni topish' } },
  { stage: { ru: 'Потребители', uz: 'Iste’molchilar' }, slug: 'osveshchenie', note: { ru: 'освещение, электродвигатели, крановое хозяйство', uz: 'yoritish, elektr dvigatellar, kran xo‘jaligi' } },
  { stage: { ru: 'Резерв', uz: 'Zaxira' }, slug: 'rezervnoe-elektrosnabzhenie', note: { ru: 'ДГУ, ИБП, АВР и солнечные электростанции', uz: 'DGU, UPS, AVR va quyosh elektr stansiyalari' } },
  { stage: { ru: 'Управление', uz: 'Boshqaruv' }, slug: 'avtomatika-i-upravlenie', note: { ru: 'шкафы управления, контроллеры, HMI-панели', uz: 'boshqaruv shkaflari, kontrollerlar, HMI panellar' } },
  { stage: { ru: 'Безопасность', uz: 'Xavfsizlik' }, slug: 'pozharnaya-bezopasnost', note: { ru: 'пожарная сигнализация, СОУЭ, слаботочные системы', uz: 'yong‘in signalizatsiyasi, SOUE, kuchsiz tok tizimlari' } },
  { stage: { ru: 'Запуск', uz: 'Ishga tushirish' }, slug: 'puskonaladochnye-raboty', note: { ru: 'наладка, уставки защит, испытания, ввод в эксплуатацию', uz: 'sozlash, himoya ustavkalari, sinovlar, ekspluatatsiyaga topshirish' } },
  { stage: { ru: 'Протоколы', uz: 'Bayonnomalar' }, slug: 'elektrolaboratoriya', note: { ru: 'изоляция, заземление, петля «фаза-ноль», прогрузка автоматов', uz: 'izolyatsiya, yerga ulash, «faza-nol» halqasi, avtomatlarni yuklash' } },
  { stage: { ru: 'Эксплуатация', uz: 'Ekspluatatsiya' }, slug: 'tehnicheskoe-obsluzhivanie', note: { ru: 'плановое и аварийное обслуживание, энергоаудит', uz: 'rejali va avariya xizmati, energoaudit' } }
]

function chainSection () {
  const items = CHAIN.map(link => {
    const section = bySlug(link.slug)
    return `<a class="sld-list__item" href="services/${section.slug}.html">
      <span class="sld-list__stage" ${bi(link.stage)}>${esc(link.stage.ru)}</span>
      <span style="min-width:0">
        <span class="t-h4" ${bi(section.title)}>${esc(section.title.ru)}</span>
        <span class="t-small" style="display:block" ${bi(link.note)}>${esc(link.note.ru)}</span>
      </span>
    </a>`
  }).join('')

  return `<section class="section section--major" id="chain" aria-labelledby="chain-h">
  <div class="page layout-a">
    <p class="coord" aria-hidden="true">04</p>
    <div class="stack stack--wide">
      <div>
        ${rubric({ ru: 'Цепь энергии', uz: 'Energiya zanjiri' })}
        ${el('h2', 't-h2', { ru: 'От ввода 10 кВ до протокола испытаний', uz: '10 kV kirishdan sinov bayonnomasigacha' }, 'id="chain-h"')}
        ${el('p', 't-lead', {
          ru: `Направления перечислены не по алфавиту, а по движению энергии на объекте. Порядок сам объясняет, зачем подрядчику ${SECTION_COUNT} направлений.`,
          uz: `Yo‘nalishlar alifbo bo‘yicha emas, obyektdagi energiya harakati bo‘yicha tartiblangan. Tartibning o‘zi pudratchiga nega ${SECTION_COUNT} yo‘nalish kerakligini tushuntiradi.`
        })}
      </div>
      <div class="sld" data-reveal>
        ${sldDiagram()}
        ${sldLegend()}
      </div>
      <nav class="sld-list" aria-label="Цепь энергоснабжения">${items}</nav>
    </div>
  </div>
</section>`
}

/* -------------------------------------------------- 05. Электролаборатория */

const LAB_GROUPS = [
  {
    title: { ru: 'Электроустановки до 1000 В', uz: '1000 V gacha elektr qurilmalari' },
    items: [0, 1, 2, 4, 5]
  },
  {
    title: { ru: 'Выше 1000 В', uz: '1000 V dan yuqori' },
    items: [3]
  },
  {
    title: { ru: 'Документы по результатам', uz: 'Natijalar bo‘yicha hujjatlar' },
    items: [6]
  }
]

function labSection () {
  const lab = bySlug('elektrolaboratoriya')
  const modules = LAB_GROUPS.map(group => `<div class="dir-tile">
    ${el('h3', 'label', group.title)}
    <ul class="dir-tile__list">${group.items.map(index => {
      const service = lab.services[index]
      return `<li ${bi(service)}>${esc(service.ru)}</li>`
    }).join('')}</ul>
  </div>`).join('')

  const outcomes = enrichment['elektrolaboratoriya'].outcomes

  return `<section class="section section--major surface--sunk" id="lab" aria-labelledby="lab-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: 'Раздел 03 · Электролаборатория', uz: '03-bo‘lim · Elektrolaboratoriya' })}
        ${el('h2', 't-h2', { ru: 'Протоколы выдаём сами, без субподряда', uz: 'Bayonnomalarni o‘zimiz beramiz, subpudratsiz' }, 'id="lab-h"')}
      </div>
      ${el('p', 't-lead', {
        ru: 'Наличие собственной лаборатории — первый вопрос главного энергетика. Замеры, испытания и оформление протоколов делает наша бригада, сроки не зависят от чужой очереди.',
        uz: 'O‘z laboratoriyasining borligi — bosh energetikning birinchi savoli. O‘lchov, sinov va bayonnomalarni rasmiylashtirishni bizning brigadamiz bajaradi, muddatlar begona navbatga bog‘liq emas.'
      })}
    </div>
    <div class="panel panel--3" data-reveal>${modules}</div>
    <ul class="check-list">${outcomes.map(item =>
      `<li>${icon('check', { size: 18, cls: 'icon' })}<span ${bi(item)}>${esc(item.ru)}</span></li>`
    ).join('')}</ul>
    <p><a class="btn btn--ghost" href="services/elektrolaboratoriya.html">
      <span ${bi({ ru: 'Состав испытаний и измерений', uz: 'Sinov va o‘lchovlar tarkibi' })}>Состав испытаний и измерений</span>
      ${icon('arrowRight', { size: 18, cls: 'icon icon--arrow' })}
    </a></p>
  </div>
</section>`
}

/* ------------------------------------------------------- 06. Этапы работ */

function handoverSection () {
  const stages = [1, 2, 3, 4, 5].map(number => `<div class="stage">
    <span class="stage__num">${String(number).padStart(2, '0')}</span>
    ${el('h3', 't-h4', content.process[`${number}_title`])}
    ${el('p', 't-small', content.process[`${number}_text`])}
  </div>`).join('')

  return `<section class="section" id="handover" aria-labelledby="handover-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: 'Ведение объекта', uz: 'Obyektni olib borish' })}
        ${el('h2', 't-h2', content.process.title, 'id="handover-h"')}
      </div>
      ${el('p', 't-lead', content.process.lead)}
    </div>
    <div class="ruler" aria-hidden="true"></div>
    <div class="stage-track" data-reveal>${stages}</div>
  </div>
</section>`
}

/* ------------------------------------- 07. Распределение работ по разделам */

function distributionSection () {
  const max = Math.max(...sections.map(section => section.services.length))
  const rows = sections.map(section => {
    const value = section.services.length
    const key = KEY_SLUGS.includes(section.slug) ? ' bar--key' : ''
    return `<a class="bar-row" href="services/${section.slug}.html">
      <span class="bar-row__num" aria-hidden="true">${section.num}</span>
      <span class="bar-row__body">
        <span class="bar-row__title" ${bi(section.title)}>${esc(section.title.ru)}</span>
        <span class="bar${key}"><span class="bar__fill" data-bar style="--v:${(value / max).toFixed(3)}"></span></span>
      </span>
      <span class="bar-row__count">${value}</span>
    </a>`
  }).join('')

  return `<section class="section" id="distribution" aria-labelledby="dist-h">
  <div class="page layout-a">
    <p class="coord" aria-hidden="true">07</p>
    <div class="stack">
      <div>
        ${rubric({ ru: 'Распределение работ', uz: 'Ishlar taqsimoti' })}
        ${el('h2', 't-h2', { ru: 'Сколько видов работ в каждом направлении', uz: 'Har bir yo‘nalishda nechta ish turi bor' }, 'id="dist-h"')}
      </div>
      <div class="ruler" aria-hidden="true"></div>
      <div class="bars">${rows}</div>
    </div>
  </div>
</section>`
}

/* ------------------------------------------------------- 08. Отрасли */

function industriesSection () {
  const items = industries.map(item => `<div class="industry">
    ${el('h3', 't-h4', item.title)}
    ${el('p', 'label', item.note)}
  </div>`).join('')

  return `<section class="section" id="industries" aria-labelledby="ind-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: 'Типы объектов', uz: 'Obyekt turlari' })}
        ${el('h2', 't-h2', content.industries.title, 'id="ind-h"')}
      </div>
      ${el('p', 't-lead', content.industries.lead)}
    </div>
    <div class="industry-grid" data-reveal>${items}</div>
  </div>
</section>`
}

/* ------------------------------------ 09. Документы, допуски и о компании */

function credentialsSection () {
  const docs = [1, 2, 3, 4, 5].map(number =>
    `<li>${icon('doc', { size: 18, cls: 'icon' })}<span ${bi(content.docs[String(number)])}>${esc(content.docs[String(number)].ru)}</span></li>`
  ).join('')

  const trust = [1, 2, 3, 4, 5, 6].map(number =>
    `<li>${icon('check', { size: 18, cls: 'icon' })}<span ${bi(content.trust[String(number)])}>${esc(content.trust[String(number)].ru)}</span></li>`
  ).join('')

  // Реквизиты для договора: банковский блок появится, когда клиент заполнит company.bank
  const requisites = [
    { key: { ru: 'Полное наименование', uz: 'To‘liq nomi' }, value: company.legalName },
    { key: { ru: 'ИНН / STIR', uz: 'STIR' }, value: { ru: company.taxId, uz: company.taxId } },
    { key: { ru: 'Дата регистрации', uz: 'Ro‘yxatdan o‘tgan sana' }, value: { ru: company.registered, uz: company.registered } },
    { key: { ru: 'Юридический адрес', uz: 'Yuridik manzil' }, value: company.address },
    ...(company.bank ? [
      { key: { ru: 'Банк', uz: 'Bank' }, value: { ru: company.bank.name, uz: company.bank.name } },
      { key: { ru: 'Расчётный счёт', uz: 'Hisob raqami' }, value: { ru: company.bank.account, uz: company.bank.account } },
      { key: { ru: 'МФО', uz: 'MFO' }, value: { ru: company.bank.mfo, uz: company.bank.mfo } }
    ] : [])
  ]

  return `<section class="section section--major" id="credentials" aria-labelledby="cred-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: 'Документы и допуски', uz: 'Hujjatlar va ruxsatlar' })}
        ${el('h2', 't-h2', content.trust.title, 'id="cred-h"')}
      </div>
      ${el('p', 't-lead', content.docs.lead)}
    </div>

    <div class="hazard-rule" aria-hidden="true"></div>

    <div class="doc-layout">
      <div class="stack">
        <div>
          ${el('h3', 'label', { ru: 'Что можно проверить', uz: 'Nimani tekshirish mumkin' })}
          <ul class="check-list" style="margin-top:var(--s3)">${trust}</ul>
        </div>
        <div>
          ${el('h3', 'label', content.docs.title)}
          <ul class="check-list" style="margin-top:var(--s3)">${docs}</ul>
        </div>
      </div>
      <div class="stack">
        <div>
          ${el('h3', 'label', { ru: 'Реквизиты для договора', uz: 'Shartnoma uchun rekvizitlar' })}
          <div style="margin-top:var(--s3)">${plate(requisites)}</div>
        </div>
        ${company.labCertificate ? `<div>
          ${el('h3', 'label', { ru: 'Свидетельство электролаборатории', uz: 'Elektrolaboratoriya guvohnomasi' })}
          <div style="margin-top:var(--s3)">${plate([
            { key: { ru: 'Номер', uz: 'Raqami' }, value: { ru: company.labCertificate.number, uz: company.labCertificate.number } },
            { key: { ru: 'Дата выдачи', uz: 'Berilgan sana' }, value: { ru: company.labCertificate.date, uz: company.labCertificate.date } },
            { key: { ru: 'Кем выдано', uz: 'Kim tomonidan' }, value: { ru: company.labCertificate.issuedBy, uz: company.labCertificate.issuedBy } }
          ])}</div>
        </div>` : ''}
        ${company.staff ? `<div>
          ${el('h3', 'label', { ru: 'Аттестация персонала', uz: 'Xodimlar attestatsiyasi' })}
          <div style="margin-top:var(--s3)">${plate([
            { key: { ru: 'Группа III', uz: 'III guruh' }, value: { ru: String(company.staff.groupIII), uz: String(company.staff.groupIII) } },
            { key: { ru: 'Группа IV', uz: 'IV guruh' }, value: { ru: String(company.staff.groupIV), uz: String(company.staff.groupIV) } },
            { key: { ru: 'Группа V', uz: 'V guruh' }, value: { ru: String(company.staff.groupV), uz: String(company.staff.groupV) } },
            { key: { ru: 'Бригад', uz: 'Brigadalar' }, value: { ru: String(company.staff.crews), uz: String(company.staff.crews) } }
          ])}</div>
        </div>` : ''}
      </div>
    </div>

    <div class="layout-b">
      <div>
        ${el('h3', 't-h3', content.about.title)}
        <div class="stack" style="margin-top:var(--s4)">
          ${el('p', 't-body', content.about.p1)}
          ${el('p', 't-body', content.about.p2)}
        </div>
      </div>
      <div></div>
    </div>
  </div>
</section>`
}

/* ------------------------------------------------------------ FAQ */

const FAQ_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8].map(number => ({
  q: content.faq[`${number}_q`],
  a: content.faq[`${number}_a`]
}))

function faqSection () {
  return `<section class="section" id="faq" aria-labelledby="faq-h">
  <div class="page stack stack--wide">
    <div class="layout-b">
      <div>
        ${rubric({ ru: 'Вопросы и ответы', uz: 'Savol va javoblar' })}
        ${el('h2', 't-h2', content.faq.title, 'id="faq-h"')}
      </div>
      ${el('p', 't-lead', content.faq.lead)}
    </div>
    ${faqList(FAQ_ITEMS, 'faq-home')}
  </div>
</section>`
}

/* ------------------------------------------------------------ сборка */

export function homePage () {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    '@id': `${company.baseUrl}#organization`,
    name: company.name,
    legalName: company.legalName.ru,
    taxID: company.taxId,
    url: company.baseUrl,
    telephone: company.phone,
    email: company.email,
    image: `${company.baseUrl}assets/og-image.png`,
    foundingDate: company.registeredIso,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Янгихаётский район, МФЙ Файзли, ул. Райхон, 107',
      addressLocality: 'Ташкент',
      addressCountry: 'UZ'
    },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }],
    areaServed: [
      { '@type': 'City', name: 'Ташкент' },
      { '@type': 'Country', name: 'Узбекистан' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Электромонтаж и энергетика',
      itemListElement: groups.map(group => ({
        '@type': 'OfferCatalog',
        name: group.title.ru,
        itemListElement: group.slugs.map(slug => {
          const section = bySlug(slug)
          return {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: section.title.ru,
              url: `${company.baseUrl}services/${section.slug}.html`
            }
          }
        })
      }))
    }
  }

  return page({
    base: '',
    title: {
      ru: 'Электромонтаж и электролаборатория в Ташкенте — GREEN ECO',
      uz: 'Toshkentda elektromontaj va elektrolaboratoriya — GREEN ECO'
    },
    description: {
      ru: 'Электромонтажные и пусконаладочные работы, испытания собственной электролабораторией, пожарная безопасность и автоматика на промышленных объектах Узбекистана. Смета за 1–2 дня.',
      uz: 'O‘zbekiston sanoat obyektlarida elektromontaj va ishga tushirish ishlari, o‘z elektrolaboratoriyamiz sinovlari, yong‘in xavfsizligi va avtomatika. Smeta 1–2 kunda.'
    },
    canonical: company.baseUrl,
    jsonLd: [organization, faqJsonLd(FAQ_ITEMS)],
    body: [
      hero(),
      `<section class="section" style="padding-block:0"><div class="page">${photoFigure('elektromontazhnye-raboty', '01')}</div></section>`,
      passportSection(),
      catalogSection(),
      chainSection(),
      labSection(),
      handoverSection(),
      distributionSection(),
      industriesSection(),
      credentialsSection(),
      faqSection(),
      contactBand('')
    ].join('\n')
  })
}
