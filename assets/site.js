/* GREEN ECO ENGINEERING — общий скрипт: язык, навигация, анимации, форма */
(function () {
  'use strict'

  var STORAGE_KEY = 'gee-lang'
  var LANGS = ['ru', 'uz']

  /* ---------- Переключение языка ---------- */
  function readLang () {
    try {
      var saved = localStorage.getItem(STORAGE_KEY)
      return LANGS.indexOf(saved) !== -1 ? saved : 'ru'
    } catch (error) {
      return 'ru'
    }
  }

  function applyLang (lang) {
    document.documentElement.lang = lang

    document.querySelectorAll('[data-' + lang + ']').forEach(function (el) {
      var value = el.getAttribute('data-' + lang)
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = value
      else el.textContent = value
    })

    document.querySelectorAll('[data-ph-' + lang + ']').forEach(function (el) {
      el.placeholder = el.getAttribute('data-ph-' + lang)
    })

    var title = document.body.getAttribute('data-title-' + lang)
    if (title) document.title = title

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang)
    })

    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (error) {
      /* приватный режим — язык просто не запоминается */
    }
  }

  /* ---------- Навигация ---------- */
  function initNav () {
    var nav = document.querySelector('nav')
    var burger = document.querySelector('.nav-burger')
    var links = document.querySelector('.nav-links')
    var drop = document.querySelector('.nav-drop')

    if (burger && links) {
      burger.addEventListener('click', function () {
        links.classList.toggle('open')
      })
    }

    if (drop) {
      var toggle = drop.querySelector('.nav-drop-toggle')
      toggle.addEventListener('click', function (event) {
        event.stopPropagation()
        drop.classList.toggle('open')
      })
      document.addEventListener('click', function (event) {
        if (!drop.contains(event.target)) drop.classList.remove('open')
      })
    }

    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 60)
      }, { passive: true })
    }
  }

  /* ---------- Анимация появления ---------- */
  function initReveal () {
    var items = document.querySelectorAll('.reveal')
    if (!items.length) return

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible') })
      return
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, index) {
        if (!entry.isIntersecting) return
        setTimeout(function () { entry.target.classList.add('visible') }, index * 60)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08 })

    items.forEach(function (el) { observer.observe(el) })
  }

  /* ---------- Форма заявки ---------- */
  var MESSAGES = {
    empty: {
      ru: 'Укажите имя и телефон — без них мы не сможем перезвонить.',
      uz: 'Ism va telefon raqamini kiriting — busiz siz bilan bog‘lana olmaymiz.'
    },
    phone: {
      ru: 'Проверьте номер телефона: не менее 9 цифр.',
      uz: 'Telefon raqamini tekshiring: kamida 9 ta raqam.'
    }
  }

  function initForm () {
    var form = document.getElementById('lead-form')
    if (!form) return

    form.addEventListener('submit', function (event) {
      event.preventDefault()

      var lang = readLang()
      var name = form.querySelector('#inp-name').value.trim()
      var phone = form.querySelector('#inp-phone').value.trim()
      var digits = phone.replace(/\D/g, '')
      var error = document.getElementById('form-error')

      function fail (key) {
        error.textContent = MESSAGES[key][lang]
        error.style.display = 'block'
      }

      if (!name || !phone) return fail('empty')
      if (digits.length < 9) return fail('phone')

      error.style.display = 'none'

      // TODO: заменить на реальную отправку (Telegram Bot API / бэкенд / Formspree)
      var success = document.getElementById('form-success')
      success.style.display = 'block'
      form.reset()
      setTimeout(function () { success.style.display = 'none' }, 6000)
    })
  }

  /* ---------- Старт ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var lang = readLang()
    if (lang !== 'ru') applyLang(lang)
    else document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === 'ru')
    })

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLang(btn.dataset.lang) })
    })

    initNav()
    initReveal()
    initForm()
  })
})()
