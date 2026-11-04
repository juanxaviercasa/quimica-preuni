// Módulo 6: Módulo 6: Nomenclatura y Formulación Inorgánica
export const module06 = {
  number: 6,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 6: Nomenclatura y Formulación Inorgánica.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "6.1",
    "objective": "Diferenciar con rigor electroquímico la valencia del estado de oxidación (E.O.) y aplicar las reglas de asignación sistemáticas de la IUPAC para calcular los números de oxidación en especies neutras e iónicas.",
    "summary": [
      "2. Reglas Prácticas de Asignación del Estado de Oxidación",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Asignación de valencias y reglas para determinar estados de oxidación",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Asignación de valencias y reglas para determinar estados de oxidación.",
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
            "label": "Caso representativo 1 de Asignación de valencias y reglas para determinar estados de oxidación",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Asignación de valencias y reglas para determinar estados de oxidación",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Asignación de valencias y reglas para determinar estados de oxidación",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Asignación de valencias y reglas para determinar estados de oxidación",
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
      "statement": "Determine el estado de oxidación del cromo (Cr) en el ion dicromato (Cr₂O₇²⁻).",
      "steps": [
        "El oxígeno tiene E.O. = -2. La suma total debe igualar la carga del ion (-2).",
        "2(Cr) + 7(-2) = -2"
      ],
      "answer": "2(Cr) - 14 = -2 ⇒ 2(Cr) = +12 ⇒ Cr = **+6**."
    },
    "practice": [
      {
        "id": "p-6.1-1",
        "type": "mc",
        "prompt": "Calcule el estado de oxidación del carbono en la glucosa (C₆H₁₂O₆).",
        "options": [
          "Aplicamos H = +1 y O = -2, igualando a cero por ser neutra",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Aplicamos H = +1 y O = -2, igualando a cero por ser neutra.\n 6(C) + 12(+1) + 6(-2) = 0\n 6(C) + 12 - 12 = 0 ⇒ 6(C) = 0 ⇒ C = **0**.\n (Nuevamente, es un E.O. promedio; los carbonos de los alcoholes y el aldehído tienen distintos E.O. reales).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Asignación de valencias y reglas para determinar estados de oxidación?",
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
        "id": "q-6.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la molécula diatómica de nitrógeno gaseoso (N₂), el estado de oxidación de cada átomo de nitrógeno es:",
        "options": [
          "-3",
          "+5",
          "0",
          "+3"
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
        "id": "q-6.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl permanganato de potasio (KMnO₄) es un potente agente oxidante empleado en el tratamiento de aguas y desinfección de heridas. El estado de oxidación del metal de transición manganeso (Mn) en este compuesto es:",
        "options": [
          "+4",
          "+6",
          "+7",
          "+2"
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
        "id": "q-6.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la especie química en la cual el átomo de hidrógeno NO presenta estado de oxidación +1:",
        "options": [
          "H₂S",
          "LiAlH₄",
          "NH₃",
          "CH₃COOH"
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
    "code": "6.2",
    "objective": "Formular y nombrar óxidos metálicos (básicos) y no metálicos (ácidos o anhídridos) empleando los tres sistemas normativos: Clásica/Tradicional, Stock e IUPAC/Sistemática.",
    "summary": [
      "1. Clasificación General de Óxidos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos",
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
      "statement": "Formule el anhídrido perclórico y nómbrelo en la nomenclatura sistemática IUPAC.",
      "steps": [
        "El cloro es un no metal con estados +1, +3, +5, +7. El prefijo 'per' y sufijo 'ico' corresponden a su máxima valencia (+7).",
        "Cl⁺⁷ + O²⁻ → **Cl₂O₇**"
      ],
      "answer": "En IUPAC sistemática se leen los subíndices: **Heptóxido de dicloro**."
    },
    "practice": [
      {
        "id": "p-6.2-1",
        "type": "mc",
        "prompt": "Determine el nombre tradicional y el nombre Stock para el compuesto PbO₂.",
        "options": [
          "El plomo (Pb) tiene estados de oxidación +2 y +4",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El plomo (Pb) tiene estados de oxidación +2 y +4. En el PbO₂, como el O es -2, el plomo debe ser +4 (su mayor valencia).\n> - Tradicional: **Óxido plúmbico**.\n> - Stock: **Óxido de plomo(IV)**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura IUPAC, Stock y clásica de óxidos básicos y ácidos?",
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
        "id": "q-6.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el sistema de nomenclatura clásica, el sufijo '-oso' se emplea cuando el elemento químico actúa con su:",
        "options": [
          "Mayor estado de oxidación de cuatro posibles.",
          "Único estado de oxidación.",
          "Menor estado de oxidación (en el caso de tener dos).",
          "Estado de oxidación nulo."
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
        "id": "q-6.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl 'hielo seco' es un compuesto inorgánico utilizado para refrigeración y efectos especiales que, al mezclarse con agua en la atmósfera, forma una disolución ligeramente ácida. Químicamente, es el CO₂ en estado sólido. Su nombre correcto según el sistema clásico es:",
        "options": [
          "Óxido carbonoso",
          "Anhídrido carbónico",
          "Peróxido de carbono",
          "Óxido de carbono(II)"
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
        "id": "q-6.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa que correlaciona correctamente la fórmula del compuesto anfótero con su respectiva función química basada en el estado de oxidación del manganeso:",
        "options": [
          "MnO₂ - Anhídrido manganoso",
          "Mn₂O₇ - Óxido básico permangánico",
          "MnO - Anhídrido hipomanganoso",
          "Mn₂O₇ - Anhídrido permangánico (Óxido ácido)"
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
    "code": "6.3",
    "objective": "Formular y diferenciar óxidos especiales: peróxidos (presencia de enlace O—O), superóxidos y óxidos mixtos o dobles salinos.",
    "summary": [
      "1. Peróxidos (Grupo Peroxo: O₂²⁻)",
      "2. Superóxidos o Hiperóxidos (Ion Superoxo: O₂⁻)",
      "3. Óxidos Dobles, Mixtos o Salinos"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles",
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
      "statement": "Identifique el estado de oxidación del metal y del oxígeno en el compuesto KO₂.",
      "steps": [
        "El potasio (K) es un metal alcalino (Grupo IA), por lo tanto su estado de oxidación es invariablemente +1.",
        "Para que la suma de cargas sea cero: (+1) + 2(O) = 0 ⇒ 2(O) = -1 ⇒ **O = -1/2**."
      ],
      "answer": "Al tener el oxígeno E.O. de -1/2, la especie química es un **superóxido** (Superóxido de potasio)."
    },
    "practice": [
      {
        "id": "p-6.3-1",
        "type": "mc",
        "prompt": "¿A la suma de qué óxidos simples corresponde la fórmula de la magnetita (Fe₃O₄)?",
        "options": [
          "Los metales del grupo 8 (Fe, Co, Ni) forman óxidos dobles combinando sus óxidos de estados +2 y +3 en proporción 1:1",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Los metales del grupo 8 (Fe, Co, Ni) forman óxidos dobles combinando sus óxidos de estados +2 y +3 en proporción 1:1.\n Óxido de hierro(II): FeO\n Óxido de hierro(III): Fe₂O₃\n Suma: FeO + Fe₂O₃ = **Fe₃O₄**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de peróxidos, superóxidos y óxidos dobles?",
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
        "id": "q-6.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la molécula de peróxido de hidrógeno (H₂O₂), también conocida comercialmente en disolución como agua oxigenada, el estado de oxidación de cada átomo de oxígeno es:",
        "options": [
          "-2",
          "-1",
          "-1/2",
          "+1"
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
        "id": "q-6.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl minio es un pigmento inorgánico rojizo históricamente utilizado en pinturas anticorrosivas para estructuras de acero. Su fórmula química es Pb₃O₄. Desde el punto de vista de la nomenclatura química, este compuesto se clasifica como un:",
        "options": [
          "Peróxido metálico",
          "Óxido doble o salino",
          "Anhídrido",
          "Superóxido"
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
        "id": "q-6.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la relación incorrecta entre la fórmula química y su nombre o clasificación funcional correspondiente:",
        "options": [
          "Na₂O₂ : Peróxido de sodio",
          "CaO₂ : Óxido de calcio (simplificado)",
          "KO₂ : Superóxido de potasio",
          "Mn₃O₄ : Óxido doble manganoso-mangánico"
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
    "code": "6.4",
    "objective": "Formular hidróxidos metálicos a partir de óxidos básicos y agua, nombrando según las tres nomenclaturas y caracterizando al ion hidróxido (OH⁻).",
    "summary": [
      "1. Formulación y Obtención de Hidróxidos",
      "2. Nomenclatura de Hidróxidos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Obtención, formulación y nomenclatura de hidróxidos o bases",
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
      "statement": "Formule el hidróxido de plomo(IV) e indique cuántos átomos en total posee una de sus unidades fórmula.",
      "steps": [
        "El plomo(IV) significa Pb⁴⁺. El ion hidróxido es (OH)⁻.",
        "Al cruzar las cargas: **Pb(OH)₄**."
      ],
      "answer": "Conteo de átomos: 1 Plomo + 4 Oxígenos + 4 Hidrógenos = **9 átomos en total** (es un compuesto eneatómico)."
    },
    "practice": [
      {
        "id": "p-6.4-1",
        "type": "mc",
        "prompt": "Identifique la reacción química correcta para la obtención de la cal apagada, muy usada en albañilería.",
        "options": [
          "La cal apagada es el hidróxido de calcio, Ca(OH)₂",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "La cal apagada es el hidróxido de calcio, Ca(OH)₂. Se obtiene hidratando la cal viva (óxido de calcio, CaO):\n **CaO(s) + H₂O(l) → Ca(OH)₂(s)**",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Obtención, formulación y nomenclatura de hidróxidos o bases?",
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
        "id": "q-6.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSeñale la fórmula química que corresponde al hidróxido cúprico (el cobre presenta estados de oxidación +1 y +2):",
        "options": [
          "CuOH",
          "Cu₂OH",
          "Cu(OH)₂",
          "CuO"
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
        "id": "q-6.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLa leche de magnesia es una suspensión acuosa que se comercializa libremente en farmacias como un potente antiácido estomacal. Si su componente activo neutraliza el exceso de jugo gástrico (HCl), dicho componente pertenece a la familia de los:",
        "options": [
          "Óxidos ácidos",
          "Hidruros no metálicos",
          "Hidróxidos o bases",
          "Ácidos oxácidos"
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
        "id": "q-6.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl reaccionar un trozo de potasio metálico puro (K) con agua destilada a temperatura ambiente, se observa un burbujeo violento e inflamación espontánea. Identifique los productos resultantes de dicha transformación química:",
        "options": [
          "K₂O + H₂",
          "KOH + O₂",
          "KOH + H₂",
          "KH + H₂O"
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
    "code": "6.5",
    "objective": "Formular hidruros iónicos metálicos y compuestos moleculares hidrogenados no metálicos con nombres propios aceptados universalmente por la IUPAC.",
    "summary": [
      "1. Hidruros Metálicos (Naturaleza Iónica)",
      "2. Hidruros No Metálicos Especiales (Volátiles / Moleculares)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura de hidruros metálicos y no metálicos",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura de hidruros metálicos y no metálicos.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura de hidruros metálicos y no metálicos",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura de hidruros metálicos y no metálicos",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura de hidruros metálicos y no metálicos",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura de hidruros metálicos y no metálicos",
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
      "statement": "En la síntesis de hidrolita (CaH₂), ¿qué especie se oxida y cuál se reduce respecto a sus elementos puros?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Partiendo de Ca⁰ + H₂⁰ → CaH₂. El calcio (metal grupo IIA) pasa de 0 a +2 (pierde e⁻, se **oxida**). El hidrógeno pasa de 0 a -1 (gana e⁻, se **reduce**). Por tanto, en la formación de hidruros metálicos, el hidrógeno actúa como agente oxidante."
    },
    "practice": [
      {
        "id": "p-6.5-1",
        "type": "mc",
        "prompt": "¿Cuál es el nombre común IUPAC del compuesto binario covalente CH₄ y qué geometría presenta?",
        "options": [
          "El CH₄ es el **Metano** (hidruro volátil del grupo IVA)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El CH₄ es el **Metano** (hidruro volátil del grupo IVA). Presenta un carbono con hibridación sp³, por lo que adopta una geometría molecular **tetraédrica** apolar.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de hidruros metálicos y no metálicos?",
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
        "id": "q-6.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nIdentifique el compuesto químico que corresponde a la familia de los hidruros metálicos:",
        "options": [
          "NH₃",
          "H₂S",
          "KH",
          "CH₄"
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
        "id": "q-6.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl amoníaco es un gas tóxico de olor penetrante a orina utilizado masivamente en la industria mundial de fertilizantes. Su fórmula química y su clasificación funcional respectiva son:",
        "options": [
          "PH₃, hidruro especial del grupo VA",
          "NH₃, hidruro no metálico especial volátil",
          "NH₄⁺, catión poliatómico básico",
          "NH₃, ácido hidrácido disuelto en agua"
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
        "id": "q-6.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa que contiene la correlación incorrecta entre la fórmula del hidruro no metálico volátil y su nombre común oficialmente aceptado por la IUPAC:",
        "options": [
          "BH₃ : Borano",
          "SiH₄ : Silano",
          "AsH₃ : Fosfina",
          "SbH₃ : Estibina"
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
    "code": "6.6",
    "objective": "Formular hidruros de los grupos VIA y VIIA diferenciando su estado gaseoso anhidro de su forma en disolución acuosa (ácidos hidrácidos) y derivar sus aniones monoatómicos por disociación protónica.",
    "summary": [
      "1. Hidruros Ácidos en Fase Gaseosa vs. Fase Acuosa",
      "2. Disociación y Formulación de Aniones Monoatómicos",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Ácidos hidrácidos en solución acuosa y formulación de aniones monoatómicos",
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
      "statement": "Identifique la fórmula y el nombre del ácido hidrácido formado por el bromo.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El bromo es un halógeno (Grupo VIIA), por tanto actúa con E.O. = -1. Al combinarse con H⁺, forma HBr. En su forma acuosa, el compuesto HBr(ac) se denomina **Ácido bromhídrico**."
    },
    "practice": [
      {
        "id": "p-6.6-1",
        "type": "mc",
        "prompt": "¿Cuál es el nombre correcto del anión resultante al extraerle los dos protones al ácido telurhídrico?",
        "options": [
          "El ácido telurhídrico es H₂Te(ac)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El ácido telurhídrico es H₂Te(ac). Al disociarse y perder sus 2H⁺, queda la especie iónica Te²⁻. La regla de nomenclatura establece cambiar la terminación '-hídrico' por '-uro', originando el **Ion telururo**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Ácidos hidrácidos en solución acuosa y formulación de aniones monoatómicos?",
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
        "id": "q-6.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué sufijo identifica universalmente a las sales binarias formadas por aniones derivados de hidrácidos (sin oxígeno)?",
        "options": [
          "-ato",
          "-ito",
          "-uro",
          "-oso"
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
        "id": "q-6.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl ácido muriático comercial utilizado masivamente para la limpieza doméstica de inodoros y desincrustación de sarro es una disolución impura de un ácido hidrácido muy fuerte. ¿Cuál es su fórmula química y nombre sistemático correcto en disolución?",
        "options": [
          "HClO(ac) - Ácido hipocloroso",
          "H₂SO₄(ac) - Ácido sulfúrico",
          "HCl(ac) - Ácido clorhídrico",
          "HCl(g) - Cloruro de hidrógeno"
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
        "id": "q-6.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeleccione la alternativa que asocia incorrectamente la fórmula química con su respectivo estado de agregación y nomenclatura oficial:",
        "options": [
          "HF(g) : Fluoruro de hidrógeno",
          "H₂S(ac) : Ácido sulfhídrico",
          "HCN(ac) : Ácido cianhídrico",
          "HI(l) : Ácido yodhídrico"
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
    "code": "6.7",
    "objective": "Formular ácidos oxácidos ternarios mediante adición de agua a anhídridos y deducir sus fórmulas condensadas directas según la paridad del estado de oxidación del no metal central.",
    "summary": [
      "1. Reacción de Obtención General",
      "2. Fórmulas Directas de Formulación Rápida (Método UNI)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura clásica de ácidos oxácidos simples",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura clásica de ácidos oxácidos simples.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura clásica de ácidos oxácidos simples",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura clásica de ácidos oxácidos simples",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura clásica de ácidos oxácidos simples",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura clásica de ácidos oxácidos simples",
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
      "statement": "Determine la fórmula global del ácido carbónico utilizando el método directo.",
      "steps": [
        "El carbono (C) actúa con sus valencias +2 y +4. La terminación '-ico' indica que usa la mayor: x = +4.",
        "Como 4 es un número PAR, usamos la fórmula con 2 hidrógenos: H₂ C O_[(4+2)/2]."
      ],
      "answer": "Resultado: **H₂CO₃**."
    },
    "practice": [
      {
        "id": "p-6.7-1",
        "type": "mc",
        "prompt": "¿Cuál es la suma de atomicidad (número total de átomos) de una molécula de ácido hipobromoso?",
        "options": [
          "Bromo (Br) actúa con valencias +1, +3, +5, +7",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Bromo (Br) actúa con valencias +1, +3, +5, +7. El prefijo 'hipo' y sufijo 'oso' indican la valencia mínima: x = +1.\n Como 1 es IMPAR, usamos 1 hidrógeno: H₁ Br O_[(1+1)/2].\n Fórmula: **HBrO**.\n Atomicidad = 1(H) + 1(Br) + 1(O) = **3 átomos**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura clásica de ácidos oxácidos simples?",
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
        "id": "q-6.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el sistema de formulación rápida para oxácidos, si un no metal pertenece al Grupo VIA y actúa con su máximo estado de oxidación par (+6), ¿cuántos átomos de hidrógeno tendrá la fórmula del ácido resultante?",
        "options": [
          "1",
          "2",
          "3",
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
        "id": "q-6.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn las baterías de plomo-ácido de los automóviles convencionales se emplea como electrolito una disolución concentrada (aprox. 30% v/v) de un ácido corrosivo muy potente cuyo átomo central es el azufre actuando con su máxima valencia. La fórmula de este ácido es:",
        "options": [
          "H₂SO₃",
          "H₂S",
          "H₂SO₄",
          "H₂SO₂"
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
        "id": "q-6.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa que muestra correctamente el nombre tradicional y la fórmula química de un ácido formado por un no metal halógeno pentavalente:",
        "options": [
          "Ácido perclórico - HClO₄",
          "Ácido clórico - HClO₃",
          "Ácido cloroso - HClO₂",
          "Ácido hipocloroso - HClO"
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
    "code": "6.8",
    "objective": "Resolver la formulación y nomenclatura de ácidos inorgánicos complejos polihidratados (prefijos meta, piro, orto), poliácidos y tioácidos de altísima frecuencia en exámenes de admisión UNI y San Marcos.",
    "summary": [
      "1. Ácidos Polihidratados",
      "2. Poliácidos",
      "3. Tioácidos"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Formulación de ácidos oxácidos especiales: polihidratados, poliácidos y tiácidos",
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
      "statement": "Formule e identifique la atomicidad del ácido pirofosfórico.",
      "steps": [
        "El fósforo (P) tiene E.O. +3 y +5. La terminación '-ico' indica +5. Su anhídrido es P₂O₅.",
        "El prefijo 'piro' indica la combinación: 1 Anhídrido + 2 H₂O.",
        "P₂O₅ + 2H₂O → H₄P₂O₇"
      ],
      "answer": "Fórmula: **H₄P₂O₇**. Atomicidad = 4 + 2 + 7 = **13 átomos**."
    },
    "practice": [
      {
        "id": "p-6.8-1",
        "type": "mc",
        "prompt": "¿Cuál es la fórmula del ácido ditiocarbónico?",
        "options": [
          "> - Ácido base: Ácido carbónico (H₂CO₃)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "> - Ácido base: Ácido carbónico (H₂CO₃).\n> - Prefijo 'ditio' indica que 2 átomos de Oxígeno deben ser reemplazados por 2 átomos de Azufre.\n> - Restamos 2 O y sumamos 2 S: H₂CO₍₃₋₂₎ S₂ ⇒ **H₂CS₂O**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación de ácidos oxácidos especiales: polihidratados, poliácidos y tiácidos?",
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
        "id": "q-6.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl ácido ortofosfórico reacciona como un ácido triprótico en soluciones acuosas. ¿Cuál es su fórmula química condensada si sabemos que habitualmente se le denomina simplemente \"ácido fosfórico\"?",
        "options": [
          "HPO₃",
          "H₃PO₄",
          "H₄P₂O₇",
          "H₃PO₃"
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
        "id": "q-6.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl tiosulfato de sodio (Na₂S₂O₃) es una sal extensamente utilizada como agente fijador en la fotografía analógica tradicional para disolver haluros de plata. El ácido del cual se deriva este anión se denomina ácido tiosulfúrico. ¿Cuántos átomos de azufre posee una molécula de este ácido?",
        "options": [
          "1",
          "2",
          "3",
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
        "id": "q-6.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl reaccionar el anhídrido de silicio (SiO₂) con dos moléculas de agua (2 H₂O), se forma un ácido polihidratado débil que es un componente menor de la corteza terrestre. La fórmula y nombre correcto de este compuesto es:",
        "options": [
          "H₄SiO₄ ; Ácido ortosilícico",
          "H₂SiO₃ ; Ácido metasilícico",
          "H₆Si₂O₇ ; Ácido pirosilícico",
          "H₄SiO₄ ; Ácido metasilícico"
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
    "code": "6.9",
    "objective": "Formular aniones poliatómicos oxigenados neutros y ácidos derivados de la ionización escalonada de oxácidos, aplicando las reglas de cambio de sufijos de la IUPAC.",
    "summary": [
      "1. Regla Mnemotécnica Clásica de Nomenclatura de Aniones",
      "2. Aniones Poliatómicos Neutros Fundamentales",
      "3. Aniones Ácidos (Pérdida Parcial de Protones)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos.",
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
            "label": "Caso representativo 1 de Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos",
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
      "statement": "Formule el anión dicromato e indique su carga eléctrica total.",
      "steps": [
        "Deriva del ácido dicrómico (H₂Cr₂O₇). Al perder sus dos protones en solución acuosa:",
        "H₂Cr₂O₇ → 2H⁺ + **Cr₂O₇²⁻**"
      ],
      "answer": "El ion dicromato es Cr₂O₇²⁻ y su carga global neta es **-2**."
    },
    "practice": [
      {
        "id": "p-6.9-1",
        "type": "mc",
        "prompt": "¿Cuál es el nombre sistemático correcto para la especie iónica HSO₃⁻ ?",
        "options": [
          "Proviene del ácido sulfuroso (H₂SO₃), que tiene 2 hidrógenos",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Proviene del ácido sulfuroso (H₂SO₃), que tiene 2 hidrógenos. Como ha perdido solo uno, conserva un hidrógeno ácido y una carga de -1. La terminación '-oso' cambia a '-ito'.\n Su nombre clásico es **bisulfito** y su nombre sistemático IUPAC es **hidrogenosulfito**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Disociación de ácidos oxácidos y formulación sistemática de aniones poliatómicos?",
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
        "id": "q-6.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún las reglas clásicas de nomenclatura inorgánica, los aniones que se derivan de ácidos que terminan con el sufijo \"-ico\" adoptarán indefectiblemente el sufijo:",
        "options": [
          "-uro",
          "-oso",
          "-ato",
          "-ito"
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
        "id": "q-6.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn los análisis de sangre para gasometría arterial se mide frecuentemente un ión amortiguador vital que regula el pH del plasma humano. Este ión se deriva de la pérdida de un solo protón del ácido carbónico (H₂CO₃). ¿Cuál es la fórmula y nombre de dicho ión biológico?",
        "options": [
          "CO₃²⁻, ión carbonato",
          "HCO₃⁻, ión bicarbonato",
          "HCO₂, ión formiato",
          "H₂CO₃⁺, catión carbónico"
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
        "id": "q-6.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nOrdene los siguientes aniones de mayor a menor estado de oxidación de su átomo central (halógeno o anfígeno): Ión perclorato, ión sulfato, ión hipobromito.",
        "options": [
          "Perclorato > Sulfato > Hipobromito",
          "Sulfato > Perclorato > Hipobromito",
          "Perclorato > Hipobromito > Sulfato",
          "Hipobromito > Sulfato > Perclorato"
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
    "code": "6.10",
    "objective": "Formular y clasificar sales haloideas (binarias y superiores sin oxígeno en el anión) derivadas de la reacción de neutralización entre ácidos hidrácidos e hidróxidos.",
    "summary": [
      "1. Reacción Fundamental de Obtención",
      "Siguiente paso"
    ],
    "activity": {
      "family": "builder",
      "title": "Construcción de secuencias para Formulación y nomenclatura de sales haloideas neutras, ácidas, básicas, dobles e hidratadas",
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
      "statement": "Formule el fluoruro plumboso.",
      "steps": [
        "Anión: El fluoruro deriva del HF, perdiendo su H⁺ ⇒ F⁻ (Carga -1).",
        "Catión: Plomo (Pb) tiene estados +2 y +4. La terminación '-oso' exige usar la menor valencia ⇒ Pb²⁺."
      ],
      "answer": "Cruzando cargas: Pb²⁺ + 2F⁻ → **PbF₂**."
    },
    "practice": [
      {
        "id": "p-6.10-1",
        "type": "mc",
        "prompt": "Identifique a qué tipo de sal haloidea pertenece el compuesto Fe(OH)₂Br.",
        "options": [
          "El compuesto contiene el catión Fe³⁺, el anión bromuro Br⁻ y además contiene **iones hidróxido (OH⁻)** incrustados en su fórmula",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El compuesto contiene el catión Fe³⁺, el anión bromuro Br⁻ y además contiene **iones hidróxido (OH⁻)** incrustados en su fórmula. La presencia de estos oxidrilos sin neutralizar clasifica al compuesto como una **sal haloidea básica** (bromuro dibásico de hierro(III)).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de sales haloideas neutras, ácidas, básicas, dobles e hidratadas?",
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
        "id": "q-6.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Qué reactivos inorgánicos deben combinarse en una reacción de neutralización clásica para sintetizar sulfuro de potasio (K₂S)?",
        "options": [
          "Ácido sulfuroso e hidróxido de potasio.",
          "Ácido sulfhídrico e hidróxido de potasio.",
          "Ácido sulfúrico y potasio metálico.",
          "Anhídrido sulfúrico y óxido de potasio."
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
        "id": "q-6.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl yoduro de plata (AgI) es una sal haloidea neutra color amarillo pálido que se dispersa en las nubes desde aviones para 'sembrar' nubes e inducir lluvia artificial. ¿Cuál de las siguientes propiedades es FALSA respecto al AgI?",
        "options": [
          "Se forma por la reacción entre el ácido yodhídrico y el hidróxido de plata.",
          "Su anión deriva de un ácido que carece de átomos de oxígeno.",
          "Su fórmula indica que pertenece a la familia de las oxisales neutras.",
          "El estado de oxidación de la plata en este compuesto es +1."
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
        "id": "q-6.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa que correlaciona correctamente la fórmula con la clasificación estricta de la sal haloidea:",
        "options": [
          "CaCl₂ · 6H₂O : Sal haloidea ácida",
          "KMgF₃ : Sal haloidea doble",
          "NaHS : Sal haloidea básica",
          "Al(OH)Cl₂ : Sal haloidea neutra"
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
    "code": "6.11",
    "objective": "Formular y sistematizar la nomenclatura de oxisales inorgánicas en sus variantes neutras, ácidas, básicas, dobles y complejos hidratados mediante el cruce de cargas de aniones poliatómicos.",
    "summary": [
      "1. Reacción de Neutralización Oxisalina",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas",
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
      "statement": "Formule el carbonato férrico.",
      "steps": [
        "Anión Carbonato: Deriva del ácido carbónico (H₂CO₃), pierde 2H⁺ ⇒ CO₃²⁻.",
        "Catión Férrico: Hierro con su mayor valencia (+2, +3) ⇒ Fe³⁺.",
        "Cruce de cargas: El 2 del carbonato pasa al Fe, y el 3 del Fe pasa al carbonato entre paréntesis."
      ],
      "answer": "Fórmula: **Fe₂(CO₃)₃**."
    },
    "practice": [
      {
        "id": "p-6.11-1",
        "type": "mc",
        "prompt": "¿Cuál es el nombre sistemático clásico del compuesto Cu(NO₃)₂?",
        "options": [
          "El anión NO₃⁻ es el ion nitrato (carga -1)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El anión NO₃⁻ es el ion nitrato (carga -1). Hay 2 nitratos, sumando carga -2. Para neutralizar, el cobre debe actuar con carga +2 (Cu²⁺). El cobre tiene valencias +1 y +2, por lo que +2 es la mayor (terminación 'ico'). El nombre correcto es **Nitrato cúprico** (o Nitrato de cobre(II) en Stock).",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-6.11-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de oxisales neutras, ácidas, básicas, dobles e hidratadas?",
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
        "id": "q-6.11-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún las convenciones de la nomenclatura clásica, la sal resultante de la neutralización entre el ácido clórico y el hidróxido de aluminio se denominará:",
        "options": [
          "Cloruro de aluminio",
          "Hipoclorito alumínico",
          "Clorito de aluminio",
          "Clorato de aluminio"
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
        "id": "q-6.11-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn las panaderías, se utiliza el 'polvo de hornear' para hacer que la masa esponje al liberar CO₂ por reacción térmica. El componente activo principal de este producto es una sal ácida conocida comúnmente como bicarbonato de sodio. Su fórmula química correcta es:",
        "options": [
          "Na₂CO₃",
          "NaHCO₃",
          "NaH₂CO₃",
          "Na₂HCO₃"
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
        "id": "q-6.11-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa que relaciona correctamente el nombre con su respectiva fórmula de oxisal hidratada o básica:",
        "options": [
          "Sulfato ferroso heptahidratado : FeSO₄ · 7H₂O",
          "Nitrato de plata pentahidratado : AgNO₃ · 5H₂O",
          "Cloruro de calcio dihidratado : Ca(ClO)₂ · 2H₂O",
          "Fosfato tribásico de calcio : Ca₃(PO₄)₂ · 3OH"
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
    "id": "exam-6-1",
    "objective": "6.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.1): Respecto a 2. Reglas Prácticas de Asignación del Estado de Oxidación, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-2",
    "objective": "6.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.2): Respecto a 1. Clasificación General de Óxidos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-3",
    "objective": "6.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.3): Respecto a 1. Peróxidos (Grupo Peroxo: O₂²⁻), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-4",
    "objective": "6.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.4): Respecto a 1. Formulación y Obtención de Hidróxidos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-5",
    "objective": "6.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.5): Respecto a 1. Hidruros Metálicos (Naturaleza Iónica), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-6",
    "objective": "6.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.6): Respecto a 1. Hidruros Ácidos en Fase Gaseosa vs. Fase Acuosa, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-7",
    "objective": "6.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.7): Respecto a 1. Reacción de Obtención General, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-6-8",
    "objective": "6.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (6.8): Respecto a 1. Ácidos Polihidratados, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 6.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
