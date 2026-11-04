// Scientific scope notes added after reviewing the recovered lesson text.
// They are deliberately concise: they correct an over-generalisation without
// replacing the source lesson or hiding the convention used in admission work.
const notes = {
  "1.1": "El agua desionizada no es automáticamente agua pura: puede contener sustancias no iónicas, gases disueltos o microorganismos. Para clasificar una muestra se necesita conocer su composición; los intervalos de tamaño de soluciones, coloides y suspensiones son convenciones operativas, no fronteras absolutas.",
  "1.2": "El agua pura hierve a 100 °C solo a 1 atm (aprox. 101,3 kPa). Un cambio físico no tiene por qué ser reversible ni requerir poca energía; el criterio útil es que no cambia la composición química de las especies.",
  "1.3": "Una propiedad intensiva no basta por sí sola para identificar una sustancia: se compara un conjunto de propiedades y las condiciones de medición. El cociente de dos extensivas suele ser intensivo cuando ambas escalan proporcionalmente con el tamaño del sistema; no es una regla sin condiciones.",
  "2.3": "En una reacción química ordinaria se conserva el núcleo, pero no es correcto extender esa afirmación a procesos nucleares. La carga del electrón debe conservarse con su signo: q = (Z − número de electrones)e.",
  "2.4": "En el nivel introductorio se comparan especies en su estado electrónico indicado o fundamental. Tener igual número de electrones no garantiza por sí solo la misma configuración si se consideran estados excitados; indique siempre el estado cuando sea relevante.",
  "2.6": "La energía de un fotón depende de la frecuencia. En el efecto fotoeléctrico, la frecuencia debe superar la frecuencia umbral; por encima de ella la intensidad aumenta principalmente el número de fotoelectrones, mientras la energía cinética máxima depende de la frecuencia.",
  "3.1": "El diagrama de Aufbau o regla de n + ℓ es un modelo útil para configuraciones de átomos neutros en estado fundamental. Hay excepciones y el orden de energía puede cambiar al formar iones; no debe aplicarse mecánicamente fuera de ese alcance.",
  "3.5": "Para cationes de metales de transición se retiran primero los electrones ns del nivel principal más externo (por ejemplo, 4s antes que 3d). La configuración energética del catión no es idéntica a la del átomo neutro.",
  "4.10": "Las fuerzas de dispersión de London actúan entre todas las partículas, incluidas las no polares; las demás fuerzas intermoleculares se suman cuando la estructura y el estado de la sustancia las permiten.",
  "4.11": "El puente de hidrógeno exige un H enlazado covalentemente a N, O o F y un aceptor con par libre accesible. Afecta propiedades macroscópicas junto con masa, forma molecular y otras fuerzas intermoleculares.",
  "5.4": "Las condiciones de referencia deben declararse. En muchos problemas preuniversitarios se usa CNTP = 0 °C y 1 atm, con volumen molar cercano a 22,4 L mol⁻¹; IUPAC usa presión estándar de 1 bar, por lo que no se deben mezclar ambas convenciones.",
  "6.1": "El número de oxidación es una herramienta formal de contabilidad electrónica, no una carga medida directamente en una molécula covalente. La valencia y el número de oxidación no son sinónimos y algunas especies presentan valores fraccionarios promedio.",
  "8.1": "Cambio de color, gas, luz o precipitado son indicios experimentales, no pruebas aisladas de una reacción química: deben interpretarse con controles y con el sistema concreto.",
  "9.2": "La ley de proporciones definidas describe un compuesto de composición fija. No debe confundirse con una mezcla ni con sólidos no estequiométricos, cuyo tratamiento requiere un contexto más avanzado.",
  "10.1": "Los límites de tamaño usados para solución, coloide y suspensión son aproximados y dependen del método de observación. La estabilidad, sedimentación y posibilidad de separación aportan evidencia adicional.",
  "11.1": "Para una ecuación aA → bB, la velocidad de reacción se expresa de forma única como −(1/a)Δ[A]/Δt = (1/b)Δ[B]/Δt. Sin normalizar por los coeficientes, las velocidades de desaparición y aparición no tienen el mismo valor numérico.",
  "12.3": "La relación Kp = Kc(RT)^Δn se aplica cuando los gases se comportan idealmente y Δn cuenta solo especies gaseosas. Las actividades de sólidos y líquidos puros se toman como uno en el modelo habitual.",
  "13.5": "Las fórmulas directas de pH para ácidos y bases fuertes suponen soluciones suficientemente diluidas y comportamiento ideal. En soluciones muy concentradas deben usarse actividades; el agua también contribuye de modo apreciable en disoluciones muy diluidas.",
  "14.5": "ΔG° = −nFE° relaciona estados estándar y una reacción tal como está balanceada; n es el número de electrones transferidos. Para condiciones no estándar se usa ΔG = ΔG° + RT ln Q y el potencial se ajusta con Nernst.",
  "15.3": "La clasificación primario, secundario, terciario o cuaternario se basa en cuántos carbonos están directamente unidos al carbono considerado. Conviene indicar la convención para carbonos de grupos funcionales, especialmente carbonilos.",
  "16.9": "Tollens y Fehling son ensayos de orientación, no identificaciones definitivas: algunos compuestos distintos de aldehídos pueden dar respuestas positivas y las condiciones experimentales importan.",
  "17.1": "La basicidad de una amina depende de estructura, resonancia, sustituyentes, solvatación y solvente. No se debe deducir solo del número de grupos alquilo sin especificar el medio.",
  "18.1": "La flotación separa por química de superficie y mojabilidad, no por una sola propiedad. El empleo de reactivos y las condiciones de proceso debe evaluarse para cada mena y bajo controles ambientales y de seguridad.",
  "18.10": "La secuencia de tratamiento y la dosis de desinfectante dependen de la calidad del agua cruda, la normativa local y el diseño de la planta. Los valores numéricos son ejemplos operativos, no una receta universal."
};

export function correctTheory(code, theory) {
  const note = notes[code];
  if (!note || typeof theory !== "string") return theory;
  return `${theory}\n\n---\n\n## Nota de precisión científica\n\n${note}`;
}

export { notes as theoryCorrectionNotes };
