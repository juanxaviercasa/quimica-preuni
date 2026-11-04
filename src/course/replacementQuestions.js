// Replacement wording and alternatives for malformed or misleading source items.
// Tuples: prompt, correct answer, two distractors, worked explanation.
const replacements = {
  "14.1": [
    ["¿Cómo mantiene la electroneutralidad un puente salino?", "Mediante migración de iones", "Con electrones que viajan por el líquido", "Impidiendo toda reacción", "Los iones compensan la carga de cada compartimento mientras los electrones circulan por el circuito externo."],
    ["Durante una electrólisis, ¿qué sucede en el cátodo definido por el proceso que está ocurriendo?", "Reducción", "Oxidación", "Ausencia de transferencia electrónica", "El cátodo es siempre el lugar de reducción. En una batería recargable los papeles de los electrodos se invierten entre carga y descarga."],
    ["En una pila galvánica, ¿cuál es el sentido de los electrones por el cable?", "Del ánodo negativo al cátodo positivo", "Del cátodo al ánodo por el puente salino", "De ambos electrodos hacia el disolvente", "La oxidación anódica libera electrones y la reducción catódica los consume."]
  ],
  "14.2": [
    ["¿Qué representa || en una notación de celda?", "Una unión líquida, como un puente salino", "Un cable metálico", "Un electrón", "La doble barra separa los compartimentos unidos iónicamente."],
    ["En un ánodo Pb → Pb²⁺ + 2e⁻, ¿qué ion de un puente de KNO₃ compensa la carga positiva?", "NO₃⁻ hacia el compartimento anódico", "K⁺ hacia el ánodo", "Electrones desde el puente", "Los aniones migran hacia la región donde se generan cationes, manteniendo electroneutralidad."],
    ["Para Al|Al³⁺||Fe²⁺|Fe, ¿cuánto suman los coeficientes enteros mínimos de la reacción neta?", "10", "5", "4", "2Al + 3Fe²⁺ → 2Al³⁺ + 3Fe. Suma 2+3+2+3=10; se intercambian seis electrones."]
  ],
  "14.3": [
    ["¿Qué potencial estándar se asigna al electrodo estándar de hidrógeno?", "0 V por convención", "1 V", "−1 V", "Es la referencia convencional, con actividades estándar y presión estándar de H₂."],
    ["Con E°Cu²⁺/Cu=0.34 V y E°Fe²⁺/Fe=−0.44 V, ¿qué predice el modelo para Fe en CuSO₄?", "Fe se oxida y Cu²⁺ se reduce", "Fe²⁺ se reduce sin reactivos", "No hay fuerza impulsora", "E°=0.34−(−0.44)=0.78 V para Fe+Cu²⁺→Fe²⁺+Cu. La rapidez real puede depender de superficies y pasivación."],
    ["Con E°Al³⁺/Al=−1.66 V y E°Sn²⁺/Sn=−0.14 V, ¿cuál es el ánodo galvánico estándar?", "Al", "Sn", "Ambos son cátodos", "Al se oxida y Sn²⁺ se reduce. E°=−0.14−(−1.66)=1.52 V."]
  ],
  "14.4": [
    ["¿Qué signo tiene E° para una reacción redox espontánea en condiciones estándar?", "Positivo", "Negativo", "Siempre cero", "ΔG°=−nFE°. Un E° positivo corresponde a ΔG° negativo."],
    ["Para Cu+Zn²⁺→Cu²⁺+Zn, con E°Cu=0.34 V y E°Zn=−0.76 V, calcule E°.", "−1.10 V", "+1.10 V", "−0.42 V", "E°=E°reducción−E°reducción del ánodo=−0.76−0.34=−1.10 V. La dirección escrita no es espontánea en condiciones estándar."],
    ["Con E°Al=−1.66 V y E°Pb=−0.13 V, calcule E° de la pila galvánica.", "1.53 V", "−1.53 V", "1.79 V", "Pb²⁺ se reduce y Al se oxida: −0.13−(−1.66)=1.53 V. Los potenciales no se multiplican por coeficientes."]
  ],
  "14.5": [
    ["¿Qué relación corresponde a espontaneidad estándar?", "ΔG°<0 y E°>0", "ΔG°>0 y E°>0", "ΔG°<0 y E°<0", "ΔG°=−nFE° y nF es positivo."],
    ["Si una celda reversible está en equilibrio electroquímico, ¿qué valores tiene?", "E=0 y ΔG=0", "E=0 implica siempre ΔG°=0", "E>0 y ΔG>0", "En equilibrio Q=K y las magnitudes de la reacción en ese estado son cero. Las magnitudes estándar pueden ser distintas de cero."],
    ["Para E°=0.43 V y n=2 a 25 °C, ¿cómo se calcula log₁₀K?", "2×0.43/0.0592", "3×0.43/0.0592", "0.43/(2×0.0592)", "E°=(0.0592/n)log₁₀K a 25 °C. Por tanto log₁₀K≈14.53."]
  ],
  "14.6": [
    ["En una celda ideal que avanza hacia el equilibrio, ¿qué ocurre con su fuerza electromotriz reversible?", "Tiende a cero al llegar al equilibrio", "Crece sin límite", "Permanece siempre igual a E°", "E=E°−RT lnQ/(nF). Al alcanzar Q=K se obtiene E=0. El voltaje bajo carga incluye pérdidas adicionales."],
    ["A T fija, para Zn+Cu²⁺→Zn²⁺+Cu, ¿qué cambio reduce Q y eleva E reversible en el modelo ideal?", "Aumentar actividad de Cu²⁺ y disminuir la de Zn²⁺", "Aumentar solo Zn²⁺", "Hacer Q mayor", "Q=aZn²⁺/aCu²⁺. Menor Q eleva E según Nernst. No puede extrapolarse a concentraciones ilimitadas."],
    ["Para Al+3Ag⁺→Al³⁺+3Ag, ¿cuál es Q en solución ideal?", "[Al³⁺]/[Ag⁺]³", "[Al³⁺]/[Ag⁺]", "[Ag⁺]³/[Al³⁺]", "Las actividades de metales sólidos puros se toman como 1 y los exponentes son los coeficientes."]
  ],
  "14.7": [
    ["¿Cuál es E° entre dos electrodos Cu²⁺/Cu idénticos de una celda de concentración?", "0 V", "0.34 V", "0.68 V", "Los potenciales estándar se cancelan. La diferencia de actividades puede producir E distinto de cero."],
    ["¿Cuál es el producto de la reacción neta de una celda de combustible alimentada con H₂ y O₂ puros?", "H₂O", "CO₂", "CO", "2H₂+O₂→2H₂O. Esto describe la celda; las emisiones de producir y transportar H₂ requieren otro análisis."],
    ["¿Qué sucede durante la recarga de una batería de plomo-ácido?", "Se suministra energía eléctrica para invertir la reacción de descarga", "Se obtiene energía ilimitada", "No cambian las sustancias de los electrodos", "La recarga fuerza una transformación electrolítica. El alternador convierte energía mecánica en eléctrica."]
  ],
  "14.8": [
    ["¿Qué describe mejor la herrumbre ordinaria?", "Mezcla de óxidos y oxihidróxidos de hierro hidratados", "Cobre metálico", "NaCl puro", "La herrumbre no es necesariamente un compuesto único. Incluye fases de hierro oxidado e hidratado."],
    ["¿Qué favorece la corrosión electroquímica atmosférica del acero?", "Una película de humedad que permita transporte iónico", "Ausencia total de electrolito", "Solo luz visible sin reactivos", "La humedad y sales facilitan las microceldas. Esto no afirma que toda oxidación de hierro requiera agua."],
    ["Al conectar Mg como ánodo de sacrificio a acero sumergido, ¿qué papel cumple el acero protegido?", "Cátodo", "Ánodo de sacrificio", "Puente salino", "Mg se oxida preferentemente y suministra electrones al acero, donde pueden ocurrir reducciones."]
  ],
  "14.9": [
    ["¿Cuál es el signo del cátodo en una celda electrolítica típica alimentada externamente?", "Negativo", "Positivo", "Siempre neutro", "La fuente suministra electrones al cátodo, donde se reduce una especie."],
    ["¿Qué alimenta la electrólisis Hall-Héroult para producir aluminio?", "Alúmina purificada disuelta en un baño de criolita fundida", "Bauxita cruda en agua", "Aluminio metálico evaporado", "La bauxita se procesa primero para obtener Al₂O₃. El baño fundido permite reducir Al³⁺ evitando la competencia del agua."],
    ["En KBr fundido, ¿qué transformación catódica se espera?", "K⁺+e⁻→K", "2Br⁻→Br₂+2e⁻", "K→K⁺+e⁻", "La reducción catódica produce K. En el ánodo se oxida Br⁻ a Br₂. El estado físico del K depende de T y presión."]
  ],
  "14.10": [
    ["En electrólisis ideal del agua, ¿cuál es la proporción de volúmenes H₂:O₂ a igual P y T?", "2:1", "1:1", "1:2", "2H₂O→2H₂+O₂. Los volúmenes gaseosos siguen la proporción molar bajo iguales condiciones."],
    ["¿Qué productos se obtienen en el proceso cloro-álcali de salmuera con separación adecuada?", "Cl₂, H₂ y NaOH", "Na metálico y O₂", "Solo NaCl", "El ánodo forma Cl₂, el cátodo reduce agua a H₂ y OH⁻; la separación impide reacciones no deseadas entre productos."],
    ["¿Cuál de estas soluciones puede depositar metal en el cátodo bajo condiciones apropiadas?", "AgNO₃", "KCl", "Al(NO₃)₃", "Ag⁺ se reduce con facilidad relativa. En las otras soluciones acuosas suele competir la reducción del agua; las condiciones y sobrepotenciales importan."]
  ],
  "14.11": [
    ["A eficiencia de corriente fija, ¿de qué depende directamente la masa electrodepositada?", "Carga que pasa por la celda", "Volumen del puente salino", "Color del cable", "m=MQ/(nF), con Q=It y la eficiencia correspondiente."],
    ["En electrólisis del agua pasan 96.5 A durante 100 s. Con F=96500 C/mol y 100 % de eficiencia, ¿qué volumen de O₂ se forma a 0 °C y 1 atm?", "0.56 L", "1.12 L", "22.4 L", "Q=9650 C=0.1 mol e⁻. Cada O₂ requiere 4 mol e⁻: n=0.025 mol; V=0.025×22.4=0.56 L."],
    ["Se deposita idealmente todo el Zn²⁺ de 500 mL de solución 2 M con 19.3 A. ¿Qué tiempo exige, con F=96500 y eficiencia 100 %?", "2.78 h", "5.56 h", "4.50 h", "nZn=1 mol y requiere 2 mol e⁻. t=193000/19.3=10000 s=2.78 h. Es una idealización; la deposición completa real tiene limitaciones."]
  ],
  "14.12": [
    ["Si dos celdas en serie operan durante el mismo tiempo con eficiencia 100 %, ¿qué cantidad electroquímica comparten?", "Q/F moles de equivalentes electrónicos", "La masa de todos los metales", "El número de moles de todos los productos", "Pasa la misma carga. Los moles de metal son Q/(nF), por lo que dependen de la valencia."],
    ["La misma carga deposita 3 mol Ag desde Ag⁺. ¿Cuánto Au deposita desde Au³⁺ con eficiencia 100 %?", "1 mol", "3 mol", "9 mol", "3 mol Ag consumen 3 mol electrones. Au³⁺ consume tres por átomo: se deposita 1 mol."],
    ["La misma carga deposita 6.35 g Cu desde Cu²⁺. Con MCu=63.5 y MCr=52, ¿qué masa ideal de Cr se deposita desde Cr³⁺?", "3.47 g", "5.20 g", "6.35 g", "Cu=0.1 mol consume 0.2 mol e⁻; Cr=0.2/3 mol y masa=3.4667 g≈3.47 g."]
  ],
  "17.1": [
    ["¿Qué comportamiento presentan muchas aminas alifáticas en agua?", "Base débil de Brønsted", "Ácido fuerte", "Sal siempre neutra", "El par libre de N puede aceptar H⁺: RNH₂+H₂O⇌RNH₃⁺+OH⁻."],
    ["¿Por qué protonar una amina volátil puede disminuir su olor?", "Se forma una especie amonio iónica menos volátil", "Se produce siempre un éster", "Se destruye todo su carbono", "RNH₂+H⁺→RNH₃⁺. La sal permanece preferentemente en solución. No implica una indicación de limpieza para toda sustancia."],
    ["¿Qué estructura de la dimetilamina permite que sea donadora de puente de hidrógeno?", "Su enlace N–H", "Ausencia de nitrógeno", "Un grupo carbonilo", "(CH₃)₂NH es una amina secundaria y posee N–H. La trimetilamina puede aceptar puentes de H pero no donarlos mediante N–H."]
  ],
  "17.2": [
    ["¿Por qué el N de una amida es mucho menos básico que el de una amina?", "Su par libre está deslocalizado con el carbonilo", "No tiene electrones", "Siempre está en una red metálica", "La resonancia reduce la disponibilidad del par de N. Las amidas pueden protonarse, habitualmente en O en medios suficientemente ácidos; no son incapaces de protonarse."],
    ["¿Qué interacción contribuye al alto punto de ebullición de una amida primaria frente a compuestos similares?", "Puentes de hidrógeno y fuertes interacciones dipolares", "Enlace metálico", "Ausencia de polaridad", "El grupo amida es polar y, si tiene N–H, puede donar y aceptar interacciones de H. El estado y la descomposición térmica deben considerarse al comparar."],
    ["¿Cómo se nombra CH₃–CH₂–CH₂–CN contando el carbono del nitrilo?", "Butanonitrilo", "Propanonitrilo", "Etanonitrilo", "La cadena incluye el carbono de C≡N: cuatro carbonos, butanonitrilo."]
  ],
  "17.3": [
    ["Entre –NH₂ y –COOH, ¿qué grupo tiene prioridad como sufijo en nomenclatura sustitutiva usual?", "Ácido carboxílico", "Amina", "Ambos siempre por orden alfabético", "El carboxilo se expresa como función principal y la amina como prefijo amino."],
    ["¿Cómo se nombra CH₃–CH(NH₂)–CH₂–CHO?", "3-aminobutanal", "2-aminobutanal", "Ácido 3-aminobutanoico", "El carbono del aldehído es C1. El amino queda en C3 y la cadena tiene cuatro carbonos."],
    ["¿Cómo se nombra CH₃–CO–CH₂–CH(OH)–CH₂–COOH?", "Ácido 3-hidroxi-5-oxohexanoico", "Ácido 4-hidroxi-2-oxohexanoico", "Ácido 5-hidroxi-3-oxohexanoico", "Se numera desde COOH: OH en C3 y carbonilo cetónico en C5. Hidroxi precede alfabéticamente a oxo."]
  ],
  "17.4": [
    ["En sus formas abiertas, ¿cómo se clasifican glucosa y fructosa, respectivamente?", "Aldosa y cetosa", "Cetosa y aldosa", "Dos aldosas", "Glucosa contiene aldehído en su forma abierta y fructosa una cetona."],
    ["¿Qué monosacáridos produce la hidrólisis completa de sacarosa?", "Glucosa y fructosa", "Dos glucosas", "Galactosa y glucosa", "La sacarosa está formada por una unidad de glucosa y una de fructosa."],
    ["¿Qué relación es correcta entre glucógeno y amilopectina?", "El glucógeno suele estar más ramificado", "Ambos solo tienen enlaces β(1→4)", "Glucógeno está compuesto por fructosa", "Ambos contienen glucosa con cadenas α(1→4) y ramificaciones α(1→6). El glucógeno tiene ramificaciones más frecuentes."]
  ],
  "17.5": [
    ["¿Qué efecto tienen muchos dobles enlaces cis en cadenas de ácidos grasos?", "Dificultan el empaquetamiento y pueden reducir la fusión", "Obligan siempre a estado sólido", "Eliminan el grupo éster", "La geometría cis curva las cadenas. Composición, longitud y distribución de los ácidos grasos también determinan la fusión."],
    ["¿Qué transformación reduce la insaturación de aceites mediante H₂ y un catalizador?", "Hidrogenación", "Saponificación", "Hidrólisis", "La adición de H₂ reduce enlaces C=C. La hidrogenación parcial puede también producir isómeros trans."],
    ["¿Qué característica permite a un jabón formar agregados que dispersan grasa en agua?", "Cabeza iónica y cola hidrófoba", "Ausencia de partes polares", "Ser un triglicérido intacto", "Las sales de ácidos grasos son anfipáticas y pueden formar micelas bajo condiciones apropiadas."]
  ],
  "17.6": [
    ["¿Qué α-aminoácido estándar tiene carbono α aquiral?", "Glicina", "Valina", "Leucina", "La glicina tiene dos H en el carbono α y no cuatro sustituyentes distintos."],
    ["¿Qué significa el punto isoeléctrico de un aminoácido?", "pH con carga neta media cero", "pH donde toda especie carece de cargas internas", "pH donde se rompe el enlace C–N", "Predominan frecuentemente zwitteriones, pero hay una distribución de especies. Carga media cero no significa ausencia de grupos cargados."],
    ["¿Por qué el enlace peptídico tiene rotación restringida?", "Resonancia con carácter parcial de doble enlace C–N", "Es una unión iónica libre", "Siempre contiene un triple enlace", "La deslocalización entre N y carbonilo favorece planaridad del grupo peptídico."]
  ],
  "17.7": [
    ["¿Qué estabiliza hélices α y láminas β?", "Puentes de H entre grupos del esqueleto peptídico", "Solo enlaces disulfuro", "Solo repulsión de grupos con igual carga", "Participan grupos C=O y N–H. Las láminas β pueden incluir tramos de una o varias cadenas."],
    ["En desnaturalización sin hidrólisis ni degradación química, ¿qué nivel suele conservarse?", "Secuencia primaria", "Toda estructura terciaria", "Actividad biológica completa", "La pérdida de plegamiento no exige romper enlaces peptídicos. Un calentamiento severo sí puede provocar degradación adicional."],
    ["¿Qué define estructura cuaternaria de una proteína?", "Asociación de varias subunidades polipeptídicas", "Secuencia de una sola cadena", "Cada enlace peptídico individual", "La organización entre subunidades constituye el nivel cuaternario. No implica fusión magnética de cadenas."]
  ],
  "17.8": [
    ["¿Qué caracteriza una policondensación típica?", "Formar enlaces de polímero con eliminación de moléculas pequeñas", "Conservar siempre todo átomo de cada reactivo", "Ser necesariamente más rápida que cualquier adición", "Por ejemplo, formar un poliéster a partir de un diácido y un diol puede liberar agua. No todo crecimiento por etapas es condensación."],
    ["¿A qué familia pertenece el PET?", "Poliéster", "Poliamida", "Polietileno", "La unidad repetitiva del PET contiene enlaces éster y un anillo aromático."],
    ["¿Qué proceso forma PTFE a partir de CF₂=CF₂ en el modelo ideal?", "Adición con unidad repetitiva –CF₂–CF₂– y sin eliminación estequiométrica de agua", "Condensación que libera H₂O", "Conversión de flúor en cloro", "La apertura del enlace π forma la cadena. Los reactivos no contienen H ni O para producir agua como subproducto estequiométrico."]
  ],
  "17.9": [
    ["¿Qué material se orienta eléctricamente para modular luz en muchos LCD?", "Cristal líquido", "Plasma de neón", "Sal de plata metálica", "La orientación de moléculas del cristal líquido cambia la respuesta óptica entre polarizadores. Existen diversas tecnologías LCD."],
    ["¿Qué material es una capa de carbono de red hexagonal y un átomo de espesor?", "Grafeno", "Acero", "Cuarzo", "Grafeno es una red bidimensional de carbono sp². Alta conductividad no equivale a superconductividad ni resistencia nula universal."],
    ["¿Qué estructura corresponde al buckminsterfullereno C₆₀?", "Jaula de carbono con doce pentágonos y veinte hexágonos", "Cristal de sílice", "Molécula C₆₀H₆₀", "La estructura de C₆₀ se representa como un icosaedro truncado y es un alótropo molecular de carbono."]
  ]
};

export function replaceQuestion(question) {
  const match = question.id.match(/^source-(\d+\.\d+)-(\d+)$/);
  if (!match) return question;
  const tuple = replacements[match[1]]?.[Number(match[2]) - 1];
  if (!tuple) return question;
  const [prompt, correct, a, b, explanation] = tuple;
  const answer = (Number(match[2]) - 1) % 3;
  const options = [a, b];
  options.splice(answer, 0, correct);
  return { ...question, prompt, options, answer, explanation, why: options.map(() => explanation), reviewStatus: "revisado" };
}
