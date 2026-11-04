import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', '5191', '--strictPort']);
let browser;
try {
  await new Promise((resolve,reject)=>{server.stdout.on('data',d=>String(d).includes('5191')&&resolve());server.on('error',reject);});
  browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
  const page=await browser.newPage(); page.setDefaultTimeout(10000); const errors=[]; page.on('pageerror',e=>errors.push(e.message));
  await mkdir('.review-output',{recursive:true});
  for (const width of [360,390,768,1024,1440]) {
    await page.setViewportSize({width,height:960}); await page.goto('http://127.0.0.1:5191');
    await page.locator('#laminas-descarga h1').waitFor();
    assert.equal(await page.locator('main > section').first().getAttribute('id'),'laminas-descarga');
    assert.equal(await page.locator('main > section').nth(1).getAttribute('id'),'tabla-periodica');
    assert.equal(await page.locator('a[href*="whatsapp"], a[href*="wa.me"], .search').count(),0);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow ${width}`);
    for (const a of await page.locator('a[href*="skool.com"]').all()) assert.equal(await a.getAttribute('href'),'https://www.skool.com/academia-zenit-3587/about');
    for (const a of await page.locator('#laminas-descarga a[download]').all()) assert.equal((await page.request.get('http://127.0.0.1:5191'+await a.getAttribute('href'))).status(),200);
    await page.screenshot({path:`.review-output/home-${width}.png`,fullPage:false});
    await page.locator('#tabla-periodica').scrollIntoViewIfNeeded();
    await page.getByRole('tab',{name:'118 elementos'}).click();
    await page.getByRole('button',{name:'Electronegatividad',exact:true}).click();
    await page.getByRole('link',{name:'Hidrógeno, número atómico 1, símbolo H',exact:true}).click();
    await page.waitForURL('**/elemento/h'); await page.locator('.jump-diagnosis-card').waitFor(); await page.goBack(); await page.locator('#tabla-periodica').waitFor();
    await page.locator('.table-options > summary').click();
    await page.getByRole('button',{name:'Mapa de Calor',exact:true}).click();
    assert.notEqual(await page.locator('.element[href="/elemento/h"]').evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)');
    assert.ok(await page.locator('.element[href="/elemento/h"]').evaluate(el=>el.style.getPropertyValue('--element-heatmap-color')));
    await page.locator('.table-options > summary').click();
    await page.screenshot({path:`.review-output/table-${width}.png`});
    await page.locator('#laminas-descarga').scrollIntoViewIfNeeded();
    await page.locator('.lamina-action-btn.view').first().click();
    await page.locator('.laminas-modal-window').waitFor();
    assert.equal(await page.locator('.laminas-modal-window a[href*="skool.com"]').getAttribute('href'),'https://www.skool.com/academia-zenit-3587/about');
    await page.keyboard.press('Escape');
    console.log(`PASS ${width}px: order, overflow, downloads, Skool, element modal, properties, tools, sheet viewer`);
  }
  assert.deepEqual(errors,[]);
} finally {await browser?.close();server.kill();}
