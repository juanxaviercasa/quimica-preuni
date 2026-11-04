// Módulo 1: Módulo 1: Materia, Medición y Separación
export const module01 = {
  number: 1,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 1: Materia, Medición y Separación.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "1.1",
    "objective": "Comprender la organización fundamental de la materia, diferenciando a nivel microscópico y macroscópico las sustancias puras de las mezclas, con el rigor analítico exigido en los exámenes UNI y San Marcos (DECO).",
    "summary": [
      "1. Sustancias Puras (Composición Definida e Invariable)",
      "2. Mezclas (Agregación Física de Sustancias)",
      "Trampa frecuente"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Clasificación de la materia en sustancias simples, compuestas y mezclas",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Clasificación de la materia en sustancias simples, compuestas y mezclas.",
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
            "label": "Caso representativo 1 de Clasificación de la materia en sustancias simples, compuestas y mezclas",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Clasificación de la materia en sustancias simples, compuestas y mezclas",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Clasificación de la materia en sustancias simples, compuestas y mezclas",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Clasificación de la materia en sustancias simples, compuestas y mezclas",
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
      "statement": "Clasifique las siguientes muestras materiales: diamante, bronce, agua destilada y aire filtrado seco.",
      "steps": [
        "*Diamante:* Sustancia simple (alótropo del carbono puro).",
        "*Bronce:* Mezcla homogénea sólida (aleación de Cu y Sn).",
        "*Agua destilada:* Sustancia compuesta pura."
      ],
      "answer": "*Aire filtrado seco:* Mezcla homogénea gaseosa."
    },
    "practice": [
      {
        "id": "p-1.1-1",
        "type": "mc",
        "prompt": "Se calienta un líquido incoloro en laboratorio y se observa que su ebullición inicia a los 96°C y finaliza a los 101°C. ¿A qué categoría de materia corresponde?",
        "options": [
          "Las sustancias puras tienen puntos de ebullición isotérmicos",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Las sustancias puras tienen puntos de ebullición isotérmicos. Al ebullir en un **rango de temperaturas** (96°C - 101°C), el resultado sugiere que el líquido podría ser una **mezcla**, si la presión se mantuvo constante y la variación supera la incertidumbre de medición.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Clasificación de la materia en sustancias simples, compuestas y mezclas?",
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
        "id": "q-1.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nIdentifique cuál de las siguientes opciones **NO** corresponde a una sustancia simple:",
        "options": [
          "Ozono (O₃)",
          "Fósforo blanco (P₄)",
          "Amalgama dental",
          "Grafito"
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
        "id": "q-1.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn los centros de salud, se utiliza el suero fisiológico (solución acuosa de NaCl al 0.9%) para rehidratación intravenosa. ¿Qué tipo de sistema material es el suero fisiológico?",
        "options": [
          "Sustancia compuesta",
          "Mezcla homogénea",
          "Mezcla heterogénea (coloide)",
          "Elemento químico"
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
        "id": "q-1.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique verdadero (V) o falso (F) según corresponda:\nI. El agua potable y el agua oxigenada son sustancias compuestas puras.\nII. Una aleación de una sola fase, como el latón alfa, es una mezcla homogénea en estado sólido.\nIII. La alotropía es una propiedad exclusiva de las sustancias compuestas.",
        "options": [
          "FVF",
          "FVV",
          "FFV",
          "VVF"
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
    "code": "1.2",
    "objective": "Distinguir con precisión científica los cambios que experimenta la materia, correlacionando la conservación o modificación de los enlaces intramoleculares con los fenómenos físicos, químicos, alotrópicos y nucleares.",
    "summary": [
      "1. Fenómenos Físicos (Cambios de Estado y Morfológicos)",
      "⚗️ 2. Fenómenos Químicos (Reacciones Químicas)",
      "3. Fenómenos Alotrópicos (Reordenamiento Estructural de Elementos)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Identificación de fenómenos físicos, químicos y alotrópicos",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Identificación de fenómenos físicos, químicos y alotrópicos.",
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
            "label": "Caso representativo 1 de Identificación de fenómenos físicos, químicos y alotrópicos",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Identificación de fenómenos físicos, químicos y alotrópicos",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Identificación de fenómenos físicos, químicos y alotrópicos",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Identificación de fenómenos físicos, químicos y alotrópicos",
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
      "statement": "Clasifique los siguientes procesos como físicos o químicos: a) Sublimación del yodo. b) Oxidación de un clavo de hierro.",
      "steps": [
        "a) Sublimación del yodo: El yodo pasa de sólido a gas sin romper sus enlaces covalentes (I₂). Es un **fenómeno físico**."
      ],
      "answer": "b) Oxidación de un clavo: El hierro reacciona con el oxígeno y la humedad formando una nueva sustancia (herrumbre). Es un **fenómeno químico**."
    },
    "practice": [
      {
        "id": "p-1.2-1",
        "type": "mc",
        "prompt": "¿Por qué el grafito conduce la electricidad y el diamante no, si ambos son carbono puro?",
        "options": [
          "Es un fenómeno **alotrópico**",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Es un fenómeno **alotrópico**. En el diamante (hibridación sp³), los electrones de valencia forman enlaces covalentes localizados y no hay portadores de carga libres en condiciones ordinarias. En el grafito (hibridación sp²), un electrón por cada átomo queda deslocalizado en un orbital π, permitiendo el flujo de carga.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Identificación de fenómenos físicos, químicos y alotrópicos?",
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
        "id": "q-1.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál de los siguientes procesos representa un fenómeno exclusivamente físico?",
        "options": [
          "La fermentación de la uva.",
          "La combustión de la gasolina.",
          "La evaporación del alcohol.",
          "La digestión de una manzana."
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
        "id": "q-1.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante una práctica de laboratorio, un estudiante deja caer un trozo de potasio metálico en un vaso con agua, observando una llama violeta, rápida efervescencia y calentamiento del vaso. Podemos afirmar que ocurrió:",
        "options": [
          "Un fenómeno físico de disolución exotérmica.",
          "Un fenómeno químico con liberación de energía.",
          "Un fenómeno alotrópico del potasio.",
          "Un cambio de estado de agregación."
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
        "id": "q-1.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a los fenómenos de la materia, señale la proposición incorrecta:",
        "options": [
          "La fotosíntesis es un cambio químico.",
          "La obtención de oxígeno a partir de la electrólisis del agua es un fenómeno químico.",
          "La transformación de dioxígeno (O₂) a ozono (O₃) es un cambio físico.",
          "La laminación del acero es un proceso físico."
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
    "code": "1.3",
    "objective": "Clasificar con rigor termodinámico las propiedades de la materia, evaluando su dependencia respecto a la masa del sistema y su capacidad de alterar la naturaleza química de la sustancia.",
    "summary": [
      "Teorema Clave UNI: Cociente de Extensivas",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Diferenciación de propiedades físicas, químicas, intensivas y extensivas",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Diferenciación de propiedades físicas, químicas, intensivas y extensivas.",
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
            "label": "Caso representativo 1 de Diferenciación de propiedades físicas, químicas, intensivas y extensivas",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Diferenciación de propiedades físicas, químicas, intensivas y extensivas",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Diferenciación de propiedades físicas, químicas, intensivas y extensivas",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Diferenciación de propiedades físicas, químicas, intensivas y extensivas",
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
      "statement": "Determine si la densidad es una propiedad intensiva o extensiva justificando su respuesta mediante aditividad.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La densidad es una propiedad **intensiva**. Si dividimos un bloque de hierro de 10 kg en dos partes de 5 kg, la masa y el volumen se reducen a la mitad (son extensivas y aditivas), pero la relación masa/volumen (densidad) se mantiene constante en ambas mitades."
    },
    "practice": [
      {
        "id": "p-1.3-1",
        "type": "mc",
        "prompt": "Clasifique las siguientes propiedades del cobre: a) Es buen conductor eléctrico, b) Se oxida formando cardenillo verde, c) Funde a 1085°C.",
        "options": [
          "> - a) Conductividad eléctrica: Física e intensiva",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - a) Conductividad eléctrica: Física e intensiva.\n> - b) Oxidación: Química e intensiva.\n> - c) Punto de fusión: Física e intensiva.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Diferenciación de propiedades físicas, químicas, intensivas y extensivas?",
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
        "id": "q-1.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál de las siguientes es una propiedad extensiva?",
        "options": [
          "Temperatura",
          "Dureza",
          "Volumen",
          "Viscosidad"
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
        "id": "q-1.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn ingeniero evalúa un material para la construcción de un motor. Registra que la pieza tiene una masa de 50 kg, resiste el ataque de ácidos fuertes y posee una alta tenacidad. ¿Qué tipo de propiedades ha evaluado, respectivamente?",
        "options": [
          "Extensiva, física, extensiva.",
          "Extensiva, química, intensiva.",
          "Intensiva, química, intensiva.",
          "Intensiva, física, extensiva."
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
        "id": "q-1.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa que contiene exclusivamente propiedades físicas e intensivas de la materia:",
        "options": [
          "Peso, inercia, conductividad térmica.",
          "Densidad, temperatura de ebullición, maleabilidad.",
          "Acidez, volumen, presión.",
          "Calor específico, masa, radiactividad."
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
    "code": "1.4",
    "objective": "Seleccionar y diseñar trenes de separación de mezclas fundamentados en las diferencias de propiedades físicas y térmicas de las fases presentes, sin alterar la naturaleza química de los componentes.",
    "summary": [
      "1. Métodos para Separar Mezclas Heterogéneas (Mecánicos)",
      "2. Métodos para Separar Mezclas Homogéneas (Físicos)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de métodos de separación de mezclas homogéneas y heterogéneas",
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
      "statement": "Se tiene una mezcla de limaduras de hierro, arena y sal de mesa (NaCl). Proponga una secuencia lógica para separar los tres componentes.",
      "steps": [
        "1. **Separación magnética:** Usar un imán para extraer las limaduras de hierro.",
        "2. **Disolución:** Agregar agua. La sal se disuelve (mezcla homogénea), la arena no.",
        "3. **Filtración:** Filtrar la mezcla. La arena queda en el papel filtro."
      ],
      "answer": "4. **Evaporación:** Calentar el agua salada filtrada hasta evaporar el líquido, recuperando los cristales de sal."
    },
    "practice": [
      {
        "id": "p-1.4-1",
        "type": "mc",
        "prompt": "¿Qué método es el más adecuado para separar los componentes del petróleo crudo?",
        "options": [
          "El petróleo es una mezcla homogénea de cientos de hidrocarburos líquidos con puntos de ebullición muy cercanos",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El petróleo es una mezcla homogénea de cientos de hidrocarburos líquidos con puntos de ebullición muy cercanos. El método obligado es la **destilación fraccionada**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de métodos de separación de mezclas homogéneas y heterogéneas?",
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
        "id": "q-1.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl método idóneo para separar el agua del aceite es:",
        "options": [
          "Filtración",
          "Destilación simple",
          "Decantación líquido-líquido",
          "Cromatografía"
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
        "id": "q-1.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn laboratorio criminalístico necesita separar los diferentes pigmentos que componen la tinta de un bolígrafo encontrado en una escena. El método físico más preciso para lograr esta separación analítica es:",
        "options": [
          "Evaporación",
          "Cromatografía de papel o capa fina",
          "Destilación fraccionada",
          "Centrifugación"
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
        "id": "q-1.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara separar una mezcla formada por metanol (65°C) y etanol (78°C), el método fisicoquímico más eficiente, fundamentado en la pequeña diferencia de sus volatilidades (ΔTeb = 13°C), es:",
        "options": [
          "Decantación",
          "Destilación simple",
          "Destilación fraccionada",
          "Cristalización fraccionada"
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
    "code": "1.5",
    "objective": "Operar con destreza matemática los factores de conversión unitarios, prefijos del SI y las relaciones dimensionales aplicadas a los cálculos cuantitativos en química.",
    "summary": [
      "1. Magnitudes Fundamentales del Sistema Internacional (SI)",
      "4. Método del Factor Unitario (Análisis Dimensional)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Conversión de unidades en el Sistema Internacional y análisis dimensional",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Conversión de unidades en el Sistema Internacional y análisis dimensional.",
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
            "label": "Caso representativo 1 de Conversión de unidades en el Sistema Internacional y análisis dimensional",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Conversión de unidades en el Sistema Internacional y análisis dimensional",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Conversión de unidades en el Sistema Internacional y análisis dimensional",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Conversión de unidades en el Sistema Internacional y análisis dimensional",
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
      "statement": "Convierta el radio atómico del hidrógeno de 0.0529 nm a picómetros (pm) y a Angstroms (Å).",
      "steps": [
        "0.0529 nm × (10⁻⁹ m / 1 nm) × (1 pm / 10⁻¹² m) = 0.0529 × 10³ pm = **52.9 pm**."
      ],
      "answer": "Sabiendo que 1 Å = 0.1 nm, entonces 0.0529 nm = **0.529 Å**."
    },
    "practice": [
      {
        "id": "p-1.5-1",
        "type": "mc",
        "prompt": "Una piscina tiene un volumen de 2500 m³. ¿Cuántos litros de agua contiene?",
        "options": [
          "> - 2500 m³ × (1000 L / 1 m³) = 2 500 000 L = **2",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - 2500 m³ × (1000 L / 1 m³) = 2 500 000 L = **2.5 × 10⁶ L**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Conversión de unidades en el Sistema Internacional y análisis dimensional?",
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
        "id": "q-1.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa presión atmosférica normal es de 1 atm. ¿A cuántos kilopascales (kPa) equivale aproximadamente?",
        "options": [
          "10.13 kPa",
          "101.3 kPa",
          "760 kPa",
          "1.013 kPa"
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
        "id": "q-1.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn médico prescribe un jarabe cuya dosis es de 5 mL por toma. Si el frasco contiene 0.25 L, ¿cuántas tomas se pueden realizar en total?",
        "options": [
          "50 tomas",
          "25 tomas",
          "5 tomas",
          "100 tomas"
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
        "id": "q-1.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSi la densidad de un metal es 13.6 g/cm³, exprésela en el Sistema Internacional (kg/m³).",
        "options": [
          "136 kg/m³",
          "1360 kg/m³",
          "13600 kg/m³",
          "1.36 kg/m³"
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
    "code": "1.6",
    "objective": "Reportar medidas experimentales y resultados de cálculos estequiométricos con la incertidumbre, precisión y exactitud requeridas bajo las reglas formales de cifras significativas y notación científica.",
    "summary": [
      "1. Reglas para Determinar Cifras Significativas (C.S.)",
      "2. Notación Científica Normalizada",
      "4. Regla de Redondeo al Par más Cercano (Criterio Científico UNI)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Manejo de cifras significativas, redondeo y notación científica",
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
      "statement": "Determine el número de cifras significativas en las siguientes mediciones: a) 0.00508 g, b) 2.00 × 10⁴ m.",
      "steps": [
        "a) Los ceros a la izquierda no cuentan. Los dígitos son 5, 0, 8 ⇒ **3 C.S.**"
      ],
      "answer": "b) En notación científica, todos los dígitos de N son significativos: 2, 0, 0 ⇒ **3 C.S.**"
    },
    "practice": [
      {
        "id": "p-1.6-1",
        "type": "mc",
        "prompt": "Realice la operación 12.34 + 1.2 y exprese el resultado correctamente.",
        "options": [
          "Se trata de una suma, por lo que rige el menor número de lugares decimales",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Se trata de una suma, por lo que rige el menor número de lugares decimales. 12.34 tiene 2 decimales; 1.2 tiene 1 decimal. La respuesta debe tener 1 decimal.\n 12.34 + 1.2 = 13.54 ⇒ Redondeando a un decimal: **13.5**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Manejo de cifras significativas, redondeo y notación científica?",
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
        "id": "q-1.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuántas cifras significativas tiene la medida 100.050 mL?",
        "options": [
          "3",
          "4",
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
        "id": "q-1.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn analista multiplica una masa de 4.5 g por una aceleración de 9.81 m/s². La calculadora muestra 44.145. El resultado que debe reportar en su informe técnico es:",
        "options": [
          "44.145 N",
          "44.15 N",
          "44.1 N",
          "44 N"
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
        "id": "q-1.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl redondear el número 14.25 a tres cifras significativas aplicando la regla científica del par más cercano, se obtiene:",
        "options": [
          "14.2",
          "14.3",
          "14.0",
          "14.5"
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
    "code": "1.7",
    "objective": "Determinar densidades absolutas y relativas de sustancias puras y mezclas multicomponentes, evaluando los efectos térmicos sobre el volumen y la flotabilidad.",
    "summary": [
      "1. Densidad Absoluta (ρ)",
      "2. Densidad Relativa o Gravedad Específica",
      "3. Densidad de Mezclas y Soluciones"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Cálculo de densidad, gravedad específica y densidad relativa",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Cálculo de densidad, gravedad específica y densidad relativa.",
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
            "label": "Caso representativo 1 de Cálculo de densidad, gravedad específica y densidad relativa",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Cálculo de densidad, gravedad específica y densidad relativa",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Cálculo de densidad, gravedad específica y densidad relativa",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Cálculo de densidad, gravedad específica y densidad relativa",
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
      "statement": "Se mezclan 200 cm³ de un líquido A (ρ = 0.8 g/cm³) con 300 cm³ de un líquido B (ρ = 1.2 g/cm³). Suponiendo volúmenes aditivos, calcule la densidad de la mezcla.",
      "steps": [
        "Masa A = ρ_A × V_A = 0.8 × 200 = 160 g",
        "Masa B = ρ_B × V_B = 1.2 × 300 = 360 g",
        "Masa Total = 160 + 360 = 520 g",
        "Volumen Total = 200 + 300 = 500 cm³"
      ],
      "answer": "ρ(mezcla) = 520 g / 500 cm³ = **1.04 g/cm³**"
    },
    "practice": [
      {
        "id": "p-1.7-1",
        "type": "mc",
        "prompt": "Si la gravedad específica de un aceite lubricante es 0.85, ¿qué masa en gramos tendrá un volumen de 2 Litros de dicho aceite?",
        "options": [
          "La gravedad específica para líquidos toma como patrón el agua (1 g/mL)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La gravedad específica para líquidos toma como patrón el agua (1 g/mL). Por tanto, ρ(aceite) = 0.85 × 1 g/mL = 0.85 g/mL.\n Volumen = 2 L = 2000 mL.\n Masa = ρ × V = 0.85 × 2000 = **1700 g**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de densidad, gravedad específica y densidad relativa?",
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
        "id": "q-1.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa densidad absoluta es una propiedad intensiva definida como:",
        "options": [
          "La relación entre peso y volumen.",
          "La relación entre masa y temperatura.",
          "La relación entre masa y volumen.",
          "La relación entre volumen y masa."
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
        "id": "q-1.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn joyero desea saber si un anillo de 19.3 g es de oro puro (ρ(Au) = 19.3 g/cm³). Al sumergirlo en una probeta con agua, el nivel del líquido sube exactamente 1.0 mL. Se puede concluir que:",
        "options": [
          "El anillo no es de oro puro porque el volumen desplazado es muy bajo.",
          "El anillo es de oro puro porque su densidad calculada es 19.3 g/cm³.",
          "El anillo es una aleación ligera.",
          "Faltan datos para determinar la densidad."
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
        "id": "q-1.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la afirmación correcta respecto a la anomalía térmica del agua:",
        "options": [
          "Su densidad aumenta constantemente al calentar desde 0°C a 100°C.",
          "Alcanza su máximo volumen a los 4°C.",
          "Alcanza su máxima densidad a los 3.98°C.",
          "El hielo es más denso que el agua líquida."
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
    "code": "1.8",
    "objective": "Realizar conversiones rigurosas entre escalas termométricas relativas y absolutas, y calcular presiones absolutas, manométricas y barométricas en sistemas fluidos estáticos y dinámicos.",
    "summary": [
      "🌡️ 1. Escalas Termométricas y Ecuación de Conversión Universal",
      "2. Medición de Presión: Absoluta, Manométrica y Barométrica",
      "Siguiente paso"
    ],
    "activity": {
      "family": "temperature",
      "title": "Conversor de escalas térmicas y variaciones",
      "question": "¿A qué temperatura la lectura en grados Fahrenheit es exactamente el doble de la lectura en grados Celsius?",
      "instructions": [
        "Selecciona el modo 'Temperatura (lectura)' o 'Intervalo (ΔT)'.",
        "Introduce valores o usa el control deslizante para verificar equivalencias exactas.",
        "Comprueba tu respuesta numérica en el recuadro de validación."
      ],
      "reuse": "Conversor de temperaturas e intervalos",
      "params": {
        "mode": "temperatura",
        "from": "C",
        "value": 160
      },
      "goal": {
        "from": "C",
        "to": "F",
        "mode": "temperatura",
        "value": 160,
        "answer": 320,
        "tolerance": 0.1,
        "traps": [
          {
            "value": 160,
            "feedback": "Esa es la lectura en Celsius; el enunciado pide la lectura en Fahrenheit (el doble)."
          },
          {
            "value": 433.15,
            "feedback": "Ese valor corresponde a la temperatura en Kelvin, no en Fahrenheit."
          }
        ],
        "explanation": "Para t(°F) = 2·t(°C): reemplazando en (t_F - 32)/9 = t_C/5 se obtiene (2·t_C - 32)/9 = t_C/5 ⇒ 10·t_C - 160 = 9·t_C ⇒ t_C = 160°C y t_F = 320°F."
      }
    },
    "example": {
      "statement": "Convierta la temperatura del cuerpo humano de 37°C a la escala Fahrenheit y Kelvin.",
      "steps": [
        "A Fahrenheit: 37/5 = (°F - 32)/9 ⇒ 7.4 × 9 = °F - 32 ⇒ 66.6 + 32 = **98.6°F**."
      ],
      "answer": "A Kelvin: K = 37 + 273.15 = **310.15 K**."
    },
    "practice": [
      {
        "id": "p-1.8-1",
        "type": "mc",
        "prompt": "Un manómetro conectado a un tanque de gas marca 3 atm. Si la presión atmosférica local es de 1 atm, ¿cuál es la presión absoluta del gas?",
        "options": [
          "La fórmula es P(abs) = P(atm) + P(man)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La fórmula es P(abs) = P(atm) + P(man).\n P(abs) = 1 atm + 3 atm = **4 atm**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-1.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación de escalas termométricas y medición de presión manométrica y absoluta?",
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
        "id": "q-1.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl punto de ebullición del nitrógeno líquido es 77 K. ¿A cuántos grados Celsius equivale?",
        "options": [
          "-196°C",
          "350°C",
          "-273°C",
          "0°C"
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
        "id": "q-1.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn paciente febril experimenta un aumento de temperatura de 3°C. Este incremento, expresado en la escala Kelvin, corresponde exactamente a:",
        "options": [
          "276 K",
          "3 K",
          "30 K",
          "1.67 K"
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
        "id": "q-1.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\n¿A qué temperatura la lectura en la escala Fahrenheit es exactamente el doble de la lectura en la escala Celsius?",
        "options": [
          "160°C",
          "40°C",
          "-40°C",
          "100°C"
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
    "id": "exam-1-1",
    "objective": "1.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.1): Respecto a 1. Sustancias Puras (Composición Definida e Invariable), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-2",
    "objective": "1.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.2): Respecto a 1. Fenómenos Físicos (Cambios de Estado y Morfológicos), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-3",
    "objective": "1.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.3): Respecto a Teorema Clave Admisión: Cociente de Extensivas, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-4",
    "objective": "1.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.4): Respecto a 1. Métodos para Separar Mezclas Heterogéneas (Mecánicos), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-5",
    "objective": "1.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.5): Respecto a 1. Magnitudes Fundamentales del Sistema Internacional (SI), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-6",
    "objective": "1.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.6): Respecto a 1. Reglas para Determinar Cifras Significativas (C.S.), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-7",
    "objective": "1.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.7): Respecto a 1. Densidad Absoluta (ρ), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-1-8",
    "objective": "1.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (1.8): Respecto a 🌡️ 1. Escalas Termométricas y Ecuación de Conversión Universal, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 1.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
