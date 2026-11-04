// Explanations are indexed by the stable question ID, preserving source order.
const moduleOne = [
  ["La amalgama dental combina mercurio con otros metales: es una mezcla. Las otras opciones contienen solo átomos de un elemento.", "O₃ es una forma molecular del oxígeno.", "P₄ contiene únicamente fósforo.", "La amalgama contiene varios elementos.", "El grafito es una forma del carbono."],
  ["El NaCl está disuelto uniformemente en agua: hay dos componentes y una sola fase macroscópica.", "Una sustancia compuesta pura tiene composición química fija, sin disolvente añadido.", "La disolución es homogénea.", "Una disolución verdadera no es un coloide.", "Agua y NaCl incluyen varios elementos."],
  ["I es falsa: ambas muestras comerciales son disoluciones. II es verdadera: una aleación de una fase es homogénea. III es falsa: los alótropos corresponden a un elemento.", "FVF coincide con las tres proposiciones.", "La tercera proposición es falsa.", "La segunda proposición es verdadera.", "La primera proposición es falsa."],
  ["En la evaporación las moléculas de alcohol conservan su identidad química. Los otros procesos producen nuevas sustancias.", "La fermentación transforma sustancias mediante reacciones.", "La combustión produce sustancias diferentes.", "La evaporación cambia el estado físico.", "La digestión implica transformaciones químicas."],
  ["Se forman KOH y H₂ mediante 2K + 2H₂O → 2KOH + H₂. La reacción libera energía.", "Se forman sustancias nuevas, por lo que no basta hablar de disolución física.", "La formación de productos y el calentamiento sustentan la opción.", "No se comparan formas estructurales del mismo elemento.", "Un cambio de estado no explica los nuevos productos."],
  ["O₂ y O₃ son especies químicas distintas. Su interconversión es una transformación química entre alótropos.", "La fotosíntesis produce nuevas sustancias.", "La electrólisis transforma agua en otras sustancias.", "Es la proposición incorrecta: se modifica la especie molecular.", "La laminación cambia principalmente la forma del material."],
  ["El volumen depende de la cantidad de muestra. Las otras propiedades se consideran intensivas bajo condiciones especificadas.", "La temperatura no se suma al reunir dos muestras.", "La dureza caracteriza al material.", "El volumen cambia al aumentar la cantidad.", "La viscosidad depende del material y de las condiciones, no directamente de su cantidad."],
  ["La masa es extensiva, la resistencia al ataque químico es química y la tenacidad es una propiedad mecánica intensiva.", "La resistencia a ácidos es química y la tenacidad no es extensiva.", "Clasifica correctamente las tres propiedades.", "La masa depende de la cantidad.", "La masa no es intensiva y el ataque ácido implica reactividad."],
  ["Densidad, temperatura de ebullición a presión fijada y maleabilidad son propiedades físicas intensivas.", "Peso e inercia dependen de la cantidad de materia.", "Las tres propiedades satisfacen el criterio.", "La acidez es química y el volumen es extensivo.", "La masa es extensiva y la radiactividad describe transformación nuclear."],
  ["Agua y aceite forman fases inmiscibles que pueden separarse con un embudo de decantación.", "Un filtro ordinario no separa dos fases líquidas de este modo.", "Evaporar y condensar es innecesario para esta mezcla inmiscible.", "La separación aprovecha fases líquidas distintas.", "La cromatografía no es la técnica habitual para separar a granel estas fases."],
  ["La cromatografía separa pigmentos por diferencias de interacción con las fases móvil y estacionaria.", "Evaporar el disolvente deja juntos los pigmentos.", "Permite observar componentes con movilidades diferentes.", "La destilación se aplica principalmente a componentes volátiles.", "La centrifugación no separa normalmente pigmentos disueltos."],
  ["La columna de fraccionamiento proporciona etapas sucesivas de evaporación y condensación para líquidos de volatilidad cercana.", "Los líquidos son miscibles y no forman dos capas separables.", "Una sola etapa suele separar menos eficazmente componentes cercanos.", "Es la mejor opción entre las propuestas; no garantiza pureza absoluta en cualquier mezcla.", "La cristalización no aprovecha la diferencia de volatilidad indicada."],
  ["1 atm = 101325 Pa = 101.325 kPa, aproximadamente 101.3 kPa.", "Es diez veces menor.", "Coincide con el redondeo solicitado.", "760 corresponde al valor convencional en mmHg, no en kPa.", "Es cien veces menor."],
  ["0.25 L × 1000 mL/L = 250 mL. Con porciones de 5 mL se obtienen 250/5 = 50 porciones.", "50 resulta de dividir 250 entre 5.", "Equivaldría a porciones de 10 mL.", "Confunde el tamaño de una porción con el número disponible.", "Requeriría 500 mL para porciones de 5 mL."],
  ["1 g/cm³ = 10⁻³ kg / 10⁻⁶ m³ = 1000 kg/m³. Por tanto, 13.6 g/cm³ = 13600 kg/m³.", "El factor correcto es 1000.", "Falta un factor de diez.", "Es la conversión correcta.", "El volumen también debe convertirse al cubo."],
  ["En 100.050, los ceros interiores y el cero final tras el decimal son significativos. Hay seis cifras.", "Omite ceros significativos.", "Omite dos cifras significativas.", "El cero final decimal también cuenta.", "Se cuentan 1, 0, 0, 0, 5 y 0."],
  ["4.5 kg × 9.81 m/s² = 44.145 N. La masa tiene dos cifras significativas, así que se informa 44 N.", "Retiene más cifras que las justificadas.", "Tiene cuatro cifras significativas.", "Tiene tres cifras significativas.", "Tiene las dos cifras significativas limitantes."],
  ["Al ser un empate exacto, se conserva la última cifra par: 14.25 se redondea a 14.2.", "La cifra retenida 2 es par.", "Sería el redondeo de mitad hacia arriba, distinto del solicitado.", "Altera innecesariamente la décima.", "No es un redondeo a tres cifras del valor dado."],
  ["La densidad de masa se define como ρ = m/V.", "Peso/volumen corresponde al peso específico.", "Masa/temperatura no define densidad.", "Masa entre volumen es la definición.", "Volumen/masa es volumen específico."],
  ["ρ = 19.3 g / 1.0 cm³ = 19.3 g/cm³ como valor nominal. La coincidencia es compatible con oro, pero una medición de densidad por sí sola no certifica pureza.", "El volumen sí permite calcular la densidad nominal.", "Es compatible con oro y requiere confirmación adicional.", "La densidad alta no indica una aleación ligera.", "Masa y volumen permiten calcular la densidad."],
  ["A presión cercana a 1 atm, el agua líquida pura tiene su máxima densidad alrededor de 3.98 °C.", "De unos 4 °C a 100 °C la densidad disminuye en general.", "A unos 4 °C el volumen de una masa fija es mínimo.", "Es el máximo aproximado de densidad bajo las condiciones indicadas.", "El hielo ordinario es menos denso que el agua líquida cercana a su fusión."],
  ["t = 77 − 273.15 = −196.15 °C, que se redondea a −196 °C.", "Coincide con el redondeo.", "Se ha sumado un desplazamiento en el sentido incorrecto.", "Corresponde aproximadamente al cero absoluto.", "0 °C equivale a 273.15 K."],
  ["Los intervalos Celsius y kelvin tienen el mismo tamaño: ΔT = 3 K.", "Se ha sumado el desplazamiento de una temperatura puntual.", "Un aumento de 3 °C equivale a 3 K.", "Introduce un factor de diez.", "Usa indebidamente un factor propio de Fahrenheit."],
  ["F = 1.8C + 32 y F = 2C. Entonces 0.2C = 32 y C = 160 °C; F = 320 °F.", "Satisface ambas ecuaciones.", "A 40 °C se tienen 104 °F.", "A −40 °C ambas lecturas coinciden.", "A 100 °C se tienen 212 °F."]
];

