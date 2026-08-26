// Единый источник контента каталога услуг.
// Каждая строка: { ru, uz }. slug используется как имя файла в /services.

export const sections = [
  {
    slug: 'elektromontazhnye-raboty',
    num: '01',
    icon: 'plug',
    title: { ru: 'Электромонтажные работы', uz: 'Elektromontaj ishlari' },
    short: {
      ru: 'Внутренние и наружные сети, щиты, лотки, освещение, подключение силового оборудования.',
      uz: 'Ichki va tashqi tarmoqlar, shchitlar, tokchalar, yoritish, kuch uskunalarini ulash.'
    },
    intro: {
      ru: 'Выполняем электромонтаж любой сложности — от разводки в отдельном помещении до полного электроснабжения производственного цеха. Работаем по проекту заказчика или разрабатываем решение сами, сдаём объект с исполнительной документацией и протоколами испытаний.',
      uz: 'Har qanday murakkablikdagi elektromontaj ishlarini bajaramiz — alohida xonadagi simlashdan tortib ishlab chiqarish sexini to‘liq elektr ta’minlashgacha. Buyurtmachi loyihasi asosida yoki o‘z yechimimizni ishlab chiqib ishlaymiz, obyektni ijroiya hujjatlari va sinov bayonnomalari bilan topshiramiz.'
    },
    services: [
      { ru: 'Монтаж внутренних электросетей', uz: 'Ichki elektr tarmoqlarini montaj qilish' },
      { ru: 'Монтаж наружных электросетей', uz: 'Tashqi elektr tarmoqlarini montaj qilish' },
      { ru: 'Прокладка кабельных линий', uz: 'Kabel liniyalarini yotqizish' },
      { ru: 'Монтаж кабельных лотков и коробов', uz: 'Kabel tokchalari va qutilarini montaj qilish' },
      { ru: 'Монтаж электрощитов, ВРУ, ГРЩ', uz: 'Elektr shchitlari, VRU va GRSHCH montaji' },
      { ru: 'Монтаж систем освещения', uz: 'Yoritish tizimlarini montaj qilish' },
      { ru: 'Установка розеток и выключателей', uz: 'Rozetka va vyklyuchatellarni o‘rnatish' },
      { ru: 'Подключение силового оборудования', uz: 'Kuch uskunalarini ulash' },
      { ru: 'Замена и модернизация электропроводки', uz: 'Elektr simlarini almashtirish va modernizatsiya qilish' },
      { ru: 'Маркировка кабелей и электрооборудования', uz: 'Kabel va elektr uskunalarini markirovka qilish' },
      { ru: 'Монтаж шинопроводов', uz: 'Shinoprovodlarni montaj qilish' },
      { ru: 'Подключение электродвигателей, насосов, вентиляции, компрессоров', uz: 'Elektr dvigatel, nasos, ventilyatsiya va kompressorlarni ulash' },
      { ru: 'Монтаж металлоконструкций для электрооборудования: эстакады, опоры, кронштейны, площадки', uz: 'Elektr uskunalari uchun metall konstruksiyalar montaji: estakada, tayanch, kronshteyn, maydonchalar' }
    ]
  },
  {
    slug: 'puskonaladochnye-raboty',
    num: '02',
    icon: 'sliders',
    title: { ru: 'Пусконаладочные работы', uz: 'Ishga tushirish-sozlash ishlari' },
    short: {
      ru: 'Наладка электроустановок, проверка автоматики, настройка релейной защиты, ввод в эксплуатацию.',
      uz: 'Elektr qurilmalarini sozlash, avtomatikani tekshirish, rele himoyasini sozlash, ekspluatatsiyaga topshirish.'
    },
    intro: {
      ru: 'Пусконаладка — этап, на котором смонтированное оборудование превращается в работающую систему. Проверяем схемы, настраиваем уставки защит, снимаем характеристики под нагрузкой и передаём объект заказчику с полным комплектом протоколов.',
      uz: 'Ishga tushirish — montaj qilingan uskuna ishlaydigan tizimga aylanadigan bosqich. Sxemalarni tekshiramiz, himoya uставkalarini sozlaymiz, yuk ostida xarakteristikalarni olamiz va obyektni to‘liq bayonnomalar bilan topshiramiz.'
    },
    services: [
      { ru: 'Пусконаладка электроустановок', uz: 'Elektr qurilmalarini ishga tushirish-sozlash' },
      { ru: 'Проверка и настройка систем автоматики', uz: 'Avtomatika tizimlarini tekshirish va sozlash' },
      { ru: 'Настройка релейной защиты', uz: 'Rele himoyasini sozlash' },
      { ru: 'Испытания оборудования под нагрузкой', uz: 'Uskunani yuk ostida sinash' },
      { ru: 'Ввод оборудования в эксплуатацию', uz: 'Uskunani ekspluatatsiyaga topshirish' },
      { ru: 'Оформление актов и протоколов ПНР', uz: 'ITS dalolatnoma va bayonnomalarini rasmiylashtirish' }
    ]
  },
  {
    slug: 'elektrolaboratoriya',
    num: '03',
    icon: 'gauge',
    title: { ru: 'Электролабораторные испытания и измерения', uz: 'Elektrolaboratoriya sinovlari va o‘lchovlari' },
    short: {
      ru: 'Изоляция, заземление, «фаза-ноль», кабельные линии, автоматы, УЗО. Протоколы установленного образца.',
      uz: 'Izolyatsiya, yerga ulash, «faza-nol», kabel liniyalari, avtomatlar, UZO. Belgilangan namunadagi bayonnomalar.'
    },
    intro: {
      ru: 'Собственная электролаборатория проводит полный цикл измерений и испытаний электроустановок до 1000 В и выше. По результатам выдаём комплект протоколов, который принимают надзорные органы и страховые компании.',
      uz: 'O‘z elektrolaboratoriyamiz 1000 V gacha va undan yuqori elektr qurilmalarining to‘liq o‘lchov va sinov siklini bajaradi. Natijalar bo‘yicha nazorat organlari va sug‘urta kompaniyalari qabul qiladigan bayonnomalar to‘plamini beramiz.'
    },
    services: [
      { ru: 'Измерение сопротивления изоляции', uz: 'Izolyatsiya qarshiligini o‘lchash' },
      { ru: 'Проверка контура заземления', uz: 'Yerga ulash konturini tekshirish' },
      { ru: 'Измерение петли «фаза-ноль»', uz: '«Faza-nol» halqasini o‘lchash' },
      { ru: 'Испытание кабельных линий повышенным напряжением', uz: 'Kabel liniyalarini yuqori kuchlanish bilan sinash' },
      { ru: 'Проверка автоматических выключателей', uz: 'Avtomatik o‘chirgichlarni tekshirish' },
      { ru: 'Проверка УЗО и устройств дифференциальной защиты', uz: 'UZO va differensial himoya qurilmalarini tekshirish' },
      { ru: 'Оформление итоговых протоколов испытаний и измерений — комплектом документов', uz: 'Yakuniy sinov va o‘lchov bayonnomalarini hujjatlar to‘plami sifatida rasmiylashtirish' }
    ]
  },
  {
    slug: 'elektrobezopasnost',
    num: '04',
    icon: 'shield',
    title: { ru: 'Электробезопасность', uz: 'Elektr xavfsizligi' },
    short: {
      ru: 'Документация, инструкции по охране труда, оценка рисков, проверка электроустановок, консультации.',
      uz: 'Hujjatlar, mehnat muhofazasi yo‘riqnomalari, xavflarni baholash, elektr qurilmalarini tekshirish, maslahatlar.'
    },
    intro: {
      ru: 'Готовим предприятие к проверке надзорных органов: приводим в порядок документацию по электробезопасности, разрабатываем инструкции, оцениваем риски и устраняем найденные нарушения.',
      uz: 'Korxonani nazorat organlari tekshiruviga tayyorlaymiz: elektr xavfsizligi hujjatlarini tartibga solamiz, yo‘riqnomalar ishlab chiqamiz, xavflarni baholaymiz va aniqlangan buzilishlarni bartaraf etamiz.'
    },
    services: [
      { ru: 'Разработка документации по электробезопасности', uz: 'Elektr xavfsizligi bo‘yicha hujjatlarni ishlab chiqish' },
      { ru: 'Инструкции по охране труда', uz: 'Mehnat muhofazasi bo‘yicha yo‘riqnomalar' },
      { ru: 'Оценка профессиональных рисков', uz: 'Kasbiy xavflarni baholash' },
      { ru: 'Проверка состояния электроустановок', uz: 'Elektr qurilmalari holatini tekshirish' },
      { ru: 'Консультации по требованиям электробезопасности', uz: 'Elektr xavfsizligi talablari bo‘yicha maslahatlar' }
    ]
  },
  {
    slug: 'tehnicheskoe-obsluzhivanie',
    num: '05',
    icon: 'wrench',
    title: { ru: 'Техническое обслуживание', uz: 'Texnik xizmat ko‘rsatish' },
    short: {
      ru: 'Плановое и аварийное обслуживание, диагностика, профилактика, ремонт электрооборудования.',
      uz: 'Rejali va avariya xizmati, diagnostika, profilaktika, elektr uskunalarini ta’mirlash.'
    },
    intro: {
      ru: 'Берём электрохозяйство объекта на постоянное обслуживание по договору: регламентные осмотры, устранение неисправностей, аварийные выезды 24/7 и ведение эксплуатационной документации.',
      uz: 'Obyekt elektr xo‘jaligini shartnoma asosida doimiy xizmatga olamiz: reglament ko‘riklari, nosozliklarni bartaraf etish, 24/7 avariya chaqiruvlari va ekspluatatsiya hujjatlarini yuritish.'
    },
    services: [
      { ru: 'Плановое техническое обслуживание', uz: 'Rejali texnik xizmat ko‘rsatish' },
      { ru: 'Аварийное обслуживание и выезд 24/7', uz: 'Avariya xizmati va 24/7 chaqiruv' },
      { ru: 'Диагностика неисправностей', uz: 'Nosozliklar diagnostikasi' },
      { ru: 'Профилактические осмотры', uz: 'Profilaktik ko‘riklar' },
      { ru: 'Ремонт электрооборудования', uz: 'Elektr uskunalarini ta’mirlash' }
    ]
  },
  {
    slug: 'pozharnaya-bezopasnost',
    num: '06',
    icon: 'flame',
    title: { ru: 'Пожарная безопасность', uz: 'Yong‘in xavfsizligi' },
    short: {
      ru: 'Пожарная сигнализация, СОУЭ, эвакуационное освещение, пожаротушение, дымоудаление, водопровод.',
      uz: 'Yong‘in signalizatsiyasi, OEBT (SOUE), evakuatsiya yoritishi, o‘t o‘chirish, tutun chiqarish, suv quvuri.'
    },
    intro: {
      ru: 'Полный цикл по системам противопожарной защиты: от проекта до сдачи объекта и последующего обслуживания. Работаем с сигнализацией, оповещением, пожаротушением и внутренним противопожарным водопроводом.',
      uz: 'Yong‘indan himoya tizimlari bo‘yicha to‘liq sikl: loyihadan obyektni topshirish va keyingi xizmat ko‘rsatishgacha. Signalizatsiya, ogohlantirish, o‘t o‘chirish va ichki yong‘in suv quvuri bilan ishlaymiz.'
    },
    services: [
      { ru: 'Проектирование систем пожарной сигнализации', uz: 'Yong‘in signalizatsiyasi tizimlarini loyihalash' },
      { ru: 'Монтаж пожарной сигнализации', uz: 'Yong‘in signalizatsiyasini montaj qilish' },
      { ru: 'Пусконаладка систем противопожарной защиты', uz: 'Yong‘indan himoya tizimlarini ishga tushirish' },
      { ru: 'Обслуживание и ремонт систем', uz: 'Tizimlarga xizmat ko‘rsatish va ta’mirlash' },
      { ru: 'Замена извещателей', uz: 'Datchiklarni almashtirish' },
      { ru: 'Монтаж СОУЭ (систем оповещения и управления эвакуацией)', uz: 'OEBT (ogohlantirish va evakuatsiyani boshqarish tizimlari) montaji' },
      { ru: 'Монтаж эвакуационного освещения', uz: 'Evakuatsiya yoritishini montaj qilish' },
      { ru: 'Монтаж систем пожаротушения', uz: 'O‘t o‘chirish tizimlarini montaj qilish' },
      { ru: 'Монтаж внутреннего противопожарного водопровода', uz: 'Ichki yong‘in suv quvurini montaj qilish' },
      { ru: 'Проверка пожарных кранов и огнетушителей', uz: 'Yong‘in kranlari va o‘t o‘chirgichlarni tekshirish' },
      { ru: 'Проверка систем дымоудаления и противопожарных клапанов', uz: 'Tutun chiqarish tizimlari va yong‘in klapanlarini tekshirish' },
      { ru: 'Подготовка исполнительной документации', uz: 'Ijroiya hujjatlarini tayyorlash' }
    ]
  },
  {
    slug: 'kranovoe-hozyaystvo',
    num: '07',
    icon: 'crane',
    title: { ru: 'Крановое хозяйство', uz: 'Kran xo‘jaligi' },
    short: {
      ru: 'Обслуживание мостовых и козловых кранов, электрооборудование, токоподвод, системы управления.',
      uz: 'Ko‘prikli va kozlovoy kranlarga xizmat, elektr uskunalari, tok ta’minoti, boshqaruv tizimlari.'
    },
    intro: {
      ru: 'Обслуживаем и ремонтируем электрическую часть грузоподъёмного оборудования: приводы, токоподвод, аппаратуру управления и защиты. После ремонта проводим испытания и оформляем документы.',
      uz: 'Yuk ko‘tarish uskunalarining elektr qismiga xizmat ko‘rsatamiz va ta’mirlaymiz: yuritmalar, tok ta’minoti, boshqaruv va himoya apparaturasi. Ta’mirdan so‘ng sinovlar o‘tkazib, hujjatlarni rasmiylashtiramiz.'
    },
    services: [
      { ru: 'Обслуживание мостовых и козловых кранов', uz: 'Ko‘prikli va kozlovoy kranlarga xizmat ko‘rsatish' },
      { ru: 'Ремонт электрооборудования кранов', uz: 'Kran elektr uskunalarini ta’mirlash' },
      { ru: 'Замена кабелей и токоподвода', uz: 'Kabel va tok ta’minotini almashtirish' },
      { ru: 'Настройка систем управления', uz: 'Boshqaruv tizimlarini sozlash' },
      { ru: 'Проверка конечных выключателей', uz: 'Oxirgi o‘chirgichlarni tekshirish' },
      { ru: 'Испытания после ремонта', uz: 'Ta’mirdan keyingi sinovlar' }
    ]
  },
  {
    slug: 'solnechnye-elektrostancii',
    num: '08',
    icon: 'sun',
    title: { ru: 'Солнечные электростанции', uz: 'Quyosh elektr stansiyalari' },
    short: {
      ru: 'Монтаж панелей, инверторов и АКБ, пусконаладка, обслуживание, диагностика и ремонт СЭС.',
      uz: 'Panel, invertor va akkumulyatorlar montaji, ishga tushirish, xizmat ko‘rsatish, diagnostika va ta’mir.'
    },
    intro: {
      ru: 'Строим и обслуживаем солнечные электростанции для предприятий и частных объектов — от расчёта мощности и монтажа конструкций до пусконаладки инверторов и подключения к сети.',
      uz: 'Korxona va xususiy obyektlar uchun quyosh elektr stansiyalarini quramiz va xizmat ko‘rsatamiz — quvvatni hisoblash va konstruksiyalarni montaj qilishdan invertorlarni ishga tushirish va tarmoqqa ulashgacha.'
    },
    services: [
      { ru: 'Монтаж солнечных панелей и опорных конструкций', uz: 'Quyosh panellari va tayanch konstruksiyalarini montaj qilish' },
      { ru: 'Монтаж инверторов', uz: 'Invertorlarni montaj qilish' },
      { ru: 'Монтаж аккумуляторных систем', uz: 'Akkumulyator tizimlarini montaj qilish' },
      { ru: 'Пусконаладка солнечных электростанций', uz: 'Quyosh elektr stansiyalarini ishga tushirish' },
      { ru: 'Техническое обслуживание СЭС', uz: 'QES ga texnik xizmat ko‘rsatish' },
      { ru: 'Диагностика и ремонт', uz: 'Diagnostika va ta’mirlash' }
    ]
  },
  {
    slug: 'avtomatika-i-upravlenie',
    num: '09',
    icon: 'cpu',
    title: { ru: 'Системы автоматики и управления', uz: 'Avtomatika va boshqaruv tizimlari' },
    short: {
      ru: 'Шкафы управления и АВР, программирование контроллеров, HMI-панели, автоматизация процессов.',
      uz: 'Boshqaruv va AVR shkaflari, kontrollerlarni dasturlash, HMI panellar, jarayonlarni avtomatlashtirish.'
    },
    intro: {
      ru: 'Собираем шкафы управления под задачу заказчика, программируем контроллеры и панели оператора, автоматизируем технологические процессы — от простого АВР до диспетчеризации участка.',
      uz: 'Buyurtmachi vazifasiga mos boshqaruv shkaflarini yig‘amiz, kontroller va operator panellarini dasturlaymiz, texnologik jarayonlarni avtomatlashtiramiz — oddiy AVR dan uchastka dispetcherlashtirishgacha.'
    },
    services: [
      { ru: 'Сборка шкафов управления', uz: 'Boshqaruv shkaflarini yig‘ish' },
      { ru: 'Монтаж систем АВР', uz: 'AVR tizimlarini montaj qilish' },
      { ru: 'Монтаж шкафов автоматики', uz: 'Avtomatika shkaflarini montaj qilish' },
      { ru: 'Программирование контроллеров (ПЛК)', uz: 'Kontrollerlarni (PLK) dasturlash' },
      { ru: 'Настройка HMI-панелей', uz: 'HMI panellarni sozlash' },
      { ru: 'Автоматизация технологических процессов', uz: 'Texnologik jarayonlarni avtomatlashtirish' }
    ]
  },
  {
    slug: 'kabelnye-seti',
    num: '10',
    icon: 'cable',
    title: { ru: 'Кабельные сети', uz: 'Kabel tarmoqlari' },
    short: {
      ru: 'Силовые и контрольные кабели, кабельные муфты, маркировка линий, поиск и ремонт повреждений.',
      uz: 'Kuch va nazorat kabellari, kabel muftalari, liniyalarni markirovka qilish, shikastlanishlarni topish va ta’mirlash.'
    },
    intro: {
      ru: 'Прокладываем и ремонтируем кабельные линии в траншеях, лотках, каналах и на эстакадах. Находим место повреждения без вскрытия всей трассы и восстанавливаем линию с монтажом муфт.',
      uz: 'Kabel liniyalarini transheya, tokcha, kanal va estakadalarda yotqizamiz hamda ta’mirlaymiz. Butun trassani ochmasdan shikastlanish joyini aniqlaymiz va mufta o‘rnatib liniyani tiklaymiz.'
    },
    services: [
      { ru: 'Прокладка силовых кабелей', uz: 'Kuch kabellarini yotqizish' },
      { ru: 'Прокладка контрольных кабелей', uz: 'Nazorat kabellarini yotqizish' },
      { ru: 'Монтаж кабельных муфт', uz: 'Kabel muftalarini montaj qilish' },
      { ru: 'Маркировка кабельных линий', uz: 'Kabel liniyalarini markirovka qilish' },
      { ru: 'Поиск и ремонт повреждений кабеля', uz: 'Kabel shikastlanishlarini topish va ta’mirlash' }
    ]
  },
  {
    slug: 'rezervnoe-elektrosnabzhenie',
    num: '11',
    icon: 'battery',
    title: { ru: 'Резервное электроснабжение', uz: 'Zaxira elektr ta’minoti' },
    short: {
      ru: 'ДГУ, источники бесперебойного питания, настройка АВР, обслуживание резервных систем.',
      uz: 'DGU, uzluksiz quvvat manbalari, AVR sozlash, zaxira tizimlariga xizmat ko‘rsatish.'
    },
    intro: {
      ru: 'Проектируем и монтируем резервное питание для объектов, где недопустим простой: дизель-генераторы, ИБП и автоматика ввода резерва. Настраиваем переключение так, чтобы критичная нагрузка не «моргала».',
      uz: 'To‘xtab qolish mumkin bo‘lmagan obyektlar uchun zaxira ta’minotini loyihalaymiz va montaj qilamiz: dizel-generatorlar, UPS va zaxirani ulash avtomatikasi. Muhim yuk uzilmasligi uchun o‘tkazishni sozlaymiz.'
    },
    services: [
      { ru: 'Монтаж и обслуживание ДГУ (дизель-генераторных установок)', uz: 'DGU (dizel-generator qurilmalari) montaji va xizmat ko‘rsatish' },
      { ru: 'Монтаж и обслуживание ИБП', uz: 'UPS montaji va xizmat ko‘rsatish' },
      { ru: 'Настройка систем АВР', uz: 'AVR tizimlarini sozlash' },
      { ru: 'Обслуживание резервных систем электроснабжения', uz: 'Zaxira elektr ta’minoti tizimlariga xizmat ko‘rsatish' }
    ]
  },
  {
    slug: 'osveshchenie',
    num: '12',
    icon: 'bulb',
    title: { ru: 'Освещение', uz: 'Yoritish' },
    short: {
      ru: 'Внутреннее, наружное и уличное освещение, архитектурная подсветка, аварийное освещение, переход на LED.',
      uz: 'Ichki, tashqi va ko‘cha yoritishi, arxitektura yoritishi, avariya yoritishi, LEDga o‘tish.'
    },
    intro: {
      ru: 'Проектируем и монтируем освещение с расчётом освещённости по нормам: цеха, склады, офисы, территории и фасады. Переводим объекты на светодиодные светильники с расчётом окупаемости.',
      uz: 'Me’yorlar bo‘yicha yoritilganlikni hisoblab yoritishni loyihalaymiz va montaj qilamiz: sexlar, omborlar, ofislar, hududlar va fasadlar. Obyektlarni qoplanish muddati hisobi bilan LED chiroqlarga o‘tkazamiz.'
    },
    services: [
      { ru: 'Внутреннее освещение', uz: 'Ichki yoritish' },
      { ru: 'Наружное освещение', uz: 'Tashqi yoritish' },
      { ru: 'Уличное освещение', uz: 'Ko‘cha yoritishi' },
      { ru: 'Архитектурная подсветка', uz: 'Arxitektura yoritishi' },
      { ru: 'Аварийное и эвакуационное освещение', uz: 'Avariya va evakuatsiya yoritishi' },
      { ru: 'Замена светильников на светодиодные', uz: 'Chiroqlarni LEDga almashtirish' }
    ]
  },
  {
    slug: 'vysokovoltnye-raboty',
    num: '13',
    icon: 'tower',
    title: { ru: 'Высоковольтные работы', uz: 'Yuqori kuchlanishli ishlar' },
    short: {
      ru: 'ТП и КТП, высоковольтные ячейки, силовые трансформаторы, ВВ-кабели, испытания, обслуживание подстанций.',
      uz: 'TP va KTP, yuqori kuchlanishli yacheykalar, kuch transformatorlari, YK kabellar, sinovlar, podstansiyalarga xizmat.'
    },
    intro: {
      ru: 'Монтируем и обслуживаем оборудование подстанций: комплектные трансформаторные подстанции, ячейки, силовые трансформаторы и высоковольтные кабельные линии. Все работы — аттестованным персоналом с оформлением нарядов-допусков.',
      uz: 'Podstansiya uskunalarini montaj qilamiz va xizmat ko‘rsatamiz: kompleks transformator podstansiyalari, yacheykalar, kuch transformatorlari va yuqori kuchlanishli kabel liniyalari. Barcha ishlar attestatsiyadan o‘tgan xodimlar tomonidan, ruxsatnoma rasmiylashtirilgan holda bajariladi.'
    },
    services: [
      { ru: 'Монтаж ТП и КТП', uz: 'TP va KTP montaji' },
      { ru: 'Монтаж высоковольтных ячеек', uz: 'Yuqori kuchlanishli yacheykalar montaji' },
      { ru: 'Монтаж силовых трансформаторов', uz: 'Kuch transformatorlarini montaj qilish' },
      { ru: 'Прокладка высоковольтных кабелей', uz: 'Yuqori kuchlanishli kabellarni yotqizish' },
      { ru: 'Высоковольтные испытания', uz: 'Yuqori kuchlanishli sinovlar' },
      { ru: 'Обслуживание подстанций', uz: 'Podstansiyalarga xizmat ko‘rsatish' }
    ]
  },
  {
    slug: 'slabotochnye-sistemy',
    num: '14',
    icon: 'camera',
    title: { ru: 'Слаботочные системы', uz: 'Kuchsiz tok tizimlari' },
    short: {
      ru: 'Видеонаблюдение, охранная сигнализация, СКУД, структурированные кабельные сети.',
      uz: 'Videokuzatuv, qo‘riqlash signalizatsiyasi, SKUD, strukturalangan kabel tarmoqlari.'
    },
    intro: {
      ru: 'Монтируем системы безопасности и связи: видеонаблюдение с архивом, охранную сигнализацию, контроль доступа и СКС под сеть предприятия. Сдаём с настройкой и обучением персонала.',
      uz: 'Xavfsizlik va aloqa tizimlarini montaj qilamiz: arxivli videokuzatuv, qo‘riqlash signalizatsiyasi, kirishni nazorat qilish va korxona tarmog‘i uchun SKS. Sozlash va xodimlarni o‘qitish bilan topshiramiz.'
    },
    services: [
      { ru: 'Системы видеонаблюдения', uz: 'Videokuzatuv tizimlari' },
      { ru: 'Охранная сигнализация', uz: 'Qo‘riqlash signalizatsiyasi' },
      { ru: 'СКУД — системы контроля и управления доступом', uz: 'SKUD — kirishni nazorat qilish va boshqarish tizimlari' },
      { ru: 'Структурированные кабельные сети (СКС)', uz: 'Strukturalangan kabel tarmoqlari (SKS)' }
    ]
  },
  {
    slug: 'energoaudit',
    num: '15',
    icon: 'chart',
    title: { ru: 'Энергоаудит и энергоэффективность', uz: 'Energoaudit va energiya samaradorligi' },
    short: {
      ru: 'Энергетические обследования, тепловизионная диагностика, анализ качества электроэнергии, отчёты.',
      uz: 'Energetik tekshiruvlar, teplovizion diagnostika, elektr energiyasi sifatini tahlil qilish, hisobotlar.'
    },
    intro: {
      ru: 'Показываем, где предприятие теряет деньги на электроэнергии: обследуем сети и оборудование, снимаем тепловизионные и сетевые показатели, считаем потери и даём план мероприятий с оценкой окупаемости.',
      uz: 'Korxona elektr energiyasida qayerda pul yo‘qotayotganini ko‘rsatamiz: tarmoq va uskunalarni tekshiramiz, teplovizion va tarmoq ko‘rsatkichlarini olamiz, yo‘qotishlarni hisoblaymiz va qoplanish muddati bilan tadbirlar rejasini beramiz.'
    },
    services: [
      { ru: 'Энергетические обследования и энергоаудит', uz: 'Energetik tekshiruvlar va energoaudit' },
      { ru: 'Тепловизионное обследование', uz: 'Teplovizion tekshiruv' },
      { ru: 'Анализ качества электроэнергии', uz: 'Elektr energiyasi sifatini tahlil qilish' },
      { ru: 'Подготовка отчётов и рекомендаций по энергосбережению', uz: 'Energiya tejash bo‘yicha hisobot va tavsiyalar tayyorlash' }
    ]
  },
  {
    slug: 'konsalting-i-obuchenie',
    num: '16',
    icon: 'users',
    title: { ru: 'Консалтинг, сопровождение, обучение', uz: 'Konsalting, kuzatuv, o‘qitish' },
    short: {
      ru: 'Технические консультации, сопровождение проектов, авторский надзор, обучение персонала.',
      uz: 'Texnik maslahatlar, loyihalarni kuzatib borish, mualliflik nazorati, xodimlarni o‘qitish.'
    },
    intro: {
      ru: 'Поддерживаем заказчика на всех этапах — от выбора решения и проверки проектной документации до авторского надзора на стройке и обучения эксплуатирующего персонала.',
      uz: 'Buyurtmachini barcha bosqichlarda qo‘llab-quvvatlaymiz — yechim tanlash va loyiha hujjatlarini tekshirishdan qurilishdagi mualliflik nazorati va ekspluatatsiya xodimlarini o‘qitishgacha.'
    },
    services: [
      { ru: 'Технические консультации', uz: 'Texnik maslahatlar' },
      { ru: 'Техническое сопровождение проектов', uz: 'Loyihalarni texnik kuzatib borish' },
      { ru: 'Авторский надзор', uz: 'Mualliflik nazorati' },
      { ru: 'Обучение персонала по электробезопасности', uz: 'Xodimlarni elektr xavfsizligi bo‘yicha o‘qitish' },
      { ru: 'Обучение эксплуатации оборудования', uz: 'Uskunani ekspluatatsiya qilishga o‘rgatish' }
    ]
  },
  {
    slug: 'dolzhnostnye-instrukcii',
    num: '17',
    icon: 'doc',
    title: { ru: 'Должностные инструкции и регламенты', uz: 'Lavozim yo‘riqnomalari va reglamentlar' },
    short: {
      ru: 'Разработка ДИ и регламентов для электротехнического персонала — от электромонтажника до руководителя проекта.',
      uz: 'Elektrotexnik xodimlar uchun LY va reglamentlarni ishlab chiqish — elektromontajchidan loyiha rahbarigacha.'
    },
    intro: {
      ru: 'Разрабатываем должностные инструкции и рабочие регламенты под структуру вашего предприятия. Документы учитывают требования охраны труда и электробезопасности и готовы к утверждению.',
      uz: 'Korxonangiz tuzilmasiga mos lavozim yo‘riqnomalari va ish reglamentlarini ishlab chiqamiz. Hujjatlar mehnat muhofazasi va elektr xavfsizligi talablarini hisobga oladi va tasdiqlashga tayyor.'
    },
    services: [
      { ru: 'ДИ для электромонтажников', uz: 'Elektromontajchilar uchun LY' },
      { ru: 'ДИ для наладчиков', uz: 'Sozlovchilar uchun LY' },
      { ru: 'ДИ для инженеров ПНР', uz: 'ITS muhandislari uchun LY' },
      { ru: 'ДИ для электролаборантов', uz: 'Elektrolaborantlar uchun LY' },
      { ru: 'ДИ для специалистов по автоматике', uz: 'Avtomatika mutaxassislari uchun LY' },
      { ru: 'ДИ для крановщиков', uz: 'Kranchilar uchun LY' },
      { ru: 'ДИ для монтажников СКС', uz: 'SKS montajchilari uchun LY' },
      { ru: 'ДИ для инженеров по пожарной и электробезопасности', uz: 'Yong‘in va elektr xavfsizligi muhandislari uchun LY' },
      { ru: 'ДИ для руководителя проекта', uz: 'Loyiha rahbari uchun LY' }
    ]
  }
]
