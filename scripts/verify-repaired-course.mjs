import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";
import { courseModules, allEntries } from "../src/course/registry.js";

const root = new URL("../", import.meta.url);
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "5197", "--strictPort"], { cwd: root, stdio: "pipe" });
let browser;
try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Preview did not start")), 15000);
    server.stdout.on("data", chunk => {
      if (String(chunk).includes("5197")) { clearTimeout(timeout); resolve(); }
    });
    server.on("error", reject);
  });
  browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  for (const entry of allEntries) {
    await page.goto("http://127.0.0.1:5197" + entry.route);
    await page.locator("h1").waitFor();
    const content = await page.locator("main").innerText();
    assert.ok(!content.includes("Parámetro de control A"), entry.code);
    if (entry.kind === "topic") {
      assert.ok(content.includes("Fundamentos de la lección"), entry.code);
      assert.equal(await page.locator(".cq-exam .cq-question").count(), 3, entry.code);
    }
  }
  for (const module of courseModules) {
    await page.goto("http://127.0.0.1:5197" + module.examRoute);
    await page.locator(".cq-exam").waitFor();
    assert.ok(await page.locator(".cq-exam .cq-question").count() >= 8);
  }
  await page.goto("http://127.0.0.1:5197/curso/quimica/13/01");
  await page.locator("textarea").fill("HCl aumenta los iones hidronio en agua.");
  await page.getByRole("button", { name: "Contrastar con la solución" }).click();
  await page.locator(".cq-solution").waitFor();
  await page.getByRole("link", { name: /Siguiente tema/ }).click();
  await page.locator("textarea").waitFor();
  assert.equal(await page.locator("textarea").inputValue(), "");
  await mkdir(new URL("../.review-output/", import.meta.url), { recursive: true });
  await page.screenshot({ path: new URL("../.review-output/repaired-topic.png", import.meta.url).pathname.replace(/^\/([A-Z]:)/i, "$1"), fullPage: true });
  assert.deepEqual(errors, []);
  console.log("PASS: 197 entry routes, 18 module exams, mobile guided activity and state reset.");
} finally {
  await browser?.close();
  server.kill();
}