const moduleTwo = [
  ["Thomson identificó los rayos catódicos como partículas negativas, hoy llamadas electrones.", "Dalton desarrolló una teoría atómica anterior al descubrimiento.", "Thomson es la respuesta.", "Rutherford estudió la estructura nuclear.", "Bohr propuso niveles electrónicos cuantizados."],
  ["Casi toda la masa del átomo está en el núcleo. La fracción exacta depende del núclido y no es universalmente 99.99 %.", "La masa no se distribuye uniformemente en el volumen.", "Protones y neutrones aportan casi toda la masa.", "Los electrones son mucho menos masivos que los nucleones.", "Los isótopos tienen masas diferentes."],
  ["Una carga acelerada en una órbita clásica radiaría energía. El modelo clásico no explica la estabilidad del átomo.", "La objeción no es una masa insuficiente.", "No describe el argumento electromagnético.", "La pérdida de energía predice un colapso.", "Los neutrones no producen la repulsión eléctrica propuesta."],
  ["El número de protones es Z, que define el elemento.", "Los neutrones distinguen isótopos.", "Cambiar electrones cambia la carga, no Z.", "El protón determina Z.", "El positrón no determina la identidad elemental."],
  ["En ³¹₁₅P neutro: p = 15, n = 31 − 15 = 16, e = 15. Total = 46.", "31 cuenta nucleones, sin electrones.", "15 + 16 + 15 = 46.", "15 cuenta protones o electrones por separado.", "16 cuenta neutrones."],
  ["p + n = 50 y n = p + 4. Entonces 2p + 4 = 50, p = Z = 23.", "Con p = 21 se obtendrían 46 nucleones.", "23 protones y 27 neutrones cumplen los datos.", "25 protones implicarían 54 nucleones.", "27 es el número de neutrones."],
  ["Un anión monovalente tiene un electrón más que el átomo neutro, manteniendo Z.", "Perder un electrón forma un catión.", "Ganar un protón cambia el elemento.", "Ganar un electrón da carga −1.", "Cambiar neutrones afecta al isótopo."],
  ["F⁻ tiene 9 protones, 19 − 9 = 10 neutrones y 10 electrones. Total = 29.", "28 es el total del átomo neutro.", "9 + 10 + 10 = 29.", "19 cuenta solo nucleones.", "10 cuenta electrones o neutrones, no su suma total."],
  ["Z del catión = 3.04×10⁻¹⁸ / 1.6×10⁻¹⁹ = 19. Tiene 18 electrones. El anión trivalente cumple Z + 3 = 18, por tanto Z = 15.", "19 corresponde al catión.", "18 es el número de electrones común.", "15 + 3 = 18 electrones.", "14 + 3 daría 17 electrones."],
  ["Los isótopos comparten Z y difieren en neutrones y número de masa.", "Los isóbaros comparten A.", "Es la relación indicada.", "Los isótonos comparten neutrones.", "Isoelectrónico compara electrones y no define la relación isotópica."],
  ["Los isótopos tienen el mismo Z. Sus átomos neutros poseen la misma configuración electrónica básica y comportamiento químico parecido, aunque existen efectos isotópicos.", "No implica necesariamente grandes diferencias químicas.", "Sus propiedades físicas pueden variar.", "La semejanza química no exige identidad absoluta.", "Sus números de nucleones son distintos."],
  ["X comparte A = 40 con Ca. K-39 tiene 39 − 19 = 20 neutrones. Por tanto Z de X = 40 − 20 = 20 y X²⁻ tiene 22 electrones.", "20 es el número de electrones del átomo neutro.", "20 + 2 = 22.", "18 correspondería al catión X²⁺.", "19 no satisface la carga indicada."],
  ["La espectrometría de masas separa iones por su relación masa/carga y permite obtener información de masas y abundancias isotópicas.", "Los rayos catódicos no miden el patrón isotópico de la muestra.", "Es el instrumento apropiado.", "El microscopio explora superficies.", "Un tubo de rayos X no es un espectrómetro de masas."],
  ["63.55 está más cerca de la masa de Cu-63 que de Cu-65. El isótopo más ligero es mayoritario para la composición indicada.", "Con masas aproximadas 63 y 65, 50 % produciría 64.", "Predominar Cu-65 desplazaría la media hacia 65.", "Cu-63 es mayoritario.", "No es necesario postular otros isótopos para explicar la media."],
  ["En el modelo de masas 10 u y 11 u: 10x + 11(1 − x) = 10.81. Se obtiene x = 0.19 = 19 %. Las masas isotópicas reales no son enteros exactos.", "Es el resultado del modelo simplificado.", "81 % corresponde al isótopo pesado.", "25 % produciría 10.75 u.", "75 % produciría 10.25 u."],
  ["Entre las opciones, los rayos X tienen mayor frecuencia. La energía de cada fotón es E = hν.", "Las microondas tienen menor frecuencia.", "Los rayos X superan a la luz visible y a las ondas de radio en frecuencia.", "La luz amarilla tiene menor frecuencia.", "Las ondas de radio tienen frecuencias menores."],
  ["En vacío ambas radiaciones viajan a c. Como c = λν, radio tiene mayor longitud de onda y menor frecuencia que rayos X.", "La rapidez en vacío es la misma.", "Los rayos X tienen menor longitud de onda.", "Ambas viajan a c y radio tiene menor frecuencia.", "La energía no aumenta la rapidez de propagación en vacío."],
  ["500 nm = 5×10⁻⁷ m. E = hc/λ = (6.6×10⁻³⁴)(3×10⁸)/(5×10⁻⁷) = 3.96×10⁻¹⁹ J ≈ 4.0×10⁻¹⁹ J.", "Coincide con el redondeo.", "Es aproximadamente diez veces menor.", "No resulta del cociente hc/λ indicado.", "Es aproximadamente la mitad del valor."],
  ["Un orbital es una función de onda de un electrón; su densidad |ψ|² permite describir probabilidades espaciales. Una superficie de orbital representa una región con una probabilidad elegida.", "Una órbita implica una trayectoria definida.", "Es la opción correspondiente a la descripción probabilística.", "Un nivel principal puede contener varios orbitales.", "Un cuanto de luz es un fotón."],
  ["La longitud de onda de de Broglie λ = h/p disminuye al aumentar el momento del electrón. Es una onda de materia, y no una onda electromagnética.", "El efecto fotoeléctrico aborda emisión de electrones por luz.", "La exclusión trata ocupación de estados.", "La dualidad onda-partícula explica el comportamiento ondulatorio.", "El modelo de Thomson no describe este fenómeno."],
  ["La densidad de probabilidad es |ψ|² = ψ*ψ. Para funciones reales coincide con ψ²; la forma general usa el módulo al cuadrado.", "No determina una trayectoria orbital clásica exacta.", "El espín no emerge de la ecuación espacial no relativista ordinaria.", "El módulo al cuadrado proporciona la densidad.", "La descripción cuántica es compatible con la incertidumbre."],
  ["mℓ toma valores enteros entre −ℓ y +ℓ y describe la proyección del momento angular orbital sobre un eje elegido.", "n caracteriza el nivel principal.", "ℓ caracteriza el momento angular orbital.", "mℓ es el número magnético.", "ms caracteriza la proyección de espín."],
  ["Para ℓ = 2 se exige mℓ ∈ {−2, −1, 0, 1, 2}. El valor +3 es inválido.", "4d corresponde a ℓ = 2, pero no permite mℓ = 3.", "Es el motivo correcto de imposibilidad.", "Para n = 4, ℓ puede ser 0, 1, 2 o 3.", "4f requiere ℓ = 3, distinto del conjunto."],
  ["Según la regla aproximada n + ℓ: 5s da 5; 4d da 6; 4f y 6p dan 7. En el empate, menor n primero: 4f precede a 6p.", "Invierte el empate entre 4f y 6p.", "5s < 4d < 4f < 6p es el orden del modelo.", "5s tiene menor n + ℓ que 4d.", "Invierte los valores de n + ℓ."]
];

