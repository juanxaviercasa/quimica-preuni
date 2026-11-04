import { reviewNotes } from "./reviewNotes.js";
import { replaceQuestion } from "./replacementQuestions.js";

const prompts = {
  "3.1-1": "Según la regla aproximada n + ℓ y su desempate por n, ¿cuál de estos subniveles se sitúa más tarde en el orden de llenado?",
  "3.5-2": "El Co neutro tiene Z=27. ¿Cuál es la configuración del ion Co²⁺ en el modelo de átomo aislado?",
  "3.6-3": "¿Qué afirmación describe correctamente la organización de la tabla periódica moderna?",
  "3.7-3": "El átomo neutro Fe, Z=26, tiene [Ar]3d⁶4s² y cuatro electrones desapareados en el modelo orbital. ¿Cuál es su familia antigua y periodo?",
  "3.8-1": "A 25 °C y cerca de 1 atm, ¿qué par contiene un metal líquido y un no metal líquido, respectivamente?",
  "3.10-2": "¿Qué característica contribuye a la baja reactividad habitual de los gases nobles en bombillas?",
  "4.2-1": "¿Cuál es el estado físico del NaCl puro a 25 °C y 1 atm?",
  "4.2-2": "En el modelo de una red cristalina iónica, ¿qué enlace permite explicar la fragilidad al desplazarse planos de iones?",
  "4.7-2": "En el modelo localizado sp³ del agua, ¿cuántos pares libres tiene el oxígeno?",
  "4.7-3": "SO₂ tiene dos dominios de enlace y un par libre en el azufre. ¿Cuál es su número estérico y la hibridación aproximada del modelo localizado?",
  "4.9-2": "Entre las siguientes moléculas, ¿cuál tiene momento dipolar permanente nulo por cancelación geométrica de sus enlaces?",
  "4.10-1": "¿Qué interacción intermolecular actúa entre moléculas apolares de metano?",
  "4.11-1": "En el modelo introductorio de puentes de hidrógeno, ¿qué rasgo permite a una molécula actuar como donadora?",
  "4.11-2": "¿Qué interacción enlaza específicamente las bases complementarias del ADN y puede romperse al separar las hebras?",
  "5.6-2": "En aire seco con 21 % molar de O₂ y presión total 760 mmHg, ¿cuál es su presión parcial antes de humidificarse en las vías respiratorias?",
  "5.6-3": "Se mezclan masas iguales de Ne (M=20) y Ar (M=40). ¿Qué afirmación sobre la mezcla ideal es correcta?",
  "5.9-3": "CH₄ (M=16) y SO₂ (M=64) tienen iguales presiones parciales y temperatura. ¿Cuál es la razón inicial de sus tasas de efusión CH₄/SO₂?",
  "5.10-1": "¿Qué propiedad favorece que una gota pequeña libre tienda a una forma esférica?",
  "6.2-3": "¿Qué alternativa relaciona correctamente fórmula, nombre tradicional y carácter ácido de un óxido de manganeso?",
  "6.7-1": "En el oxácido usual del azufre con estado de oxidación +6, H₂SO₄, ¿cuántos átomos de hidrógeno hay?",
  "6.7-2": "¿Qué ácido de azufre en estado de oxidación +6 se usa como electrolito en baterías de plomo-ácido?",
  "6.8-3": "¿Qué fórmula y nombre corresponden a la suma estequiométrica formal SiO₂ + 2H₂O?",
  "7.4-2": "¿Qué porcentaje en masa de Fe contiene Fe₂O₃ puro? Usa Fe=56 y O=16.",
  "8.7-1": "En el tanteo de combustión de un hidrocarburo, ¿qué elemento suele ser conveniente ajustar al final, después de C y H?",
  "8.9-3": "En la semirreacción mínima de reducción NO₃⁻ → NO en medio ácido, antes de multiplicar para combinarla con la oxidación de Cu, ¿cuántos H⁺ se consumen por NO₃⁻?",
  "9.3-2": "Se hacen reaccionar 50 cm³ de CO con 25 cm³ de O₂, sin gases inertes y con conversión completa según 2CO+O₂→2CO₂. A igual P y T, ¿qué volumen gaseoso final se obtiene?",
  "9.3-3": "Para C₃H₈(g)+5O₂(g)→3CO₂(g)+4H₂O(l), con mezcla estequiométrica ideal y despreciando vapor de agua, ¿cuál es la contracción fraccionaria del volumen gaseoso a igual P y T?",
  "9.6-1": "¿Cómo se denomina la cantidad de producto efectivamente aislada y medida al terminar un experimento?",
  "9.8-1": "En la neutralización total de un hidróxido metálico, ¿qué cuenta el factor de equivalencia θ por unidad fórmula?",
  "9.10-1": "En una neutralización completa entre un ácido y una base, ¿qué cantidades estequiométricas se igualan?",
  "10.6-1": "Una muestra de agua diluida contiene 0.01 ppm m/m de Pb y tiene densidad cercana a 1 kg/L. ¿Qué concentración aproximada en mg/L representa?",
  "10.6-2": "Un gas contiene 0.00005 % de SO₂ en volumen. ¿Cuántas ppm(v) representa? Es una conversión de unidades, sin suponer un umbral regulatorio.",
  "10.7-2": "En un ejercicio de preparación de soluciones, ¿qué masa de NaCl (58.5 g/mol) se requiere para 2 L de solución 0.15 M?",
  "10.8-1": "En un intercambio iónico completo especificado de una sal, ¿qué representa θ en N=Mθ?",
  "10.8-2": "Para neutralizar ambos protones de H₂SO₄, ¿qué molaridad corresponde a 0.1 N?",
  "10.8-3": "En neutralización total de los protones ionizables de cada ácido y en el esquema de equivalentes de las sales indicado, ¿para cuál coincide N=M?",
  "10.9-2": "Dos soluciones de azúcar, una 2 M y otra 2 molal, se calientan en recipientes cerrados de 20 a 40 °C. Sin evaporación, pérdida ni reacción y con dilatación positiva, ¿qué ocurre?",
  "10.10-2": "En un ejercicio ideal de dilución, ¿qué volumen de una solución de soluto no reactivo al 30 % V/V se diluye hasta 500 mL para obtener 3 % V/V?",
  "10.12-2": "Al valorar ácido acético con NaOH y fenolftaleína, ¿qué aspecto señala el punto final experimental próximo a equivalencia?",
  "10.12-3": "Una muestra contiene 200 mL de una solución de base valorada a 0.4 N. ¿Qué volumen de HCl 0.2 M se requiere para neutralizarla completamente?",
  "10.11-3": "Se mezclan soluciones ideales de un mismo soluto no reactivo y suficientemente soluble: 100 mL a 10 M, 200 mL a 6 M y 500 mL a 2 M. Suponiendo volúmenes aditivos, ¿cuál es la molaridad final?",
  "11.1-1": "¿Qué unidad se usa habitualmente para rapidez de reacción en disolución, expresada por litro?",
  "11.1-3": "Para una reacción A→B con ley v=k[A], k positivo y constante, en un reactor cerrado de volumen constante, ¿qué afirmación es correcta?",
  "11.3-1": "Para un mecanismo, medio y catalizador fijados, ¿qué variable suele modificar k en el modelo de Arrhenius?",
  "10.2-3": "En un modelo introductorio de sol coloidal estabilizado por carga, indique V o F:\nI. La agitación browniana contribuye a contrarrestar la sedimentación de partículas pequeñas.\nII. El efecto Tyndall consiste en absorción de luz por las moléculas del disolvente.\nIII. Una concentración suficiente de electrolito puede desestabilizar el sol y provocar coagulación.",
  "11.5-1": "Según Arrhenius, con Ea positiva y prefactor aproximadamente constante, ¿qué efecto tiene aumentar T?",
  "11.7-1": "En un mecanismo consecutivo con un único cuello de botella bien definido, ¿qué etapa determina principalmente la rapidez?",
  "11.7-2": "En el modelo simplificado de una secuencia con una etapa mucho más lenta que las demás, ¿qué etapa controla la rapidez global?",
  "12.2-2": "Para las reacciones escritas con sus correspondientes condiciones, A tiene Kc=10⁻⁵, B tiene 2.5 y C tiene 10¹². ¿Cuál presenta mayor predominio termodinámico de productos según su K, sin inferir rapidez ni rentabilidad?",
  "12.3-2": "Para N₂O₄(g)⇌2NO₂(g), ¿cuánto vale Δn gaseoso en Kp=Kc(RT)^Δn?",
  "12.5-3": "Para N₂+3H₂⇌2NH₃, Kc=1.2, en 2 L hay 0.4 mol N₂, 1.2 mol H₂ y 2.4 mol NH₃. Usando el modelo ideal, ¿en qué dirección evoluciona netamente la reacción?",
  "12.7-2": "Para A(g)⇌2B(g) en un recipiente rígido a T fija, inicialmente pA=4 atm y no hay B. En equilibrio pB=2 atm. ¿Cuánto vale Kp en la convención escolar?",
  "12.9-3": "Para C(s)+H₂O(g)⇌CO(g)+H₂(g), manteniendo T y volumen gaseoso, ¿qué acción no cambia la posición del equilibrio si ya hay C sólido puro?",
  "12.10-2": "Para el equilibrio exotérmico de Haber, ¿qué combinación favorece NH₃ en equilibrio, sin evaluar rapidez ni rentabilidad industrial?",
  "13.3-2": "AlCl₃ acepta un par electrónico de una especie donadora en una reacción sin transferencia de protones. ¿Qué papel cumple?",
  "13.4-2": "En el modelo ideal pH≈−log[H⁺], ¿qué signo da el cálculo para [H⁺]=2.0 M? El pH real de esa solución concentrada requiere actividades.",
  "13.5-1": "En el modelo de un ácido fuerte monoprótico acuoso suficientemente diluido, ¿a qué porcentaje se aproxima su ionización?",
  "13.7-1": "Para HA monoprótico como única fuente relevante de acidez y despreciando la autoionización del agua, ¿a qué concentración es aproximadamente igual [H⁺]?",
  "13.7-2": "Una base débil tiene Kb=1.0×10⁻⁵ a 25 °C. ¿Cuál es el pH aproximado de una solución 0.1 M en el modelo diluido?",
  "13.7-3": "Un ácido diprótico aislado tiene Ka1=4.3×10⁻⁷ y Ka2=5.6×10⁻¹¹. Si la primera disociación domina y el aporte del agua es despreciable, ¿qué aproximación se usa para calcular su acidez?",
  "13.8-2": "Considerando solo NH₄⁺+H₂O⇌NH₃+H₃O⁺, ¿qué efecto ácido-base tiene una disolución acuosa de NH₄NO₃?",
  "13.9-3": "En un tampón HA/A⁻ se añade una pequeña cantidad de ácido fuerte, dentro de su capacidad. ¿Qué ocurre con log([A⁻]/[HA])?",
  "13.10-2": "¿Qué indicador de las opciones es apropiado para valorar ácido acético con NaOH, con concentraciones que produzcan un salto de pH suficiente?",
  "15.1-1": "¿Quién obtuvo urea a partir de cianato de amonio en un experimento histórico que contribuyó a cuestionar el vitalismo?",
  "15.1-2": "¿Cómo se llama la capacidad del carbono de formar cadenas mediante enlaces C–C?",
  "15.1-3": "¿Qué serie contiene únicamente compuestos usualmente clasificados como orgánicos?",
  "15.2-1": "En el modelo de un carbono con cuatro enlaces simples y geometría tetraédrica ideal, ¿cuál es su hibridación y ángulo?",
  "15.2-2": "¿Qué componente del doble enlace C=C impide la rotación libre sin alterar el enlace?",
  "15.2-3": "¿Cuántos enlaces σ y π tiene CH₃–COOH, contando los enlaces a H?",
  "15.3-1": "En la clasificación de hidrógenos unidos a carbonos de alcanos, ¿qué clase no puede existir?",
  "15.3-2": "¿Qué recuento corresponde al neopentano, C(CH₃)₄?",
  "15.3-3": "En CH₃–CH₂–C(CH₃)₂–CH₂–CH₃, ¿cuántos H secundarios y primarios hay, respectivamente?",
  "15.4-1": "¿Qué representación dibuja el esqueleto carbonado con extremos y vértices, omitiendo habitualmente C y H unidos a C?",
  "15.4-2": "Una molécula neutra C₁₉H₂₈O₂ tiene cuatro anillos y ningún enlace triple. ¿Cuántos dobles enlaces exige su índice de insaturación?",
  "15.4-3": "Calcule el IDH de C₈H₁₀N₄O₂ usando (2C+2+N−H−X)/2.",
  "15.5-1": "¿Qué información comparten necesariamente dos compuestos isómeros, además de ser estructuras distintas?",
  "15.5-2": "¿Qué isomería relaciona n-hexano y 2-metilpentano, ambos C₆H₁₄?",
  "15.5-3": "¿Qué compuesto es isómero de función del butanal, C₄H₈O?",
  "15.6-1": "Un aceite hidrocarbonado es inmiscible y menos denso que agua salada. ¿Qué sistema forma al mezclarlos?",
  "15.6-2": "En una serie comparable de hidrocarburos, ¿por qué suele aumentar la ebullición con el tamaño molecular?",
  "15.6-3": "¿Qué afirmación compara correctamente la ebullición de n-pentano, isopentano y neopentano?",
  "15.7-1": "Con los nombres tradicionales de sustituyentes y la convención de alfabetización indicada, ¿qué afirmación es correcta?",
  "15.7-2": "¿Cuántos carbonos tiene la cadena principal de 2,2,4-trimetilpentano?",
  "15.7-3": "En la convención tradicional que omite tert y di al alfabetizar, ¿están ordenados correctamente butil, etil y metil en el nombre propuesto?",
  "15.8-1": "¿Qué teoría histórica vinculó la tensión de anillos con desviaciones del ángulo tetraédrico?",
  "15.8-2": "¿Cuál es la conformación de menor energía del ciclohexano entre las opciones?",
  "15.8-3": "En metilciclohexano, ¿qué posición del metilo es preferida en la conformación silla?",
  "15.9-1": "¿Qué componente de C=C origina la barrera de rotación asociada a isomería geométrica?",
  "15.9-2": "¿Qué isomería presenta but-2-eno, CH₃–CH=CH–CH₃?",
  "15.9-3": "¿Cuál de estas moléculas presenta isomería cis-trans?",
  "15.10-1": "¿Cuál es el nombre sistemático del acetileno, C₂H₂?",
  "15.10-2": "En un análisis conceptual con plata amoniacal, ¿qué compuesto puede formar acetiluro por poseer un alquino terminal?",
  "15.10-3": "¿Qué nombre corresponde a CH₂=CH–CH=CH–C≡C–CH₃ usando los localizadores mínimos?",
  "15.11-1": "¿Qué reactivo puede decolorarse al adicionarse a un enlace insaturado en el ensayo clásico?",
  "15.11-2": "¿Qué producto mayoritario da la adición de HBr a but-1-eno sin peróxidos ni iniciación radicalaria?",
  "15.11-3": "¿Qué combinación favorece la adición anti-Markovnikov de HBr a propeno?",
  "16.1-1": "¿Qué estructura caracteriza al benceno en su estado fundamental?",
  "16.1-2": "¿Por qué el ciclooctatetraeno no adopta una estructura aromática plana como benceno?",
  "16.1-3": "¿Qué afirmación sobre benceno y aromaticidad es correcta en el modelo introductorio de Hückel?",
  "16.2-1": "¿Qué prefijo tradicional corresponde a posiciones 1,3 en benceno disustituido?",
  "16.2-2": "¿Cuál es el nombre estructural del tolueno?",
  "16.2-3": "¿Cómo se llama el sustituyente C₆H₅–?",
  "16.3-1": "¿Qué hidrocarburo tiene dos anillos bencénicos fusionados y fórmula C₁₀H₈?",
  "16.3-2": "¿Qué peligro se asocia a exposición suficiente a HAP como benzo[a]pireno?",
  "16.3-3": "Fenantreno es isómero de antraceno, C₁₄H₁₀. Con C=12 y H=1, ¿cuál es su masa molar?",
  "16.4-1": "Si OH es la función principal y la molécula también contiene C=C, ¿qué grupo tiene prioridad al numerar?",
  "16.4-2": "¿Qué interacción contribuye especialmente a la mayor ebullición del etanol frente a un hidrocarburo de masa similar?",
  "16.4-3": "Entre etanol, fenol y glicerol, ¿cuáles se clasifican como alcoholes?",
  "16.5-1": "¿Cómo se clasifica el glicerol por sus tres grupos OH?",
  "16.5-2": "¿Qué afirmación compara correctamente la reacción de fenol y etanol con NaOH acuoso?",
  "16.5-3": "¿Qué estabilización explica que fenol sea más ácido que ciclohexanol?",
  "16.6-1": "¿Qué familia de producto se obtiene al oxidar butan-2-ol sin romper su cadena?",
  "16.6-2": "En la reducción de dicromato acidulado por etanol, ¿qué papel redox cumple el etanol?",
  "16.6-3": "En el modelo escolar de deshidratación ácida del etanol, ¿qué productos se favorecen aproximadamente a 140 °C y 170 °C, respectivamente?",
  "16.7-1": "¿Cuál es el nombre funcional de CH₃–O–CH₃?",
  "16.7-2": "¿Cuál es el nombre sistemático usual de éter dietílico?",
  "16.7-3": "¿Qué diferencia explica en gran parte la mayor ebullición del etanol frente a éter dimetílico, ambos C₂H₆O?",
  "16.8-1": "¿Qué comparten propanal y propanona?",
  "16.8-2": "En CHO–CH₂–CH(CH₃)–CH₃, contando también el carbono del aldehído, ¿cuántos carbonos primarios y terciarios hay?",
  "16.8-3": "¿Qué fórmula conserva una cetona isómera de 4,4-dimetilpentanal?",
  "16.9-1": "Entre un aldehído alifático simple y las otras funciones propuestas, ¿cuál suele dar positivo en Tollens?",
  "16.9-2": "¿Por qué fructosa puede dar positivo en Tollens aunque su forma abierta sea una cetosa?",
  "16.9-3": "En el ensayo escolar de Fehling, ¿cuál de propanona, propanal y benzaldehído suele dar precipitado de Cu₂O?",
  "16.10-1": "¿Qué asociación contribuye a los elevados puntos de ebullición de ácidos carboxílicos de masa comparable?",
  "16.10-2": "¿Cuál es el nombre sistemático del ácido fórmico?",
  "16.10-3": "¿Qué sal forma la neutralización de ácido acético con KOH en agua?",
  "16.11-1": "En el nombre de un éster R–COO–R′, ¿de qué reactivo procede la parte terminada en −oato?",
  "16.11-2": "¿Qué par de ésteres se asocia a notas frutales de piña y plátano, respectivamente?",
  "16.11-3": "¿Cómo se llama la hidrólisis básica de triglicéridos que produce glicerol y sales de ácidos grasos?"
};

