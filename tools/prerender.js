// Writes the rendered page back into index.html so search engines see the
// full text without running JavaScript. The scripts still run for visitors
// and re-render the same content (and the FR version) on load.
// Usage: serve the folder on port 8765, then `node tools/prerender.js`.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  await page.goto('http://localhost:8765/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  const html = await page.evaluate(() => {
    const ld = document.querySelectorAll('script[type="application/ld+json"]');
    for (let i = 1; i < ld.length; i++) ld[i].remove();          // keep only the static schema
    document.querySelectorAll('.nav-item.active').forEach(n => n.classList.remove('active'));
    return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  });
  fs.writeFileSync(path.join(__dirname, '..', 'index.html'), html);
  await browser.close();
  console.log('index.html prerendered,', html.length, 'chars');
})();
