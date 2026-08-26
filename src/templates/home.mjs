import { company, stats, advantages, process, industries } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { icon } from './icons.mjs'
import { page, bi, attrs, esc, contactBlock, ctaStrip } from './layout.mjs'

/** Русское склонение: 1 услуга, 2–4 услуги, 5+ услуг. */
function pluralRu (count) {
  const tail = count % 100
  if (tail >= 11 && tail <= 14) return 'услуг'
  switch (count % 10) {
    case 1: return 'услуга'
    case 2: case 3: case 4: return 'услуги'
    default: return 'услуг'
  }
}

function hero () {
  const statItems = stats.map(item =>
    `<div><div class="stat-num">${item.num}</div>${bi('div', 'stat-label', item.label)}</div>`
  ).join('')

  return `<section id="hero" class="hero"><div class="hero-bg-grid"></div><div class="hero-glow"></div><div class="hero-glow2"></div>
  <div class="hero-inner"><div class="hero-content">
    ${bi('div', 'hero-badge', { ru: 'Электромонтаж и энергетика • Узбекистан', uz: 'Elektromontaj va energetika • O‘zbekiston' })}
    <h1 class="hero-h1">
      <span ${attrs({ ru: 'Электромонтаж', uz: 'Elektromontaj' })}>Электромонтаж</span>
      <span class="accent" ${attrs({ ru: 'под ключ', uz: 'kalit topshirish' })}>под ключ</span>
    </h1>
    ${bi('p', 'hero-p', {
      ru: 'Монтаж, пусконаладка, электролабораторные испытания и обслуживание электрохозяйства. 17 направлений работ — от розетки до подстанции 110 кВ, с протоколами и исполнительной документацией.',
      uz: 'Montaj, ishga tushirish, elektrolaboratoriya sinovlari va elektr xo‘jaligiga xizmat ko‘rsatish. 17 ta yo‘nalish — rozetkadan 110 kV podstansiyagacha, bayonnoma va ijroiya hujjatlari bilan.'
    })}
    <div class="hero-actions">
      <a href="#catalog" class="btn-primary" ${attrs({ ru: 'Все услуги →', uz: 'Barcha xizmatlar →' })}>Все услуги →</a>
      <a href="#contact" class="btn-outline" ${attrs({ ru: 'Вызвать инженера', uz: 'Muhandis chaqirish' })}>Вызвать инженера</a>
    </div>
    <div class="hero-stats">${statItems}</div>
  </div></div>
</section>`
}

function catalog () {
  const cards = sections.map(section => `<a class="cat-card reveal" href="services/${section.slug}.html">
    <div class="cat-card-top"><div class="cat-icon">${icon(section.icon)}</div><div class="cat-num">${section.num}</div></div>
    ${bi('h3', 'cat-title', section.title)}
    ${bi('p', 'cat-short', section.short)}
    <div class="cat-foot">
      ${bi('span', 'cat-count', {
        ru: `${section.services.length} ${pluralRu(section.services.length)}`,
        uz: `${section.services.length} ta xizmat`
      })}
      ${bi('span', 'cat-more', { ru: 'Подробнее →', uz: 'Batafsil →' })}
    </div>
  </a>`).join('')

  return `<section id="catalog"><div class="wrap">
  <div class="catalog-head reveal">
    <div>
      ${bi('p', 'section-tag', { ru: 'Каталог услуг', uz: 'Xizmatlar katalogi' })}
      ${bi('h2', 'section-h2', { ru: '17 направлений работ', uz: '17 ta ish yo‘nalishi' })}
      ${bi('p', 'section-p', {
        ru: 'Закрываем весь жизненный цикл электрохозяйства объекта: проектная поддержка, монтаж, наладка, испытания, обслуживание и документация.',
        uz: 'Obyekt elektr xo‘jaligining butun hayotiy siklini qamrab olamiz: loyiha qo‘llab-quvvatlash, montaj, sozlash, sinovlar, xizmat ko‘rsatish va hujjatlar.'
      })}
    </div>
  </div>
  <div class="catalog-grid">${cards}</div>
</div></section>`
}

