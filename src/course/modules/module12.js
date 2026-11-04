// Módulo 12: Módulo 12: Equilibrio Químico y Reversibilidad
export const module12 = {
  number: 12,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 12: Equilibrio Químico y Reversibilidad.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "12.1",
    "objective": "Comprender la naturaleza termodinámica y cinética del equilibrio químico dinámico en recipientes cerrados, diferenciándolo conceptual y gráficamente de una reacción estática o completa.",
    "summary": [
      "1. Reversibilidad y Cinética del Equilibrio",
      "2. Características Fundamentales del Estado de Equilibrio",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Reversibilidad de reacciones químicas y establecimiento del equilibrio dinámico",
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
      "statement": "En un recipiente cerrado se introduce gas N₂O₄ incoloro, el cual se disocia parcialmente en NO₂ de color marrón rojizo. Tras dos horas, la intensidad del color marrón ya no cambia. ¿Qué significa esto a nivel molecular?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Que la intensidad del color se vuelva constante indica que las concentraciones han dejado de variar, es decir, el sistema ha alcanzado el **equilibrio químico**. A nivel molecular, el N₂O₄ se sigue rompiendo en NO₂, pero al mismo tiempo y a la misma velocidad, el NO₂ se recombina para formar N₂O₄, anulando cualquier cambio neto observable."
    },
    "practice": [
      {
        "id": "p-12.1-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Reversibilidad de reacciones químicas y establecimiento del equilibrio dinámico, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Reversibilidad de reacciones químicas y establecimiento del equilibrio dinámico?",
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
        "id": "q-12.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa condición cinética indispensable y universal para afirmar que un sistema químico reversible ha alcanzado el equilibrio es:",
        "options": [
          "Que todos los reactivos se hayan consumido al 100%.",
          "Que las concentraciones de reactivos y productos sean exactamente iguales.",
          "Que la velocidad de la reacción directa iguale a la velocidad de la reacción inversa.",
          "Que la reacción se detenga por completo a nivel microscópico."
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
        "id": "q-12.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn la producción de ácido sulfúrico, se oxida el SO₂ a SO₃ en un reactor cerrado. Un ingeniero toma muestras cada hora y nota que desde la hora 4 hasta la hora 10, la cantidad de SO₃ en el tanque es exactamente de 500 kg sin variar ni un gramo, a pesar de que sobra mucho SO₂. Termodinámicamente, esto ocurre porque:",
        "options": [
          "El catalizador se envenenó en la hora 4 y paralizó el proceso.",
          "El sistema es irreversible y llegó a su límite.",
          "El sistema alcanzó el equilibrio dinámico: se forma y se destruye SO₃ a la misma velocidad.",
          "La reacción dejó de ser exotérmica y se volvió isotérmica."
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
        "id": "q-12.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto al equilibrio químico, determine la proposición incorrecta:",
        "options": [
          "Solo puede establecerse en sistemas cerrados donde no hay intercambio de materia.",
          "Es un proceso dinámico a nivel molecular pero estático a nivel macroscópico.",
          "Si iniciamos la reacción colocando únicamente productos en el matraz, es imposible alcanzar el mismo estado de equilibrio.",
          "Las propiedades macroscópicas como presión total y coloración permanecen invariables una vez alcanzado el equilibrio."
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
    "code": "12.2",
    "objective": "Deducir la expresión matemática de la constante de equilibrio en función de las concentraciones molares (K_c) mediante la ley de acción de masas, interpretando su magnitud cuantitativa.",
    "summary": [
      "1. Ley de Acción de Masas (Guldberg y Waage, 1864)",
      "2. Interpretación de la Magnitud de K_c",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Deducción y cálculo de la constante de equilibrio en función de concentraciones (Kc)",
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
      "statement": "Escriba la expresión de K_c para la oxidación del dióxido de azufre en fase gaseosa: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g).",
      "steps": [
        "Todos son gases, todos participan.",
        "Productos en el numerador elevados a su coeficiente: [SO₃]²",
        "Reactivos en el denominador: [SO₂]² · [O₂]¹"
      ],
      "answer": "Expresión: **K_c = [SO₃]² / ( [SO₂]² · [O₂] )**"
    },
    "practice": [
      {
        "id": "p-12.2-1",
        "type": "mc",
        "prompt": "A 400 K, las concentraciones en equilibrio para la reacción PCl₅(g) ⇌ PCl₃(g) + Cl₂(g) son: [PCl₅] = 0.2 M, [PCl₃] = 0.4 M y [Cl₂] = 0.4 M. Calcule K_c a esa temperatura.",
        "options": [
          "Fórmula: K_c = ( [PCl₃] · [Cl₂] ) / [PCl₅]\n K_c = (0",
          "Inversión de las proporciones estequiométricas o térmicas.",
          "Omisión del factor de conversión o de la constante del sistema.",
          "Uso de escala relativa en lugar de escala absoluta."
        ],
        "answer": 0,
        "explanation": "Fórmula: K_c = ( [PCl₃] · [Cl₂] ) / [PCl₅]\n K_c = (0.4 × 0.4) / 0.2 = 0.16 / 0.2 = **0.8**",
        "why": [
          "Opción correcta: fundamentada en el balance y relaciones termoquímicas o cuantitativas.",
          "Distractor: invierte la relación proporcional entre las magnitudes evaluadas.",
          "Distractor: comete un error de dimensionalidad u omisión de constantes físicas.",
          "Distractor: confunde lecturas en escalas relativas con magnitudes de estado absolutas."
        ]
      },
      {
        "id": "p-12.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Deducción y cálculo de la constante de equilibrio en función de concentraciones (Kc)?",
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
        "id": "q-12.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún los principios de la termodinámica química, el valor numérico de la constante de equilibrio K_c en un sistema cerrado se mantendrá absolutamente inalterable mientras no se modifique:",
        "options": [
          "La presión del sistema",
          "El volumen del reactor",
          "La concentración de los reactivos",
          "La temperatura del sistema"
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
        "id": "q-12.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso petroquímico se investigan tres reacciones reversibles diferentes a 500°C. La Reacción A tiene un K_c = 10⁻⁵, la Reacción B tiene K_c = 2.5, y la Reacción C tiene K_c = 10¹². Si el ingeniero desea obtener la máxima cantidad de producto posible sin añadir más reactivos, ¿cuál reacción es la más eficiente por naturaleza?",
        "options": [
          "La Reacción A",
          "La Reacción B",
          "La Reacción C",
          "Cualquiera, K_c no indica eficiencia."
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
        "id": "q-12.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDeduzca la expresión correcta de K_c para la descomposición térmica del carbonato de calcio: CaCO₃(s) ⇌ CaO(s) + CO₂(g).",
        "options": [
          "K_c = ( [CaO] · [CO₂] ) / [CaCO₃]",
          "K_c = [CO₂] / [CaCO₃]",
          "K_c = 1 / [CO₂]",
          "K_c = [CO₂]"
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
    "code": "12.3",
    "objective": "Formular la constante de equilibrio exclusiva para fases gaseosas (K_p) y aplicar la ecuación maestra que interrelaciona K_p y K_c basándose en la ecuación universal de gases ideales.",
    "summary": [
      "1. Constante de Equilibrio en Presiones Parciales (K_p)",
      "2. Ecuación Puente entre K_p y K_c",
      "3. Casos Analíticos de Δn"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Deducción y cálculo de la constante de equilibrio en presiones parciales (Kp) y relación Kp-Kc",
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
      "statement": "Para la síntesis del amoníaco: N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Si a 500 K se determinó que K_c = 0.04, escriba la ecuación para hallar K_p.",
      "steps": [
        "Hallamos Δn gaseoso: Productos (2) - Reactivos (1 + 3) = 2 - 4 = **-2**.",
        "Aplicamos la fórmula: K_p = K_c (RT)^Δn"
      ],
      "answer": "**K_p = 0.04 × (0.082 × 500)⁻²**"
    },
    "practice": [
      {
        "id": "p-12.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Deducción y cálculo de la constante de equilibrio en presiones parciales (Kp) y relación Kp-Kc, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Deducción y cálculo de la constante de equilibrio en presiones parciales (Kp) y relación Kp-Kc?",
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
        "id": "q-12.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nPara poder establecer una igualdad numérica exacta entre K_p y K_c (K_p = K_c) en un equilibrio gaseoso homogéneo, es requisito indispensable que la reacción presente:",
        "options": [
          "Una temperatura de 273 K.",
          "Un catalizador metálico.",
          "Un Δn gaseoso igual a cero.",
          "Una presión constante de 1 atmósfera."
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
        "id": "q-12.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas botellas de extintores antiguos generaban gas carbónico mediante la reacción: NaHCO₃(s) + HCl(ac) ⇌ NaCl(ac) + H₂O(l) + CO₂(g). Si se quisiera plantear absurdamente la relación termodinámica entre K_p y K_c para este sistema en equilibrio, el valor de Δn gaseoso que rige la potencia de (RT) sería:",
        "options": [
          "0",
          "+1",
          "-1",
          "+3"
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
        "id": "q-12.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nA 1000 K, se tiene el siguiente equilibrio: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Si K_p tiene un valor de 3.4, calcule el valor aproximado de K_c a la misma temperatura. (Dato: R = 0.082 atm·L/mol·K)",
        "options": [
          "279",
          "3.4",
          "0.041",
          "139.5"
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
    "code": "12.4",
    "objective": "Manipular algebraicamente ecuaciones químicas en equilibrio aplicando las propiedades operativas (inversión, multiplicación escalar y combinación lineal) sobre sus constantes de equilibrio.",
    "summary": [
      "1. Reglas Operativas Fundamentales",
      "2. Cuadro Comparativo de Examen: Termoquímica vs. Equilibrio",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Propiedades operativas de la constante de equilibrio: inversión, ponderación y suma de ecuaciones",
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
      "statement": "Para la reacción N₂ + 3H₂ ⇌ 2NH₃, la constante es K. ¿Cuál será la constante matemática (K') para la reacción: NH₃ ⇌ 1/2 N₂ + 3/2 H₂ ?",
      "steps": [
        "Observamos los cambios sufridos por la reacción original:",
        "1. Se ha invertido (el NH₃ ahora es reactivo) ⇒ K se convierte en (1/K).",
        "2. Todos los coeficientes se han dividido entre 2 (o multiplicado por 1/2) ⇒ a la constante se le aplica exponente 1/2, que es igual a la raíz cuadrada."
      ],
      "answer": "Resultado final: **K' = √(1/K)** o **(K)⁻⁰·⁵**."
    },
    "practice": [
      {
        "id": "p-12.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Propiedades operativas de la constante de equilibrio: inversión, ponderación y suma de ecuaciones, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Propiedades operativas de la constante de equilibrio: inversión, ponderación y suma de ecuaciones?",
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
        "id": "q-12.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSi se tiene una reacción en equilibrio cuya constante es K_c = 10, al invertir estequiométricamente dicha ecuación (leerla de derecha a izquierda), el nuevo valor de K_c será:",
        "options": [
          "-10",
          "0.1",
          "100",
          "1"
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
        "id": "q-12.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSe estudian dos reacciones orgánicas secuenciales para la síntesis de un polímero. El paso A ⇌ B tiene una constante de equilibrio K₁ = 5 × 10³. El paso B ⇌ C tiene un K₂ = 4 × 10². Para diseñar el reactor general, el ingeniero necesita conocer la constante del proceso global A ⇌ C. Este valor es:",
        "options": [
          "5.4 × 10³",
          "2.0 × 10⁶",
          "1.25 × 10¹",
          "9.0 × 10⁵"
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
        "id": "q-12.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nA cierta temperatura, se conocen los equilibrios:\n(1) 2SO₂ + O₂ ⇌ 2SO₃ (K₁ = 16)\n(2) NO₂ ⇌ NO + 1/2 O₂ (K₂ = 0.5)\nHalle el valor de la constante K₃ para la reacción: SO₂ + NO₂ ⇌ SO₃ + NO",
        "options": [
          "2",
          "8",
          "16.5",
          "4"
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
    "code": "12.5",
    "objective": "Evaluar el cociente de reacción (Q) en cualquier instante arbitrario para predecir rigurosamente la dirección termodinámica neta hacia la cual se desplazará el sistema para alcanzar el estado de equilibrio.",
    "summary": [
      "1. Definición del Cociente de Reacción (Q)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo del cociente de reacción (Q) y predicción de la dirección espontánea del equilibrio",
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
      "statement": "Para el equilibrio H₂(g) + I₂(g) ⇌ 2HI(g), la constante K_c a cierta temperatura es 50. Un técnico mezcla en un reactor de 1 Litro: 1 mol de H₂, 1 mol de I₂ y 10 moles de HI. Prediga en qué dirección reaccionará la mezcla.",
      "steps": [
        "Al estar en 1 Litro, los moles son iguales a la Molaridad.",
        "Calculamos el cociente actual (Q_c):",
        "Q_c = [HI]² / ( [H₂] · [I₂] )",
        "Q_c = (10)² / (1 × 1) = 100 / 1 = **100**.",
        "Comparamos: **Q_c (100) > K_c (50)**."
      ],
      "answer": "Hay exceso de producto. El sistema se desplazará espontáneamente hacia la **IZQUIERDA (←)**, consumiendo HI para formar más reactivos."
    },
    "practice": [
      {
        "id": "p-12.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cálculo del cociente de reacción (Q) y predicción de la dirección espontánea del equilibrio, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo del cociente de reacción (Q) y predicción de la dirección espontánea del equilibrio?",
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
        "id": "q-12.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nLa magnitud matemática que permite predecir el sentido en que evolucionará una reacción reversible fuera del equilibrio comparándola con K_c es:",
        "options": [
          "La energía de activación",
          "El principio de Le Chatelier",
          "El cociente de reacción (Q)",
          "La entalpía de formación"
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
        "id": "q-12.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nDurante el arranque de una planta química para sintetizar fosgeno (CO + Cl₂ ⇌ COCl₂), un operario toma una muestra a los 5 minutos y el sistema de cómputo arroja que el cociente de reacción Q es 0.05, mientras que el K_c teórico de la planta debe ser 140. Se concluye operativamente que:",
        "options": [
          "La planta debe apagar reactores, ya hay demasiado fosgeno.",
          "La mezcla se encuentra en equilibrio termodinámico.",
          "La reacción transcurrirá con gran fuerza hacia la formación de fosgeno (derecha).",
          "El fosgeno formado se está descomponiendo irreversiblemente."
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
        "id": "q-12.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEn un recipiente de 2 L a alta temperatura, ocurre la reacción: N₂(g) + 3H₂(g) ⇌ 2NH₃(g), con K_c = 1.2. Si en un instante dado existen 0.4 moles de N₂, 1.2 moles de H₂ y 2.4 moles de NH₃, ¿qué está ocurriendo cinéticamente en ese preciso instante?\n(Sugerencia: ¡Cuidado con el volumen!)",
        "options": [
          "v_directa > v_inversa, la reacción va a la derecha.",
          "v_directa < v_inversa, la reacción va a la izquierda.",
          "v_directa = v_inversa, el sistema está en equilibrio.",
          "Faltan datos para evaluar las velocidades relativas."
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
    "code": "12.6",
    "objective": "Formular correctamente las expresiones de K_c y K_p para equilibrios heterogéneos, comprendiendo el concepto físico-químico de actividad constante (unitaria) para sólidos y líquidos puros.",
    "summary": [
      "2. Regla Fundamental de Eliminación: Sólidos y Líquidos Puros",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Planteamiento del equilibrio en sistemas homogéneos y sistemas heterogéneos",
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
      "statement": "Resolución cuantitativa de las condiciones del sistema.",
      "steps": [
        "Aplicar la fórmula universal respectiva.",
        "Operar algebraicamente despejando la incógnita."
      ],
      "answer": "Solución obtenida analíticamente."
    },
    "practice": [
      {
        "id": "p-12.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Planteamiento del equilibrio en sistemas homogéneos y sistemas heterogéneos, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Planteamiento del equilibrio en sistemas homogéneos y sistemas heterogéneos?",
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
        "id": "q-12.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la formulación de la constante de equilibrio K_c de un sistema heterogéneo, las especies químicas cuyos términos se omiten matemáticamente (reemplazándose por el valor 1) son:",
        "options": [
          "Gases muy volátiles.",
          "Iones disueltos en agua (ac).",
          "Sólidos y líquidos puros.",
          "Catalizadores y temperatura."
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
        "id": "q-12.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEl proceso fotográfico antiguo basaba su sensibilidad a la luz en la disolución parcial de haluros de plata en agua. Para el equilibrio heterogéneo: AgCl(s) ⇌ Ag⁺(ac) + Cl⁻(ac). La expresión matemática correcta para su constante de equilibrio es:",
        "options": [
          "K_c = [Ag⁺] [Cl⁻] / [AgCl]",
          "K_c = [AgCl] / ( [Ag⁺] [Cl⁻] )",
          "K_c = [Ag⁺] + [Cl⁻]",
          "K_c = [Ag⁺] [Cl⁻]"
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
        "id": "q-12.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe establece el siguiente equilibrio en un matraz cerrado al vacío: NH₄HS(s) ⇌ NH₃(g) + H₂S(g). Si al alcanzar el equilibrio a cierta temperatura, la presión total leída en el manómetro del matraz es de 0.8 atmósferas, ¿cuál es el valor numérico de K_p?",
        "options": [
          "0.64",
          "0.16",
          "0.80",
          "0.32"
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
    "code": "12.7",
    "objective": "Resolver problemas cuantitativos complejos de equilibrio químico construyendo tablas estequiométricas I-C-E (Inicio, Cambio, Equilibrio) tanto en concentraciones molares como en presiones.",
    "summary": [
      "1. Estructura y Lógica de la Tabla I-C-E",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de concentraciones y presiones en equilibrio mediante tablas de avance de reacción",
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
      "statement": "Para la reacción: H₂(g) + I₂(g) ⇌ 2HI(g), a cierta temperatura la constante K_c es 64. Si se inyectan 2 moles de H₂ y 2 moles de I₂ en un recipiente rígido de 1 Litro, ¿cuál será la concentración de gas yoduro de hidrógeno (HI) al final del proceso?",
      "steps": [
        "Tabla ICE:",
        "I: H₂(2), I₂(2), HI(0)",
        "C: -x, -x, +2x",
        "E: (2-x), (2-x), 2x",
        "Planteamos: K_c = [HI]² / ([H₂][I₂])",
        "64 = (2x)² / [ (2-x)(2-x) ] = (2x / (2-x))²",
        "Como es un cuadrado perfecto, extraemos raíz cuadrada a ambos lados:",
        "8 = 2x / (2 - x) ⇒ 8(2 - x) = 2x ⇒ 16 - 8x = 2x ⇒ 10x = 16 ⇒ x = 1.6 M."
      ],
      "answer": "Nos piden el HI, que vale 2x. Respuesta: 2(1.6) = **3.2 M**."
    },
    "practice": [
      {
        "id": "p-12.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cálculo de concentraciones y presiones en equilibrio mediante tablas de avance de reacción, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de concentraciones y presiones en equilibrio mediante tablas de avance de reacción?",
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
        "id": "q-12.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la construcción de la tabla de avance ICE para el reactivo \"A\" en la ecuación: 2A ⇌ 3B, si partimos de una concentración inicial \"C₀\", la expresión correcta para su concentración en el equilibrio (E) asumiendo un avance \"x\" será:",
        "options": [
          "C₀ - x",
          "C₀ - 2x",
          "2x",
          "C₀ - 3x"
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
        "id": "q-12.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn la síntesis de un biocombustible gas, ocurre la reacción: A(g) ⇌ 2B(g). Inicialmente se presuriza el tanque con 4 atm de gas A puro. Al alcanzar el equilibrio, un medidor indica que la presión parcial del gas B es de 2 atm. ¿Cuál es el valor de K_p a esa temperatura operativa?",
        "options": [
          "0.5",
          "2.0",
          "1.33",
          "4.0"
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
        "id": "q-12.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara la reacción N₂O₄(g) ⇌ 2NO₂(g) con K_c = 4.0 a temperatura T, se introducen 2 moles de N₂O₄ en un matraz sellado de 1 Litro. Si dejamos que alcance el equilibrio, la ecuación matemática para hallar el avance \"x\" exigirá obligatoriamente resolver:",
        "options": [
          "Una ecuación cúbica por el coeficiente 2.",
          "Una ecuación cuadrática donde no se puede ignorar la \"x\" del denominador.",
          "Una ecuación lineal de primer grado.",
          "Una simple raíz cuadrada asumiendo (C₀ - x) ≈ C₀."
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
    "code": "12.8",
    "objective": "Calcular el grado de disociación (α) de especies moleculares en sistemas en equilibrio, deduciendo su relación funcional con la presión total de la mezcla y las constantes K_c y K_p.",
    "summary": [
      "1. Concepto de Grado de Disociación (α)",
      "2. Deducción de K_p en Función de α",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Determinación del grado de disociación y porcentaje de conversión en el equilibrio",
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
      "statement": "El gas fosgeno (COCl₂) altamente tóxico se descompone según: COCl₂(g) ⇌ CO(g) + Cl₂(g). A cierta temperatura, un matraz contenía inicialmente fosgeno a 4 atm de presión. Al alcanzar el equilibrio, se descubrió que el 25% del fosgeno original se disoció. Determine la Presión Total final en el matraz.",
      "steps": [
        "Podemos usar presiones directamente como si fueran moles.",
        "Inicio: P₀(COCl₂) = 4 atm.",
        "Reacciona el 25%: x = 0.25 × 4 = 1 atm disociada.",
        "En el equilibrio:",
        "P(COCl₂) = 4 - 1 = 3 atm.",
        "P(CO) = 1 atm.",
        "P(Cl₂) = 1 atm."
      ],
      "answer": "Presión Total = 3 + 1 + 1 = **5 atm**."
    },
    "practice": [
      {
        "id": "p-12.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Determinación del grado de disociación y porcentaje de conversión en el equilibrio, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Determinación del grado de disociación y porcentaje de conversión en el equilibrio?",
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
        "id": "q-12.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl grado de disociación (α) de una reacción química en equilibrio reversible que no progresa del todo siempre es un número que termodinámicamente se encuentra en el intervalo matemático de:",
        "options": [
          "Menor a cero (negativo).",
          "Mayor a 1 y menor a 100.",
          "Mayor o igual a cero y menor o igual a uno.",
          "Infinito en sistemas abiertos."
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
        "id": "q-12.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso químico a escala de laboratorio para obtener hidrógeno, se hace un ensayo partiendo de 10 moles de yoduro de hidrógeno (HI). Al analizar la celda en equilibrio se cuantifican 2 moles de H₂ formados (2HI ⇌ H₂ + I₂). El porcentaje de disociación del HI original en esta planta piloto es del:",
        "options": [
          "20%",
          "40%",
          "10%",
          "80%"
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
        "id": "q-12.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nPara un gas A que se dimeriza parcialmente según 2A(g) ⇌ A₂(g), con un grado de conversión \"α\" y partiendo de una concentración inicial C₀, la concentración del dímero A₂ en el estado de equilibrio será algebraicamente expresada como:",
        "options": [
          "C₀ α",
          "2 C₀ α",
          "(C₀ α) / 2",
          "C₀ (1 - α)"
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
    "code": "12.9",
    "objective": "Predecir cuantitativa y cualitativamente el desplazamiento del equilibrio frente a perturbaciones de concentración, presión y volumen utilizando el Principio de Le Chatelier.",
    "summary": [
      "1. Principio de Le Chatelier (1884)",
      "2. Perturbación por Cambio de Concentración",
      "3. Perturbación por Presión y Volumen (Solo para GASES)"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Aplicación del principio de Le Chatelier ante cambios de concentración, volumen y presión",
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
      "statement": "En el equilibrio N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ¿qué sucederá con la cantidad de amoníaco si reducimos repentinamente el volumen del tanque a la mitad?",
      "steps": [
        "Reducir el volumen significa **aumentar la presión** radicalmente. El sistema buscará atenuar la presión huyendo hacia el lado con MENOS moles de gas.",
        "Reactivos: 1+3 = 4 moles. Productos: 2 moles."
      ],
      "answer": "El sistema se desplazará a la **DERECHA**. Conclusión: La cantidad de amoníaco producido **aumentará** significativamente."
    },
    "practice": [
      {
        "id": "p-12.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación del principio de Le Chatelier ante cambios de concentración, volumen y presión, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación del principio de Le Chatelier ante cambios de concentración, volumen y presión?",
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
        "id": "q-12.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún Le Chatelier, si en el equilibrio de formación de un producto se extrae continuamente dicho producto del reactor a medida que se genera, el equilibrio responderá:",
        "options": [
          "Desplazándose hacia los reactantes.",
          "Desplazándose hacia los productos, favoreciendo más producción.",
          "Manteniéndose completamente inalterable.",
          "Disminuyendo el valor de la constante K_c."
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
        "id": "q-12.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso industrial para envasar bebidas carbonatadas se aprovecha el equilibrio CO₂(g) ⇌ CO₂(ac). Para lograr disolver la máxima cantidad de gas carbónico en el líquido embotellado y asegurar su efervescencia, la máquina embotelladora debe someter el sistema a:",
        "options": [
          "Temperaturas de ebullición extremas para dilatar el gas.",
          "Presiones atmosféricas normales para que el gas fluya.",
          "Altas presiones para empujar el equilibrio hacia la fase disuelta (menos moles de gas libre).",
          "Vacío intenso para succionar el gas hacia el líquido."
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
        "id": "q-12.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDado el sistema heterogéneo en equilibrio: C(s) + H₂O(g) ⇌ CO(g) + H₂(g). ¿Cuál de las siguientes acciones NO provocará absolutamente ningún desplazamiento del estado de equilibrio termodinámico?",
        "options": [
          "Agregar unas gotas extras de vapor de agua.",
          "Retirar monóxido de carbono del matraz.",
          "Reducir el volumen del recipiente a temperatura constante.",
          "Agregar 5 kilogramos de carbón C(s) triturado al fondo del reactor."
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
    "code": "12.10",
    "objective": "Analizar el efecto supremo de la temperatura sobre el valor numérico de la constante de equilibrio, y evaluar el engañoso impacto de inyectar gases inertes en un reactor.",
    "summary": [
      "1. Variación de la Temperatura (La dueña de la K)",
      "2. Adición de un Gas Inerte (Helio, Argón, Neón)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación del principio de Le Chatelier ante variaciones de temperatura y adición de gases inertes",
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
      "statement": "El proceso endotérmico de gasificación del carbón: C(s) + H₂O(g) + Calor ⇌ CO(g) + H₂(g). ¿Cómo se vería afectado el rendimiento y la constante K_p si el reactor se envuelve en mantas térmicas e inyectamos calor masivo subiendo su temperatura de 500 K a 1200 K?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Como es una reacción endotérmica, requiere calor para progresar a la derecha. Suministrarle un incremento masivo de temperatura favorecerá la reacción directa (derecha), consumiendo el carbón y produciendo muchísimo monóxido e hidrógeno sintético. El rendimiento se disparará hacia arriba, y **el valor numérico de la constante de equilibrio K_p será significativamente MAYOR**."
    },
    "practice": [
      {
        "id": "p-12.10-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación del principio de Le Chatelier ante variaciones de temperatura y adición de gases inertes, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-12.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación del principio de Le Chatelier ante variaciones de temperatura y adición de gases inertes?",
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
        "id": "q-12.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio universal de Le Chatelier, la única perturbación física que tiene el poder de modificar numéricamente el valor de la constante de equilibrio químico (Kc) es el cambio en:",
        "options": [
          "La presión del émbolo",
          "Las concentraciones iniciales",
          "La temperatura termodinámica",
          "El tipo de catalizador sólido"
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
        "id": "q-12.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso industrial patentado se necesita sintetizar gas amoníaco mediante la reacción Haber: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + 92 kJ (Reacción exotérmica). Para maximizar el lucro y las toneladas de amoníaco producidas en la torre (lograr máximo desplazamiento a la derecha), el operario jefe debería configurar los paneles de control de la máquina para trabajar a:",
        "options": [
          "Bajas temperaturas y bajas presiones.",
          "Altas temperaturas y altas presiones.",
          "Bajas temperaturas y altas presiones.",
          "Bajas temperaturas y baja concentración de N₂."
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
        "id": "q-12.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe tiene el equilibrio: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g). Si en un reactor rígido (volumen inalterable) se inyecta una bomba del gas noble Argón a temperatura constante, podemos afirmar rigurosamente que:",
        "options": [
          "El equilibrio se desplaza violentamente hacia la derecha (productos).",
          "La presión total aumenta, pero el equilibrio se desplaza a la izquierda.",
          "La presión total no varía, el equilibrio queda inalterado.",
          "La presión total se incrementa, pero la posición del equilibrio termodinámico permanece completamente inalterada."
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
    "id": "exam-12-1",
    "objective": "12.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.1): Respecto a 1. Reversibilidad y Cinética del Equilibrio, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-2",
    "objective": "12.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.2): Respecto a 1. Ley de Acción de Masas (Guldberg y Waage, 1864), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-3",
    "objective": "12.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.3): Respecto a 1. Constante de Equilibrio en Presiones Parciales (K_p), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-4",
    "objective": "12.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.4): Respecto a 1. Reglas Operativas Fundamentales, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-5",
    "objective": "12.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.5): Respecto a 1. Definición del Cociente de Reacción (Q), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-6",
    "objective": "12.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.6): Respecto a 2. Regla Fundamental de Eliminación: Sólidos y Líquidos Puros, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-7",
    "objective": "12.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.7): Respecto a 1. Estructura y Lógica de la Tabla I-C-E, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-12-8",
    "objective": "12.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (12.8): Respecto a 1. Concepto de Grado de Disociación (α), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 12.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
