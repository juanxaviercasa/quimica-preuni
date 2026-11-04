// Builds src/course/sourceIndex.json from the Skool course source files
// (Modificar/modulo_01.txt … modulo_18.txt). The source files are only read,
// never modified. Usage: node scripts/course/build-inventory.mjs [ruta-a-Modificar]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const sourceDir = resolve(process.argv[2] ?? resolve(root, "../Modificar"));

const linkPattern = /https?:\/\/[a-z0-9.-]*sistemazenit\.com[^\s)\]"]*/gi;

function extractObjective(content) {
  const match = content.match(/Objetivo de aprendizaje\s*\n+>\s*([^\n]+)/i);
  return match ? match[1].trim() : null;
}

function extractKeys(content) {
  const match = content.match(/\*Claves:\*\s*([^\n]+)/);
  return match ? match[1].trim() : null;
}

const modules = [];
const seen = new Set();
for (let number = 1; number <= 18; number++) {
  const file = resolve(sourceDir, `modulo_${String(number).padStart(2, "0")}.txt`);
  const data = JSON.parse(readFileSync(file, "utf8"));
  if (data.number !== number) throw new Error(`${file}: number ${data.number} != ${number}`);
  const entries = data.lessons.map((lesson, order) => {
    if (lesson.action !== "courses:createLesson") throw new Error(`${file}#${order}: acción inesperada ${lesson.action}`);
    const { title, content, moduleName } = lesson.params;
    if (moduleName !== data.title) throw new Error(`${file}#${order}: moduleName distinto del título del módulo`);
    const code = title.split(" ")[0];
    if (!/^\d+\.\d+$/.test(code)) throw new Error(`${file}#${order}: código inválido ${code}`);
    if (seen.has(code)) throw new Error(`Código duplicado ${code}`);
    seen.add(code);
    const [moduleNumber, topicNumber] = code.split(".").map(Number);
    if (moduleNumber !== number) throw new Error(`${code} está en el módulo ${number}`);
    return {
      code,
      order,
      kind: topicNumber === 0 ? "intro" : "topic",
      title,
      shortTitle: title.slice(code.length + 1).trim(),
      objective: extractObjective(content),
      sourceKeys: extractKeys(content),
      image: (content.match(/!\[[^\]]*\]\((https:[^)]+)\)/) || [])[1] ?? null,
      currentLinks: [...new Set(content.match(linkPattern) ?? [])]
    };
  });
  modules.push({ number, title: data.title, description: data.description, imageUrl: data.imageUrl, entries });
}

const out = resolve(root, "src/course/sourceIndex.json");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify({ generatedFrom: "Modificar/modulo_01.txt … modulo_18.txt", modules }, null, 2) + "\n");
const total = modules.reduce((sum, m) => sum + m.entries.length, 0);
console.log(`Inventario: ${total} entradas en ${modules.length} módulos -> ${out}`);
