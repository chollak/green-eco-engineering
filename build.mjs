#!/usr/bin/env node
/**
 * Сборка статического сайта: index.html + страницы разделов + sitemap.
 * Запуск: node build.mjs
 */
import { mkdir, writeFile, copyFile, readdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { company } from './src/data/company.mjs'
import { sections } from './src/data/sections.mjs'
import { homePage } from './src/templates/home.mjs'
import { sectionPage } from './src/templates/section.mjs'

const root = dirname(fileURLToPath(import.meta.url))
const out = root
const assetsSrc = join(root, 'src', 'assets')
const assetsOut = join(out, 'assets')
const servicesOut = join(out, 'services')

async function copyAssets () {
  await mkdir(assetsOut, { recursive: true })
  const files = await readdir(assetsSrc)
  await Promise.all(files.map(file => copyFile(join(assetsSrc, file), join(assetsOut, file))))
  return files.length
}

function sitemap () {
  const urls = [company.baseUrl, ...sections.map(s => `${company.baseUrl}services/${s.slug}.html`)]
  const body = urls.map(url =>
    `  <url><loc>${url}</loc><changefreq>monthly</changefreq><priority>${url === company.baseUrl ? '1.0' : '0.8'}</priority></url>`
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

async function build () {
  try {
    await rm(servicesOut, { recursive: true, force: true })
    await mkdir(servicesOut, { recursive: true })

    const assets = await copyAssets()
    await writeFile(join(out, 'index.html'), homePage(), 'utf8')

    await Promise.all(sections.map(section =>
      writeFile(join(servicesOut, `${section.slug}.html`), sectionPage(section), 'utf8')
    ))

    await writeFile(join(out, 'sitemap.xml'), sitemap(), 'utf8')
    await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${company.baseUrl}sitemap.xml\n`, 'utf8')
    await writeFile(join(out, '.nojekyll'), '', 'utf8')

    const services = sections.reduce((total, section) => total + section.services.length, 0)
    console.log(`✔ index.html`)
    console.log(`✔ services/ — ${sections.length} страниц, ${services} услуг`)
    console.log(`✔ assets/ — ${assets} файлов`)
    console.log(`✔ sitemap.xml, robots.txt`)
  } catch (error) {
    console.error('Сборка не удалась:', error)
    process.exitCode = 1
  }
}

build()