export function reviewQuestion(question) {
  const match = question.id.match(/^source-([12])\.(\d+)-(\d+)$/);
  if (!match) return question;
  const index = (Number(match[2]) - 1) * 3 + Number(match[3]) - 1;
  const review = (match[1] === "1" ? moduleOne : moduleTwo)[index];
  if (!review) return question;
  const updated = { ...question, options: [...question.options], explanation: review[0], why: review.slice(1), reviewStatus: "revisado" };
  if (question.id === "source-1.6-2") {
    updated.prompt = question.prompt.replace("4.5 g", "4.5 kg");
  }
  if (question.id === "source-1.7-2") {
    updated.options[1] = "La densidad nominal es compatible con la del oro, pero no demuestra por sí sola su pureza.";
  }
  if (question.id === "source-1.7-3") {
    updated.prompt = "A presión cercana a 1 atm, señale la afirmación correcta respecto al agua líquida pura:";
  }
  if (question.id === "source-2.1-2") updated.options[1] = "Se concentra casi en su totalidad en el núcleo atómico.";
  if (question.id === "source-2.4-2") {
    updated.prompt = "Si dos núclidos son isótopos, ¿qué afirmación describe mejor el comportamiento químico de sus átomos neutros?";
    updated.options[2] = "Tienen comportamiento químico semejante, aunque pueden existir efectos isotópicos.";
  }
  if (question.id === "source-2.5-3") updated.prompt = "En un modelo simplificado, usa masas isotópicas de 10 u y 11 u para el boro. Si la masa promedio es 10.81 u, ¿qué abundancia tiene el isótopo ligero?";
  if (question.id === "source-2.7-2") updated.prompt = question.prompt.replace("ondas electromagnéticas", "ondas de materia");
  if (question.id === "source-2.7-3") updated.options[2] = "El módulo al cuadrado de la función de onda, |ψ|², representa la densidad de probabilidad electrónica.";
  if (question.id === "source-2.8-3") {
    updated.prompt = "Según la regla aproximada de n + ℓ para el orden de llenado, ordene de menor a mayor energía: 5s, 4d, 6p y 4f.";
    updated.answer = 1;
  }
  return updated;
}
