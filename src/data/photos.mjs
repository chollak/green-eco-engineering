// Фотографии-иллюстрации к разделам.
//
// ВАЖНО ПРО ЧЕСТНОСТЬ: это иллюстрации типового оборудования, а НЕ объекты
// компании. Подпись под каждым кадром это прямо называет. Как только клиент
// пришлёт снимки со своих объектов, они займут те же места — достаточно
// заменить файл и переписать caption, вёрстку трогать не нужно.
//
// Ключ — slug раздела из sections.mjs, значение — список кадров по порядку.
// Первый кадр раздела идёт во всю ширину, остальные — сеткой под ним.
//
// Исходники: src/photos/<slug>.jpg для первого кадра, <slug>-2.jpg, -3.jpg
// для следующих. Обработка: node scripts-photos.mjs
//
// Пропорции НЕ задаются здесь: они берутся из photo-sizes.mjs, то есть кадр
// показывается ровно таким, каким пришёл. Это сознательно — присланное
// клиентом нельзя обрезать до 16/9, не выкинув половину смысла кадра.

export const photos = {
  'elektromontazhnye-raboty': [
    {
      alt: {
        ru: 'Ряд напольных распределительных шкафов в электрощитовой, над ними кабельные лотки',
        uz: 'Elektr shchit xonasidagi taqsimlash shkaflari qatori, tepasida kabel tokchalari'
      },
      caption: {
        ru: 'Щитовая: ряд напольных распределительных шкафов на цоколях, ввод кабеля сверху по лоткам',
        uz: 'Shchit xonasi: tsokollarda turgan taqsimlash shkaflari qatori, kabel tepadan tokchalar orqali kiritilgan'
      }
    },
    {
      alt: {
        ru: 'Руки в перчатках с инструментом у ряда рубильников, на отходящих кабелях бирки',
        uz: 'Qo‘lqopdagi qo‘llar asbob bilan rubilniklar qatorida, chiqish kabellarida birkalar'
      },
      caption: {
        ru: 'Работа в щите: перчатки, инструмент с изолированной рукояткой, на каждом отходящем кабеле бирка с маркировкой',
        uz: 'Shchitda ish: qo‘lqoplar, izolyatsiyalangan dastali asbob, har bir chiqish kabelida markirovka birkasi'
      }
    },
    {
      alt: {
        ru: 'Распаечная коробка на деревянной стене, к ней подходит гофрированная труба с проводами',
        uz: 'Yog‘och devordagi tarmoqlash qutisi, unga simlar bilan gofra quvur kelgan'
      },
      caption: {
        ru: 'Распаечная коробка и прокладка в гофрированной трубе: ввод с трёх сторон, жилы разведены по цветам',
        uz: 'Tarmoqlash qutisi va gofra quvurda yotqizish: uch tomondan kirish, tomirlar rang bo‘yicha ajratilgan'
      }
    }
  ],

  'puskonaladochnye-raboty': [
    {
      alt: {
        ru: 'Операторская: шкафы с приборами на стене, пульт управления с сенсорными панелями',
        uz: 'Operator xonasi: devorda asbobli shkaflar, sensorli panelli boshqaruv pulti'
      },
      caption: {
        ru: 'Операторская после наладки: панели HMI с мнемосхемами, световые колонны, приборы контроля на стене',
        uz: 'Sozlashdan keyingi operator xonasi: mnemosxemali HMI panellar, signal ustunlari, devorda nazorat asboblari'
      }
    }
  ],

  'elektrolaboratoriya': [
    {
      alt: {
        ru: 'Измерение в распределительном щите: прибор в руке, щуп на клемме',
        uz: 'Taqsimlash shchitida o‘lchov: qo‘lda asbob, klemmada shchup'
      },
      caption: {
        ru: 'Измерения в щите под напряжением: работа в перчатках, щупы на клеммном ряду',
        uz: 'Kuchlanish ostidagi shchitda o‘lchovlar: qo‘lqopda ishlash, klemma qatorida shchuplar'
      }
    },
    {
      alt: {
        ru: 'Замер токоизмерительными клещами в шкафу с контакторами и тепловыми реле',
        uz: 'Kontaktor va issiqlik relelari bo‘lgan shkafda tok o‘lchagich klesh bilan o‘lchov'
      },
      caption: {
        ru: 'Замер тока клещами в шкафу с контакторами: показания снимаются без разрыва цепи',
        uz: 'Kontaktorli shkafda klesh bilan tok o‘lchash: ko‘rsatkich zanjirni uzmasdan olinadi'
      }
    }
  ],

  'elektrobezopasnost': [
    {
      alt: {
        ru: 'Схема контура заземления: вертикальные заземлители и горизонтальная полоса в грунте у дома',
        uz: 'Yerga ulash konturi sxemasi: uy yonidagi tuproqda vertikal yerlatgichlar va gorizontal polosa'
      },
      caption: {
        ru: 'Контур заземления в разрезе: вертикальные электроды, связанные горизонтальной полосой, и заземляющий проводник к зданию',
        uz: 'Kesimda yerga ulash konturi: gorizontal polosa bilan tutashtirilgan vertikal elektrodlar va binoga boradigan yerga ulash o‘tkazgichi'
      }
    },
    {
      alt: {
        ru: 'Схема системы заземления IT: подстанция, линия 380 В и вводно-распределительное устройство здания',
        uz: 'IT yerga ulash tizimi sxemasi: podstansiya, 380 V liniya va binoning kirish-taqsimlash qurilmasi'
      },
      caption: {
        ru: 'Система заземления IT: нейтраль источника изолирована от земли, открытые проводящие части электроприёмника заземлены на месте',
        uz: 'IT yerga ulash tizimi: manba neytrali yerdan izolyatsiyalangan, elektr qabul qilgichning ochiq o‘tkazuvchi qismlari joyida yerga ulangan'
      }
    }
  ],

  'tehnicheskoe-obsluzhivanie': [
    {
      alt: {
        ru: 'Асинхронный двигатель с разобранным подшипниковым узлом, видна обмотка статора',
        uz: 'Podshipnik qismi ochilgan asinxron dvigatel, stator o‘ramasi ko‘rinib turibdi'
      },
      caption: {
        ru: 'Ревизия двигателя: снят подшипниковый щит, открыт доступ к обмотке статора и валу под замену подшипника',
        uz: 'Dvigatel reviziyasi: podshipnik qopqog‘i olingan, stator o‘ramasi va valga podshipnik almashtirish uchun kirish ochilgan'
      }
    }
  ],

  'pozharnaya-bezopasnost': [
    {
      alt: {
        ru: 'Дымовые извещатели, закреплённые на балке под потолком склада',
        uz: 'Ombor shiftidagi balkaga o‘rnatilgan tutun datchiklari'
      },
      caption: {
        ru: 'Точечные дымовые извещатели на несущей балке, шаг расстановки по площади защищаемого помещения',
        uz: 'Ko‘taruvchi balkadagi nuqtali tutun datchiklari, joylashtirish qadami himoyalanadigan xona maydoniga qarab'
      }
    }
  ],

  'kranovoe-hozyaystvo': [
    {
      alt: {
        ru: 'Мостовой кран на подкрановых путях в производственном цехе',
        uz: 'Ishlab chiqarish sexidagi kran yo‘llarida ko‘prikli kran'
      },
      caption: {
        ru: 'Мостовой кран: гибкий токоподвод вдоль моста, крюковая подвеска, подкрановые пути',
        uz: 'Ko‘prikli kran: ko‘prik bo‘ylab egiluvchan tok ta’minoti, ilmoqli osma, kran yo‘llari'
      }
    }
  ],

  'solnechnye-elektrostancii': [
    {
      alt: {
        ru: 'Массив солнечных панелей на плоской кровле промышленного здания',
        uz: 'Sanoat binosining tekis tomidagi quyosh panellari massivi'
      },
      caption: {
        ru: 'Фотоэлектрические модули на плоской кровле: балластные опоры, разнос рядов по углу затенения',
        uz: 'Tekis tomdagi fotoelektrik modullar: ballast tayanchlar, qatorlar orasi soyalanish burchagi bo‘yicha'
      }
    },
    {
      alt: {
        ru: 'Ряды солнечных панелей на наземных опорах вдоль дороги',
        uz: 'Yo‘l bo‘ylab yerdagi tayanchlarda quyosh panellari qatorlari'
      },
      caption: {
        ru: 'Наземная станция: ряды модулей на фиксированных опорах, между рядами оставлен проезд для обслуживания',
        uz: 'Yer usti stansiyasi: qat’iy tayanchlarda modul qatorlari, qatorlar orasida xizmat ko‘rsatish uchun yo‘lak qoldirilgan'
      }
    },
    {
      alt: {
        ru: 'Схема солнечной электростанции частного дома: панели, контроллер, аккумулятор, инвертор',
        uz: 'Xususiy uy quyosh elektr stansiyasi sxemasi: panellar, kontroller, akkumulyator, invertor'
      },
      caption: {
        ru: 'Состав автономной станции: панели и контроллер заряда на постоянном токе, аккумулятор, инвертор на переменный ток для обычной нагрузки',
        uz: 'Avtonom stansiya tarkibi: doimiy tokda panellar va zaryad kontrolleri, akkumulyator, oddiy yuklama uchun o‘zgaruvchan tok invertori'
      }
    }
  ],

  'avtomatika-i-upravlenie': [
    {
      alt: {
        ru: 'Внутреннее наполнение шкафа управления: контроллер, автоматы, клеммники',
        uz: 'Boshqaruv shkafi ichki qismi: kontroller, avtomatlar, klemmalar'
      },
      caption: {
        ru: 'Шкаф управления: контроллер с модулями расширения, автоматы и реле на DIN-рейках, разводка в кабель-каналах',
        uz: 'Boshqaruv shkafi: kengaytirish modulli kontroller, DIN-reykalarda avtomat va relelar, kabel kanallarida simlash'
      }
    },
    {
      alt: {
        ru: 'Шкаф управления в сборе: контроллер с дисплеем, автоматы, клеммный ряд, частотный преобразователь',
        uz: 'Yig‘ilgan boshqaruv shkafi: displeyli kontroller, avtomatlar, klemma qatori, chastota o‘zgartirgich'
      },
      caption: {
        ru: 'Шкаф в сборе: контроллер с панелью и блоком питания сверху, защита на DIN-рейке, частотный преобразователь и клеммный ряд с вводами снизу',
        uz: 'Yig‘ilgan shkaf: tepada panelli kontroller va quvvat bloki, DIN-reykada himoya, pastda chastota o‘zgartirgich va kirishli klemma qatori'
      }
    }
  ],

  'kabelnye-seti': [
    {
      alt: {
        ru: 'Кабельные лотки под перекрытием с уложенными и стянутыми кабелями',
        uz: 'Yopma ostidagi kabel tokchalari, kabellar yotqizilgan va bog‘langan'
      },
      caption: {
        ru: 'Кабельная трасса по лоткам: поворот с сохранением радиуса изгиба, крепление к перекрытию на шпильках',
        uz: 'Tokchalar bo‘ylab kabel trassasi: egilish radiusini saqlagan burilish, shpilkalar bilan yopmaga mahkamlash'
      }
    },
    {
      alt: {
        ru: 'Кабели и красные защитные трубы, уложенные в открытую траншею',
        uz: 'Ochiq transheyaga yotqizilgan kabellar va qizil himoya quvurlari'
      },
      caption: {
        ru: 'Прокладка в траншее: кабели заводятся в защитные трубы, повороты выполнены с сохранением радиуса изгиба',
        uz: 'Transheyada yotqizish: kabellar himoya quvurlariga kiritiladi, burilishlar egilish radiusini saqlab bajarilgan'
      }
    },
    {
      alt: {
        ru: 'Концевая кабельная муфта с термоусаживаемой перчаткой и трубками по фазам',
        uz: 'Fazalar bo‘yicha termoyig‘iluvchi qo‘lqop va naychali kabel uchi muftasi'
      },
      caption: {
        ru: 'Концевая муфта: термоусаживаемая перчатка на разделке, по трубке на каждую жилу, фазы размечены цветом',
        uz: 'Uchki mufta: ajratish joyida termoyig‘iluvchi qo‘lqop, har bir tomirga bitta naycha, fazalar rang bilan belgilangan'
      }
    }
  ],

  'osveshchenie': [
    {
      alt: {
        ru: 'Складской комплекс с линейными светодиодными светильниками под фермами',
        uz: 'Fermalar ostida chiziqli LED chiroqlar o‘rnatilgan ombor majmuasi'
      },
      caption: {
        ru: 'Линейные светодиодные светильники на подвесах: ряды выставлены по стеллажным проходам',
        uz: 'Osmalardagi chiziqli LED chiroqlar: qatorlar stellaj yo‘laklari bo‘yicha joylashtirilgan'
      }
    },
    {
      alt: {
        ru: 'Мост ночью, освещённый рядом светильников на консольных опорах',
        uz: 'Kechasi konsol tayanchlardagi chiroqlar qatori bilan yoritilgan ko‘prik'
      },
      caption: {
        ru: 'Наружное освещение: светильники на консольных опорах с равным шагом, полотно освещено без тёмных провалов между опорами',
        uz: 'Tashqi yoritish: konsol tayanchlarda teng qadamdagi chiroqlar, tayanchlar orasida qorong‘i joy qolmagan'
      }
    }
  ],

  'vysokovoltnye-raboty': [
    {
      alt: {
        ru: 'Комплектная трансформаторная подстанция на площадке у производственного здания',
        uz: 'Ishlab chiqarish binosi yonidagi maydonchada kompleks transformator podstansiyasi'
      },
      caption: {
        ru: 'КТП наружной установки: силовой трансформатор с радиаторами, ввод по кабельным муфтам, шкаф РУ',
        uz: 'Tashqi o‘rnatiladigan KTP: radiatorli kuch transformatori, kabel muftalari orqali kiritish, TQ shkafi'
      }
    },
    {
      alt: {
        ru: 'Линейный разъединитель на железобетонной опоре воздушной линии',
        uz: 'Havo liniyasining temir-beton tayanchidagi chiziqli ajratgich'
      },
      caption: {
        ru: 'Разъединитель на опоре воздушной линии: три полюса на общей раме, привод снизу, шлейфы к проводам линии',
        uz: 'Havo liniyasi tayanchidagi ajratgich: umumiy ramada uch qutb, pastdan yuritma, liniya simlariga shleyflar'
      }
    },
    {
      alt: {
        ru: 'Ряд силовых трансформаторов с радиаторами, выводы подключены кабелями',
        uz: 'Radiatorli kuch transformatorlari qatori, chiqishlar kabellar bilan ulangan'
      },
      caption: {
        ru: 'Силовые трансформаторы с радиаторным охлаждением: на баке паспортная табличка, выводы обоих напряжений выведены сверху',
        uz: 'Radiator bilan sovitiladigan kuch transformatorlari: bakda pasport taxtachasi, ikkala kuchlanish chiqishlari tepaga chiqarilgan'
      }
    },
    {
      alt: {
        ru: 'Комплектная трансформаторная подстанция с открытой дверью отсека 0,4 кВ',
        uz: '0,4 kV bo‘limi eshigi ochiq kompleks transformator podstansiyasi'
      },
      caption: {
        ru: 'КТП наружной установки: воздушный ввод через проходные изоляторы на крыше, в отсеке 0,4 кВ — счётчик, приборы и автоматы отходящих линий',
        uz: 'Tashqi o‘rnatiladigan KTP: tomdagi o‘tkazgich izolyatorlar orqali havodan kiritish, 0,4 kV bo‘limida hisoblagich, asboblar va chiqish liniyalari avtomatlari'
      }
    }
  ],

  'slabotochnye-sistemy': [
    {
      alt: {
        ru: 'Промышленный коммутатор на DIN-рейке с патч-кордами и модуль ввода-вывода',
        uz: 'DIN-reykada patch-kordli sanoat kommutatori va kirish-chiqish moduli'
      },
      caption: {
        ru: 'Сетевое ядро в шкафу: промышленный коммутатор на DIN-рейке с резервированным питанием, рядом модуль ввода-вывода с шиной RS-485',
        uz: 'Shkafdagi tarmoq yadrosi: zaxira quvvatli DIN-reykadagi sanoat kommutatori, yonida RS-485 shinali kirish-chiqish moduli'
      }
    },
    {
      alt: {
        ru: 'Открытая стойка с патч-панелями, синие и жёлтые патч-корды уложены в жгуты',
        uz: 'Patch-panelli ochiq stoyka, ko‘k va sariq patch-kordlar dastalarga yig‘ilgan'
      },
      caption: {
        ru: 'Кроссовое поле СКС: патч-корды разведены по цвету подсистем и стянуты в горизонтальные жгуты',
        uz: 'SKS kross maydoni: patch-kordlar quyi tizim rangi bo‘yicha ajratilgan va gorizontal dastalarga bog‘langan'
      }
    },
    {
      alt: {
        ru: 'Отрезок кабеля витой пары с разделанной оболочкой, видны четыре пары',
        uz: 'Qobig‘i ochilgan o‘ralgan juftlik kabeli bo‘lagi, to‘rtta juft ko‘rinadi'
      },
      caption: {
        ru: 'Витая пара для СКС: четыре пары с сохранённым шагом скрутки — от него зависит категория линии',
        uz: 'SKS uchun o‘ralgan juftlik: o‘ralish qadami saqlangan to‘rt juft — liniya kategoriyasi shunga bog‘liq'
      }
    }
  ],

  'energoaudit': [
    {
      alt: {
        ru: 'Тепловизионное обследование распределительного щита',
        uz: 'Taqsimlash shchitining teplovizion tekshiruvi'
      },
      caption: {
        ru: 'Тепловизионное обследование под нагрузкой: перегрев контактных соединений виден до отказа',
        uz: 'Yuk ostida teplovizion tekshiruv: kontakt birikmalarining qizishi nosozlikkacha ko‘rinadi'
      }
    }
  ]
}

/** Имя файла кадра: первый — по slug раздела, следующие — со счётчиком. */
export const photoName = (slug, index = 0) => index === 0 ? slug : `${slug}-${index + 1}`

/** Файл, который ждёт скрипт обработки. */
export const photoSource = (slug, index = 0) => `src/photos/${photoName(slug, index)}.jpg`
