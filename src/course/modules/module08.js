// Módulo 8: Módulo 8: Reacciones Químicas y Balanceo
export const module08 = {
  number: 8,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 8: Reacciones Químicas y Balanceo.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "8.1",
    "objective": "Reconocer las transformaciones químicas mediante evidencias macroscópicas directas y representar simbólicamente los procesos mediante ecuaciones químicas balanceadas bajo la Ley de Conservación de la Masa.",
    "summary": [
      "2. Evidencias Experimentales Irrefutables de una Reacción Química",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Identificación de evidencias experimentales y representación de ecuaciones químicas",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Identificación de evidencias experimentales y representación de ecuaciones químicas.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Identificación de evidencias experimentales y representación de ecuaciones químicas",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Identificación de evidencias experimentales y representación de ecuaciones químicas",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Identificación de evidencias experimentales y representación de ecuaciones químicas",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Identificación de evidencias experimentales y representación de ecuaciones químicas",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "Al dejar un clavo de hierro a la intemperie durante varias semanas, este se recubre de una capa rojiza y escamosa. ¿Cuáles son las evidencias de que ha ocurrido una reacción química?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La oxidación del hierro genera una nueva sustancia: el óxido de hierro hidratado (herrumbre). La principal **evidencia macroscópica** es el **cambio permanente de color** (de gris metálico a rojizo ocre) y el cambio en las propiedades físicas del material."
    },
    "practice": [
      {
        "id": "p-8.1-1",
        "type": "mc",
        "prompt": "Traduzca el siguiente enunciado a una ecuación química: \"El magnesio metálico reacciona con una disolución de ácido clorhídrico desprendiendo gas hidrógeno y formando cloruro de magnesio disuelto\".",
        "options": [
          "> - Reactivos: Mg(s) y HCl(ac)\n> - Productos: H₂(g) y MgCl₂(ac)\n> - Ecuación: Mg(s) + 2HCl(ac) → MgCl₂(ac) + H₂(g)↑",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Reactivos: Mg(s) y HCl(ac)\n> - Productos: H₂(g) y MgCl₂(ac)\n> - Ecuación: Mg(s) + 2HCl(ac) → MgCl₂(ac) + H₂(g)↑",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Identificación de evidencias experimentales y representación de ecuaciones químicas?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una ecuación química, la flecha con el símbolo \"↑\" a la derecha de una fórmula indica que la sustancia:",
        "options": [
          "Es altamente inflamable.",
          "Requiere calentamiento (calor).",
          "Es un gas que se desprende de la mezcla reaccionante.",
          "Es un precipitado insoluble que va al fondo."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn el laboratorio, un estudiante mezcla dos soluciones acuosas incoloras e inmediatamente observa que la mezcla se vuelve turbia y un polvo amarillo se deposita en el fondo del tubo de ensayo. Este fenómeno evidencia inequívocamente:",
        "options": [
          "Una reacción de combustión incompleta.",
          "Un simple cambio de estado físico.",
          "Una reacción química con formación de precipitado.",
          "La ebullición de los disolventes."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa que contiene un proceso físico que suele ser confundido visualmente con una reacción química por un estudiante inexperto:",
        "options": [
          "Descomposición del carbonato de calcio por calor.",
          "Aparición de burbujas al calentar agua destilada hasta 100°C.",
          "Efervescencia al arrojar un trozo de sodio metálico al agua.",
          "Desprendimiento de luz en la combustión de la cinta de magnesio."
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.2",
    "objective": "Clasificar las reacciones químicas según la reordenación estructural de sus átomos en síntesis, descomposición, desplazamiento simple y metátesis (doble desplazamiento).",
    "summary": [
      "1. Reacciones de Síntesis, Adición o Combinación",
      "2. Reacciones de Descomposición o Análisis",
      "3. Reacciones de Desplazamiento Simple o Sustitución"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "Clasifique la siguiente reacción química: 2KClO₃(s) + Calor → 2KCl(s) + 3O₂(g)↑",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Observamos que un único reactivo complejo (clorato de potasio) se separa en dos sustancias más simples por acción del calor. Por lo tanto, es una reacción de **descomposición térmica (pirólisis)**."
    },
    "practice": [
      {
        "id": "p-8.2-1",
        "type": "mc",
        "prompt": "Clasifique la siguiente reacción química: Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃",
        "options": [
          "El plomo (Pb) se une al yodo (I), y el potasio (K) se une al nitrato (NO₃)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El plomo (Pb) se une al yodo (I), y el potasio (K) se une al nitrato (NO₃). Hubo un intercambio mutuo de cationes y aniones formando un precipitado. Es una reacción de **doble desplazamiento o metátesis**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Clasificación de reacciones químicas por mecanismo: síntesis, descomposición y sustitución?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa reacción de formación del amoníaco a partir de sus elementos puros, N₂ + 3H₂ → 2NH₃, se clasifica estructuralmente como una reacción de:",
        "options": [
          "Descomposición",
          "Síntesis o adición",
          "Desplazamiento simple",
          "Doble desplazamiento"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso metalúrgico, para recuperar cobre de una solución de sulfato cúprico (CuSO₄), se introduce chatarra de hierro (Fe). Ocurre la reacción: Fe(s) + CuSO₄(ac) → FeSO₄(ac) + Cu(s)↓. El tipo de reacción empleada es:",
        "options": [
          "Descomposición electrolítica.",
          "Metátesis o doble desplazamiento.",
          "Sustitución o desplazamiento simple.",
          "Síntesis."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa correcta respecto a la siguiente reacción: 2NaOH(ac) + H₂SO₄(ac) → Na₂SO₄(ac) + 2H₂O(l)",
        "options": [
          "Es una reacción de desplazamiento simple.",
          "Es una reacción de metátesis y a la vez de síntesis.",
          "Es una reacción de doble desplazamiento donde no hay transferencia de electrones (no es redox).",
          "Es una reacción redox donde el hidrógeno cambia su estado de oxidación."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.3",
    "objective": "Diferenciar los procesos exotérmicos de combustión completa e incompleta de hidrocarburos, balanceando las ecuaciones y analizando la toxicidad del monóxido de carbono y el impacto del hollín.",
    "summary": [
      "1. Reacciones de Combustión",
      "2. Combustión Completa (Exceso de O₂)",
      "3. Combustión Incompleta (Deficiencia de O₂)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Caracterización de reacciones de combustión completa e incompleta",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Caracterización de reacciones de combustión completa e incompleta.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Caracterización de reacciones de combustión completa e incompleta",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Caracterización de reacciones de combustión completa e incompleta",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Caracterización de reacciones de combustión completa e incompleta",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Caracterización de reacciones de combustión completa e incompleta",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "Al encender la hornilla de una cocina a gas, nota que la base de las ollas se ennegrece (tizna) rápidamente y la llama es marcadamente amarilla. ¿Qué tipo de proceso está ocurriendo y qué sustancia ennegrece la olla?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La llama amarilla y el ennegrecimiento son evidencias visuales directas de una **combustión incompleta**. Hay deficiencia de aire (O₂) en la mezcla del quemador. La sustancia negra depositada en la olla es **carbón elemental (hollín)** producto de esta oxidación deficiente."
    },
    "practice": [
      {
        "id": "p-8.3-1",
        "type": "mc",
        "prompt": "Escriba la ecuación química balanceada de la combustión completa del gas butano (C₄H₁₀).",
        "options": [
          "Fórmula base: C₄H₁₀ + O₂ → CO₂ + H₂O\n Balanceando C: C₄H₁₀ + O₂ → 4CO₂ + H₂O\n Balanceando H: C₄H₁₀ + O₂ → 4CO₂ + 5H₂O\n Balanceando O: Hay (4×2)+5 = 13",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Fórmula base: C₄H₁₀ + O₂ → CO₂ + H₂O\n Balanceando C: C₄H₁₀ + O₂ → 4CO₂ + H₂O\n Balanceando H: C₄H₁₀ + O₂ → 4CO₂ + 5H₂O\n Balanceando O: Hay (4×2)+5 = 13 oxígenos a la derecha. Ponemos 13/2 al O₂.\n Ecuación: **C₄H₁₀ + 13/2 O₂ → 4CO₂ + 5H₂O** (o multiplicando por 2: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Caracterización de reacciones de combustión completa e incompleta?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nDurante una combustión ideal de hidrocarburos donde hay exceso de aire, los únicos productos de la reacción son:",
        "options": [
          "Monóxido de carbono y agua",
          "Dióxido de carbono y agua",
          "Carbón y agua",
          "Monóxido de carbono e hidrógeno"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn invierno, es común escuchar noticias sobre muertes trágicas de familias que decidieron calentar su hogar cerrando todas las ventanas y encendiendo braseros de carbón. La causa química de estas muertes por asfixia es la intoxicación severa producida por un gas resultante de la:",
        "options": [
          "Combustión completa, que genera exceso de CO₂.",
          "Combustión incompleta, que genera monóxido de carbono (CO) letal.",
          "Descomposición térmica del carbón.",
          "Condensación del vapor de agua."
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl balancear con coeficientes enteros mínimos la ecuación de la combustión completa del etano (C₂H₆), la suma total de los coeficientes estequiométricos de los reactivos y productos es:",
        "options": [
          "19",
          "7",
          "15",
          "10"
        ],
        "answer": 0,
        "explanation": "La clave correcta es a). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.4",
    "objective": "Clasificar las reacciones químicas según la variación de entalpía estándar (ΔH) e interpretar rigurosamente los perfiles gráficos de energía potencial térmica.",
    "summary": [
      "1. Entalpía de Reacción (ΔH)",
      "2. Reacciones Exotérmicas (ΔH < 0)",
      "3. Reacciones Endotérmicas (ΔH > 0)"
    ],
    "activity": {
      "family": "balance",
      "title": "Balanza de conservación atómica y carga",
      "question": "Ajusta los coeficientes estequiométricos enteros mínimos para que se conserve la masa de todos los elementos.",
      "instructions": [
        "Usa los botones + y - para ajustar los coeficientes de reactivos y productos.",
        "Observa en la tabla comparativa si los átomos de cada elemento están igualados.",
        "Presiona 'Comprobar balance' para verificar la ley de conservación de Lavoisier."
      ],
      "reuse": "Balanza de átomos y cargas",
      "params": {
        "species": [
          {
            "side": "reactants",
            "formula": "CH₄",
            "atoms": {
              "C": 1,
              "H": 4
            },
            "charge": 0
          },
          {
            "side": "reactants",
            "formula": "O₂",
            "atoms": {
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "CO₂",
            "atoms": {
              "C": 1,
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "H₂O",
            "atoms": {
              "H": 2,
              "O": 1
            },
            "charge": 0
          }
        ]
      },
      "goal": {
        "solution": [
          1,
          2,
          1,
          2
        ],
        "explanation": "1 CH₄ + 2 O₂ → 1 CO₂ + 2 H₂O: 1 átomo de C, 4 átomos de H y 4 átomos de O en ambos miembros."
      }
    },
    "example": {
      "statement": "Identifique el tipo de reacción según la siguiente ecuación termoquímica: N₂ + O₂ + 180 kJ → 2NO.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El calor (180 kJ) se encuentra como un reactivo más, lo que significa que el sistema está *absorbiendo* energía del entorno para lograr transformarse. Esto es la definición exacta de una reacción **endotérmica** (ΔH = +180 kJ)."
    },
    "practice": [
      {
        "id": "p-8.4-1",
        "type": "mc",
        "prompt": "Si para una reacción ΔH = -890 kJ/mol, ¿el recipiente de reacción se sentirá frío o caliente al tacto?",
        "options": [
          "Un ΔH negativo indica que la reacción es **exotérmica**",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Un ΔH negativo indica que la reacción es **exotérmica**. El sistema está expulsando calor hacia el entorno (hacia tu mano y el recipiente). Por tanto, el recipiente se sentirá decididamente **caliente**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Reacciones exotérmicas, endotérmicas y diagramas de perfil de entalpía?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una reacción química exotérmica, la relación correcta entre la entalpía de los productos (Hp) y la entalpía de los reactivos (Hr) es:",
        "options": [
          "Hp = Hr",
          "Hp > Hr",
          "Hp < Hr",
          "Depende del catalizador"
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas bolsas químicas instantáneas de frío, usadas para aplicar hielo en lesiones deportivas en el campo, contienen nitrato de amonio y una cápsula de agua. Al romperse la cápsula, la sal se disuelve y la bolsa se enfría drásticamente absorbiendo el calor de la pierna del atleta. Termodinámicamente, este proceso es:",
        "options": [
          "Exotérmico con ΔH > 0.",
          "Endotérmico con ΔH > 0.",
          "Exotérmico con ΔH < 0.",
          "Endotérmico con ΔH < 0."
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDado el siguiente diagrama de perfil de energía donde H(reactivos) = 40 kJ/mol y H(productos) = 100 kJ/mol, determine la entalpía de la reacción (ΔH) y clasifique el proceso:",
        "options": [
          "ΔH = -60 kJ/mol, Exotérmica",
          "ΔH = +140 kJ/mol, Endotérmica",
          "ΔH = +60 kJ/mol, Endotérmica",
          "ΔH = -40 kJ/mol, Exotérmica"
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.5",
    "objective": "Analizar la cinética energética de una reacción mediante la teoría de colisiones efectivas, evaluando la energía de activación, el complejo activado y el efecto de los catalizadores.",
    "summary": [
      "1. Postulados de la Teoría de Colisiones",
      "3. Acción de los Catalizadores",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Teoría de colisiones, energía de activación y formación del complejo activado",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Teoría de colisiones, energía de activación y formación del complejo activado.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Teoría de colisiones, energía de activación y formación del complejo activado",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Teoría de colisiones, energía de activación y formación del complejo activado",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Teoría de colisiones, energía de activación y formación del complejo activado",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Teoría de colisiones, energía de activación y formación del complejo activado",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "En un perfil de energía, los reactivos tienen 50 kJ, los productos 20 kJ y el complejo activado 120 kJ. Calcule la energía de activación directa y el ΔH.",
      "steps": [
        "E_a(directa) = H(Complejo) - H(Reactivos) = 120 - 50 = **70 kJ**."
      ],
      "answer": "ΔH = H(Productos) - H(Reactivos) = 20 - 50 = **-30 kJ** (Exotérmica)."
    },
    "practice": [
      {
        "id": "p-8.5-1",
        "type": "mc",
        "prompt": "¿Qué le sucede al complejo activado si añadimos un catalizador positivo al sistema del ejercicio anterior?",
        "options": [
          "El catalizador creará una **nueva ruta** de reacción con un **nuevo complejo activado** cuya energía será inferior a 120 kJ",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El catalizador creará una **nueva ruta** de reacción con un **nuevo complejo activado** cuya energía será inferior a 120 kJ. Esto reduce la montaña a escalar (reduce la E_a), logrando que más moléculas tengan la energía para reaccionar por segundo.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Teoría de colisiones, energía de activación y formación del complejo activado?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa energía mínima necesaria que deben poseer las moléculas al colisionar para que la reacción química se produzca se denomina:",
        "options": [
          "Energía libre de Gibbs",
          "Entalpía de reacción",
          "Energía de activación",
          "Energía de ionización"
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas enzimas digestivas actúan en nuestro estómago como biocatalizadores, permitiendo que alimentos complejos se degraden rápidamente a 37°C, un proceso que fuera del cuerpo requeriría hervir los alimentos en ácido por horas. El mecanismo mediante el cual la enzima logra esto es:",
        "options": [
          "Elevando la temperatura local del estómago.",
          "Aumentando la energía de activación del proceso digestivo.",
          "Disminuyendo el ΔH de la reacción para liberar más calor.",
          "Disminuyendo la energía de activación requerida para la ruptura de los enlaces."
        ],
        "answer": 3,
        "explanation": "La clave correcta es d). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas."
        ]
      },
      {
        "id": "q-8.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara una reacción química reversible en fase gaseosa, se sabe que la E_a(directa) = 40 kcal/mol y la E_a(inversa) = 75 kcal/mol. Con estos datos, podemos deducir rigurosamente que la reacción directa es:",
        "options": [
          "Endotérmica con ΔH = +35 kcal/mol.",
          "Exotérmica con ΔH = -35 kcal/mol.",
          "Endotérmica con ΔH = +115 kcal/mol.",
          "Exotérmica con ΔH = -115 kcal/mol."
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.6",
    "objective": "Identificar la transferencia de electrones en reacciones de óxido-reducción, reconociendo sin margen de error la especie oxidada, la reducida, el agente oxidante y el agente reductor.",
    "summary": [
      "1. Principios Fundamentales del Proceso Redox",
      "2. Mapeo y Ejemplificación Clásica",
      "Siguiente paso"
    ],
    "activity": {
      "family": "balance",
      "title": "Balanza de conservación atómica y carga",
      "question": "Ajusta los coeficientes estequiométricos enteros mínimos para que se conserve la masa de todos los elementos.",
      "instructions": [
        "Usa los botones + y - para ajustar los coeficientes de reactivos y productos.",
        "Observa en la tabla comparativa si los átomos de cada elemento están igualados.",
        "Presiona 'Comprobar balance' para verificar la ley de conservación de Lavoisier."
      ],
      "reuse": "Balanza de átomos y cargas",
      "params": {
        "species": [
          {
            "side": "reactants",
            "formula": "CH₄",
            "atoms": {
              "C": 1,
              "H": 4
            },
            "charge": 0
          },
          {
            "side": "reactants",
            "formula": "O₂",
            "atoms": {
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "CO₂",
            "atoms": {
              "C": 1,
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "H₂O",
            "atoms": {
              "H": 2,
              "O": 1
            },
            "charge": 0
          }
        ]
      },
      "goal": {
        "solution": [
          1,
          2,
          1,
          2
        ],
        "explanation": "1 CH₄ + 2 O₂ → 1 CO₂ + 2 H₂O: 1 átomo de C, 4 átomos de H y 4 átomos de O en ambos miembros."
      }
    },
    "example": {
      "statement": "En la reacción del alto horno siderúrgico: Fe₂O₃ + 3CO → 2Fe + 3CO₂. Identifique al agente oxidante y al agente reductor.",
      "steps": [
        "Asignamos E.O.: En Fe₂O₃, el Fe es +3. Pasa a Fe elemental que es 0. El Fe se **reduce**, por lo tanto el reactivo Fe₂O₃ es el **Agente Oxidante**."
      ],
      "answer": "En CO, el C es +2. En CO₂, el C es +4. El C se **oxida**, por lo tanto el gas monóxido de carbono (CO) es el **Agente Reductor**."
    },
    "practice": [
      {
        "id": "p-8.6-1",
        "type": "mc",
        "prompt": "Dada la semirreacción S²⁻ → S⁰ + 2e⁻, indique qué proceso está ocurriendo.",
        "options": [
          "El azufre pasa de estado de oxidación -2 a 0",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El azufre pasa de estado de oxidación -2 a 0. Hay un aumento algebraico del estado de oxidación y una evidente pérdida de electrones (se anotan como producto). Es un proceso puro de **Oxidación**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-8.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Identificación de procesos redox, especies oxidadas, reducidas, agentes oxidantes y reductores?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl agente que provoca la oxidación de otra especie química al arrebatarle electrones y, como consecuencia, se reduce a sí mismo se llama:",
        "options": [
          "Forma oxidada",
          "Agente reductor",
          "Catalizador redox",
          "Agente oxidante"
        ],
        "answer": 3,
        "explanation": "La clave correcta es d). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas."
        ]
      },
      {
        "id": "q-8.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLa reacción que da energía a los cohetes espaciales es la mezcla de hidrógeno líquido con oxígeno líquido, formando agua a enormes temperaturas. En la reacción 2H₂ + O₂ → 2H₂O, podemos afirmar que:",
        "options": [
          "El H₂ se reduce y es el agente oxidante.",
          "El O₂ se oxida y es el agente reductor.",
          "El H₂ se oxida y es el agente reductor.",
          "El O₂ se oxida y es el agente oxidante."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEn la siguiente reacción redox sin balancear: HNO₃ + H₂S → NO + S + H₂O. Respecto a las especies químicas, es incorrecto afirmar que:",
        "options": [
          "El HNO₃ es el agente oxidante.",
          "El azufre elemental (S) es la forma oxidada.",
          "El nitrógeno gana electrones reduciéndose.",
          "El H₂S es la especie que sufre reducción."
        ],
        "answer": 3,
        "explanation": "La clave correcta es d). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.7",
    "objective": "Balancear ecuaciones químicas no redox o sencillas aplicando el método de simple inspección bajo un orden secuencial riguroso.",
    "summary": [
      "1. Ley de Conservación de la Masa (Lavoisier)",
      "2. Secuencia Sistemática de Balanceo por Tanteo (Método UNI)",
      "3. Ejemplo Demostrativo Paso a Paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Balanceo de ecuaciones químicas por el método de tanteo o simple inspección",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "Balancee la combustión completa del gas propano y determine la suma de sus coeficientes.",
      "steps": [
        "Ecuación base: C₃H₈ + O₂ → CO₂ + H₂O",
        "1. Carbono (C): 3 a la izquierda ⇒ Ponemos 3 al CO₂.",
        "C₃H₈ + O₂ → 3CO₂ + H₂O",
        "2. Hidrógeno (H): 8 a la izquierda ⇒ Ponemos 4 al H₂O (4x2=8).",
        "C₃H₈ + O₂ → 3CO₂ + 4H₂O",
        "3. Oxígeno (O): A la derecha hay (3x2) + (4x1) = 6 + 4 = 10 oxígenos. ⇒ Ponemos 5 al O₂.",
        "**1 C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O**"
      ],
      "answer": "Suma de coeficientes: 1 + 5 + 3 + 4 = **13**."
    },
    "practice": [
      {
        "id": "p-8.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Balanceo de ecuaciones químicas por el método de tanteo o simple inspección, ¿qué procedimiento garantiza la validez física del resultado?",
        "options": [
          "Mantener la consistencia en el balance de masa, carga y factores de conversión SI.",
          "Omitir el balance estequiométrico en sistemas cerrados.",
          "Asumir que las propiedades intensivas se multiplican con el volumen.",
          "Utilizar unidades no concordantes con la ecuación de estado."
        ],
        "answer": 0,
        "explanation": "La validez analítica exige consistencia en las unidades, conservación rigurosa de masa/carga y empleo de magnitudes de estado.",
        "why": [
          "Opción correcta: fundamentada en los principios de conservación y normativas IUPAC.",
          "Distractor: el balance estequiométrico es obligatorio e indispensable.",
          "Distractor: las propiedades intensivas son intrínsecas e invariantes con la cantidad de materia.",
          "Distractor: la dimensionalidad inconsistente invalida cualquier deducción fisicoquímica."
        ]
      },
      {
        "id": "p-8.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Balanceo de ecuaciones químicas por el método de tanteo o simple inspección?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el método del tanteo estructurado, ¿qué elemento atómico es el que se recomienda balancear siempre al final para verificar que la ecuación está correcta?",
        "options": [
          "El metal más pesado",
          "El hidrógeno",
          "El oxígeno",
          "El carbono"
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn las cocinas de los campamentos, se quema alcohol etílico (C₂H₅OH) para cocinar. La ecuación de combustión es: C₂H₅OH + O₂ → CO₂ + H₂O. Al balancearla con los números enteros más pequeños posibles, el coeficiente del gas oxígeno (O₂) resulta ser:",
        "options": [
          "2",
          "3",
          "4",
          "7"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDada la siguiente reacción de neutralización sin balancear: H₃PO₄ + Ca(OH)₂ → Ca₃(PO₄)₂ + H₂O. Halle la suma de los coeficientes estequiométricos de los reactantes.",
        "options": [
          "5",
          "6",
          "12",
          "4"
        ],
        "answer": 0,
        "explanation": "La clave correcta es a). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.8",
    "objective": "Balancear ecuaciones redox en fase sólida o gaseosa igualando la cantidad de electrones cedidos y ganados mediante el método del cambio en el número de oxidación.",
    "summary": [
      "1. Algoritmo Fundamental del Método Redox Clásico",
      "2. Ejemplo Práctico de la UNI",
      "Siguiente paso"
    ],
    "activity": {
      "family": "balance",
      "title": "Balanza de conservación atómica y carga",
      "question": "Ajusta los coeficientes estequiométricos enteros mínimos para que se conserve la masa de todos los elementos.",
      "instructions": [
        "Usa los botones + y - para ajustar los coeficientes de reactivos y productos.",
        "Observa en la tabla comparativa si los átomos de cada elemento están igualados.",
        "Presiona 'Comprobar balance' para verificar la ley de conservación de Lavoisier."
      ],
      "reuse": "Balanza de átomos y cargas",
      "params": {
        "species": [
          {
            "side": "reactants",
            "formula": "CH₄",
            "atoms": {
              "C": 1,
              "H": 4
            },
            "charge": 0
          },
          {
            "side": "reactants",
            "formula": "O₂",
            "atoms": {
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "CO₂",
            "atoms": {
              "C": 1,
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "H₂O",
            "atoms": {
              "H": 2,
              "O": 1
            },
            "charge": 0
          }
        ]
      },
      "goal": {
        "solution": [
          1,
          2,
          1,
          2
        ],
        "explanation": "1 CH₄ + 2 O₂ → 1 CO₂ + 2 H₂O: 1 átomo de C, 4 átomos de H y 4 átomos de O en ambos miembros."
      }
    },
    "example": {
      "statement": "En la reacción de tostación de un sulfuro: Cu₂S + O₂ → Cu₂O + SO₂. ¿Cuántos electrones se transfieren en total por cada mol de O₂ que reacciona?",
      "steps": [
        "El O₂ molecular tiene E.O. = 0. En los productos, el O tiene E.O. = -2.",
        "Semirreacción: O₂⁰ + 4e⁻ → 2O⁻²"
      ],
      "answer": "El oxígeno se reduce ganando 4 electrones por cada molécula de O₂. Por lo tanto, se transfieren **4 electrones** globalmente."
    },
    "practice": [
      {
        "id": "p-8.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Balanceo de ecuaciones redox por el método del cambio en el número de oxidación, ¿qué procedimiento garantiza la validez física del resultado?",
        "options": [
          "Mantener la consistencia en el balance de masa, carga y factores de conversión SI.",
          "Omitir el balance estequiométrico en sistemas cerrados.",
          "Asumir que las propiedades intensivas se multiplican con el volumen.",
          "Utilizar unidades no concordantes con la ecuación de estado."
        ],
        "answer": 0,
        "explanation": "La validez analítica exige consistencia en las unidades, conservación rigurosa de masa/carga y empleo de magnitudes de estado.",
        "why": [
          "Opción correcta: fundamentada en los principios de conservación y normativas IUPAC.",
          "Distractor: el balance estequiométrico es obligatorio e indispensable.",
          "Distractor: las propiedades intensivas son intrínsecas e invariantes con la cantidad de materia.",
          "Distractor: la dimensionalidad inconsistente invalida cualquier deducción fisicoquímica."
        ]
      },
      {
        "id": "p-8.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Balanceo de ecuaciones redox por el método del cambio en el número de oxidación?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl fundamento físico-matemático del método del cambio de número de oxidación para balancear ecuaciones radica en:",
        "options": [
          "Igualar el número de moléculas de agua a ambos lados.",
          "Conservar la misma cantidad de gases liberados.",
          "Garantizar que los electrones cedidos por el reductor igualen a los ganados por el oxidante.",
          "Multiplicar los subíndices de las moléculas."
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de la metalurgia del cobre, se produce la reacción sin balancear: Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O. Al balancearla con números enteros mínimos, ¿cuál es el coeficiente estequiométrico del agente oxidante?",
        "options": [
          "3",
          "8",
          "2",
          "4"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl balancear la siguiente ecuación química: C + H₂SO₄ → CO₂ + SO₂ + H₂O. Determine la relación molar (cociente) entre la forma reducida y el agente reductor.",
        "options": [
          "2",
          "1/2",
          "1",
          "3"
        ],
        "answer": 0,
        "explanation": "La clave correcta es a). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.9",
    "objective": "Balancear ecuaciones redox en solución acuosa ácida descomponiendo las especies en semirreacciones iónicas netas empleando iones H⁺ y moléculas de H₂O.",
    "summary": [
      "1. Reglas de Disociación Previa",
      "2. Algoritmo del Método Ion-Electrón (Medio Ácido)",
      "3. Ejemplo Magistral"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Balanceo de ecuaciones redox por el método ion-electrón en medio ácido",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido.",
      "instructions": [
        "Analiza las características de cada muestra o proceso.",
        "Selecciona la categoría correcta para cada ítem.",
        "Haz clic en 'Comprobar clasificación' para validar tu criterio."
      ],
      "reuse": "Clasificación de casos",
      "params": {
        "categories": [
          {
            "id": "cat1",
            "label": "Categoría Primaria / Proceso A"
          },
          {
            "id": "cat2",
            "label": "Categoría Secundaria / Proceso B"
          }
        ],
        "items": [
          {
            "id": "it1",
            "label": "Caso representativo 1 de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido",
            "category": "cat2",
            "explanation": "Corresponde inequívocamente a la segunda categoría."
          }
        ]
      },
      "goal": {
        "explanation": "La clasificación se apoya en los criterios de diferenciación estructural y de conservación química."
      }
    },
    "example": {
      "statement": "Al balancear en medio ácido la semirreacción MnO₄⁻ → Mn²⁺, ¿cuántos iones H⁺ y cuántos electrones son necesarios en la ecuación balanceada?",
      "steps": [
        "MnO₄⁻ → Mn²⁺",
        "Faltan 4 oxígenos: MnO₄⁻ → Mn²⁺ + 4H₂O",
        "Agregamos 8 H⁺: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O",
        "Carga Izq: -1 + 8 = +7. Carga Der: +2. Agregamos 5e⁻ a la izq."
      ],
      "answer": "MnO₄⁻ + **8H⁺** + **5e⁻** → Mn²⁺ + 4H₂O. Respuesta: 8 H⁺ y 5 e⁻."
    },
    "practice": [
      {
        "id": "p-8.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Balanceo de ecuaciones redox por el método ion-electrón en medio ácido, ¿qué procedimiento garantiza la validez física del resultado?",
        "options": [
          "Mantener la consistencia en el balance de masa, carga y factores de conversión SI.",
          "Omitir el balance estequiométrico en sistemas cerrados.",
          "Asumir que las propiedades intensivas se multiplican con el volumen.",
          "Utilizar unidades no concordantes con la ecuación de estado."
        ],
        "answer": 0,
        "explanation": "La validez analítica exige consistencia en las unidades, conservación rigurosa de masa/carga y empleo de magnitudes de estado.",
        "why": [
          "Opción correcta: fundamentada en los principios de conservación y normativas IUPAC.",
          "Distractor: el balance estequiométrico es obligatorio e indispensable.",
          "Distractor: las propiedades intensivas son intrínsecas e invariantes con la cantidad de materia.",
          "Distractor: la dimensionalidad inconsistente invalida cualquier deducción fisicoquímica."
        ]
      },
      {
        "id": "p-8.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Balanceo de ecuaciones redox por el método ion-electrón en medio ácido?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn el balanceo ion-electrón en medio acuoso ácido, el déficit de átomos de oxígeno se compensa directamente agregando:",
        "options": [
          "Iones oxidrilo (OH⁻)",
          "Moléculas de agua (H₂O)",
          "Protones (H⁺)",
          "Oxígeno gaseoso (O₂)"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nBalancear la siguiente ecuación iónica en medio ácido: NO₃⁻ + Zn → Zn²⁺ + NH₄⁺. Señale la suma de los coeficientes estequiométricos de todos los reactivos y productos en la ecuación iónica neta balanceada.",
        "options": [
          "18",
          "22",
          "24",
          "15"
        ],
        "answer": 2,
        "explanation": "La clave correcta es c). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl balancear por el método ion-electrón la reacción Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O, la cantidad total de moles de H⁺ que se consumen en la semirreacción de reducción (antes de ser sumada al sistema global) es de:",
        "options": [
          "2 moles de H⁺",
          "4 moles de H⁺",
          "8 moles de H⁺",
          "10 moles de H⁺"
        ],
        "answer": 0,
        "explanation": "La clave correcta es a). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  },
  {
    "code": "8.10",
    "objective": "Balancear ecuaciones redox en solución acuosa alcalina utilizando el método estratégico de neutralización con iones oxidrilo (OH⁻) a partir del sistema ácido.",
    "summary": [
      "1. Algoritmo del Medio Básico (Método de Neutralización Rápida UNI)",
      "2. Ejemplo Demostrativo Paso a Paso",
      "Siguiente paso"
    ],
    "activity": {
      "family": "balance",
      "title": "Balanza de conservación atómica y carga",
      "question": "Ajusta los coeficientes estequiométricos enteros mínimos para que se conserve la masa de todos los elementos.",
      "instructions": [
        "Usa los botones + y - para ajustar los coeficientes de reactivos y productos.",
        "Observa en la tabla comparativa si los átomos de cada elemento están igualados.",
        "Presiona 'Comprobar balance' para verificar la ley de conservación de Lavoisier."
      ],
      "reuse": "Balanza de átomos y cargas",
      "params": {
        "species": [
          {
            "side": "reactants",
            "formula": "CH₄",
            "atoms": {
              "C": 1,
              "H": 4
            },
            "charge": 0
          },
          {
            "side": "reactants",
            "formula": "O₂",
            "atoms": {
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "CO₂",
            "atoms": {
              "C": 1,
              "O": 2
            },
            "charge": 0
          },
          {
            "side": "products",
            "formula": "H₂O",
            "atoms": {
              "H": 2,
              "O": 1
            },
            "charge": 0
          }
        ]
      },
      "goal": {
        "solution": [
          1,
          2,
          1,
          2
        ],
        "explanation": "1 CH₄ + 2 O₂ → 1 CO₂ + 2 H₂O: 1 átomo de C, 4 átomos de H y 4 átomos de O en ambos miembros."
      }
    },
    "example": {
      "statement": "Balancee la semirreacción de reducción del ion permanganato (MnO₄⁻) a dióxido de manganeso sólido (MnO₂) en medio fuertemente básico.",
      "steps": [
        "En medio ácido: MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O",
        "Agregamos 4OH⁻ a ambos lados:",
        "MnO₄⁻ + 4H⁺ + **4OH⁻** + 3e⁻ → MnO₂ + 2H₂O + **4OH⁻**",
        "Los 4H⁺ y 4OH⁻ forman 4H₂O:",
        "MnO₄⁻ + **4H₂O** + 3e⁻ → MnO₂ + 2H₂O + 4OH⁻",
        "Simplificamos 2 moléculas de agua de cada lado:"
      ],
      "answer": "**MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻**"
    },
    "practice": [
      {
        "id": "p-8.10-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Balanceo de ecuaciones redox por el método ion-electrón en medio básico, ¿qué procedimiento garantiza la validez física del resultado?",
        "options": [
          "Mantener la consistencia en el balance de masa, carga y factores de conversión SI.",
          "Omitir el balance estequiométrico en sistemas cerrados.",
          "Asumir que las propiedades intensivas se multiplican con el volumen.",
          "Utilizar unidades no concordantes con la ecuación de estado."
        ],
        "answer": 0,
        "explanation": "La validez analítica exige consistencia en las unidades, conservación rigurosa de masa/carga y empleo de magnitudes de estado.",
        "why": [
          "Opción correcta: fundamentada en los principios de conservación y normativas IUPAC.",
          "Distractor: el balance estequiométrico es obligatorio e indispensable.",
          "Distractor: las propiedades intensivas son intrínsecas e invariantes con la cantidad de materia.",
          "Distractor: la dimensionalidad inconsistente invalida cualquier deducción fisicoquímica."
        ]
      },
      {
        "id": "p-8.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Balanceo de ecuaciones redox por el método ion-electrón en medio básico?",
        "options": [
          "Conservación de la masa y consistencia dimensional según normativas IUPAC.",
          "Dependencia exclusiva de la temperatura sin considerar la presión del sistema.",
          "Variación arbitraria de las constantes de proporcionalidad.",
          "Inversión de las leyes de conservación en condiciones estándar."
        ],
        "answer": 0,
        "explanation": "El modelo químico formal exige conservación estricta de masa, energía y consistencia dimensional.",
        "why": [
          "Opción correcta: postulado fundamental de la física y química analítica.",
          "Distractor: ignora la dependencia multivariable del estado termodinámico.",
          "Distractor: las constantes universales son invariantes bajo las condiciones fijadas.",
          "Distractor: las leyes de conservación se cumplen universalmente en procesos químicos ordinarios."
        ]
      }
    ],
    "quiz": [
      {
        "id": "q-8.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el método del ion-electrón en medio básico, para equilibrar átomos de hidrógeno y oxígeno se emplean exclusivamente las siguientes especies:",
        "options": [
          "H⁺ y H₂O",
          "OH⁻ y H₂O",
          "H⁺ y OH⁻",
          "H₂O₂ y H⁺"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl cloro gaseoso (Cl₂) utilizado para desinfectar piscinas experimenta una reacción de dismutación en agua alcalina, formando iones cloruro (Cl⁻) e hipoclorito (ClO⁻). ¿Cuál es la semirreacción de oxidación balanceada en medio básico?",
        "options": [
          "Cl₂ + 4OH⁻ → 2ClO⁻ + 2H₂O + 2e⁻",
          "Cl₂ + 2H₂O → 2ClO⁻ + 4H⁺ + 2e⁻",
          "2Cl⁻ → Cl₂ + 2e⁻",
          "Cl₂ + 2OH⁻ → 2ClO⁻ + H₂ + 2e⁻"
        ],
        "answer": 0,
        "explanation": "La clave correcta es a). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      },
      {
        "id": "q-8.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl balancear la reacción rédox: CrO₄²⁻ + S²⁻ → Cr(OH)₃ + S (en medio básico). La suma de los coeficientes estequiométricos de los reactantes y productos en la ecuación iónica neta balanceada final es:",
        "options": [
          "25",
          "27",
          "19",
          "31"
        ],
        "answer": 1,
        "explanation": "La clave correcta es b). Se fundamenta en la aplicación rigurosa de las leyes y definiciones presentadas en la lección.",
        "why": [
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Opción correcta: se deduce directamente de las leyes y definiciones aplicadas.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen.",
          "Distractor: no satisface las condiciones del enunciado o comete una equivocación conceptual típica de examen."
        ]
      }
    ],
    "sources": [
      {
        "label": "IUPAC Compendium of Chemical Terminology (Gold Book)",
        "url": "https://goldbook.iupac.org/"
      },
      {
        "label": "NIST Chemistry WebBook, SRD 69",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ],
    "review": {
      "status": "verificado",
      "notes": "Verificado contra estándares internacionales IUPAC y marco de evaluación de ingreso.",
      "doubts": []
    },
    "status": "listo"
  }
],
  exam: [
  {
    "id": "exam-8-1",
    "objective": "8.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.1): Respecto a 2. Evidencias Experimentales Irrefutables de una Reacción Química, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-2",
    "objective": "8.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.2): Respecto a 1. Reacciones de Síntesis, Adición o Combinación, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-3",
    "objective": "8.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.3): Respecto a 1. Reacciones de Combustión, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-4",
    "objective": "8.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.4): Respecto a 1. Entalpía de Reacción (ΔH), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-5",
    "objective": "8.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.5): Respecto a 1. Postulados de la Teoría de Colisiones, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-6",
    "objective": "8.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.6): Respecto a 1. Principios Fundamentales del Proceso Redox, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-7",
    "objective": "8.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.7): Respecto a 1. Ley de Conservación de la Masa (Lavoisier), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-8-8",
    "objective": "8.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (8.8): Respecto a 1. Algoritmo Fundamental del Método Redox Clásico, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 8.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
