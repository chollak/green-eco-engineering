// Каталог из 17 направлений разложен на 4 кластера по жизненному циклу объекта.
// Плоская решётка из 17 одинаковых карточек читается как свалка — инженер ищет
// по этапу работ («мне нужно запитать цех» / «мне нужны протоколы»), а не по алфавиту.

export const groups = [
  {
    id: 'power',
    num: 'A',
    title: { ru: 'Электроснабжение и монтаж', uz: 'Elektr taʼminoti va montaj' },
    lead: {
      ru: 'Довести питание до объекта и развести его внутри: от высоковольтной подстанции до последней розетки в цехе.',
      uz: 'Obyektga quvvat yetkazish va uni ichkarida taqsimlash: yuqori kuchlanishli podstansiyadan sexdagi oxirgi rozetkagacha.'
    },
    slugs: [
      'elektromontazhnye-raboty',
      'vysokovoltnye-raboty',
      'kabelnye-seti',
      'rezervnoe-elektrosnabzhenie',
      'solnechnye-elektrostancii'
    ]
  },
  {
    id: 'commissioning',
    num: 'B',
    title: { ru: 'Запуск, испытания, документы', uz: 'Ishga tushirish, sinovlar, hujjatlar' },
    lead: {
      ru: 'Довести смонтированное до рабочего состояния и закрыть объект документами, которые принимает надзор.',
      uz: 'Montaj qilinganini ishchi holatga keltirish va obyektni nazorat qabul qiladigan hujjatlar bilan yopish.'
    },
    slugs: [
      'puskonaladochnye-raboty',
      'elektrolaboratoriya',
      'elektrobezopasnost',
      'konsalting-i-obuchenie',
      'dolzhnostnye-instrukcii'
    ]
  },
  {
    id: 'systems',
    num: 'C',
    title: { ru: 'Инженерные системы объекта', uz: 'Obyektning muhandislik tizimlari' },
    lead: {
      ru: 'Всё, что объект получает поверх силовой части: защита от пожара, автоматика, связь и свет.',
      uz: 'Obyekt kuch qismidan tashqari oladigan hamma narsa: yongʻindan himoya, avtomatika, aloqa va yorugʻlik.'
    },
    slugs: [
      'pozharnaya-bezopasnost',
      'avtomatika-i-upravlenie',
      'slabotochnye-sistemy',
      'osveshchenie'
    ]
  },
  {
    id: 'operation',
    num: 'D',
    title: { ru: 'Эксплуатация и энергоэффективность', uz: 'Ekspluatatsiya va energiya samaradorligi' },
    lead: {
      ru: 'Держать электрохозяйство в рабочем состоянии и находить, где предприятие теряет деньги.',
      uz: 'Elektr xoʻjaligini ishchi holatda saqlash va korxona qayerda pul yoʻqotayotganini topish.'
    },
    slugs: [
      'tehnicheskoe-obsluzhivanie',
      'kranovoe-hozyaystvo',
      'energoaudit'
    ]
  }
]

/** Разделы кластера в объявленном порядке. */
export function groupSections (group, sections) {
  return group.slugs.map(slug => {
    const section = sections.find(item => item.slug === slug)
    if (!section) throw new Error(`Кластер ${group.id}: раздел '${slug}' не найден в sections.mjs`)
    return section
  })
}
