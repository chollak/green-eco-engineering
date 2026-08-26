# Глоссарий RU → UZ и правила перевода

Справочник для любых будущих правок узбекских текстов сайта.
Составлен агентом-переводчиком, проверен редакторским аудитом.

## Правила

1. АББРЕВИАТУРЫ — ЕДИНОЕ ПРАВИЛО (не отступать): русскую аббревиатуру НЕ переводим и НЕ выдумываем узбекскую. Пишем узбекскую расшифровку словами + русскую аббревиатуру ЛАТИНИЦЕЙ ЗАГЛАВНЫМИ в скобках. Первое упоминание на странице: «Kirish-taqsimlash qurilmasi (VRU)», «Bosh taqsimlash shchiti (GRSH)». Все последующие упоминания — только аббревиатура: «VRU montaji», «GRSH yig‘ish». Причина: инженер ищет и говорит «ВРУ/ГРЩ/АВР», а не «KTQ» — придуманная узбекская аббревиатура убивает и понимание, и поиск.

2. ТРАНСЛИТЕРАЦИЯ АББРЕВИАТУР (фиксированная таблица): В→V, Г→G, Д→D, Ж→J, З→Z, Й→Y, Х→X, Ц→S, Ч→CH, Ш→SH, Щ→SH, Э→E, Ю→YU, Я→YA. Отсюда: ВРУ→VRU, ГРЩ→GRSH, ЩСУ→SHSU, УЗО→UZO, АВР→AVR, ДГУ→DGU, ИБП→IBP, ТП→TP, КТП→KTP, СОУЭ→SOUE, СКУД→SKUD, СКС→SKS, ПНР→PNR, ПЛК→PLK, ЧРП→CHRP, РЗА→RZA, МТЗ→MTZ, СИЗ→SIZ, ПУЭ→PUE. Всегда капслоком, без точек и дефисов внутри.

3. ИСКЛЮЧЕНИЯ ИЗ ПРАВИЛА АББРЕВИАТУР — международная форма побеждает русскую там, где она уже вошла в обиход: UPS (не IBP), PLC рядом с PLK, SCADA, LED, IP54/IP65, RCD не используем. Пишем «Uzluksiz quvvat manbai (UPS)», «Dasturlanuvchi mantiqiy kontroller (PLK/PLC)». Отдельно: ШНК — в узбекском тексте это родное ShNQ (Shaharsozlik normalari va qoidalari), пишем ShNQ, а не «SHNK». ИНН в реквизитах — STIR. ООО — MChJ (Green Eco Engineering MChJ).

4. АПОСТРОФЫ — КРИТИЧНО. o‘ и g‘ пишутся символом U+2018 (левая одинарная кавычка «‘»), HTML-мнемоника &#8216;. НИКОГДА не писать o' / g' (U+0027), o’ / g’ (U+2019), o` / g` (гравис) — это ошибка, которую сразу видит носитель. Правильно: yong‘in, o‘chirgich, ko‘rsatish, o‘lchash, tarmog‘i, bo‘yicha, to‘liq.

5. ВТОРОЙ АПОСТРОФ — ТУТУК БЕЛГИСИ (гортанная смычка внутри слова) — это ДРУГОЙ символ: U+2019 («’»), HTML &#8217;. Правильно: ta’mirlash, ta’minot, ma’lumot, qat’iy, san’at, e’lon, mas’ul. Итого на сайте живут два разных знака: ‘ (U+2018) только в связках o‘/g‘, и ’ (U+2019) только внутри слов вместо ъ. Перед сдачей текста прогнать поиск по ' и ` — их в узбекских текстах быть не должно.

6. ТЕХНИКА АПОСТРОФОВ В CMS: отключить «умные кавычки»/автозамену в редакторе — они превращают ‘ в ’ и ломают o‘. Проверить, что подключённый шрифт содержит U+2018/U+2019 (Inter, Roboto, PT Sans — содержат). В URL-слагах и именах файлов апостроф НЕ используем и не заменяем: /uz/kabel-yotqizish, /uz/yongin-signalizatsiyasi (yong‘in → yongin). В title, alt, meta description апостроф пишем нормально.

