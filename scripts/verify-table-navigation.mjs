import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
const server=spawn(process.execPath,['node_modules/vite/bin/vite.js','preview','--host','127.0.0.1','--port','5193','--strictPort']);
let browser;
try {
 await new Promise((resolve,reject)=>{server.stdout.on('data',d=>String(d).includes('5193')&&resolve());server.on('error',reject);server.on('exit',c=>reject(new Error(`Preview exited ${c}`)));});
 browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const page=await browser.newPage();await page.addInitScript(()=>localStorage.clear());page.setDefaultTimeout(15000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await mkdir('.review-output',{recursive:true});
 for(const width of [360,768,1440]){
  await page.setViewportSize({width,height:900});
  for(const dark of [false,true]){
   await page.goto('http://127.0.0.1:5193/');await page.getByRole('tab',{name:'38 para empezar'}).click();
   if(dark)await page.getByRole('button',{name:'Cambiar a tema oscuro'}).click();
   for(const sym of ['h','li','na','k','he','ne','ar']){
    const el=page.locator(`.element[href="/elemento/${sym}"]`);await el.scrollIntoViewIfNeeded();
    assert.match(await el.evaluate(e=>getComputedStyle(e).boxShadow),/inset/);
   }
   await page.locator('.element[href="/elemento/h"]').scrollIntoViewIfNeeded();
   await page.screenshot({path:`.review-output/borders-${width}-${dark?'dark':'light'}.png`});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   const gold=page.locator('.element[href="/elemento/au"]');await gold.scrollIntoViewIfNeeded();
   assert.ok(await page.evaluate(()=>scrollY>100));await gold.click();await page.waitForURL('**/elemento/au');await page.locator('.jump-diagnosis-card').waitFor();
   assert.equal(await page.evaluate(()=>scrollY),0,'Gold opens at top');
   await page.screenshot({path:`.review-output/gold-${width}-${dark?'dark':'light'}.png`});
  }
  console.log(`PASS ${width}px: light/dark contours, no overflow, gold opens at top`);
 }
 assert.deepEqual(errors,[]);
}finally{await browser?.close();server.kill();}
