/**
 * GREEN ECO ENGINEERING — клиентский слой.
 *
 * Один файл, без зависимостей, цепляется за data-атрибуты, а не за классы:
 * оформление можно менять, не трогая логику.
 *
 * Хуки разметки:
 *   [data-lang-switch]   кнопка языка (ru | uz)
 *   [data-header]        липкая шапка (тень при прокрутке)
 *   [data-nav-toggle]    кнопка мобильного меню   [data-nav-panel] — панель
 *   [data-clock]         время в Ташкенте в строке режима
 *   [data-reveal]        блок, проявляющийся при попадании в экран
 *   [data-bar]           заливка сегментного бара (scaleX)
 *   [data-filter-input]  поиск в каталоге, [data-filter] — кнопка кластера
 *   [data-copy-req]      копирование реквизитов
 *   [data-form]          форма заявки
 *
 * FAQ намеренно не обслуживается скриптом: это <details>/<summary>,
 * они раскрываются и без JS.
 */
(function () {
  'use strict'

  var LANGS = ['ru', 'uz']
  var LANG_KEY = 'gee-lang'
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  function $ (selector, scope) { return (scope || document).querySelector(selector) }
  function $$ (selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)) }

  /* ------------------------------------------------------------------ язык */

  function storedLang () {
    try {
      var saved = localStorage.getItem(LANG_KEY)
      return LANGS.indexOf(saved) !== -1 ? saved : 'ru'
    } catch (error) {
      return 'ru'
    }
  }

  function applyLang (lang) {
    document.documentElement.lang = lang

    $$('[data-' + lang + ']').forEach(function (node) {
      node.textContent = node.getAttribute('data-' + lang)
    })

    $$('[data-ph-' + lang + ']').forEach(function (node) {
      node.placeholder = node.getAttribute('data-ph-' + lang)
    })

    $$('[data-aria-' + lang + ']').forEach(function (node) {
      node.setAttribute('aria-label', node.getAttribute('data-aria-' + lang))
    })

    var title = document.body.getAttribute('data-title-' + lang)
    if (title) document.title = title

    var description = document.body.getAttribute('data-desc-' + lang)
    var meta = $('meta[name="description"]')
    if (description && meta) meta.setAttribute('content', description)

    $$('[data-lang-switch]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-switch') === lang
      btn.classList.toggle('is-active', active)
      btn.setAttribute('aria-pressed', active ? 'true' : 'false')
    })
  }

  function initLang () {
    applyLang(storedLang())

    $$('[data-lang-switch]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-lang-switch')
        try {
          localStorage.setItem(LANG_KEY, next)
        } catch (error) {
          /* приватный режим: выбор просто не запомнится */
        }
        applyLang(next)
      })
    })
  }

  /* ------------------------------------------------------------ навигация */

  function initNav () {
    var header = $('[data-header]')
    var toggle = $('[data-nav-toggle]')
    var panel = $('[data-nav-panel]')

    if (header) {
      var ticking = false
      window.addEventListener('scroll', function () {
        if (ticking) return
        ticking = true
        requestAnimationFrame(function () {
          header.classList.toggle('is-stuck', window.scrollY > 64)
          ticking = false
        })
      }, { passive: true })
    }

    if (!toggle || !panel) return

    var lastFocused = null

    function close () {
      panel.classList.remove('is-open')
      toggle.classList.remove('is-open')
      toggle.setAttribute('aria-expanded', 'false')
      document.body.classList.remove('is-locked')
      if (lastFocused) lastFocused.focus()
    }

    function open () {
      lastFocused = document.activeElement
      panel.classList.add('is-open')
      toggle.classList.add('is-open')
      toggle.setAttribute('aria-expanded', 'true')
      document.body.classList.add('is-locked')
      var first = $('a, button', panel)
      if (first) first.focus()
    }

    toggle.addEventListener('click', function () {
      if (panel.classList.contains('is-open')) close()
      else open()
    })

    panel.addEventListener('click', function (event) {
      if (event.target.closest('a')) close()
    })

    document.addEventListener('keydown', function (event) {
      if (!panel.classList.contains('is-open')) return

      if (event.key === 'Escape') {
        close()
        return
      }

      // Ловушка фокуса: пока панель открыта, Tab не должен уводить на фон
      if (event.key !== 'Tab') return
      var focusable = $$('a[href], button:not([disabled])', panel)
      if (!focusable.length) return

      var first = focusable[0]
      var last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    })

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080 && panel.classList.contains('is-open')) close()
    })
  }

  /* ------------------------------------------------------------------ часы */

  function initClock () {
    var node = $('[data-clock]')
    if (!node) return

    function tick () {
      try {
        node.textContent = ' · ' + new Date().toLocaleTimeString('ru-RU', {
          timeZone: 'Asia/Tashkent', hour: '2-digit', minute: '2-digit'
        })
      } catch (error) {
        node.textContent = ''
      }
    }

    tick()
    setInterval(tick, 30000)
  }

  /* ------------------------------------------------------- появление блоков */

  function initReveal () {
    var items = $$('[data-reveal]')
    var bars = $$('[data-bar]')

    function showAll () {
      items.forEach(function (node) { node.classList.add('is-in') })
      bars.forEach(function (bar) { bar.style.transform = 'scaleX(' + (bar.style.getPropertyValue('--v') || 1) + ')' })
    }

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      showAll()
      return
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })

    items.forEach(function (node) { observer.observe(node) })

    // Бары заполняются при попадании в экран — transform, а не width
    if (bars.length) {
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          entry.target.style.transform = 'scaleX(var(--v))'
          barObserver.unobserve(entry.target)
        })
      }, { threshold: 0.4 })

      bars.forEach(function (bar) {
        bar.style.transform = 'scaleX(0)'
        barObserver.observe(bar)
      })
    }
  }

  /** Однолинейная схема отрисовывается один раз, по скроллу не перезапускается. */
  function initDiagram () {
    var svg = $('.sld__svg')
    if (!svg || reduceMotion.matches) return

    var shapes = $$('path, circle, rect', svg)

    shapes.forEach(function (shape, index) {
      var length = typeof shape.getTotalLength === 'function' ? shape.getTotalLength() : 0
      if (!length) return
      shape.style.strokeDasharray = length
      shape.style.strokeDashoffset = length
      shape.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.4,.14,.3,1) ' + Math.min(index * 60, 500) + 'ms'
    })

    requestAnimationFrame(function () {
      shapes.forEach(function (shape) { shape.style.strokeDashoffset = '0' })
    })
  }

  /* --------------------------------------------------------------- фильтр */

  function initFilter () {
    var input = $('[data-filter-input]')
    var tags = $$('[data-filter]')
    var counter = $('[data-filter-count]')
    if (!input && !tags.length) return

    var groupsList = $$('[data-group]')
    var activeGroup = 'all'

    function apply () {
      var query = (input ? input.value : '').trim().toLowerCase()
      var shown = 0

      groupsList.forEach(function (group) {
        var groupMatch = activeGroup === 'all' || group.getAttribute('data-group') === activeGroup
        var visibleInGroup = 0

        $$('[data-item]', group).forEach(function (item) {
          var haystack = item.getAttribute('data-title') + ' ' + item.getAttribute('data-services')
          var match = groupMatch && (!query || haystack.indexOf(query) !== -1)
          item.classList.toggle('is-hidden', !match)
          if (match) visibleInGroup++
        })

        group.classList.toggle('is-hidden', visibleInGroup === 0)
        shown += visibleInGroup
      })

      if (counter) {
        var lang = storedLang()
        counter.textContent = shown
          ? (lang === 'uz' ? shown + ' ta yoʻnalish koʻrsatildi' : 'Показано направлений: ' + shown)
          : (lang === 'uz' ? 'Hech narsa topilmadi' : 'Ничего не найдено')
      }
    }

    if (input) input.addEventListener('input', apply)

    tags.forEach(function (tag) {
      tag.addEventListener('click', function () {
        activeGroup = tag.getAttribute('data-filter')
        tags.forEach(function (other) {
          other.setAttribute('aria-pressed', other === tag ? 'true' : 'false')
        })
        apply()
      })
    })

    apply()
  }

  /* ------------------------------------------------- копирование реквизитов */

  function initCopy () {
    var button = $('[data-copy-req]')
    var status = $('[data-copy-status]')
    if (!button) return

    button.addEventListener('click', function () {
      var plateNode = button.previousElementSibling
      var lines = []

      if (plateNode) {
        $$('.plate__row', plateNode).forEach(function (row) {
          var key = $('.plate__key', row)
          var value = $('.plate__val', row)
          if (key && value) lines.push(key.textContent.trim() + ': ' + value.textContent.trim())
        })
      }

      var text = lines.join('\n')
      var lang = storedLang()
      var ok = lang === 'uz' ? 'Rekvizitlar nusxalandi' : 'Реквизиты скопированы'
      var fail = lang === 'uz' ? 'Nusxalab boʻlmadi — qoʻlda belgilang' : 'Не удалось скопировать — выделите вручную'

      function report (message) {
        if (status) status.textContent = message
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { report(ok) }, function () { report(fail) })
        return
      }

      // Старые WebView без Clipboard API ещё встречаются на корпоративных парках
      try {
        var area = document.createElement('textarea')
        area.value = text
        area.setAttribute('readonly', '')
        area.style.position = 'absolute'
        area.style.left = '-9999px'
        document.body.appendChild(area)
        area.select()
        document.execCommand('copy')
        document.body.removeChild(area)
        report(ok)
      } catch (error) {
        report(fail)
      }
    })
  }

  /* ----------------------------------------------------------------- форма */

  var MESSAGES = {
    name: {
      ru: 'Укажите контактное лицо — иначе некому адресовать ответ.',
      uz: 'Aloqa uchun shaxsni koʻrsating — aks holda javobni kimga yoʻllashni bilmaymiz.'
    },
    phone: {
      ru: 'Нужен телефон для связи — не менее 9 цифр.',
      uz: 'Bogʻlanish uchun telefon kerak — kamida 9 ta raqam.'
    }
  }

  function initForm () {
    var form = $('[data-form]')
    if (!form) return

    var error = $('[data-form-error]', form)
    var success = $('[data-form-success]', form)
    var name = $('#lead-name', form)
    var phone = $('#lead-phone', form)

    // ?service=<slug> — ссылку с предзаполненным направлением заказчик пересылает снабженцу
    try {
      var requested = new URLSearchParams(location.search).get('service')
      var select = $('[data-service-select]', form)
      if (requested && select) select.value = requested
    } catch (error2) {
      /* URLSearchParams нет — не критично */
    }

    function fail (field, key) {
      var lang = storedLang()
      error.textContent = MESSAGES[key][lang]
      error.hidden = false
      field.setAttribute('aria-invalid', 'true')
      field.setAttribute('aria-describedby', 'lead-error')
      field.focus()
    }

    if (error) error.id = 'lead-error'

    form.addEventListener('submit', function (event) {
      event.preventDefault()

      ;[name, phone].forEach(function (field) { field.removeAttribute('aria-invalid') })
      error.hidden = true

      if (!name.value.trim()) return fail(name, 'name')
      if (phone.value.replace(/\D/g, '').length < 9) return fail(phone, 'phone')

      // TODO: подключить отправку — Telegram Bot API, почтовый шлюз или Formspree.
      success.hidden = false
      form.reset()
      setTimeout(function () { success.hidden = true }, 8000)
    })

    if (phone) {
      phone.addEventListener('focus', function () {
        if (!phone.value) phone.value = '+998 '
      })
    }
  }

  /* ------------------------------------------------------------------ старт */

  function start () {
    initLang()
    initNav()
    initClock()
    initReveal()
    initDiagram()
    initFilter()
    initCopy()
    initForm()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start)
  } else {
    start()
  }
})()
