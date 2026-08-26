import { SECTION_COUNT, SERVICE_COUNT } from './counts.mjs'

// Реквизиты, обязательства и проверяемые факты компании.
//
// ВАЖНО: поля со значением null НЕ выдуманы намеренно — соответствующий блок
// просто не отрисуется. Заполнять их должен клиент: банковские реквизиты,
// номер свидетельства электролаборатории, состав аттестованного персонала.
// Любое число на сайте должно быть проверяемым, иначе оно вредит доверию.

export const company = {
  name: 'GREEN ECO ENGINEERING',
  legalName: {
    ru: 'ООО «GREEN ECO ENGINEERING»',
    uz: '«GREEN ECO ENGINEERING» MChJ'
  },
  tagline: {
    ru: 'Электромонтаж · Пусконаладка · Электролаборатория',
    uz: 'Elektromontaj · Ishga tushirish · Elektrolaboratoriya'
  },
  taxId: '303724307',
  registered: '14.01.2016',
  registeredIso: '2016-01-14',
  baseUrl: 'https://chollak.github.io/green-eco-engineering/',
  phone: '+998909183126',
  phoneDisplay: '+998 90 918 31 26',
  email: 'info@greeneco.uz',
  telegram: null,            // ← ссылка вида https://t.me/... если есть
  address: {
    ru: 'Ташкент, Янгихаётский район, МФЙ Файзли, ул. Райхон, 107',
    uz: 'Toshkent, Yangihayot tumani, Fayzli MFY, Rayhon ko‘chasi, 107'
  },
  addressShort: {
    ru: 'Ташкент, Янгихаётский район',
    uz: 'Toshkent, Yangihayot tumani'
  },
  workHours: {
    ru: 'Пн–Сб, 09:00–18:00',
    uz: 'Du–Sha, 09:00–18:00'
  },
  emergency: {
    ru: 'Аварийные выезды — круглосуточно',
    uz: 'Avariya chaqiruvlari — kunu tun'
  },
  geography: {
    ru: 'Ташкент и Ташкентская область, выезд по регионам',
    uz: 'Toshkent va Toshkent viloyati, hududlarga chiqamiz'
  },

  // Заполняется клиентом — до этого соответствующие блоки скрыты
  bank: null,                // { name, account, mfo, oked }
  labCertificate: null,      // { number, date, issuedBy }
  staff: null                // { groupIII, groupIV, groupV, crews, instruments }
}

/**
 * Контракт первого экрана: четыре измеримых обязательства вместо слогана.
 * Проверено исследованием рынка: в B2B-подряде первый экран должен давать
 * сроки и объём документации, а не лозунг.
 *
 * ВНИМАНИЕ: сроки и гарантия — предмет подтверждения клиентом.
 */
export const commitments = [
  {
    label: { ru: 'Смета', uz: 'Smeta' },
    value: { ru: '1–2 рабочих дня', uz: '1–2 ish kuni' }
  },
  {
    label: { ru: 'Выезд лаборатории', uz: 'Laboratoriya chiqishi' },
    value: { ru: '24 ч по Ташкенту', uz: 'Toshkent bo‘ylab 24 soat' }
  },
  {
    label: { ru: 'Гарантия на работы', uz: 'Ishlarga kafolat' },
    value: { ru: '24 месяца', uz: '24 oy' }
  },
  {
    label: { ru: 'Сдача объекта', uz: 'Obyektni topshirish' },
    value: { ru: 'полный комплект ИД', uz: 'to‘liq ijroiya hujjatlari' }
  }
]

/** Технический паспорт компании — формат «параметр : значение». */
export const passport = [
  { key: { ru: 'ИНН / STIR', uz: 'STIR' }, value: { ru: '303724307', uz: '303724307' } },
  { key: { ru: 'Дата регистрации', uz: 'Ro‘yxatdan o‘tgan sana' }, value: { ru: '14.01.2016', uz: '14.01.2016' } },
  { key: { ru: 'Направлений работ', uz: 'Ish yo‘nalishlari' }, value: { ru: '17', uz: '17' } },
  { key: { ru: 'Видов работ', uz: 'Ish turlari' }, value: { ru: String(SERVICE_COUNT), uz: String(SERVICE_COUNT) } },
  { key: { ru: 'Электролаборатория', uz: 'Elektrolaboratoriya' }, value: { ru: 'собственная', uz: 'o‘zimizniki' } },
  { key: { ru: 'Класс напряжения', uz: 'Kuchlanish sinfi' }, value: { ru: 'до 110 кВ', uz: '110 kV gacha' } },
  { key: { ru: 'Группы по электробезопасности', uz: 'Elektr xavfsizligi guruhlari' }, value: { ru: 'до V включительно', uz: 'V gacha' } },
  { key: { ru: 'Аварийная служба', uz: 'Avariya xizmati' }, value: { ru: '24/7', uz: '24/7' } },
  { key: { ru: 'География работ', uz: 'Ish geografiyasi' }, value: { ru: 'Ташкент и область', uz: 'Toshkent va viloyat' } }
]

