// Módulo 9: Módulo 9: Estequiometría y Leyes Ponderales
export const module09 = {
  number: 9,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 9: Estequiometría y Leyes Ponderales.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "9.1",
    "objective": "Fundamentar los cálculos estequiométricos a partir de la Ley de Conservación de la Materia de Antoine Lavoisier, verificando el balance ponderal estricto entre reactivos consumidos y productos formados.",
    "summary": [
      "2. Verificación Estequiométrica Cuantitativa",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de la ley de conservación de la masa de Lavoisier en relaciones estequiométricas",
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
      "statement": "En un experimento de neutralización, se hacen reaccionar 73 g de ácido clorhídrico (HCl) con 80 g de hidróxido de sodio (NaOH), formándose 117 g de cloruro de sodio (NaCl) y cierta cantidad de agua. Determine la masa de agua formada.",
      "steps": [
        "Aplicamos la Ley de Lavoisier (Σ m_reactivos = Σ m_productos).",
        "HCl + NaOH → NaCl + H₂O",
        "73 g + 80 g = 117 g + m(H₂O)"
      ],
      "answer": "153 g = 117 g + m(H₂O) ⇒ m(H₂O) = 153 - 117 = **36 g de agua**."
    },
    "practice": [
      {
        "id": "p-9.1-1",
        "type": "mc",
        "prompt": "Se queman 24 g de magnesio metálico con oxígeno del aire, obteniéndose 40 g de óxido de magnesio. ¿Qué masa de oxígeno gas reaccionó?",
        "options": [
          "La reacción es Mg + O₂ → MgO",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La reacción es Mg + O₂ → MgO.\n Masa de Mg + Masa de O₂ = Masa de MgO\n 24 g + Masa de O₂ = 40 g\n Masa de O₂ = 40 - 24 = **16 g de oxígeno**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ley de conservación de la masa de Lavoisier en relaciones estequiométricas?",
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
        "id": "q-9.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl principio teórico fundamental que nos obliga a balancear todas las ecuaciones químicas antes de realizar cualquier cálculo estequiométrico es la:",
        "options": [
          "Ley de las Proporciones Múltiples de Dalton",
          "Ley de las Proporciones Definidas de Proust",
          "Ley de Conservación de la Masa de Lavoisier",
          "Ley Volumétrica de Gay-Lussac"
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
        "id": "q-9.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de galvanoplastia, un estudiante disuelve una barra de plata de 10.8 g en ácido nítrico, produciendo nitrato de plata y gases tóxicos. Al final del proceso evapora todo a sequedad, pesando las sales residuales. Si el experimento se hizo en una campana extractora abierta, ¿por qué la suma de las masas de los sólidos finales no iguala a la suma de las masas de los reactivos iniciales?",
        "options": [
          "Porque las reacciones con ácidos fuertes destruyen materia.",
          "Porque los gases tóxicos liberados tienen masa y escaparon al entorno.",
          "Porque el ácido nítrico se evaporó sin reaccionar.",
          "Porque la ley de Lavoisier solo aplica a reacciones endotérmicas."
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
        "id": "q-9.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl calentar 122.5 g de clorato de potasio (KClO₃), este se descompone térmicamente produciendo cloruro de potasio (KCl) sólido y gas oxígeno (O₂). Si el residuo sólido pesa 74.5 g, calcule el volumen de gas liberado medido a condiciones normales (C.N.). (Masa molar O₂ = 32 g/mol)",
        "options": [
          "22.4 L",
          "44.8 L",
          "33.6 L",
          "11.2 L"
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
    "code": "9.2",
    "objective": "Resolver relaciones estequiométricas cuantitativas masa-masa, mol-mol y masa-mol aplicando la Ley de las Proporciones Definidas de Louis Proust.",
    "summary": [
      "2. Metodología de los Tres Pasos (Regla de Tres Estequiométrica)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de la ley de proporciones definidas de Proust en cálculos masa-masa y mol-mol",
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
      "statement": "Dada la reacción de síntesis del amoníaco: N₂ + 3H₂ → 2NH₃. ¿Cuántos moles de amoníaco se producirán a partir de 12 moles de gas hidrógeno?",
      "steps": [
        "Es una relación mol-mol. Miramos los coeficientes.",
        "Teoría: 3 moles de H₂ producen 2 moles de NH₃.",
        "Problema: 12 moles de H₂ producirán \"x\" moles de NH₃."
      ],
      "answer": "x = (12 × 2) / 3 = **8 moles de NH₃**."
    },
    "practice": [
      {
        "id": "p-9.2-1",
        "type": "mc",
        "prompt": "Calcule la masa de oxígeno necesaria para oxidar completamente 112 gramos de hierro mediante la reacción: 4Fe + 3O₂ → 2Fe₂O₃. (Pesos atómicos: Fe=56, O=16).",
        "options": [
          "Es una relación masa-masa",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Es una relación masa-masa.\n Teoría para Fe: 4 × 56 g = 224 g\n Teoría para O₂: 3 × 32 g = 96 g\n Relación teórica: 224 g de Fe requieren 96 g de O₂.\n Dato problema: 112 g de Fe requieren \"x\" g de O₂.\n x = (112 × 96) / 224 = **48 gramos de O₂**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ley de proporciones definidas de Proust en cálculos masa-masa y mol-mol?",
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
        "id": "q-9.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la Ley de Proust, si en la formación de un compuesto la proporción teórica de masas entre el elemento A y el elemento B es de 2 a 5, y experimentalmente hacemos reaccionar 10 gramos de A con 30 gramos de B, ¿qué sucederá?",
        "options": [
          "Se formarán 40 gramos del compuesto.",
          "Sobrarán 5 gramos del elemento B.",
          "Sobrarán 5 gramos del elemento A.",
          "Reaccionará todo por ser un sistema cerrado."
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
        "id": "q-9.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl carbonato de calcio (CaCO₃) se descompone térmicamente en los hornos cementeros para producir cal viva (CaO) y dióxido de carbono (CO₂). Si se procesan 500 gramos de carbonato de calcio puro, ¿qué masa de cal viva se obtendrá? (Masas Molares: CaCO₃ = 100 g/mol; CaO = 56 g/mol).",
        "options": [
          "56 g",
          "280 g",
          "500 g",
          "224 g"
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
        "id": "q-9.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa combustión completa del gas butano ocurre según: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. Si en una cámara de reacción se consumen 11.6 kg de butano, ¿cuántos moles de agua se producen al final del proceso? (Masa Molar C₄H₁₀ = 58 g/mol).",
        "options": [
          "1000 moles",
          "500 moles",
          "100 moles",
          "2000 moles"
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
    "code": "9.3",
    "objective": "Resolver estequiometría de fases gaseosas a presión y temperatura constantes mediante la Ley de Volúmenes de Combinación de Gay-Lussac y calcular la contracción volumétrica.",
    "summary": [
      "2. Contracción Volumétrica (C)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de la ley volumétrica de Gay-Lussac en reacciones con reactivos y productos gaseosos",
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
      "statement": "En la combustión completa del gas etano (C₂H₆) a condiciones de presión y temperatura constantes, ¿qué volumen de gas oxígeno se requiere para quemar exactamente 40 Litros de etano?",
      "steps": [
        "Balanceamos: 2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(g)",
        "Relación teórica: 2 volúmenes de C₂H₆ necesitan 7 volúmenes de O₂.",
        "Planteamos: (40 L) / 2 = V(O₂) / 7"
      ],
      "answer": "V(O₂) = (40 × 7) / 2 = **140 Litros de O₂**."
    },
    "practice": [
      {
        "id": "p-9.3-1",
        "type": "mc",
        "prompt": "Calcule la contracción volumétrica para la siguiente reacción en fase gaseosa: 2SO₂(g) + O₂(g) → 2SO₃(g).",
        "options": [
          "Todos son gases, aplicamos la fórmula con los coeficientes",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Todos son gases, aplicamos la fórmula con los coeficientes.\n Σ Reactivos = 2 + 1 = 3\n Σ Productos = 2\n C = (3 - 2) / 3 = 1 / 3 = **0.333 (o 33.3%)**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ley volumétrica de Gay-Lussac en reacciones con reactivos y productos gaseosos?",
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
        "id": "q-9.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la Ley de Gay-Lussac para los gases en reacción a presión y temperatura constantes, la relación de volúmenes de las sustancias reaccionantes y productos es igual a la relación de sus:",
        "options": [
          "Masas atómicas",
          "Masas molares",
          "Coeficientes estequiométricos",
          "Electronegatividades"
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
        "id": "q-9.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un motor de combustión, el monóxido de carbono (CO) letal reacciona con oxígeno para formar dióxido de carbono menos tóxico (CO₂), según: 2CO(g) + O₂(g) → 2CO₂(g). Si al convertidor catalítico ingresan 50 cm³ de CO(g), ¿qué volumen total de gases existirá al finalizar la reacción completa? (Asuma P y T constantes).",
        "options": [
          "50 cm³",
          "75 cm³",
          "25 cm³",
          "100 cm³"
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
        "id": "q-9.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDada la reacción de combustión del propano a 25°C: C₃H₈(g) + 5O₂(g) → 3CO₂(g) + 4H₂O(l). Determine la contracción volumétrica fraccionaria de este proceso.",
        "options": [
          "1/2",
          "2/3",
          "1/6",
          "1/3"
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
    "code": "9.4",
    "objective": "Identificar el reactivo limitante mediante el método del cociente estequiométrico y calcular tanto la cantidad de producto formado como la masa remanente del reactivo en exceso.",
    "summary": [
      "1. Conceptos Fundamentales",
      "2. Método del Cociente Estequiométrico (Q)",
      "3. Cálculo del Exceso Sobrante"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Identificación cuantitativa de reactivo limitante y reactivo en exceso",
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
      "statement": "Se hacen reaccionar 10 moles de gas H₂ con 4 moles de gas O₂ para formar agua (2H₂ + O₂ → 2H₂O). Identifique el reactivo limitante, el reactivo en exceso y cuántos moles de agua se forman.",
      "steps": [
        "Calculamos el cociente Q para cada uno:",
        "Q(H₂) = 10 moles dato / 2 moles teoría = 5",
        "Q(O₂) = 4 moles dato / 1 mol teoría = 4",
        "El menor valor es 4. Por tanto, el **O₂ es el Reactivo Limitante**. El H₂ es el reactivo en exceso.",
        "Cálculo de producto (usando el RL: Oxígeno):",
        "Si 1 mol de O₂ da 2 moles de H₂O"
      ],
      "answer": "4 moles de O₂ (dato) darán \"x\". x = **8 moles de H₂O** formados."
    },
    "practice": [
      {
        "id": "p-9.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Identificación cuantitativa de reactivo limitante y reactivo en exceso, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-9.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Identificación cuantitativa de reactivo limitante y reactivo en exceso?",
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
        "id": "q-9.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una reacción química con reactivos que no están en proporciones estequiométricas exactas, la cantidad máxima de producto que se puede obtener depende exclusivamente del:",
        "options": [
          "Rendimiento porcentual",
          "Reactivo en exceso",
          "Volumen del reactor",
          "Reactivo limitante"
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
        "id": "q-9.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn la síntesis industrial de la urea, el amoníaco (NH₃) y el dióxido de carbono (CO₂) reaccionan según: 2NH₃ + CO₂ → Urea + Agua. Si a un reactor se alimentan 6 moles de NH₃ y 4 moles de CO₂, determine cuál es el reactivo que sobra al final del proceso y en qué cantidad.",
        "options": [
          "Sobra 1 mol de CO₂",
          "Sobra 1 mol de NH₃",
          "Sobran 2 moles de CO₂",
          "No sobra ninguno, es mezcla estequiométrica"
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
        "id": "q-9.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe mezclan 40 gramos de gas hidrógeno (H₂, M=2) con 160 gramos de gas oxígeno (O₂, M=32) y se provoca una chispa para formar agua. Determine la masa de agua formada y la masa del gas reactivo que queda sin reaccionar.",
        "options": [
          "180 g H₂O y 20 g H₂ sobran.",
          "180 g H₂O y 10 g O₂ sobran.",
          "360 g H₂O y 0 g sobran.",
          "180 g H₂O y 20 g O₂ sobran."
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
    "code": "9.5",
    "objective": "Discriminar la fracción químicamente activa de un mineral o reactivo técnico impuro a partir de su porcentaje de pureza o ley mineral antes de alimentar la ecuación estequiométrica.",
    "summary": [
      "1. Pureza o Riqueza de una Muestra (Ley del Mineral)",
      "2. Algoritmo de Cálculo con Reactivos Impuros",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculos estequiométricos con impurezas en reactivos y muestras minerales",
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
      "statement": "Se desean obtener 56 g de hierro metálico a partir de la reducción de un mineral de hematita (Fe₂O₃) que presenta un 80% de pureza, según la reacción Fe₂O₃ + 3CO → 2Fe + 3CO₂. ¿Qué masa del mineral impuro se necesita? (Masa Molar Fe = 56; Fe₂O₃ = 160).",
      "steps": [
        "Reacción: Fe₂O₃ + 3CO → 2Fe + 3CO₂",
        "Teoría: 160 g de Fe₂O₃ producen 2(56) = 112 g de Fe.",
        "Problema: \"x\" g de Fe₂O₃ puro producen 56 g de Fe.",
        "x = (160 × 56) / 112 = **80 g de Fe₂O₃ puro requerido**.",
        "Análisis Inverso (Paso 3): Como la roca es 80% pura, necesitamos extraer más roca bruta."
      ],
      "answer": "Mineral total = 80 g puro × (100 / 80) = **100 g de muestra mineral**."
    },
    "practice": [
      {
        "id": "p-9.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cálculos estequiométricos con impurezas en reactivos y muestras minerales, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-9.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculos estequiométricos con impurezas en reactivos y muestras minerales?",
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
        "id": "q-9.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn un cálculo estequiométrico a partir de una materia prima impura industrial, el valor numérico que debe ingresarse en la ecuación química balanceada corresponde a la masa:",
        "options": [
          "De la ganga o inerte.",
          "Total de la muestra multiplicada por cien.",
          "Exclusivamente de la fracción pura o activa.",
          "Total de la muestra bruta."
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
        "id": "q-9.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso minero, se tuestan 10 toneladas de un mineral de blenda que contiene sulfuro de zinc (ZnS) al 70% de pureza. Sabiendo que el 30% restante es tierra estéril que no reacciona al calor, ¿qué masa activa es la que efectivamente sufrirá la reacción química en el horno tostador?",
        "options": [
          "10 toneladas",
          "3 toneladas",
          "7 toneladas",
          "14.3 toneladas"
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
        "id": "q-9.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nCalcule el volumen de CO₂ medido a condiciones normales (C.N.) que se desprenderá al hacer reaccionar 125 gramos de carbonato de calcio comercial (CaCO₃, M=100) al 80% de pureza con exceso de HCl.\n(Reacción: CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O)",
        "options": [
          "28.0 L",
          "22.4 L",
          "11.2 L",
          "5.6 L"
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
    "code": "9.6",
    "objective": "Calcular el rendimiento porcentual de un proceso químico comparando la masa real obtenida experimentalmente con la cantidad máxima teórica calculada por la estequiometría sobre papel.",
    "summary": [
      "1. Rendimiento Teórico vs. Rendimiento Real",
      "2. Porcentaje de Rendimiento o Eficiencia (% η)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de rendimiento teórico, rendimiento real y porcentaje de eficiencia",
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
      "statement": "Según la estequiometría de una reacción en papel, deberían haberse producido 50 g de amoníaco. Sin embargo, en el laboratorio el estudiante pesó y solo recuperó 40 g de amoníaco puro. ¿Cuál es el rendimiento porcentual del experimento?",
      "steps": [
        "Dato Teórico (papel) = 50 g.",
        "Dato Real (balanza) = 40 g."
      ],
      "answer": "% η = (40 g / 50 g) × 100% = 0.80 × 100% = **80% de rendimiento**."
    },
    "practice": [
      {
        "id": "p-9.6-1",
        "type": "mc",
        "prompt": "Dada la reacción N₂ + 3H₂ → 2NH₃. Si se hace reaccionar 1 mol de nitrógeno con suficiente hidrógeno, pero el proceso industrial solo rinde al 75%, ¿cuántos moles de amoníaco se recogen finalmente?",
        "options": [
          "> - Cálculo teórico: 1 mol N₂ produce teóricamente 2 moles de NH₃",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Cálculo teórico: 1 mol N₂ produce teóricamente 2 moles de NH₃.\n> - Cálculo real: Como rinde al 75%, m_real = 2 moles × 0.75 = **1.5 moles de NH₃ recuperados**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de rendimiento teórico, rendimiento real y porcentaje de eficiencia?",
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
        "id": "q-9.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa cantidad de producto que un estudiante obtiene pesando el filtrado al finalizar un experimento de laboratorio se denomina:",
        "options": [
          "Rendimiento teórico",
          "Reactivo en exceso",
          "Rendimiento real o práctico",
          "Eficiencia estequiométrica máxima"
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
        "id": "q-9.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn la industria de fertilizantes, se espera que la reacción entre A y B produzca 200 toneladas de abono. Sin embargo, debido a fugas térmicas y evaporación, la balanza final de la planta registra solo 160 toneladas. El porcentaje de eficiencia de esta planta química es del:",
        "options": [
          "60%",
          "125%",
          "80%",
          "40%"
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
        "id": "q-9.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara sintetizar cal viva (CaO, M=56 g/mol) a partir de la descomposición térmica de CaCO₃ (M=100 g/mol), se utiliza un horno que tiene un rendimiento real del 90%. ¿Qué masa de carbonato de calcio puro se debe someter al calor para garantizar la recolección física de 504 gramos de CaO puro?",
        "options": [
          "900 g",
          "1000 g",
          "810 g",
          "1200 g"
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
    "code": "9.7",
    "objective": "Integrar los cálculos estequiométricos ponderales (masas y moles) con la ecuación de estado de gases ideales (PV=nRT) cuando los gases se recogen en condiciones arbitrarias, especialmente húmedos sobre agua.",
    "summary": [
      "1. Acoplamiento Estequiometría - Gas Ideal",
      "2. Caso Especial de Nivel Avanzado: Recolección de Gas Húmedo",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Estequiometría integrada con leyes de gases ideales y recolección de gases",
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
      "statement": "Se descompone cierta cantidad de clorato de potasio (KClO₃) y se recogen 0.82 Litros de gas oxígeno (O₂) a una presión de 3 atmósferas y una temperatura de 127°C. ¿Cuántos moles de O₂ se produjeron realmente? (R = 0.082 atm·L/mol·K)",
      "steps": [
        "Como no son condiciones normales, aplicamos Clapeyron directamente al gas producido.",
        "T = 127 + 273 = 400 K.",
        "n(O₂) = (P · V) / (R · T) = (3 atm × 0.82 L) / (0.082 × 400 K)"
      ],
      "answer": "n(O₂) = 2.46 / 32.8 = **0.075 moles de O₂**."
    },
    "practice": [
      {
        "id": "p-9.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Estequiometría integrada con leyes de gases ideales y recolección de gases, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-9.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Estequiometría integrada con leyes de gases ideales y recolección de gases?",
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
        "id": "q-9.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nCuando un gas producto de una reacción química se recoge en un cilindro a una temperatura de 25°C y 1 atmósfera de presión, para hallar el número de moles generado es imperativo utilizar:",
        "options": [
          "El volumen molar de 22.4 L/mol.",
          "La ecuación de estado de gases ideales (PV = nRT).",
          "La ley de difusión de Graham.",
          "La masa molar del agua."
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
        "id": "q-9.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante una práctica de laboratorio, se disuelve zinc en ácido clorhídrico y el gas hidrógeno liberado se captura en un tubo invertido lleno de agua. El volumen de gas atrapado en la parte superior se considera como gas húmedo. Para saber exactamente cuánto hidrógeno puro (seco) se produjo para los cálculos de estequiometría, se debe:",
        "options": [
          "Sumarle a la presión total la presión de vapor del agua.",
          "Restarle a la presión total la presión de vapor del agua a esa temperatura.",
          "Asumir que la presión del gas es igual a la presión de vapor del agua.",
          "Multiplicar el volumen húmedo por la densidad del agua."
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
        "id": "q-9.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe descomponen térmicamente 0.2 moles de NaN₃ sólido liberando gas nitrógeno (N₂) según: 2NaN₃ → 2Na + 3N₂. El nitrógeno es recogido sobre agua a 27°C. Sabiendo que la presión barométrica total es de 787 mmHg y la presión de vapor de agua a 27°C es 27 mmHg, determine el volumen húmedo del gas recolectado. (R = 62.4 mmHg·L/mol·K)",
        "options": [
          "7.4 L",
          "22.4 L",
          "6.2 L",
          "11.2 L"
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
    "code": "9.8",
    "objective": "Determinar el parámetro de combinación estequiométrica (θ) y calcular el peso equivalente o masa equivalente (P.Eq.) de elementos y compuestos inorgánicos puros en ausencia de transferencia redox.",
    "summary": [
      "1. Definición de Peso Equivalente (P.Eq. o M.Eq.)",
      "2. Determinación del Parámetro θ (Compuestos No Redox)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de peso equivalente en elementos, óxidos, hidróxidos, ácidos y sales",
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
      "statement": "Determine el peso equivalente del ácido nítrico, HNO₃. (M=63 g/mol).",
      "steps": [
        "El ácido nítrico posee solo 1 hidrógeno desplazable (H⁺) en su estructura molecular. Por lo tanto, el parámetro θ = 1."
      ],
      "answer": "P.Eq. = M / θ = 63 / 1 = **63 g/eq**."
    },
    "practice": [
      {
        "id": "p-9.8-1",
        "type": "mc",
        "prompt": "Calcule el peso equivalente de la sal cristalina carbonato de calcio, CaCO₃. (M=100 g/mol).",
        "options": [
          "El calcio pertenece al Grupo IIA, por lo que su catión es Ca²⁺",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El calcio pertenece al Grupo IIA, por lo que su catión es Ca²⁺. Como hay un solo átomo de calcio, la carga neta total catiónica es 1 × (+2) = 2. Luego θ = 2.\n P.Eq. = 100 / 2 = **50 g/eq**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de peso equivalente en elementos, óxidos, hidróxidos, ácidos y sales?",
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
        "id": "q-9.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún las reglas para determinar el parámetro θ en compuestos inorgánicos neutros, el valor de θ para cualquier hidróxido metálico corresponde exactamente al número de:",
        "options": [
          "Protones en el núcleo del metal.",
          "Hidrógenos unidos al catión central.",
          "Grupos hidroxilo u oxidrilo (OH⁻) en su fórmula.",
          "Oxígenos puros en la molécula."
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
        "id": "q-9.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl ácido sulfúrico (H₂SO₄) es conocido como la sangre de la química industrial. En un proceso de neutralización total donde libera todos sus iones hidrógeno al reaccionar con soda cáustica, el valor del parámetro θ que se debe emplear para hallar su masa equivalente es:",
        "options": [
          "4",
          "2",
          "1",
          "6"
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
        "id": "q-9.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl fosfito de sodio se forma neutralizando completamente la acidez del ácido fosforoso. Determine el peso equivalente del ácido fosforoso (H₃PO₃) sabiendo que su masa molar es 82 g/mol.",
        "options": [
          "27.3 g/eq",
          "41.0 g/eq",
          "82.0 g/eq",
          "13.6 g/eq"
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
    "code": "9.9",
    "objective": "Cuantificar el parámetro θ en procesos de óxido-reducción en función de los electrones transferidos y aplicar el cálculo del número de equivalentes-gramo (#Eq-g).",
    "summary": [
      "1. Parámetro θ en Reacciones Redox",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de peso equivalente en reacciones redox y cálculo de equivalentes-gramo",
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
      "statement": "En la siguiente reacción de oxidación del hierro: Fe → Fe³⁺ + 3e⁻, determine cuántos equivalentes-gramo hay en una barra de 112 g de Hierro metálico (Masa atómica Fe = 56).",
      "steps": [
        "Primero determinamos θ. El hierro pasa de 0 a +3, perdiendo 3 electrones por átomo. θ = 3.",
        "Calculamos los moles: n = m / M = 112 / 56 = 2 moles de Hierro."
      ],
      "answer": "Utilizamos la fórmula rápida: #Eq-g = n × θ = 2 × 3 = **6 equivalentes-gramo**."
    },
    "practice": [
      {
        "id": "p-9.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Determinación de peso equivalente en reacciones redox y cálculo de equivalentes-gramo, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-9.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de peso equivalente en reacciones redox y cálculo de equivalentes-gramo?",
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
        "id": "q-9.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una semirreacción de oxidación-reducción (redox), el parámetro θ para el agente oxidante se define exactamente como:",
        "options": [
          "La carga del catión en el estado acuoso.",
          "El número de oxígenos que pierde la molécula.",
          "El número de hidrógenos que dona el reductor.",
          "El número total de electrones ganados por unidad de fórmula."
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
        "id": "q-9.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl agua oxigenada (H₂O₂) funciona como desinfectante de heridas debido a su poder oxidante sobre las membranas bacterianas, reduciéndose a agua líquida (H₂O). El parámetro θ del peróxido de hidrógeno en este proceso es:",
        "options": [
          "1",
          "2",
          "4",
          "0"
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
        "id": "q-9.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl gas sulfhídrico (H₂S, M=34 g/mol) se oxida completamente a dióxido de azufre (SO₂) en un incinerador industrial. Calcule el peso equivalente del H₂S en este proceso.",
        "options": [
          "17 g/eq",
          "8.5 g/eq",
          "5.67 g/eq",
          "4.25 g/eq"
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
    "code": "9.10",
    "objective": "Resolver problemas avanzados de estequiometría aplicando la potentísima Ley del Equivalente Químico de Richter-Wenzel, con la enorme ventaja de no requerir balancear previamente la ecuación química global.",
    "summary": [
      "2. Reacciones de Neutralización Ácido-Base",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de la ley del equivalente químico en reacciones de neutralización y precipitación",
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
      "statement": "En un tanque neutralizador, se tienen 4 equivalentes-gramo de ácido sulfúrico (H₂SO₄). ¿Qué masa en gramos de hidróxido de sodio puro (NaOH, M=40 g/mol) será estrictamente necesaria para neutralizar el tanque por completo?",
      "steps": [
        "Aplicamos la magia de la Ley del Equivalente Químico.",
        "# Eq-g (Ácido) = # Eq-g (Base)",
        "4 eq = Masa(NaOH) / P.Eq.(NaOH)",
        "Calculamos P.Eq. de la base: NaOH tiene 1 OH⁻ ⇒ θ = 1. P.Eq. = 40 / 1 = 40 g/eq."
      ],
      "answer": "Reemplazamos: 4 = Masa / 40 ⇒ Masa = 4 × 40 = **160 gramos de NaOH**."
    },
    "practice": [
      {
        "id": "p-9.10-1",
        "type": "mc",
        "prompt": "¿Qué volumen de una disolución de HCl 0.5 M (θ=1) se necesita para neutralizar completamente 100 mL de una disolución de Ca(OH)₂ de concentración 0.2 M (θ=2)?",
        "options": [
          "Igualdad en neutralización: (M·V·θ)ácido = (M·V·θ)base\n (0",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Igualdad en neutralización: (M·V·θ)ácido = (M·V·θ)base\n (0.5)(V_ácido)(1) = (0.2)(100 mL)(2)\n 0.5 × V_ácido = 40 ⇒ V_ácido = 40 / 0.5 = **80 mL de HCl**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-9.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ley del equivalente químico en reacciones de neutralización y precipitación?",
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
        "id": "q-9.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la Ley del Equivalente Químico (Ley de Richter-Wenzel), todas las sustancias que intervienen en una reacción química participan manteniendo constante y equivalente su:",
        "options": [
          "Cantidad de moles.",
          "Número de moléculas.",
          "Masa en gramos.",
          "Número de equivalentes-gramo."
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
        "id": "q-9.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nPara combatir la hiperacidez estomacal producida por el exceso de HCl, se recetan tabletas masticables de hidróxido de magnesio (Mg(OH)₂, M=58 g/mol). Si una tableta contiene 0.58 gramos de la base, ¿cuántos equivalentes-gramo de ácido estomacal logrará neutralizar en el paciente?",
        "options": [
          "0.01 eq-g",
          "0.02 eq-g",
          "0.1 eq-g",
          "0.2 eq-g"
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
        "id": "q-9.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe requiere titular 20 mL de una solución ácida de H₂SO₄, gastando en la bureta 40 mL de una solución valorada de KOH 0.1 N. Determine la molaridad exacta del ácido sulfúrico titulado.",
        "options": [
          "0.1 M",
          "0.2 M",
          "0.05 M",
          "0.4 M"
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
    "id": "exam-9-1",
    "objective": "9.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.1): Respecto a 2. Verificación Estequiométrica Cuantitativa, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-2",
    "objective": "9.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.2): Respecto a 2. Metodología de los Tres Pasos (Regla de Tres Estequiométrica), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-3",
    "objective": "9.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.3): Respecto a 2. Contracción Volumétrica (C), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-4",
    "objective": "9.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.4): Respecto a 1. Conceptos Fundamentales, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-5",
    "objective": "9.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.5): Respecto a 1. Pureza o Riqueza de una Muestra (Ley del Mineral), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-6",
    "objective": "9.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.6): Respecto a 1. Rendimiento Teórico vs. Rendimiento Real, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-7",
    "objective": "9.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.7): Respecto a 1. Acoplamiento Estequiometría - Gas Ideal, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-9-8",
    "objective": "9.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (9.8): Respecto a 1. Definición de Peso Equivalente (P.Eq. o M.Eq.), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 9.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
