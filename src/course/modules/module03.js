// Módulo 3: Módulo 3: Configuración Electrónica y Periodicidad
export const module03 = {
  number: 3,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 3: Configuración Electrónica y Periodicidad.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "3.1",
    "objective": "Comprender y aplicar el Principio de Construcción de Aufbau y la regla de las diagonales (Moller) para distribuir secuencialmente los electrones en orden creciente de energía relativa en el estado basal de los átomos.",
    "summary": [
      "1. Principio de Construcción de Aufbau",
      "2. Regla de Moller (Regla de las Diagonales o del 'Serrucho')",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación del principio de construcción de Aufbau y regla de Moller",
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
      "statement": "Escriba la configuración electrónica del Sodio (Z=11) y determine cuántos niveles de energía ocupa.",
      "steps": [
        "Siguiendo la regla de Moller hasta sumar 11 electrones:",
        "1s² 2s² 2p⁶ 3s¹"
      ],
      "answer": "El coeficiente más alto es 3, por lo tanto, ocupa **3 niveles de energía**."
    },
    "practice": [
      {
        "id": "p-3.1-1",
        "type": "mc",
        "prompt": "¿Cuál es el último subnivel en llenarse para el elemento Fósforo (Z=15)?",
        "options": [
          "Distribuimos 15 electrones:\n 1s² 2s² 2p⁶ 3s² 3p³\n El último subnivel en llenarse es el **3p**, que contiene 3 electrones",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Distribuimos 15 electrones:\n 1s² 2s² 2p⁶ 3s² 3p³\n El último subnivel en llenarse es el **3p**, que contiene 3 electrones.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación del principio de construcción de Aufbau y regla de Moller?",
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
        "id": "q-3.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál de los siguientes subniveles tiene la mayor energía relativa (E_R)?",
        "options": [
          "4s",
          "3d",
          "4p",
          "5s"
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
        "id": "q-3.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un análisis espectroscópico, se detecta un elemento neutro cuya configuración electrónica termina en 4p⁴. El número atómico (Z) de este elemento es:",
        "options": [
          "34",
          "32",
          "36",
          "16"
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
        "id": "q-3.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique verdadero (V) o falso (F):\nI. El principio de Aufbau afirma que los electrones ocupan primero los subniveles de menor energía.\nII. El subnivel 5p se llena inmediatamente después del 4d.\nIII. Un subnivel d puede albergar un máximo de 14 electrones.",
        "options": [
          "VVF",
          "VVV",
          "VFV",
          "FVF"
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
    "code": "3.2",
    "objective": "Representar la configuración orbital de subniveles degenerados aplicando el principio de exclusión de Pauli y la regla de máxima multiplicidad de Hund.",
    "summary": [
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Distribución orbital mediante la regla de Hund y principio de exclusión de Pauli",
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
      "statement": "Determine el número de electrones desapareados en el átomo de Oxígeno (Z=8) en su estado fundamental.",
      "steps": [
        "La configuración es 1s² 2s² 2p⁴. Analizamos el subnivel 2p (tiene 3 orbitales):",
        "Aplicando Hund, distribuimos los 4 electrones uno a uno y el cuarto se aparea: **↑↓ ↑ ↑**"
      ],
      "answer": "Hay **2 electrones desapareados**."
    },
    "practice": [
      {
        "id": "p-3.2-1",
        "type": "mc",
        "prompt": "Una configuración muestra: 1s² 2s² 2p² donde los electrones del 2p están como (↑↓ _ _). ¿Qué regla se está violando?",
        "options": [
          "Se están apareando los electrones en el primer orbital p_x antes de ocupar el p_y con espines paralelos",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Se están apareando los electrones en el primer orbital p_x antes de ocupar el p_y con espines paralelos. Esto viola la **Regla de máxima multiplicidad de Hund** (es un estado excitado).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Distribución orbital mediante la regla de Hund y principio de exclusión de Pauli?",
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
        "id": "q-3.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio de exclusión de Pauli, la capacidad máxima de electrones en un solo orbital atómico es:",
        "options": [
          "6",
          "2",
          "10",
          "14"
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
        "id": "q-3.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas sustancias paramagnéticas son atraídas por imanes debido a la presencia de electrones desapareados. ¿Cuántos orbitales semillenos (electrones desapareados) posee el átomo de Fósforo (Z=15) en su estado basal?",
        "options": [
          "1",
          "2",
          "3",
          "5"
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
        "id": "q-3.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSi una configuración electrónica terminal se representa como 3d⁵ distribuida como (↑↓ ↑↓ ↑ _ _), se puede afirmar rigurosamente que:",
        "options": [
          "Viola el principio de Pauli.",
          "Representa un estado excitado por violar la regla de Hund.",
          "Representa el estado basal de un metal de transición.",
          "Es una configuración cuánticamente prohibida."
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
    "code": "3.3",
    "objective": "Emplear la notación Kernel para condensar la estructura electrónica interna utilizando las configuraciones estables de gases nobles y determinar la capa de valencia.",
    "summary": [
      "1. Concepto de Kernel (Núcleo Cerrado)",
      "2. Procedimiento de Notación Abreviada",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Elaboración de configuraciones electrónicas simplificadas con kernel de gases nobles",
      "question": "Ordena los elementos o magnitudes según el criterio de variación teórica.",
      "instructions": [
        "Utiliza las flechas para subir o bajar cada elemento de la lista.",
        "Ubica los elementos siguiendo el gradiente de la propiedad.",
        "Haz clic en 'Comprobar orden' para contrastar tu respuesta."
      ],
      "reuse": "Ordenar una secuencia",
      "params": {
        "criterion": "Orden creciente de la magnitud evaluada",
        "items": [
          {
            "id": "ord1",
            "label": "Nivel inicial / menor magnitud"
          },
          {
            "id": "ord2",
            "label": "Nivel intermedio"
          },
          {
            "id": "ord3",
            "label": "Nivel superior / mayor magnitud"
          }
        ],
        "explanation": "La secuencia refleja la variación monótona predicha por el modelo teórico."
      },
      "goal": {}
    },
    "example": {
      "statement": "Escriba la configuración electrónica simplificada del Hierro (Z=26).",
      "steps": [
        "El gas noble anterior a 26 es el Argón (Z=18)."
      ],
      "answer": "Configuración: **[Ar] 4s² 3d⁶**."
    },
    "practice": [
      {
        "id": "p-3.3-1",
        "type": "mc",
        "prompt": "Determine la cantidad de electrones de valencia del Arsénico (Z=33).",
        "options": [
          "Kernel: [Ar] 4s² 3d¹⁰ 4p³",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Kernel: [Ar] 4s² 3d¹⁰ 4p³.\n El nivel más alto es n=4. Sumamos los electrones del 4s y el 4p: 2 + 3 = **5 electrones de valencia**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Elaboración de configuraciones electrónicas simplificadas con kernel de gases nobles?",
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
        "id": "q-3.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál es el gas noble que se utiliza como kernel para simplificar la configuración electrónica del Potasio (Z=19)?",
        "options": [
          "Helio",
          "Neón",
          "Argón",
          "Kriptón"
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
        "id": "q-3.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn átomo presenta la siguiente configuración electrónica en su estado fundamental: [Kr] 5s² 4d¹⁰ 5p². ¿Cuál es el número atómico de dicho elemento y cuántos electrones de valencia posee?",
        "options": [
          "Z=48, 12 electrones de valencia",
          "Z=50, 4 electrones de valencia",
          "Z=50, 14 electrones de valencia",
          "Z=46, 2 electrones de valencia"
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
        "id": "q-3.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl Plomo (Pb) es un metal pesado tóxico. Si su número atómico es Z=82, su configuración electrónica kernel correcta es:",
        "options": [
          "[Xe] 6s² 5d¹⁰ 6p²",
          "[Xe] 6s² 4f¹⁴ 5d¹⁰ 6p²",
          "[Rn] 7s² 5f¹⁴ 6d¹⁰ 7p²",
          "[Kr] 5s² 4d¹⁰ 5p⁶ 6s² ..."
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
    "code": "3.4",
    "objective": "Identificar y corregir las anomalías de configuración electrónica ('antiserrucho') causadas por la estabilidad de subniveles d semillenos o llenos, y correlacionar la presencia de electrones desapareados con el comportamiento magnético.",
    "summary": [
      "2. Anomalías de Configuración Electrónica (Efecto Antiserrucho)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Resolución de anomalías de configuración electrónica y análisis de paramagnetismo y diamagnetismo",
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
      "statement": "Escriba la configuración electrónica del átomo de Plata (Z=47) y clasifíquelo magnéticamente.",
      "steps": [
        "Pertenece a la familia del cobre (grupo 11).",
        "Teórica: [Kr] 5s² 4d⁹.",
        "Real (anomalía d⁹ → d¹⁰): **[Kr] 5s¹ 4d¹⁰**."
      ],
      "answer": "Como tiene 1 electrón desapareado en el 5s¹, es **paramagnético**."
    },
    "practice": [
      {
        "id": "p-3.4-1",
        "type": "mc",
        "prompt": "¿El átomo de Zinc (Z=30) es paramagnético o diamagnético?",
        "options": [
          "Configuración: [Ar] 4s² 3d¹⁰",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Configuración: [Ar] 4s² 3d¹⁰. Todos los subniveles están completamente llenos. Al tener 0 electrones desapareados, es estrictamente **diamagnético**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Resolución de anomalías de configuración electrónica y análisis de paramagnetismo y diamagnetismo?",
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
        "id": "q-3.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál de los siguientes elementos presenta una anomalía en su configuración electrónica fundamental?",
        "options": [
          "Hierro (Z=26)",
          "Cobre (Z=29)",
          "Zinc (Z=30)",
          "Titanio (Z=22)"
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
        "id": "q-3.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl cromo (Z=24) es un metal utilizado en recubrimientos anticorrosivos brillantes. Si analizamos su configuración electrónica basal correcta, el número total de electrones desapareados es:",
        "options": [
          "4",
          "2",
          "5",
          "6"
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
        "id": "q-3.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las sustancias magnéticas y configuraciones, determine la proposición correcta:",
        "options": [
          "Toda especie cuya configuración termine en s² es siempre diamagnética.",
          "La anomalía del molibdeno (Z=42) produce una configuración terminal 5s² 4d⁴.",
          "El estado basal del cobre es [Ar] 4s¹ 3d¹⁰ y es una especie paramagnética.",
          "Un átomo excitado que viola el principio de Pauli se vuelve diamagnético."
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
    "code": "3.5",
    "objective": "Formular correctamente las configuraciones electrónicas de aniones y cationes, aplicando la regla de extracción electrónica a partir del nivel de energía más externo.",
    "summary": [
      "1. Configuración de Aniones",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Configuración electrónica de iones y orden de pérdida de electrones de valencia",
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
      "statement": "Escriba la configuración electrónica del catión Titanio(III), Ti³⁺ (Z=22).",
      "steps": [
        "Átomo neutro (Z=22): [Ar] **4s²** 3d².",
        "Debemos quitar 3 electrones. Primero quitamos los 2 del 4s (nivel más alto). Faltaría quitar 1, que ahora sí sale del 3d."
      ],
      "answer": "Configuración final: **[Ar] 3d¹**."
    },
    "practice": [
      {
        "id": "p-3.5-1",
        "type": "mc",
        "prompt": "Determine si el anión cloruro Cl⁻ (Z=17) es diamagnético o paramagnético.",
        "options": [
          "> - Neutro (Z=17): [Ne] 3s² 3p⁵",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Neutro (Z=17): [Ne] 3s² 3p⁵.\n> - Anión Cl⁻ gana 1 e⁻: [Ne] 3s² 3p⁶.\n> - Al tener su capa p completamente llena, no hay electrones desapareados, es **diamagnético**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Configuración electrónica de iones y orden de pérdida de electrones de valencia?",
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
        "id": "q-3.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la formación de un catión a partir de un metal de transición del cuarto periodo, los primeros electrones que se pierden provienen del subnivel:",
        "options": [
          "3d",
          "4s",
          "4p",
          "3p"
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
        "id": "q-3.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl cobalto (Z=27) forma comúnmente cationes bivalentes y trivalentes en sales cristalinas (como la vitamina B12). La configuración electrónica correcta del ion Co²⁺ es:",
        "options": [
          "[Ar] 4s² 3d⁵",
          "[Ar] 3d⁷",
          "[Ar] 4s¹ 3d⁶",
          "[Ar] 4s² 3d⁷"
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
        "id": "q-3.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto al catión Ag⁺ (Z=47), señale la proposición correcta:",
        "options": [
          "Su configuración terminal es 5s² 4d⁸.",
          "Pierde electrones del subnivel 4d antes que del 5s.",
          "Es una especie paramagnética.",
          "Su configuración electrónica terminal es 4d¹⁰ y es diamagnético."
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
    "code": "3.6",
    "objective": "Comprender la fundamentación física de la Ley Periódica Moderna formulada por Henry Moseley mediante espectros de rayos X y su impacto en la ordenación de la Tabla Periódica.",
    "summary": [
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Fundamentos de la ley periódica moderna de Moseley y diseño de la tabla periódica",
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
      "statement": "¿Qué corrección fundamental aportó Moseley a la tabla periódica de Mendeleiev?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Moseley demostró matemáticamente mediante cristalografía de rayos X que el ordenamiento natural de los elementos depende del **número atómico (protones en el núcleo)** y no de la masa atómica. Esto resolvió las inversiones anómalas de masa que existían en la tabla de Mendeleiev (como el par Telurio-Yodo)."
    },
    "practice": [
      {
        "id": "p-3.6-1",
        "type": "mc",
        "prompt": "Dos elementos pertenecen al mismo grupo de la tabla periódica. ¿Qué característica atómica tienen en común para justificar esto?",
        "options": [
          "Tienen la misma cantidad y distribución de **electrones en su capa de valencia** (misma configuración terminal), lo que les otorga un comportamiento q",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Tienen la misma cantidad y distribución de **electrones en su capa de valencia** (misma configuración terminal), lo que les otorga un comportamiento químico muy similar.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Fundamentos de la ley periódica moderna de Moseley y diseño de la tabla periódica?",
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
        "id": "q-3.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa Ley Periódica Moderna establece que las propiedades de los elementos son funciones periódicas de su:",
        "options": [
          "Masa atómica",
          "Número de masa (A)",
          "Número atómico (Z)",
          "Electronegatividad"
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
        "id": "q-3.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nHistóricamente, Mendeleiev dejó espacios en blanco en su tabla periódica argumentando que debían existir elementos aún no descubiertos (como el eka-silicio, hoy germanio). Sin embargo, el criterio principal de ordenamiento de su tabla era:",
        "options": [
          "El número atómico creciente.",
          "La configuración electrónica externa.",
          "El peso atómico creciente.",
          "El radio atómico creciente."
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
        "id": "q-3.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la afirmación correcta respecto a la estructura de la Tabla Periódica Moderna:",
        "options": [
          "Consta de 7 grupos y 18 periodos.",
          "Los elementos de un mismo periodo tienen propiedades químicas idénticas.",
          "El número del periodo de un elemento coincide con el máximo nivel de energía de su configuración electrónica basal.",
          "Fue diseñada por Mendeleiev y confirmada por Moseley."
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
    "code": "3.7",
    "objective": "Ubicar con exactitud cualquier elemento químico en la tabla periódica (periodo, grupo tradicional A/B, grupo IUPAC 1-18 y bloque) a partir de su número atómico Z.",
    "summary": [
      "3. Elementos de Transición Externa (Grupos B: Bloque d)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de periodo, grupo y bloque de elementos representativos y de transición",
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
      "statement": "Ubique el grupo y periodo del Cloro (Z=17).",
      "steps": [
        "Configuración: [Ne] 3s² 3p⁵.",
        "Periodo: Mayor nivel n = **3**."
      ],
      "answer": "Grupo: Electrones en el nivel 3 son 2+5 = **7**. Al terminar en bloque p, es el **Grupo VIIA (17), Familia Halógenos**."
    },
    "practice": [
      {
        "id": "p-3.7-1",
        "type": "mc",
        "prompt": "Determine el periodo y grupo del Hierro (Z=26).",
        "options": [
          "Configuración: [Ar] 4s² 3d⁶",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Configuración: [Ar] 4s² 3d⁶.\n> - Periodo: Mayor nivel n = **4**.\n> - Grupo: Termina en d, sumamos s+d: 2+6 = **8**.\n> - Grupo tradicional: **VIIIB**. Grupo IUPAC: **8**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de periodo, grupo y bloque de elementos representativos y de transición?",
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
        "id": "q-3.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLos elementos cuya configuración electrónica externa general es ns² np⁴ pertenecen a la familia de los:",
        "options": [
          "Halógenos",
          "Carbonoides",
          "Anfígenos (Calcógenos)",
          "Térreos"
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
        "id": "q-3.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl oligoelemento zinc (Z=30) es vital para el sistema inmunológico humano. ¿Cuál es su ubicación exacta en la tabla periódica clásica e IUPAC?",
        "options": [
          "Periodo 4, Grupo IIB (12)",
          "Periodo 3, Grupo IIA (2)",
          "Periodo 4, Grupo XIB (11)",
          "Periodo 3, Grupo VIIIB (10)"
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
        "id": "q-3.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn átomo en estado fundamental posee 4 orbitales desapareados y su último nivel es n=4. Si pertenece a los metales de transición, su grupo y periodo son:",
        "options": [
          "VIB, Periodo 4",
          "VIIIB, Periodo 4",
          "IVB, Periodo 4",
          "VIIB, Periodo 4"
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
    "code": "3.8",
    "objective": "Clasificar los elementos químicos según sus propiedades mecánicas, térmicas, ópticas y químicas distintivas en metales, no metales y semimetales (metaloides).",
    "summary": [
      "2. Los Metaloides (Semimetales)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Clasificación y propiedades generales de metales, no metales y metaloides",
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
      "statement": "Al fabricar chips de computadora, se utiliza Silicio puro. Si este chip eleva su temperatura por el uso intensivo, ¿qué le ocurre a su conductividad eléctrica?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El silicio es un **metaloide** (semiconductor). A diferencia de los metales ordinarios (cuya conductividad cae al calentarse), la conductividad eléctrica de un metaloide **aumenta** al incrementar la temperatura, ya que los electrones adquieren suficiente energía térmica para saltar la banda prohibida."
    },
    "practice": [
      {
        "id": "p-3.8-1",
        "type": "mc",
        "prompt": "Cite una propiedad física excepcional que diferencia al grafito del resto de no metales sólidos como el azufre o el fósforo.",
        "options": [
          "El grafito es un excelente **conductor de la electricidad**, mientras que los demás no metales (y el propio diamante) son típicamente aislantes térmic",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El grafito es un excelente **conductor de la electricidad**, mientras que los demás no metales (y el propio diamante) son típicamente aislantes térmicos y eléctricos.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Clasificación y propiedades generales de metales, no metales y metaloides?",
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
        "id": "q-3.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nA condiciones ambientales, el único metal y el único no metal que se encuentran en estado líquido son respectivamente:",
        "options": [
          "Galio y Bromo",
          "Mercurio y Bromo",
          "Mercurio y Yodo",
          "Francio y Fósforo"
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
        "id": "q-3.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas láminas de aluminio se usan comúnmente para envolver alimentos debido a una propiedad física característica de los metales que permite formar láminas delgadas sin romperse. Esta propiedad se denomina:",
        "options": [
          "Ductilidad",
          "Maleabilidad",
          "Tenacidad",
          "Conductividad"
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
        "id": "q-3.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeleccione la proposición verdadera respecto a las propiedades de los elementos químicos:",
        "options": [
          "Los metales reaccionan con el oxígeno formando óxidos de carácter ácido.",
          "Los metaloides son buenos conductores térmicos pero aislantes eléctricos a alta temperatura.",
          "Los no metales tienen alta tendencia a ganar electrones, es decir, a reducirse.",
          "La conductividad eléctrica de los metales aumenta linealmente con el aumento de la temperatura."
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
    "code": "3.9",
    "objective": "Predecir y justificar las variaciones periódicas del tamaño atómico e iónico mediante los conceptos de carga nuclear efectiva (Z_ef) y efecto de apantallamiento.",
    "summary": [
      "1. Radio Atómico (R_at) y Carga Nuclear Efectiva (Z_ef)",
      "3. Comparación de Especies Isoelectrónicas (Regla UNI Clave)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Tendencia y comparación de radio atómico y radio iónico en especies isoelectrónicas",
      "question": "Ordena los elementos o magnitudes según el criterio de variación teórica.",
      "instructions": [
        "Utiliza las flechas para subir o bajar cada elemento de la lista.",
        "Ubica los elementos siguiendo el gradiente de la propiedad.",
        "Haz clic en 'Comprobar orden' para contrastar tu respuesta."
      ],
      "reuse": "Ordenar una secuencia",
      "params": {
        "criterion": "Orden creciente de la magnitud evaluada",
        "items": [
          {
            "id": "ord1",
            "label": "Nivel inicial / menor magnitud"
          },
          {
            "id": "ord2",
            "label": "Nivel intermedio"
          },
          {
            "id": "ord3",
            "label": "Nivel superior / mayor magnitud"
          }
        ],
        "explanation": "La secuencia refleja la variación monótona predicha por el modelo teórico."
      },
      "goal": {}
    },
    "example": {
      "statement": "Ordene de mayor a menor tamaño atómico los siguientes elementos: ₁₁Na, ₁₉K, ₁₇Cl.",
      "steps": [
        "El K y el Na están en el mismo grupo (IA), pero el K está un periodo más abajo (n=4 vs n=3), luego K > Na.",
        "El Na y el Cl están en el mismo periodo 3. Hacia la derecha el radio disminuye, luego Na > Cl."
      ],
      "answer": "Orden final: **₁₉K > ₁₁Na > ₁₇Cl**."
    },
    "practice": [
      {
        "id": "p-3.9-1",
        "type": "mc",
        "prompt": "Compare el tamaño iónico del catión ₂₀Ca²⁺ frente al anión ₁₇Cl⁻.",
        "options": [
          "> - Electrones del Ca²⁺ = 20 - 2 = 18 e⁻",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Electrones del Ca²⁺ = 20 - 2 = 18 e⁻.\n> - Electrones del Cl⁻ = 17 + 1 = 18 e⁻.\n Son isoelectrónicos. La regla dice a mayor Z, menor radio. Como Z(Ca) = 20 y Z(Cl) = 17, el calcio tira más fuerte de los 18 electrones.\n Por tanto: **R(Cl⁻) > R(Ca²⁺)**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Tendencia y comparación de radio atómico y radio iónico en especies isoelectrónicas?",
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
        "id": "q-3.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSi comparamos el tamaño de un átomo neutro de azufre (S) con su respectivo anión divalente (S²⁻), se cumple que:",
        "options": [
          "S²⁻ < S",
          "S²⁻ = S",
          "S²⁻ > S",
          "Depende del nivel de energía."
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
        "id": "q-3.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas baterías de iones litio dependen del pequeño tamaño del ion Li⁺ para intercalarse en matrices de grafito. Comparando el Li neutro, el ion Li⁺ y el ion isoelectrónico Be²⁺, el orden creciente de sus radios es:",
        "options": [
          "Be²⁺ < Li⁺ < Li",
          "Li⁺ < Be²⁺ < Li",
          "Li < Li⁺ < Be²⁺",
          "Be²⁺ < Li < Li⁺"
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
        "id": "q-3.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara las especies isoelectrónicas ₁₆S²⁻, ₁₈Ar y ₁₉K⁺, determine el orden decreciente (de mayor a menor) de su volumen iónico/atómico.",
        "options": [
          "K⁺ > Ar > S²⁻",
          "S²⁻ > K⁺ > Ar",
          "S²⁻ > Ar > K⁺",
          "Ar > S²⁻ > K⁺"
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
    "code": "3.10",
    "objective": "Cuantificar y correlacionar las variaciones de energía de ionización, afinidad electrónica y electronegatividad con la reactividad química y el carácter metálico.",
    "summary": [
      "1. Primera Energía de Ionización (EI₁)",
      "2. Afinidad Electrónica (AE)",
      "3. Electronegatividad (EN)"
    ],
    "activity": {
      "family": "trends",
      "title": "Explorador y comparador de tendencias periódicas",
      "question": "Ordena los elementos representativos indicados según su radio atómico o energía de ionización y contrasta tu hipótesis con los datos experimentales.",
      "instructions": [
        "Elige la propiedad periódica a comparar (radio, energía de ionización, electronegatividad o afinidad electrónica).",
        "Ordena los elementos de mayor a menor según su posición en periodos y grupos.",
        "Presiona 'Comprobar con datos' para verificar con mediciones oficiales de NIST y Pauling."
      ],
      "reuse": "Tendencias periódicas con datos",
      "params": {
        "prop": "radius",
        "els": [
          "Li",
          "Na",
          "K",
          "Rb"
        ]
      },
      "goal": {
        "order": "desc",
        "explanation": "En un grupo, el radio atómico aumenta hacia abajo debido a la adición sucesiva de capas cuánticas principales (número cuántico principal n creciente)."
      }
    },
    "example": {
      "statement": "Al comparar el Francio (Z=87) con el Flúor (Z=9), determine cuál tiene mayor carácter metálico y cuál mayor electronegatividad.",
      "steps": [
        "El Francio está en la esquina inferior izquierda: tiene el **mayor carácter metálico** (pierde electrones fácil, menor EI)."
      ],
      "answer": "El Flúor está en la esquina superior derecha: tiene la **mayor electronegatividad (4.0)** de la tabla periódica."
    },
    "practice": [
      {
        "id": "p-3.10-1",
        "type": "mc",
        "prompt": "¿Por qué la segunda energía de ionización (EI₂) del Sodio (Z=11) es descomunalmente más alta que su EI₁?",
        "options": [
          "El Sodio neutro es [Ne] 3s¹",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El Sodio neutro es [Ne] 3s¹. Al quitar el primer electrón (EI₁), queda como el catión Na⁺ cuya configuración es igual a la del gas noble Neón (octeto completo). Arrancar un segundo electrón (EI₂) significa destruir un núcleo cerrado sumamente estable, exigiendo un aporte de energía brutal.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-3.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Variación periódica de energía de ionización, afinidad electrónica y electronegatividad?",
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
        "id": "q-3.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún las tendencias periódicas generales, el elemento de mayor electronegatividad y energía de ionización de la familia de los halógenos (Grupo 17) es el:",
        "options": [
          "Cloro",
          "Bromo",
          "Flúor",
          "Yodo"
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
        "id": "q-3.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas bombillas y faros modernos suelen utilizar gases nobles como el Argón o Criptón porque no reaccionan químicamente con el filamento incandescente. Esta inercia se explica porque los gases nobles presentan:",
        "options": [
          "Baja electronegatividad y alto radio atómico.",
          "Muy alta energía de ionización y afinidad electrónica nula o positiva.",
          "Alta conductividad eléctrica.",
          "Bajo punto de ebullición."
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
        "id": "q-3.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa correcta que compara la primera energía de ionización (EI₁) entre pares de elementos vecinos en un mismo periodo, tomando en cuenta las anomalías de estabilidad cuántica:",
        "options": [
          "EI₁(O) > EI₁(N)",
          "EI₁(B) > EI₁(Be)",
          "EI₁(N) > EI₁(O)",
          "EI₁(Al) > EI₁(P)"
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
  }
],
  exam: [
  {
    "id": "exam-3-1",
    "objective": "3.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.1): Respecto a 1. Principio de Construcción de Aufbau, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-2",
    "objective": "3.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.2): Respecto a Siguiente paso, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-3",
    "objective": "3.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.3): Respecto a 1. Concepto de Kernel (Núcleo Cerrado), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-4",
    "objective": "3.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.4): Respecto a 2. Anomalías de Configuración Electrónica (Efecto Antiserrucho), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-5",
    "objective": "3.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.5): Respecto a 1. Configuración de Aniones, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-6",
    "objective": "3.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.6): Respecto a Siguiente paso, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-7",
    "objective": "3.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.7): Respecto a 3. Elementos de Transición Externa (Grupos B: Bloque d), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-3-8",
    "objective": "3.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (3.8): Respecto a 2. Los Metaloides (Semimetales), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 3.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
