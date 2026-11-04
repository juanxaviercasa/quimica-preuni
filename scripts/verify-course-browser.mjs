import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = fileURLToPath(new URL("../", import.meta.url));
const port = process.env.REVIEW_PORT ?? "5191";
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", port, "--strictPort"], { cwd: root, stdio: "pipe" });
process.on("exit", () => server.kill());

try {
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Preview server did not start in time")), 15000);
    server.stdout.on("data", data => { if (String(data).includes(port)) { clearTimeout(timeout); resolve(); } });
    server.on("error", reject);
    server.on("exit", code => reject(new Error(`Preview exited with code: ${code}`)));
  });

  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe"
  });

  const output = new URL("../.review-output/", import.meta.url);
  await mkdir(output, { recursive: true });

  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  const errors = [];

  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error" && /GlobalErrorBoundary|TypeError|ReferenceError/.test(message.text())) {
      errors.push(message.text());
    }
  });

  async function visit(route) {
    await page.goto(origin + route);
    await page.locator("h1").first().waitFor();
    assert.equal(await page.getByText("Algo inesperado ocurrió", { exact: true }).count(), 0, `Crash in ${route}`);
  }

  console.log("Comprobando index del curso y módulos...");
  await visit("/curso/quimica");
  const modCount = await page.locator(".cq-section").count();
  assert.equal(modCount, 18, `Expected 18 modules rendered in index, got ${modCount}`);
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando módulo 1...");
  await visit("/curso/quimica/01");
  assert.ok(await page.locator("h1").innerText().then(t => t.includes("Módulo 1")));
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando piloto 1.8 (temperaturas)...");
  await visit("/curso/quimica/01/08?de=C&valor=160&modo=temperatura");
  assert.ok(await page.locator("h1").innerText().then(t => t.includes("1.8")));
  const cardText = await page.locator(".ca-cards").innerText();
  assert.ok(cardText.includes("320") || cardText.includes("Fahrenheit"), "Temperature conversion card rendered");
  // Fill answer
  await page.locator(".ca-answer input").fill("320");
  await page.locator(".ca-answer button").click();
  await page.waitForTimeout(100);
  assert.ok(await page.locator(".cq-feedback.is-ok").count() > 0, "Goal answer checked as correct");
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando piloto 2.5 (isótopos)...");
  await visit("/curso/quimica/02/05?sym=C&ab=98.93");
  assert.ok(await page.locator("h1").innerText().then(t => t.includes("2.5")));
  const isoAvg = await page.locator('[data-testid="iso-average"]').innerText();
  assert.ok(isoAvg.includes("12.011"), `Calculated atomic mass should be 12.011 u, got: ${isoAvg}`);
  assert.ok(await page.locator(".ca-goal.is-met").count() > 0, "Isotopes goal met on natural abundance");
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando piloto 3.10 (tendencias)...");
  await visit("/curso/quimica/03/10");
  assert.ok(await page.locator("h1").innerText().then(t => t.includes("3.10")));
  assert.ok(await page.locator(".ca-minitable button").count() > 0, "Mini periodic table rendered");
  await page.locator("button:has-text('Comprobar con datos')").click();
  await page.waitForTimeout(100);
  assert.ok(await page.locator(".ca-bars").count() > 0, "Comparison bars rendered");
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando evaluación acumulativa...");
  await visit("/curso/quimica/01/evaluacion");
  assert.ok(await page.locator(".cq-exam article").count() >= 8, "Cumulative exam has at least 8 questions");
  assert.deepEqual(errors.splice(0), []);

  console.log("Comprobando navegación directa y recarga (HTTP 200 / SPA reload)...");
  await page.reload();
  await page.locator("h1").first().waitFor();
  assert.deepEqual(errors.splice(0), []);

  await browser.close();
  server.kill();
  console.log("✅ TODAS LAS PRUEBAS DE NAVEGADOR DEL CURSO PASARON EXITOSAMENTE.");
} catch (err) {
  server.kill();
  console.error("❌ Error en pruebas de navegador:", err);
  process.exit(1);
}
