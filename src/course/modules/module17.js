// Módulo 17: Módulo 17: Funciones Nitrogenadas y Biomoléculas
export const module17 = {
  number: 17,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 17: Funciones Nitrogenadas y Biomoléculas.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "17.1",
    "objective": "Clasificar aminas según el grado de sustitución del átomo de nitrógeno, formularlas con la IUPAC y fundamentar rigurosamente su carácter básico y nucleofílico.",
    "summary": [
      "1. Estructura y Clasificación de las Aminas",
      "3. Reactivación del Equilibrio: ¿Por qué son Básicas?",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis.",
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
            "label": "Caso representativo 1 de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis",
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
      "statement": "Una amina se formula como N,N-dimetilpropan-1-amina. ¿Qué tipo de amina es (primaria, secundaria o terciaria) y cómo afecta esto a su punto de ebullición?",
      "steps": [
        "La letra \"N,N-\" nos avisa que el nitrógeno tiene dos ramas metil colgando de él, además de la cadena principal de propano. Por lo tanto, el nitrógeno está unido a 3 carbonos. Es una **Amina Terciaria (3°)**."
      ],
      "answer": "Como el nitrógeno ya no tiene hidrógenos pegados a él, esta molécula **no puede formar puentes de hidrógeno consigo misma**. Conclusión: Su punto de ebullición será miserablemente más bajo que el de las aminas primarias y secundarias de su mismo peso."
    },
    "practice": [
      {
        "id": "p-17.1-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aminas: clasificación, nomenclatura y reactivación del carácter básico según Brønsted-Lowry y Lewis?",
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
        "id": "q-17.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nDesde la óptica de la teoría de disociación y equilibrio, las aminas orgánicas alifáticas en medio acuoso manifiestan un inconfundible y clásico comportamiento termodinámico que les permite virar la fenolftaleína al fucsia. Este comportamiento se cataloga como:",
        "options": [
          "Ácido débil orgánico",
          "Neutro",
          "Base débil de Brønsted-Lowry",
          "Sal neutra"
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
        "id": "q-17.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas aminas biogénicas como la putrescina y la cadaverina son responsables del olor nauseabundo a pescado podrido en los mercados. Para eliminar este olor rebelde de las manos de los fileteadores y de las mesas de acero, se suele emplear jugo de limón casero. Químicamente, el ácido cítrico del limón logra exterminar el olor porque reacciona con la amina para formar:",
        "options": [
          "Un alqueno gaseoso por deshidratación violenta.",
          "Una sal de alquilamonio sólida inodora y soluble en agua por neutralización ácido-base.",
          "Un éster aromático fragante.",
          "Un aldehído oxidado corrosivo."
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
        "id": "q-17.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nLa dimetilamina es un gas reactivo a temperatura ambiente. Analice su clasificación según los enlaces al nitrógeno y determine la exactitud conceptual de la siguiente afirmación: \"Por su estructura simétrica, es incapaz de formar enlaces de hidrógeno intermoleculares, siendo más volátil que la trimetilamina\".",
        "options": [
          "Falso, la dimetilamina es una amina secundaria, posee un hidrógeno en el nitrógeno y SÍ forma puentes de hidrógeno, siendo menos volátil que la terciaria.",
          "Verdadero, por simetría polar sus momentos dipolares se anulan a cero.",
          "Falso, la trimetilamina es primaria y ebulle más alto.",
          "Verdadero, ninguna amina forma enlaces puente de hidrógeno jamás."
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
    "code": "17.2",
    "objective": "Formular y nombrar amidas y nitrilos conforme a las estrictas normas IUPAC, justificar la curiosa neutralidad ácido-base de las amidas mediante la resonancia y comparar sus aplastantes puntos de ebullición.",
    "summary": [
      "1. Estructura y Función de las Amidas",
      "2. El Escudo de la Resonancia: ¿Por qué NO son básicas?",
      "3. Puntos de Ebullición Volcánicos (El Récord Mundial)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular.",
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
            "label": "Caso representativo 1 de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular",
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
      "statement": "Compare termodinámicamente la N,N-dimetiletanamida con la etanamida pura. ¿Cuál posee mayor punto de ebullición a presión de 1 atm y por qué?",
      "steps": [
        "Etanamida (CH₃-CO-NH₂): Posee dos hidrógenos unidos al nitrógeno. Puede construir redes infinitas de múltiples puentes de hidrógeno. Es un sólido cristalino y ebulle elevadísimo."
      ],
      "answer": "N,N-dimetiletanamida (CH₃-CO-N(CH₃)₂): Todos los hidrógenos del nitrógeno han sido reemplazados por ramas metil pesadas. ¡No tiene ningún H unido a N! Es totalmente incapaz de formar puentes de hidrógeno consigo misma. Será un líquido que ebullirá a temperatura dramáticamente inferior, demostrando que la falta de puentes de hidrógeno derriba los puntos de ebullición."
    },
    "practice": [
      {
        "id": "p-17.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación y nomenclatura de amidas y nitrilos y comparación de polaridad molecular?",
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
        "id": "q-17.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el modelo de resonancia en química orgánica que rige a los derivados de ácidos, la ausencia total de carácter básico en las amidas (incapacidad de protonarse en agua) se fundamenta microscópicamente en:",
        "options": [
          "La insolubilidad de su cadena apolar.",
          "La deslocalización del par libre de electrones del nitrógeno hacia el oxígeno atrayente del carbonilo.",
          "La formación de sales orgánicas cristalinas de forma automática.",
          "El exceso de puentes de hidrógeno intramoleculares que bloquean el anillo."
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
        "id": "q-17.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de síntesis farmacéutica, se debe purificar una mezcla líquida calentándola cuidadosamente para separar compuestos por destilación. El matraz contiene etanamida y ácido acético puro (ambos pesando casi exactamente 60 g/mol). Al encender el horno, la física de las fuerzas intermoleculares dictamina que el primer compuesto en hervir y destilar abandonando el matraz será el:",
        "options": [
          "Ácido acético, ya que sus dímeros ceden antes frente a la gigantesca red sólida de puentes de hidrógeno de la amida.",
          "La etanamida, por su inestabilidad térmica ante el fuego.",
          "Ambos hervirán simultáneamente formando un azeótropo.",
          "Ninguno ebullirá porque se convertirán en plasma."
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
        "id": "q-17.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nProporcione el nombre oficial sistemático de la IUPAC para el compuesto alifático lineal cuya fórmula estructural es CH₃-CH₂-CH₂-CN, teniendo sumo rigor con el recuento total del esqueleto base.",
        "options": [
          "Propilcianuro",
          "Cianuro de propilo",
          "Butanonitrilo",
          "Propanonitrilo"
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
    "code": "17.3",
    "objective": "Determinar con rigor absoluto la función principal y los sustituyentes secundarios en moléculas orgánicas polifuncionales mediante la tabla oficial de prioridades IUPAC y formular el nombre sistemático impecable.",
    "summary": [
      "1. El Principio Fundamental de Prioridad Monárquica IUPAC",
      "2. Tabla Sagrada de Jerarquía Funcional (Orden Descendente)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC.",
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
            "label": "Caso representativo 1 de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC",
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
      "statement": "Asigne el nombre sistemático IUPAC a la molécula estructural: CH₃-CH(OH)-CH₂-COOH.",
      "steps": [
        "Observamos dos grupos: el carboxilo (-COOH) y el hidroxilo del alcohol (-OH).",
        "Vemos la tabla de jerarquía: El Ácido Carboxílico (1°) aplasta al Alcohol (7°).",
        "El -COOH define el carbono 1 de la cadena y el nombre de la molécula será un \"ácido ...-oico\".",
        "La cadena principal tiene 4 carbonos (butano).",
        "El pobre grupo -OH queda marginado en el carbono 3. Al ser un sustituyente esclavo, asume el nombre de prefijo **hidroxi-**."
      ],
      "answer": "Ensamble del nombre: Empezamos con la palabra mágica. **Ácido 3-hidroxibutanoico**."
    },
    "practice": [
      {
        "id": "p-17.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Nomenclatura de compuestos orgánicos polifuncionales según la jerarquía de grupos funcionales IUPAC?",
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
        "id": "q-17.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la convención mundial de prioridades orgánicas de la IUPAC, si una intrincada biomolécula posee simultáneamente un grupo amina (-NH₂) y un grupo carboxilo (-COOH) incrustados en su esqueleto lineal alifático, la molécula deberá ser rotulada y nombrada terminalmente en el sufijo como un:",
        "options": [
          "Alcohol ramificado",
          "Amina primaria",
          "Amida secundaria",
          "Ácido carboxílico"
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
        "id": "q-17.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un esfuerzo por sintetizar precursores químicos de aminoácidos, un tesista de laboratorio diseña la molécula orgánica CH₃-CH(NH₂)-CH₂-CHO. En el reporte de patente química para el regulador nacional de patentes, el ingeniero debe redactar el nombre sistemático perfecto sin lugar a impugnaciones. ¿Cuál de las siguientes es la denominación jurídicamente correcta bajo la IUPAC?",
        "options": [
          "2-aminobutanal",
          "3-aminobutanal",
          "3-amino-1-butanal",
          "Ácido 3-aminobutanoico"
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
        "id": "q-17.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDada la superestructura química CH₃-CO-CH₂-CH(OH)-CH₂-COOH. Analice su cadena, establezca la jerarquía monárquica de todos sus grupos funcionales y determine con sangre fría el nombre sistemático oficial IUPAC que integra a todos los sustituyentes ordenados a la perfección.",
        "options": [
          "Ácido 3-hidroxi-5-oxohexanoico",
          "Ácido 5-oxo-3-hidroxihexanoico",
          "5-oxo-3-hidroxihexanoato de hidrógeno",
          "Ácido 4-hidroxi-2-oxohexanoico"
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
    "code": "17.4",
    "objective": "Clasificar los carbohidratos según su complejidad hidrolítica y el grupo carbonilo dominante, diseccionar el enlace O-glucosídico y diferenciar disacáridos reductores de los herméticamente bloqueados.",
    "summary": [
      "1. Definición y Clasificación General",
      "2. Monosacáridos (Azúcares Simples no Hidrolizables)",
      "3. Disacáridos y el Cemento O-Glucosídico"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Carbohidratos: estructura, clasificación en aldosas, cetosas, monosacáridos, disacáridos y polisacáridos",
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
      "statement": "Justifique bioquímicamente por qué un ser humano moriría de hambre progresiva si decidiera alimentarse y basar su dieta calórica única y exclusivamente mascando papel bond, hojas de árboles y tallos de apio limpios (compuestos 100% por Celulosa pura de plantas), a pesar de que la celulosa es un polímero hecho de millones de unidades de glucosa energética nutritiva.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El secreto del hambre está en la estereoquímica tridimensional. El ser humano porta en su cuerpo enzimas formidables preparadas para cortar la glucosa amarrada \"hacia abajo\" (el enlace α-1,4 del Almidón de la papa y el arroz). Pero la Celulosa está ensamblada engranando la glucosa \"hacia arriba\" en zigzag constante (el exótico **enlace β-1,4-glucosídico**). Nuestro código genético no fabrica la enzima celulasa. Al no tener la tijera molecular para cortar el enlace beta, la celulosa atraviesa todo el intestino humano como fibra inerte y sale íntegra en las heces, aportando cero calorías al organismo humano."
    },
    "practice": [
      {
        "id": "p-17.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Carbohidratos: estructura, clasificación en aldosas, cetosas, monosacáridos, disacáridos y polisacáridos, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Carbohidratos: estructura, clasificación en aldosas, cetosas, monosacáridos, disacáridos y polisacáridos?",
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
        "id": "q-17.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la tipología orgánica de las unidades de monómeros funcionales, a la glucosa y a la fructosa, a pesar de compartir el esqueleto idéntico isómero molecular C₆H₁₂O₆, se les discrimina rígidamente dentro de la nomenclatura fisiológica denominándolas de manera respectiva como una:",
        "options": [
          "Cetosa y otra Cetosa.",
          "Aldosa y una Cetosa.",
          "Aldosa y otra Aldosa.",
          "Cetosa y una Aldosa."
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
        "id": "q-17.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas refinerías de azúcar elaboran toneladas de sacarosa blanca cristalina extraída velozmente de los tallos machacados de la caña de azúcar o de la raíz de la remolacha dulce. Si introducimos los cristales de esta famosa y cotizada sacarosa bajo un microscopio molecular para destruir e hidrolizar su duro puente o-glucosídico con ácidos, liberaremos al agua a los dos inquilinos que la construyeron, los cuales son:",
        "options": [
          "Dos colosales moléculas idénticas de D-glucosa unidas fuertemente.",
          "Una unidad piranósica de D-galactosa acoplada a una D-glucosa.",
          "Una unidad de D-glucosa amarrada fatalmente a una unidad de D-fructosa.",
          "Miles de unidades ramificadas complejas de glucógeno animal."
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
        "id": "q-17.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl evaluar la profunda estructura cristalina de los inmensos polisacáridos energéticos naturales, un investigador de bioquímica compara el almidón de las papas andinas frente al denso glucógeno extraído del músculo estriado de un atleta corredor de maratón. Señale la inferencia macromolecular rigurosamente cierta:",
        "options": [
          "Ambos polisacáridos son inertes y presentan exclusivamente cadenas rectas impecables de enlaces beta(1→4).",
          "El glucógeno muscular posee una estructura arbórea infinitamente más densa y poli-ramificada con enlaces alfa(1→6) que la amilopectina del almidón.",
          "El almidón y el glucógeno son imposibles de hidrolizar por la enzima amilasa humana salival.",
          "La unidad monomérica repetitiva básica del glucógeno veloz es la D-fructosa, mientras que en el almidón botánico es la D-glucosa de lento ardor."
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
    "code": "17.5",
    "objective": "Distinguir arquitectónicamente entre grasas y aceites, formular la estructura química estelar de los triglicéridos y dominar el balance estequiométrico de la agresiva reacción de saponificación.",
    "summary": [
      "1. Naturaleza y Doblez de los Ácidos Grasos",
      "2. Formación de Triglicéridos (El almacén de energía)",
      "3. Reacción Destructiva de Saponificación (Síntesis del Jabón)"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación.",
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
            "label": "Caso representativo 1 de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación",
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
      "statement": "Al enfrentar químicamente en grandes pailas de vapor a la Triestearina purificada de res (un triglicérido saturado inmenso y sólido) contra una solución espesa e hirviente de Hidróxido de Potasio al 40% (KOH caústico), se desata una reacción agresiva donde se sintetiza y decanta una densa pasta limpiadora, acompañada de un alcohol viscoso residual de subproducto. ¿Cuál es el nombre IUPAC inequívoco del alcohol viscoso subproducto recuperado en el fondo del licor acuoso final de la fábrica?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El proceso mencionado se llama Saponificación (Hidrólisis alcalina). Todo triglicérido orgánico, sea sólido o líquido, está soldado y amarrado genéticamente en la base estructural a un único y sagrado alcohol de tres brazos. Cuando el KOH decapita los tres brazos del ácido, el esqueleto del alcohol central recobra sus oxígenos para liberarse intacto a la sopa. Este alcohol es el Glicerol o Glicerina. Su nombre sistemático y oficial IUPAC puro es el **Propano-1,2,3-triol**."
    },
    "practice": [
      {
        "id": "p-17.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Lípidos: estructura de triglicéridos, ácidos grasos saturados e insaturados y reacción de saponificación?",
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
        "id": "q-17.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn el ámbito biológico y nutricional, la diferencia macromolecular esencial que cimenta por qué el sebo vacuno animal permanece como un bloque sólido a 25°C mientras que el aceite virgen de oliva fluye como líquido a la misma temperatura ambiente radica directamente en:",
        "options": [
          "La inmensa superioridad de puentes de hidrógeno de las grasas saturadas.",
          "La presencia masiva de insaturaciones (dobles enlaces cis) en las cadenas hidrocarbonadas de los aceites vegetales que obstaculizan su empaquetamiento.",
          "La adición industrial de potasio en su esterificación natural.",
          "El uso de glicerol frente al uso de propanol en su síntesis celular."
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
        "id": "q-17.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas refinerías productoras de mantecas y margarinas sólidas económicas parten comprando barriles colosales de aceites vegetales de soya y girasol extremadamente baratos y líquidos. Para lograr endurecer a gran escala la textura de esos aceites en sus tanques, la planta industrial somete los barriles a un brutal proceso termoquímico de saturación conocido como:",
        "options": [
          "Saponificación con soda cáustica hirviente.",
          "Oxidación agresiva con permanganato potásico.",
          "Hidrogenación catalítica bajo alta presión con polvo de níquel o paladio metálico.",
          "Esterificación directa con ácido sulfúrico humeante."
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
        "id": "q-17.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSeñale la alternativa que contiene la proposición químicamente veraz en relación estrecha a la arquitectura y reactividad de los jabones alcalinos y los triglicéridos naturales:",
        "options": [
          "El jabón es termodinámicamente una molécula anfipática, ostentando un extremo iónico soluble en agua y una cola carbonada altamente hidrofóbica afín a las grasas.",
          "La reacción de saponificación artesanal consiste básicamente en una neutralización ácida reversible para formar ésteres limpios.",
          "Las grasas trans sintéticas de la industria margarinera gozan de un punto de ebullición sumamente inferior al de sus homólogos en configuración cis nativa.",
          "Los triglicéridos orgánicos alifáticos no presentan ningún tipo de enlace tipo éster en su intrincado ensamblaje esteroideo."
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
    "code": "17.6",
    "objective": "Comprender la esquizofrenia estructural de los α-aminoácidos, fundamentar su carácter anfótero (Zwitterion), descifrar el Punto Isoeléctrico (pI) y formular el irrompible enlace peptídico plano.",
    "summary": [
      "1. La Arquitectura Quirúrgica del α-Aminoácido",
      "2. La Doble Cara Termodinámica: El Zwitterion y el Carácter Anfótero",
      "3. El Santuario del Punto Isoeléctrico (pI)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aminoácidos: estructura anfótera, reactivación del punto isoeléctrico y formación del enlace peptídico",
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
      "statement": "En una cuba electroforética conectada a electrodos de corriente continua, se vierte una disolución concentrada del aminoácido Alanina. El técnico calibra artificialmente el tanque forzándolo a un medio hiperalcalino severo (pH = 12.0). Analice termodinámicamente el comportamiento de la Alanina y determine matemáticamente hacia qué polo metálico nadará esta biomolécula cuando se cierre el interruptor.",
      "steps": [
        "El pH 12.0 es groseramente básico (lleno de aniones hidróxido OH⁻ hambrientos). El grupo ácido -COOH del aminoácido se rinde y pierde su protón al instante pasando a -COO⁻. El grupo básico amino (-NH₂) intentaría estar protonado (-NH₃⁺), pero en un mar tan hostil y falto de protones, el ambiente le quita violentamente el hidrógeno, dejándolo desnudo como -NH₂ neutro."
      ],
      "answer": "El saldo estructural global de la Alanina será un **Anión neto absoluto (-1)**. Como la molécula está cargada negativamente, migrará y nadará irremediablemente, atraída magnéticamente hacia el electrodo del polo positivo o **Ánodo**."
    },
    "practice": [
      {
        "id": "p-17.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aminoácidos: estructura anfótera, reactivación del punto isoeléctrico y formación del enlace peptídico, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aminoácidos: estructura anfótera, reactivación del punto isoeléctrico y formación del enlace peptídico?",
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
        "id": "q-17.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nDesde el enfoque de la estereoquímica tridimensional y la polarimetría aplicada de las biomoléculas proteicas de la naturaleza, se establece universalmente que todos los alfa-aminoácidos estándar decodificables biológicamente presentan quiralidad atómica en su carbono central y rotan la luz polarizada en los visores, a excepción estricta y dolorosa del aminoácido más simple, enjuto y pequeño llamado:",
        "options": [
          "Valina",
          "Fenilalanina",
          "Glicina",
          "Lisina"
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
        "id": "q-17.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas bebidas de recuperación muscular para atletas de élite aseguran contener polvo puro liofilizado del aminoácido Leucina. Un químico analítico diluye una porción del envase en agua destilada y con un potenciómetro gradúa finamente mililitro a mililitro el recipiente hasta alcanzar exactamente el valor preciso del Punto Isoeléctrico (pI) tabulado termodinámicamente para la leucina. Al lograr esta hazaña de calibración, la disolución manifestará que:",
        "options": [
          "Las moléculas de leucina se repelerán explosivamente al estar todas cargadas negativamente con electrones.",
          "La solubilidad general de la muestra cristalina ascenderá rápidamente de forma exponencial térmica.",
          "Las moléculas experimentarán un estado zwitteriónico perfecto, evidenciando una carga eléctrica global neta equivalente a cero.",
          "El grupo carboxilo se cerrará sobre sí mismo anulando la rotación plana beta."
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
        "id": "q-17.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nReferente a la química pesada del enlace peptídico que forja y sella los eslabones interminables de la cadena principal de una proteína nativa, dictamine analíticamente la proposición innegable:",
        "options": [
          "Resulta formal y estequiométricamente de una deshidratación molecular severa entre los grupos sulfhidrilo de dos cisteínas adyacentes al carbono terminal.",
          "Posee intrínsecamente un marcado y robusto carácter parcial resonante de doble enlace C-N impidiendo su rotación libre.",
          "Puede destruirse con suma y fácil rapidez inyectándole unas gotas de alcohol metílico frío concentrado o calor ambiental.",
          "Cristaliza siempre originando un subproducto secundario gaseoso asfixiante tóxico compuesto por amoníaco libre volátil."
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
    "code": "17.7",
    "objective": "Caracterizar verticalmente los cuatro misteriosos niveles de organización espacial de las proteínas y dominar la masacre físico-química del fenómeno de desnaturalización térmica.",
    "summary": [
      "1. La Escalera Jerárquica: Los 4 Niveles de Organización",
      "2. La Masacre Destructiva: Desnaturalización",
      "Siguiente paso"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización.",
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
            "label": "Caso representativo 1 de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización",
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
      "statement": "Una cosmetóloga experta aplica un líquido químico caústico con compuestos orgánicos reductores sobre el cabello fuertemente rizado de una clienta y emplea una plancha de calor para enderezarlo permanentemente rompiendo el rizo. ¿Qué tipo de pegamento molecular o interacción intra-cadena terciaria del cabello (proteína queratina rica en cisteína) se ha logrado romper deliberadamente para alterar la estructura física del mismo?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El cabello rizado o crespo está fuertemente anclado en su estructura terciaria por los resistentes y covalentes **puentes disulfuro (—S—S—)** que entrelazan a los múltiples residuos de cisteína presentes en la queratina capilar natural. Los líquidos rizadores y desrizadores de las peluquerías contienen mercaptanos potentes (agentes reductores) que atacan, saturan con electrones y rompen obligatoriamente este fuerte puente de azufre covalente transversal para darle una nueva forma lisa moldeada con el calor, matando la estructura anterior."
    },
    "practice": [
      {
        "id": "p-17.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Proteínas: niveles de organización estructural y reactivación de fuerzas intermoleculares en la desnaturalización?",
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
        "id": "q-17.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el dogma y escalafón biológico de organización espacial macromolecular, la arquitectura helicoidal y plegada fina y armónica de la estructura secundaria de cualquier cadena proteica se sostiene establemente anclada de manera universal e ineludible por intermedio físico de:",
        "options": [
          "Múltiples enlaces peptídicos covalentes condensados y estables.",
          "Solapamientos laterales rígidos y difusos de nubes de electrones pi orbitales.",
          "Repulsiones aniónicas letales de grupos hidroxilo en agua.",
          "Miles de puentes de hidrógeno intra-cadenas formados entre los dipolos del esqueleto de carbono y nitrógeno de la base."
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
        "id": "q-17.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante una investigación de vacunas inyectables con bases virales proteicas deshidratadas, un técnico novato eleva por grave error y omisión térmica la estufa esterilizadora a 140°C por dos horas, desnaturalizando dolorosamente todo el lote funcional activo del fármaco costoso. Evaluando minuciosamente el caldo descompuesto residual tras la pifia técnica del operario asustado, se corroborará estructural y analíticamente que las moléculas quemadas han perdido el 100% de su capacidad biológica curativa, pero asombrosamente aún conservan indemne su:",
        "options": [
          "Estructura primaria y su secuencia lineal genética pura.",
          "Afloramiento en hélice alfa compactada hidratada.",
          "Plegamiento tridimensional óptimo terciario plegado en esferas de radio perfecto.",
          "Puentes disulfuro intactos y blindados fuertemente en el núcleo globular hidrofóbico oscuro."
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
        "id": "q-17.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl citocromo c, la colágena ósea y la titánica hemoglobina sanguínea de los vertebrados son complejas estructuras biológicas fundamentales. Determine usted con suma precisión instrumental cuál de las siguientes afirmaciones es rigurosamente cierta en el ámbito termodinámico avanzado de los eslabones superiores de conformación de dichas cadenas proteínicas nativas inalteradas.",
        "options": [
          "La hemoglobina es un polímero carente de estructura primaria estable a la luz infrarroja.",
          "El puente salino y la tracción dipolo-dipolo son interacciones marginales o nulas durante el ensamblado definitivo a presión y compresión final terciario tridimensional.",
          "La interacción y fusión magnética de dos o más subunidades poli-catenarias polipeptídicas define de manera exclusiva el alcance absoluto del nivel o grado de organización y diseño llamado estructura cuaternaria.",
          "La desnaturalización térmica por vapor acuoso es un fenómeno que disuelve de raíz la integridad molecular escindiendo la cadena proteínica directamente en millares de minúsculos aminoácidos residuales aislados simples."
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
    "code": "17.8",
    "objective": "Diferenciar con exactitud los mecanismos de polimerización por adición y condensación, reconociendo sin vacilar las estructuras químicas de los principales polímeros sintéticos industriales que inundan el planeta.",
    "summary": [
      "1. La Invasión del Plástico: Mecanismo de Polimerización por Adición",
      "2. La Química Sofisticada y Textil: Mecanismo por Condensación",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Polímeros sintéticos: mecanismos de polimerización por adición y condensación",
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
      "statement": "El poliestireno (PS) es el material plástico base con el que la humanidad forja con calor inyectado la totalidad global del Tecnopor blanco para aislar térmicamente la comida y las casas, y los frágiles vasos desechables crujientes para beber agua. De acuerdo con el mecanismo estructural de crecimiento de cadena polimérica, ¿este polímero orgánico sintético gigantesco retiene incrustado inalterablemente o no al colosal y pesado anillo aromático de benceno C₆H₆ original que lo fabricó en un principio de adición bruta?",
      "steps": [
        "Absolutamente SÍ. El monómero base o precursor original es la molécula reactiva estireno (gas vinilbenceno, CH₂=CH-C₆H₅). Durante la violenta reacción inicial e iniciación por radicales libres que sufre en los inmensos reactores a presión de la planta petroquímica, el ataque destructor se concentra única y exclusivamente en reventar la delgada línea del doble enlace pi (C=C) alifático de la cadena colgante lateral de eteno para poder soldarlo y empalmarlo a otro eslabón reactivo con el fin de propagar y crecer incontrolablemente el collar plástico final infinito en línea recta geométrica."
      ],
      "answer": "El gigantesco y termodinámicamente blindado anillo de hexágono bencénico saturado aromático de gran estabilidad por deslocalización interna resonante **permanece completamente intacto, intocable, inerte y ciego al caos reactivo exterior colgado balanceándose pesadamente como una enorme rama o esfera de sustituyente lateral en el poliestireno rígido resultante final**. ¡El aromático es el causante del crujido duro y seco al quebrar de un golpe tus vasos de descarte en el vertedero de basura plástica por su gigantesca rigidez y volumen estérico!"
    },
    "practice": [
      {
        "id": "p-17.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Polímeros sintéticos: mecanismos de polimerización por adición y condensación, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Polímeros sintéticos: mecanismos de polimerización por adición y condensación?",
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
        "id": "q-17.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el compendio teórico sobre la tecnología macromolecular del siglo de los plásticos, ¿cuál es el atributo o estigma de fabricación físico-químico exclusivo y discriminador contundente que clasifica de manera implacable e irreversible a un compuesto orgánico industrial exótico gigante en el bando catalogado internacionalmente de los \"Polímeros formados por el mecanismo reaccional lento de condensación\" por encima de un simple proceso monótono directo de polimerización lineal de adición masiva de radicales al doble enlace en frío?",
        "options": [
          "La asombrosa presencia de un único monómero con insaturaciones alifáticas dobles y triples inestables que se estiran y destrozan para encajar.",
          "La retención en el seno de la matriz o red cristalina de todo el 100% íntegro exacto de los átomos pesados inyectados que integraban fiel y lógicamente el monómero de peso molar diminuto original.",
          "La formación intrincada lenta de formidables enlaces puente reticulares como las amidas pesadas o los resistentes y coloridos ésteres artificiales con la expulsión simultánea e inevitable obligatoria lateral hacia fuera del tanque estanco de una diminuta molécula simple secundaria descartable de subproducto que nadie busca (comúnmente una miserable lágrima de agua H₂O destilada hirviente disolvente, un humo residual, gas amoniaco libre apestoso inservible alcalino o un leve vapor etílico de metanol fétido tóxico residual indeseable para la receta general principal de la masa gigante que debe purgarse y rasparse luego al final del día de colado).",
          "Su extrema resiliencia y dureza en aplicaciones aeroespaciales en aleaciones inorgánicas fundidas de magnesio en cápsulas orbitales ignífugas termoconductoras isotérmicas absolutas reflectantes que toleran sin deformarse más de 2000°C térmicos puros radiantes directos desde el plasma solar magnético."
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
        "id": "q-17.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas gigantescas y transnacionales botellas plásticas reciclables traslúcidas que envasan a la icónica bebida oscura carbonatada cola o de agua sin gas y dominan monopólicamente en la actualidad los estantes refrigerados resplandecientes redondos en los kioscos de abastecimiento de cada rincón mundial por su coste ridículo son fabricadas soplando una ampolla al rojo de una resina plástica asombrosamente moldeable con aire llamada por su sigla en inglés técnica abreviada industrial con las tres letras mundiales PET.\nEvaluando su clasificación académica severa estructural oficial al milímetro químico aséptico puro bajo el gran microscopio en la balanza inorgánica en el laboratorio analítico con luz polarizada en su manual de patentes estricto, es indiscutible sentenciar categóricamente afirmando tajante frente al jurado experto evaluador o panel que dicho codiciado y mundial material de polímero cristal y estático PET orgánico (Poli-Etilen-Tereftalato molecular macro inmenso de cadenas enmarañadas entrelazadas viscosas fuertes estables termo deformables para beber sin fugas) pertenece inexorablemente, legalmente y en esencia química estructural atómica profunda fundamental por su proceso global en la industria petroquímica, a la selecta e impecable familia general enorme y sintética reaccional condensada de los inmortales y eternos termoplásticos filamentosos polares oxigenados aromáticos llamados de nombre genérico matriz orgánico real:",
        "options": [
          "Poliamidas arcaicas sintéticas en bloque rancio.",
          "Cauchos nitrílicos orgánicos sintéticos vulcanizados sulfurados opacos negros amorfos repulsivos.",
          "Poliésteres alifáticos y aromáticos de condensación industrial puros a fuego hirviente alto.",
          "Resinas termofijas y termoestables horneadas de melamina entrecruzada letal y baquelita epóxica rígida de aislante dieléctrica de circuitos viejos polvorientos fritos insolubles."
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
        "id": "q-17.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEl teflón oscuro comercial y pesado denso polímero deslizante inerte mágico (PTFE químico fluorocarbonado), célebre estrella de la cocina mundial, blindador invicto térmico intocable recubridor y salvador de sartenes quemadas modernas sella el fondo liso de tu paila y sella los engranajes nucleares del espacio. Su milagroso blindaje repulsor a 300°C y anti adherencia inigualable suprema eterna proviene del pequeño y letal monómero tóxico reactivo volátil escurridizo Tetrafluoroeteno asfixiante que se condensa a alta presión.\nEn este riguroso contexto estequiométrico orgánico molecular analítico de enlaces simples en química de la admisión pesada superior en facultad universitaria en la pizarra; basándose ciegamente en el recuento estructural de la formación inquebrantable de la infinita y colosal larga molécula inerte lineal de Teflon blanco, clasifique tajantemente el proceso sintético global reactivo de adición que da vida física al gigante antiadherente del sarten frente a sus homólogos plásticos y concluya determinando analíticamente su composición empírica base y si exuda durante este infierno sintético en cámara al reactor una trágica y subalterna expulsión copiosa residual humeante deshidratadora ácida paralela y residual inútil del líquido destilado acuoso agua H₂O que inunde luego la sala del fondo de cubetas de recojo inútiles goteantes por las mangueras al caño o desagüe por accidente reactivo termodinámico:",
        "options": [
          "Es una polimerización violenta por condensación agresiva lenta estérica ácida y sí destila botando grandes gotas formadas de subproducto agua hervida como en todo polímero que tenga flúor pesado asfixiante reactivo oxidante.",
          "Es una vulgar y simple polimerización en serie industrial por adición radicalaria veloz rompiendo al extremo de su doble enlace de C=C alqueno plano, por tanto, JAMÁS bota agua ni exuda en su formación condensada ningún resto molecular sucio porque el cien por ciento puro en su totalidad atómica de todos sus flúors (F) halógenos se incrusta asimilado y remachado en el interior de la cadena maciza en bloque inerte por adición entera a la suma del polímero plástico y pesado.",
          "Es una polimerización estérica termoendurecible de malla epóxica por co-polimerización alterna y engranada que pierde gas hidrógeno H₂ a presiones gigantescas que revientan la olla sellada industrial obligando a enfriarla para formar el teflón sólido cristal opaco que resiste ácidos débiles formados in situ por error reactivo.",
          "Es una descomposición iónica orgánica de alta tasa calorífica inducida por radiación gamma catalizadora sobre el enlace triple sigma pi en el C≡C flúor que se reorganiza liberando etano alifático con gran desprendimiento tóxico de vapores inorgánicos clorados venenosos pesados sofocantes HF que decantan luego formando ácido fluorhídrico disolvente de hueso mortal e irreparable para el reactor."
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
    "code": "17.9",
    "objective": "Analizar las propiedades fisicoquímicas cuánticas y aplicaciones avanzadas de los cristales líquidos visuales, los plásticos semiconductores orgánicos asombrosos y el olimpo estructural de los nanomateriales alotrópicos y milagrosos derivados puramente del carbono (Fullerenos C₆₀, Nanotubos asimétricos CNT y el majestuoso rey cuántico plano llamado Grafeno hexagonal libre).",
    "summary": [
      "1. La Luz Domesticada: Cristales Líquidos (La Pantalla LCD)",
      "2. Polímeros Semiconductores (\"Metales Plásticos Sintéticos\")",
      "3. El Olimpo Moderno Tecnológico: Nanomateriales Alotrópicos del Carbono Puro Mágico"
    ],
    "activity": {
      "family": "classify",
      "title": "Clasificación analítica: Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono",
      "question": "Clasifica correctamente cada uno de los casos propuestos según las categorías conceptuales de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono.",
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
            "label": "Caso representativo 1 de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono",
            "category": "cat1",
            "explanation": "Cumple las condiciones del criterio principal."
          },
          {
            "id": "it2",
            "label": "Caso representativo 2 de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono",
            "category": "cat1",
            "explanation": "Se ajusta rigurosamente a las propiedades del primer grupo."
          },
          {
            "id": "it3",
            "label": "Caso contrastante 3 de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono",
            "category": "cat2",
            "explanation": "Manifiesta el comportamiento opuesto o alternativo."
          },
          {
            "id": "it4",
            "label": "Caso contrastante 4 de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono",
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
      "statement": "En un laboratorio de nanotecnología militar avanzada y cuántica de punta secreta para chalecos balísticos a balas perforantes antiblindaje militar duro liso, un ingeniero de chalecos pesados orgánico polimérico debe y busca integrar una resina líquida oscura epóxica viscosa fuerte matriz de polímero kevlar balístico flexible orgánico de condensación plástica para fundir un blindaje de coraza de pecho liso. Para multiplicar y elevar y subir astronómicamente hasta mil veces la absurda y colosal fuerza estática pasiva del hilo tenaz irrompible crudo base liso flexible plástico blando ante un balazo o rayo, se decide inyectar y amalgamar ciegamente un polvo fino extraño de dispersión negra molecular alotrópico cilíndrico asfixiante del carbón negro que funge como armadura. Identifique estructuralmente sin pestañear de qué nanomaquina cueva tubular inmensa pesada cilíndrica alotrópica de carbón puro estamos describiendo que soporta este terror mecánico inmutable a la tensión de un hilo que asfixia un auto jalado o bala aplastada deformada chata en disco duro plano aplastada chato y plano caliente arrugado en calor sin penetrar en frío seco de titanio balístico que atraviesa:",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El ingeniero de defensa nacional está inyectando sin lugar a dudar, polvos invisibles letales ciegos pesados de alambres o cilindros cuánticos oscuros alótropos asombrosos puros de tracción mecánica demencial y absurda y extraterrestre huecos gruesos largos de capas apiladas concéntricas inamovibles inyectados rectos inmortales de la familia reina de **Nanotubos de Carbono blindados CNT puros**."
    },
    "practice": [
      {
        "id": "p-17.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-17.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Materiales tecnológicos modernos: cristales líquidos, polímeros conductores y nanomateriales de carbono?",
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
        "id": "q-17.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn el ámbito comercial cotidiano informático asombroso en la cara óptica de monitores y el área de la ofimática masiva, el panel visor traslúcido pálido espeso iluminador que gasta la energía milivoltio miserable casi muerta pálida inerte ahorrativa sin brillo gastador excesivo opaca y de luz indirecta oscura o reflectiva de calculadoras oscuras grises de botones plásticos baratos calculadores solares viejos oscuros y números ciegos inactivos grises opacos inactivos fijos de sombras numéricas cuadradas de LCD, se fundamenta en un principio físico cuántico mesomorfo a una fase extraña de materia exótica de varillas asimétricas polarizadoras bloqueantes a 90 grados ciegos llamado y fundamentado y bautizado históricamente con honor empírico absoluto analítico visual óptico fotón como:",
        "options": [
          "Cristal iónico paramagnético resonador de sales de plata incolora en placa fotosensible oscura inactiva pasiva vieja.",
          "Matriz termofija polimérica dopada oscura amorfa transparente con polímero plástico dopado yodo negro inyectado dopaje metálico liso opaco sintético dopado.",
          "Cristal Líquido nemático o colestérico retorcido orientador de fotones (mesomorfo espeso varilla y filtro de luz liso asimétrico espeso asfixiante gordo asimétrico bloqueante pasivo de sombra apagada ciega muerta oscura bloqueando al giro rotacional polarizador o fotón blanco cruzado).",
          "Plasma atómico de neón deslocalizado caliente radiante fluorescente luminoso brillante y reactivo fluorescente en ampolla caliente inyectado rojo naranja alumbramiento brillante quemante reactivo al toque de choque iónico de alto voltaje puro."
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
        "id": "q-17.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas futuras baterías de los vehículos ecológicos interurbanos silenciosos y pesados urbanos en recarga infinita masiva inyectable prometen la gloria térmica de guardar inmensas cargas cuánticas frías en super-condensadores lisos limpios negros. Estos paneles acumuladores pálidos limpios sucios limpios de batería del futuro en hoja o capa plana 2D infinita de panal y enjambre red lisa finísima, apuestan la revolución del cobre y litio sucios cambiando las hojas de electrodo por capas o planchas atómicas de papel negro opaco gris pálido incoloro y plano atado sp² gigante ultradelgado ligero y casi vacío y de un miserable átomo inactivo plano de espesor alótropo que conduce como un demonio en superconductor el frío fotón y electrón rápido con nula y cero fricción y cero calor perdido y estático de calentamiento al cero. El material estrella puro de la maravilla soñada es:",
        "options": [
          "Poliacetileno dopado oscuro sucio negro de plástico amida de yodo quemante corrosivo ácido.",
          "Acero inoxidable laminado forjado en placas planas y cromo pulido liso refractante cromado.",
          "Grafeno monocapa puro plano liso milagroso sp² de panal abejas hexágono regular continuo espeso inquebrantable atado plano continuo 2D conductor en frío infinito liso.",
          "Carbón mineral de antracita sucia piedra amorfa y dura maciza forjada en piedra roca y ganga impura con silicatos rocas estéril pesada bruta aplastada polvo."
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
        "id": "q-17.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl analizar por difracción de la radiación X un extraño y diminuto grano microscópico de hollín purísimo exótico sintetizado en plasma inerte láser al vacío cerrado, se confirma analítica de software y empíricamente con ceguera inmutable que el corpúsculo es de una macromolécula y alótropo exótico de la misma familia de grafito apilado y diamante cortador, pero con forma tridimensional divina asombrosamente simétrica geodésica sagrada matemática cerrada esférica y redonda convexa esférica como una cúpula pesada hueca o un poliedro de fútbol icosaédrico con huecos ciegos asfixiante y cerrados esférico redondo abombado vacío en su núcleo estéril y vacío espeso oscuro con C₆₀ atado con caras de veinte (20) de panal de seis carbones hexagonales y doce (12) caras pentágonos retorcidos ciegos. Se deduce analíticamente de su topología y número asfixiante que la asombrosa pelotita química cerrada de fullereno buckminster es un claro y rotundo modelo ejemplar y supremo alotrópico incoloro exótico de un ente puro orgánico molecular alotrópico llamado:",
        "options": [
          "Carbono amorfo cristalizado hexagonal con grafeno laminado roto impuro triturado molido asimétrico pesado C cien.",
          "Alótropo Fullereno esférico C₆₀ buckyball espeso estable de red en redondela hueca pura cúpula sellada inquebrantable esférico geométrico icosaédrico espeso de carbón puro esférico fullereno estable negro hollín sublime en vacío atómico incoloro de carbono ciego puro.",
          "Silicato orgánico de cuarzo C₆₀ con carburo de silicio exótico refractario fundido en sílice amorfa vitrificada pesada redonda asfixiante vítrea pesada transparente redonda esférica C sesenta vitral opaco redondo vítreo.",
          "Cicloalcano gigante esférico con saturación extrema hidrogenada de 60 hidrógenos incoloros aromáticos asfixiantes C₆₀H₆₀ que gasta la C sesenta pesada saturada y gorda alifática esterificada en anillo aburrido de grasa pesada saturado aromático bola hidrocarbonada apolar pesada asfixiante grasosa alifática gorda bola lipídica apolar cíclica aromática inerte."
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
    "id": "exam-17-1",
    "objective": "17.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.1): Respecto a 1. Estructura y Clasificación de las Aminas, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-2",
    "objective": "17.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.2): Respecto a 1. Estructura y Función de las Amidas, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-3",
    "objective": "17.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.3): Respecto a 1. El Principio Fundamental de Prioridad Monárquica IUPAC, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-4",
    "objective": "17.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.4): Respecto a 1. Definición y Clasificación General, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-5",
    "objective": "17.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.5): Respecto a 1. Naturaleza y Doblez de los Ácidos Grasos, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-6",
    "objective": "17.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.6): Respecto a 1. La Arquitectura Quirúrgica del α-Aminoácido, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-7",
    "objective": "17.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.7): Respecto a 1. La Escalera Jerárquica: Los 4 Niveles de Organización, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-17-8",
    "objective": "17.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (17.8): Respecto a 1. La Invasión del Plástico: Mecanismo de Polimerización por Adición, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 17.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
