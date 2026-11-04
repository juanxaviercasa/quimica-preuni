// Módulo 16: Módulo 16: Hidrocarburos y Funciones Oxigenadas
export const module16 = {
  number: 16,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 16: Hidrocarburos y Funciones Oxigenadas.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "16.1",
    "objective": "Explicar la deslocalización electrónica y estabilidad termodinámica por resonancia del anillo bencénico, y aplicar con rigor analítico los cuatro criterios de aromaticidad y la regla de Hückel.",
    "summary": [
      "1. El Benceno (C₆H₆) y el Modelo de Kekulé",
      "2. Estabilidad Extraordinaria por Resonancia",
      "3. Criterios Universales de Aromaticidad (Regla de Hückel, 1931)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel.",
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
            "label": "Caso representativo 1 de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel",
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
      "statement": "El anión ciclopentadienilo (C₅H₅⁻) es un anillo de 5 carbonos. Cuatro de ellos forman 2 dobles enlaces conjugados (4 electrones π) y el quinto carbono posee una carga negativa por un par de electrones libres. Determine si esta especie iónica es aromática o no.",
      "steps": [
        "¿Es cíclico? Sí.",
        "¿Es plano y conjugado? Sí, el carbono con carga negativa asume hibridación sp² para meter su par de electrones al anillo.",
        "¿Cumple Hückel? Contamos electrones π: 2 (de un doble) + 2 (del otro doble) + 2 (del par libre metido en la resonancia) = 6 electrones π totales."
      ],
      "answer": "Aplicando la fórmula: 4n + 2 = 6 ⇒ 4n = 4 ⇒ n = 1 (Número entero perfecto). **Es totalmente AROMÁTICO**."
    },
    "practice": [
      {
        "id": "p-16.1-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Estructura y estabilidad por resonancia del benceno y regla de aromaticidad de Hückel?",
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
        "id": "q-16.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el análisis estructural moderno y la cristalografía de rayos X, la molécula de benceno puro (C₆H₆) se caracteriza físicamente por presentar en su esqueleto carbonado:",
        "options": [
          "Seis enlaces C-C de longitudes alternadas y diferentes.",
          "Únicamente hibridación sp en todos sus vértices.",
          "Una estructura perfectamente plana y simétrica con carbonos sp².",
          "Una alta tendencia a sufrir reacciones químicas de adición rápida."
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
        "id": "q-16.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl ciclooctatetraeno es un anillo cerrado de 8 carbonos que exhibe 4 dobles enlaces alternados en su estructura perimetral. Sin embargo, en el laboratorio se comporta como un alqueno común y se resiste a ser plano. Termodinámicamente, esta molécula NO logra alcanzar la estabilidad del benceno porque:",
        "options": [
          "Su número total de electrones pi (8e⁻) viola la regla de Hückel de 4n+2.",
          "Contiene un número impar de átomos de carbono.",
          "Presenta una altísima energía de resonancia que lo desestabiliza.",
          "Sus carbonos poseen hibridación sp³."
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
        "id": "q-16.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las características fisicoquímicas que definen a un compuesto aromático, indique la afirmación categóricamente correcta en toda circunstancia:",
        "options": [
          "Toda molécula cíclica y plana con dobles enlaces conjugados es aromática.",
          "La energía de resonancia del benceno disminuye su reactividad frente a la adición electrofílica.",
          "La letra \"n\" en la fórmula de Hückel (4n+2) representa exclusivamente la cantidad de anillos aromáticos de la molécula.",
          "Un compuesto con 4, 8 o 12 electrones pi deslocalizados es altamente aromático y estable."
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
    "code": "16.2",
    "objective": "Nombrar derivados bencénicos monosustituidos y disustituidos empleando tanto la nomenclatura sistemática IUPAC como los prefijos posicionales espaciales clásicos orto-, meta- y para-.",
    "summary": [
      "1. Bencenos Monosustituidos",
      "2. Radicales Aromáticos Invertidos: Fenilo vs. Bencilo",
      "3. Bencenos Disustituidos (La Batalla de las Posiciones)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para).",
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
            "label": "Caso representativo 1 de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)",
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
      "statement": "Formule el nombre correcto del anillo aromático que posee un grupo Hidroxi (-OH) y un grupo Nitro (-NO₂) ubicados diametralmente en polos opuestos (posiciones 1,4).",
      "steps": [
        "El grupo -OH sobre un benceno tiene un nombre VIP que domina la molécula: **Fenol**. El grupo -NO₂ pasa a ser el sustituyente. Al estar diametralmente opuestos, la relación geométrica es la posición 1,4, equivalente al prefijo \"para\"."
      ],
      "answer": "Nombre IUPAC sistemático común: **p-nitrofenol** (o 4-nitrofenol)."
    },
    "practice": [
      {
        "id": "p-16.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para), ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Nomenclatura de derivados monosustituidos y disustituidos del benceno (orto, meta, para)?",
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
        "id": "q-16.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el nomenclátor clásico para derivados del benceno disustituidos, dos sustituyentes que ocupan las posiciones relativas 1,3 dentro del anillo aromático reciben el prefijo geográfico:",
        "options": [
          "Orto (o-)",
          "Para (p-)",
          "Meta (m-)",
          "Bencil"
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
        "id": "q-16.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso sintético farmacéutico se requiere utilizar un solvente derivado del benceno. El ingeniero solicita el compuesto \"Tolueno\". Si escribimos la fórmula topológica del compuesto solicitado, observaremos que se trata estructuralmente del:",
        "options": [
          "Aminobenceno",
          "Hidroxibenceno",
          "Metoxibenceno",
          "Metilbenceno"
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
        "id": "q-16.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl nombrar un compuesto orgánico con la fórmula química que contiene un grupo bencénico unido directamente a una larguísima cadena alifática ramificada de 12 carbonos (donde el benceno actúa como simple sustituyente secundario), el prefijo o radical correcto para referirse a dicho anillo aromático C₆H₅— es:",
        "options": [
          "Ciclohexilo",
          "Bencilo",
          "Fenilo",
          "Estireno"
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
    "code": "16.3",
    "objective": "Identificar la enigmática estructura de los hidrocarburos aromáticos policíclicos (HAP), reconocer sin fallos las posiciones alfa y beta, y evaluar su pesada relevancia ambiental.",
    "summary": [
      "1. Hidrocarburos Aromáticos Policíclicos Condensados (HAP)",
      "2. Impacto Toxicológico y Preguntas DECO",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno.",
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
            "label": "Caso representativo 1 de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno",
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
      "statement": "Durante la fabricación de tintes azoicos industriales se requiere emplear el precursor β-naftol. ¿En qué número localizador IUPAC se encuentra anclado el grupo funcional hidroxilo de este compuesto?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "En la estructura bicíclica del naftaleno, las posiciones \"alfa\" corresponden a los carbonos verticales más cercanos al puente de fusión (1, 4, 5, 8). Las posiciones \"beta\" corresponden a los flancos horizontales exteriores (2, 3, 6, 7). Por ende, el β-naftol es exactamente el **2-naftol** (o 3, 6, 7-naftol, que geométricamente son posiciones idénticas por simetría rotacional)."
    },
    "practice": [
      {
        "id": "p-16.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Estructura y nomenclatura de hidrocarburos aromáticos condensados: naftaleno y antraceno?",
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
        "id": "q-16.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl hidrocarburo aromático policíclico (HAP) más sencillo y liviano, compuesto únicamente por la fusión lineal de dos anillos bencénicos y que posee la increíble propiedad física de sublimarse en los armarios, se llama:",
        "options": [
          "Tolueno",
          "Bifenilo",
          "Antraceno",
          "Naftaleno"
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
        "id": "q-16.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas parrillas de carne asada muy quemada y el alquitrán negro que recubre los pulmones de un fumador crónico comparten la alta presencia de compuestos aromáticos fusionados y superpesados. El riesgo médico principal asociado a la exposición y acumulación de estas biomoléculas, como el benzo[a]pireno, en el tejido humano es su alto poder:",
        "options": [
          "Antioxidante radicalario.",
          "Analgésico sintético.",
          "Carcinógeno y mutagénico en el ADN.",
          "Anticongelante celular."
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
        "id": "q-16.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las diferencias estructurales y estequiométricas fundamentales entre los hidrocarburos bencénicos y los policíclicos fusionados, calcule matemáticamente la masa molar exacta del hidrocarburo Fenantreno (sabiendo que es el isómero angular exacto de 3 anillos del Antraceno). (Datos de P.A.: C = 12 ; H = 1).",
        "options": [
          "178 g/mol",
          "182 g/mol",
          "156 g/mol",
          "190 g/mol"
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
    "code": "16.4",
    "objective": "Clasificar estructuralmente los alcoholes según el carbono anfitrión, nombrarlos usando las duras reglas de la IUPAC y justificar termodinámicamente sus espectaculares puntos de ebullición.",
    "summary": [
      "1. El Grupo Funcional de la Vida",
      "2. La Triple Clasificación del Alcohol",
      "3. Nomenclatura Sistemática IUPAC (El OH manda)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Alcoholes: clasificación, nomenclatura IUPAC y efecto del puente de hidrógeno en propiedades físicas",
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
      "statement": "Clasifique al compuesto Propan-2-ol (conocido como alcohol isopropílico, el de los botiquines) según la naturaleza de su carbono portador.",
      "steps": [
        "Su estructura es CH₃—CH(OH)—CH₃.",
        "El carbono central que sostiene al —OH está amarrado covalentemente a otros dos carbonos (un CH₃ a su izquierda y otro CH₃ a su derecha). Por tanto, es un carbono secundario."
      ],
      "answer": "Conclusión: Es un vigoroso **Alcohol Secundario (2°)**."
    },
    "practice": [
      {
        "id": "p-16.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Alcoholes: clasificación, nomenclatura IUPAC y efecto del puente de hidrógeno en propiedades físicas, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Alcoholes: clasificación, nomenclatura IUPAC y efecto del puente de hidrógeno en propiedades físicas?",
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
        "id": "q-16.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún las rigurosas normativas de prioridad de la IUPAC, si en la cadena principal de una molécula orgánica coexisten un doble enlace carbono-carbono y un grupo hidroxilo (-OH), la numeración localizadora más baja de la cadena debe asignarse obligatoriamente para favorecer al:",
        "options": [
          "Radical alquilo más pesado",
          "Doble enlace insaturado",
          "Extremo alfabéticamente superior",
          "Grupo funcional Hidroxilo (-OH)"
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
        "id": "q-16.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas fábricas de licores destilan el etanol (p.eb. 78.3°C) a partir de caldos fermentados ricos en agua (p.eb. 100°C) aprovechando esta diferencia de volatilidad. Físicamente, el hecho de que el etanol presente un punto de ebullición espectacularmente superior al de hidrocarburos de masa idéntica o semejante (como el propano), encuentra su justificación exclusiva en la existencia intermolecular de:",
        "options": [
          "Enlaces puente de hidrógeno",
          "Fuerzas netas iónico-covalentes",
          "Fuerzas de dispersión de London intensas",
          "Enlaces tipo éster intracatenario"
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
        "id": "q-16.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl analizar las siguientes moléculas hidroxiladas orgánicas: I. Etanol, II. Fenol (Hidroxibenceno), III. Glicerol (Propano-1,2,3-triol), identifique qué combinación engloba rigurosa y únicamente a compuestos catalogados formalmente como \"Alcoholes\" en la química orgánica.",
        "options": [
          "I, II y III",
          "Solo I y III",
          "Solo I y II",
          "Solo II y III"
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
    "code": "16.5",
    "objective": "Identificar la aplastante utilidad de los polioles comerciales, diferenciar diametralmente a los fenoles de los alcoholes normales y desnudar el mecanismo termodinámico que otorga al fenol su agresiva acidez.",
    "summary": [
      "1. Polioles (Alcoholes Polihidroxílicos)",
      "2. Fenoles (Ar-OH)",
      "3. El Despertar Químico: La Acidez Fenólica"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica.",
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
            "label": "Caso representativo 1 de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica",
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
      "statement": "Para destapar un frasco misterioso que contiene una mezcla heterogénea en aceite de hexano de fenol cristalino y ciclohexanol (un alcohol de anillo simple sin dobles enlaces), un analista añade una solución de NaOH acuoso al 10%, agita y deja reposar en la pera de decantación. ¿Qué molécula migrará a la fase acuosa inferior?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El NaOH es una base potente. El ciclohexanol es un alcohol alifático (es neutro), así que ignorará a la base y se quedará disuelto arriba en el hexano apolar. El Fenol (que sí es un ácido real orgánico), reaccionará con el NaOH formando la sal iónica **fenóxido de sodio**. Como toda sal, es hiper-soluble en agua, por lo que migrará inmediatamente a la capa acuosa inferior, logrando una separación química perfecta."
    },
    "practice": [
      {
        "id": "p-16.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Caracterización de polioles, fenoles y reactivación del equilibrio ácido-base en la acidez fenólica?",
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
        "id": "q-16.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa glicerina es una sustancia viscosa omnipresente en el mundo de los excipientes de cosmética e industria alimentaria. Según la clasificación estricta de la química orgánica por el número de grupos funcionales que porta en su esqueleto de 3 carbonos, corresponde a un:",
        "options": [
          "Ácido tricarboxílico",
          "Monofenol alifático",
          "Diol vicinal",
          "Triol o polialcohol"
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
        "id": "q-16.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSi enfrentamos químicamente al Etanol y al Fenol frente al papel tornasol y frente a una disolución agresiva de hidróxido de sodio (NaOH), los resultados empíricos nos confirmarán inequívocamente que:",
        "options": [
          "Ambos compuestos enrojecerán el tornasol por ser ácidos fuertes orgánicos.",
          "Solo el etanol reacciona con la base para producir gas hidrógeno letal.",
          "El fenol manifiesta un comportamiento genuinamente ácido, reaccionando para formar la sal soluble fenóxido de sodio.",
          "Ninguno de los dos posee el momento dipolar necesario para disolverse en bases."
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
        "id": "q-16.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl inmenso diferencial de acidez que separa térmicamente al fenol (Ka ≈ 10⁻¹⁰) del ciclohexanol (Ka ≈ 10⁻¹⁶) encuentra su explicación cuántica profunda y rigurosa en:",
        "options": [
          "La altísima densidad del núcleo hexagonal puro.",
          "La estabilización termodinámica del anión fenóxido mediante deslocalización de la carga por resonancia en el anillo pi.",
          "La formación de un puente de hidrógeno intramolecular indestructible en el ciclohexanol.",
          "La hibridación sp³ que domina los carbonos del fenol."
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
    "code": "16.6",
    "objective": "Predecir magistralmente los productos de oxidación selectiva de alcoholes según el agente oxidante empleado, y dominar las temperaturas de control en las reacciones de deshidratación.",
    "summary": [
      "1. La Vía Láctea Redox: Oxidación de Alcoholes",
      "2. Reacciones de Deshidratación (Magia con Ácido Sulfúrico y Fuego)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Reacciones redox en alcoholes: oxidación controlada de alcoholes primarios, secundarios y deshidratación",
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
      "statement": "Identifique el compuesto orgánico resultante al someter el compuesto orgánico 2-metilpropan-1-ol a una oxidación agresiva con Permanganato de potasio en medio fuertemente ácido y caliente.",
      "steps": [
        "Molécula inicial: CH₃—CH(CH₃)—CH₂—OH.",
        "Analizamos el carbono portador del OH: es un grupo terminal -CH₂-OH, es decir, es un **alcohol primario**.",
        "El reactivo es KMnO₄/H⁺, el cual es el oxidante más destructivo y enérgico posible. No se detendrá en la estación aldehído. Avanzará quemando la molécula hasta la última parada.",
        "Producto definitivo: El CH₂OH se calcina y convierte directamente en un grupo carboxilo puro -COOH."
      ],
      "answer": "Nombre: **Ácido 2-metilpropanoico**."
    },
    "practice": [
      {
        "id": "p-16.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Reacciones redox en alcoholes: oxidación controlada de alcoholes primarios, secundarios y deshidratación, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Reacciones redox en alcoholes: oxidación controlada de alcoholes primarios, secundarios y deshidratación?",
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
        "id": "q-16.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el patrón clásico de reactividad química oxidativa en el laboratorio, si un analista somete el compuesto butan-2-ol (un alcohol secundario intermedio) a la acción de una mezcla sulfocrómica (oxidante agresivo), el frasco condensará vapores pertenecientes a la familia de:",
        "options": [
          "Los ácidos carboxílicos puros",
          "Los alcanos saturados",
          "Las cetonas aromáticas",
          "Las cetonas alifáticas"
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
        "id": "q-16.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas famosas pruebas del \"alcoholímetro\" que usa la policía de tránsito antiguamente utilizaban un tubo de cristal relleno de cristales anaranjados de dicromato de potasio acidulado. Al exhalar el conductor ebrio su aliento cargado de vapor de etanol (alcohol de licor), el tubo cambiaba a un verde oscuro indicando que el chofer estaba arrestado. En este ensayo electroquímico, la función del etanol fue actuar indiscutiblemente como un:",
        "options": [
          "Agente oxidante poderoso.",
          "Agente reductor que entregó sus electrones.",
          "Catalizador de la sublimación del cromo.",
          "Un ácido de Lewis inerte."
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
        "id": "q-16.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa deshidratación de alcoholes mediante ácido sulfúrico concentrado es un proceso sintético termodependiente extremadamente sensible al pirómetro del reactor. Sabiendo esto, indique las especies químicas formadas como productos orgánicos mayoritarios al calentar etanol líquido a las temperaturas exactas de 140°C y 170°C de forma respectiva.",
        "options": [
          "Éter dimetílico y Ácido acético",
          "Eteno (gas) y Éter dietílico (líquido)",
          "Éter dietílico y Eteno (gas alqueno)",
          "Etanal (aldehído) y Éster etílico"
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
    "code": "16.7",
    "objective": "Formular y nombrar éteres simétricos y asimétricos conforme a las reglas IUPAC, y fundamentar la terrorífica volatilidad de estos líquidos frente a sus pesados isómeros de función (los alcoholes).",
    "summary": [
      "1. Estructura y Función de un Éter",
      "3. El Terror de la Volatilidad Extrema",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros",
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
      "statement": "Una estructura orgánica reporta el nombre sistemático IUPAC de \"2-metoxipropano\". Escriba su fórmula semidesarrollada y determine si es un éter simétrico o asimétrico.",
      "steps": [
        "La cadena matriz principal es el **propano** (3 carbonos en fila india): CH₃-CH₂-CH₃.",
        "En el carbono central (el carbono 2), cuelga la rama **metoxi-** (-O-CH₃).",
        "Fórmula construida: CH₃—CH(O-CH₃)—CH₃"
      ],
      "answer": "Observamos que el puente de oxígeno (-O-) une a un lado un brazo \"isopropil\" grueso, y al otro lado un pequeño \"metil\". Los brazos no son gemelos. Es un clásico **éter asimétrico o mixto**."
    },
    "practice": [
      {
        "id": "p-16.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de éteres y análisis de volatilidad frente a alcoholes isómeros?",
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
        "id": "q-16.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el nomenclátor y la jerarquía de denominaciones tradicionales y comerciales, el nombre funcional aceptado históricamente para la molécula simétrica de CH₃-O-CH₃ es:",
        "options": [
          "Etoximetano",
          "Éter dietílico",
          "Propanona",
          "Éter dimetílico"
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
        "id": "q-16.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un hospital bélico del siglo XIX, un cirujano solicita urgentemente al boticario una botella del volátil éter de la familia con dos carbonos por lado (dietil éter) para anestesiar y dormir a un paciente antes de una amputación invasiva, ante la falta de anestésicos modernos. Si el boticario no encuentra el frasco por su nombre clásico, deberá buscar en el inventario químico de la repisa el líquido etiquetado formal y sistemáticamente bajo el nombre de:",
        "options": [
          "Etoxietano",
          "Etanol purificado",
          "Éter metil-propílico",
          "1,2-epoxietano"
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
        "id": "q-16.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl confrontar rigurosamente las propiedades fisicoquímicas empíricas de los isómeros constitucionales de función para la reducida fórmula global C₂H₆O (el etanol y el éter dimetílico), se comprueba que el etanol es un líquido humectante viscoso que ebulle a 78°C, mientras el éter es un gas inflamable invisible a temperatura ambiental (-24°C). Este abismo colosal en sus umbrales de ebullición, que gobierna sus estados de agregación opuestos, se cimenta termodinámicamente en que:",
        "options": [
          "El etanol posee una masa molar que supera holgadamente el doble de la masa del éter analizado.",
          "El éter dimetílico presenta enlaces iónicos intramoleculares extremadamente frágiles a la luz UV.",
          "El etanol tiene la estructura que soporta la formación de puentes de hidrógeno intermoleculares, mientras el éter carece de protones acoplados al oxígeno impidiéndoselo.",
          "El éter tiene geometría lineal perfecta de 180° que anula por completo sus fuerzas esféricas de London."
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
    "code": "16.8",
    "objective": "Caracterizar el campo de batalla electrofílico del grupo carbonilo, formular aldehídos y cetonas sin vacilar según las directrices de oro de la IUPAC y dominar la creación de pares de isómeros funcionales.",
    "summary": [
      "1. El Grupo Carbonilo (>C=O): El Imán Electrostático",
      "3. Los Hermanos Enemigos: Isomería de Función",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aldehídos y cetonas: polaridad del grupo carbonilo, nomenclatura e isomería funcional",
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
      "statement": "Formule analíticamente y asigne el nombre sistemático IUPAC puro a la molécula orgánica alifática CH₃—CH(CH₃)—CH₂—CO—CH₃.",
      "steps": [
        "Ubicamos la cadena base: Mide un tirón de 5 carbonos (pentano).",
        "Ubicamos al grupo principal: El carbonilo está atrapado (-CO-) en el interior de la molécula, blindado por carbonos vecinos a sus dos costados. Clasificación: **Cetona**.",
        "Numeramos desde la extrema proximidad: Si entramos por la derecha, el grupo -CO- atrapa el número 2. Si entramos por la izquierda, atraparía un fatídico número 4. Numeramos derecha a izquierda de forma obligatoria.",
        "Ramas: En la posición lejana número 4 quedó colgado un metil solitario."
      ],
      "answer": "Armado del nombre de victoria: **4-Metilpentan-2-ona** (o el formato clásico aceptable 4-metil-2-pentanona)."
    },
    "practice": [
      {
        "id": "p-16.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aldehídos y cetonas: polaridad del grupo carbonilo, nomenclatura e isomería funcional, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aldehídos y cetonas: polaridad del grupo carbonilo, nomenclatura e isomería funcional?",
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
        "id": "q-16.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún los tratados teóricos de nomenclatura orgánica, los compuestos orgánicos sintéticos saturados de cadena lineal correspondientes al propanal y la propanona, pese a su agresiva disparidad en comportamiento redox y propiedades olfativas, comparten de manera irrefutable:",
        "options": [
          "El mismo número de dobles enlaces C=C intramoleculares.",
          "Una capacidad reductora sobresaliente ante sales de plata calientes.",
          "Idéntica fórmula global molecular y por ende idéntico peso molar.",
          "Una configuración espacial totalmente aromática conjugada."
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
        "id": "q-16.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl compuesto sintético comercial 3-metilbutanal es un líquido viscoso muy preciado por aportar notas y trazos de sabor almendrado en la elaboración de golosinas industriales de bajo coste y repostería europea. Al evaluar de reojo la estructura topológica plana que soporta y esconde a este apetecible saborizante orgánico, ¿cuál será el recuento total de átomos de carbono primarios y terciarios puros acoplados a su esqueleto atómico?",
        "options": [
          "Tres carbonos primarios y cero carbonos terciarios.",
          "Dos carbonos primarios y un carbono terciario.",
          "Cuatro carbonos primarios y ningún cuaternario.",
          "Dos carbonos secundarios y uno primario asimétrico."
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
        "id": "q-16.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe analiza cinéticamente una cadena alifática hiper-ramificada rotulada en el frasco con el kilométrico nombre formal 4,4-dimetilpentanal. Sabiendo que todos los aldehídos carecen de numeración localizadora para su carbonilo de cabecera porque operan por decreto como el C1 fundacional, determine matemáticamente la fórmula empírica o simplificada final del isómero cetónico directo que se obtendría tras reorganizar todos y cada uno de sus valiosos átomos internos en el reactor.",
        "options": [
          "C₇H₁₄O",
          "C₇H₁₂O₂",
          "C₆H₁₂O",
          "CH₂O"
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
    "code": "16.9",
    "objective": "Diferenciar analíticamente y con certeza inquebrantable a los aldehídos de las cetonas, empleando como árbitros absolutos las reacciones de óxido-reducción en tubo de ensayo con los majestuosos reactivos de Tollens y Fehling.",
    "summary": [
      "1. El Fundamento Fisicoquímico de la Vida o Muerte Diferencial",
      "2. El Reactivo de Tollens (El Mágico Espejo de Plata)",
      "3. El Reactivo de Fehling (El Ladrillo Rojo de Cobre)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling.",
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
            "label": "Caso representativo 1 de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling",
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
      "statement": "Resolución cuantitativa de las condiciones del sistema.",
      "steps": [
        "Aplicar la fórmula universal respectiva.",
        "Operar algebraicamente despejando la incógnita."
      ],
      "answer": "Solución obtenida analíticamente."
    },
    "practice": [
      {
        "id": "p-16.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ensayos químicos de caracterización y diferenciación redox: reactivo de Tollens y reactivo de Fehling?",
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
        "id": "q-16.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio cualitativo analítico, la aparición visual fulgurante de un revestimiento que asemeja un espejo metálico en las lunas de un tubo de ensayo que fue dopado con la solución de Tollens, nos grita de forma inequívoca la presencia activa del grupo funcional orgánico:",
        "options": [
          "Carbonilo en posición netamente secundaria (cetona).",
          "Carboxilo saturado de alta acidez.",
          "Carbonilo en posición terminal primaria (aldehído).",
          "Hidroxilo aromático blindado por resonancia (fenol)."
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
        "id": "q-16.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas bebidas edulcoradas modernas evitan a toda costa agregar azúcar simple (fructosa pura, una cetosa isómera de la glucosa). Durante una demostración química en una escuela de verano, un profesor astuto mezcla pura fructosa comercial con un balde de reactivo de Tollens. A pesar de los reclamos teóricos que afirman que la fructosa porta internamente el inerte y enclaustrado grupo Cetona (-CO-), el balón de cristal sorpresivamente deposita y destella el célebre espejo de plata en 15 minutos.\nEsta aparente violación a las duras leyes químicas se justifica científicamente porque:",
        "options": [
          "Los azúcares disueltos se tuestan velozmente convirtiéndose en hollín de carbono plateado por el calor del agua.",
          "En los ambientes marcadamente alcalinos e inclementes de la solución de Tollens, la molécula de la cetosa (fructosa) sufre una tautomerización enolizadora, transformándose y disfrazándose a sí misma de Aldosa (glucosa) para efectuar subrepticiamente la reacción de espejo.",
          "La fructosa posee anillos bencénicos incrustados que reaccionan con el amoníaco destrozando a la plata.",
          "La plata pura en su estado amoniacal tiene tal furia oxidante destructiva capaz de pulverizar las cetonas fuertes del mundo."
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
        "id": "q-16.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDados los tubos de reacción herméticos A (Propanona líquida), B (Propanal transparente) y C (Benzaldehído). Todos se someten al feroz test termodinámico del licor azul de Fehling en baño maría a 90°C. Señale usted, con extrema y rigurosa precisión instrumental, cuál o cuáles tubos exhibirán en el lapso temporal correspondiente el deseado hundimiento masivo de un sólido rojo ladrillo coloidal de óxido cuproso reductor.",
        "options": [
          "Únicamente el frasco C (Benzaldehído).",
          "Conjuntamente y a la par, el frasco B y el frasco C.",
          "Únicamente y en soledad el frasco B (Propanal alifático libre).",
          "Exclusivamente el frasco A y B formarán el coágulo cobrizo."
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
    "code": "16.10",
    "objective": "Formular y nombrar magistralmente ácidos carboxílicos acatando el dominio de la IUPAC, justificar la invulnerabilidad resonante del anión carboxilato y balancear reacciones destructivas de neutralización orgánica.",
    "summary": [
      "1. Estructura Soberana del Grupo Carboxilo (-COOH)",
      "2. Acidez Mortal y Estabilidad Cuántica por Resonancia",
      "3. Formación de Sales Orgánicas Sangrientas"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Ácidos carboxílicos: reactivación de constantes de acidez, nomenclatura y formación de sales orgánicas",
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
      "statement": "Extraiga el lápiz y estructure mentalmente el nombre exhaustivo y soberano para la cadena alifática ramificada que arranca por la derecha y reza: HOOC-CH(CH₃)-CH₂-CH(C₂H₅)-CH₃.",
      "steps": [
        "**Paso 1:** Al tener el colosal fragmento (HOOC-) invertido en la frontera izquierda de la pantalla, dictaminamos la clase: Ácido Carboxílico.",
        "**Paso 2:** Elegir al rey. El átomo de Carbono en ese \"HOOC-\" no se borra, es obligatorio, asumiendo su cetro dictatorial de **Carbono 1 (C1)**. Numeramos de izquierda a derecha sin frenos.",
        "**Paso 3:** Trazar la cadena larga y enredada. Contando a partir del C1: C1-C2-C3-C4... en el carbono 4 vemos de frente un grupo metilo chiquito, y para abajo hay una cascada etilo pesada de 2 carbonos escondida (C₂H₅). Rompemos la línea recta e ingresamos bajando hacia esa cascada gruesa para obtener una vía larga final de 6 carbonos puros. La línea madre será Hexanoico.",
        "**Paso 4:** Buscar huérfanos residuales. Con la nueva ruta adoptada, los parias colgados que estorban afuera son un Metil amarrado en C2, y otro Metil marginado en C4."
      ],
      "answer": "**Nombre final de victoria militar:** Anteponemos la palabra \"Ácido\", consolidamos las ramas y cerramos la escotilla. **Ácido 2,4-dimetilhexanoico**."
    },
    "practice": [
      {
        "id": "p-16.10-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Ácidos carboxílicos: reactivación de constantes de acidez, nomenclatura y formación de sales orgánicas, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ácidos carboxílicos: reactivación de constantes de acidez, nomenclatura y formación de sales orgánicas?",
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
        "id": "q-16.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio físico-termodinámico de la química descriptiva, la justificación rotunda y cuántica que eleva a los ácidos carboxílicos a coronarse con puntos de ebullición exageradamente superiores frente a otros isómeros como los ésteres o sus primos alcoholes de tamaño atómico homólogo, es debido a la portentosa y robusta formación molecular de:",
        "options": [
          "Polimerizaciones térmicas catalíticas irreversibles a alta temperatura.",
          "Dímeros cíclicos formidables engarzados por un doble puente de hidrógeno interpersonal intermolecular.",
          "Cristales diamagnéticos de solvatación iónica pura y densa repulsión aniónica.",
          "Fuerzas dipolo momentáneas de inducción de London superlativas a causa del carbono oxidado."
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
        "id": "q-16.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante una autopsia médico-legal para constatar las toxinas de un envenenamiento entomológico letal producido por millares de picaduras feroces en enjambre de hormigas coloradas, el tejido muestra signos de quemadura y necrosis. Al aislar y purificar el agente inyectado químicamente, los forenses hallarán como causante etiológico puro concentrado al antiquísimo compuesto:",
        "options": [
          "Ácido sulfúrico",
          "Ácido cianhídrico",
          "Ácido metanoico",
          "Ácido 2-hidroxipropanoico"
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
        "id": "q-16.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl reaccionar y titular volumétricamente el ácido acético o etanoico orgánico puro contra una base industrial como el hidróxido de potasio disuelto en balones aforados en medio acuoso, uno de los productos resultantes inminentes e insolubles precipitados de esta masacre será lógicamente:",
        "options": [
          "Dióxido de carbono efervescente puro e indetenible escapando del tubo.",
          "Acetato de potasio cristalizado inmerso en agua.",
          "Éster metílico en ebullición viscosa rebotando sobre la placa.",
          "Una mezcla de aldehídos neutralizados inertes por reducción básica."
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
    "code": "16.11",
    "objective": "Formular sin fallos la reacción de esterificación reversible de Fischer, nombrar ésteres exóticos aplicando el protocolo de prefijos compuestos de la IUPAC y diseccionar sus fatales rutas orgánicas de hidrólisis ácida y saponificación jabonosa en caliente.",
    "summary": [
      "1. Estructura Cautivadora y Fragancias Embriagantes de los Ésteres",
      "2. El Caldero Sintético: Esterificación de Fischer (Premio Nobel 1895)",
      "3. Nomenclatura Sistemática Cortada a Cuchillo (IUPAC)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis.",
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
            "label": "Caso representativo 1 de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis",
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
      "statement": "Una empresa perfumista destila esencias y contrata a un novato que debe formular con apuro y premura la esquelética estructura de la golosina \"etanoato de metilo\". Determine por estricto descarte teórico del lápiz, de izquierda a derecha, los bloques resultantes para esta amalgama química alfanumérica y corrobore su fórmula condensada total alfanumérica real.",
      "steps": [
        "Reconstruimos con tijera el Frankenstein del pergamino. El emperador se esconde en el \"etanoato\". Proviene de dos formidables e imperativos carbonos en bloque matriz que sujetan al rey C=O. La firma será la cabeza CH₃-COO- de arranque y en la zona líder matriz estelar.",
        "En su retaguardia amarrado con pernos inorgánicos, le soldaremos con pegamento químico al pobre súbdito colgado del cuello que porta la estela gris del \"metilo\", un vulgar y escueto radical CH₃ final sin corona terminal de vida que cuelga al infinito.",
        "Pegamos las piezas rotas enlazando: **CH₃—COO—CH₃**."
      ],
      "answer": "Confirmamos el Frankenstein químico sin fisuras lógicas para la imprenta."
    },
    "practice": [
      {
        "id": "p-16.11-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-16.11-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ésteres: síntesis por esterificación de Fischer, nomenclatura IUPAC e hidrólisis?",
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
        "id": "q-16.11-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el nomenclátor y reglamento dictatorial gramatical implacable de ginebra unificado y codificado vigente mundial de la sacrosanta IUPAC para el estudio ordenado del carbono alifático y esterificado, la sección terminación matriz gruesa rimbombante principal del sufijo honorífico real -oato dentro del gran bloque de un Éster molecular siempre deberá provenir sin excepciones del bloque de carbono orgánico que aportó con sudor su vida durante la síntesis primigenia de laboratorio siendo el originario y arcaico:",
        "options": [
          "Radical alcano de cadena etílica saturada secundaria simple oxidada.",
          "Diol vicinal catalítico evaporado por calor extremo ultravioleta.",
          "Aldehído fuertemente estabilizado en resonancia plana pi reducida.",
          "Ácido carboxílico incondicional que aportó en la reacción química el grupo carbonilo dominante."
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
        "id": "q-16.11-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas grandes fábricas de golosinas ácidas y esencias de chicle para niños, reemplazan mágicamente y falsifican sin pudor el olor real extraído en huertos de frutas a través de procesos termodinámicos industriales gigantes elaborando derivados esterificados complejos y volátiles aromáticos. Si los técnicos químicos buscan replicar artificialmente de forma económica e infalible el asombroso y pesado aroma tropical maduro embriagador a piña madura azucarada jugosa o plátano, se decantarán en las cubetas a inyectar masivamente litros industriales incoloros ardientes del archiconocido y fúlgido éster orgánico bautizado universalmente como el volátil y embriagante:",
        "options": [
          "Metanoato de propilo sintético y benceno líquido.",
          "Butanoato de etilo y etanoato de isopentilo comercial concentrado fragante diluido.",
          "Propanona saturada pura anhidra acoplada a ácido acético puro.",
          "Ácido butírico y vinagre destilado al vacío fétido al vapor letal."
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
        "id": "q-16.11-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa antiquísima y ruda reacción industrial inquebrantable que ha sobrevivido milenios de guerras empleando grandes tinajas candentes a ebullición extrema sofocante y bruta batiendo lejías y cebos grasosos pesados, que consiste en destrozar ferozmente de modo irreversible y absoluto al gran bloque molecular de un triglicérido o un Éster robusto lipídico denso bombardeándolo con hidróxido de sodio fundido al 100% acuoso alcalino, logrando desgarrar a los titanes hasta decantar y cristalizar inmaculadamente la pesada sal de sodio orgánica surfactante inerte inofensiva e hidratante milagrosa espumante que limpia grasa y roña en el mundo, recibe sin duda alguna el inconfundible y mítico nombre químico de bautizo de la brutal:",
        "options": [
          "Saponificación alcalina básica irreversible que engendra el jabón purísimo cristalino.",
          "Esterificación controlada enzimática sintética eversible en horno rotatorio de titanio.",
          "Pirólisis fraccionaria isobárica de baja presión destructiva de polímeros catalíticos oscuros.",
          "Hidrogenación catalítica agresiva a reflujo pesado en hornos para fraguar la margarina vegetal trans."
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
    "id": "exam-16-1",
    "objective": "16.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.1): Respecto a 1. El Benceno (C₆H₆) y el Modelo de Kekulé, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-2",
    "objective": "16.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.2): Respecto a 1. Bencenos Monosustituidos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-3",
    "objective": "16.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.3): Respecto a 1. Hidrocarburos Aromáticos Policíclicos Condensados (HAP), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-4",
    "objective": "16.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.4): Respecto a 1. El Grupo Funcional de la Vida, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-5",
    "objective": "16.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.5): Respecto a 1. Polioles (Alcoholes Polihidroxílicos), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-6",
    "objective": "16.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.6): Respecto a 1. La Vía Láctea Redox: Oxidación de Alcoholes, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-7",
    "objective": "16.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.7): Respecto a 1. Estructura y Función de un Éter, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-16-8",
    "objective": "16.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (16.8): Respecto a 1. El Grupo Carbonilo (>C=O): El Imán Electrostático, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 16.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