function about () {
  const list = advantages.map(item => `<li ${attrs(item)}>${esc(item.ru)}</li>`).join('')

  return `<section id="about"><div class="wrap about-grid">
  <div class="reveal">
    ${bi('p', 'section-tag', { ru: 'О компании', uz: 'Kompaniya haqida' })}
    ${bi('h2', 'section-h2', { ru: 'Инженерный подрядчик полного цикла', uz: 'To‘liq siklli muhandislik pudratchisi' })}
    ${bi('p', 'section-p', {
      ru: 'GREEN ECO ENGINEERING работает на рынке Узбекистана с 2016 года. Мы выполняем электромонтажные и пусконаладочные работы, испытания собственной электролабораторией, монтаж систем пожарной безопасности, автоматики и солнечных электростанций.',
      uz: 'GREEN ECO ENGINEERING 2016-yildan buyon O‘zbekiston bozorida ishlaydi. Elektromontaj va ishga tushirish ishlari, o‘z elektrolaboratoriyamiz sinovlari, yong‘in xavfsizligi tizimlari, avtomatika va quyosh elektr stansiyalari montajini bajaramiz.'
    })}
    ${bi('p', 'section-p', {
      ru: 'Работаем по договору с фиксированной сметой, сдаём объект с полным комплектом протоколов и исполнительной документации — так, чтобы приёмка проходила без замечаний.',
      uz: 'Belgilangan smeta bilan shartnoma asosida ishlaymiz, obyektni to‘liq bayonnoma va ijroiya hujjatlari bilan topshiramiz — qabul e’tirozsiz o‘tishi uchun.'
    })}
  </div>
  <div class="reveal"><div class="about-card">
    ${bi('h3', '', { ru: 'Почему выбирают нас', uz: 'Nega bizni tanlashadi' })}
    <ul class="check-list">${list}</ul>
  </div></div>
</div></section>`
}

function processBlock () {
  const items = process.map(step => `<div class="process-item reveal">
    <div class="process-num">${step.num}</div>
    ${bi('h4', '', step.title)}
    ${bi('p', '', step.text)}
  </div>`).join('')

  return `<section id="process"><div class="wrap">
    <div class="reveal">
      ${bi('p', 'section-tag', { ru: 'Как мы работаем', uz: 'Qanday ishlaymiz' })}
      ${bi('h2', 'section-h2', { ru: 'Четыре этапа — от заявки до сдачи', uz: 'Arizadan topshirishgacha to‘rt bosqich' })}
    </div>
    <div class="process-grid">${items}</div>
  </div></section>`
}

function industriesBlock () {
  const pills = industries.map(item => `<div class="pill" ${attrs(item)}>${esc(item.ru)}</div>`).join('')

  return `<section id="industries"><div class="wrap">
    <div class="reveal">
      ${bi('p', 'section-tag', { ru: 'Отрасли', uz: 'Sohalar' })}
      ${bi('h2', 'section-h2', { ru: 'Где мы работаем', uz: 'Qayerda ishlaymiz' })}
      ${bi('p', 'section-p', {
        ru: 'Опыт на промышленных, инфраструктурных и коммерческих объектах — с соблюдением требований охраны труда и допусков к работам повышенной опасности.',
        uz: 'Sanoat, infratuzilma va tijorat obyektlarida tajriba — mehnat muhofazasi talablari va yuqori xavfli ishlarga ruxsatnomalarga rioya qilgan holda.'
      })}
    </div>
    <div class="pills reveal">${pills}</div>
  </div></section>`
}

export function homePage () {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    legalName: company.legalName.ru,
    taxID: company.taxId,
    url: company.baseUrl,
    telephone: company.phone,
    email: company.email,
    foundingDate: company.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Райхон кўчаси, 107-уй, Файзли МФЙ',
      addressLocality: 'Ташкент',
      addressRegion: 'Янгихаётский район',
      addressCountry: 'UZ'
    },
    makesOffer: sections.map(section => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: section.title.ru, url: `${company.baseUrl}services/${section.slug}.html` }
    }))
  }

  return page({
    base: '',
    title: {
      ru: 'GREEN ECO ENGINEERING — электромонтаж, пусконаладка и электролаборатория в Ташкенте',
      uz: 'GREEN ECO ENGINEERING — Toshkentda elektromontaj, ishga tushirish va elektrolaboratoriya'
    },
    description: {
      ru: 'Электромонтажные и пусконаладочные работы, электролабораторные испытания, пожарная безопасность, автоматика, СЭС и обслуживание электрооборудования в Узбекистане. ИНН 303724307.',
      uz: 'O‘zbekistonda elektromontaj va ishga tushirish ishlari, elektrolaboratoriya sinovlari, yong‘in xavfsizligi, avtomatika, QES va elektr uskunalariga xizmat ko‘rsatish.'
    },
    canonical: company.baseUrl,
    jsonLd,
    body: [
      hero(),
      catalog(),
      about(),
      processBlock(),
      industriesBlock(),
      ctaStrip(
        { ru: 'Нужен подрядчик на электромонтаж или испытания?', uz: 'Elektromontaj yoki sinovlar uchun pudratchi kerakmi?' },
        { ru: 'Позвоните — инженер бесплатно оценит объём работ и подготовит смету.', uz: 'Qo‘ng‘iroq qiling — muhandis ish hajmini bepul baholab, smeta tayyorlaydi.' }
      ),
      contactBlock('')
    ].join('\n')
  })
}