7. ГЛАГОЛЫ УСЛУГ — ЕДИНЫЙ СЛОВАРЬ (одна услуга = один глагол на всём сайте): монтаж → montaj qilish / o‘rnatish; прокладка → yotqizish (в земле, траншее, под землёй) и tortish (по лоткам, воздуху, трубам); наладка → sozlash; пусконаладка → ishga tushirish-sozlash; испытание → sinash / sinovdan o‘tkazish; проверка → tekshirish (существительное — tekshiruv); обслуживание → xizmat ko‘rsatish (ТО → texnik xizmat ko‘rsatish); ремонт → ta’mirlash; замена → almashtirish; подключение → ulash (ulanish — это состояние/факт, не услуга); разработка → ishlab chiqish (проектирование → loyihalash).

8. ФОРМУЛА ЗАГОЛОВКА УСЛУГИ: объект в винительном падеже (-ni) + отглагольное существительное на -sh/-ish. «Kabel liniyalarini yotqizish», «Yong‘in signalizatsiyasini montaj qilish», «GRSH-ni yig‘ish va ulash», «Elektr o‘lchov ishlari». НЕ повелительное наклонение («Montaj qiling!»), НЕ инфинитивные канцеляризмы («amalga oshirish ishlarini bajarish» — вода). Услуга в меню и H1 звучит одинаково.

9. ПАДЕЖНЫЕ ОКОНЧАНИЯ К ЛАТИНСКИМ АББРЕВИАТУРАМ — через дефис: VRU-ni o‘rnatish, TP-ga ulash, KTP-da montaj, AVR-ni sozlash, PLK-ni dasturlash, SKUD-ni ishga tushirish. Окончание выбирается по звучанию аббревиатуры вслух (VRU-ni, GRSH-ni, TP-ga). После единиц измерения окончание пишем отдельно, без дефиса: «10 kV gacha», «0,4 kV li kabel liniyasi», «110 kV gacha bo‘lgan qurilmalar».

10. ТЕРМИНЫ, КОТОРЫЕ НЕ ПЕРЕВОДИМ (живой обиход энергетиков Узбекистана — насильный перевод читается как машинный): montaj, kabel, shchit, shina, avtomat, rubilnik, puskatel, kontaktor, mufta, gilza, nakonechnik, lotok, gofra, klemma, opora, izolyator, transformator, generator, podstansiya, yacheyka, datchik, invertor, akkumulyator, smeta, protokol, akt, obyekt, naryad-dopusk, avariya, brigada, sprinkler, domofon, stoyka, kran-balka, kozlovoy kran, teplovizor. Пишем их узбекской латиницей как есть — это норма, а не ошибка.

11. ЛОЖНЫЕ ДРУЗЬЯ — ТАК НЕ ПИСАТЬ: щит ≠ qalqon (это боевой щит) → shchit; прокладка ≠ yotqizma → yotqizish; испытание ≠ tajriba (это опыт/эксперимент) → sinov; разработка ≠ rivojlantirish → ishlab chiqish; обслуживание ≠ ta’minlash → xizmat ko‘rsatish; объект ≠ buyum → obyekt; лоток ≠ tarnov → lotok; замена ≠ o‘zgartirish → almashtirish; сеть (электрическая) ≠ to‘r → tarmoq.

12. ЕДИНИЦЫ И ЧИСЛА: kV, kVt, kVA, A, Om, Gts, mm², kVt·soat. Десятичный разделитель — запятая: 0,4 kV; 6/10 kV; 0,4/10 kV. Класс напряжения пишем цифрами: «110 kV gacha». Телефон, e-mail, ИНН/STIR, названия брендов и модели оборудования (ABB, Schneider Electric, IEK, АВВГ, ВБбШв) НЕ транслитерируем и НЕ переводим.

13. ОДИН ТЕРМИН — ОДИН ПЕРЕВОД. Не чередовать синонимы внутри сайта. Фиксируем выбор: заземление — только «yerga ulash» (не yerlantirish); электролаборатория — только «elektrotexnik laboratoriya» (в тексте допускается разговорное elektrolaboratoriya); протокол испытаний — «sinov bayonnomasi (protokol)» в первом упоминании, дальше «protokol»; исполнительная документация — «ijroiya hujjatlari». Если копирайтер хочет ввести новый термин — сначала в этот глоссарий, потом в текст.

14. ТОН И ОБРАЩЕНИЕ: к клиенту — на «Siz» (Siz uchun, Sizning obyektingizda), о компании — «biz» (biz bajaramiz, bizning elektrotexnik laboratoriyamiz). Избегать канцелярита «amalga oshirilishi taqdim etiladi», «xizmatlarimizni taqdim etishdan mamnunmiz». Пишем как инженер инженеру: конкретика, сроки, нормы, класс напряжения, наличие протокола.

