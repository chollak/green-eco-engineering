// Переиспользуемые блоки: шильдик, чипы, FAQ, форма, однолинейная схема.

import { company, passport, standards } from '../data/company.mjs'
import { sections } from '../data/sections.mjs'
import { content } from '../data/content.mjs'
import { esc, bi, el } from './layout.mjs'
import { icon } from './icons.mjs'

/** Шильдик «параметр : значение» — настоящий <dl>, его читает скринридер. */
export function plate (rows, cls = '', id = '') {
  const items = rows.map(row => `<div class="plate__row" data-copy-key>
    <dt class="plate__key" data-copy-key-text ${bi(row.key)}>${esc(row.key.ru)}</dt>
    <dd class="plate__val" data-copy-value ${bi(row.value)}>${esc(row.value.ru)}</dd>
  </div>`).join('')
  return `<dl class="plate ${cls}"${id ? ` id="${id}"` : ''}>${items}</dl>`
}

export function passportPlate () {
  return plate(passport, 'plate--3')
}

export function standardChips () {
  return `<div class="chip-row">${standards.map(item =>
    `<span class="chip chip--info" ${bi(item)}>${esc(item.ru)}</span>`
  ).join('')}</div>`
}

/** Рубрика секции: метка + разрядная линейка. */
export function rubric (pair) {
  return `<div class="rubric" data-reveal>
    <span class="label rubric__text" ${bi(pair)}>${esc(pair.ru)}</span>
    <span class="rubric__line" aria-hidden="true"></span>
  </div>`
}

/**
 * FAQ на <details>/<summary>: раскрывается при выключенном JS,
 * доступен с клавиатуры без единой строки скрипта.
 */
export function faqList (items, idPrefix) {
  return `<div class="faq">${items.map((item, index) => `<details class="faq__item" name="${idPrefix}">
    <summary class="faq__q">
      <span ${bi(item.q)}>${esc(item.q.ru)}</span>
      ${icon('chevronDown', { size: 20, cls: 'icon' })}
    </summary>
    ${el('div', 'faq__a', item.a)}
  </details>`).join('')}</div>`
}

/** JSON-LD FAQPage — Google показывает такие вопросы прямо в выдаче. */
export function faqJsonLd (items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q.ru,
      acceptedAnswer: { '@type': 'Answer', text: item.a.ru }
    }))
  }
}

/** Форма заявки. Направление работ можно предзаполнить через ?service=<slug>. */
export function leadForm () {
  const options = sections.map(section =>
    `<option value="${section.slug}" ${bi(section.title)}>${esc(section.title.ru)}</option>`
  ).join('')

  return `<form class="form" data-form action="mailto:info@greeneco.uz" method="post" enctype="text/plain">
  <div class="form__row">
    <div class="field">
      ${el('label', 'field__label', { ru: 'Организация', uz: 'Tashkilot' }, 'for="lead-org"')}
      <input type="text" id="lead-org" name="org" autocomplete="organization"
        data-ph-ru="ООО «Пример»" data-ph-uz="«Namuna» MChJ" placeholder="ООО «Пример»">
    </div>
    <div class="field">
      ${el('label', 'field__label', { ru: 'Контактное лицо', uz: 'Aloqa uchun shaxs' }, 'for="lead-name"')}
      <input type="text" id="lead-name" name="name" autocomplete="name" required
        data-ph-ru="Имя и должность" data-ph-uz="Ism va lavozim" placeholder="Имя и должность">
    </div>
  </div>
  <div class="form__row">
    <div class="field">
      ${el('label', 'field__label', { ru: 'Телефон', uz: 'Telefon' }, 'for="lead-phone"')}
      <input type="tel" id="lead-phone" name="phone" autocomplete="tel" required placeholder="+998 __ ___ __ __">
    </div>
    <div class="field">
      ${el('label', 'field__label', { ru: 'Направление работ', uz: 'Ish yo‘nalishi' }, 'for="lead-service"')}
      <select id="lead-service" name="service" data-service-select>
        <option value="" ${bi({ ru: 'Выберите направление', uz: 'Yo‘nalishni tanlang' })}>Выберите направление</option>
        ${options}
      </select>
    </div>
  </div>
  <div class="field">
    ${el('label', 'field__label', { ru: 'Объект и задача', uz: 'Obyekt va vazifa' }, 'for="lead-msg"')}
    <textarea id="lead-msg" name="message"
      data-ph-ru="Тип объекта, площадь, мощность, сроки. Можно приложить однолинейную схему письмом на info@greeneco.uz"
      data-ph-uz="Obyekt turi, maydoni, quvvati, muddatlar. Bir chiziqli sxemani info@greeneco.uz ga yuborishingiz mumkin"
      placeholder="Тип объекта, площадь, мощность, сроки."></textarea>
  </div>
  <p class="form__error" data-form-error hidden role="alert"></p>
  <button type="submit" class="btn btn--primary btn--block" ${bi({ ru: 'Отправить заявку', uz: 'Ariza yuborish' })}>Отправить заявку</button>
  <p class="form__ok" data-form-success hidden role="status" ${bi({
    ru: 'Заявка принята. Инженер свяжется с вами в рабочее время, по аварийным заявкам — сразу.',
    uz: 'Ariza qabul qilindi. Muhandis ish vaqtida bog‘lanadi, avariya arizalari bo‘yicha — darhol.'
  })}>Заявка принята. Инженер свяжется с вами в рабочее время, по аварийным заявкам — сразу.</p>
  ${el('p', 'form__note', {
    ru: 'Отправляя форму, вы соглашаетесь на обработку контактных данных для ответа на заявку. Рассылок не делаем.',
    uz: 'Formani yuborish orqali arizaga javob berish uchun kontakt ma’lumotlaringizni qayta ishlashga rozilik bildirasiz. Axborot tarqatmaymiz.'
  })}
</form>`
}

