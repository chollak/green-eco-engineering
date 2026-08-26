#!/usr/bin/env node
/**
 * Сборка статического сайта GREEN ECO ENGINEERING.
 *
 * Вход:  src/data (контент) + src/templates (разметка) + src/assets (css/js/иконки)
 * Выход: index.html, services/*.html, 404.html, assets/, sitemap.xml, robots.txt
 *
 * Запуск: node build.mjs
 * HTML в корне — артефакт сборки, править его руками бессмысленно.
 */
import { mkdir, writeFile, copyFile, readdir, rm, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { company } from './src/data/company.mjs'
import { sections } from './src/data/sections.mjs'
import { homePage } from './src/templates/home.mjs'
import { sectionPage } from './src/templates/section.mjs'
import { catalogPage } from './src/templates/catalog.mjs'
import { notFoundPage } from './src/templates/notfound.mjs'
import { ogImagePage } from './src/templates/og-image.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const assetsSrc = join(root, 'src', 'assets')
const assetsOut = join(root, 'assets')
const servicesOut = join(root, 'services')

/** Дата последнего изменения контента — идёт в <lastmod> карты сайта. */
async function contentDate () {
  const files = ['src/data/sections.mjs', 'src/data/company.mjs', 'src/data/content.mjs']
  const times = await Promise.all(files.map(async file => {
    try {
      const info = await stat(join(root, file))
      return info.mtime.getTime()
    } catch {
      return 0
    }
  }))
  return new Date(Math.max(...times)).toISOString().slice(0, 10)
}

async function copyAssets () {
  await mkdir(assetsOut, { recursive: true })
  const files = await readdir(assetsSrc)
  await Promise.all(files.map(file => copyFile(join(assetsSrc, file), join(assetsOut, file))))
  return files
}

function sitemap (lastmod) {
  const urls = [
    { loc: company.baseUrl, priority: '1.0' },
    { loc: `${company.baseUrl}services/index.html`, priority: '0.9' },
    ...sections.map(section => ({ loc: `${company.baseUrl}services/${section.slug}.html`, priority: '0.8' }))
  ]
  const body = urls.map(({ loc, priority }) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

/** Ссылки внутри сайта должны быть относительными — Pages отдаёт его по подпути. */
function assertRelativeLinks (pages) {
  const broken = []
  for (const [name, html] of pages) {
    const absolute = html.match(/(?:href|src)="\/(?!\/)[^"]*"/g)
    if (absolute) broken.push(`${name}: ${[...new Set(absolute)].join(', ')}`)
  }
  if (broken.length) {
    throw new Error(`Абсолютные пути сломают сайт на GitHub Pages:\n${broken.join('\n')}`)
  }
}

async function build () {
  const started = Date.now()
  await rm(servicesOut, { recursive: true, force: true })
  await mkdir(servicesOut, { recursive: true })

  const lastmod = await contentDate()
  const assets = await copyAssets()

  const home = homePage()
  const servicePages = [
    ['services/index.html', catalogPage()],
    ...sections.map(section => [`services/${section.slug}.html`, sectionPage(section)])
  ]
  const notFound = notFoundPage()

  assertRelativeLinks([['index.html', home], ...servicePages])

  await Promise.all([
    writeFile(join(root, 'index.html'), home, 'utf8'),
    writeFile(join(root, '404.html'), notFound, 'utf8'),
    writeFile(join(root, 'og-image.html'), ogImagePage(), 'utf8'),
    ...servicePages.map(([path, html]) => writeFile(join(root, path), html, 'utf8')),
    writeFile(join(root, 'sitemap.xml'), sitemap(lastmod), 'utf8'),
    writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${company.baseUrl}sitemap.xml\n`, 'utf8'),
    writeFile(join(root, '.nojekyll'), '', 'utf8')
  ])

  const services = sections.reduce((total, section) => total + section.services.length, 0)
  const weight = Math.round((home.length + servicePages.reduce((a, [, h]) => a + h.length, 0)) / 1024)

  console.log(`✔ index.html + 404.html`)
  console.log(`✔ services/ — каталог + ${sections.length} разделов, ${services} видов работ`)
  console.log(`✔ assets/ — ${assets.join(', ')}`)
  console.log(`✔ sitemap.xml (lastmod ${lastmod}), robots.txt, .nojekyll`)
  console.log(`  HTML ${weight} КБ, сборка ${Date.now() - started} мс`)
}

build().catch(error => {
  console.error('Сборка не удалась:', error.message)
  process.exitCode = 1
})
