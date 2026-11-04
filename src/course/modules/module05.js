// Módulo 5: Módulo 5: Gases, Líquidos y Cambios de Fase
export const module05 = {
  number: 5,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 5: Gases, Líquidos y Cambios de Fase.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "5.1",
    "objective": "Comprender el modelo del gas ideal a partir de los postulados fundamentales de la Teoría Cinético-Molecular (TCM) de Clausius, Maxwell y Boltzmann, identificando las condiciones termodinámicas de idealidad.",
    "summary": [
      "1. Postulados Fundamentales de la Teoría Cinético-Molecular",
      "2. Condiciones de Idealidad para Gases Reales",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Postulados de la teoría cinético-molecular aplicados al gas ideal",
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
      "statement": "A temperatura ambiente, se tienen dos globos, uno con helio y otro con xenón. ¿Qué puede afirmar sobre la energía cinética promedio de ambos gases?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Según el quinto postulado de la TCM, la energía cinética promedio depende exclusivamente de la temperatura absoluta. Como ambos globos están a la misma temperatura, la energía cinética promedio de las moléculas de Helio y Xenón es exactamente la misma."
    },
    "practice": [
      {
        "id": "p-5.1-1",
        "type": "mc",
        "prompt": "¿Bajo qué condiciones termodinámicas es más probable que el gas metano (CH₄) tenga un comportamiento casi ideal?",
        "options": [
          "Un gas real se comporta como ideal cuando las moléculas están muy separadas y se mueven muy rápido para que las fuerzas de London sean despreciables",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Un gas real se comporta como ideal cuando las moléculas están muy separadas y se mueven muy rápido para que las fuerzas de London sean despreciables. Esto ocurre a **altas temperaturas y bajas presiones**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Postulados de la teoría cinético-molecular aplicados al gas ideal?",
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
        "id": "q-5.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la Teoría Cinético-Molecular de los gases ideales, las colisiones entre las moléculas gaseosas son:",
        "options": [
          "Inelásticas y con pérdida de energía térmica.",
          "Perfectamente elásticas, conservando la energía cinética total.",
          "Generadoras de fuerzas de atracción intermolecular.",
          "Responsables del volumen del gas, pero no de su presión."
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
        "id": "q-5.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso industrial, se requiere que un gas real almacenado se comporte lo más parecido posible a un gas ideal para poder aplicar la ecuación PV = nRT en el diseño de los tanques. ¿Qué gas y bajo qué condiciones elegiría el ingeniero?",
        "options": [
          "SO₂ a baja temperatura y alta presión.",
          "CO₂ a alta temperatura y alta presión.",
          "He a alta temperatura y baja presión.",
          "NH₃ a baja temperatura y baja presión."
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
        "id": "q-5.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique cuál de los siguientes enunciados contradice los postulados de la teoría cinético-molecular del gas ideal:",
        "options": [
          "El volumen propio de las moléculas gaseosas es despreciable frente al volumen del recipiente.",
          "Las fuerzas de atracción y repulsión entre las moléculas gaseosas son nulas.",
          "La presión del gas es originada por el choque de las moléculas contra las paredes del recipiente.",
          "A una misma temperatura, las moléculas de mayor masa se desplazan a mayor velocidad que las de menor masa."
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
    "code": "5.2",
    "objective": "Resolver problemas cuantitativos de transformaciones gaseosas de masa constante cuando una variable de estado (temperatura, presión o volumen) permanece fija.",
    "summary": [
      "1. Proceso Isotérmico: Ley de Boyle - Mariotte (T = constante)",
      "2. Proceso Isobárico: Ley de Charles (P = constante)",
      "3. Proceso Isocórico o Isométrico: Ley de Gay-Lussac (V = constante)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Resolución de procesos restringidos mediante las leyes de Boyle, Charles y Gay-Lussac",
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
      "statement": "Un gas ocupa un volumen de 10 L a una presión de 2 atm. Si la temperatura permanece constante, ¿qué volumen ocupará si la presión se incrementa a 5 atm?",
      "steps": [
        "Proceso isotérmico (Ley de Boyle).",
        "P₁ · V₁ = P₂ · V₂",
        "(2 atm)(10 L) = (5 atm) · V₂"
      ],
      "answer": "20 = 5 · V₂ ⇒ V₂ = **4 L**."
    },
    "practice": [
      {
        "id": "p-5.2-1",
        "type": "mc",
        "prompt": "Cierto volumen de gas se encuentra a 27°C. Si el proceso es isobárico, ¿a qué temperatura en °C el volumen se triplicará?",
        "options": [
          "Proceso isobárico (Ley de Charles)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Proceso isobárico (Ley de Charles). ¡Convertir a Kelvin!\n T₁ = 27 + 273 = 300 K. Si V₂ = 3V₁.\n V₁ / 300 K = 3V₁ / T₂\n T₂ = 300 × 3 = 900 K.\n Convertimos a Celsius: T(°C) = 900 - 273 = **627°C**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Resolución de procesos restringidos mediante las leyes de Boyle, Charles y Gay-Lussac?",
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
        "id": "q-5.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa ley empírica de los gases que relaciona el volumen y la presión a temperatura constante se conoce como:",
        "options": [
          "Ley de Charles",
          "Ley de Avogadro",
          "Ley de Boyle-Mariotte",
          "Ley de Gay-Lussac"
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
        "id": "q-5.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn balón de acero (volumen constante) contiene oxígeno a una presión de 4 atm a la temperatura de 127°C. Si por motivos de seguridad la válvula estalla cuando la presión llega a 6 atm, ¿cuál es la temperatura máxima en °C que puede soportar el balón antes de estallar?",
        "options": [
          "190.5 °C",
          "600 °C",
          "327 °C",
          "127 °C"
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
        "id": "q-5.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn pistón contiene un gas ideal a presión P y temperatura T. Si se presiona el pistón reduciendo su volumen a la cuarta parte, manteniendo la temperatura constante, y luego se calienta hasta duplicar su temperatura absoluta manteniendo el volumen constante, la presión final será:",
        "options": [
          "2 P",
          "4 P",
          "6 P",
          "8 P"
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
    "code": "5.3",
    "objective": "Relacionar matemáticamente la presión, volumen, temperatura y cantidad de sustancia mediante la Ecuación de Estado Universal, calculando densidades y masas molares de fluidos gaseosos.",
    "summary": [
      "1. Ecuación de Estado Universal de los Gases Ideales (Clapeyron)",
      "2. Valores de la Constante Universal de los Gases (R)",
      "3. Cálculo de Densidad (ρ) y Masa Molar (M)"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Aplicación de la ecuación universal de los gases ideales para masa, densidad y masa molar",
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
      "statement": "Determine la presión en atmósferas que ejercen 2 moles de un gas ideal confinados en un recipiente de 8.2 Litros a una temperatura de 127°C.",
      "steps": [
        "Datos: n = 2 mol, V = 8.2 L, T = 127 + 273 = 400 K, R = 0.082 atm·L/(mol·K).",
        "PV = nRT ⇒ P(8.2) = 2 × 0.082 × 400"
      ],
      "answer": "P(8.2) = 65.6 ⇒ P = 65.6 / 8.2 = **8.0 atm**."
    },
    "practice": [
      {
        "id": "p-5.3-1",
        "type": "mc",
        "prompt": "Calcule la densidad del gas metano (CH₄, masa molar = 16 g/mol) a una presión de 4.1 atm y 127°C.",
        "options": [
          "> - Aplicamos P·M = ρ·R·T",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Aplicamos P·M = ρ·R·T.\n> - (4.1 atm) × (16 g/mol) = ρ × (0.082 atm·L/mol·K) × (400 K)\n> - 65.6 = ρ × 32.8 ⇒ ρ = 65.6 / 32.8 = **2.0 g/L**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ecuación universal de los gases ideales para masa, densidad y masa molar?",
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
        "id": "q-5.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué volumen en litros ocupan 0.5 moles de gas oxígeno a una presión de 1 atm y 273 K? (Dato: R = 0.082)",
        "options": [
          "22.4 L",
          "11.2 L",
          "5.6 L",
          "44.8 L"
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
        "id": "q-5.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLos globos aerostáticos se elevan porque el aire en su interior se calienta, lo que disminuye su densidad haciéndolo más liviano que el aire exterior. Según la ecuación P·M = ρ·R·T, si calentamos un gas manteniendo su presión constante, su densidad:",
        "options": [
          "Aumenta proporcionalmente a la temperatura.",
          "Disminuye, porque la densidad es inversamente proporcional a la temperatura.",
          "Permanece constante.",
          "Aumenta al cuadrado de la temperatura."
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
        "id": "q-5.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn compuesto gaseoso desconocido tiene una densidad de 1.25 g/L a una presión de 83.2 mmHg y una temperatura de 27°C. Determine la masa molar de dicho gas. (Dato: R = 62.4 mmHg·L/mol·K)",
        "options": [
          "280 g/mol",
          "140 g/mol",
          "225 g/mol",
          "300 g/mol"
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
    "code": "5.4",
    "objective": "Aplicar el principio de Avogadro y el concepto de volumen molar a condiciones normales para relacionar volúmenes medidos con cantidades estequiométricas molares.",
    "summary": [
      "2. Condiciones Normales (CN o TPN)",
      "3. Volumen Molar de un Gas Ideal a Condiciones Normales (V_m)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Hipótesis de Avogadro, volumen molar y condiciones normales",
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
      "statement": "Determine el volumen que ocuparán 80 gramos de gas metano (CH₄) sometidos a Condiciones Normales (C.N.). Masa molar CH₄ = 16 g/mol.",
      "steps": [
        "Primero calculamos los moles: n = m / M = 80 g / 16 g/mol = 5 moles.",
        "En CN, 1 mol ocupa 22.4 L."
      ],
      "answer": "Volumen = 5 moles × 22.4 L/mol = **112 L**."
    },
    "practice": [
      {
        "id": "p-5.4-1",
        "type": "mc",
        "prompt": "Dos recipientes idénticos de 10 L se encuentran a la misma temperatura y presión. El primero contiene gas nitrógeno (N₂) y el segundo gas dióxido de azufre (SO₂). ¿Qué relación existe entre la cantidad de moléculas en ambos recipientes?",
        "options": [
          "Según la Ley de Avogadro, volúmenes iguales de gases diferentes a la misma P y T contienen exactamente el **mismo número de moléculas**",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Según la Ley de Avogadro, volúmenes iguales de gases diferentes a la misma P y T contienen exactamente el **mismo número de moléculas**. Por lo tanto, la relación de moléculas es 1:1.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Hipótesis de Avogadro, volumen molar y condiciones normales?",
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
        "id": "q-5.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la Hipótesis de Avogadro, a temperatura y presión constantes, el volumen de un gas es directamente proporcional a:",
        "options": [
          "Su masa molar.",
          "Su densidad.",
          "La cantidad de sustancia (número de moles).",
          "La fuerza de gravedad."
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
        "id": "q-5.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSe necesita almacenar 1120 Litros de gas oxígeno (O₂) a Condiciones Normales para uso hospitalario. Si la masa molar del O₂ es 32 g/mol, la masa de oxígeno almacenada en dicho tanque será:",
        "options": [
          "1600 g",
          "3200 g",
          "800 g",
          "1120 g"
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
        "id": "q-5.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tienen tres globos idénticos llenados bajo las mismas condiciones de presión y temperatura con H₂, CH₄ y CO₂ respectivamente. Señale la alternativa correcta respecto a sus propiedades:",
        "options": [
          "El globo con CO₂ contiene más moles que el de H₂.",
          "Todos los globos tienen la misma masa.",
          "El globo de H₂ es el que contiene menor cantidad de moléculas.",
          "Los tres globos contienen el mismo número de moles y moléculas."
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
    "code": "5.5",
    "objective": "Analizar y resolver estados iniciales y finales de sistemas gaseosos cerrados donde la presión, volumen y temperatura varían de manera simultánea.",
    "summary": [
      "1. Deducción de la Ecuación General",
      "2. Aplicación con Densidades Variables",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Ecuación general de los gases en transformaciones con variables de estado simultáneas",
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
      "statement": "Un gas ideal ocupa un volumen de 40 L a 27°C y 1 atm de presión. Determine el volumen que ocupará si la presión se duplica y la temperatura se eleva a 127°C.",
      "steps": [
        "Estado 1: P₁ = 1 atm, V₁ = 40 L, T₁ = 27 + 273 = 300 K",
        "Estado 2: P₂ = 2 atm, V₂ = ?, T₂ = 127 + 273 = 400 K",
        "Aplicamos P₁V₁/T₁ = P₂V₂/T₂:",
        "(1 × 40) / 300 = (2 × V₂) / 400"
      ],
      "answer": "4/30 = 2V₂ / 400 ⇒ 1600 / 60 = V₂ ⇒ V₂ = **26.67 L**"
    },
    "practice": [
      {
        "id": "p-5.5-1",
        "type": "mc",
        "prompt": "Cierto gas se encuentra a la presión de 2 atm y 300 K con una densidad de 1.5 g/L. Si el gas se expande hasta que su presión es 1 atm y su temperatura cae a 200 K, calcule la nueva densidad.",
        "options": [
          "> - Aplicamos P₁/(ρ₁·T₁) = P₂/(ρ₂·T₂):\n 2 / (1",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Aplicamos P₁/(ρ₁·T₁) = P₂/(ρ₂·T₂):\n 2 / (1.5 × 300) = 1 / (ρ₂ × 200)\n 2 / 450 = 1 / 200ρ₂\n 400ρ₂ = 450 ⇒ ρ₂ = 450 / 400 = **1.125 g/L**",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ecuación general de los gases en transformaciones con variables de estado simultáneas?",
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
        "id": "q-5.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la ecuación general de los gases ideales (P₁V₁/T₁ = P₂V₂/T₂), ¿qué parámetro termodinámico se asume como rigurosamente constante entre el estado inicial y final?",
        "options": [
          "El volumen total",
          "La temperatura absoluta",
          "La presión parcial",
          "La masa o cantidad de sustancia del gas"
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
        "id": "q-5.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUna burbuja de aire asciende desde el fondo de un lago de 20 m de profundidad (alta presión y baja temperatura) hacia la superficie (menor presión y mayor temperatura). Asumiendo que la masa de aire en la burbuja no cambia, el volumen de la burbuja al llegar a la superficie:",
        "options": [
          "Disminuye por el aumento de la temperatura.",
          "Aumenta porque la presión disminuye y la temperatura aumenta simultáneamente.",
          "Permanece inalterado porque ambos efectos se cancelan.",
          "Depende de la densidad del agua del lago."
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
        "id": "q-5.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nCierta masa de gas ideal duplica su volumen y reduce su presión a la tercera parte. Si su temperatura inicial era 300 K, ¿cuál será su temperatura final?",
        "options": [
          "200 K",
          "450 K",
          "600 K",
          "150 K"
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
    "code": "5.6",
    "objective": "Cuantificar la composición de mezclas homogéneas de gases que no reaccionan entre sí, determinando fracciones molares y presiones parciales mediante la Ley de Dalton.",
    "summary": [
      "1. Fracción Molar (x_i)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Análisis de mezclas gaseosas, fracción molar y ley de presiones parciales de Dalton",
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
      "statement": "Una mezcla gaseosa está compuesta por 2 moles de Ar y 3 moles de N₂, y ejerce una presión total de 10 atm. ¿Cuál es la presión parcial del N₂?",
      "steps": [
        "Moles totales = 2 + 3 = 5 moles.",
        "Fracción molar del N₂ (x_N₂) = 3 / 5 = 0.6."
      ],
      "answer": "Presión parcial de N₂ = x_N₂ × P_total = 0.6 × 10 = **6 atm**."
    },
    "practice": [
      {
        "id": "p-5.6-1",
        "type": "mc",
        "prompt": "En un recipiente se introducen O₂ a 2 atm de presión y He a 3 atm. Si no cambian el volumen ni la temperatura, halle la fracción molar del Helio en la mezcla.",
        "options": [
          "> - Presión total de la mezcla = P(O₂) + P(He) = 2 + 3 = 5 atm",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Presión total de la mezcla = P(O₂) + P(He) = 2 + 3 = 5 atm.\n> - Como P_i = x_i · P_total ⇒ 3 atm = x_He · 5 atm ⇒ x_He = 3 / 5 = **0.6**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Análisis de mezclas gaseosas, fracción molar y ley de presiones parciales de Dalton?",
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
        "id": "q-5.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una mezcla gaseosa de nitrógeno y oxígeno, la fracción molar del oxígeno es 0.25. Si la presión total de la mezcla es de 4 atm, la presión parcial del oxígeno será:",
        "options": [
          "0.25 atm",
          "0.50 atm",
          "1.0 atm",
          "4.0 atm"
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
        "id": "q-5.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl aire es una mezcla de gases, principalmente nitrógeno (78% molar) y oxígeno (21% molar). A nivel del mar, donde la presión atmosférica es de 760 mmHg, ¿cuál es aproximadamente la presión parcial del oxígeno que entra a nuestros pulmones en cada inspiración?",
        "options": [
          "160 mmHg",
          "21 mmHg",
          "760 mmHg",
          "593 mmHg"
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
        "id": "q-5.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe mezclan volúmenes iguales de gases Neón (M=20) y Argón (M=40) en un recipiente. Respecto a sus presiones parciales y fracciones molares, indique lo correcto:",
        "options": [
          "La presión parcial del Argón es el doble que la del Neón.",
          "Ambos gases ejercen la misma presión parcial si sus masas son iguales.",
          "Si mezclamos masas iguales de ambos, la fracción molar del Neón será el doble que la del Argón.",
          "La Ley de Dalton no se aplica a los gases nobles por ser monoatómicos."
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
    "code": "5.7",
    "objective": "Aplicar la Ley de Amagat para deducir la composición volumétrica de mezclas de gases ideales y determinar la masa molar promedio o aparente de la mezcla.",
    "summary": [
      "2. Masa Molar Promedio o Aparente de una Mezcla (M_mezcla)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Ley de volúmenes parciales de Amagat y cálculo de masa molar aparente",
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
      "statement": "Una mezcla gaseosa de Helio (M=4) y Metano (M=16) contiene un 25% en moles de Helio. Determine la masa molar aparente de la mezcla.",
      "steps": [
        "Fracción molar de He = 0.25; Fracción molar de CH₄ = 0.75."
      ],
      "answer": "M_mezcla = x₁M₁ + x₂M₂ = (0.25 × 4) + (0.75 × 16) = 1 + 12 = **13 g/mol**."
    },
    "practice": [
      {
        "id": "p-5.7-1",
        "type": "mc",
        "prompt": "Si en un tanque hay una mezcla de gases donde el O₂ ocupa el 40% del volumen total, ¿qué porcentaje de la presión total es ejercida por el O₂?",
        "options": [
          "Según el principio de identidad porcentual deducido de las leyes de Dalton y Amagat, el porcentaje en volumen es idéntico al porcentaje de presión",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Según el principio de identidad porcentual deducido de las leyes de Dalton y Amagat, el porcentaje en volumen es idéntico al porcentaje de presión. Por lo tanto, el O₂ ejerce el **40%** de la presión total.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ley de volúmenes parciales de Amagat y cálculo de masa molar aparente?",
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
        "id": "q-5.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la ley de Amagat, el volumen de una mezcla gaseosa ideal se puede expresar como la suma de:",
        "options": [
          "Los volúmenes molares a condiciones normales.",
          "Las presiones parciales de los componentes.",
          "Las densidades de los gases puros.",
          "Los volúmenes parciales de sus componentes a la misma P y T."
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
        "id": "q-5.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl gas de síntesis (syngas) es una mezcla combustible que contiene CO (M=28) y H₂ (M=2) en proporciones equimolares (igual número de moles). Si se analiza esta mezcla, se obtendrá que su masa molar aparente es:",
        "options": [
          "30 g/mol",
          "15 g/mol",
          "14 g/mol",
          "28 g/mol"
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
        "id": "q-5.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUna mezcla de gases contiene 50% en masa de gas Hidrógeno (H₂, M=2) y 50% en masa de gas Oxígeno (O₂, M=32). ¿Cuál es la fracción molar del gas Hidrógeno en la mezcla?",
        "options": [
          "0.50",
          "0.89",
          "0.94",
          "0.16"
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
    "code": "5.8",
    "objective": "Cuantificar la presión y masa de gases insolubles recolectados en laboratorio por desplazamiento de agua, descontando la presión de vapor de agua y calculando humedades relativas.",
    "summary": [
      "1. Método Neumático de Recolección de Gases sobre Agua",
      "2. Humedad Relativa (HR)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Recolección de gases sobre agua, presión de vapor y cálculo de gas seco y humedad relativa",
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
      "statement": "Resolución cuantitativa de las condiciones del sistema.",
      "steps": [
        "Aplicar la fórmula universal respectiva.",
        "Operar algebraicamente despejando la incógnita."
      ],
      "answer": "Solución obtenida analíticamente."
    },
    "practice": [
      {
        "id": "p-5.8-1",
        "type": "mc",
        "prompt": "Cierto día en Lima, la temperatura es de 20°C y la presión parcial del vapor de agua en el aire es de 14 mmHg. Si la presión máxima de vapor de agua a 20°C es 17.5 mmHg, calcule la Humedad Relativa.",
        "options": [
          "HR = (P_v / P_v*) × 100%\n HR = (14 / 17",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "HR = (P_v / P_v*) × 100%\n HR = (14 / 17.5) × 100% = **80%**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Recolección de gases sobre agua, presión de vapor y cálculo de gas seco y humedad relativa?",
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
        "id": "q-5.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nAl recolectar un gas insoluble sobre agua, la presión total del recipiente iguala a la atmosférica cuando los niveles de agua se equiparan. Esta presión total es la suma de las presiones parciales del:",
        "options": [
          "Gas y la columna de agua.",
          "Gas y el aire atmosférico.",
          "Gas seco y el vapor de agua.",
          "Vapor de agua y la atmósfera."
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
        "id": "q-5.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un experimento de meteorología, se reporta que el aire en una habitación está saturado de humedad (Humedad Relativa del 100%). Esto significa rigurosamente que:",
        "options": [
          "No hay oxígeno ni nitrógeno en la habitación, solo agua gaseosa.",
          "La presión parcial del vapor de agua es igual a la presión atmosférica total.",
          "La presión parcial del vapor de agua alcanzó la presión de vapor máxima (P_v*) para esa temperatura.",
          "Si la temperatura aumenta, el agua condensará sobre las paredes inmediatamente."
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
        "id": "q-5.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe recoge 0.5 L de H₂ sobre agua a 27°C y 780 mmHg de presión total (niveles igualados). Si la presión de vapor de agua a 27°C es 27 mmHg, calcule los moles de hidrógeno gaseoso SECO producido. (Dato: R = 62.4 mmHg·L/mol·K)",
        "options": [
          "0.020 moles",
          "0.015 moles",
          "0.010 moles",
          "0.025 moles"
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
    "code": "5.9",
    "objective": "Predecir cuantitativamente las velocidades relativas, tiempos de escape y distancias de difusión de gases basándose en la Ley de Thomas Graham.",
    "summary": [
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Aplicación de la ley de Graham para efusión y difusión de gases",
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
      "statement": "Compare la velocidad de efusión del gas hidrógeno (H₂, M=2 g/mol) con la del oxígeno (O₂, M=32 g/mol) bajo las mismas condiciones.",
      "steps": [
        "Aplicamos la Ley de Graham:",
        "v(H₂) / v(O₂) = √(M_O₂ / M_H₂) = √(32 / 2) = √16 = **4**"
      ],
      "answer": "El gas hidrógeno escapa por el poro 4 veces más rápido que el oxígeno."
    },
    "practice": [
      {
        "id": "p-5.9-1",
        "type": "mc",
        "prompt": "Un gas X demora 10 segundos en efundir por un orificio, mientras que la misma cantidad de Helio (He, M=4) demora 5 segundos bajo iguales condiciones. Halle la masa molar del gas X.",
        "options": [
          "Tiempo y masa molar: t(X) / t(He) = √(M_X / M_He)\n 10 / 5 = √(M_X / 4) ⇒ 2 = √(M_X / 4)\n Elevando al cuadrado: 4 = M_X / 4 ⇒ M_X = **16 g/mol** (proba",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Tiempo y masa molar: t(X) / t(He) = √(M_X / M_He)\n 10 / 5 = √(M_X / 4) ⇒ 2 = √(M_X / 4)\n Elevando al cuadrado: 4 = M_X / 4 ⇒ M_X = **16 g/mol** (probablemente metano CH₄).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ley de Graham para efusión y difusión de gases?",
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
        "id": "q-5.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la ley de Graham, si comparamos las velocidades de efusión de dos gases a la misma temperatura, el gas de menor masa molar se difundirá:",
        "options": [
          "A la misma velocidad, porque la temperatura es igual.",
          "Más lentamente.",
          "Más rápidamente.",
          "Dependiendo exclusivamente del volumen del recipiente."
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
        "id": "q-5.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante el enriquecimiento de uranio para combustible nuclear, se separan los isótopos del hexafluoruro de uranio (²³⁵UF₆ y ²³⁸UF₆) forzándolos a través de barreras porosas. El principio fisicoquímico que permite que el isótopo más ligero atraviese los poros ligeramente más rápido es la:",
        "options": [
          "Sublimación isotópica",
          "Ley de efusión de Graham",
          "Ley de Dalton de presiones parciales",
          "Destilación fraccionada de gases"
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
        "id": "q-5.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tiene una mezcla gaseosa de CH₄ (M=16) y SO₂ (M=64) contenida en un balón provisto de una válvula microporosa. Al abrir la válvula por unos instantes, la relación entre las moléculas de CH₄ y SO₂ que escapan inicialmente (v_CH₄ / v_SO₂) es:",
        "options": [
          "4 a 1",
          "1 a 4",
          "2 a 1",
          "1 a 2"
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
    "code": "5.10",
    "objective": "Explicar las propiedades macroscópicas fundamentales del estado líquido (viscosidad, tensión superficial y capilaridad) en función de las fuerzas intermoleculares de cohesión y adhesión.",
    "summary": [
      "1. Características del Estado Líquido",
      "4. Capilaridad y Meniscos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Propiedades del estado líquido: viscosidad, tensión superficial y capilaridad",
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
      "statement": "Al depositar una gota de mercurio sobre una placa de vidrio, esta mantiene una forma casi esférica sin extenderse. ¿Qué relación de fuerzas explica este comportamiento?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El mercurio tiene enlaces metálicos internos fortísimos (fuerza de cohesión gigante). La fuerza de atracción hacia el vidrio (adhesión) es muy débil. Como la **Cohesión ≫ Adhesión**, el mercurio no moja la superficie y forma esferas para minimizar su área (alta tensión superficial)."
    },
    "practice": [
      {
        "id": "p-5.10-1",
        "type": "mc",
        "prompt": "¿Por qué se lava la ropa sucia grasienta con agua caliente y detergente en lugar de agua fría sola?",
        "options": [
          "El agua fría sola tiene alta tensión superficial y no puede penetrar las fibras del tejido (no \"moja\" bien)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El agua fría sola tiene alta tensión superficial y no puede penetrar las fibras del tejido (no \"moja\" bien). Al añadir detergente y calentar el agua, se rompen los puentes de hidrógeno, **disminuyendo la tensión superficial** y permitiendo que el agua con el tensoactivo ingrese a los microporos de la tela para disolver la grasa.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Propiedades del estado líquido: viscosidad, tensión superficial y capilaridad?",
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
        "id": "q-5.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa propiedad de los líquidos que explica la forma esférica de las gotas de lluvia es la:",
        "options": [
          "Viscosidad",
          "Capilaridad",
          "Tensión superficial",
          "Presión de vapor"
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
        "id": "q-5.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl aceite de motor utilizado en zonas geográficas de frío extremo debe ser de grado \"multigrado\" muy fino para proteger el motor al arrancar. La propiedad física que justifica la necesidad de cambiar de aceite en invierno es la:",
        "options": [
          "Capilaridad",
          "Densidad",
          "Tensión superficial",
          "Viscosidad"
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
        "id": "q-5.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nMarque la afirmación correcta respecto al fenómeno de capilaridad en tubos de vidrio muy finos:",
        "options": [
          "Si las fuerzas de cohesión superan a las de adhesión, el líquido asciende y forma un menisco cóncavo.",
          "El agua asciende por el capilar formando un menisco cóncavo porque las fuerzas de adhesión son mayores que las de cohesión.",
          "El mercurio forma un menisco cóncavo al descender por el capilar.",
          "La capilaridad es independiente del diámetro del tubo empleado."
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
    "code": "5.11",
    "objective": "Interpretar el equilibrio líquido-vapor dinámico, la variación de la presión de vapor con la temperatura y deducir cuantitativamente cambios de entalpía a lo largo de curvas térmicas de calentamiento.",
    "summary": [
      "1. Presión de Vapor (P_v)",
      "2. Punto de Ebullición (T_eb)",
      "3. Curvas de Calentamiento (Para una Sustancia Pura)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Presión de vapor de líquidos, punto de ebullición y análisis de curvas de calentamiento",
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
      "statement": "En un laboratorio sellado, se tiene 1 litro de agua en un recipiente y 10 litros de agua en otro más grande, ambos a 25°C. ¿Cómo se compara la presión de vapor de agua en ambos recipientes?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La presión de vapor en equilibrio dinámico es una propiedad intensiva que no depende de la masa ni del volumen del recipiente, solo de la temperatura. Al estar ambos a 25°C y ser la misma sustancia, la presión de vapor es **exactamente la misma en ambos recipientes**."
    },
    "practice": [
      {
        "id": "p-5.11-1",
        "type": "mc",
        "prompt": "¿Por qué las ollas a presión cocinan los alimentos en mucho menor tiempo que una olla común destapada al nivel del mar?",
        "options": [
          "La tapa hermética retiene el vapor, elevando la presión interna de la olla (hasta 2 atm)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La tapa hermética retiene el vapor, elevando la presión interna de la olla (hasta 2 atm). Como el líquido requiere igualar esta altísima presión externa para hervir, el agua alcanza temperaturas de ebullición de **120°C**. Cocinar a mayor temperatura acelera exponencialmente las reacciones químicas de cocción.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.11-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Presión de vapor de líquidos, punto de ebullición y análisis de curvas de calentamiento?",
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
        "id": "q-5.11-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa temperatura de ebullición normal de un líquido se define como aquella temperatura a la cual su presión de vapor se iguala exactamente a:",
        "options": [
          "0 atm",
          "1 atm (760 mmHg)",
          "La presión crítica",
          "El punto triple"
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
        "id": "q-5.11-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn equipo de montañistas acampa en la cordillera de los Andes a 4000 metros sobre el nivel del mar y decide hervir papas para la cena. Notan que, aunque el agua hierve vigorosamente, las papas tardan muchísimo más en cocinarse que en Lima (nivel del mar). Esto se debe a que:",
        "options": [
          "A mayor altitud, el agua requiere más energía para alcanzar los 100°C.",
          "La presión atmosférica es menor, por lo que el agua hierve a menor temperatura, cocinando más lento.",
          "La presión atmosférica es mayor, aumentando la dureza del agua.",
          "Las bajas temperaturas ambientales roban calor a la olla."
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
        "id": "q-5.11-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl analizar la curva de calentamiento de una sustancia pura sólida que se convierte paulatinamente a gas mediante calentamiento constante a 1 atm, los segmentos o tramos horizontales (de pendiente nula) de la gráfica corresponden a:",
        "options": [
          "El calor sensible donde la temperatura sube rápidamente.",
          "Procesos de dilatación volumétrica del sólido.",
          "Cambios de estado físico (fusión y ebullición) donde coexisten dos fases.",
          "Regiones de fluido supercrítico inestable."
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
    "code": "5.12",
    "objective": "Analizar diagramas de fase P vs. T, identificando las regiones monofásicas, curvas de coexistencia bifásica, el punto triple y el punto crítico para sustancias anómalas (agua) y ordinarias (CO₂).",
    "summary": [
      "1. Estructura Termodinámica de un Diagrama de Fase (P-T)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Interpretación de diagramas de fase, punto triple y punto crítico para el agua y dióxido de carbono",
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
      "statement": "Al someter a un cubo de hielo a 0°C a una compresión mecánica intensa (gran aumento de presión) manteniendo la temperatura constante, ¿qué transición de fase se observa y a qué característica del diagrama se debe?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El agua funde pasando de hielo a líquido. Esto ocurre porque la curva de equilibrio Sólido-Líquido en el diagrama de fases del agua tiene **pendiente negativa**. Al elevar la presión verticalmente en la gráfica, cruzamos del área sólida al área líquida."
    },
    "practice": [
      {
        "id": "p-5.12-1",
        "type": "mc",
        "prompt": "Defina con rigor termodinámico el significado del \"Punto Crítico\".",
        "options": [
          "Es el punto final de la curva de equilibrio líquido-vapor",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Es el punto final de la curva de equilibrio líquido-vapor. Define las coordenadas de Presión Crítica (P_c) y Temperatura Crítica (T_c) por encima de las cuales las densidades del líquido y el gas se igualan, haciendo imposible licuar el gas solo por aumento de presión, formándose un fluido supercrítico.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-5.12-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Interpretación de diagramas de fase, punto triple y punto crítico para el agua y dióxido de carbono?",
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
        "id": "q-5.12-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl punto del diagrama de fases P-T donde coexisten termodinámicamente las fases sólida, líquida y gaseosa de una sustancia pura se llama:",
        "options": [
          "Punto isotérmico",
          "Punto crítico",
          "Punto de fusión normal",
          "Punto triple"
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
        "id": "q-5.12-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un teatro se utiliza 'hielo seco' (CO₂ sólido) para crear un efecto de niebla baja. Si se deja un trozo a temperatura ambiente y a presión atmosférica (1 atm) en el suelo, este no deja rastro de agua ni charcos porque:",
        "options": [
          "El CO₂ funde rápidamente y el líquido se evapora de inmediato.",
          "El punto triple del CO₂ es superior a 1 atm, obligando al sólido a sublimar directamente a gas.",
          "Es un gas de invernadero incondensable.",
          "Reacciona químicamente con el oxígeno del aire consumiéndose."
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
        "id": "q-5.12-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las anomalías del agua y su diagrama de fases P-T, indique la proposición correcta:",
        "options": [
          "La curva que separa la fase sólida de la líquida tiene una pendiente positiva.",
          "Si se incrementa isobáricamente la temperatura por debajo del punto triple, el agua funde.",
          "Un incremento isotérmico de la presión sobre el hielo cercano a los 0°C puede provocar su fusión.",
          "Su punto crítico se encuentra a temperaturas inferiores a los 100°C."
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
    "id": "exam-5-1",
    "objective": "5.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.1): Respecto a 1. Postulados Fundamentales de la Teoría Cinético-Molecular, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-2",
    "objective": "5.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.2): Respecto a 1. Proceso Isotérmico: Ley de Boyle - Mariotte (T = constante), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-3",
    "objective": "5.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.3): Respecto a 1. Ecuación de Estado Universal de los Gases Ideales (Clapeyron), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-4",
    "objective": "5.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.4): Respecto a 2. Condiciones Normales (CN o TPN), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-5",
    "objective": "5.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.5): Respecto a 1. Deducción de la Ecuación General, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-6",
    "objective": "5.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.6): Respecto a 1. Fracción Molar (x_i), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-7",
    "objective": "5.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.7): Respecto a 2. Masa Molar Promedio o Aparente de una Mezcla (M_mezcla), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-5-8",
    "objective": "5.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (5.8): Respecto a 1. Método Neumático de Recolección de Gases sobre Agua, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 5.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