/** Контактный блок тёмной полосы — единственная инверсия на сайте. */
export function contactBand (base = '') {
  const rows = [
    { key: { ru: 'Телефон', uz: 'Telefon' }, value: { ru: company.phoneDisplay, uz: company.phoneDisplay } },
    { key: { ru: 'Почта', uz: 'Pochta' }, value: { ru: company.email, uz: company.email } },
    { key: { ru: 'Адрес', uz: 'Manzil' }, value: company.address },
    { key: { ru: 'Режим работы', uz: 'Ish tartibi' }, value: company.workHours },
    { key: { ru: 'ИНН / STIR', uz: 'STIR' }, value: { ru: company.taxId, uz: company.taxId } }
  ]

  return `<section class="section section--major band--ink" id="contact" aria-labelledby="contact-h">
  <div class="page">
    <div class="contact-layout">
      <div class="stack">
        ${rubric({ ru: 'Контакты', uz: 'Aloqa' })}
        ${el('h2', 't-h2', content.cta.title, 'id="contact-h"')}
        ${el('p', 't-lead', content.cta.lead)}
        <p>
          <a class="data data--lg" href="tel:${company.phone}">${company.phoneDisplay}</a><br>
          <a class="data" href="mailto:${company.email}">${company.email}</a>
        </p>
        <p class="emergency">${icon('bolt', { size: 16 })}<span ${bi({ ru: 'Аварийная служба', uz: 'Avariya xizmati' })}>Аварийная служба</span> <b>24/7</b></p>
        ${plate(rows, '', 'contact-req')}
        <button type="button" class="btn btn--ghost" data-copy-req="contact-req"
          ${bi({ ru: 'Скопировать реквизиты', uz: 'Rekvizitlarni nusxalash' })}>Скопировать реквизиты</button>
        <p class="label" data-copy-status role="status"></p>
      </div>
      <div>${leadForm()}</div>
    </div>
  </div>
</section>`
}

/**
 * Однолинейная схема электроснабжения — вместо фотографий объектов.
 * Текста внутри SVG нет намеренно: узбекские подписи в <text> не переносятся,
 * а сама схема помечена aria-hidden. Навигация живёт в HTML-списке рядом.
 */
export function sldDiagram () {
  return `<svg class="sld__svg" viewBox="0 0 1200 250" fill="none" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
  <g stroke="currentColor" stroke-width="2" stroke-linecap="square">
    <path d="M30 60h90"/>
    <path d="M120 60v0"/>
    <circle cx="146" cy="60" r="22" class="node" stroke-width="2"/>
    <circle cx="146" cy="86" r="22" class="node" stroke-width="2"/>
    <path d="M146 108v34"/>
    <path class="bus" d="M60 150h1080" stroke-width="5"/>
    <path d="M180 150v46M360 150v46M540 150v46M720 150v46M900 150v46M1080 150v46"/>
    <rect x="152" y="196" width="56" height="34"/>
    <rect x="332" y="196" width="56" height="34"/>
    <rect x="512" y="196" width="56" height="34"/>
    <rect x="692" y="196" width="56" height="34"/>
    <rect x="872" y="196" width="56" height="34"/>
    <rect x="1052" y="196" width="56" height="34"/>
    <path d="M990 60v90"/>
    <circle cx="990" cy="46" r="22"/>
    <path d="M1130 60v90"/>
    <path d="M1104 30h52l14 30h-52z"/>
    <path d="M1118 45h44"/>
  </g>
  <g fill="currentColor" class="node">
    <rect x="174" y="144" width="12" height="12"/>
    <rect x="354" y="144" width="12" height="12"/>
    <rect x="534" y="144" width="12" height="12"/>
    <rect x="714" y="144" width="12" height="12"/>
    <rect x="894" y="144" width="12" height="12"/>
    <rect x="1074" y="144" width="12" height="12"/>
  </g>
</svg>`
}

/** Легенда IEC 60445. Каждый образец в рамке: серый L3 сам по себе даёт 2.6:1. */
export function sldLegend () {
  const items = [
    { cls: 'swatch--l1', text: { ru: 'L1 — коричневый', uz: 'L1 — jigarrang' } },
    { cls: 'swatch--l2', text: { ru: 'L2 — чёрный', uz: 'L2 — qora' } },
    { cls: 'swatch--l3', text: { ru: 'L3 — серый', uz: 'L3 — kulrang' } },
    { cls: 'swatch--n', text: { ru: 'N — синий', uz: 'N — ko‘k' } },
    { cls: 'swatch--pe', text: { ru: 'PE — жёлто-зелёный', uz: 'PE — sariq-yashil' } }
  ]

  return `<div class="sld-legend">
    <span class="label" ${bi({ ru: 'Маркировка жил по IEC 60445:', uz: 'IEC 60445 bo‘yicha tomirlar belgilanishi:' })}>Маркировка жил по IEC 60445:</span>
    ${items.map(item => `<span class="sld-legend__item">
      <span class="sld-legend__swatch ${item.cls}"></span><span ${bi(item.text)}>${esc(item.text.ru)}</span>
    </span>`).join('')}
  </div>`
}