15. SEO ДЛЯ УЗБЕКСКОЙ ВЕРСИИ: русская аббревиатура остаётся в title и H1 — по ней ищут («VRU montaji Toshkent», «elektrolaboratoriya protokol», «yong‘in signalizatsiyasi montaji»). Узбекскую расшифровку даём в первом абзаце. В meta description держим обе формы — узбекскую расшифровку и аббревиатуру. Не делать узбекскую страницу калькой русской: заголовки переписываем по формуле «объект + -ni + -ish», а не дословно.

## Термины

| Русский | Узбекский | Примечание |
|---|---|---|
| Электромонтажные работы | Elektr montaj ishlari | Допустимо слитно «elektromontaj ishlari». В H1 услуг используем первый вариант. |
| Электроснабжение | Elektr ta’minoti | Апостроф U+2019 (тутук белгиси). Электроснабжение объекта — obyektni elektr ta’minoti. |
| Кабельная линия (КЛ) | Kabel liniyasi (KL) | Мн. ч. — kabel liniyalari. Прокладка КЛ — kabel liniyalarini yotqizish. |
| Прокладка кабеля | Kabel yotqizish | В земле/траншее — yotqizish. По лоткам, трубам, воздуху — kabel tortish. Не «yotqizma». |
| Кабельный лоток | Kabel lotogi | Оставляем «lotok» — так говорят на объекте. «Tarnov» не использовать. |
| Кабельная муфта | Kabel muftasi | Концевая — chekki mufta, соединительная — biriktiruvchi mufta. |
| Сечение кабеля | Kabel kesimi | Пишем с единицей: 4x95 mm² kesimli kabel. |
| Провод / жила | Sim / tomir | Кабель — kabel, отдельный провод — sim. Жила кабеля — kabel tomiri. |
| Воздушная линия (ВЛ) | Havo liniyasi (VL) | Полностью — havo elektr uzatish liniyasi. ЛЭП — elektr uzatish liniyasi. |
| Опора ЛЭП | Elektr uzatish liniyasi tayanchi (opora) | На объекте говорят «opora» — в тексте оставляем в скобках. |
| Электропроводка | Elektr simlari (provodka) | Монтаж проводки — elektr simlarini tortish. |
| Распределительный щит | Taqsimlash shchiti | Щит — только shchit, не «qalqon». Сборка щита — shchit yig‘ish. |
| ВРУ (вводно-распределительное устройство) | Kirish-taqsimlash qurilmasi (VRU) | Дальше по тексту — только VRU. Падеж через дефис: VRU-ni o‘rnatish. |
| ГРЩ (главный распределительный щит) | Bosh taqsimlash shchiti (GRSH) | Щ→SH по таблице транслитерации. Дальше — GRSH. |
| ЩСУ (щит станций управления) | Boshqaruv stansiyalari shchiti (SHSU) | Разговорно — «ishga tushirish-boshqarish shchiti». Аббревиатура в тексте — SHSU. |
| Щит учёта | Hisoblagich shchiti | Счётчик электроэнергии — elektr hisoblagichi. |
| Автоматический выключатель | Avtomatik o‘chirgich (avtomat) | В обиходе — просто «avtomat», это норма. o‘ через U+2018. |
| УЗО (устройство защитного отключения) | Himoya o‘chirish qurilmasi (UZO) | Дифавтомат — differensial avtomat. |
| АВР (автоматический ввод резерва) | Rezervni avtomatik ulash qurilmasi (AVR) | Монтаж АВР — AVR-ni montaj qilish va sozlash. |
| Заземление | Yerga ulash | Фиксируем единый вариант. «Yerlantirish» и «zazemleniye» — только устно, в текст не берём. |
| Контур заземления | Yerga ulash konturi | Измерение сопротивления контура — yerga ulash konturi qarshiligini o‘lchash. |
| Молниезащита | Chaqmoqdan himoya | Молниеотвод/молниеприёмник — yashin qaytargich. |
| Освещение (внутреннее / наружное) | Yoritish (ichki / tashqi yoritish) | Рабочее — ishchi yoritish, аварийное — avariya yoritish. |
| Розетка / выключатель (бытовой) | Rozetka / vyklyuchatel | Бытовой выключатель света — vyklyuchatel; коммутационный аппарат — o‘chirgich. Не путать. |
| Напряжение | Kuchlanish | Класс напряжения — kuchlanish sinfi. «10 kV gacha kuchlanish». |
| Ток | Tok | Ток нагрузки — yuklama toki. Ток КЗ — qisqa tutashuv toki. |
| Мощность | Quvvat | Установленная мощность — o‘rnatilgan quvvat. Не путать с «kuch». |
| Нагрузка | Yuklama | Расчёт нагрузок — yuklamalarni hisoblash. |
| Короткое замыкание (КЗ) | Qisqa tutashuv (QT) | Здесь узбекская аббревиатура уже устоялась в нормативке — допускаем QT, но в тексте лучше словами. |
| Трансформаторная подстанция (ТП) | Transformator podstansiyasi (TP) | «Podstansiya» не переводим. Дальше по тексту — TP. |
| КТП (комплектная трансформаторная подстанция) | Komplekt transformator podstansiyasi (KTP) | Монтаж КТП — KTP-ni montaj qilish va ishga tushirish. |
| Силовой трансформатор | Kuch transformatori | Мощность в кВА: 630 kVA li kuch transformatori. |
| Высоковольтное оборудование | Yuqori kuchlanishli uskunalar | Работы до 110 кВ — 110 kV gacha bo‘lgan qurilmalarda ishlash. |
| Ячейка КРУ | KRU yacheykasi | «Yacheyka» оставляем в русской форме — так говорят. |
| Разъединитель | Ajratgich (razyedinitel) | В нормативке — ajratgich, на объекте — razyedinitel. |
| Масляный / вакуумный выключатель | Moyli / vakuumli o‘chirgich | Выключатель нагрузки — yuk o‘chirgichi. |
| Шина / ошиновка | Shina / shinalash | Шинопровод — shinaprovod. Не переводим. |
| Изолятор | Izolyator | Изоляция — izolyatsiya. Сопротивление изоляции — izolyatsiya qarshiligi. |
| ОПН (ограничитель перенапряжений) | O‘ta kuchlanish cheklagichi (OPN) | Разрядник — razryadnik. |
| Релейная защита и автоматика (РЗА) | Rele himoyasi va avtomatika (RZA) | Проверка РЗА — RZA-ni tekshirish va sozlash. |
| МТЗ (максимальная токовая защита) | Maksimal tok himoyasi (MTZ) | Земляная защита — yerga tutashuvdan himoya. |
| Уставка защиты | Himoya ustavkasi | «Ustavka» оставляем; описательно — sozlama qiymati. |
| Селективность защит | Himoyalar selektivligi | Проверка селективности — selektivlikni tekshirish. |
| Электролаборатория | Elektrotexnik laboratoriya | Ключевое преимущество компании. Разговорно — elektrolaboratoriya. С правом выдачи протоколов — protokol berish huquqiga ega. |
| Электроизмерительные работы | Elektr o‘lchov ishlari | Замеры — o‘lchovlar. «O‘lchash» — процесс. |
| Измерение сопротивления изоляции | Izolyatsiya qarshiligini o‘lchash | Мегаомметр — megaommetr. |
| Испытание повышенным напряжением | Yuqori kuchlanish bilan sinash | Испытание — sinov/sinash, не «tajriba». |
| Петля «фаза-ноль» | «Faza-nol» halqasi | Полностью: «faza-nol» halqasi qarshiligini o‘lchash. |
| Тепловизионное обследование | Teplovizion tekshiruv | Тепловизор — teplovizor, не переводим. |
| Протокол испытаний | Sinov bayonnomasi (protokol) | Первое упоминание — с «protokol» в скобках, дальше только «protokol». |
| Пусконаладочные работы (ПНР) | Ishga tushirish-sozlash ishlari (PNR) | Наладка — sozlash. Комплексное опробование — kompleks sinov. |
| Ввод в эксплуатацию | Foydalanishga topshirish | Запуск оборудования — uskunani ishga tushirish. |
| ПЛК (программируемый логический контроллер) | Dasturlanuvchi mantiqiy kontroller (PLK/PLC) | Единственный случай, где даём две аббревиатуры: узбекские автоматчики используют обе. Программирование ПЛК — PLK-ni dasturlash. |
| АСУ ТП | Texnologik jarayonlarni avtomatlashtirilgan boshqaruv tizimi (ASU TP) | Дальше по тексту — ASU TP. |
| Шкаф автоматики | Avtomatika shkafi | Шкаф — shkaf (щит — shchit). Разные вещи, не смешивать. |
| Частотный преобразователь (ЧРП) | Chastota o‘zgartirgich (CHRP) | Разговорно — «chastotnik». |
| Датчик | Datchik (sensor) | Не переводим. Датчик давления — bosim datchigi. |
| Диспетчеризация | Dispetcherlashtirish | SCADA — SCADA tizimi, латиницей как есть. |
| ДГУ (дизель-генераторная установка) | Dizel-generator qurilmasi (DGU) | Разговорно — «dizel generator». Монтаж и ПНР ДГУ — DGU-ni montaj qilish va PNR. |
| ИБП (источник бесперебойного питания) | Uzluksiz quvvat manbai (UPS) | Исключение из правила: в узбекском обиходе доминирует UPS. Русскую форму IBP даём только если она есть в документах заказчика. |
| Пожарная сигнализация (АПС) | Yong‘in signalizatsiyasi (APS) | yong‘in — g‘ через U+2018. Монтаж — yong‘in signalizatsiyasini montaj qilish. |
| Автоматическое пожаротушение | Avtomatik yong‘in o‘chirish tizimi | Порошковое — kukunli, газовое — gazli, водяное — suvli yong‘in o‘chirish. |
| СОУЭ | Odamlarni ogohlantirish va evakuatsiyani boshqarish tizimi (SOUE) | Длинная расшифровка — даём один раз, дальше только SOUE. |
| Дымовой извещатель | Tutun datchigi (izveshchatel) | Тепловой — issiqlik datchigi, ручной — qo‘lda ishga tushirish tugmasi. |
| Спринклерная система | Sprinkler tizimi | Не переводим. Дренчерная — drencher tizimi. |
| Дымоудаление | Tutunni chiqarib yuborish tizimi | Подпор воздуха — havo bosimini oshirish tizimi. |
| Огнезащитная обработка | Yong‘inga qarshi ishlov berish | Огнезащита кабеля — kabelni yong‘indan himoyalash. |
| Пожарный гидрант / огнетушитель | Yong‘in gidranti / o‘t o‘chirgich | Оба термина узбекские, русскую форму не используем. |
| Слаботочные системы | Kuchsiz tok tizimlari | Разговорно — «slabotochka», в текст не берём. |
| СКС (структурированная кабельная система) | Strukturalashtirilgan kabel tizimi (SKS) | Дальше — SKS. Патч-панель — patch-panel. |
| СКУД | Kirishni boshqarish va nazorat qilish tizimi (SKUD) | Турникет — turniket, контроллер доступа — kirish kontrolleri. |
| Видеонаблюдение | Videokuzatuv tizimi | Камера — kamera, регистратор — videoregistrator. |
| ЛВС / локальная сеть | Lokal tarmoq (LVS) | tarmoq — сеть. Обратите внимание: tarmog‘i с g‘ (U+2018). |
| Серверная / телекоммуникационная стойка | Server xonasi / stoyka (shkaf) | «Stoyka» оставляем в русской форме. |
| Домофон | Domofon | Видеодомофон — videodomofon. |
| Солнечная электростанция (СЭС) | Quyosh elektr stansiyasi (QES) | Здесь узбекская аббревиатура официальная и общеупотребимая — используем QES, русскую СЭС/SES даём только в скобках при первом упоминании. |
| Солнечная панель / модуль | Quyosh paneli / quyosh moduli | Монтаж панелей — quyosh panellarini o‘rnatish. |
| Инвертор | Invertor | Сетевой — tarmoqqa ulanadigan invertor, гибридный — gibrid invertor. |
| Сетевая / автономная СЭС | Tarmoqqa ulangan / avtonom QES | Off-grid — avtonom, on-grid — tarmoqqa ulangan. |
| Аккумуляторная батарея | Akkumulyator batareyasi | Ёмкость — sig‘imi (g‘ через U+2018). |
| ВИЭ (возобновляемые источники энергии) | Qayta tiklanuvchi energiya manbalari (QTEM) | Официальный узбекский термин из нормативки, аббревиатура QTEM допустима. |
| Грузоподъёмные краны | Yuk ko‘taruvchi kranlar | ko‘ — U+2018. Грузоподъёмность — yuk ko‘tarish quvvati. |
| Мостовой кран | Ko‘prikli kran | Козловой — kozlovoy kran (в узбекском обиходе русская форма). |
| Кран-балка | Kran-balka | Не переводим. Тельфер — telfer. |
| Крановые пути | Kran yo‘llari (relslari) | Выверка путей — kran yo‘llarini rostlash. |
| Техническое освидетельствование крана | Kranni texnik ko‘rikdan o‘tkazish | Частичное/полное — qisman / to‘liq texnik ko‘rik. |
| Концевой выключатель | Chegaraviy o‘chirgich (konsevoy) | На объекте — «konsevik»; в тексте даём узбекский вариант с русским в скобках. |
| Троллейный шинопровод | Trolleyli shinaprovod | Не переводим. |
| Охрана труда | Mehnat muhofazasi | Устойчивый узбекский термин, русскую форму не используем. |
| Техника безопасности | Xavfsizlik texnikasi | Правила ТБ — xavfsizlik texnikasi qoidalari. |
| Группа по электробезопасности (до V) | Elektr xavfsizligi bo‘yicha guruh (V guruhgacha) | Ключевой козырь компании. Пример: V guruhgacha elektr xavfsizligi guruhiga ega xodimlar. |
| Аттестованный персонал | Attestatsiyadan o‘tgan xodimlar | Допуск к работам — ishga qo‘yish (dopusk). |
| Наряд-допуск | Naryad-dopusk | Оставляем в русской форме — узбекская калька «ruxsatnoma-topshiriq» в отрасли не прижилась. |
| СИЗ (средства индивидуальной защиты) | Shaxsiy himoya vositalari (SIZ) | Диэлектрические перчатки — dielektrik qo‘lqoplar. |
| Инструктаж | Instruktaj (yo‘l-yo‘riq) | Вводный — kirish instruktaji, на рабочем месте — ish joyidagi instruktaj. |
| Аварийный выезд 24/7 | 24/7 avariya chaqiruvi | Выезд бригады — brigadaning chiqishi. «Avariya» не переводим. |
| Исполнительная документация | Ijroiya hujjatlari | Полный комплект — to‘liq to‘plam. Ключевой козырь: to‘liq ijroiya hujjatlari to‘plami. |
| Проектная документация | Loyiha hujjatlari | Разработка проекта — loyihani ishlab chiqish; проектирование — loyihalash. |
| Технические условия (ТУ) | Texnik shartlar (TSh) | Получение ТУ — texnik shartlarni olish. |
| Акт скрытых работ | Yashirin ishlar dalolatnomasi | Акт — dalolatnoma; на объекте говорят «akt» — допустимо в скобках. |
| Смета / фиксированная смета в договоре | Smeta / shartnomada qat’iy belgilangan smeta | qat’iy — апостроф U+2019. Ключевой оффер компании. |
| Коммерческое предложение (КП) | Tijorat taklifi | В CTA: «Tijorat taklifini oling». |
| ШНК | ShNQ (Shaharsozlik normalari va qoidalari) | В узбекском тексте — только ShNQ, не «SHNK». Пример: ShNQ va PUE talablariga muvofiq. |
| ПУЭ | Elektr qurilmalarini o‘rnatish qoidalari (PUE) | Аббревиатуру оставляем русскую — узбекского эквивалента в обиходе нет. |
| Заказчик / подрядчик | Buyurtmachi / pudratchi | Генподрядчик — bosh pudratchi. Субподряд — subpudrat. |
| Объект | Obyekt | Не «buyum». На объекте — obyektda. |
| Гарантия на работы | Ishlarga kafolat | Гарантийный срок — kafolat muddati. |
| Лицензия / сертификат | Litsenziya / sertifikat | Право выдачи протоколов — protokol berish huquqi. |
| Монтаж | Montaj qilish / o‘rnatish | Глагол услуг №1. «Montaj» — существительное, «o‘rnatish» — для установки конкретного оборудования. |
| Наладка | Sozlash | Пусконаладка — ishga tushirish-sozlash (PNR). |
| Испытание | Sinash / sinovdan o‘tkazish | Существительное — sinov. Не «tajriba». |
| Проверка | Tekshirish | Существительное — tekshiruv. Обследование — ko‘rik/tekshiruv. |
| Обслуживание | Xizmat ko‘rsatish | Техобслуживание (ТО) — texnik xizmat ko‘rsatish. Абонентское — abonent xizmati. |
| Ремонт | Ta’mirlash | Апостроф U+2019. Капитальный — kapital ta’mirlash, текущий — joriy ta’mirlash. |
| Замена | Almashtirish | Замена кабеля — kabelni almashtirish. Не «o‘zgartirish». |
| Подключение | Ulash | Подключение к сети — tarmoqqa ulash. «Ulanish» — факт подключения, не услуга. |
| Разработка | Ishlab chiqish | Разработка проекта — loyihani ishlab chiqish. Не «rivojlantirish». |
