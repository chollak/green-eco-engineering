// Фотографии-иллюстрации к разделам.
//
// ВАЖНО ПРО ЧЕСТНОСТЬ: это иллюстрации типового оборудования, а НЕ объекты
// компании. Подпись под каждым кадром это прямо называет. Как только клиент
// пришлёт снимки со своих объектов, они займут те же места — достаточно
// заменить файл и переписать caption, вёрстку трогать не нужно.
//
// Ключ — slug раздела из sections.mjs. Исходники кладутся в src/photos/<slug>.jpg,
// обработка: node scripts-photos.mjs

export const photos = {
  'elektromontazhnye-raboty': {
    ratio: '16/9',
    alt: {
      ru: 'Ряд напольных распределительных шкафов в электрощитовой, над ними кабельные лотки',
      uz: 'Elektr shchit xonasidagi taqsimlash shkaflari qatori, tepasida kabel tokchalari'
    },
    caption: {
      ru: 'Щитовая: ряд напольных распределительных шкафов на цоколях, ввод кабеля сверху по лоткам',
      uz: 'Shchit xonasi: tsokollarda turgan taqsimlash shkaflari qatori, kabel tepadan tokchalar orqali kiritilgan'
    }
  },
  'elektrolaboratoriya': {
    ratio: '16/9',
    alt: {
      ru: 'Измерение в распределительном щите: прибор в руке, щуп на клемме',
      uz: 'Taqsimlash shchitida o‘lchov: qo‘lda asbob, klemmada shchup'
    },
    caption: {
      ru: 'Измерения в щите под напряжением: работа в перчатках, щупы на клеммном ряду',
      uz: 'Kuchlanish ostidagi shchitda o‘lchovlar: qo‘lqopda ishlash, klemma qatorida shchuplar'
    }
  },
  'pozharnaya-bezopasnost': {
    ratio: '16/9',
    alt: {
      ru: 'Дымовые извещатели, закреплённые на балке под потолком склада',
      uz: 'Ombor shiftidagi balkaga o‘rnatilgan tutun datchiklari'
    },
    caption: {
      ru: 'Точечные дымовые извещатели на несущей балке, шаг расстановки по площади защищаемого помещения',
      uz: 'Ko‘taruvchi balkadagi nuqtali tutun datchiklari, joylashtirish qadami himoyalanadigan xona maydoniga qarab'
    }
  },
  'kranovoe-hozyaystvo': {
    ratio: '16/9',
    alt: {
      ru: 'Мостовой кран на подкрановых путях в производственном цехе',
      uz: 'Ishlab chiqarish sexidagi kran yo‘llarida ko‘prikli kran'
    },
    caption: {
      ru: 'Мостовой кран: гибкий токоподвод вдоль моста, крюковая подвеска, подкрановые пути',
      uz: 'Ko‘prikli kran: ko‘prik bo‘ylab egiluvchan tok ta’minoti, ilmoqli osma, kran yo‘llari'
    }
  },
  'solnechnye-elektrostancii': {
    ratio: '16/9',
    alt: {
      ru: 'Массив солнечных панелей на плоской кровле промышленного здания',
      uz: 'Sanoat binosining tekis tomidagi quyosh panellari massivi'
    },
    caption: {
      ru: 'Фотоэлектрические модули на плоской кровле: балластные опоры, разнос рядов по углу затенения',
      uz: 'Tekis tomdagi fotoelektrik modullar: ballast tayanchlar, qatorlar orasi soyalanish burchagi bo‘yicha'
    }
  },
  'avtomatika-i-upravlenie': {
    ratio: '16/9',
    alt: {
      ru: 'Внутреннее наполнение шкафа управления: контроллер, автоматы, клеммники',
      uz: 'Boshqaruv shkafi ichki qismi: kontroller, avtomatlar, klemmalar'
    },
    caption: {
      ru: 'Шкаф управления: контроллер с модулями расширения, автоматы и реле на DIN-рейках, разводка в кабель-каналах',
      uz: 'Boshqaruv shkafi: kengaytirish modulli kontroller, DIN-reykalarda avtomat va relelar, kabel kanallarida simlash'
    }
  },
  'kabelnye-seti': {
    ratio: '16/9',
    alt: {
      ru: 'Кабельные лотки под перекрытием с уложенными и стянутыми кабелями',
      uz: 'Yopma ostidagi kabel tokchalari, kabellar yotqizilgan va bog‘langan'
    },
    caption: {
      ru: 'Кабельная трасса по лоткам: поворот с сохранением радиуса изгиба, крепление к перекрытию на шпильках',
      uz: 'Tokchalar bo‘ylab kabel trassasi: egilish radiusini saqlagan burilish, shpilkalar bilan yopmaga mahkamlash'
    }
  },
  'osveshchenie': {
    ratio: '16/9',
    alt: {
      ru: 'Складской комплекс с линейными светодиодными светильниками под фермами',
      uz: 'Fermalar ostida chiziqli LED chiroqlar o‘rnatilgan ombor majmuasi'
    },
    caption: {
      ru: 'Линейные светодиодные светильники на подвесах: ряды выставлены по стеллажным проходам',
      uz: 'Osmalardagi chiziqli LED chiroqlar: qatorlar stellaj yo‘laklari bo‘yicha joylashtirilgan'
    }
  },
  'vysokovoltnye-raboty': {
    ratio: '16/9',
    alt: {
      ru: 'Комплектная трансформаторная подстанция на площадке у производственного здания',
      uz: 'Ishlab chiqarish binosi yonidagi maydonchada kompleks transformator podstansiyasi'
    },
    caption: {
      ru: 'КТП наружной установки: силовой трансформатор с радиаторами, ввод по кабельным муфтам, шкаф РУ',
      uz: 'Tashqi o‘rnatiladigan KTP: radiatorli kuch transformatori, kabel muftalari orqali kiritish, TQ shkafi'
    }
  },
  'energoaudit': {
    ratio: '16/9',
    alt: {
      ru: 'Тепловизионное обследование распределительного щита',
      uz: 'Taqsimlash shchitining teplovizion tekshiruvi'
    },
    caption: {
      ru: 'Тепловизионное обследование под нагрузкой: перегрев контактных соединений виден до отказа',
      uz: 'Yuk ostida teplovizion tekshiruv: kontakt birikmalarining qizishi nosozlikkacha ko‘rinadi'
    }
  }
}

/** Файл, который ждёт скрипт обработки. */
export const photoSource = slug => `src/photos/${slug}.jpg`