export function correctRemainingQuestion(original) {
  const replaced = replaceQuestion(original);
  if (replaced !== original) return replaced;
  const match = original.id.match(/^source-(\d+\.\d+)-(\d+)$/);
  if (!match) return original;
  const [, code, indexText] = match;
  const index = Number(indexText) - 1;
  const explanation = reviewNotes[code]?.[index];
  if (!explanation) return original;
  const key = `${code}-${index + 1}`;
  const q = { ...original, options: [...original.options], explanation, reviewStatus: "revisado" };
  if (prompts[key]) q.prompt = prompts[key];
  const options = (key, changes) => {
    if (`${code}-${index + 1}` === key) Object.assign(q.options, changes);
  };
  options("3.6-3", { 2: "La tabla moderna tiene siete periodos y dieciocho grupos." });
  options("3.10-2", { 1: "Configuración de valencia cerrada y elevada energía de ionización." });
  options("4.1-3", { 0: "En la distancia de equilibrio de un enlace estable se compensan las fuerzas netas." });
  options("4.9-2", { 2: "Trifluoruro de boro (BF₃)" });
  options("5.6-3", { 0: "Ar aporta el doble de moles que Ne.", 1: "Las fracciones molares son iguales.", 2: "La fracción molar de Ne es el doble que la de Ar." });
  options("8.10-3", { 1: "28" });
  options("10.1-3", { 0: "En soluciones verdaderas, los solutos atraviesan normalmente un papel filtro ordinario." });
  options("10.8-1", { 1: "La carga total intercambiada por unidad fórmula en esa reacción." });
  options("10.12-2", { 2: "Aparece un rosa pálido persistente que señala el punto final." });
  options("11.7-2", { 2: "La etapa más lenta bajo las condiciones del modelo." });
  options("12.3-2", { 0: "0", 1: "+1", 2: "−1", 3: "+3" });
  if (key === "12.5-3") {
    q.options = ["Hacia productos.", "Hacia reactivos.", "Permanece en equilibrio.", "No puede calcularse Q con esos datos."];
    q.answer = 1;
  }
  if (code === "11.4") {
    q.prompt = "A T fija se midió: ensayo 1, [A]=0.10 M, [B]=0.10 M, v=0.020 M/s; ensayo 2, [A]=0.20 M, [B]=0.10 M, v=0.040 M/s; ensayo 3, [A]=0.10 M, [B]=0.20 M, v=0.080 M/s.\n\n" + q.prompt;
  }
  options("13.3-2", { 1: "Ácido de Lewis en la reacción descrita." });
  options("13.7-3", { 2: "Resolver el primer equilibrio usando Ka1 y la concentración inicial, bajo las aproximaciones dadas." });
  options("13.8-2", { 1: "Puede producir un medio ácido por hidrólisis del NH₄⁺." });
  options("15.10-3", { 0: "Hepta-1,3-dien-5-ino" });
  options("16.8-2", { 1: "Tres carbonos primarios y un carbono terciario." });
  options("16.10-3", { 1: "Acetato de potasio, normalmente disuelto en el medio acuoso." });
  if (code === "16.11") {
    const concise = [
      ["Radical alquilo", "Diol", "Aldehído", "Ácido carboxílico"],
      ["Metanoato de propilo y benceno", "Butanoato de etilo y etanoato de isopentilo", "Propanona y ácido acético", "Ácido butírico y ácido acético"],
      ["Saponificación", "Esterificación", "Pirólisis", "Hidrogenación"]
    ];
    q.options = concise[index];
  }
  // The complete reasoning contrasts the alternatives; avoid fabricated
  // independent explanations when the same reasoning covers the entire item.
  q.why = q.options.map((option, i) => i === q.answer
    ? explanation
    : `La alternativa «${option}» no responde correctamente al caso. ${explanation}`);
  return q;
}
