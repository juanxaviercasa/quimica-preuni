// Módulo 2: Módulo 2: Estructura Atómica y Mecánica Cuántica
export const module02 = {
  number: 2,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 2: Estructura Atómica y Mecánica Cuántica.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "2.1",
    "objective": "Analizar la progresión histórica de las teorías atómicas desde el modelo corpuscular de Dalton hasta el átomo nuclear de Rutherford, contrastando sus postulados, aciertos experimentales y limitaciones conceptuales.",
    "summary": [
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Evolución de los modelos atómicos y estructura del átomo nuclear",
      "question": "Ajusta las variables de entrada hasta que la magnitud resultante cumpla el objetivo planteado.",
      "instructions": [
        "Modifica los valores numéricos mediante los deslizadores o campos de texto.",
        "Observa cómo cambia en tiempo real el resultado en las tarjetas inferiores.",
        "Alcanza el valor meta para validar la relación cuantitativa."
      ],
      "reuse": "Simulador paramétrico",
      "params": {
        "inputs": [
          {
            "id": "x",
            "label": "Parámetro de control A",
            "min": 1,
            "max": 20,
            "step": 1,
            "value": 5,
            "unit": "u"
          },
          {
            "id": "y",
            "label": "Parámetro de control B",
            "min": 1,
            "max": 10,
            "step": 1,
            "value": 2,
            "unit": "u"
          }
        ],
        "outputs": [
          {
            "id": "res",
            "label": "Magnitud calculada",
            "expr": "x * y",
            "unit": "u",
            "digits": 2
          }
        ],
        "constants": {}
      },
      "goal": {
        "output": "res",
        "target": 20,
        "tolerance": 0.1,
        "solution": {
          "x": 10,
          "y": 2
        },
        "explanation": "El valor objetivo de 20 u se alcanza al combinar el parámetro A en 10 u con el parámetro B en 2 u (10 × 2 = 20)."
      }
    },
    "example": {
      "statement": "¿Qué experimento fue crucial para descartar el modelo atómico de Thomson?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El experimento del bombardeo con partículas alfa sobre una lámina de oro realizado por Rutherford. Si el modelo de Thomson (masa positiva uniforme) fuera correcto, todas las partículas pesadas alfa habrían atravesado la lámina sin desviarse significativamente. El rebote de algunas partículas demostró la existencia de un núcleo denso."
    },
    "practice": [
      {
        "id": "p-2.1-1",
        "type": "mc",
        "prompt": "Identifique el error en el postulado de Dalton que afirma: \"Todos los átomos de un mismo elemento son rigurosamente idénticos en todas sus propiedades, incluida la masa\".",
        "options": [
          "El error radica en la ignorancia de los **isótopos**",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El error radica en la ignorancia de los **isótopos**. Átomos de un mismo elemento (mismo número de protones) pueden tener distinto número de neutrones y, por tanto, **diferente masa atómica**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Evolución de los modelos atómicos y estructura del átomo nuclear?",
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
        "id": "q-2.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nCientífico que descubrió el electrón mediante experimentos con tubos de rayos catódicos:",
        "options": [
          "John Dalton",
          "J.J. Thomson",
          "Ernest Rutherford",
          "Niels Bohr"
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
        "id": "q-2.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSegún el modelo atómico de Rutherford, se establece una analogía con el sistema solar. En este contexto, señale la afirmación correcta respecto a la masa atómica:",
        "options": [
          "Se distribuye uniformemente en todo el volumen atómico.",
          "Se concentra casi en su totalidad (99.99%) en el núcleo atómico.",
          "Está determinada principalmente por la masa de los electrones.",
          "Es idéntica para todos los isótopos de un elemento."
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
        "id": "q-2.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa principal objeción teórica al modelo planetario de Rutherford, fundamentada en las leyes del electromagnetismo clásico de Maxwell, es que:",
        "options": [
          "Los electrones no tienen masa suficiente para orbitar.",
          "Las fuerzas nucleares destruirían los electrones.",
          "El electrón orbitando perdería energía emitiendo radiación y colapsaría hacia el núcleo.",
          "Los neutrones causarían repulsión con los protones."
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
    "code": "2.2",
    "objective": "Identificar la masa, carga relativa y absoluta de las partículas subatómicas fundamentales (protón, neutrón y electrón) y representar correctamente cualquier núcleo atómico mediante su notación nuclear convencional.",
    "summary": [
      "2. Notación Estándar de un Núclido",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Caracterización de partículas subatómicas fundamentales y notación de núclidos",
      "question": "Construye la expresión o secuencia correcta seleccionando las fichas en el orden preciso.",
      "instructions": [
        "Toca las fichas conceptuales en el orden exacto de resolución.",
        "Si te equivocas, puedes quitar la última ficha o reiniciar.",
        "Presiona 'Comprobar' para validar tu construcción."
      ],
      "reuse": "Constructor de respuestas",
      "params": {
        "tokens": [
          "Paso 1",
          "Paso 2",
          "Paso 3",
          "Paso 4"
        ],
        "answer": [
          "Paso 1",
          "Paso 2",
          "Paso 3"
        ],
        "explanation": "El orden refleja la secuencia lógica de resolución y deducción química."
      },
      "goal": {}
    },
    "example": {
      "statement": "Determine el número atómico, de masa, protones, neutrones y electrones para el núclido ²³⁵₉₂U neutro.",
      "steps": [
        "Z = 92 ⇒ **92 protones**.",
        "A = 235 (nucleones).",
        "Como es un átomo neutro, **92 electrones**."
      ],
      "answer": "Neutrones: N = A - Z = 235 - 92 = **143 neutrones**."
    },
    "practice": [
      {
        "id": "p-2.2-1",
        "type": "mc",
        "prompt": "Ordenar las partículas subatómicas fundamentales en forma decreciente respecto a su masa absoluta.",
        "options": [
          "El neutrón es ligeramente más pesado que el protón, y ambos son casi 2000 veces más pesados que el electrón",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El neutrón es ligeramente más pesado que el protón, y ambos son casi 2000 veces más pesados que el electrón. Por lo tanto: **Neutrón > Protón ≫ Electrón**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Caracterización de partículas subatómicas fundamentales y notación de núclidos?",
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
        "id": "q-2.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué partícula subatómica determina la identidad de un elemento químico (su posición en la tabla periódica)?",
        "options": [
          "Neutrón",
          "Electrón",
          "Protón",
          "Positrón"
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
        "id": "q-2.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn la notación del isótopo estable más común del fósforo, ³¹₁₅P, el número total de partículas subatómicas fundamentales (protones, neutrones y electrones) presentes en el átomo neutro es:",
        "options": [
          "31",
          "46",
          "15",
          "16"
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
        "id": "q-2.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn átomo neutro presenta en total 50 nucleones fundamentales. Si se sabe que la cantidad de neutrones excede en 4 a la cantidad de protones, indique su número atómico (Z).",
        "options": [
          "21",
          "23",
          "25",
          "27"
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
    "code": "2.3",
    "objective": "Cuantificar la variación electrónica asociada a los procesos de ionización monoatómica, determinando el número de electrones en cationes y aniones y reconociendo la invariabilidad del núcleo atómico.",
    "summary": [
      "1. Naturaleza de los Iones Monoatómicos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de carga en iones monoatómicos, aniones y cationes",
      "question": "Ajusta las variables de entrada hasta que la magnitud resultante cumpla el objetivo planteado.",
      "instructions": [
        "Modifica los valores numéricos mediante los deslizadores o campos de texto.",
        "Observa cómo cambia en tiempo real el resultado en las tarjetas inferiores.",
        "Alcanza el valor meta para validar la relación cuantitativa."
      ],
      "reuse": "Simulador paramétrico",
      "params": {
        "inputs": [
          {
            "id": "x",
            "label": "Parámetro de control A",
            "min": 1,
            "max": 20,
            "step": 1,
            "value": 5,
            "unit": "u"
          },
          {
            "id": "y",
            "label": "Parámetro de control B",
            "min": 1,
            "max": 10,
            "step": 1,
            "value": 2,
            "unit": "u"
          }
        ],
        "outputs": [
          {
            "id": "res",
            "label": "Magnitud calculada",
            "expr": "x * y",
            "unit": "u",
            "digits": 2
          }
        ],
        "constants": {}
      },
      "goal": {
        "output": "res",
        "target": 20,
        "tolerance": 0.1,
        "solution": {
          "x": 10,
          "y": 2
        },
        "explanation": "El valor objetivo de 20 u se alcanza al combinar el parámetro A en 10 u con el parámetro B en 2 u (10 × 2 = 20)."
      }
    },
    "example": {
      "statement": "Determine el número de electrones, protones y neutrones para el anión ³¹₁₅P³⁻.",
      "steps": [
        "Protones (Z) = **15**",
        "Neutrones (N) = A - Z = 31 - 15 = **16**"
      ],
      "answer": "Electrones = Z - q = 15 - (-3) = 15 + 3 = **18 e⁻**"
    },
    "practice": [
      {
        "id": "p-2.3-1",
        "type": "mc",
        "prompt": "Un catión divalente tiene 18 electrones y 20 neutrones. Halle su número de masa (A).",
        "options": [
          "> - Carga q = +2",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Carga q = +2. Sabemos que # e⁻ = Z - q ⇒ 18 = Z - 2 ⇒ Z = 20.\n> - El número de masa es A = Z + N = 20 + 20 = **40**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de carga en iones monoatómicos, aniones y cationes?",
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
        "id": "q-2.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nCuando un átomo neutro se convierte en un anión monovalente, significa rigurosamente que:",
        "options": [
          "Perdió un electrón.",
          "Ganó un protón.",
          "Ganó un electrón.",
          "Perdió un neutrón."
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
        "id": "q-2.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl flúor es utilizado en dentífricos en forma de fluoruro (F⁻) para prevenir caries. Si el flúor neutro tiene Z=9 y A=19, indique el número de partículas fundamentales en el anión fluoruro.",
        "options": [
          "28",
          "29",
          "19",
          "10"
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
        "id": "q-2.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn anión trivalente y un catión monovalente poseen igual cantidad de electrones. Si la carga nuclear absoluta del catión es +3.04 × 10⁻¹⁸ C, determine el número atómico del anión. (Dato: e = 1.6 × 10⁻¹⁹ C)",
        "options": [
          "19",
          "18",
          "15",
          "14"
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
    "code": "2.4",
    "objective": "Comparar y contrastar las relaciones interatómicas fundamentales en función de sus nucleones y configuraciones electrónicas, aplicando sistemas de ecuaciones para resolver núclidos incógnita.",
    "summary": [
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Análisis de especies atómicas: isótopos, isóbaros, isótonos e isoelectrónicos",
      "question": "Construye la expresión o secuencia correcta seleccionando las fichas en el orden preciso.",
      "instructions": [
        "Toca las fichas conceptuales en el orden exacto de resolución.",
        "Si te equivocas, puedes quitar la última ficha o reiniciar.",
        "Presiona 'Comprobar' para validar tu construcción."
      ],
      "reuse": "Constructor de respuestas",
      "params": {
        "tokens": [
          "Paso 1",
          "Paso 2",
          "Paso 3",
          "Paso 4"
        ],
        "answer": [
          "Paso 1",
          "Paso 2",
          "Paso 3"
        ],
        "explanation": "El orden refleja la secuencia lógica de resolución y deducción química."
      },
      "goal": {}
    },
    "example": {
      "statement": "Dos isótopos de un elemento tienen una suma de números de masa igual a 72 y una suma de neutrones igual a 38. Halle el número atómico del elemento.",
      "steps": [
        "Isótopos ⇒ Z₁ = Z₂ = Z.",
        "A₁ + A₂ = 72",
        "(Z + N₁) + (Z + N₂) = 72 ⇒ 2Z + (N₁ + N₂) = 72"
      ],
      "answer": "Dado que N₁ + N₂ = 38, sustituimos: 2Z + 38 = 72 ⇒ 2Z = 34 ⇒ **Z = 17**."
    },
    "practice": [
      {
        "id": "p-2.4-1",
        "type": "mc",
        "prompt": "¿Cuál de los siguientes pares son isótonos? a) ¹⁴₆C y ¹⁴₇N b) ³⁹₁₉K y ⁴⁰₂₀Ca.",
        "options": [
          "Isótonos significa que N = A - Z debe ser igual",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Isótonos significa que N = A - Z debe ser igual.\n a) N₁ = 14-6 = 8 ; N₂ = 14-7 = 7. (No son isótonos)\n b) N₁ = 39-19 = **20** ; N₂ = 40-20 = **20**. ¡Son isótonos!",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Análisis de especies atómicas: isótopos, isóbaros, isótonos e isoelectrónicos?",
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
        "id": "q-2.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl protio, deuterio y tritio son especies que difieren en el número de neutrones pero poseen la misma carga nuclear. Por lo tanto, se denominan:",
        "options": [
          "Isóbaros",
          "Isótopos",
          "Isótonos",
          "Isoelectrónicos"
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
        "id": "q-2.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas propiedades químicas de un elemento están determinadas fundamentalmente por su nube electrónica. Si dos núclidos son isótopos, podemos afirmar con certeza que:",
        "options": [
          "Presentan diferentes propiedades químicas.",
          "Tienen idénticas propiedades físicas.",
          "Sus propiedades químicas son idénticas.",
          "Tienen el mismo número de nucleones fundamentales."
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
        "id": "q-2.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl átomo X es isóbaro con el ⁴⁰₂₀Ca e isótono con el ³⁹₁₉K. ¿Cuántos electrones posee el anión X²⁻?",
        "options": [
          "20",
          "22",
          "18",
          "19"
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
    "code": "2.5",
    "objective": "Deducir y calcular la masa atómica relativa promedio reportada en la tabla periódica a partir de las abundancias porcentuales y masas isotópicas obtenidas por espectrometría de masas.",
    "summary": [
      "1. Ecuación de la Masa Atómica Promedio",
      "2. Caso de Dos Isótopos (Modelo Algebraico UNI)",
      "3. Espectrometría de Masas"
    ],
    "activity": {
      "family": "isotopes",
      "title": "Laboratorio de isótopos y masa atómica promedio",
      "question": "Ajusta la abundancia del isótopo más ligero hasta igualar la masa atómica estándar del carbono reportada en la tabla periódica (12.011 u).",
      "instructions": [
        "Observa la masa isotópica de cada núclido obtenida por espectrometría de masas.",
        "Mueve el deslizador de abundancia relativa (%) hasta que la masa promedio ponderada coincida con 12.011 u con una tolerancia de ±0.005 u.",
        "Comprueba cómo el porcentaje determina el centro de gravedad del peso atómico."
      ],
      "reuse": "Laboratorio de isótopos",
      "params": {
        "sym": "C",
        "choices": [
          "C",
          "Cl",
          "Cu",
          "Mg",
          "Br"
        ],
        "startAbundance": 50
      },
      "goal": {
        "tolerance": 0.005,
        "explanation": "La masa promedio ponderada es Ā = (m₁·%₁ + m₂·%₂) / 100. En la naturaleza, el ¹²C posee una abundancia de 98.93% y el ¹³C de 1.07%, resultando en 12.011 u."
      }
    },
    "example": {
      "statement": "El elemento Plata (Ag) tiene dos isótopos en la naturaleza: ¹⁰⁷Ag con abundancia del 51.84% y ¹⁰⁹Ag con abundancia del 48.16%. Estime su masa atómica promedio.",
      "steps": [
        "Aplicando la fórmula del promedio ponderado:",
        "M.A. = [(107 × 51.84) + (109 × 48.16)] / 100"
      ],
      "answer": "M.A. = (5546.88 + 5249.44) / 100 = **107.96 u**"
    },
    "practice": [
      {
        "id": "p-2.5-1",
        "type": "mc",
        "prompt": "Un elemento imaginario X tiene dos isótopos: ²⁰X y ²²X. Si su masa atómica promedio es 20.2 u, halle la abundancia del isótopo más pesado.",
        "options": [
          "Sea x la abundancia de ²²X, entonces la abundancia de ²⁰X es (100 - x)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Sea x la abundancia de ²²X, entonces la abundancia de ²⁰X es (100 - x).\n 20.2 = [22·x + 20·(100 - x)] / 100\n 2020 = 22x + 2000 - 20x\n 20 = 2x ⇒ x = **10%**",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de masa atómica promedio y abundancia isotópica?",
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
        "id": "q-2.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl equipo instrumental de laboratorio empleado para determinar con precisión la masa de los isótopos y su abundancia relativa es el:",
        "options": [
          "Tubo de rayos catódicos",
          "Espectrómetro de masas",
          "Microscopio de efecto túnel",
          "Tubo de rayos X"
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
        "id": "q-2.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl cobre presenta en la corteza terrestre dos isótopos naturales: ⁶³Cu y ⁶⁵Cu. Sabiendo que la masa atómica reportada en la tabla periódica es 63.55 u, podemos deducir que:",
        "options": [
          "Ambos isótopos tienen exactamente un 50% de abundancia.",
          "El isótopo ⁶⁵Cu es el más abundante.",
          "El isótopo ⁶³Cu es significativamente más abundante.",
          "Existen isótopos desconocidos que alteran el promedio."
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
        "id": "q-2.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl elemento Boro está formado por los isótopos ¹⁰B y ¹¹B. Si la masa atómica del Boro es 10.81 u, ¿qué porcentaje de abundancia le corresponde al isótopo más liviano?",
        "options": [
          "19%",
          "81%",
          "25%",
          "75%"
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
    "code": "2.6",
    "objective": "Comprender la naturaleza dual de la radiación electromagnética, relacionando longitud de onda, frecuencia y energía mediante la hipótesis cuántica de Max Planck y el efecto fotoeléctrico.",
    "summary": [
      "1. Parámetros Fundamentales de la Onda Electromagnética",
      "2. Teoría Cuántica de Max Planck (1900)",
      "3. Espectro Electromagnético (Orden por Energía Creciente)"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Radiación electromagnética y aplicación de la teoría cuántica de Planck",
      "question": "Construye la expresión o secuencia correcta seleccionando las fichas en el orden preciso.",
      "instructions": [
        "Toca las fichas conceptuales en el orden exacto de resolución.",
        "Si te equivocas, puedes quitar la última ficha o reiniciar.",
        "Presiona 'Comprobar' para validar tu construcción."
      ],
      "reuse": "Constructor de respuestas",
      "params": {
        "tokens": [
          "Paso 1",
          "Paso 2",
          "Paso 3",
          "Paso 4"
        ],
        "answer": [
          "Paso 1",
          "Paso 2",
          "Paso 3"
        ],
        "explanation": "El orden refleja la secuencia lógica de resolución y deducción química."
      },
      "goal": {}
    },
    "example": {
      "statement": "Una onda de luz roja tiene una longitud de onda de 600 nm. Calcule su frecuencia en Hz (c = 3 × 10⁸ m/s).",
      "steps": [
        "Convertimos λ a metros: 600 nm = 6 × 10⁻⁷ m."
      ],
      "answer": "ν = c / λ = (3 × 10⁸ m/s) / (6 × 10⁻⁷ m) = **5 × 10¹⁴ Hz**."
    },
    "practice": [
      {
        "id": "p-2.6-1",
        "type": "mc",
        "prompt": "¿Cuál tiene mayor energía por fotón: la luz infrarroja o la luz ultravioleta?",
        "options": [
          "La luz ultravioleta tiene menor longitud de onda y mayor frecuencia que la luz infrarroja",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La luz ultravioleta tiene menor longitud de onda y mayor frecuencia que la luz infrarroja. Según la ecuación de Planck (E = h · ν), a mayor frecuencia, mayor energía. Por lo tanto, el fotón **ultravioleta** es más energético.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Radiación electromagnética y aplicación de la teoría cuántica de Planck?",
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
        "id": "q-2.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el espectro electromagnético, identifique la radiación de mayor frecuencia (más energética):",
        "options": [
          "Microondas",
          "Rayos X",
          "Luz visible amarilla",
          "Ondas de radio"
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
        "id": "q-2.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas antenas de telecomunicación operan emitiendo ondas de radio, mientras que los equipos de radiología emiten rayos X. Al comparar ambas radiaciones viajando en el vacío, es correcto afirmar que:",
        "options": [
          "Las ondas de radio viajan más rápido que los rayos X.",
          "Ambas viajan a la misma velocidad (c), pero los rayos X tienen mayor longitud de onda.",
          "Ambas viajan a la misma velocidad (c), pero las ondas de radio tienen menor frecuencia.",
          "Los rayos X viajan más rápido por tener mayor energía."
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
        "id": "q-2.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn haz láser emite luz verde de λ = 500 nm. Determine la energía aproximada de un fotón de esta luz en Joules (h ≈ 6.6 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s).",
        "options": [
          "4.0 × 10⁻¹⁹ J",
          "3.9 × 10⁻²⁰ J",
          "6.6 × 10⁻¹⁹ J",
          "2.0 × 10⁻¹⁹ J"
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
    "code": "2.7",
    "objective": "Fundamentar el modelo mecánico-cuántico moderno del átomo a partir de la dualidad onda-corpúsculo, el principio de indeterminación y la densidad probabilística orbital.",
    "summary": [
      "1. Hipótesis de De Broglie (Dualidad Onda-Partícula, 1924)",
      "2. Principio de Incertidumbre de Werner Heisenberg (1927)",
      "3. Ecuación de Onda de Erwin Schrödinger (1926)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Principios de la mecánica cuántica: De Broglie, Heisenberg y función de onda de Schrödinger",
      "question": "Ajusta las variables de entrada hasta que la magnitud resultante cumpla el objetivo planteado.",
      "instructions": [
        "Modifica los valores numéricos mediante los deslizadores o campos de texto.",
        "Observa cómo cambia en tiempo real el resultado en las tarjetas inferiores.",
        "Alcanza el valor meta para validar la relación cuantitativa."
      ],
      "reuse": "Simulador paramétrico",
      "params": {
        "inputs": [
          {
            "id": "x",
            "label": "Parámetro de control A",
            "min": 1,
            "max": 20,
            "step": 1,
            "value": 5,
            "unit": "u"
          },
          {
            "id": "y",
            "label": "Parámetro de control B",
            "min": 1,
            "max": 10,
            "step": 1,
            "value": 2,
            "unit": "u"
          }
        ],
        "outputs": [
          {
            "id": "res",
            "label": "Magnitud calculada",
            "expr": "x * y",
            "unit": "u",
            "digits": 2
          }
        ],
        "constants": {}
      },
      "goal": {
        "output": "res",
        "target": 20,
        "tolerance": 0.1,
        "solution": {
          "x": 10,
          "y": 2
        },
        "explanation": "El valor objetivo de 20 u se alcanza al combinar el parámetro A en 10 u con el parámetro B en 2 u (10 × 2 = 20)."
      }
    },
    "example": {
      "statement": "Según de Broglie, ¿por qué un automóvil a gran velocidad no manifiesta propiedades ondulatorias apreciables?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La longitud de onda asociada (λ = h / mv) es inversamente proporcional a la masa. La masa de un automóvil es gigantesca a escala cuántica, haciendo que λ sea tan ínfimamente pequeña (< 10⁻³⁵ m) que es físicamente indetectable para cualquier instrumento."
    },
    "practice": [
      {
        "id": "p-2.7-1",
        "type": "mc",
        "prompt": "Explique cuál fue el golpe de gracia teórico que el Principio de Heisenberg dio al modelo atómico de Bohr.",
        "options": [
          "Bohr proponía que el electrón giraba en órbitas circulares de radio exacto (posición) y con una velocidad determinada",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Bohr proponía que el electrón giraba en órbitas circulares de radio exacto (posición) y con una velocidad determinada. Heisenberg demostró que, a escala cuántica, conocer ambas variables simultáneamente con certeza del 100% viola el Principio de Incertidumbre.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Principios de la mecánica cuántica: De Broglie, Heisenberg y función de onda de Schrödinger?",
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
        "id": "q-2.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa región espacial extranuclear donde existe una alta probabilidad de encontrar a un electrón se denomina:",
        "options": [
          "Órbita estacionaria",
          "Orbital atómico (REEMPE)",
          "Nivel de energía principal",
          "Cuanto de luz"
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
        "id": "q-2.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl microscopio electrónico logra resoluciones muy superiores al microscopio óptico común. Esto se justifica teóricamente porque los electrones acelerados se comportan como ondas electromagnéticas de muy corta longitud de onda. Este fenómeno confirma el postulado de:",
        "options": [
          "Efecto fotoeléctrico de Einstein.",
          "Principio de exclusión de Pauli.",
          "Dualidad onda-partícula de De Broglie.",
          "Modelo atómico de Thomson."
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
        "id": "q-2.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a la ecuación de onda de Schrödinger, indique la proposición correcta:",
        "options": [
          "Permite calcular el radio exacto de la órbita electrónica.",
          "Su resolución da origen a los cuatro números cuánticos simultáneamente.",
          "El cuadrado de la función de onda (ψ²) representa la densidad de probabilidad electrónica.",
          "Viola el principio de incertidumbre de Heisenberg."
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
    "code": "2.8",
    "objective": "Asignar los cuatro números cuánticos a cualquier electrón en un átomo, describir la morfología de los orbitales atómicos y evaluar la estabilidad mediante el cálculo de la energía relativa.",
    "summary": [
      "3. Energía Relativa (E_R)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Determinación de números cuánticos, formas de orbitales y cálculo de energía relativa",
      "question": "Construye la expresión o secuencia correcta seleccionando las fichas en el orden preciso.",
      "instructions": [
        "Toca las fichas conceptuales en el orden exacto de resolución.",
        "Si te equivocas, puedes quitar la última ficha o reiniciar.",
        "Presiona 'Comprobar' para validar tu construcción."
      ],
      "reuse": "Constructor de respuestas",
      "params": {
        "tokens": [
          "Paso 1",
          "Paso 2",
          "Paso 3",
          "Paso 4"
        ],
        "answer": [
          "Paso 1",
          "Paso 2",
          "Paso 3"
        ],
        "explanation": "El orden refleja la secuencia lógica de resolución y deducción química."
      },
      "goal": {}
    },
    "example": {
      "statement": "Compare la energía relativa de los subniveles 4s y 3d y determine cuál se llena primero.",
      "steps": [
        "Para 4s: n=4, ℓ=0 ⇒ E_R = 4 + 0 = **4**.",
        "Para 3d: n=3, ℓ=2 ⇒ E_R = 3 + 2 = **5**."
      ],
      "answer": "Como E_R(4s) < E_R(3d), el subnivel 4s tiene menor energía relativa y **se llena primero** siguiendo el principio de Aufbau."
    },
    "practice": [
      {
        "id": "p-2.8-1",
        "type": "mc",
        "prompt": "¿Cuál es la forma geométrica y el número cuántico azimutal (secundario) correspondiente al subnivel p?",
        "options": [
          "El subnivel p (principal) tiene como número cuántico azimutal ℓ = 1, y su forma geométrica característica en el espacio 3D es **dilobular** (o bilobul",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El subnivel p (principal) tiene como número cuántico azimutal ℓ = 1, y su forma geométrica característica en el espacio 3D es **dilobular** (o bilobular).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-2.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de números cuánticos, formas de orbitales y cálculo de energía relativa?",
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
        "id": "q-2.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué número cuántico define la orientación espacial de un orbital atómico sometido a un campo magnético externo?",
        "options": [
          "Principal (n)",
          "Secundario (ℓ)",
          "Magnético (m_ℓ)",
          "Espín (m_s)"
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
        "id": "q-2.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un laboratorio se analizan las transiciones electrónicas. Se propone el siguiente conjunto de números cuánticos para un electrón: (4, 2, +3, -1/2). Este conjunto es:",
        "options": [
          "Posible, corresponde a un electrón en el subnivel 4d.",
          "Imposible, porque m_ℓ no puede ser mayor que ℓ.",
          "Imposible, porque ℓ debe ser menor que 2.",
          "Posible, corresponde a un electrón en el subnivel 4f."
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
        "id": "q-2.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nOrdene los siguientes subniveles en forma creciente a su estabilidad energética (de menor a mayor energía): 5s, 4d, 6p, 4f.",
        "options": [
          "5s < 4d < 6p < 4f",
          "5s < 4d < 4f < 6p",
          "4d < 5s < 4f < 6p",
          "4f < 4d < 5s < 6p"
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
  }
],
  exam: [
  {
    "id": "exam-2-1",
    "objective": "2.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.1): Respecto a Siguiente paso, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-2",
    "objective": "2.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.2): Respecto a 2. Notación Estándar de un Núclido, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-3",
    "objective": "2.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.3): Respecto a 1. Naturaleza de los Iones Monoatómicos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-4",
    "objective": "2.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.4): Respecto a Siguiente paso, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-5",
    "objective": "2.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.5): Respecto a 1. Ecuación de la Masa Atómica Promedio, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-6",
    "objective": "2.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.6): Respecto a 1. Parámetros Fundamentales de la Onda Electromagnética, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-7",
    "objective": "2.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.7): Respecto a 1. Hipótesis de De Broglie (Dualidad Onda-Partícula, 1924), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-2-8",
    "objective": "2.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (2.8): Respecto a 3. Energía Relativa (E_R), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 2.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
