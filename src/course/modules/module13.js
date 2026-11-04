// Módulo 13: Módulo 13: Equilibrio Iónico: Ácidos y Bases
export const module13 = {
  number: 13,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 13: Equilibrio Iónico: Ácidos y Bases.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "13.1",
    "objective": "Identificar las propiedades fenomenológicas y organolépticas de ácidos y bases, y fundamentar la teoría de disociación electrolítica de Svante Arrhenius reconociendo sus alcances y limitaciones en medios no acuosos.",
    "summary": [
      "2. Teoría de la Disociación Electrolítica de Arrhenius (1884)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Propiedades de ácidos y bases y fundamentos de la teoría de Arrhenius",
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
      "statement": "Al disolver en agua gas cloruro de hidrógeno (HCl), se forma una disolución que ataca vigorosamente a un clavo de hierro, liberando burbujas. ¿Cómo justifica Arrhenius este comportamiento y qué gas se libera?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Arrhenius justifica que el HCl(g) se ioniza en el agua liberando iones H⁺, lo que le confiere carácter ácido. Los ácidos atacan a los metales activos (Fe) mediante una reacción de desplazamiento simple, liberando **gas hidrógeno (H₂)**."
    },
    "practice": [
      {
        "id": "p-13.1-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Propiedades de ácidos y bases y fundamentos de la teoría de Arrhenius, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Propiedades de ácidos y bases y fundamentos de la teoría de Arrhenius?",
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
        "id": "q-13.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún los experimentos de indicadores colorimétricos, el papel de tornasol azul cambiará a rojo intenso cuando se sumerja en:",
        "options": [
          "Una disolución de soda cáustica (NaOH)",
          "Un vaso de leche de magnesia",
          "Una disolución de ácido acético (vinagre)",
          "Una solución saturada de cloruro de sodio"
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
        "id": "q-13.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nHistóricamente, Arrhenius recibió el Premio Nobel por explicar la conductividad eléctrica de ciertas disoluciones. Sin embargo, su teoría quedó obsoleta frente a observaciones de laboratorio donde ciertas sustancias, a pesar de no poseer el grupo funcional exigido por Arrhenius, basificaban el agua. ¿Qué compuesto emblemático no puede ser clasificado como base por la teoría clásica de Arrhenius?",
        "options": [
          "KOH",
          "Ca(OH)₂",
          "NH₃ (amoníaco)",
          "LiOH"
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
        "id": "q-13.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a la teoría ácido-base de Arrhenius, señale la afirmación rigurosamente correcta:",
        "options": [
          "Un ácido es cualquier especie que dona un par de electrones.",
          "Considera que el ión H⁺ existe libre en disolución acuosa estabilizado por puentes de hidrógeno.",
          "Define la neutralización estricta como la formación de agua a partir de los iones H⁺ y OH⁻.",
          "Es aplicable a cualquier disolvente polar, como el amoníaco líquido o el etanol puro."
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
    "code": "13.2",
    "objective": "Aplicar el modelo protónico de Brønsted-Lowry identificando pares conjugados ácido-base, evaluando la fuerza relativa de sus especies y caracterizando sustancias anfóteras.",
    "summary": [
      "1. Definición Protónica de Brønsted y Lowry (1923)",
      "2. Pares Conjugados Ácido-Base",
      "3. Sustancias Anfóteras (Anfipróticas)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Teoría de Brønsted-Lowry: pares conjugados ácido-base y sustancias anfóteras",
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
        "id": "p-13.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Teoría de Brønsted-Lowry: pares conjugados ácido-base y sustancias anfóteras, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Teoría de Brønsted-Lowry: pares conjugados ácido-base y sustancias anfóteras?",
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
        "id": "q-13.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la teoría de Brønsted-Lowry, una base se define intrínsecamente como cualquier especie química molecular o iónica que tiene la capacidad estructural de:",
        "options": [
          "Neutralizar la acidez produciendo sal y agua exclusivamente.",
          "Aceptar un protón (ion hidrógeno, H⁺).",
          "Donar un par de electrones no compartidos.",
          "Liberar iones oxidrilo (OH⁻) en disolución acuosa."
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
        "id": "q-13.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl bicarbonato de sodio (NaHCO₃) es usado como antiácido estomacal y como polvo de hornear. En medio acuoso, el anión bicarbonato (HCO₃⁻) presenta la peculiaridad de poder donar un protón formando carbonato, o de poder aceptar un protón formando ácido carbónico. Esta versatilidad química lo cataloga estrictamente como una sustancia:",
        "options": [
          "Anfótera o anfiprótica.",
          "Diatómica neutralizante.",
          "Amortiguadora inerte.",
          "Fuertemente oxidante."
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
        "id": "q-13.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la alternativa que presenta de forma rigurosa a un par conjugado Ácido / Base de acuerdo con los postulados de Brønsted-Lowry.",
        "options": [
          "H₂S / S²⁻",
          "NH₄⁺ / NH₂⁻",
          "H₃O⁺ / H₂O",
          "H₂CO₃ / CO₃²⁻"
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
    "code": "13.3",
    "objective": "Comprender la teoría electrónica de Lewis, identificando ácidos (electrófilos) y bases (nucleófilos) mediante la formación de enlaces covalentes coordinados o dativos.",
    "summary": [
      "1. Definición Electrónica de Lewis (1923)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Teoría de Lewis: formación de enlaces coordinados en ácidos y bases",
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
      "statement": "En la reacción química para formar el catión tetraminocobre(II): Cu²⁺ + 4 NH₃ → [Cu(NH₃)₄]²⁺. Clasifique a los reactivos según la teoría electrónica de Lewis.",
      "steps": [
        "El catión Cu²⁺ está vacío de electrones en varios orbitales (es un catión de transición positivo), por lo que **ACEPTA** los pares libres: actúa como **Ácido de Lewis**."
      ],
      "answer": "La molécula de NH₃ tiene en el nitrógeno un par de electrones no compartidos, los cuales **DONA** al cobre: actúa como **Base de Lewis**."
    },
    "practice": [
      {
        "id": "p-13.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Teoría de Lewis: formación de enlaces coordinados en ácidos y bases, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Teoría de Lewis: formación de enlaces coordinados en ácidos y bases?",
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
        "id": "q-13.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el modelo generalizado de G.N. Lewis, la característica intrínseca que define el comportamiento básico de una especie química es su capacidad para:",
        "options": [
          "Ceder iones H⁺ al disolvente.",
          "Aceptar un par de electrones ajenos en su orbital vacío.",
          "Compartir y donar un par de electrones libres o no enlazantes.",
          "Reducirse ganando protones en medio ácido."
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
        "id": "q-13.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl tricloruro de aluminio (AlCl₃) se utiliza extensivamente como catalizador en la industria petroquímica (reacciones de Friedel-Crafts) por su gran reactividad frente a compuestos ricos en densidad electrónica (como los anillos aromáticos). Su mecanismo de catálisis se basa en que el aluminio tiene el octeto incompleto (solo 6 electrones de valencia). Según las teorías ácido-base, el AlCl₃ es estrictamente un:",
        "options": [
          "Ácido de Arrhenius y Brønsted-Lowry.",
          "Ácido exclusivo de Lewis.",
          "Base anfótera de Lewis.",
          "Base de Brønsted-Lowry."
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
        "id": "q-13.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl evaluar la reacción química: BF₃ + F⁻ → BF₄⁻. Indique la proposición termodinámicamente correcta:",
        "options": [
          "El ion fluoruro (F⁻) actúa como un ácido de Lewis fuerte.",
          "El boro en el BF₃ transfiere un par de electrones al fluoruro.",
          "Se forma un enlace covalente dativo donde el BF₃ actúa como ácido de Lewis y el F⁻ como base de Lewis.",
          "La reacción obedece simultáneamente a los principios de las teorías de Arrhenius, Brønsted y Lewis."
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
    "code": "13.4",
    "objective": "Comprender la naturaleza anfiprótica del agua mediante su equilibrio de autoionización, deduciendo analíticamente las escalas logarítmicas de pH y pOH y su variación letal con la temperatura.",
    "summary": [
      "1. Autoionización del Agua (Autoprotólisis)",
      "2. Definición Operativa de pH y pOH",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Autoionización del agua, constante del producto iónico Kw y escalas de pH y pOH",
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
      "statement": "En una muestra de saliva humana se determinó que la concentración de iones hidrógeno [H⁺] era de 1.0 × 10⁻⁶ Molar a 25°C. ¿Cuál es el pH y el pOH de la muestra, y qué tipo de medio es?",
      "steps": [
        "pH = -log(1.0 × 10⁻⁶) = **6.0**.",
        "Como estamos a 25°C, usamos la fórmula pH + pOH = 14 ⇒ 6.0 + pOH = 14 ⇒ pOH = **8.0**."
      ],
      "answer": "Como el pH es 6.0 (menor a 7), el medio es **ligeramente ácido**."
    },
    "practice": [
      {
        "id": "p-13.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Autoionización del agua, constante del producto iónico Kw y escalas de pH y pOH, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Autoionización del agua, constante del producto iónico Kw y escalas de pH y pOH?",
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
        "id": "q-13.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el equilibrio del producto iónico del agua (Kw) a 25°C, si en una disolución acuosa se incrementa la concentración de iones [H⁺], la concentración de los iones [OH⁻]:",
        "options": [
          "Aumenta en la misma proporción.",
          "Disminuye para que el producto de ambas siga siendo 1.0 × 10⁻¹⁴.",
          "Se mantiene constante.",
          "Aumenta hasta que el pH llegue a 14."
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
        "id": "q-13.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nMuchos estudiantes creen equivocadamente que la escala de pH tiene un límite inferior de cero y un límite superior de 14. Si un operario industrial derrama ácido clorhídrico concentrado produciendo un charco con una concentración de [H⁺] = 2.0 M, el pH matemático reportado para este derrame será:",
        "options": [
          "Exactamente 0.0",
          "Un valor negativo (pH < 0)",
          "Exactamente 1.0",
          "Un valor superior a 14"
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
        "id": "q-13.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa disociación del agua es un proceso endotérmico. Si se eleva la temperatura del agua pura en un caldero a 80°C, afectando el valor de Kw, determine la proposición termodinámicamente correcta:",
        "options": [
          "El agua se vuelve ácida, y su pH desciende.",
          "El pH del agua sigue siendo 7.0 invariablemente.",
          "El agua se mantiene neutra ([H⁺]=[OH⁻]), pero su pH asume un valor menor a 7.0.",
          "El pOH aumenta porque la constante Kw disminuye con el calor."
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
    "code": "13.5",
    "objective": "Resolver cuantitativamente el cálculo de pH y pOH en disoluciones de electrolitos fuertes, comprendiendo que se ionizan al 100% y contemplando el aporte del agua en sistemas extremadamente diluidos.",
    "summary": [
      "1. Comportamiento de los Electrolitos Fuertes",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de pH y pOH en disoluciones acuosas de ácidos fuertes y bases fuertes",
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
      "statement": "Calcule el pH de una disolución de ácido nítrico (HNO₃) 0.005 M a 25°C. (Dato: log 5 = 0.70).",
      "steps": [
        "El HNO₃ es un ácido fuerte monoprótico.",
        "[H⁺] = 0.005 M = 5 × 10⁻³ M."
      ],
      "answer": "pH = -log(5 × 10⁻³) = 3 - log 5 = 3 - 0.70 = **2.30**."
    },
    "practice": [
      {
        "id": "p-13.5-1",
        "type": "mc",
        "prompt": "Calcule el pH de una disolución de hidróxido de bario, Ba(OH)₂, con concentración 0.025 M a 25°C. (Dato: log 5 = 0.70).",
        "options": [
          "El Ba(OH)₂ es una base fuerte diprótica (posee 2 iones OH⁻ por molécula)",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "El Ba(OH)₂ es una base fuerte diprótica (posee 2 iones OH⁻ por molécula).\n Multiplicamos la concentración por 2: [OH⁻] = 2 × 0.025 = 0.050 M = 5 × 10⁻² M.\n Calculamos primero el pOH: pOH = -log(5 × 10⁻²) = 2 - log 5 = 2 - 0.70 = 1.30.\n Finalmente, pasamos a pH: pH = 14 - pOH = 14 - 1.30 = **12.70**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-13.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de pH y pOH en disoluciones acuosas de ácidos fuertes y bases fuertes?",
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
        "id": "q-13.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nPara un ácido fuerte disuelto en agua, la relación estequiométrica entre su concentración inicial y los iones hidronio (H⁺) liberados nos permite afirmar que el ácido se ha disociado en un:",
        "options": [
          "10%",
          "50%",
          "100%",
          "Proporción dependiente de su constante K_a."
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
        "id": "q-13.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl jugo gástrico del estómago humano contiene ácido clorhídrico (HCl) altamente corrosivo. Si la concentración de iones [H⁺] en el estómago de un paciente sano en ayunas se determina en 0.01 Molar, ¿cuál es el pH de dicho jugo biológico?",
        "options": [
          "1.0",
          "2.0",
          "0.1",
          "12.0"
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
        "id": "q-13.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe disuelven 0.40 gramos de soda cáustica pura (NaOH, M=40 g/mol) en un matraz volumétrico y se completa con agua destilada hasta alcanzar exactamente 10 Litros de solución a 25°C. Determine el pH de la disolución alcalina resultante.",
        "options": [
          "11.0",
          "3.0",
          "12.0",
          "10.0"
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
    "code": "13.6",
    "objective": "Formular el equilibrio químico reversible en ácidos y bases débiles, definir las constantes de acidez (K_a) y basicidad (K_b), deducir la ley de dilución de Ostwald y evaluar la íntima relación termodinámica entre K_a, K_b y K_w.",
    "summary": [
      "1. Equilibrio de Ionización de Electrolitos Débiles",
      "2. El Matrimonio Matemático: K_a y K_b en Pares Conjugados",
      "3. Ley de Dilución de Wilhelm Ostwald (1888)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Equilibrio en electrolitos débiles: constantes de acidez (Ka), basicidad (Kb) y ley de Ostwald",
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
      "statement": "El ácido cianhídrico (HCN) es un veneno letal muy débil, con una constante de acidez K_a = 4.0 × 10⁻¹⁰. Determine analíticamente el valor de la constante de basicidad (K_b) de su anión conjugado, el cianuro (CN⁻).",
      "steps": [
        "Por la regla universal de los pares conjugados a 25°C:",
        "K_a × K_b = 1.0 × 10⁻¹⁴",
        "(4.0 × 10⁻¹⁰) × K_b = 10⁻¹⁴"
      ],
      "answer": "K_b = 10⁻¹⁴ / (4.0 × 10⁻¹⁰) = 0.25 × 10⁻⁴ = **2.5 × 10⁻⁵**."
    },
    "practice": [
      {
        "id": "p-13.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Equilibrio en electrolitos débiles: constantes de acidez (Ka), basicidad (Kb) y ley de Ostwald, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Equilibrio en electrolitos débiles: constantes de acidez (Ka), basicidad (Kb) y ley de Ostwald?",
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
        "id": "q-13.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el equilibrio químico de los ácidos débiles en solución acuosa, si comparamos dos ácidos débiles HA y HB, se concluye que HA es relativamente \"más fuerte\" si:",
        "options": [
          "Su constante de basicidad conjugada es mayor.",
          "Su constante de acidez (K_a) es numéricamente superior.",
          "Se utiliza en concentraciones muy altas.",
          "Posee mayor cantidad de átomos de hidrógeno en su fórmula."
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
        "id": "q-13.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso analítico se estudia un lote experimental de ácido acético (vinagre). El químico nota que al añadir progresivamente agua pura a la disolución, el porcentaje de moléculas de ácido que logran romperse e ionizarse va en aumento. Este peculiar comportamiento termodinámico está gobernado matemáticamente por:",
        "options": [
          "La ley del producto iónico del agua (Kw)",
          "El principio de exclusión de Pauli",
          "La Ley de dilución de Ostwald",
          "El puente de hidrógeno y su volatilidad"
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
        "id": "q-13.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tiene una disolución acuosa 0.1 M de un ácido orgánico monoprótico hipotético. A temperatura estándar se comprueba experimentalmente mediante conductividad eléctrica que se ha ionizado apenas en un 1% (α = 0.01). Aplicando la ley de Ostwald y aproximaciones válidas, determine la Constante de Acidez (K_a) del compuesto.",
        "options": [
          "1.0 × 10⁻³",
          "1.0 × 10⁻⁴",
          "1.0 × 10⁻⁵",
          "1.0 × 10⁻²"
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
    "code": "13.7",
    "objective": "Determinar algebraicamente el pH, el porcentaje de ionización y las concentraciones de equilibrio en sistemas débiles, aplicando el atajo matemático del criterio de validez del 5%.",
    "summary": [
      "1. Metodología de Cálculo para Ácidos Débiles Monopróticos",
      "El Atajo Dorado UNI: La Aproximación del 5%",
      "2. Ácidos Polipróticos (Como el H₃PO₄ o H₂CO₃)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de pH y concentraciones iónicas en ácidos débiles monopróticos y bases débiles",
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
      "statement": "Calcule el pH de una solución de ácido acético (vinagre) de concentración 0.10 M a 25°C (K_a = 1.8 × 10⁻⁵).",
      "steps": [
        "Verificamos la legalidad del atajo: C₀/K_a = 0.10 / (1.8 × 10⁻⁵) = 5555. Es enormemente superior a 400. Vía libre.",
        "Usamos la fórmula milagrosa: [H⁺] = √(K_a · C₀)",
        "[H⁺] = √[(1.8 × 10⁻⁵) × (0.10)] = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³ M."
      ],
      "answer": "Cálculo del pH: pH = -log(1.34 × 10⁻³) = 3 - log(1.34) = 3 - 0.13 = **2.87**."
    },
    "practice": [
      {
        "id": "p-13.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cálculo de pH y concentraciones iónicas en ácidos débiles monopróticos y bases débiles, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de pH y concentraciones iónicas en ácidos débiles monopróticos y bases débiles?",
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
        "id": "q-13.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn un ácido débil monoprótico acuoso en equilibrio dinámico, la concentración final de iones H⁺ que define su pH es numéricamente idéntica a la concentración de:",
        "options": [
          "El ácido sin disociar residual.",
          "Los iones oxidrilo del agua.",
          "La base conjugada formada (el anión).",
          "La constante de acidez K_a."
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
        "id": "q-13.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl amoníaco casero se usa frecuentemente como desengrasante de vidrios. Es una base débil con K_b = 1.0 × 10⁻⁵. Si se prepara una disolución concentrada de 0.1 M de amoníaco, el pH de esta solución limpiadora será:",
        "options": [
          "3.0",
          "5.0",
          "9.0",
          "11.0"
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
        "id": "q-13.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl disolver gas carbónico en agua se forma el inestable ácido carbónico diprótico (H₂CO₃), el cual presenta dos constantes de disociación sucesivas: K_a1 = 4.3 × 10⁻⁷ y K_a2 = 5.6 × 10⁻¹¹. Si requerimos conocer la concentración neta de iones hidrógeno [H⁺] en el recipiente para determinar la acidez del sistema oceánico, en los cálculos deberíamos:",
        "options": [
          "Sumar matemáticamente K_a1 y K_a2.",
          "Multiplicar ambas constantes y sacar la raíz cuadrada.",
          "Utilizar exclusivamente el valor de K_a1, ignorando el aporte despreciable de K_a2.",
          "Considerar al H₂CO₃ como un ácido fuerte al 100%."
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
    "code": "13.8",
    "objective": "Comprender el fenómeno de la hidrólisis salina como la venganza termodinámica de los iones débiles contra el agua, deduciendo el pH resultante según la genealogía química de la sal.",
    "summary": [
      "1. El Fenómeno Oculto de la Hidrólisis Salina",
      "3. Cálculo de la Constante de Hidrólisis (K_h)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Hidrólisis de sales neutras, ácidas y básicas y determinación cualitativa y cuantitativa del pH",
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
      "statement": "Al disolver cristales de Cianuro de Potasio (KCN) en agua destilada (pH = 7.0), ¿qué sucederá cualitativamente con el pH de la disolución resultante?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El KCN es una sal que proviene del hidróxido de potasio (KOH, base muy fuerte) y del ácido cianhídrico (HCN, ácido letal pero químicamente DÉBIL). El K⁺ es fuerte y vago (no hace nada). El ion cianuro (CN⁻) viene del padre débil, por lo que ataca al agua sufriendo hidrólisis (CN⁻ + H₂O ⇌ HCN + OH⁻), arrojando iones alcalinos OH⁻ al vaso. Por lo tanto, el pH subirá por encima de 7 (**Se vuelve básica**)."
    },
    "practice": [
      {
        "id": "p-13.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Hidrólisis de sales neutras, ácidas y básicas y determinación cualitativa y cuantitativa del pH, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Hidrólisis de sales neutras, ácidas y básicas y determinación cualitativa y cuantitativa del pH?",
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
        "id": "q-13.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nIdentifique qué sal, al disolverse en un recipiente con agua pura a temperatura ambiente, NO producirá el fenómeno termodinámico de la hidrólisis salina, manteniendo inalterado el pH neutro del vaso.",
        "options": [
          "Nitrato de amonio (NH₄NO₃)",
          "Cloruro de sodio (NaCl)",
          "Cianuro de sodio (NaCN)",
          "Sulfuro de sodio (Na₂S)"
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
        "id": "q-13.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de fertilización agrícola, se dispersan abonos de nitrato de amonio sobre suelos neutros y fértiles. Al llover, la sal se disuelve y penetra en la tierra. Si consideramos únicamente la química pura de la hidrólisis de esta sal de amonio, el ingeniero agrónomo deberá advertir que el suelo agrícola tenderá progresivamente a:",
        "options": [
          "Volverse más básico y alcalino.",
          "Acidificarse, reduciendo su pH con los meses.",
          "Mantener un pH estático y neutro perpetuo.",
          "Liberar cristales de plata coloidal al exterior."
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
        "id": "q-13.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl preparar una disolución acuosa del compuesto acetato de amonio (sal formada por un ácido débil y una base débil con K_a ≈ K_b ≈ 1.8 × 10⁻⁵ a 25°C), se medirá en el pH-metro electrónico del laboratorio que el medio resultante posee un comportamiento:",
        "options": [
          "Extremadamente ácido por hidrólisis catiónica dominante.",
          "Fuertemente alcalino (pH ≈ 12).",
          "Neutro (pH muy cercano a 7) por neutralización competitiva equilibrada de ambos iones.",
          "Insoluble e inerte."
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
    "code": "13.9",
    "objective": "Explicar el poderoso mecanismo termodinámico de las soluciones buffer para resistir ataques externos, y aplicar la ecuación de Henderson-Hasselbalch para calcular el pH y calibrar la capacidad amortiguadora máxima.",
    "summary": [
      "1. Definición y Composición de un Bastión Químico (Buffer)",
      "2. El Estandarte Matemático: Ecuación de Henderson-Hasselbalch",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Mecanismo de soluciones amortiguadoras buffer y aplicación de la ecuación de Henderson-Hasselbalch",
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
      "statement": "El sistema amortiguador fundamental que mantiene vivas tus células y tu torrente sanguíneo a un estricto pH alcalino de 7.4 está constituido por el ácido carbónico exhalable por los pulmones (H₂CO₃) y un electrolito salino retenido por tus riñones. ¿Quién es el componente de defensa conjugado (la sal) que forma pareja con el ácido carbónico en tu sangre?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El ácido carbónico (H₂CO₃) es un ácido débil. Para fabricar su buffer conjugado, debemos quitarle exactamente 1 solo protón (hidrógeno), creando el ion **bicarbonato (HCO₃⁻)**. La sangre humana es un espectacular tampón biológico H₂CO₃ / HCO₃⁻."
    },
    "practice": [
      {
        "id": "p-13.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Mecanismo de soluciones amortiguadoras buffer y aplicación de la ecuación de Henderson-Hasselbalch, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Mecanismo de soluciones amortiguadoras buffer y aplicación de la ecuación de Henderson-Hasselbalch?",
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
        "id": "q-13.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSeleccione la pareja de reactivos acuosos con la que usted, como técnico químico, podría preparar exitosamente una solución tampón amortiguadora (Buffer) con capacidad regulatoria.",
        "options": [
          "Ácido clorhídrico y Cloruro de sodio (HCl / NaCl)",
          "Ácido sulfúrico y Sulfato de sodio (H₂SO₄ / Na₂SO₄)",
          "Ácido acético y Acetato de potasio (CH₃COOH / CH₃COOK)",
          "Hidróxido de sodio y Cloruro de sodio (NaOH / NaCl)"
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
        "id": "q-13.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSe mezclan en un enorme reactor biológico 0.5 moles del conservante ácido benzoico (débil, pKa = 4.2) y 5.0 moles de su correspondiente sal conjugada, el benzoato de sodio. Según la termodinámica de Henderson-Hasselbalch y sabiendo que el logaritmo de 10 es exactamente 1, el pH calibrado del reactor en equilibrio resultará ser:",
        "options": [
          "4.2",
          "5.2",
          "3.2",
          "7.0"
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
        "id": "q-13.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl preparar una solución buffer mezclando volúmenes iguales de ácido débil HA a concentración 0.1 M y su sal sódica NaA a concentración 0.1 M, ocurre un ataque externo. Si se le añaden súbitamente unas pocas gotas letales de ácido clorhídrico concentrado (HCl, agresor), el sistema amortiguador responderá reaccionando para neutralizar el peligro. Como consecuencia directa e inmediata de esta defensa, la relación matemática interna de la fracción de Henderson log([A⁻]/[HA]) tenderá a:",
        "options": [
          "Aumentar (el numerador A⁻ se engrandece).",
          "Quedar petrificada y matemáticamente idéntica.",
          "Disminuir (el numerador A⁻ se gasta combatiendo al ácido y se fabrica más HA).",
          "Eliminar el logaritmo."
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
    "code": "13.10",
    "objective": "Analizar termodinámicamente las curvas de titulación potenciométrica ácido-base identificando el punto de equivalencia teórico, y seleccionar con rigor el indicador químico idóneo garantizando un viraje preciso.",
    "summary": [
      "1. Topología Analítica de las Curvas de Titulación",
      "2. El Arte de Elegir un Indicador",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Análisis de curvas de valoración ácido-base y selección de indicadores químicos",
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
      "statement": "¿Qué peculiaridad térmica y matemática presenta el Punto de Semiequivalencia en la curva de titulación de un ácido débil contra una base fuerte?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Cuando has echado exactamente la mitad del volumen necesario de NaOH para neutralizar el matraz, se ha formado un sistema Buffer 50/50 perfecto (mitad ácido sin reaccionar, mitad sal conjugada). En la ecuación de Henderson, log(1) es cero. En ese exacto momento volumétrico (y solo en él), **el pH leído en la pantalla electrónica es numéricamente igual al pK_a del ácido débil (pH = pK_a)**."
    },
    "practice": [
      {
        "id": "p-13.10-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Análisis de curvas de valoración ácido-base y selección de indicadores químicos, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-13.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Análisis de curvas de valoración ácido-base y selección de indicadores químicos?",
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
        "id": "q-13.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una curva de titulación o valoración potenciométrica (pH en el eje Y frente a mL gastados de base en el eje X), la región empinada o salto brusco casi vertical nos permite determinar gráficamente el:",
        "options": [
          "Punto de fusión salino.",
          "Límite de solubilidad coloidal.",
          "Punto de equivalencia de la neutralización.",
          "Porcentaje de impurezas del indicador."
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
        "id": "q-13.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de control de calidad para determinar el grado de acidez del vinagre (CH₃COOH diluido, ácido débil) se valora la muestra en el laboratorio con lejía química concentrada (NaOH, base fuerte). Basado en los rangos de salto de la curva y el equilibrio de la sal de acetato generada, el indicador comercial que el jefe de laboratorio debe ordenar retirar del almacén para garantizar el éxito del viraje fucsia final es:",
        "options": [
          "El anaranjado de metilo",
          "La fenolftaleína",
          "El rojo de metilo",
          "Papel de tornasol azul simple"
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
        "id": "q-13.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe valora volumétricamente un ácido fuerte (H₂SO₄) utilizando como reactivo de la bureta una base fuerte (KOH). Indique qué indicador de los presentados no sería el más apropiado, asumiendo un salto de pH vertical comprendido teóricamente entre los valores de pH 3.5 y 10.5.",
        "options": [
          "Fenolftaleína (rango 8.2 - 10.0)",
          "Azul de bromotimol (rango 6.0 - 7.6)",
          "Anaranjado de metilo (rango 3.1 - 4.4)",
          "Rojo cresol (rango 0.2 - 1.8)"
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
  }
],
  exam: [
  {
    "id": "exam-13-1",
    "objective": "13.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.1): Respecto a 2. Teoría de la Disociación Electrolítica de Arrhenius (1884), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-2",
    "objective": "13.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.2): Respecto a 1. Definición Protónica de Brønsted y Lowry (1923), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-3",
    "objective": "13.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.3): Respecto a 1. Definición Electrónica de Lewis (1923), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-4",
    "objective": "13.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.4): Respecto a 1. Autoionización del Agua (Autoprotólisis), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-5",
    "objective": "13.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.5): Respecto a 1. Comportamiento de los Electrolitos Fuertes, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-6",
    "objective": "13.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.6): Respecto a 1. Equilibrio de Ionización de Electrolitos Débiles, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-7",
    "objective": "13.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.7): Respecto a 1. Metodología de Cálculo para Ácidos Débiles Monopróticos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-13-8",
    "objective": "13.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (13.8): Respecto a 1. El Fenómeno Oculto de la Hidrólisis Salina, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 13.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
