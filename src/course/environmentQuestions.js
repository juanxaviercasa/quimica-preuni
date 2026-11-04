// Original questions. Each tuple contains the question, correct option,
// two distractors and the reasoning. Order is rotated when building the bank.
const cases = {
  "18.1": [
    ["¿Qué propiedad aprovecha la flotación de sulfuros?", "Diferencia de mojabilidad superficial", "Solo la densidad de los granos", "Diferencia de número atómico", "Los colectores favorecen la adhesión de partículas hidrófobas a burbujas. La densidad sola no explica la separación."],
    ["En una mena de cobre, ¿qué se denomina ganga?", "Material acompañante sin valor económico en las condiciones de explotación", "Cobre metálico refinado", "Producto gaseoso de la tostación", "La ganga acompaña al mineral de interés. Su valoración depende del contexto económico y tecnológico."],
    ["¿Qué corriente se busca enriquecer en mineral valioso?", "Concentrado", "Relave", "Agua de lavado pura", "La concentración aumenta la proporción del mineral aprovechable. Los relaves son la corriente residual y pueden requerir gestión ambiental."]
  ],
  "18.2": [
    ["En Fe₂O₃ + 3CO → 2Fe + 3CO₂, ¿qué especie se oxida?", "CO", "Fe₂O₃", "Fe", "El carbono pasa de +2 en CO a +4 en CO₂. El hierro pasa de +3 a 0."],
    ["¿Para qué se añade caliza en un alto horno?", "Para aportar un fundente que ayude a formar escoria", "Para actuar como único combustible", "Para eliminar todos los electrones del hierro", "La caliza se descompone y aporta CaO, que puede reaccionar con impurezas silíceas para incorporarlas a la escoria."],
    ["¿Qué operación permite convertir arrabio en acero?", "Reducir y ajustar carbono e impurezas", "Aumentar siempre el carbono hasta 10 %", "Disolver hierro únicamente en agua", "El afinado reduce el exceso de carbono y ajusta la composición según las propiedades buscadas."]
  ],
  "18.3": [
    ["En la refinación electrolítica del cobre, ¿dónde se deposita Cu metálico?", "En el cátodo", "En el ánodo", "Solo en el fondo como gas", "En el cátodo ocurre Cu²⁺ + 2e⁻ → Cu. El ánodo de cobre impuro se disuelve."],
    ["¿Qué proceso extrae cobre de ciertos minerales oxidados mediante ácido?", "Lixiviación", "Destilación fraccionada", "Flotación por evaporación", "La lixiviación transfiere el metal a una disolución mediante un reactivo apropiado al mineral."],
    ["¿Qué impureza noble puede acumularse en el lodo anódico?", "Oro", "Zinc disuelto como Zn²⁺", "Agua", "En condiciones habituales de refinación, metales nobles como oro y plata pueden quedar en el lodo anódico. No todas las impurezas se comportan igual."]
  ],
  "18.4": [
    ["En la cianuración aeróbica del oro, ¿qué función cumple el oxígeno?", "Actúa como oxidante", "Se transforma en oro", "Solo eleva el número de masa del oro", "El oro se oxida y forma un complejo soluble. El oxígeno participa como aceptor de electrones."],
    ["¿Por qué se deben controlar los residuos de cianuración?", "Porque los compuestos de cianuro pueden representar un riesgo tóxico", "Porque el oro no conserva su masa", "Porque toda disolución es inocua", "El proceso requiere control industrial de reactivos y efluentes. La extracción de un metal no elimina el riesgo de sus residuos."],
    ["¿Qué describe la adsorción del complejo de oro en carbón activado?", "Retención en la superficie del adsorbente", "Fusión nuclear del oro", "Conversión del oro en carbón", "La adsorción ocurre en superficies. Se distingue de la absorción hacia el volumen de un material."]
  ],
  "18.5": [
    ["¿Cuál es un contaminante secundario formado en el aire?", "Ozono troposférico", "SO₂ emitido directamente", "CO emitido directamente", "El ozono troposférico se forma mediante reacciones fotoquímicas de precursores, incluidos NOx y compuestos orgánicos volátiles."],
    ["¿Qué criterio distingue un contaminante primario?", "Se emite directamente desde una fuente", "Siempre es más tóxico que uno secundario", "Solo existe en estado sólido", "Primario y secundario describen el origen, no una escala universal de toxicidad."],
    ["¿Qué significa persistencia ambiental?", "Resistencia a degradarse bajo las condiciones del ambiente", "Ausencia garantizada de toxicidad", "Rapidez de evaporación idéntica en todos los medios", "La persistencia depende del compuesto y de las condiciones. No equivale por sí sola a toxicidad o bioacumulación."]
  ],
  "18.6": [
    ["¿Qué radiación absorbe principalmente la capa de ozono en su función protectora?", "Parte de la radiación ultravioleta solar", "Toda la luz visible", "Exclusivamente ondas de radio", "El ozono estratosférico absorbe radiación UV, incluida gran parte de la UVB."],
    ["En Cl + O₃ → ClO + O₂ y ClO + O → Cl + O₂, ¿qué especie se regenera?", "Cl", "O₃", "O atómico", "El radical cloro se regenera y puede participar en ciclos adicionales de destrucción de ozono."],
    ["¿Por qué algunos CFC contribuyen a destruir ozono estratosférico?", "Pueden liberar especies de cloro por acción de radiación UV", "Absorben todo el oxígeno del océano", "Son únicamente vapor de agua", "Su estabilidad permite que alcancen la estratosfera, donde la radiación puede liberar cloro reactivo."]
  ],
  "18.7": [
    ["¿Qué proceso caracteriza el efecto invernadero?", "Absorción y emisión de infrarrojo por gases atmosféricos", "Destrucción de toda la radiación visible", "Conversión de nitrógeno en un sólido global", "Gases como CO₂ y vapor de agua interactúan con parte de la radiación infrarroja emitida por la superficie."],
    ["¿Cuál de estos gases contribuye al efecto invernadero?", "CH₄", "Ar", "He", "El metano tiene modos vibracionales que interactúan con el infrarrojo. Los gases monoatómicos no poseen vibraciones moleculares."],
    ["¿Qué cambio puede causar el CO₂ disuelto en agua de mar?", "Disminuir el pH mediante los equilibrios del sistema carbonato", "Eliminar cualquier equilibrio ácido-base", "Transformar toda el agua en carbonato sólido", "El CO₂ disuelto altera los equilibrios y puede aumentar la concentración de H⁺. Acidificación significa descenso del pH, aunque el agua siga siendo básica."]
  ],
  "18.8": [
    ["¿Qué precursores intervienen en la deposición ácida?", "SO₂ y óxidos de nitrógeno", "Solo helio y neón", "Solo NaCl sólido", "Las transformaciones atmosféricas de SO₂ y NOx contribuyen a formar ácidos sulfúrico y nítrico."],
    ["¿Por qué una lluvia limpia puede ser ligeramente ácida?", "Por CO₂ disuelto y sus equilibrios acuosos", "Porque siempre contiene ácido sulfúrico concentrado", "Porque todo líquido tiene pH cero", "En un modelo simplificado, el CO₂ explica un pH cercano a 5.6. Las condiciones reales pueden modificarlo."],
    ["En H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O, ¿qué ocurre?", "Neutralización ácido-base", "Fisión del calcio", "Reducción de azufre de +6 a 0", "Los equivalentes ácidos y básicos se consumen. El número de oxidación del azufre sigue siendo +6."]
  ],
  "18.9": [
    ["¿Qué representa la DBO?", "Oxígeno consumido biológicamente bajo condiciones definidas de ensayo", "Todo el oxígeno que el agua contiene inicialmente", "Concentración exclusiva de mercurio", "La demanda bioquímica de oxígeno se mide bajo tiempo y temperatura definidos. Se distingue del oxígeno disuelto."],
    ["¿Cómo puede la eutrofización reducir el oxígeno disponible?", "La descomposición de biomasa puede consumir oxígeno", "Todo nutriente produce oxígeno indefinidamente", "El fósforo convierte oxígeno en oro", "El enriquecimiento en nutrientes puede aumentar la biomasa. Su respiración y descomposición pueden favorecer hipoxia."],
    ["Dos muestras se ensayan de la misma forma. A tiene DBO mayor que B. ¿Qué indica?", "Mayor demanda biológica de oxígeno en A durante el ensayo", "Garantía de mayor oxígeno disuelto en A", "Ausencia de materia biodegradable en A", "La DBO expresa demanda de oxígeno, y no equivale a una medición de oxígeno disuelto ni identifica por sí sola todos los contaminantes."]
  ],
  "18.10": [
    ["¿Cuál es el propósito principal de la coagulación?", "Desestabilizar partículas coloidales", "Eliminar toda sal por ebullición", "Crear microorganismos", "El coagulante ayuda a desestabilizar coloides para favorecer la formación posterior de flóculos."],
    ["¿Qué orden es coherente en un tratamiento convencional?", "Coagulación, floculación, sedimentación, filtración y desinfección", "Desinfección, creación de lodos y consumo directo sin control", "Filtración, adición de tierra y distribución", "La secuencia favorece retirar partículas y controlar microorganismos. El diseño exacto depende de la fuente y la planta."],
    ["¿Por qué la mezcla en floculación debe ser controlada?", "Para facilitar colisiones sin romper excesivamente los flóculos", "Para impedir todo contacto entre partículas", "Para garantizar una temperatura de 100 °C", "Una agitación suave favorece el crecimiento de flóculos. Una cizalla excesiva puede fragmentarlos."]
  ],
  "18.11": [
    ["¿Qué busca la química verde?", "Diseñar productos y procesos que reduzcan sustancias peligrosas", "Solo diluir residuos hasta no verlos", "Producir más residuos para tratarlos después", "La prevención del peligro desde el diseño es central. La dilución no elimina necesariamente el riesgo."],
    ["¿Qué expresa la economía atómica teórica?", "Fracción de masa de reactivos incorporada al producto deseado", "Precio comercial del producto", "Rendimiento experimental idéntico en toda reacción", "Se calcula a partir de la ecuación balanceada. Es diferente del rendimiento real obtenido en laboratorio."],
    ["¿Qué afirmación sobre un plástico biodegradable es correcta?", "Su degradación depende del material y de las condiciones", "Siempre desaparece en cualquier ambiente en un día", "Nunca genera impacto ambiental", "Biodegradable no especifica una velocidad universal. Temperatura, humedad, organismos y condiciones del ensayo importan."]
  ]
};

export function environmentalQuestions(code) {
  return (cases[code] || []).map(([prompt, correct, a, b, explanation], index) => {
    const options = [correct, a, b];
    const answer = index % options.length;
    for (let i = 0; i < answer; i++) options.unshift(options.pop());
    return {
      id: `environment-${code}-${index + 1}`, type: "mc", prompt, options, answer, explanation,
      why: options.map(() => explanation), reviewStatus: "revisado"
    };
  });
}
