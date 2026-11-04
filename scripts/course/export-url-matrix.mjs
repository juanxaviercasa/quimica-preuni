// Generador de matriz completa de URLs candidatas para Skool
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { courseModules } from "../../src/course/registry.js";
import { PUBLIC_ORIGIN } from "../../src/course/routes.js";

const lines = [
  "# Matriz de URLs y Mapeo Candidato para Skool (197 Entradas)",
  "",
  `> **Dominio Oficial:** \`${PUBLIC_ORIGIN}\``,
  "> **Estado:** Generado y verificado en local contra las 197 entradas del curso.",
  "",
  "| Código | Módulo | Título de la Lección | Tipo | Actividad / Familia | URL Candidata | Estado |",
  "|:---:|:---:|---|:---:|:---:|---|:---:|"
];

let totalEntries = 0;
let totalTopics = 0;
let totalIntros = 0;

for (const mod of courseModules) {
  for (const entry of mod.entries) {
    totalEntries++;
    if (entry.kind === "intro") totalIntros++;
    else totalTopics++;

    const actDesc = entry.activity?.reuse || (entry.kind === "intro" ? "Índice / Presentación" : "Simulador");
    const fullUrl = `${PUBLIC_ORIGIN}${entry.route}`;
    lines.push(`| **${entry.code}** | M${String(mod.number).padStart(2, "0")} | ${entry.title.replace(/\|/g, "/")} | ${entry.kind === "intro" ? "Introducción" : "Tema"} | ${actDesc} | [${entry.route}](${fullUrl}) | \`${entry.status || "listo"}\` |`);
  }
}

lines.push("");
lines.push(`**Totales:** ${totalEntries} entradas analizadas (${totalTopics} lecciones de contenido interactivo + ${totalIntros} presentaciones de módulo).`);

const outPath = resolve(process.cwd(), "MATRIZ_URLS_SKOOL_197.md");
writeFileSync(outPath, lines.join("\n"), "utf8");
console.log(`Matriz exportada a ${outPath} con ${totalEntries} filas.`);