/** Нормативная база — чипы. Инженер читает это как допуск к разговору. */
export const standards = [
  { ru: 'ПУЭ', uz: 'PUE' },
  { ru: 'ПТЭЭП', uz: 'PTEEP' },
  { ru: 'ШНК РУз', uz: 'O‘zR ShNQ' },
  { ru: 'ГОСТ 12.4.026-2015', uz: 'GOST 12.4.026-2015' },
  { ru: 'IEC 60364', uz: 'IEC 60364' },
  { ru: 'IEC 60445', uz: 'IEC 60445' }
]

/** Четыре факта с единицами измерения для полосы статистики. */
export const stats = [
  { value: '2016', unit: null, label: { ru: 'год регистрации', uz: 'ro‘yxatdan o‘tgan yil' } },
  { value: '17', unit: null, label: { ru: 'направлений работ', uz: 'ish yo‘nalishi' } },
  { value: String(SERVICE_COUNT), unit: null, label: { ru: 'видов работ в каталоге', uz: 'katalogdagi ish turi' } },
  { value: '110', unit: { ru: 'кВ', uz: 'kV' }, label: { ru: 'максимальный класс напряжения', uz: 'maksimal kuchlanish sinfi' } }
]

/** Отраслевой разрез: вторая ось входа в каталог — по типу объекта. */
export const industries = [
  {
    title: { ru: 'Производство и цеха', uz: 'Ishlab chiqarish va sexlar' },
    note: { ru: 'силовые сети, шинопроводы, приводы, крановое хозяйство', uz: 'kuch tarmoqlari, shinoprovodlar, yuritmalar, kran xo‘jaligi' }
  },
  {
    title: { ru: 'Склады и логистика', uz: 'Omborlar va logistika' },
    note: { ru: 'освещение, пожарная сигнализация, видеонаблюдение', uz: 'yoritish, yong‘in signalizatsiyasi, videokuzatuv' }
  },
  {
    title: { ru: 'Торговые объекты', uz: 'Savdo obyektlari' },
    note: { ru: 'ВРУ, освещение, СОУЭ, резервное питание', uz: 'VRU, yoritish, SOUE, zaxira ta’minot' }
  },
  {
    title: { ru: 'Офисы и бизнес-центры', uz: 'Ofis va biznes markazlar' },
    note: { ru: 'СКС, СКУД, ИБП, аварийное освещение', uz: 'SKS, SKUD, UPS, avariya yoritishi' }
  },
  {
    title: { ru: 'Стройплощадки', uz: 'Qurilish maydonchalari' },
    note: { ru: 'временное электроснабжение, щиты, заземление', uz: 'vaqtinchalik elektr ta’minoti, shchitlar, yerga ulash' }
  },
  {
    title: { ru: 'Объекты энергетики', uz: 'Energetika obyektlari' },
    note: { ru: 'ТП и КТП, ячейки, релейная защита, испытания', uz: 'TP va KTP, yacheykalar, rele himoyasi, sinovlar' }
  },
  {
    title: { ru: 'АЗС и топливные объекты', uz: 'Yoqilg‘i quyish shoxobchalari' },
    note: { ru: 'взрывозащита, заземление, молниезащита, ПБ', uz: 'portlashdan himoya, yerga ulash, chaqmoqdan himoya' }
  },
  {
    title: { ru: 'Медицинские учреждения', uz: 'Tibbiyot muassasalari' },
    note: { ru: 'резервное питание, УЗО, контроль изоляции', uz: 'zaxira ta’minot, UZO, izolyatsiya nazorati' }
  }
]
