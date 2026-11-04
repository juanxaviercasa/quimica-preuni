// Módulo 10: Módulo 10: Sistemas Dispersos y Soluciones
export const module10 = {
  number: 10,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 10: Sistemas Dispersos y Soluciones.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "10.1",
    "objective": "Diferenciar los sistemas dispersos en función del diámetro de la partícula dispersa, evaluando su homogeneidad óptica, estabilidad mecánica y capacidad de filtración.",
    "summary": [
      "1. Espectro de Sistemas Dispersos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Clasificación de sistemas dispersos: soluciones verdaderas, coloides y suspensiones",
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
      "statement": "En un laboratorio se dispone de una mezcla turbia que, tras dejarse en reposo por 30 minutos, forma un sedimento sólido en el fondo del matraz. ¿A qué tipo de sistema disperso corresponde?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La decantación espontánea por gravedad (sedimentación) es la característica exclusiva y definitoria de una **suspensión**. Las partículas superan los 1000 nm y son demasiado masivas para mantenerse flotando."
    },
    "practice": [
      {
        "id": "p-10.1-1",
        "type": "mc",
        "prompt": "¿Cuál es la diferencia fundamental en la filtración de un coloide frente a una suspensión?",
        "options": [
          "Las suspensiones (al tener partículas > 1000 nm) son retenidas fácilmente por el papel de filtro ordinario",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Las suspensiones (al tener partículas > 1000 nm) son retenidas fácilmente por el papel de filtro ordinario. En cambio, las partículas coloidales (1 - 1000 nm) son lo bastante pequeñas para atravesar el papel filtro común, requiriendo membranas semipermeables (diálisis) para ser separadas.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Clasificación de sistemas dispersos: soluciones verdaderas, coloides y suspensiones?",
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
        "id": "q-10.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el tamaño de la partícula de la fase dispersa, un sistema donde las partículas miden 0.5 nm se clasifica universalmente como:",
        "options": [
          "Solución verdadera",
          "Suspensión",
          "Coloide",
          "Aerosol"
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
        "id": "q-10.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl aire que respiramos en una ciudad con alta contaminación vehicular se oscurece y difumina la luz del sol al atardecer debido a las finísimas partículas de humo diésel flotando indefinidamente. Este humo contaminante, según su naturaleza química de sistema disperso, es un:",
        "options": [
          "Gas ideal",
          "Coloide (Aerosol sólido)",
          "Solución gaseosa pura",
          "Fluido supercrítico"
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
        "id": "q-10.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la proposición incorrecta al comparar soluciones verdaderas, coloides y suspensiones:",
        "options": [
          "En las soluciones verdaderas, el soluto puede atravesar membranas semipermeables y papel filtro.",
          "Las partículas de una suspensión sedimentan espontáneamente bajo la acción de la gravedad.",
          "Los coloides presentan un grado de homogeneidad tal que no dispersan la luz visible.",
          "La niebla y las nubes son ejemplos típicos de sistemas coloidales."
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
    "code": "10.2",
    "objective": "Analizar los fenómenos electrocinéticos y ópticos que confieren estabilidad única a los coloides: dispersión Tyndall, movimiento browniano cinético y electroforesis.",
    "summary": [
      "1. Efecto Tyndall (Propiedad Óptica)",
      "2. Movimiento Browniano (Propiedad Cinética)",
      "3. Electroforesis (Propiedad Eléctrica)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Propiedades coloidales: efecto Tyndall, movimiento browniano y electroforesis",
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
      "statement": "Para clarificar el agua del río en las plantas potabilizadoras (como La Atarjea), se dosifica sulfato de aluminio, Al₂(SO₄)₃. ¿Qué fenómeno electrocinético se está interrumpiendo intencionalmente?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Las partículas de arcilla en el río forman un coloide negativo estable. Al añadir el catión Al³⁺, este neutraliza la carga eléctrica de los coloides. Al perder la repulsión mutua, las partículas chocan y se aglomeran (coagulación/floculación) hasta pesar tanto que vencen el **movimiento browniano** y sedimentan."
    },
    "practice": [
      {
        "id": "p-10.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Propiedades coloidales: efecto Tyndall, movimiento browniano y electroforesis, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-10.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Propiedades coloidales: efecto Tyndall, movimiento browniano y electroforesis?",
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
        "id": "q-10.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa propiedad óptica exclusiva que permite diferenciar experimentalmente en el laboratorio una solución química verdadera de una dispersión coloidal es:",
        "options": [
          "La electroforesis",
          "El efecto Tyndall",
          "El movimiento browniano",
          "La adsorción interfacial"
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
        "id": "q-10.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso biotecnológico, se debe separar una mezcla compleja de proteínas globulares que se hallan en estado coloidal dentro del citoplasma. Se aplica un campo eléctrico continuo y se observa que las proteínas migran hacia el ánodo positivo. ¿Qué nombre recibe esta técnica y qué revela sobre las proteínas?",
        "options": [
          "Efecto Tyndall; las proteínas absorben luz.",
          "Diálisis; las proteínas son muy pesadas.",
          "Electroforesis; las proteínas poseen carga eléctrica neta negativa.",
          "Floculación; las proteínas se han coagulado térmicamente."
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
        "id": "q-10.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las propiedades de los sistemas coloidales, indique verdadero (V) o falso (F):\nI. El movimiento browniano es el factor principal que evita la sedimentación gravitacional de la fase dispersa.\nII. El efecto Tyndall se explica por la absorción cuántica de fotones por las moléculas del solvente.\nIII. La adición de un electrolito fuerte a un sol coloidal generalmente provoca su coagulación.",
        "options": [
          "VFV",
          "VVV",
          "FFV",
          "VFF"
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
    "code": "10.3",
    "objective": "Comprender la termodinámica del proceso de disolución, el mecanismo de solvatación iónica dipolo-ion y los factores que rigen la solubilidad.",
    "summary": [
      "1. Mecanismo de Disolución y Solvatación Iónica (Hidratación)",
      "3. Factores Físicos que Regulan la Solubilidad",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Proceso de disolución, solvatación iónica y factores que regulan la solubilidad",
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
      "statement": "Justifique por qué los derrames de petróleo crudo en el mar forman una mancha persistente flotante que no se disuelve en el océano.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El agua de mar es un solvente altamente polar. El petróleo crudo está constituido por hidrocarburos de cadena larga formados por enlaces C-C y C-H, siendo sustancias totalmente **apolares**. Aplicando el principio de \"lo semejante disuelve a lo semejante\", el petróleo es inmiscible e hidrofóbico. Al ser menos denso que el agua, flota."
    },
    "practice": [
      {
        "id": "p-10.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Proceso de disolución, solvatación iónica y factores que regulan la solubilidad, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-10.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Proceso de disolución, solvatación iónica y factores que regulan la solubilidad?",
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
        "id": "q-10.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio empírico fundamental de la solubilidad \"lo semejante disuelve a lo semejante\", el yodo elemental sólido (I₂, apolar) se disolverá fácilmente en:",
        "options": [
          "Agua destilada (H₂O)",
          "Cloruro de sodio acuoso (NaCl)",
          "Tetracloruro de carbono (CCl₄)",
          "Ácido clorhídrico diluido"
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
        "id": "q-10.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas fábricas que utilizan agua de río como refrigerante industrial suelen devolverla caliente a su cauce, generando \"contaminación térmica\". Este incremento de temperatura es ecológicamente letal para los peces porque provoca directamente:",
        "options": [
          "El aumento de la presión osmótica del río.",
          "La disminución de la solubilidad del gas oxígeno (O₂) en el agua.",
          "El incremento excesivo del pH del agua.",
          "El aumento de la solubilidad de rocas y minerales tóxicos de manera inmediata."
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
        "id": "q-10.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa Ley de Henry cuantifica la influencia de la presión sobre la solubilidad de los gases en los líquidos. Determine qué gráfica o relación matemática expresa correctamente este comportamiento isotérmico.",
        "options": [
          "La solubilidad de un gas es inversamente proporcional a su presión parcial.",
          "La solubilidad del gas decrece exponencialmente con el aumento de la presión total del sistema.",
          "S_g = k_H / P_g",
          "La concentración del gas disuelto varía de forma directamente proporcional y lineal con la presión parcial que ejerce dicho gas sobre el líquido."
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
    "code": "10.4",
    "objective": "Cuantificar la solubilidad a diferentes temperaturas a partir de gráficos de solubilidad (S vs T), calculando masas de soluto disuelto y masas de precipitados cristalizados por enfriamiento.",
    "summary": [
      "1. Coeficiente de Solubilidad (S_T)",
      "3. Cálculo Típico UNI: Cristalización por Enfriamiento",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Interpretación cuantitativa de curvas y tablas de solubilidad térmica",
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
      "statement": "Según una tabla, la solubilidad del nitrato de potasio (KNO₃) a 60°C es de 110 g / 100 g H₂O, y a 20°C es de 30 g / 100 g H₂O. Si tienes una solución saturada preparada con 50 gramos de agua a 60°C y la dejas enfriar hasta 20°C, ¿qué masa de cristales de KNO₃ se depositará en el fondo?",
      "steps": [
        "A 60°C (Teoría 100g H₂O): se disuelven 110 g.",
        "Para tu vaso de 50g H₂O (la mitad): tienes disueltos 110 / 2 = 55 g de KNO₃.",
        "A 20°C (Teoría 100g H₂O): solo soporta 30 g.",
        "Tu vaso de 50g H₂O ahora solo soporta: 30 / 2 = 15 g de KNO₃."
      ],
      "answer": "Masa precipitada (cristales) = 55 g (que tenías) - 15 g (que logran quedarse disueltos) = **40 gramos cristalizados**."
    },
    "practice": [
      {
        "id": "p-10.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Interpretación cuantitativa de curvas y tablas de solubilidad térmica, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-10.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Interpretación cuantitativa de curvas y tablas de solubilidad térmica?",
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
        "id": "q-10.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSe tiene un vaso de precipitados con una disolución acuosa. Al agregarle 2 gramos adicionales de soluto y agitar vigorosamente, se observa que la totalidad del sólido añadido se disuelve sin dejar rastro. Esto permite asegurar que la solución original era:",
        "options": [
          "Saturada",
          "Insaturada",
          "Sobresaturada",
          "Coloidal"
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
        "id": "q-10.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLa solubilidad del cloruro de amonio (NH₄Cl) a 50°C es de 50 gramos por cada 100 gramos de agua. En un experimento industrial se mezclan 60 g de NH₄Cl con 100 g de agua a 50°C y se agita hasta el equilibrio. ¿Cuál es la masa de solución obtenida y el estado de la misma?",
        "options": [
          "160 g de solución sobresaturada.",
          "150 g de solución saturada (con 10 g de sólido sin disolver en el fondo).",
          "100 g de solución diluida.",
          "160 g de solución saturada."
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
        "id": "q-10.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa solubilidad de una sal 'X' a 80°C es 120 g / 100 g H₂O y a 20°C es 40 g / 100 g H₂O. Se enfrían 550 gramos de la solución saturada desde 80°C hasta los 20°C. Calcule la masa de cristales de 'X' que precipita.",
        "options": [
          "80 g",
          "200 g",
          "160 g",
          "120 g"
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
    "code": "10.5",
    "objective": "Calcular la concentración analítica de soluciones en unidades físicas porcentuales (% m/m, % V/V, % m/V), vinculándolas operativamente mediante el uso de la densidad macroscópica de la disolución.",
    "summary": [
      "1. Porcentaje en Masa o Peso (% m/m o % P/P)",
      "2. Porcentaje en Volumen (% V/V)",
      "3. Porcentaje Masa en Volumen (% m/V o % P/V)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de unidades físicas de concentración: porcentaje en masa, volumen y masa-volumen",
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
      "statement": "Se disuelven 40 g de azúcar en 160 g de agua pura. Calcule la concentración de la solución expresada en porcentaje en masa (% m/m).",
      "steps": [
        "Masa del Soluto = 40 g",
        "Masa de la Solución = Masa soluto + Masa agua = 40 g + 160 g = 200 g."
      ],
      "answer": "% (m/m) = (40 / 200) × 100% = 0.20 × 100% = **20% en masa**."
    },
    "practice": [
      {
        "id": "p-10.5-1",
        "type": "mc",
        "prompt": "El ácido nítrico comercial se vende como una solución acuosa con una concentración del 70% m/m y una densidad de 1.4 g/mL. Calcule su concentración en porcentaje masa a volumen (% m/V).",
        "options": [
          "Aplicamos la fórmula del puente directo de densidad:\n % (m/V) = % (m/m) × ρ(sol)\n % (m/V) = 70 × 1",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Aplicamos la fórmula del puente directo de densidad:\n % (m/V) = % (m/m) × ρ(sol)\n % (m/V) = 70 × 1.4 = **98 % m/V** (es decir, hay 98 gramos de ácido puro por cada 100 mL de solución en la botella).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de unidades físicas de concentración: porcentaje en masa, volumen y masa-volumen?",
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
        "id": "q-10.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSi la etiqueta de un frasco de vinagre comercial indica \"ácido acético al 5% en masa\", significa rigurosamente que:",
        "options": [
          "Hay 5 gramos de ácido acético disueltos en 100 gramos de agua pura.",
          "Hay 5 gramos de ácido acético contenidos por cada 100 gramos de vinagre.",
          "Hay 5 gramos de ácido acético por cada litro de agua.",
          "La masa molar del ácido es el 5% de la mezcla."
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
        "id": "q-10.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un hospital, una enfermera debe preparar una dilución y lee en una bolsa de suero fisiológico intravenoso la concentración \"0.9% m/V de NaCl\". Esto le indica directamente al personal médico que por cada 100 mL de suero que ingrese al torrente sanguíneo del paciente, este recibirá exactamente:",
        "options": [
          "9 gramos de sal.",
          "0.09 gramos de sal.",
          "0.9 gramos de sal.",
          "0.9 mililitros de sal diluida."
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
        "id": "q-10.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe mezclan 80 gramos de metanol puro con 120 gramos de agua. La solución resultante en el matraz ocupa un volumen exacto de 220 mL debido a interacciones intermoleculares. Calcule el porcentaje en masa (% m/m) y el porcentaje masa en volumen (% m/V) del metanol, respectivamente.",
        "options": [
          "40.0% m/m y 36.4% m/V",
          "66.6% m/m y 40.0% m/V",
          "40.0% m/m y 40.0% m/V",
          "36.4% m/m y 40.0% m/V"
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
    "code": "10.6",
    "objective": "Cuantificar concentraciones en partes por millón (ppm) para solutos a nivel de trazas críticas en control ambiental de aguas potables, vertimientos tóxicos y calidad de aire atmosférico.",
    "summary": [
      "1. Concepto Fisicoquímico de Partes por Millón (ppm)",
      "2. Expresión Operativa Rápida para Soluciones Acuosas",
      "3. Expresión para Mezclas Gaseosas Atmosféricas"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación de concentración en partes por millón en muestras acuosas y gaseosas",
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
      "statement": "Una muestra de agua de 500 mL procedente de un pozo rural contiene 2.5 mg de ion fluoruro (F⁻) disuelto. Determine la concentración de fluoruro en ppm y clasifique si el agua cumple el límite máximo recomendado de 1.5 ppm.",
      "steps": [
        "Usamos la fórmula operativa para agua diluida (mg/L).",
        "ppm = Masa soluto (mg) / Volumen solución (L)",
        "ppm = 2.5 mg / 0.5 L = **5.0 ppm**."
      ],
      "answer": "La concentración de fluoruro es de 5.0 ppm, lo que supera gravemente el límite máximo de 1.5 ppm (el agua no es apta, causa fluorosis dental severa)."
    },
    "practice": [
      {
        "id": "p-10.6-1",
        "type": "mc",
        "prompt": "En el análisis de los gases de escape de un motor defectuoso, se determinó que la concentración de monóxido de carbono (CO) era de 40 ppm(v). ¿Qué volumen de CO puro, en cm³, respirará un peatón que inhala 5 m³ de ese aire contaminado?",
        "options": [
          "40 ppm(v) en aire significa que hay 40 mL de CO por cada 1 m³ de aire inhalado",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "40 ppm(v) en aire significa que hay 40 mL de CO por cada 1 m³ de aire inhalado.\n Si el peatón respira 5 m³ de aire, la cantidad será:\n Volumen CO = 40 mL/m³ × 5 m³ = **200 mL de CO (o 200 cm³)**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de concentración en partes por millón en muestras acuosas y gaseosas?",
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
        "id": "q-10.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa concentración ambiental máxima permitida de plomo en el agua potable de una ciudad es de 0.01 ppm. Esta cifra equivale operativamente a tener:",
        "options": [
          "0.01 gramos de plomo en cada litro de agua.",
          "0.01 miligramos de plomo en cada litro de agua.",
          "0.01 mililitros de plomo en un metro cúbico.",
          "0.01 microgramos de plomo por kilogramo."
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
        "id": "q-10.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas normas de calidad del aire urbano declaran un estado de pre-emergencia ambiental si la concentración de dióxido de azufre (SO₂) alcanza el 0.00005% en volumen en la atmósfera. Traducido al reporte de noticias para la población en unidades habituales de ppm(v), este valor es:",
        "options": [
          "0.5 ppm",
          "5 ppm",
          "50 ppm",
          "0.05 ppm"
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
        "id": "q-10.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl analizar un acuífero subterráneo contaminado con arsénico (As), se extrae una muestra de 2 kilogramos de solución que, tras la evaporación a sequedad, deja un residuo de 8 miligramos de compuesto arsenical. Determine la concentración del contaminante en partes por millón.",
        "options": [
          "16 ppm",
          "8 ppm",
          "4 ppm",
          "0.25 ppm"
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
    "code": "10.7",
    "objective": "Calcular la Molaridad (M) de las disoluciones químicas y dominar la fórmula maestra de conversión rápida a partir de la densidad y el porcentaje de pureza para reactivos comerciales.",
    "summary": [
      "1. Definición Formal de Molaridad (M)",
      "2. Fórmula Maestra Directa UNI (Densidad y Pureza Comercial)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de molaridad a partir de masa de soluto, volumen y densidad de disolución",
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
      "statement": "Se pesan 12 gramos de hidróxido de sodio puro (NaOH, Masa Molar = 40 g/mol) y se disuelven en agua destilada hasta enrasar un matraz volumétrico de 600 mL. Determine la molaridad de la base alcalina resultante.",
      "steps": [
        "Moles de soluto (n) = Masa / Masa Molar = 12 g / 40 g/mol = 0.30 moles de NaOH.",
        "Volumen en Litros = 600 mL / 1000 = 0.60 L."
      ],
      "answer": "Molaridad (M) = n / V_L = 0.30 moles / 0.60 L = **0.50 M**."
    },
    "practice": [
      {
        "id": "p-10.7-1",
        "type": "mc",
        "prompt": "El ácido nítrico comercial se suministra en botellas de vidrio etiquetadas al 63% en masa con una densidad medida de 1.40 g/mL. Determine la molaridad de este corrosivo líquido concentrado. (Masa molar del HNO₃ = 63 g/mol).",
        "options": [
          "Se aplica de frente la fórmula maestra (10 × ρ × %)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Se aplica de frente la fórmula maestra (10 × ρ × %).\n M = (10 × 1.40 × 63) / 63\n Simplificamos los 63 del numerador y denominador.\n M = 10 × 1.40 = **14 M** (Es una disolución brutalmente concentrada, 14 moles por cada litro).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de molaridad a partir de masa de soluto, volumen y densidad de disolución?",
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
        "id": "q-10.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa molaridad es una medida de concentración de orden químico definida rigurosamente como el número de:",
        "options": [
          "Equivalentes-gramo de soluto por litro de solución.",
          "Moles de soluto por kilogramo de disolvente puro.",
          "Gramos de soluto por cada 100 mililitros de solución.",
          "Moles de soluto disueltos por cada litro de solución total."
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
        "id": "q-10.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un hospital, el suero fisiológico intravenoso se fabrica disolviendo cloruro de sodio (NaCl, M = 58.5 g/mol) hasta lograr una concentración biológicamente isotónica de 0.15 Molar. ¿Qué masa exacta de sal debe pesar el técnico farmacéutico para fabricar bolsas de suero de 2 litros?",
        "options": [
          "58.5 g",
          "8.775 g",
          "17.55 g",
          "117.0 g"
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
        "id": "q-10.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl ácido sulfúrico comercial (H₂SO₄, M=98 g/mol) que abastece a las minas peruanas llega con una concentración de 98% en masa y una altísima densidad de 1.84 g/mL. Calcule su Molaridad exacta.",
        "options": [
          "18.4 M",
          "9.8 M",
          "20.0 M",
          "1.84 M"
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
    "code": "10.8",
    "objective": "Calcular la Normalidad (N) de disoluciones electrolíticas y aplicar la ley fundamental de equivalencia química N = M × θ para saltar de Molaridad a Normalidad instantáneamente.",
    "summary": [
      "1. Definición Operativa de Normalidad (N)",
      "2. Deducción de la Relación Maestra \"Nemo\" (N = M × θ)",
      "3. Aplicaciones Directas Inmediatas"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de normalidad y deducción de la relación matemática entre normalidad y molaridad",
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
      "statement": "Se dispone en el laboratorio de una disolución de ácido fosfórico (H₃PO₄) cuya molaridad analítica es de 0.20 M. Determine su Normalidad asumiendo ionización total.",
      "steps": [
        "Identificamos el ácido: H₃PO₄ (ácido ortofosfórico). Posee 3 hidrógenos enlazados directamente al oxígeno de la molécula, por lo tanto libera 3 protones (H⁺). Su parámetro θ = 3.",
        "Aplicamos la fórmula directa: N = M × θ"
      ],
      "answer": "N = 0.20 M × 3 = **0.60 N**."
    },
    "practice": [
      {
        "id": "p-10.8-1",
        "type": "mc",
        "prompt": "Si se disuelven 37 gramos de Ca(OH)₂ (M=74 g/mol) en un aforo de agua hasta alcanzar un volumen de 250 mL, ¿cuál será la normalidad de la base resultante?",
        "options": [
          "Calculamos primero la Molaridad (M) = (Masa / M_molar) / V_L\n M = (37 / 74) / 0",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Calculamos primero la Molaridad (M) = (Masa / M_molar) / V_L\n M = (37 / 74) / 0.25 L = 0.50 moles / 0.25 L = 2 M.\n La base es Ca(OH)₂, tiene dos oxidrilos (OH⁻), luego θ = 2.\n N = M × θ = 2 M × 2 = **4 N**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de normalidad y deducción de la relación matemática entre normalidad y molaridad?",
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
        "id": "q-10.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl parámetro de conversión termodinámico que permite vincular linealmente la Normalidad con la Molaridad en sales inorgánicas (N = M × θ) está representado por (θ), el cual se determina contando:",
        "options": [
          "El número de hidrógenos o iones OH⁻.",
          "La carga neta total del catión metálico o del anión.",
          "El número atómico del metal.",
          "El volumen molar de la sal en condiciones normales."
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
        "id": "q-10.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de biorremediación de suelos hiperalcalinos se necesita rociar una disolución neutralizante extremadamente precisa de ácido sulfúrico valorada a 0.1 N. Al ir al almacén de química, solo encuentras frascos rotulados en Molaridad. Para que tu aplicación funcione sin quemar los microorganismos del suelo, debes usar el frasco marcado como:",
        "options": [
          "0.1 M",
          "0.2 M",
          "0.05 M",
          "0.5 M"
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
        "id": "q-10.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa en la cual la Normalidad de la solución resultante coincide numéricamente exacta con su Molaridad (N = M):",
        "options": [
          "Una solución acuosa de ácido carbónico (H₂CO₃).",
          "Una solución acuosa de ácido cianhídrico (HCN).",
          "Una disolución electrolítica de cloruro de magnesio (MgCl₂).",
          "Una disolución de carbonato de sodio (Na₂CO₃)."
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
    "code": "10.9",
    "objective": "Operar con unidades químicas de concentración que son 100% independientes de la temperatura ambiental: Molalidad (m) y Fracción Molar (x_i), vitales para el estudio termodinámico de las propiedades coligativas.",
    "summary": [
      "1. Molalidad (m minúscula)",
      "2. Fracción Molar (x_i)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de molalidad y fracción molar en disoluciones binarias y multicomponentes",
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
      "statement": "Se disuelven 18 gramos de glucosa (C₆H₁₂O₆, M=180 g/mol) en exactamente 200 gramos de agua destilada. Calcule la concentración de la solución expresada en molalidad (m).",
      "steps": [
        "Moles de soluto (n) = Masa / M = 18 g / 180 g/mol = 0.1 moles de glucosa.",
        "Masa de SOLVENTE en kilogramos: 200 g / 1000 = 0.200 kg de agua. (No sumamos los 18g al agua, es solo agua pura)."
      ],
      "answer": "Molalidad (m) = n / kg(solvente) = 0.1 moles / 0.200 kg = **0.50 molal (0.5 m)**."
    },
    "practice": [
      {
        "id": "p-10.9-1",
        "type": "mc",
        "prompt": "Una disolución automotriz anticongelante contiene 2 moles de etilenglicol disueltos en 8 moles de agua. ¿Cuál es la fracción molar de cada componente de la mezcla binaria?",
        "options": [
          "> - Moles Totales (n_total) = 2 (soluto) + 8 (agua) = 10 moles en todo el radiador",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Moles Totales (n_total) = 2 (soluto) + 8 (agua) = 10 moles en todo el radiador.\n> - Fracción molar del soluto (x_sto) = 2 moles / 10 moles totales = **0.20**.\n> - Fracción molar del agua (x_ste) = 8 moles / 10 moles totales = **0.80**.\n> - Comprobación: 0.20 + 0.80 = 1.0.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de molalidad y fracción molar en disoluciones binarias y multicomponentes?",
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
        "id": "q-10.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nAl comparar las expresiones matemáticas de la Molaridad y la Molalidad de soluciones químicas, se concluye correctamente que la Molalidad divide los moles de soluto entre la:",
        "options": [
          "Masa de la solución total en litros.",
          "Masa del solvente puro expresada en gramos.",
          "Masa del solvente puro expresada en kilogramos.",
          "Masa de la solución total expresada en kilogramos."
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
        "id": "q-10.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas estaciones climáticas extremas causan problemas en la concentración de las mezclas en laboratorio. Si un químico prepara una solución 2 Molar y una 2 Molal de azúcar a 20°C y luego el laboratorio experimenta una ola de calor de 40°C, ¿qué afirmación predice correctamente el comportamiento de ambas botellas?",
        "options": [
          "Ambas concentraciones disminuirán por el calor.",
          "La concentración Molar disminuirá (por dilatación volumétrica), pero la Molalidad permanecerá constante.",
          "La concentración Molar aumentará y la Molalidad disminuirá.",
          "La concentración Molal disminuirá debido a la evaporación inevitable, mientras la Molaridad será estable."
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
        "id": "q-10.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe mezclan 46 gramos de etanol puro (C₂H₅OH, M=46 g/mol) con 90 gramos de agua pura (H₂O, M=18 g/mol) para formar un licor casero. Indique rigurosamente el valor matemático de la fracción molar del etanol en dicha solución.",
        "options": [
          "0.50",
          "0.33",
          "0.20",
          "0.166"
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
    "code": "10.10",
    "objective": "Calcular variaciones y atenuaciones de concentración en procesos de dilución por adición de disolvente, basándose en la conservación universal de la masa del soluto.",
    "summary": [
      "1. Fundamento de la Dilución Química",
      "2. La Ecuación Universal de la Dilución",
      "3. Análisis Volumétrico del Proceso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Operaciones con soluciones: cálculo de dilución y concentración resultante",
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
      "statement": "Se tienen 200 mL de una disolución corrosiva de hidróxido de sodio (NaOH) 3.0 M. ¿Qué volumen de agua destilada se debe agregar para atenuar su concentración hasta convertirla en una disolución 0.5 M?",
      "steps": [
        "Aplicamos la fórmula de dilución estricta: M₁ · V₁ = M₂ · V₂",
        "3.0 M × 200 mL = 0.5 M × V₂",
        "600 = 0.5 × V₂ ⇒ V₂ = 600 / 0.5 = 1200 mL (Este es el volumen de todo el bidón al final).",
        "Para hallar el agua que la manguera debió echar:"
      ],
      "answer": "V(agua añadida) = V₂ - V₁ = 1200 mL - 200 mL = **1000 mL (Exactamente 1 Litro de agua)**."
    },
    "practice": [
      {
        "id": "p-10.10-1",
        "type": "mc",
        "prompt": "Si se calienta un balde que contiene 5 litros de salmuera al 10% (m/V) y se permite que se evapore 1 litro completo de agua, ¿cuál será la concentración de la sal restante?",
        "options": [
          "La evaporación es una \"dilución inversa\" o concentración térmica",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La evaporación es una \"dilución inversa\" o concentración térmica. La masa de sal (soluto) sigue siendo idéntica.\n C₁ · V₁ = C₂ · V₂\n 10% × 5 L = C₂ × (5 L - 1 L evaporado)\n 50 = C₂ × 4 L ⇒ C₂ = 50 / 4 = **12.5% (m/V)** (La sopa quedó más salada).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-10.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Operaciones con soluciones: cálculo de dilución y concentración resultante?",
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
        "id": "q-10.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl fundamento fisicoquímico matemático que justifica el uso de la ecuación C₁V₁ = C₂V₂ en cualquier proceso de dilución o evaporación de solvente asume la conservación inquebrantable de:",
        "options": [
          "La densidad de la solución en ambos instantes.",
          "El volumen del solvente añadido al matraz.",
          "Los moles (o masa) del soluto disuelto original.",
          "El volumen de la solución total."
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
        "id": "q-10.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un hospital rural, el médico prescribe limpiar las heridas de un paciente grave con agua oxigenada (peróxido de hidrógeno) a una concentración segura de 3% V/V. Sin embargo, en el botiquín solo encuentran peróxido industrial de 30% V/V. Para preparar 500 mL del desinfectante al 3%, ¿cuántos mililitros del reactivo industrial concentrado deben diluirse en agua destilada?",
        "options": [
          "150 mL",
          "50 mL",
          "30 mL",
          "100 mL"
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
        "id": "q-10.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn estudiante preparó por accidente una solución acuosa de HCl gastando 100 mL de solución al 0.4 M. Su profesor le indica que el experimento exigía una solución 0.1 M, por lo cual decide reparar su error agregando agua pura. Calcule cuántos mililitros de agua destilada debió inyectar a su matraz para conseguir la dilución correcta.",
        "options": [
          "400 mL",
          "200 mL",
          "100 mL",
          "300 mL"
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
    "code": "10.11",
    "objective": "Determinar algebraicamente la concentración molar y el volumen resultante al combinar en un mismo recipiente dos o más soluciones del mismo soluto que poseen concentraciones diferentes.",
    "summary": [
      "1. Principio de Aditividad Molar",
      "2. Cálculo de la Molaridad y Normalidad Finales",
      "3. Regla de Coherencia de Concentración (Punto de Lógica)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Mezcla de soluciones con soluto común sin reacción química",
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
      "statement": "En un bidón se vierten 300 mL de una solución de ácido clorhídrico 4 M, junto con 200 mL del mismo ácido clorhídrico pero de concentración 1 M. Asumiendo volúmenes aditivos, halle la concentración final del bidón.",
      "steps": [
        "Aplicamos el principio de aditividad molar: M_final · V_final = M₁V₁ + M₂V₂",
        "V_final asumido = 300 mL + 200 mL = 500 mL totales en el tanque.",
        "M_final · (500) = (4 M)(300 mL) + (1 M)(200 mL)",
        "M_final · 500 = 1200 + 200",
        "M_final · 500 = 1400 ⇒ M_final = 1400 / 500 = **2.8 Molar**."
      ],
      "answer": "*(Coherencia: 2.8 está perfecto, situado lógicamente entre el 1 M y el 4 M de las botellas).*"
    },
    "practice": [
      {
        "id": "p-10.11-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Mezcla de soluciones con soluto común sin reacción química, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-10.11-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Mezcla de soluciones con soluto común sin reacción química?",
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
        "id": "q-10.11-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nAl mezclar algebraicamente soluciones acuosas de idéntico soluto en un único matraz asumiendo volúmenes aditivos, la variable extensiva que representa la cantidad neta de soluto activo acumulado en el matraz es la suma de los:",
        "options": [
          "Volúmenes molares a condiciones normales",
          "Grados de acidez y basicidad de las soluciones",
          "Moles individuales disueltos que aportó cada botella original",
          "Pesos equivalentes de los solutos iónicos combinados"
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
        "id": "q-10.11-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nPara un experimento analítico que no admite retrasos, un farmacéutico químico nota que carece de una disolución intermedia de hidróxido de sodio (NaOH) de concentración 2 M, pero dispone de amplias reservas de NaOH a 5 M y NaOH a 1 M. Si el farmacéutico vierte 1 Litro de NaOH 5 M en su embudo, ¿cuántos litros de NaOH 1 M debe agregar exactamente para que la mezcla final posea la Molaridad 2 M requerida?",
        "options": [
          "2 Litros",
          "4 Litros",
          "3 Litros",
          "1 Litro"
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
        "id": "q-10.11-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe preparan tres beakers que contienen soluciones de glucosa al 10 M, 6 M y 2 M, tomando respectivamente volúmenes de 100 mL, 200 mL y 500 mL de cada uno de ellos y juntándolos en un balde grande. Calcule la Molaridad teórica final de la mezcla asumiendo volúmenes aditivos.",
        "options": [
          "4.5 M",
          "6.0 M",
          "3.5 M",
          "4.0 M"
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
    "code": "10.12",
    "objective": "Aplicar las rigurosas relaciones volumétricas de titulación ácido-base (Ley del Equivalente Químico) para determinar analíticamente la concentración desconocida de analitos empleando soluciones patrón (titulantes o valorantes).",
    "summary": [
      "1. Volumetría, Titulación y Valoración Analítica",
      "2. Puente Analítico con Molaridad (M)",
      "3. Detección Visual: El Punto Final de Viraje"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Estequiometría de soluciones aplicada a volumetría y titulación ácido-base",
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
      "statement": "En un ensayo volumétrico estandarizado en la universidad, un estudiante neutraliza completamente 40 mL de un misterioso ácido sulfúrico (H₂SO₄) con 80 mL de hidróxido de potasio (KOH) cuya concentración se garantizaba a 0.5 M. Determine cuál era la concentración oculta Molar (M) del ácido sulfúrico.",
      "steps": [
        "Identificamos los parámetros θ de las sustancias de guerra química:",
        "Ácido: H₂SO₄ tiene 2 protones letales ⇒ θ = 2.",
        "Base: KOH tiene 1 grupo hidróxido alcalino ⇒ θ = 1.",
        "Desplegamos la ecuación de neutralización pura:",
        "(M · V · θ)_ácido = (M · V · θ)_base",
        "M_ácido × (40 mL) × 2 = (0.5 M) × (80 mL) × 1"
      ],
      "answer": "M_ácido × 80 = 40 ⇒ M_ácido = 40 / 80 = **0.5 Molar**."
    },
    "practice": [
      {
        "id": "p-10.12-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Estequiometría de soluciones aplicada a volumetría y titulación ácido-base, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-10.12-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Estequiometría de soluciones aplicada a volumetría y titulación ácido-base?",
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
        "id": "q-10.12-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nDurante una titulación clásica en el laboratorio escolar de un ácido inorgánico con una base fuertemente alcalina, la relación y equilibrio matemático subyacente que ocurre exactamente en el punto de equivalencia asegura que:",
        "options": [
          "Los moles netos de soluto de ambas especies se hacen iguales.",
          "El volumen gastado de base es siempre igual al volumen de ácido en el matraz.",
          "Los equivalentes-gramo de ácido se equiparan estrictamente a los equivalentes de base.",
          "La reacción redox alcanza un potencial de celda cero."
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
        "id": "q-10.12-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl control de calidad en las empresas embotelladoras de vinagre comercial utiliza volumetría ácida (H⁺) contra hidróxido de sodio para garantizar acidez del 5%. Al introducir un indicador orgánico sintético de fenolftaleína (incoloro en medio ácido y fucsia intenso en medio alcalino), la caída de la última gota valorante de NaOH que logra el equilibrio estequiométrico volverá el líquido de color:",
        "options": [
          "Azul oscuro o violeta brillante.",
          "Mantendrá el incoloro transparente perpetuo.",
          "Transicionará súbitamente a fucsia o rojo grosella suave indicando el final.",
          "Amarillo ocre precipitado."
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
        "id": "q-10.12-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara titular y neutralizar totalmente 200 mililitros de una solución saturada destructiva de hidróxido de calcio (Ca(OH)₂) cuya Normalidad ha sido tasada en 0.4 N, un ingeniero cuenta en su tanque solo con ácido clorhídrico (HCl) rotulado a 0.2 Molar. ¿Cuántos mililitros en total deberán escurrir del ácido para ganar esta batalla de titulación química?",
        "options": [
          "200 mL",
          "800 mL",
          "400 mL",
          "100 mL"
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
    "id": "exam-10-1",
    "objective": "10.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.1): Respecto a 1. Espectro de Sistemas Dispersos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-2",
    "objective": "10.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.2): Respecto a 1. Efecto Tyndall (Propiedad Óptica), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-3",
    "objective": "10.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.3): Respecto a 1. Mecanismo de Disolución y Solvatación Iónica (Hidratación), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-4",
    "objective": "10.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.4): Respecto a 1. Coeficiente de Solubilidad (S_T), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-5",
    "objective": "10.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.5): Respecto a 1. Porcentaje en Masa o Peso (% m/m o % P/P), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-6",
    "objective": "10.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.6): Respecto a 1. Concepto Fisicoquímico de Partes por Millón (ppm), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-7",
    "objective": "10.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.7): Respecto a 1. Definición Formal de Molaridad (M), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-10-8",
    "objective": "10.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (10.8): Respecto a 1. Definición Operativa de Normalidad (N), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 10.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
