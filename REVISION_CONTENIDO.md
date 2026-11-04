# Reparación del contenido del curso

Las 179 rutas ahora recuperan teoría del material original. Se importaron 504 preguntas con sus claves de origen y 257 desarrollos de problemas. Se añadieron 33 preguntas originales para los once temas del módulo 18. Se conservaron los tres motores piloto. Los otros temas usan predicción escrita y contraste con soluciones de la lección.

Se corrigieron dos errores de alternativas: la suma de coeficientes de 8.9 es 23 y la secuencia sobre catalizadores de 11.6 es FVF, con cuatro alternativas diferentes. En 13.1 se reemplazó la pregunta que excluía indebidamente al amoníaco de toda interpretación de Arrhenius por una pregunta sobre generación de OH⁻ al reaccionar con agua.

La reparación incluye renderizado de Markdown y LaTeX, rechazo de respuestas vacías y retirada del generador que volvía a introducir plantillas genéricas.

## Pendientes concretos

Revisión posterior: las 48 preguntas de los módulos 1 y 2 cuentan con explicaciones por alternativa. En el módulo 1 se corrigió el dato de masa del ejercicio de fuerza a 4.5 kg y la inferencia de pureza del anillo. En el módulo 2 se corrigió la clave 2.8-3 al orden 5s < 4d < 4f < 6p según n + ℓ, se distinguieron ondas de materia de radiación electromagnética, se usó |ψ|² y se explicitó la aproximación de masas enteras del ejercicio de boro. Esto no aprueba aún la teoría completa ni las actividades de ambos módulos.

- Se revisaron las 537 preguntas de los 18 módulos: claves, condiciones de los enunciados y razonamientos. Los archivos reviewedQuestions.js, reviewNotes.js, questionCorrections.js y replacementQuestions.js contienen las correcciones. En los módulos 3–18 algunas alternativas comparten el razonamiento completo de la pregunta como retroalimentación; conviene afinar esos comentarios con errores de razonamiento particulares observados en alumnos.
- Se añadieron notas de precisión científica visibles en 23 lecciones de teoría. Aclaran el alcance de modelos y convenciones que estaban formulados como absolutos: pureza del agua desionizada, clasificación de dispersiones, condiciones de ebullición y CNTP, Aufbau, fuerzas intermoleculares, velocidad estequiométrica, idealidad, pH, Nernst y ensayos cualitativos, entre otros. Estas notas corrigen la interpretación, pero no sustituyen una revisión editorial completa, párrafo por párrafo, de los textos de origen.
- El módulo 18, que no tenía desarrollos prácticos, ahora tiene dos casos resueltos por cada una de sus once lecciones. Incluyen razonamiento sobre flotación, siderurgia, cobre, cianuración con advertencia de seguridad, contaminantes, ozono, clima, lluvia ácida, DBO, potabilización y química verde.
- Todas las 179 lecciones ya muestran al menos dos desarrollos en la sección de práctica. Cuando la fuente solo aportaba uno, el segundo es un **refuerzo guiado** generado a partir de una pregunta ya revisada de la propia lección, con principio, resultado y explicación visibles. No es una pregunta nueva ni una prueba independiente; los exámenes acumulativos siguen reutilizando material y requieren una futura batería independiente.
- Las actividades guiadas de las lecciones recuperadas ahora exigen escribir una predicción y responder una comprobación con retroalimentación antes de revelar el desarrollo. Esta comprobación reutiliza una pregunta revisada de esa lección; mejora la interacción y el diagnóstico formativo, pero no reemplaza simuladores específicos ni evaluaciones independientes.
- Faltan práctica adicional en los temas con menos de dos desarrollos y simuladores propios en las familias aún cubiertas por reflexión guiada.
- Los exámenes acumulativos reutilizan preguntas de las lecciones. Son repasos y no una prueba independiente.
- El validador conserva las advertencias y los 179 temas siguen en estado pendiente. Cero errores de estructura no equivale a aprobación científica.
- El módulo 18 conserva teoría original con fórmulas y afirmaciones que requieren revisión adicional.

## Revisión de preguntas de los módulos 3–18

- 8.10-3: se verificó conservación de átomos y carga para 2CrO₄²⁻ + 3S²⁻ + 8H₂O → 2Cr(OH)₃ + 3S + 10OH⁻. Suma correcta 28, frente a 27 en la fuente.
- 12.5-3: Q=33.33 es mayor que K=1.2, por lo que la reacción evoluciona hacia reactivos. La fuente señalaba productos.
- 16.8-2: el 3-metilbutanal contiene tres carbonos primarios al incluir el carbono del aldehído y un terciario.
- 11.4: se incorporaron los datos experimentales que faltaban para poder deducir órdenes 1 y 2 y k=20 L² mol⁻² s⁻¹.
- 14 y 17: se reemplazaron íntegramente 63 preguntas con enunciados y alternativas breves. Se eliminaron errores sobre electrólisis de bauxita, ΔG frente a ΔG°, protonación de amidas, superconductividad del grafeno y degradación de proteínas.
- 4–16: se hicieron explícitos condiciones de gas ideal, temperatura y presión, estequiometría de mezclas, convención de equivalentes y límites de modelos químicos.
- Se añadieron pruebas de cobertura de las 537 claves y regresiones de los tres errores numéricos indicados.

Fuentes de contraste adicionales:

- https://ciaaw.org/boron.htm
- https://goldbook.iupac.org/terms/view/H02899
- https://chem-textbook.ucalgary.ca/version2/chapter-13-main/equilibrium-constants/determining-the-direction-of-a-reaction-q-and-k/

Fuentes consultadas para las preguntas ambientales:

- https://www.epa.gov/ozone-layer-protection/basic-ozone-layer-science
- https://www.epa.gov/acidrain/what-acid-rain
- https://www.epa.gov/greenchemistry/basics-green-chemistry

Ejecutar npm test, npm run build y node scripts/verify-repaired-course.mjs. La matriz de URLs debe regenerarse después de cambiar el estado de un tema. La publicación corresponde al repositorio quimica-preuni.
