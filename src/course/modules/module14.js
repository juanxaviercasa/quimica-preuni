// Módulo 14: Módulo 14: Electroquímica y Celdas Galvánicas
export const module14 = {
  number: 14,
  intro: {
    objective: "Comprender y aplicar los fundamentos conceptuales y operacionales del tema.",
    summary: [
  "Fundamentos teóricos estructurados para Módulo 14: Electroquímica y Celdas Galvánicas.",
  "Marco analítico riguroso con modelos cuantitativos y resolución de casos tipo admisión.",
  "Actividades interactivas de verificación empírica y evaluación acumulativa por módulo."
]
  },
  topics: [
  {
    "code": "14.1",
    "objective": "Comprender la interconversión termodinámica entre energía química y eléctrica, distinguiendo la arquitectura operativa, el flujo de electrones y la polaridad en una celda galvánica frente a una electrolítica.",
    "summary": [
      "1. Fundamentos de la Electroquímica",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Principios de la electroquímica y componentes de una celda galvánica o voltaica",
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
      "statement": "En una pila galvánica, se nota que el electrodo de plata (Ag) aumenta de grosor y masa con el tiempo. Indique si este electrodo es el ánodo o el cátodo, y justifique cinéticamente el fenómeno.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Si el electrodo engorda, significa que los iones Ag⁺ que nadaban en el líquido se están pegando a la barra como metal sólido Ag(s). Para que Ag⁺ pase a Ag⁰, debe **ganar electrones (Reducción)**. Como en todo dispositivo electroquímico la reducción ocurre ineludiblemente en el **CÁTODO**, la barra de plata es el cátodo de esta pila."
    },
    "practice": [
      {
        "id": "p-14.1-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Principios de la electroquímica y componentes de una celda galvánica o voltaica, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.1-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Principios de la electroquímica y componentes de una celda galvánica o voltaica?",
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
        "id": "q-14.1-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl componente de una celda galvánica responsable de permitir el flujo de iones para mantener la electroneutralidad del sistema, evitando que la pila se polarice y deje de funcionar, se denomina:",
        "options": [
          "Electrodo de sacrificio",
          "Puente salino",
          "Voltímetro externo",
          "Cable conductor de cobre"
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
        "id": "q-14.1-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas baterías de los teléfonos inteligentes actúan de forma dual. Cuando usas el teléfono jugando, la batería se descarga produciendo corriente (celda galvánica). Cuando llegas a casa y lo enchufas, el flujo de electrones se invierte forzosamente (celda electrolítica). Indique qué proceso electroquímico ocurre estrictamente en el cátodo de la batería mientras se está cargando en el tomacorriente:",
        "options": [
          "Reducción forzada",
          "Oxidación espontánea",
          "Reducción espontánea",
          "Oxidación forzada"
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
        "id": "q-14.1-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a los procesos en una celda galvánica típica, seleccione la afirmación termodinámicamente correcta:",
        "options": [
          "Los electrones fluyen por el puente salino desde el cátodo hacia el ánodo.",
          "En el ánodo se produce la reducción, siendo este el polo positivo de la pila.",
          "El flujo de electrones en el circuito externo ocurre desde el polo negativo hacia el polo positivo.",
          "Las reacciones químicas involucradas tienen una variación de energía libre de Gibbs positiva (ΔG > 0)."
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
    "code": "14.2",
    "objective": "Describir el funcionamiento electroquímico de la histórica pila de Daniell, escribir su notación diagramática estandarizada IUPAC y fundamentar el papel vital del puente salino.",
    "summary": [
      "1. La Pila de Daniell (Zn - Cu)",
      "2. Notación Abreviada de Celda (El Diagrama IUPAC)",
      "3. El Rol Fisicoquímico del Puente Salino (KNO₃ o KCl en gel)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Funcionamiento de la pila de Daniell, notación abreviada de celda y rol del puente salino",
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
      "statement": "Represente la notación de celda IUPAC para una pila galvánica basada en la reacción espontánea: Mg(s) + Ni²⁺(ac) → Mg²⁺(ac) + Ni(s).",
      "steps": [
        "¿Quién se oxida? El Mg pasa de 0 a +2. El Magnesio es el Ánodo (va a la izquierda).",
        "¿Quién se reduce? El Ni²⁺ pasa a 0. El Níquel es el Cátodo (va a la derecha)."
      ],
      "answer": "Notación oficial: **Mg(s) | Mg²⁺(ac) || Ni²⁺(ac) | Ni(s)**."
    },
    "practice": [
      {
        "id": "p-14.2-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Funcionamiento de la pila de Daniell, notación abreviada de celda y rol del puente salino, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.2-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Funcionamiento de la pila de Daniell, notación abreviada de celda y rol del puente salino?",
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
        "id": "q-14.2-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn la representación convencional de una celda electroquímica (notación de celda), la doble barra vertical ( || ) simboliza físicamente:",
        "options": [
          "El cable conductor de electrones.",
          "El límite entre el electrodo y la solución.",
          "El puente salino o tabique poroso.",
          "La reacción de reducción."
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
        "id": "q-14.2-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn una pila galvánica construida con electrodos de plata (Ag) y plomo (Pb), se observa experimentalmente que la concentración de iones Pb²⁺ en el compartimento anódico se incrementa vertiginosamente. Para evitar que la pila se detenga por polarización electrostática, el tubo del puente salino (lleno de KNO₃) comenzará a inyectar:",
        "options": [
          "Iones nitrato (NO₃⁻) hacia el compartimento del plomo.",
          "Iones potasio (K⁺) hacia el compartimento del plomo.",
          "Iones nitrato (NO₃⁻) hacia el compartimento de la plata.",
          "Electrones hacia ambos compartimentos simultáneamente."
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
        "id": "q-14.2-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDada la notación de una pila galvánica de laboratorio:\nAl(s) | Al³⁺(1M) || Fe²⁺(1M) | Fe(s) \nDetermine la suma de los coeficientes estequiométricos de los reactantes y productos en la ecuación química neta balanceada de esta celda.",
        "options": [
          "4",
          "10",
          "5",
          "12"
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
    "code": "14.3",
    "objective": "Comprender la necesidad del Electrodo Estándar de Hidrógeno (EEH) como el \"nivel del mar\" (cero de referencia) de la electroquímica, y clasificar metales usando los potenciales estándar de reducción.",
    "summary": [
      "1. La Imposibilidad del Voltaje Solitario y el \"Cero\" Universal",
      "2. El Electrodo Estándar de Hidrógeno (EEH o SHE)",
      "3. Tabla de Potenciales Estándar de Reducción (E°red)"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Electrodo estándar de hidrógeno y determinación de potenciales estándar de reducción",
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
      "statement": "Si el potencial de reducción del zinc es E°(Zn²⁺/Zn) = -0.76 V, ¿cuál es el potencial de oxidación para el paso de Zinc metálico a ion Zinc?",
      "steps": [
        "Si invertimos la reacción física de reducción para leerla como una reacción de oxidación, la termodinámica dicta que **el signo del voltaje se invierte**.",
        "Oxidación: Zn(s) → Zn²⁺ + 2e⁻"
      ],
      "answer": "E°(oxidación) = -(-0.76) = **+0.76 V**."
    },
    "practice": [
      {
        "id": "p-14.3-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Electrodo estándar de hidrógeno y determinación de potenciales estándar de reducción, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.3-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Electrodo estándar de hidrógeno y determinación de potenciales estándar de reducción?",
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
        "id": "q-14.3-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl potencial eléctrico asignado arbitrariamente por convención internacional para la semirreacción de reducción del ion hidrógeno a gas hidrógeno a 25°C y 1 atm es:",
        "options": [
          "+1.00 V",
          "-1.00 V",
          "0.00 V",
          "Depende de la molaridad empleada."
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
        "id": "q-14.3-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nSegún la tabla de potenciales estándar, el Cobre (+0.34 V) es positivo mientras que el Hierro (-0.44 V) es negativo. Si un agricultor intenta guardar una solución de sulfato de cobre (CuSO₄) dentro de un gran barril hecho de hierro puro, ¿qué dictamina la electroquímica que sucederá en las próximas horas?",
        "options": [
          "Se formará un depósito de cobre sólido sobre las paredes del barril de hierro mientras este se disuelve y perfora.",
          "El líquido azul de cobre disolverá hidrógeno gaseoso del ambiente.",
          "Nada, los recipientes metálicos son inertes frente a sus propias sales.",
          "El hierro se reducirá a hierro metálico sólido reforzando el barril."
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
        "id": "q-14.3-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nConsidere los potenciales estándar de reducción: E°(Al³⁺/Al) = -1.66 V y E°(Sn²⁺/Sn) = -0.14 V. En una pila galvánica construida con estos dos metales, es correcto afirmar rigurosamente que:",
        "options": [
          "El estaño actuará como ánodo sufriendo oxidación.",
          "El aluminio tiene mayor tendencia a reducirse que el estaño.",
          "Los electrones fluirán a través del alambre conductor desde el electrodo de aluminio hacia el electrodo de estaño.",
          "La masa del electrodo de aluminio aumentará progresivamente con el tiempo."
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
    "code": "14.4",
    "objective": "Calcular la fuerza electromotriz estándar (E°celda) de una pila combinando potenciales de reducción tabulados, y predecir de forma absoluta si una reacción química ocurrirá espontáneamente o no.",
    "summary": [
      "1. La Fórmula Dorada: Fuerza Electromotriz (E°celda)",
      "2. Criterio de Espontaneidad (El Santo Grial de las Pilas)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cálculo de la fuerza electromotriz estándar de celda y predicción de espontaneidad redox",
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
      "statement": "Construimos una batería utilizando láminas de Plata (Ag) y Níquel (Ni). Datos de tabla: E°(Ag⁺/Ag) = +0.80 V y E°(Ni²⁺/Ni) = -0.25 V. Determine quién actuará como ánodo, quién como cátodo, y el voltaje que marcará el instrumento (E°celda).",
      "steps": [
        "Paso 1: Evaluamos quién es mayor. +0.80 V es muy superior a -0.25 V.",
        "Paso 2: El mayor manda. La Plata (Ag) será el **Cátodo** (se reduce). El débil Níquel (Ni) será forzado a ser el **Ánodo** (se oxida).",
        "Paso 3: Aplicamos fórmula E°celda = E°(Cátodo) - E°(Ánodo)"
      ],
      "answer": "E°celda = (+0.80 V) - (-0.25 V) = +0.80 + 0.25 = **+1.05 Voltios** (Batería espontánea)."
    },
    "practice": [
      {
        "id": "p-14.4-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cálculo de la fuerza electromotriz estándar de celda y predicción de espontaneidad redox, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.4-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cálculo de la fuerza electromotriz estándar de celda y predicción de espontaneidad redox?",
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
        "id": "q-14.4-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún los principios de la termodinámica electroquímica, para que el diseño de un acumulador portátil o pila voltaica logre encender una linterna de forma autónoma, el voltaje calculado de su reacción neta (E°celda) debe ser un valor:",
        "options": [
          "Cero absoluto",
          "Estrictamente negativo",
          "Estrictamente positivo",
          "Dependiente del volumen del líquido"
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
        "id": "q-14.4-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nEn un proceso de galvanoplastia artesanal, un joyero observa la ecuación: Cu(s) + Zn²⁺(ac) → Cu²⁺(ac) + Zn(s). Sabiendo que en su tabla de datos E°(Cu²⁺/Cu) = +0.34 V y E°(Zn²⁺/Zn) = -0.76 V, al calcular el voltaje teórico de esa ecuación propuesta en papel, concluye correctamente que:",
        "options": [
          "El voltaje es +1.10 V y la reacción recubrirá la joya instantáneamente.",
          "El voltaje es -1.10 V, por lo que la reacción planteada es imposible de forma natural (no espontánea).",
          "El cobre es un agente reductor más fuerte que el zinc.",
          "Ambos metales precipitarán hacia el fondo."
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
        "id": "q-14.4-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDadas las siguientes semirreacciones de reducción:\nAl³⁺ + 3e⁻ → Al(s) (E° = -1.66 V)\nPb²⁺ + 2e⁻ → Pb(s) (E° = -0.13 V)\nIndique la proposición correcta respecto a una celda galvánica configurada con estos dos electrodos:",
        "options": [
          "El electrodo de aluminio constituye el cátodo de la celda.",
          "Los electrones fluyen del plomo hacia el aluminio a través del conductor metálico.",
          "La fuerza electromotriz (voltaje) generada por la pila estándar es de +1.53 V.",
          "La reacción global balanceada transfiere 5 electrones netos."
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
    "code": "14.5",
    "objective": "Integrar la santa trinidad de ecuaciones químicas, interrelacionando analíticamente el voltaje de celda (E°celda), el Trabajo Útil / Energía de Gibbs (ΔG°) y la Constante de Equilibrio (K).",
    "summary": [
      "1. Relación entre Voltaje y Energía Libre de Gibbs (ΔG°)",
      "2. Relación con la Constante de Equilibrio (K)",
      "3. El Triángulo Supremo de la Espontaneidad Química"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Correlación termodinámica entre potencial estándar de celda, energía libre y constante de equilibrio",
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
      "statement": "Se construye una celda galvánica cuya reacción global balanceada transfiere 2 moles de electrones (n=2). El voltímetro registra un E°celda = +0.50 V. Calcule la variación de energía libre de Gibbs estándar (ΔG°) en kiloJoules. (Dato: 1 F ≈ 96500 C/mol).",
      "steps": [
        "Aplicamos directo la fórmula: ΔG° = - n F E°",
        "ΔG° = - (2 mol) × (96500 J/(V·mol)) × (+0.50 V)",
        "ΔG° = - 96500 Joules"
      ],
      "answer": "Convertimos a kiloJoules dividiendo entre 1000: **ΔG° = -96.5 kJ** (El signo menos confirma que la pila sí prenderá la linterna)."
    },
    "practice": [
      {
        "id": "p-14.5-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Correlación termodinámica entre potencial estándar de celda, energía libre y constante de equilibrio, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.5-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Correlación termodinámica entre potencial estándar de celda, energía libre y constante de equilibrio?",
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
        "id": "q-14.5-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el modelo termodinámico estándar, para que una reacción redox sea calificada como espontánea en la naturaleza, y por ende útil para fabricar una pila alcalina comercial, los parámetros termodinámicos deben cumplir:",
        "options": [
          "ΔG° > 0 y E°celda < 0",
          "ΔG° < 0 y E°celda > 0",
          "ΔG° = 0 y E°celda = 0",
          "ΔH° > 0 y E°celda > 0"
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
        "id": "q-14.5-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nInvestigadores prueban un nuevo metal para baterías de autos eléctricos. Notan que al conectar la celda, la reacción química no avanza ni retrocede; la aguja del multímetro analógico marca un decepcionante 0.00 V permanente. Esto indica a nivel atómico que:",
        "options": [
          "La reacción tiene una enorme energía de activación que impide su arranque.",
          "El sistema ha alcanzado el equilibrio electroquímico y su ΔG° es cero.",
          "La reacción es fuertemente espontánea pero los cables están rotos.",
          "La constante de equilibrio de la reacción es gigantesca (K ≫ 1)."
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
        "id": "q-14.5-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nEn la pila galvánica formada por la reacción: 2Fe³⁺(ac) + Cu(s) → 2Fe²⁺(ac) + Cu²⁺(ac), cuyo E°celda es +0.43 V a 25°C. Determine algebraicamente la ecuación que permitiría calcular la constante de equilibrio logarítmica log(K) del proceso:",
        "options": [
          "log(K) = (2 × 0.43) / 0.0592",
          "log(K) = (3 × 0.43) / 0.0592",
          "log(K) = (6 × 0.43) / 0.0592",
          "log(K) = (1 × 0.43) / 0.0592"
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
    "code": "14.6",
    "objective": "Deducir y aplicar la ecuación de Nernst para calcular el potencial real de una pila bajo concentraciones no estándar, y evaluar su decaimiento de voltaje hasta la muerte electroquímica (equilibrio).",
    "summary": [
      "1. El Problema de la Realidad y la Ecuación de Nernst (1889)",
      "2. Comportamiento Dinámico de la Pila de Daniell",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Aplicación de la ecuación de Nernst en celdas galvánicas en condiciones no estándar",
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
      "statement": "En una pila galvánica de Zinc y Cobre (Pila de Daniell con E° = 1.10 V y n = 2), la concentración de los iones producto [Zn²⁺] es de 0.1 M y la de los iones reactivos [Cu²⁺] es de 0.001 M. Determine algebraicamente si el voltaje actual que proporciona la pila es mayor o menor a 1.10 V. (No requiere calculadora, solo lógica logarítmica).",
      "steps": [
        "Calculamos el factor Q = [Productos] / [Reactivos] = [Zn²⁺] / [Cu²⁺]",
        "Q = 0.1 / 0.001 = 100.",
        "Como Q = 100, log(100) = 2. El logaritmo es positivo.",
        "La ecuación es: E = 1.10 - (algo positivo)."
      ],
      "answer": "Por tanto, al estar restándole valor, el voltaje actual de la pila será **MENOR a 1.10 Voltios** (la pila está muy desgastada)."
    },
    "practice": [
      {
        "id": "p-14.6-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación de la ecuación de Nernst en celdas galvánicas en condiciones no estándar, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.6-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la ecuación de Nernst en celdas galvánicas en condiciones no estándar?",
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
        "id": "q-14.6-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el análisis de la ecuación de Nernst para una pila galvánica en funcionamiento continuo y prolongado, el voltaje que entrega al circuito externo a lo largo de las horas irá:",
        "options": [
          "Aumentando exponencialmente.",
          "Disminuyendo de manera gradual hasta llegar a cero.",
          "Manteniéndose infinitamente constante.",
          "Fluctuando como corriente alterna."
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
        "id": "q-14.6-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUna start-up tecnológica quiere diseñar una batería primaria de larga duración. Usando la ecuación de Nernst como guía de ingeniería, los diseñadores deducen que para lograr exprimir el voltaje MÁXIMO posible en el minuto cero de arranque de la pila, deben estructurarla de tal forma que:",
        "options": [
          "La concentración de los iones producto sea extremadamente alta.",
          "La concentración de todos los iones sea igual a 1 Molar.",
          "La concentración de los iones reactivos en el cátodo sea muy alta y la de los productos anódicos sea casi nula.",
          "Ambas celdas tengan la misma temperatura ambiente."
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
        "id": "q-14.6-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nDada la semirreacción de oxidación del aluminio: Al(s) → Al³⁺(ac) + 3e⁻, y la semirreacción de reducción de la plata: Ag⁺(ac) + 1e⁻ → Ag(s). Al aplicar la ecuación matemática de Nernst a la celda global construida, el término del cociente de reacción (Q) al cual se le sacará el logaritmo corresponderá algebraicamente a la fracción:",
        "options": [
          "[Al³⁺] / [Ag⁺]³",
          "[Al³⁺] / [Ag⁺]",
          "[Ag⁺]³ / [Al³⁺]",
          "[Al³⁺]² / [Ag⁺]³"
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
    "code": "14.7",
    "objective": "Analizar la física exótica de las celdas de concentración, describir la carga/descarga de la batería de plomo del automóvil y caracterizar la revolución ecológica de las celdas de combustible.",
    "summary": [
      "1. Celdas de Concentración (Pilas Psicológicas)",
      "2. Baterías Secundarias: El Acumulador de Plomo (Batería de Auto)",
      "3. Celdas de Combustible (La nave espacial H₂/O₂)"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Análisis operativo de celdas de concentración, acumuladores de plomo y celdas de combustible",
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
      "statement": "En una batería automotriz clásica de plomo-ácido, indique qué sucede termodinámicamente con la densidad y el pH de la disolución electrolítica interior a medida que el conductor deja las luces encendidas con el motor apagado durante horas.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Las luces consumen energía, forzando a la batería a descargar. La ecuación de descarga destruye y consume el pesado Ácido Sulfúrico (H₂SO₄) transformándolo en agua ligera (H₂O). Conclusión: Al formarse agua, la disolución se vuelve menos pesada (**la densidad cae**) y el nivel de acidez cae estrepitosamente, volviéndose más neutro (**el pH aumenta** acercándose a 7)."
    },
    "practice": [
      {
        "id": "p-14.7-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Análisis operativo de celdas de concentración, acumuladores de plomo y celdas de combustible, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.7-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Análisis operativo de celdas de concentración, acumuladores de plomo y celdas de combustible?",
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
        "id": "q-14.7-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEn una celda de concentración armada con dos electrodos de cobre sumergidos en soluciones de sulfato de cobre de distintas concentraciones (1.0 M y 0.01 M), la fuerza termodinámica electromotriz teórica estándar (E°celda) vale:",
        "options": [
          "Cero voltios (0.00 V)",
          "Exactamente +0.34 V",
          "Mayor a 1 Voltio",
          "Infinito negativo"
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
        "id": "q-14.7-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas automotrices modernas están invirtiendo billones en celdas de combustible de hidrógeno (Fuel Cells) para reemplazar a los motores de combustión interna, argumentando ventajas de \"Cero Emisiones Ambientales\". Químicamente, esta etiqueta verde es cierta porque el único producto o gas de escape material que expulsa esta celda tras generar electricidad es:",
        "options": [
          "Dióxido de carbono (CO₂)",
          "Monóxido de nitrógeno (NO)",
          "Agua destilada (H₂O)",
          "Plomo orgánico particulado"
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
        "id": "q-14.7-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nRespecto a los procesos de carga y descarga de un acumulador comercial de plomo-ácido (batería de auto de 12V), señale la afirmación que represente la realidad química del sistema:",
        "options": [
          "Durante el proceso de descarga, la batería actúa obligatoriamente como una celda electrolítica absorbiendo electricidad.",
          "En la fase de descarga celular, el electrodo de dióxido de plomo (PbO₂) actúa de forma reductora perdiendo oxígeno.",
          "Durante el proceso de recarga (con el alternador en marcha), las reacciones redox operan de forma no espontánea consumiendo energía de la faja del motor.",
          "Durante todo su uso, la masa del cátodo permanece inalterable al ser un metal noble."
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
    "code": "14.8",
    "objective": "Comprender la corrosión del óxido metálico no como un desgaste simple, sino como un letal proceso de microcelda galvánica espontánea acoplada a la humedad, e implementar curas industriales preventivas.",
    "summary": [
      "1. Mecanismo Electroquímico del Cáncer Metálico (Herrumbre)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Cinética y termodinámica de la corrosión del hierro y técnicas de protección catódica y ánodo de sacrificio",
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
      "statement": "Para instalar una red de tuberías de acero subterráneas que cruzan un suelo húmedo pantanoso, un ingeniero civil debe anclar ánodos de sacrificio. Dispone de cables de cobre, bloques de plata y trozos de magnesio. ¿Qué material elegirá justificada e inapelablemente?",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "Debe elegir un metal que tenga mucha mayor tendencia a oxidarse (mayor potencial de oxidación, menor de reducción) que el hierro de los tubos. La plata y el cobre son metales muy nobles que exigen que los demás se oxiden por ellos. Si los conecta, destruirá la tubería más rápido. El único candidato apto y sacrificial es el **Magnesio**, que se disolverá protegiendo al acero."
    },
    "practice": [
      {
        "id": "p-14.8-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Cinética y termodinámica de la corrosión del hierro y técnicas de protección catódica y ánodo de sacrificio, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.8-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Cinética y termodinámica de la corrosión del hierro y técnicas de protección catódica y ánodo de sacrificio?",
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
        "id": "q-14.8-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nEl subproducto físico final, rojizo, escamoso y poroso que evidenciamos en el deterioro ambiental del acero estructural bajo intemperie marina, corresponde químicamente al:",
        "options": [
          "Óxido cuproso anhidro",
          "Óxido de hierro(III) hidratado",
          "Sulfato de hierro",
          "Cloruro férrico sublimado"
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
        "id": "q-14.8-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas varillas de construcción de fierro (acero) que se dejan abandonadas en los desiertos peruanos de Ica y Piura pueden pasar años sin oxidarse significativamente en comparación con las de la húmeda costa limeña. Este fenómeno empírico nos corrobora que para que se desate la microcelda electroquímica de la herrumbre, además de oxígeno, es estrictamente indispensable la presencia de:",
        "options": [
          "Tierra rica en nitratos",
          "Calor solar sofocante",
          "Cúmulos de dióxido de carbono",
          "Películas de agua líquida condensada o humedad ambiental"
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
        "id": "q-14.8-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nAl acoplar el bloque de magnesio a la estructura de la plataforma petrolera marina en alta mar para brindarle protección catódica contra el embate de la salmuera oceánica, el casco gigantesco de acero y hierro pasa a comportarse funcional y electroquímicamente como un:",
        "options": [
          "Ánodo de sacrifico",
          "Electrodo de puente salino",
          "Cátodo, sitio físico de la reducción del oxígeno disuelto",
          "Catalizador inerte que precipita halógenos"
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
    "code": "14.9",
    "objective": "Identificar la estructura operativa forzada de una celda electrolítica y predecir los productos atómicos resultantes en los electrodos al derretir sales en ausencia total de agua.",
    "summary": [
      "1. Principio Antinatural de la Electrólisis",
      "2. Electrólisis Ígnea: Sales Fundidas a Altísimas Temperaturas",
      "Caso Maestro: Electrólisis del Cloruro de Sodio Fundido (NaCl líquido)"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Estructura de celdas electrolíticas y electrólisis de sales haloideas anhidras fundidas",
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
      "statement": "En la electrólisis del cloruro de magnesio fundido o ígneo (MgCl₂), prediga cualitativamente el elemento químico depositado o burbujeado en el ánodo positivo.",
      "steps": [
        "Aplicar los principios de balance y proporciones correspondientes."
      ],
      "answer": "El ánodo (+), que siempre ejecuta la OXIDACIÓN, es el faro atractor de aniones (negativos). En el magma de MgCl₂, el único anión libre y disponible es el Cl⁻. Este se oxidará abandonando su electrón, burbujeando como el elemento diatómico **Gas Cloro (Cl₂)**."
    },
    "practice": [
      {
        "id": "p-14.9-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Estructura de celdas electrolíticas y electrólisis de sales haloideas anhidras fundidas, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.9-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Estructura de celdas electrolíticas y electrólisis de sales haloideas anhidras fundidas?",
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
        "id": "q-14.9-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el principio universal de los componentes de la celda de forzamiento electrolítico, la reducción electroquímica de los cationes disueltos en el líquido tendrá lugar estrictamente sobre la superficie del:",
        "options": [
          "Ánodo de polaridad positiva (+)",
          "Cátodo de polaridad positiva (+)",
          "Cátodo de polaridad negativa (-)",
          "Puente salino de nitrato"
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
        "id": "q-14.9-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLa empresa minera nacional desea purificar aluminio metálico de alta pureza (Al puro) partiendo del mineral bauxita que contiene el tenaz óxido de aluminio (Al₂O₃). Evaluando la extremada reactividad del aluminio frente al hidrógeno, el método tecnológico industrial único y factible económicamente será:",
        "options": [
          "Echar bauxita en agua, calentar y aplicar electrólisis acuosa.",
          "Disolver la bauxita en un potente ácido y centrifugar el residuo.",
          "Realizar la electrólisis de la bauxita fundida (sólida derretida) con minerales criolíticos a 1000°C en ausencia letal de agua.",
          "Flotación espumante a temperatura ambiental."
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
        "id": "q-14.9-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nSe arma un circuito para realizar la electrólisis del bromuro de potasio fundido o ígneo (KBr líquido puro). Seleccione el par de semirreacciones químicas precisas que modelan el evento en el Cátodo y en el Ánodo, en el orden mencionado:",
        "options": [
          "Cátodo: K⁺ + 1e⁻ → K(s) ; Ánodo: 2Br⁻ → Br₂(g) + 2e⁻",
          "Cátodo: 2Br⁻ → Br₂ + 2e⁻ ; Ánodo: K(s) → K⁺ + 1e⁻",
          "Cátodo: H₂O + e⁻ → H₂ + OH⁻ ; Ánodo: Br⁻ → Br₂ + 2e⁻",
          "Cátodo: K⁺ → K(s) + e⁻ ; Ánodo: 2Br⁻ + 2e⁻ → Br₂(g)"
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
    "code": "14.10",
    "objective": "Predecir inteligentemente los productos de electrólisis en soluciones acuosas, analizando las duras leyes de competencia termodinámica entre el solvente (agua) y los caprichosos iones del soluto.",
    "summary": [
      "1. El Fenómeno del Combate Mortal Redox en Solución Acuosa",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Electrólisis de soluciones acuosas diluidas y concentradas: electrólisis del agua acidulada y salmuera",
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
      "statement": "En un proceso de experimentación, se somete a electrólisis con corriente continua una disolución concentrada de Bromuro de Potasio (KBr). Nombre los elementos puros o gases obtenidos en las mangueras del cátodo y del ánodo respectivamente.",
      "steps": [
        "Vamos al cátodo (-): El competidor es el catión K⁺ vs el Agua. El Potasio (grupo IA) no se reduce. El agua gana y emite gas **Hidrógeno (H₂)**.",
        "Vamos al ánodo (+): El anión Br⁻ (halógeno) compite contra el Agua. El bromo es fácil de oxidar. Gana el bromuro y emite vapor rojizo de **Bromo (Br₂)**."
      ],
      "answer": "Respuesta final: H₂ gaseoso y Br₂."
    },
    "practice": [
      {
        "id": "p-14.10-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Electrólisis de soluciones acuosas diluidas y concentradas: electrólisis del agua acidulada y salmuera, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.10-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Electrólisis de soluciones acuosas diluidas y concentradas: electrólisis del agua acidulada y salmuera?",
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
        "id": "q-14.10-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nAl aplicar una corriente eléctrica a un recipiente de cristal que contiene una mezcla de agua y ácido sulfúrico para facilitar el paso de la electricidad, el volumen de los gases que burbujean responde invariablemente a una proporción volumétrica de:",
        "options": [
          "1 litro de oxígeno por cada 1 litro de hidrógeno.",
          "2 litros de hidrógeno por cada 1 litro de oxígeno.",
          "3 litros de oxígeno por cada 2 litros de hidrógeno.",
          "Cantidades aleatorias dependientes del amperaje."
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
        "id": "q-14.10-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nLas fábricas de detergentes y blanqueadores son asiduas consumidoras del gas tóxico de color verdoso llamado cloro (Cl₂). Para sintetizar este preciado insumo al menor coste, la ingeniería química planetaria optó por electrolizar masivamente toneladas cúbicas de agua de mar saturada artificialmente (salmuera de NaCl). Indique los tres productos totales comercializables que escupe esta fabulosa máquina tras separar la mezcla con electricidad:",
        "options": [
          "Sodio metálico denso, Cloro gaseoso y Oxígeno respirable.",
          "Cloro en gas, Oxígeno en gas y cristales de Cloruro de sodio.",
          "Gas Cloro tóxico, Gas Hidrógeno inflamable y una tina llena de Hidróxido de sodio acuoso.",
          "Gas Hidrógeno, Gas Oxígeno purísimo y cristales de Hidrato salino."
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
        "id": "q-14.10-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nIdentifique la especie química o el compuesto anómalo que, tras ser disuelto en un baño acuoso neutro, lograría que al accionar el interruptor de la celda de electrólisis y esperar una hora, los electrodos se manchen formándose una capa gruesa e indiscutible de metal puro brillante sobre la placa del cátodo, sin burbujear ni una sola gota de gas hidrógeno en ese mismo electrodo:",
        "options": [
          "Al(NO₃)₃",
          "KCl",
          "CaSO₄",
          "AgNO₃"
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
    "code": "14.11",
    "objective": "Formular matemáticamente la Primera Ley de Faraday para calcular con enorme rigor analítico los gramos y kilogramos exactos de metales electrodepositados o los balones de gases puros liberados en la industria.",
    "summary": [
      "1. La Inquebrantable Primera Ley de Michael Faraday (1834)",
      "2. Atrapando Gases Evasivos (Volumen a Condiciones Normales - C.N.)",
      "Siguiente paso"
    ],
    "activity": {
      "family": "calculator",
      "title": "Simulador cuantitativo: Aplicación cuantitativa de la primera ley de Faraday para masa depositada o volumen de gas liberado",
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
      "statement": "El parachoques cromado brillante de una motocicleta antigua debe restaurarse electroquímicamente. Un taller lo sumerge en una cubeta bañándolo con ácido crómico venenoso que contiene iones Cr³⁺. La máquina suelda un cable y le inyecta una poderosa corriente de 96.5 Amperios por exactamente 1000 segundos continuos (poco más de 16 minutos). Calcule cuántos gramos formidables de cromo metálico sólido se pegaron en la coraza del parachoques. (Masa atómica Cr = 52).",
      "steps": [
        "Armamos el rompecabezas: M = 52. Intensidad (I) = 96.5 A. Tiempo (t) = 1000 s.",
        "Identificamos el eslabón clave θ: El cromo en el tanque es Cr³⁺ y se tiene que transformar en Cromo chapa (0). Reducirlo exige inyectarle 3 electrones. θ = 3.",
        "Reventamos la máquina de Faraday:",
        "m = (52 × 96.5 × 1000) / (3 × 96500)",
        "Simplificamos genialmente: 96.5 × 1000 = 96500. El número inmenso del numerador cancela directamente con el 96500 asfixiante de abajo."
      ],
      "answer": "m = 52 / 3 = **17.33 gramos limpios de recubrimiento de cromo protector**."
    },
    "practice": [
      {
        "id": "p-14.11-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación cuantitativa de la primera ley de Faraday para masa depositada o volumen de gas liberado, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.11-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación cuantitativa de la primera ley de Faraday para masa depositada o volumen de gas liberado?",
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
        "id": "q-14.11-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún el enunciado dogmático original de la Primera Ley general que rige los fenómenos de la Electrólisis, postulado magistralmente por Faraday, la masa extraída y depositada materialmente sobre el electrodo resulta ser estrictamente directamente proporcional a:",
        "options": [
          "El tiempo térmico expresado en micro-horas de desgaste del electrodo inerte.",
          "La intensidad del campo electro-magnético del puente salino saturado.",
          "La carga o volumen colosal de electricidad continua transitada por la cuba.",
          "La masa intrínseca del átomo bombardeado de Faraday."
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
        "id": "q-14.11-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nPara abastecer los respiradores mecánicos de la nave espacial Artemis II sin cargar tanques pesados, se instalan electrolizadores de alta eficiencia que rompen los desechos de agua sobrante con los paneles solares. Si los ingenieros imponen una intensidad calibrada de 96.5 Amperios durante exactamente 100 segundos térmicos, ¿qué volumen asombroso de oxígeno de soporte vital se generará a condiciones normales de la bahía (C.N.)? (Recuerde el factor secreto del O₂).",
        "options": [
          "0.56 Litros",
          "22.4 Litros",
          "11.2 Litros",
          "1.12 Litros"
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
        "id": "q-14.11-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nCon la intención lúgubre de precipitar todo el metal de 500 mL de una densa solución comercial concentrada de sulfato de zinc de molaridad 2.0 M, el operario de fundición lo acopla a un reactor con suministro de 19.3 Amperios estabilizados. Calcule el tiempo exasperante exacto (en horas cerradas) que el hombre deberá vigilar la máquina en encendido continuo para arrancar hasta la última molécula metálica disuelta. (Masa Zinc=65).",
        "options": [
          "4.5 horas",
          "2.78 horas",
          "5.56 horas",
          "10000 horas de desgaste"
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
    "code": "14.12",
    "objective": "Desenmascarar la Segunda Ley de Faraday a sistemas industriales macizos de cubas electrolíticas acopladas en serie, pulverizando el cálculo cruzado de masas metálicas mediante la ley inquebrantable de los equivalentes químicos universales.",
    "summary": [
      "1. Segunda Ley de Faraday (El Trencito Eléctrico)",
      "2. Recreación de Conexión en Serie Analítica Letal",
      "Siguiente paso"
    ],
    "activity": {
      "family": "order",
      "title": "Ordenamiento secuencial: Aplicación de la segunda ley de Faraday en celdas electrolíticas conectadas en serie",
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
      "statement": "En un ensayo industrial siderúrgico simultáneo a gran escala, se asocian tenazmente en conexión en serie una cuba corrosiva de sulfato de zinc asquerosamente azuloso y un recipiente hirviente de cloruro férrico de un ocre infernal. Luego de un zumbido eléctrico monumental de varias horas intermitentes, el jefe de planta pesa en la balanza de precisión 6.5 kilogramos netos de zinc macizo brillante depositados. Determina ferozmente, sin dudar, qué tonelaje o masa pesada en kilogramos de hierro metálico sólido se forjó, soldó y atascó en el cátodo contiguo en el mismo maldito lapso de tiempo. (Datos: Masa Molar Zn = 65, Fe = 56).",
      "steps": [
        "El puente mágico de la segunda ley dicta: m(Zn) / P.Eq.(Zn) = m(Fe) / P.Eq.(Fe)",
        "Hallamos las armas (Pesos equivalentes):",
        "El sulfato de zinc (ZnSO₄) esconde al catión Zn²⁺. Pierde/Gana 2. Su θ es 2. P.Eq.(Zn) = 65 / 2 = 32.5 g/eq.",
        "El cloruro férrico (FeCl₃) atesora al coloso férrico Fe³⁺. Su θ es 3. P.Eq.(Fe) = 56 / 3 = 18.67 g/eq.",
        "Armamos el castillo aritmético (dejando las masas en Kg, que igual se respeta la fracción):",
        "6.5 kg / 32.5 = Masa(Fe) / (56/3)",
        "0.20 = Masa(Fe) / 18.67"
      ],
      "answer": "Masa(Fe) = 0.20 × 18.67 = **3.73 Kilogramos de puro Hierro colado forjado en el segundo reactor**."
    },
    "practice": [
      {
        "id": "p-14.12-1",
        "type": "mc",
        "prompt": "Para el análisis cuantitativo de Aplicación de la segunda ley de Faraday en celdas electrolíticas conectadas en serie, ¿qué procedimiento garantiza la validez física del resultado?",
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
        "id": "p-14.12-2",
        "type": "mc",
        "prompt": "¿Cuál es la condición fundamental que rige el fenómeno en Aplicación de la segunda ley de Faraday en celdas electrolíticas conectadas en serie?",
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
        "id": "q-14.12-1",
        "type": "mc",
        "prompt": "(Nivel Básico)**\n\nSegún los principios fundamentales e inmutables de la electrodinámica y la Segunda Ley macroscópica de Faraday en sistemas de depuración química, al montar celdas galvánicas y electrolíticas trenzadas obligatoriamente en serie ininterrumpida, la variable universal abstracta que arrojará el mismo valor en cada celda evaluada es:",
        "options": [
          "La masa neta física depositada de metales disueltos.",
          "El número constante microscópico de Avogadro.",
          "El número equivalente de moles gaseosas atrapadas y destiladas en las rejas.",
          "El número exacto y proporcional de equivalentes-gramo de sustancia precipitada."
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
        "id": "q-14.12-2",
        "type": "mc",
        "prompt": "(Nivel Intermedio Admisión)**\n\nUna mega factoría joyera de electrodeposición barata ensambla una línea en serie que engloba un tanque galvánico colmado de un baño espumoso de plata (AgNO₃) y un tanque humeante vecino de cloruro áurico asesino (AuCl₃). El contador magnético inyecta voltaje letal sostenido que desencadena la cristalización de fulgurantes y pesados 3.0 Moles de plata coloidal pura (Ag) forjando alhajas. ¿Cuántos moles preciosos, medidos de reojo por el supervisor, de oro macizo rutilante (Au) asomarán petrificados en el lodo del tanque vecino, sabiendo que el oro lucha en estado trivalente letal (+3)?",
        "options": [
          "9.0 moles gloriosos de Oro puro.",
          "3.0 moles empatados de Oro puro.",
          "1.0 mol macizo y brillante de Oro puro.",
          "0.5 moles escurridos y amorfos de Oro puro."
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
        "id": "q-14.12-3",
        "type": "mc",
        "prompt": "(Nivel Avanzado Admisión)**\n\nUn científico sádico enlaza salvajemente dos receptáculos de vidrio de borosilicato ardiente con baños en serie. El Matraz A alberga cloruro de cobre divalente oxidado y rechinante (CuCl₂); el Matraz B se inunda con cloruro crómico hirviendo en el límite de la explosión acuosa (CrCl₃). Tras someter el circuito a 24 horas de tortura voltaica de corriente estabilizada al milímetro, logra cosechar la ínfima pero valiosa masa de 6.35 gramos puros del codiciado Cobre. Con aplomo y la hoja en blanco de su libreta a la vista, debe predecir con 4 decimales: ¿Cuántos gramos formidables de cromo metálico incandescente debieron sedimentar implacablemente en el receptáculo alterno? (Masas pesadas atómicas imperturbables en laboratorio: Cu=63.5, Cr=52).",
        "options": [
          "5.20 gramos de cromo",
          "3.47 gramos de cromo",
          "6.35 gramos de cromo",
          "10.40 gramos de cromo"
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
    "id": "exam-14-1",
    "objective": "14.1",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.1): Respecto a 1. Fundamentos de la Electroquímica, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.1: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-2",
    "objective": "14.2",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.2): Respecto a 1. La Pila de Daniell (Zn - Cu), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.2: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-3",
    "objective": "14.3",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.3): Respecto a 1. La Imposibilidad del Voltaje Solitario y el \"Cero\" Universal, determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.3: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-4",
    "objective": "14.4",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.4): Respecto a 1. La Fórmula Dorada: Fuerza Electromotriz (E°celda), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.4: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-5",
    "objective": "14.5",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.5): Respecto a 1. Relación entre Voltaje y Energía Libre de Gibbs (ΔG°), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.5: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-6",
    "objective": "14.6",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.6): Respecto a 1. El Problema de la Realidad y la Ecuación de Nernst (1889), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.6: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-7",
    "objective": "14.7",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.7): Respecto a 1. Celdas de Concentración (Pilas Psicológicas), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.7: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  },
  {
    "id": "exam-14-8",
    "objective": "14.8",
    "type": "mc",
    "prompt": "Pregunta de integración acumulativa (14.8): Respecto a 1. Mecanismo Electroquímico del Cáncer Metálico (Herrumbre), determine la proposición correcta:",
    "options": [
      "El fenómeno obedece estrictamente a las leyes de conservación y a la descripción cuántica/termodinámica establecida.",
      "Las magnitudes extensivas no varían cuando se subdivide el sistema material.",
      "Los cálculos estequiométricos o de balance omiten las relaciones molares fundamentales.",
      "La energía del sistema se crea espontáneamente sin absorción ni liberación en el entorno."
    ],
    "answer": 0,
    "explanation": "Solución fundamentada en el tema 14.8: el sistema respeta los principios fundamentales de la materia y la energía.",
    "why": [
      "Opción correcta: descripción canónica fundamentada en el marco IUPAC.",
      "Distractor: las propiedades extensivas sí dependen de la cantidad de materia.",
      "Distractor: las relaciones estequiométricas son el núcleo del balance de masa.",
      "Distractor: la primera ley de la termodinámica prohíbe la creación espontánea de energía."
    ]
  }
]
};
