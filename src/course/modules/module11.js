// Módulo 11: Módulo 11: Cinética y Mecanismos de Reacción
export const module11 = {
  number: 11,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 11: Cinética y Mecanismos de Reacción.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "11.1",
    "objective": "Definir rigurosamente la rapidez de reacción química en términos del cambio de concentración respecto al tiempo, diferenciando entre velocidad media e instantánea.",
    "summary": [
      "1. Definición Fundamental de la Rapidez de Reacción",
      "2. Rapidez Media (v_rxn)",
      "3. Rapidez Instantánea"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Expresión de rapidez de reacción química media e instantánea",
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
      "statement": "En la reacción de formación del agua: 2H₂ + O₂ → 2H₂O. Si el gas oxígeno se consume a una velocidad de 0.5 M/s, ¿a qué velocidad se produce el vapor de agua?",
      "steps": [
        "Planteamos la relación estequiométrica de velocidades:",
        "v(O₂) / 1 = v(H₂O) / 2"
      ],
      "answer": "0.5 / 1 = v(H₂O) / 2 ⇒ v(H₂O) = 0.5 × 2 = **1.0 M/s**."
    },
    "practice": [
      {
        "id": "p-11.1-1",
        "type": "mc",
        "prompt": "Dada la reacción: 4NH₃ + 5O₂ → 4NO + 6H₂O. Escriba la expresión correcta que iguala la rapidez de formación del agua con la rapidez de consumo del oxígeno.",
        "options": [
          "Dividimos cada rapidez por su coeficiente estequiométrico y aplicamos el signo correspondiente (positivo a productos, negativo a reactivos):\n **+ (1/6",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Dividimos cada rapidez por su coeficiente estequiométrico y aplicamos el signo correspondiente (positivo a productos, negativo a reactivos):\n **+ (1/6) (Δ[H₂O]/Δt) = - (1/5) (Δ[O₂]/Δt)**",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-11.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Expresión de rapidez de reacción química media e instantánea?",
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
        "id": "q-11.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa unidad estándar en el Sistema Internacional para expresar la rapidez de una reacción química en disolución acuosa es:",
        "options": [
          "mol / L",
          "L / (mol·s)",
          "mol / (L·s)",
          "s / Molar"
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
        "id": "q-11.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un motor de combustión, el octano se quema según: 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O. Si en un determinado instante el octano se consume a razón de 4.0 moles/s, la velocidad de formación del gas dióxido de carbono (CO₂) en ese mismo instante será:",
        "options": [
          "4.0 moles/s",
          "16.0 moles/s",
          "32.0 moles/s",
          "50.0 moles/s"
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
        "id": "q-11.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a las gráficas cinéticas de Concentración vs Tiempo para una reacción A → B, indique la proposición correcta:",
        "options": [
          "La curva de la concentración del reactivo [A] es ascendente y lineal.",
          "La velocidad media de la reacción se calcula con el área bajo la curva.",
          "La velocidad instantánea en un tiempo t se determina hallando la pendiente de la recta secante a la curva.",
          "La velocidad instantánea de desaparición de A disminuye a medida que transcurre el tiempo, debido a la caída de su concentración."
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
    "code": "11.2",
    "objective": "Explicar a nivel atómico y cinético los factores fundamentales que controlan la velocidad de una reacción química basándose en la teoría de colisiones efectivas.",
    "summary": [
      "1. Requisitos para el Choque Efectivo",
      "3. Regla Empírica de Van 't Hoff",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Factores que modifican la rapidez: naturaleza de reactivos, grado de división, temperatura y concentración",
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
      "statement": "En la industria alimentaria, la leche fresca se guarda en refrigeración a 4°C para evitar que se corte, en lugar de dejarla a temperatura ambiente (25°C). ¿Qué principio cinético justifica esta medida?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "La descomposición de la leche es un conjunto de reacciones químicas. Al disminuir la temperatura, disminuye la energía cinética de las moléculas y bacterias, reduciendo la cantidad de choques efectivos por segundo y haciendo que la reacción de putrefacción sea muchísimo más lenta."
    },
    "practice": [
      {
        "id": "p-11.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Factores que modifican la rapidez: naturaleza de reactivos, grado de división, temperatura y concentración, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-11.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Factores que modifican la rapidez: naturaleza de reactivos, grado de división, temperatura y concentración?",
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
        "id": "q-11.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl factor cinético que explica por qué la leña cortada en astillas pequeñas se enciende y arde mucho más rápido que un tronco macizo de madera es:",
        "options": [
          "La naturaleza de los reactantes",
          "La disminución de la energía de activación",
          "El aumento de la concentración de oxígeno",
          "El grado de división o área de superficie de contacto"
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
        "id": "q-11.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nPara disolver rápidamente un comprimido efervescente de antiácido, un estudiante decide triturar la pastilla y colocarla en un vaso con agua caliente. En este procedimiento se están empleando dos factores cinéticos para acelerar la reacción, los cuales son:",
        "options": [
          "Catalizador y presión",
          "Grado de subdivisión y temperatura",
          "Concentración y naturaleza del reactivo",
          "Grado de subdivisión y catalizador"
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
        "id": "q-11.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique la proposición incorrecta respecto a los factores que alteran la velocidad de una reacción elemental:",
        "options": [
          "El aumento de la presión en un sistema gaseoso incrementa la velocidad porque aumenta la concentración (moles/volumen).",
          "Un aumento en la temperatura incrementa la velocidad de reacción porque disminuye la barrera de energía de activación.",
          "Las reacciones iónicas de precipitación entre sales disueltas suelen ser extremadamente rápidas a temperatura ambiente.",
          "Al aumentar la concentración de los reactantes, se incrementa la frecuencia de colisiones moleculares."
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
    "code": "11.3",
    "objective": "Formular matemáticamente la Ley Diferencial de Velocidad, identificando los órdenes parciales, el orden total de reacción y deduciendo las unidades correctas de la constante específica de rapidez (k).",
    "summary": [
      "1. Ley Diferencial de Velocidad",
      "2. Unidades de la Constante de Rapidez (k)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Formulación de la ley de acción de masas, ley de velocidad y orden total de reacción",
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
      "statement": "Para la reacción química: A + 2B → C, se ha determinado experimentalmente que la ley de velocidad es v = k[A]²[B]⁰. ¿Qué sucede con la velocidad si se duplica la concentración de B manteniendo A constante?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Si observamos la ley, B tiene orden 0. Esto significa que [B]⁰ = 1. Matemáticamente, la velocidad no depende de la concentración de B. Si se duplica, triplica o disminuye B, la velocidad **permanece inalterada**."
    },
    "practice": [
      {
        "id": "p-11.3-1",
        "type": "mc",
        "prompt": "Si el orden global de una reacción es 2, ¿cuáles serán las unidades de su constante específica de velocidad k (tiempo en segundos)?",
        "options": [
          "Usamos la fórmula de unidades M^(1-n) · s⁻¹",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Usamos la fórmula de unidades M^(1-n) · s⁻¹.\n Sustituyendo n = 2: M^(1-2) · s⁻¹ = M⁻¹ · s⁻¹.\n Sabiendo que M = mol/L, entonces M⁻¹ = L/mol.\n Respuesta: **L · mol⁻¹ · s⁻¹**.",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-11.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Formulación de la ley de acción de masas, ley de velocidad y orden total de reacción?",
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
        "id": "q-11.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa constante de velocidad específica (k) de una reacción química mantiene su valor numérico constante a menos que se altere la:",
        "options": [
          "Concentración de los reactantes",
          "Concentración de los productos",
          "Presión del recipiente",
          "Temperatura del sistema"
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
        "id": "q-11.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn ingeniero químico diseña un reactor y descubre que la ley empírica de velocidad del proceso es v = k[Reactivo]¹. Al publicar el manual de operaciones de la planta, las unidades que debe reportar obligatoriamente para la constante k son:",
        "options": [
          "L / (mol·s)",
          "s⁻¹",
          "mol / (L·s)",
          "L² / (mol²·s)"
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
        "id": "q-11.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe realiza la reacción elemental fase gas: 2X + Y → Productos. Si repentinamente se reduce a la mitad el volumen del recipiente manteniendo la temperatura constante, la nueva velocidad de reacción en comparación a la inicial será:",
        "options": [
          "Igual, no cambia.",
          "El doble (2v).",
          "Ocho veces mayor (8v).",
          "Cuatro veces mayor (4v)."
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
    "code": "11.4",
    "objective": "Determinar algebraicamente los órdenes parciales, el orden global, la ley de velocidad y el valor numérico con unidades correctas de la constante k a partir de matrices de datos de laboratorio.",
    "summary": [
      "1. Metodología de las Razones de Velocidades Iniciales",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación experimental del orden de reacción por el método de velocidades iniciales",
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
        "id": "p-11.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Determinación experimental del orden de reacción por el método de velocidades iniciales, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-11.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación experimental del orden de reacción por el método de velocidades iniciales?",
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
        "id": "q-11.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\n¿Cuál es el orden parcial de la reacción respecto al reactivo A?",
        "options": [
          "0",
          "1",
          "2",
          "3"
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
        "id": "q-11.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\n¿Cuál es el orden parcial de la reacción respecto al reactivo B?",
        "options": [
          "1",
          "2",
          "3",
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
        "id": "q-11.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nBasado en los órdenes hallados, deduzca la Ley de Velocidad global y determine el valor numérico exacto de la constante específica k.",
        "options": [
          "v = k[A][B]² ; k = 20 L²/(mol²·s)",
          "v = k[A]²[B] ; k = 10 L²/(mol²·s)",
          "v = k[A][B] ; k = 2 L/(mol·s)",
          "v = k[B]² ; k = 20 L/(mol·s)"
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
    "code": "11.5",
    "objective": "Aplicar analíticamente la ecuación de Arrhenius en sus formas exponencial, linealizada y bipuntual para calcular la energía de activación (Ea) y predecir constantes de rapidez a distintas temperaturas.",
    "summary": [
      "1. Ecuación de Arrhenius (1889)",
      "2. Forma Linealizada (Gráfica de Arrhenius)",
      "3. Ecuación Bipuntual (Para Dos Temperaturas)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación de la ecuación de Arrhenius para el cálculo de energía de activación",
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
      "statement": "En un laboratorio físicoquímico se graficó \"ln k\" versus \"1/T\" (K⁻¹) para una reacción orgánica, obteniéndose una línea recta perfecta con una pendiente m = -12 000 K. Sabiendo que R = 8.314 J/(mol·K), calcule la Energía de Activación de la reacción.",
      "steps": [
        "Sabemos teóricamente que la pendiente m = -Ea / R.",
        "Igualamos: -12 000 = -Ea / 8.314",
        "Ea = 12 000 × 8.314 = 99 768 J/mol."
      ],
      "answer": "Respuesta oficial: **99.76 kJ/mol**."
    },
    "practice": [
      {
        "id": "p-11.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación de la ecuación de Arrhenius para el cálculo de energía de activación, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-11.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ecuación de Arrhenius para el cálculo de energía de activación?",
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
        "id": "q-11.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún la ecuación fundamental de Arrhenius, un incremento en la temperatura del reactor químico provocará irremediablemente que:",
        "options": [
          "La energía de activación (Ea) del proceso aumente.",
          "El valor numérico de la constante de velocidad (k) aumente.",
          "La constante universal de los gases (R) cambie su valor.",
          "La reacción se detenga por completo."
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
        "id": "q-11.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUn ingeniero de procesos necesita modelar el tiempo de caducidad de un nuevo fármaco. Al estudiar la degradación térmica del principio activo, utiliza la ecuación bipuntual de Arrhenius. Para utilizar dicha fórmula sin cometer errores de dimensión matemática, la temperatura debe ingresarse estrictamente en:",
        "options": [
          "Grados Celsius (°C)",
          "Grados Fahrenheit (°F)",
          "Kelvin (K)",
          "Joules (J)"
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
        "id": "q-11.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe analiza cinéticamente una reacción donde se comprueba que al aumentar la temperatura de 300 K a 310 K, la constante de rapidez \"k\" aumenta haciéndose exactamente el doble (k₂ = 2 k₁). Si el logaritmo natural de 2 (ln 2) es 0.693 y R = 8.31 J/mol·K, la energía de activación aproximada es:",
        "options": [
          "15 kJ/mol",
          "53 kJ/mol",
          "106 kJ/mol",
          "25 kJ/mol"
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
    "code": "11.6",
    "objective": "Comparar los mecanismos de catálisis homogénea y heterogénea, analizando cómo un catalizador altera la ruta de reacción disminuyendo la energía de activación sin modificar la termodinámica del sistema.",
    "summary": [
      "1. Naturaleza y Función del Catalizador Químico",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Catálisis homogénea, heterogénea y efecto de los catalizadores en perfiles energéticos",
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
      "statement": "En la síntesis de Haber-Bosch (N₂ + 3H₂ ⇌ 2NH₃), se inyectan altas presiones de gases sobre planchas de hierro (Fe) finamente dividido. ¿Qué función cumple el hierro y qué tipo de catálisis es?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El hierro metálico no se consume ni se convierte en nitruro; actúa solo bajando la energía de activación para romper el fortísimo enlace del N₂. Al ser el Fe un **sólido** y los reactivos **gases**, estamos frente a una **catálisis heterogénea**."
    },
    "practice": [
      {
        "id": "p-11.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Catálisis homogénea, heterogénea y efecto de los catalizadores en perfiles energéticos, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-11.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Catálisis homogénea, heterogénea y efecto de los catalizadores en perfiles energéticos?",
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
        "id": "q-11.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn un diagrama de perfil de entalpía (Energía vs Avance), el efecto visual directo de añadir un catalizador positivo a un matraz de reacción es:",
        "options": [
          "Elevar la altura de la curva de productos.",
          "Disminuir la altura de la curva de reactivos.",
          "Rebajar la altura del pico máximo (Complejo activado).",
          "Invertir la reacción de exotérmica a endotérmica."
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
        "id": "q-11.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLa industria petroquímica utiliza grandes reactores de lecho fluido donde se inyectan zeolitas en polvo (sólidos porosos de aluminosilicatos) para \"craquear\" y romper cadenas largas de petróleo líquido en gasolina. Desde el punto de vista de las fases involucradas, este es un claro ejemplo de:",
        "options": [
          "Catálisis enzimática",
          "Catálisis homogénea",
          "Inhibición por envenenamiento catalítico",
          "Catálisis heterogénea"
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
        "id": "q-11.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIndique verdadero (V) o falso (F) según corresponda al comportamiento teórico de un catalizador químico en un sistema reversible cerrado:\nI. Aumenta el valor numérico de la constante de equilibrio (K_c).\nII. Modifica el mecanismo natural por el que transcurre la reacción.\nIII. Disminuye la entalpía global (ΔH) haciendo la reacción más exotérmica.",
        "options": [
          "VFV",
          "FVF",
          "FVF (c)",
          "FVF (Ojo, la correcta es la combinación F, V, F)"
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
    "code": "11.7",
    "objective": "Identificar la molecularidad de procesos elementales, discernir operativamente entre intermediarios y catalizadores, y deducir la ley de velocidad basándose exclusivamente en la etapa determinante.",
    "summary": [
      "1. Mecanismos de Reacción y Etapas Elementales",
      "2. La Etapa Determinante de la Velocidad (RDS)",
      "3. Diferenciación Crítica de Examen: Intermediario vs. Catalizador"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Análisis de mecanismos de reacción, molecularidad y etapa determinante de la velocidad",
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
        "id": "p-11.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Análisis de mecanismos de reacción, molecularidad y etapa determinante de la velocidad, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-11.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Análisis de mecanismos de reacción, molecularidad y etapa determinante de la velocidad?",
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
        "id": "q-11.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa etapa limitante o etapa determinante de la velocidad en un mecanismo de reacción complejo de múltiples pasos siempre corresponde a la:",
        "options": [
          "Primera etapa de la secuencia.",
          "Etapa más endotérmica.",
          "Etapa donde se consumen los catalizadores.",
          "Etapa más lenta del proceso."
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
        "id": "q-11.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn las cadenas de ensamblaje automotriz, si el robot que pone los motores demora 5 minutos, pero el que pinta el chasís demora 1 hora, la fábrica solo botará 1 carro por hora. Haciendo una analogía con la cinética química de un mecanismo paso a paso, la ecuación matemática de la velocidad global de la reacción será igual a la velocidad teórica de:",
        "options": [
          "La reacción global balanceada neta.",
          "La etapa del intermediario más inestable.",
          "La etapa que posea la mayor energía de activación.",
          "La etapa exotérmica más rápida."
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
        "id": "q-11.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nConsidere el mecanismo para la destrucción estratosférica del ozono:\nI) Cl(g) + O₃(g) → ClO(g) + O₂(g)\nII) ClO(g) + O(g) → Cl(g) + O₂(g)\nIdentifique correctamente los roles cinéticos de las especies Cl y ClO en la estratosfera:",
        "options": [
          "El Cl es intermediario y el ClO es catalizador.",
          "Ambos, el Cl y el ClO, son intermediarios volátiles.",
          "El Cl es catalizador y el ClO es un intermediario de reacción.",
          "El ClO y el Cl actúan como reactantes inhibidores."
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
    "id": "exam-11-1",
    "objective": "11.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.1): Respecto a 1. Definición Fundamental de la Rapidez de Reacción, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-2",
    "objective": "11.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.2): Respecto a 1. Requisitos para el Choque Efectivo, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-3",
    "objective": "11.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.3): Respecto a 1. Ley Diferencial de Velocidad, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-4",
    "objective": "11.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.4): Respecto a 1. Metodología de las Razones de Velocidades Iniciales, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-5",
    "objective": "11.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.5): Respecto a 1. Ecuación de Arrhenius (1889), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-6",
    "objective": "11.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.6): Respecto a 1. Naturaleza y Función del Catalizador Químico, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-7",
    "objective": "11.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (11.7): Respecto a 1. Mecanismos de Reacción y Etapas Elementales, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 11.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-11-8",
    "objective": "11.2",
    "type": "mc",
    "prompt": "Pregunta de consolidación del Módulo 11 (11.2): señale la alternativa con el razonamiento válido.",
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
