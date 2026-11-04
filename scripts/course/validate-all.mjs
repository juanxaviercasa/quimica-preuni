// Script para validar todos los datos del curso con el validador estricto
import { courseModules } from "../../src/course/registry.js";
import { validateCourse } from "../../src/course/validate.js";
import sourceIndex from "../../src/course/sourceIndex.json" with { type: "json" };
import { elements118 } from "../../src/elementsData.js";
import { isotopesData } from "../../src/data/isotopesData.js";

const report = validateCourse({
  modules: courseModules,
  sourceIndex,
  elements: elements118,
  isotopes: isotopesData
});

console.log("=== REPORTE DE VALIDACIÓN DEL CURSO ===");
console.log("Estadísticas:", JSON.stringify(report.stats, null, 2));
console.log("Errores:", report.errors.length);
if (report.errors.length > 0) {
  report.errors.slice(0, 30).forEach(e => console.error("  ❌", e));
  if (report.errors.length > 30) console.error(`  ... y ${report.errors.length - 30} errores más.`);
}
console.log("Advertencias:", report.warnings.length);
if (report.warnings.length > 0) {
  report.warnings.slice(0, 20).forEach(w => console.warn("  ⚠️", w));
}

if (report.errors.length > 0) process.exit(1);
else console.log("✅ ¡TODOS LOS DATOS Y MÓDULOS CUMPLEN EL 100% DE VALIDACIÓN!");
