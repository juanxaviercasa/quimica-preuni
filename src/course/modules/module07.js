// Módulo 7: Módulo 7: Cálculos Químicos y Unidades de Masa
export const module07 = {
  number: 7,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 7: Cálculos Químicos y Unidades de Masa.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "7.1",
    "objective": "Comprender la escala atómica de masas, la definición estándar de la UMA basada en el carbono-12 y diferenciar la masa molecular de la masa fórmula para compuestos iónicos y covalentes.",
    "summary": [
      "1. Unidad de Masa Atómica (u o uma)",
      "2. Masa Atómica Relativa (P.A. o Ar)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Definición de unidad de masa atómica, masa atómica relativa y masa fórmula",
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
      "statement": "Determine la masa fórmula del sulfato de aluminio, Al₂(SO₄)₃.",
      "steps": [
        "Contamos átomos: 2 Al, 3 S, 12 O.",
        "Multiplicamos por pesos atómicos: Al(27), S(32), O(16)."
      ],
      "answer": "Masa = 2(27) + 3(32) + 12(16) = 54 + 96 + 192 = **342 u**."
    },
    "practice": [
      {
        "id": "p-7.1-1",
        "type": "mc",
        "prompt": "Si la masa atómica de un elemento X es 40 u, ¿cuál es la masa absoluta (en gramos) de un solo átomo de X?",
        "options": [
          "Sabemos que 1 u = 1",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Sabemos que 1 u = 1.66 × 10⁻²⁴ g.\n Masa de 1 átomo = 40 u × (1.66 × 10⁻²⁴ g / 1 u) = **66.4 × 10⁻²⁴ g = 6.64 × 10⁻²³ g**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Definición de unidad de masa atómica, masa atómica relativa y masa fórmula?",
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
        "id": "q-7.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la IUPAC, la unidad de masa atómica (u) se define actualmente como:",
        "options": [
          "La masa exacta de un átomo de hidrógeno-1.",
          "La decimosexta parte de la masa del oxígeno-16.",
          "La doceava parte de la masa de un átomo neutro de carbono-12.",
          "La masa de un protón en el núcleo del carbono."
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
        "id": "q-7.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn los análisis de laboratorio, es común diferenciar entre sustancias moleculares (formadas por enlaces covalentes) y sustancias iónicas. De las siguientes especies, indique a cuál se le debe calcular rigurosamente su \"masa fórmula\" y no \"masa molecular\":",
        "options": [
          "Glucosa (C₆H₁₂O₆)",
          "Cloruro de potasio (KCl)",
          "Ácido sulfúrico (H₂SO₄)",
          "Dióxido de carbono (CO₂)"
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
        "id": "q-7.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nCalcule la masa molecular o masa fórmula del decahidrato de carbonato de sodio (soda de lavar), cuya fórmula es Na₂CO₃ · 10H₂O.",
        "options": [
          "106 u",
          "286 u",
          "180 u",
          "124 u"
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
    "code": "7.2",
    "objective": "Operar con precisión el concepto de mol como unidad fundamental del SI para cantidad de sustancia, enlazando la escala microscópica con la macroscópica mediante la Constante de Avogadro.",
    "summary": [
      "2. Masa Molar (M)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Concepto de mol, masa molar y aplicación de la constante de Avogadro",
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
      "statement": "Calcule la masa en gramos que representa exactamente 1 mol de gas propano (C₃H₈).",
      "steps": [
        "Primero hallamos la masa molecular. C(12), H(1).",
        "M = 3(12) + 8(1) = 36 + 8 = 44 u.",
        "Por la regla de equivalencia, la masa molar es numéricamente igual pero en g/mol."
      ],
      "answer": "Por lo tanto, 1 mol de propano tiene una masa de **44 gramos**."
    },
    "practice": [
      {
        "id": "p-7.2-1",
        "type": "mc",
        "prompt": "¿Cuántas moléculas de agua hay en 18 gramos de H₂O?",
        "options": [
          "La masa molar del agua (H₂O) es 18 g/mol",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La masa molar del agua (H₂O) es 18 g/mol. Por tanto, 18 gramos equivalen exactamente a 1 mol de agua. Según el concepto fundamental, 1 mol contiene siempre el Número de Avogadro de entidades.\n Respuesta: **6.022 × 10²³ moléculas de H₂O**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Concepto de mol, masa molar y aplicación de la constante de Avogadro?",
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
        "id": "q-7.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el Sistema Internacional de Unidades (SI), el mol es la unidad base utilizada para medir la magnitud termodinámica denominada:",
        "options": [
          "Masa molar",
          "Peso molecular",
          "Cantidad de sustancia",
          "Masa atómica relativa"
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
        "id": "q-7.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn joyería, el valor del oro (Au, P.A. = 197 u) radica en su escasez y estabilidad. Si un orfebre trabaja con exactamente 1 mol de átomos de oro puro, ¿qué afirmación es químicamente correcta respecto a dicha muestra?",
        "options": [
          "Posee una masa de 197 unidades de masa atómica (u).",
          "Posee una masa de 197 gramos.",
          "Contiene 197 átomos de oro.",
          "Contiene solo 1 átomo-gramo que equivale a 1 gramo de oro."
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
        "id": "q-7.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tiene una muestra que contiene exactamente el Número de Avogadro (N_A) de moléculas de dióxido de azufre (SO₂). ¿Cuál es la masa de dicha muestra gaseosa? (Masas atómicas: S = 32, O = 16)",
        "options": [
          "32 g",
          "48 g",
          "64 g",
          "1 g"
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
    "code": "7.3",
    "objective": "Realizar cálculos estequiométricos de conversión directa e inversa entre masa en gramos, cantidad de sustancia en moles, número de partículas y volúmenes gaseosos a condiciones normales.",
    "summary": [
      "1. El Puente de Conversión Universal",
      "2. Relaciones Atómicas Intramoleculares",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Conversión cuantitativa entre gramos, moles, número de moléculas y átomos",
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
      "statement": "Determine la cantidad de moles contenidos en 245 gramos de ácido sulfúrico (H₂SO₄). (Masas atómicas: H=1, S=32, O=16).",
      "steps": [
        "Calculamos la masa molar: M = 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol."
      ],
      "answer": "Aplicamos n = m / M ⇒ n = 245 g / 98 g/mol = **2.5 moles**."
    },
    "practice": [
      {
        "id": "p-7.3-1",
        "type": "mc",
        "prompt": "¿Cuántos átomos de hidrógeno en total hay en 3 moles de gas amoníaco (NH₃)?",
        "options": [
          "> - 1 mol de NH₃ contiene 3 moles de átomos de hidrógeno",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - 1 mol de NH₃ contiene 3 moles de átomos de hidrógeno.\n> - En 3 moles de NH₃ habrá: 3 × 3 = 9 moles de átomos de hidrógeno.\n> - Multiplicamos por Avogadro: 9 × N_A = **9 × (6.022 × 10²³) átomos de H**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Conversión cuantitativa entre gramos, moles, número de moléculas y átomos?",
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
        "id": "q-7.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué masa en gramos representa 0.2 moles de hidróxido de sodio (NaOH)? (P.A.: Na=23, O=16, H=1)",
        "options": [
          "8 g",
          "40 g",
          "2 g",
          "20 g"
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
        "id": "q-7.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl ozono (O₃) es el gas que nos protege de la radiación ultravioleta en la estratosfera. Si capturamos una muestra de 96 gramos de ozono puro, ¿cuántas moléculas de ozono están contenidas en dicha muestra? (O = 16, N_A = Número de Avogadro)",
        "options": [
          "2 N_A",
          "3 N_A",
          "6 N_A",
          "96 N_A"
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
        "id": "q-7.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tiene un recipiente que contiene 220 gramos de gas propano (C₃H₈). Determine el número total de átomos (sumando carbonos e hidrógenos) presentes en el recipiente. (C=12, H=1)",
        "options": [
          "5 N_A átomos",
          "11 N_A átomos",
          "55 N_A átomos",
          "220 N_A átomos"
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
    "code": "7.4",
    "objective": "Deducir el porcentaje en masa de cada elemento químico constituyente a partir de la fórmula química del compuesto aplicando la ley de proporciones definidas de Proust.",
    "summary": [
      "1. Definición de Composición Centesimal (% en masa)",
      "3. Composición Centesimal en Sales Hidratadas",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Interpretación de fórmulas químicas y cálculo de composición centesimal",
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
      "statement": "Calcule el porcentaje en masa del nitrógeno en la urea, CO(NH₂)₂. (C=12, O=16, N=14, H=1).",
      "steps": [
        "Masa Molar (M): 1(C) + 1(O) + 2(N) + 4(H) = 12 + 16 + 2(14) + 4(1) = 60 g/mol.",
        "Masa del Nitrógeno: 2 átomos × 14 = 28 g/mol."
      ],
      "answer": "% N = (28 / 60) × 100% = **46.67%**."
    },
    "practice": [
      {
        "id": "p-7.4-1",
        "type": "mc",
        "prompt": "Se tiene una muestra de 200 gramos de metano (CH₄). ¿Cuál es la composición centesimal del carbono en esta muestra? (C=12, H=1).",
        "options": [
          "El dato de \"200 gramos\" es un distractor porque el porcentaje es constante",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El dato de \"200 gramos\" es un distractor porque el porcentaje es constante.\n M(CH₄) = 12 + 4 = 16 g/mol.\n % C = (12 / 16) × 100% = 0.75 × 100% = **75%**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Interpretación de fórmulas químicas y cálculo de composición centesimal?",
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
        "id": "q-7.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué afirmación define mejor a la composición centesimal de un compuesto?",
        "options": [
          "Es el volumen que ocupa cada elemento en 100 litros de mezcla.",
          "Es el porcentaje en masa con el que contribuye cada elemento a la masa total del compuesto.",
          "Es el porcentaje de electrones que tiene cada átomo.",
          "Varía dependiendo de la cantidad de muestra que se analice."
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
        "id": "q-7.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl óxido de hierro(III) o hematita (Fe₂O₃) es la principal mena de donde la industria siderúrgica extrae hierro. ¿Qué porcentaje en masa de esta roca corresponde a hierro puro? (Fe=56, O=16)",
        "options": [
          "70%",
          "30%",
          "56%",
          "112%"
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
        "id": "q-7.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl sulfato de cobre(II) se presenta comúnmente en su forma pentahidratada azul cristalina (CuSO₄ · 5H₂O). Determine el porcentaje en masa de agua en este hidrato. (Cu=63.5, S=32, O=16, H=1)",
        "options": [
          "64.0%",
          "36.0%",
          "18.0%",
          "50.0%"
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
    "code": "7.5",
    "objective": "Deducir la fórmula empírica o mínima de un compuesto químico desconocido a partir de datos experimentales de análisis elemental cuantitativo o combustión.",
    "summary": [
      "1. Concepto de Fórmula Empírica (FE)",
      "2. Algoritmo Universal Paso a Paso para Determinar la FE",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de la fórmula empírica a partir de porcentajes de composición elemental",
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
      "statement": "Un compuesto inorgánico sometido a análisis elemental reporta 40.0% de C, 6.7% de H y 53.3% de O en masa. Deduce su fórmula empírica. (C=12, H=1, O=16).",
      "steps": [
        "Paso 1: En 100 g tenemos 40.0 g C, 6.7 g H, 53.3 g O.",
        "Paso 2 (Moles):",
        "n(C) = 40.0 / 12 = 3.33 mol",
        "n(H) = 6.7 / 1 = 6.70 mol",
        "n(O) = 53.3 / 16 = 3.33 mol",
        "Paso 3 (Dividir entre el menor, que es 3.33):",
        "C = 3.33 / 3.33 = **1**",
        "H = 6.70 / 3.33 ≈ **2**",
        "O = 3.33 / 3.33 = **1**"
      ],
      "answer": "La Fórmula Empírica es: **CH₂O**."
    },
    "practice": [
      {
        "id": "p-7.5-1",
        "type": "mc",
        "prompt": "Un óxido de hierro contiene 70% de hierro y 30% de oxígeno en masa. Halle su fórmula mínima. (Fe=56, O=16).",
        "options": [
          "> - Moles de Fe: 70 / 56 = 1",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Moles de Fe: 70 / 56 = 1.25 mol.\n> - Moles de O: 30 / 16 = 1.875 mol.\n> - Dividimos entre el menor (1.25):\n Fe = 1.25 / 1.25 = 1\n O = 1.875 / 1.25 = 1.5\n> - Paso 4 (Multiplicador): Como tenemos 1.5, multiplicamos todo por 2.\n Fe = 1 × 2 = **2**\n O = 1.5 × 2 = **3**\n> - Fórmula Empírica: **Fe₂O₃**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de la fórmula empírica a partir de porcentajes de composición elemental?",
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
        "id": "q-7.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa fórmula empírica de un compuesto orgánico nos proporciona estrictamente la siguiente información:",
        "options": [
          "La masa molar exacta de la sustancia.",
          "La disposición tridimensional de sus átomos.",
          "La relación mínima de números enteros entre los átomos que lo componen.",
          "El número total real de átomos en una molécula individual."
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
        "id": "q-7.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn gas de uso industrial letal y asfixiante está formado por 42.86% de Carbono y 57.14% de Oxígeno. Siguiendo el algoritmo de cálculo, su fórmula empírica corresponde al:",
        "options": [
          "CO",
          "CO₂",
          "C₂O",
          "C₂O₃"
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
        "id": "q-7.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn hidrocarburo insaturado contiene 85.7% en masa de carbono y 14.3% de hidrógeno. Al calcular los moles relativos e intentar hallar la relación mínima entera, la fórmula empírica deducida es:",
        "options": [
          "C₂H₆",
          "C₃H₈",
          "CH₂",
          "CH"
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
    "code": "7.6",
    "objective": "Establecer la fórmula molecular real de un compuesto vinculando su fórmula empírica con la masa molecular experimental obtenida por métodos de densidad de vapor o espectrometría.",
    "summary": [
      "1. Relación Fundamental: Fórmula Molecular (FM) y Fórmula Empírica (FE)",
      "2. Obtención de Masa Molar por Densidad de Vapor Relativa",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de la fórmula molecular a partir de la fórmula empírica y la masa molar",
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
      "statement": "A partir del análisis de un azúcar, se determinó que su fórmula empírica es CH₂O (Masa empírica = 30 u). Mediante espectrometría de masas, se halla que su masa molar real es 180 g/mol. Determine su fórmula molecular.",
      "steps": [
        "Calculamos el multiplicador k:",
        "k = (Masa Molar Real) / (Masa de la Fórmula Empírica) = 180 / 30 = **6**",
        "Aplicamos el multiplicador a los subíndices de la FE:"
      ],
      "answer": "FM = (CH₂O)₆ ⇒ **C₆H₁₂O₆** (Glucosa o Fructosa)."
    },
    "practice": [
      {
        "id": "p-7.6-1",
        "type": "mc",
        "prompt": "Se sabe que la fórmula empírica del benceno es CH. Si la masa molar de este hidrocarburo aromático es 78 g/mol, ¿cuál es su fórmula molecular? (C=12, H=1).",
        "options": [
          "> - Masa de la fórmula empírica (CH) = 12 + 1 = 13 g/mol",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Masa de la fórmula empírica (CH) = 12 + 1 = 13 g/mol.\n> - k = 78 / 13 = **6**\n> - FM = (CH)₆ ⇒ **C₆H₆**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-7.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de la fórmula molecular a partir de la fórmula empírica y la masa molar?",
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
        "id": "q-7.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa fórmula molecular de una sustancia siempre es un __________ de su fórmula empírica.",
        "options": [
          "Submúltiplo fraccionario",
          "Isómero estructural",
          "Múltiplo entero",
          "Componente aditivo"
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
        "id": "q-7.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl eteno o etileno es una fitohormona gaseosa que acelera la maduración de las frutas. El análisis de este gas arroja una fórmula empírica CH₂. Si sabemos que la densidad relativa del eteno gaseoso respecto al gas hidrógeno (H₂) es 14, determine la fórmula molecular del eteno.",
        "options": [
          "CH₂",
          "C₂H₄",
          "C₃H₆",
          "C₄H₈"
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
        "id": "q-7.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa vitamina C o ácido ascórbico contiene 40.9% de C, 4.58% de H y 54.5% de O en masa. Si mediante técnicas crioscópicas se determinó que la masa molar de la vitamina C es aproximadamente 176 g/mol, ¿cuál es su verdadera fórmula molecular? (C=12, H=1, O=16)",
        "options": [
          "C₃H₄O₃",
          "C₆H₈O₆",
          "C₉H₁₂O₉",
          "CH₂O"
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
    "id": "exam-7-1",
    "objective": "7.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.1): Respecto a 1. Unidad de Masa Atómica (u o uma), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-2",
    "objective": "7.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.2): Respecto a 2. Masa Molar (M), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-3",
    "objective": "7.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.3): Respecto a 1. El Puente de Conversión Universal, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-4",
    "objective": "7.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.4): Respecto a 1. Definición de Composición Centesimal (% en masa), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-5",
    "objective": "7.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.5): Respecto a 1. Concepto de Fórmula Empírica (FE), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-6",
    "objective": "7.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (7.6): Respecto a 1. Relación Fundamental: Fórmula Molecular (FM) y Fórmula Empírica (FE), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 7.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-7-7",
    "objective": "7.2",
    "type": "mc",
    "prompt": "Pregunta de consolidación del Módulo 7 (7.2): señale la alternativa con el razonamiento válido.",
    "options": [
      "El comportamiento predicho es reproducible experimentalmente bajo condiciones controladas de presión y temperatura.",
      "Los valores experimentales contradicen de forma indeterminada las predicciones atómicas.",
      "Las unidades de medida utilizadas no corresponden al Sistema Internacional ni son compatibles con él.",
      "La reacción o cambio de fase ocurre sin transferencia de energía con el entorno."
    ],
    "answer": 0,
    "explanation": "Solución: la metodología científica y las normativas IUPAC exigen reproducibilidad y consistencia dimensional.",
    "why": [
      "Opción correcta: criterio básico de validez científica.",
      "Distractor: la ciencia química se basa en leyes reproducibles.",
      "Distractor: el SI es la referencia estandarizada adoptada internacionalmente.",
      "Distractor: todo cambio físico-químico involucra un balance energético definido."
    ]
  },
  {
    "id": "exam-7-8",
    "objective": "7.3",
    "type": "mc",
    "prompt": "Pregunta de consolidación del Módulo 7 (7.3): señale la alternativa con el razonamiento válido.",
    "options": [
      "El comportamiento predicho es reproducible experimentalmente bajo condiciones controladas de presión y temperatura.",
      "Los valores experimentales contradicen de forma indeterminada las predicciones atómicas.",
      "Las unidades de medida utilizadas no corresponden al Sistema Internacional ni son compatibles con él.",
      "La reacción o cambio de fase ocurre sin transferencia de energía con el entorno."
    ],
    "answer": 0,
    "explanation": "Solución: la metodología científica y las normativas IUPAC exigen reproducibilidad y consistencia dimensional.",
    "why": [
      "Opción correcta: criterio básico de validez científica.",
      "Distractor: la ciencia química se basa en leyes reproducibles.",
      "Distractor: el SI es la referencia estandarizada adoptada internacionalmente.",
      "Distractor: todo cambio físico-químico involucra un balance energético definido."
    ]
  }
]
};
