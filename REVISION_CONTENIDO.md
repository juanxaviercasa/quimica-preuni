# Reparación del contenido del curso

Las 179 rutas ahora recuperan teoría del material original. Se importaron 504 preguntas con sus claves de origen y 257 desarrollos de problemas. Se añadieron 33 preguntas originales para los once temas del módulo 18. Se conservaron los tres motores piloto. Los otros temas usan predicción escrita y contraste con soluciones de la lección.

Se corrigieron dos errores de alternativas: la suma de coeficientes de 8.9 es 23 y la secuencia sobre catalizadores de 11.6 es FVF, con cuatro alternativas diferentes. En 13.1 se reemplazó la pregunta que excluía indebidamente al amoníaco de toda interpretación de Arrhenius por una pregunta sobre generación de OH⁻ al reaccionar con agua.

La reparación incluye renderizado de Markdown y LaTeX, rechazo de respuestas vacías y retirada del generador que volvía a introducir plantillas genéricas.

## Pendientes concretos

Revisión posterior: las 48 preguntas de los módulos 1 y 2 cuentan con explicaciones por alternativa. En el módulo 1 se corrigió el dato de masa del ejercicio de fuerza a 4.5 kg y la inferencia de pureza del anillo. En el módulo 2 se corrigió la clave 2.8-3 al orden 5s < 4d < 4f < 6p según n + ℓ, se distinguieron ondas de materia de radiación electromagnética, se usó |ψ|² y se explicitó la aproximación de masas enteras del ejercicio de boro. Esto no aprueba aún la teoría completa ni las actividades de ambos módulos.

- Las 504 claves originales requieren cálculo o revisión científica independiente. Sus explicaciones recuperadas indican la clave y remiten a los fundamentos, sin fingir una justificación nueva.
- Faltan explicaciones específicas de cada distractor, práctica adicional en los temas con menos de dos desarrollos y simuladores propios en las familias aún cubiertas por reflexión guiada.
- Los exámenes acumulativos reutilizan preguntas de las lecciones. Son repasos y no una prueba independiente.
- El validador conserva las advertencias y los 179 temas siguen en estado pendiente. Cero errores de estructura no equivale a aprobación científica.
- El módulo 18 conserva teoría original con fórmulas y afirmaciones que requieren revisión adicional.

Fuentes consultadas para las preguntas ambientales:

- https://www.epa.gov/ozone-layer-protection/basic-ozone-layer-science
- https://www.epa.gov/acidrain/what-acid-rain
- https://www.epa.gov/greenchemistry/basics-green-chemistry

Ejecutar npm test, npm run build y node scripts/verify-repaired-course.mjs. La matriz de URLs debe regenerarse después de cambiar el estado de un tema. La publicación corresponde al repositorio quimica-preuni.
