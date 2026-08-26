// Исходник картинки для соцсетей. Рендерится в assets/og-image.png
// скриншотом 1200×630 (npm-зависимостей и внешних сервисов не требует).

import { company } from '../data/company.mjs'
import { SECTION_COUNT, SERVICE_COUNT } from '../data/counts.mjs'

export function ogImagePage () {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<title>OG image</title>
<meta name="robots" content="noindex, nofollow">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&amp;family=IBM+Plex+Sans:wdth,wght@75..100,400..700&amp;display=swap">
<style>
  *{box-sizing:border-box;margin:0}
  body{width:1200px;height:630px;background:#F9FBFA;color:#131B19;
    font-family:'IBM Plex Sans',system-ui,sans-serif;overflow:hidden;position:relative}
  .grid{position:absolute;inset:0;
    background-image:linear-gradient(#E0E6E5 1px,transparent 1px),linear-gradient(90deg,#E0E6E5 1px,transparent 1px),
      linear-gradient(#C6D2D0 1px,transparent 1px),linear-gradient(90deg,#C6D2D0 1px,transparent 1px);
    background-size:32px 32px,32px 32px,128px 128px,128px 128px;
    -webkit-mask-image:radial-gradient(120% 90% at 85% 0%,#000 0%,transparent 72%)}
  .inner{position:relative;padding:64px 72px;height:100%;display:flex;flex-direction:column}
  .stamp{font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.09em;text-transform:uppercase;
    color:#5C706C;padding-bottom:16px;border-bottom:1px solid #C6D2D0}
  h1{font-size:76px;line-height:1;letter-spacing:-.015em;font-variation-settings:'wght' 600,'wdth' 84;
    margin-top:44px;max-width:16ch}
  .accent{color:#0B5E30}
  .commit{margin-top:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#C6D2D0;
    box-shadow:inset 0 0 0 1px #C6D2D0}
  .commit>div{background:#fff;padding:20px}
  .k{font-family:'IBM Plex Mono',monospace;font-size:13px;letter-spacing:.09em;text-transform:uppercase;color:#5C706C}
  .v{font-family:'IBM Plex Mono',monospace;font-size:20px;margin-top:6px}
</style>
</head>
<body>
<div class="grid"></div>
<div class="inner">
  <div class="stamp">${company.legalName.ru} · ИНН ${company.taxId} · Ташкент · с ${company.registered}</div>
  <h1>Электромонтаж, пусконаладка и <span class="accent">электролаборатория</span></h1>
  <div class="commit">
    <div><div class="k">Направлений</div><div class="v">${SECTION_COUNT}</div></div>
    <div><div class="k">Видов работ</div><div class="v">${SERVICE_COUNT}</div></div>
    <div><div class="k">Класс напряжения</div><div class="v">до 110 кВ</div></div>
    <div><div class="k">Аварийная служба</div><div class="v">24/7</div></div>
  </div>
</div>
</body>
</html>`
}
