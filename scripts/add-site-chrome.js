// Adds the web-only toolbar (PDF download, mailto) and credits footer to the rendered page.
import { readFileSync, writeFileSync } from 'node:fs'

const [file, pdf] = process.argv.slice(2)
const { email } = JSON.parse(readFileSync('resume.json', 'utf8')).basics

const css = `<style>
.site-bar,.site-credits{font-family:'Space Mono',monospace;text-transform:uppercase;letter-spacing:1px}
.site-bar{max-width:900px;margin:0 auto;box-sizing:border-box;border:4px solid #0a0a0a;display:flex;flex-wrap:wrap;gap:12px;justify-content:flex-end;padding:12px 16px;border-bottom-width:0}
.site-bar a{background:#0a0a0a;color:#fff;font-weight:700;font-size:13px;text-decoration:none;padding:8px 14px;border:2px solid #0a0a0a;box-shadow:4px 4px 0 #ffe600}
.site-bar a:hover,.site-bar a:focus-visible{background:#ffe600;color:#0a0a0a;box-shadow:4px 4px 0 #0a0a0a;outline:none}
.site-credits{padding:16px;font-size:11px;border-top:2px solid #0a0a0a;border-bottom:4px solid #0a0a0a}
.site-credits a{color:#0a0a0a}
@media print{.site-bar,.site-credits{display:none}}
</style>`

const bar = `<nav class="site-bar" aria-label="Actions">
<a href="${pdf}" download>Download PDF</a>
<a href="mailto:${email}">Email me</a>
</nav>`

const credits = `<footer class="site-credits">
Built from <a href="https://jsonresume.org">JSON Resume</a> with <a href="https://github.com/rbardini/resumed">resumed</a>.
</footer>`

const html = readFileSync(file, 'utf8')
  .replace('</head>', `${css}</head>`)
  .replace('<body>', `<body>${bar}`)
  .replace('</main>', `</main>${credits}`)
writeFileSync(file, html)
