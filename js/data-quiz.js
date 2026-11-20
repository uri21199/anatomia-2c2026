// Banco de preguntas tipo parcial, construido sólo con las secciones 12 a 18 de la guía.
// mc: 4 opciones, ans = índice de la correcta (la app mezcla el orden al mostrar).
// dev: consigna con checklist de puntos clave, respuesta modelo y justificación.

const QUIZ = {
  mc: [
    // Sección 16 · endócrino
    { id: "E1", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "Un paciente tiene T3 y T4 bajas y TSH alta. ¿Cuál es el diagnóstico más probable y dónde está la falla?",
      opts: [
        "Hipotiroidismo primario: la tiroides no produce suficientes hormonas y la hipófisis aumenta la TSH porque falta la retroalimentación negativa.",
        "Hipotiroidismo secundario: la hipófisis no estimula la tiroides, por lo que la TSH aparece baja aunque la T4 también esté baja, algo que se ve en el análisis de sangre de rutina.",
        "Hipotiroidismo terciario: el hipotálamo produce demasiada TRH, lo que bloquea la síntesis de TSH en la hipófisis y reduce la T3 y T4.",
        "Enfermedad de Graves: la tiroides está hiperestimulada y produce demasiada hormona, por eso la TSH aparece elevada junto con la T4."
      ],
      ans: 0,
      expl: "Con T3/T4 bajas y TSH alta, la glándula no responde a la hipófisis: es primario. La TSH sube porque falta la retroalimentación negativa. En Graves la TSH está suprimida, no elevada." },
    { id: "E2", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "¿Qué par de hormonas adenohipofisarias se denominan gonadotrofinas?",
      opts: [
        "FSH y LH, porque estimulan el crecimiento y mantenimiento de ovarios y testículos.",
        "TSH y ACTH, porque estimulan a otras glándulas endocrinas y regulan la respuesta al estrés.",
        "GH y prolactina, porque estimulan el crecimiento óseo y el desarrollo de las glándulas mamarias.",
        "ADH y oxitocina, porque se producen en la neurohipófisis y actúan sobre el riñón y el útero."
      ],
      ans: 0,
      expl: "Gonadotrofinas = FSH y LH, por su acción sobre las gónadas. TSH y ACTH son trópicas: estimulan otras glándulas, no las gónadas." },
    { id: "E3", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "¿Qué diferencia de mecanismo de acción existe entre las hormonas liposolubles y las hidrosolubles?",
      opts: [
        "Las liposolubles atraviesan la membrana y se unen a receptores intracelulares; las hidrosolubles se unen a receptores de membrana y usan un segundo mensajero.",
        "Las liposolubles se unen a receptores de membrana y usan AMPc; las hidrosolubles se unen a receptores intracelulares que regulan el ADN.",
        "Ambas atraviesan la membrana sin receptor y sólo difieren en la vía de administración: oral para las liposolubles e intravenosa para las hidrosolubles, por lo que la diferencia es casi sólo práctica.",
        "Las hidrosolubles regulan la transcripción del ADN directamente, mientras que las liposolubles sólo modifican proteínas ya existentes en la célula."
      ],
      ans: 0,
      expl: "Liposolubles (esteroideas, T3 y T4): receptor intracelular que actúa sobre la transcripción. Hidrosolubles (proteicas, aminoacídicas): receptor de membrana y segundo mensajero (AMPc)." },
    { id: "E4", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "Durante un ayuno prolongado baja la glucemia. ¿Qué hormona pancreática se libera y qué hace en el hígado?",
      opts: [
        "Glucagón, producido por las células alfa: estimula la salida de glucosa del hígado hacia la sangre.",
        "Insulina, producida por las células beta: favorece la entrada de glucosa a las células desde la sangre.",
        "Somatostatina, producida por las células delta: inhibe la secreción de insulina y de glucagón.",
        "Cortisol, producido por la corteza suprarrenal: disminuye la glucemia al aumentar la captación de glucosa por las células."
      ],
      ans: 0,
      expl: "En ayuno sube el glucagón (células alfa), que moviliza glucosa del hígado. La insulina hace lo contrario. El cortisol, en cambio, sube la glucemia." },
    { id: "E5", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "En un adulto con exceso de hormona del crecimiento, ¿qué cuadro aparece?",
      opts: [
        "Acromegalia: crecimiento anormal de extremidades y cara, porque las placas de crecimiento ya están cerradas.",
        "Gigantismo: aumento de la estatura en un adulto, porque la hormona sigue activando las placas de crecimiento cerradas.",
        "Bocio: agrandamiento de la tiroides por exceso de hormona del crecimiento que estimula el tejido glandular.",
        "Hipotiroidismo: aumento de peso y fatiga por falta de hormona del crecimiento que regula el metabolismo basal."
      ],
      ans: 0,
      expl: "En adultos, el exceso de GH da acromegalia. El gigantismo es en niños, con las placas de crecimiento todavía abiertas." },
    { id: "E6", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "¿Qué hace la hormona antidiurética (ADH) en el riñón?",
      opts: [
        "Aumenta la reabsorción de agua, concentra la orina y reduce su volumen, sobre todo ante aumento de la osmolaridad.",
        "Aumenta la excreción de sodio y agua para bajar la presión arterial, sobre todo ante aumento del volumen sanguíneo.",
        "Estimula la contracción de las células mesangiales para aumentar la filtración glomerular y eliminar más agua.",
        "Activa la síntesis de renina en las células yuxtaglomerulares para elevar la angiotensina y el volumen plasmático."
      ],
      ans: 0,
      expl: "ADH: conserva agua reabsorbiéndola en el conducto colector. Se libera ante aumento de osmolaridad." },

    // Sección 13 · cardiovascular
    { id: "C1", topic: "circulatorio", src: "guia", ref: "sección 13",
      q: "¿Qué válvula impide el reflujo de sangre desde el ventrículo izquierdo hacia la aurícula izquierda durante la sístole?",
      opts: [
        "Mitral o bicúspide: tiene dos valvas sostenidas por cuerdas tendinosas y músculos papilares.",
        "Tricúspide: tiene tres valvas y separa la aurícula derecha del ventrículo derecho.",
        "Aórtica: tiene tres valvas sin cuerdas y evita el reflujo desde la aorta hacia el ventrículo.",
        "Pulmonar: tiene tres valvas y controla la salida de sangre hacia el tronco pulmonar."
      ],
      ans: 0,
      expl: "La mitral separa AI y VI y tiene cuerdas tendinosas. Las sigmoideas (aórtica y pulmonar) no tienen cuerdas." },
    { id: "C2", topic: "circulatorio", src: "guia", ref: "sección 13",
      q: "¿Dónde está el nódulo sinusal, el marcapasos natural del corazón?",
      opts: [
        "En la pared de la aurícula derecha, junto a la desembocadura de la vena cava superior.",
        "En el tabique interventricular, por debajo de la válvula mitral, donde se dividen las ramas del haz de His.",
        "En la base del ventrículo izquierdo, cerca de la salida de la aorta y de las arterias coronarias.",
        "En la aurícula izquierda, junto a la desembocadura de las cuatro venas pulmonares."
      ],
      ans: 0,
      expl: "El nódulo sinusal está en la aurícula derecha, cerca de la vena cava superior, y dispara unas 100 veces por minuto." },
    { id: "C3", topic: "circulatorio", src: "guia", ref: "sección 13",
      q: "En el ECG, ¿qué representa la onda P?",
      opts: [
        "La despolarización de las aurículas, que precede a su contracción.",
        "La despolarización de los ventrículos, que se ve como un complejo QRS amplio.",
        "La repolarización de los ventrículos, que aparece después de la meseta del segmento ST.",
        "La conducción por el nódulo AV, que aparece como un intervalo horizontal entre el QRS y la onda T."
      ],
      ans: 0,
      expl: "P = despolarización auricular. QRS = despolarización ventricular. T = repolarización ventricular. El intervalo P-Q incluye el retraso del nódulo AV." },
    { id: "C4", topic: "circulatorio", src: "guia", ref: "sección 13",
      q: "¿Qué función cumple el nódulo auriculoventricular (AV)?",
      opts: [
        "Introduce un retraso en la conducción para que las aurículas terminen de vaciarse antes de que se contraigan los ventrículos.",
        "Genera el impulso eléctrico más rápido del corazón, a unos 100 latidos por minuto, y lo transmite a ambos ventrículos a través del haz de His.",
        "Lleva el impulso directamente a las fibras de Purkinje, evitando la conducción por el tabique interventricular.",
        "Coordina la contracción de la pared ventricular derecha para impulsar la sangre hacia la circulación pulmonar."
      ],
      ans: 0,
      expl: "El nódulo AV retrasa el impulso para que las aurículas terminen de vaciarse. El marcapasos es el nódulo sinusal." },

    // Sección 17 · nervioso
    { id: "N1", topic: "nervioso", src: "guia", ref: "sección 17",
      q: "¿Qué par craneal es mixto, da sensibilidad a la cara y controla los músculos de la masticación?",
      opts: [
        "Trigémino, que tiene tres ramas: oftálmica, maxilar y mandibular.",
        "Facial, que controla los músculos de la expresión facial y las glándulas lagrimales y salivales.",
        "Glosofaríngeo, que da sensibilidad a la faringe y controla la glándula parótida y la deglución.",
        "Hipogloso, que es motor y controla los movimientos de la lengua en la cavidad bucal."
      ],
      ans: 0,
      expl: "El trigémino (V par) es mixto: sensibilidad de la cara y motor de la masticación." },
    { id: "N2", topic: "nervioso", src: "guia", ref: "sección 17",
      q: "En el área de Broca, ¿qué función se localiza?",
      opts: [
        "Producción del habla: se ponen en marcha los planes y los patrones motores para formar cada palabra.",
        "Comprensión del lenguaje hablado, ubicada en el lóbulo temporal del hemisferio izquierdo.",
        "Procesamiento de la información visual que llega desde la retina, ubicada en el lóbulo occipital posterior.",
        "Recepción de la sensibilidad somática, ubicada detrás de la cisura central, en la corteza parietal."
      ],
      ans: 0,
      expl: "Broca forma palabras (lóbulo frontal). La comprensión del lenguaje es Wernicke (temporal): por eso es la opción vecina que confunde." },
    { id: "N3", topic: "nervioso", src: "guia", ref: "sección 17",
      q: "¿Qué función principal tiene el cerebelo?",
      opts: [
        "Coordinar los movimientos, el equilibrio y la postura.",
        "Regular las emociones y la motivación a través de las estructuras del sistema límbico.",
        "Actuar como estación de relevo de la información sensorial hacia la corteza cerebral.",
        "Controlar la temperatura corporal, la presión arterial y el apetito."
      ],
      ans: 0,
      expl: "Cerebelo: coordinación motora, equilibrio y postura. Las otras funciones corresponden a límbico, tálamo e hipotálamo." },

    // Sección 12 · respiratorio
    { id: "R1", topic: "respiratorio", src: "guia", ref: "sección 12",
      q: "¿Qué células de los alvéolos producen surfactante?",
      opts: [
        "Los neumocitos tipo II, que también actúan como células progenitoras del epitelio alveolar.",
        "Los neumocitos tipo I, de epitelio plano, cuya función principal es el intercambio gaseoso con el capilar vecino.",
        "Los macrófagos alveolares, que fagocitan partículas y bacterias que llegan al alvéolo.",
        "Las células caliciformes de la vía aérea, que secretan moco para atrapar partículas."
      ],
      ans: 0,
      expl: "Neumocito tipo II = surfactante y progenitor. Tipo I = intercambio gaseoso." },
    { id: "R2", topic: "respiratorio", src: "guia", ref: "sección 12",
      q: "En el varón de referencia, ¿cuánto vale la capacidad residual funcional?",
      opts: [
        "2.400 mL: es el volumen residual más el volumen de reserva espiratorio.",
        "3.600 mL: es el volumen corriente más el volumen de reserva inspiratorio.",
        "4.800 mL: es la capacidad vital, que incluye el volumen residual.",
        "6.000 mL: es la capacidad pulmonar total, que suma capacidad vital y volumen residual."
      ],
      ans: 0,
      expl: "CRF = VR + VRE = 1.200 + 1.200 mL. La capacidad vital no incluye el VR; la CRF sí." },

    // Sección 14 · digestivo
    { id: "D1", topic: "digestivo", src: "guia", ref: "sección 14",
      q: "¿En qué porción del duodeno desembocan el colédoco y el conducto pancreático principal?",
      opts: [
        "En la segunda porción del duodeno, la descendente.",
        "En la primera porción, justo después del píloro, donde comienza el intestino delgado y se mezcla el quimo con la bilis.",
        "En la tercera porción, que cruza por delante de la aorta y de la vena cava inferior.",
        "En la cuarta porción, que se continúa con el yeyuno en el ángulo de Treitz."
      ],
      ans: 0,
      expl: "Segunda porción (descendente): el colédoco y el conducto pancreático se unen en la ampolla y salen por la papila duodenal mayor." },

    // Sección 15 · urinario
    { id: "U1", topic: "urinario", src: "guia", ref: "sección 15",
      q: "¿Para qué sirve que el uréter entre oblicuo en la vejiga?",
      opts: [
        "Para evitar el reflujo de orina desde la vejiga hacia el uréter cuando la vejiga se contrae.",
        "Para aumentar la presión de la orina y facilitar su expulsión por la uretra al momento de orinar, con el esfínter relajado.",
        "Para permitir que la orina pase de la vejiga a la uretra sin atravesar el trígono.",
        "Para que el músculo detrusor controle el paso de la orina hacia el esfínter externo."
      ],
      ans: 0,
      expl: "El trayecto oblicuo dentro de la pared vesical funciona como válvula y evita el reflujo." },
    { id: "U2", topic: "urinario", src: "guia", ref: "sección 15",
      q: "¿Cuánto filtrado glomerular produce aproximadamente un riñón por día?",
      opts: [
        "Unos 180 litros, de los cuales la mayor parte se reabsorbe en el túbulo.",
        "Unos 2 litros, que es el volumen de orina diaria normal y no se reabsorbe.",
        "Unos 20 litros, que se excretan en forma de orina concentrada por el colector.",
        "Unos 600 mililitros, equivalentes al volumen del asa de Henle."
      ],
      ans: 0,
      expl: "La filtración es de unos 180 L/día. Casi todo se reabsorbe; la orina final son unos 2 L." },

    // Sección 18 · bioingeniería
    { id: "B1", topic: "bioingenieria", src: "guia", ref: "sección 18",
      q: "Un material debe resistir tracción en una sola dirección, como un tendón. ¿Qué tejido lo cumple?",
      opts: [
        "Conectivo denso modelado, con colágeno tipo I en fibras orientadas.",
        "Músculo esquelético, que genera fuerza por contracción voluntaria.",
        "Cartílago hialino, que amortigua la compresión con superficie de deslizamiento.",
        "Tejido óseo, que actúa como reservorio de calcio bajo control de PTH."
      ],
      ans: 0,
      expl: "Quitar el decorado: el requisito es resistir tracción en una dirección, y eso lo da el conectivo denso con colágeno tipo I." },
    { id: "B2", topic: "bioingenieria", src: "guia", ref: "sección 18",
      q: "En el riñón descelularizado y resembrado, ¿por qué el filtrado no es selectivo antes de repoblar el epitelio?",
      opts: [
        "Porque la matriz sola conserva la membrana basal, pero sin células falta el epitelio y el endotelio que retienen proteínas.",
        "Porque el SDS usado en la descelularización degrada la albúmina, que por eso nunca llega al filtrado ni se recupera en la orina.",
        "Porque las HUVECs son demasiado grandes para pasar por el uréter, y al obstruirlo bloquean el paso del filtrado hacia la vejiga.",
        "Porque el riñón descelularizado recibe nutrientes por dos fuentes que compiten por el mismo espacio dentro de la matriz."
      ],
      ans: 0,
      expl: "El andamio sin células conserva la estructura pero no la función. La selectividad vuelve al repoblar el compartimento epitelial y vascular por sus vías naturales." }
  ],

  dev: [
    { id: "DV1", topic: "endocrino", src: "guia", ref: "sección 16",
      q: "Explique por qué en un hipotiroidismo primario la TSH está elevada, y qué cambiaría si la falla fuera secundaria. Justifique usando el eje de retroalimentación.",
      checklist: [
        "La tiroides no produce suficiente T3 y T4.",
        "Sin T3 y T4 no hay retroalimentación negativa sobre la hipófisis y el hipotálamo.",
        "La hipófisis aumenta la secreción de TSH para compensar.",
        "En el secundario la falla está en la hipófisis: la TSH no sube, queda baja o inadecuadamente normal, y la T4 sigue baja.",
        "Justifica con el eje tiroideo: TRH → TSH → T3/T4 con retroalimentación negativa."
      ],
      modelo: "En el hipotiroidismo primario la glándula no produce suficiente T4 y T3. Como esas hormonas ya no ejercen retroalimentación negativa sobre la hipófisis, la TSH sube. En el secundario la hipófisis no libera TSH, así que la TSH queda baja o normal inadecuadamente, mientras la T4 está baja.",
      justificacion: "Lo que decide la localización es la dirección de la hormona trófica respecto de la periférica. Primario: periférica baja y trófica alta. Secundario: periférica y trófica bajas." },
    { id: "DV2", topic: "digestivo", src: "guia", ref: "sección 14",
      q: "Describa el recorrido de la bilis desde que se produce en el hígado hasta que llega al duodeno, y diga dónde se almacena y concentra.",
      checklist: [
        "Conductos hepáticos derecho e izquierdo que se unen en el conducto hepático común.",
        "Conducto cístico que trae la bilis desde la vesícula, donde se almacena y concentra.",
        "Conducto colédoco, formado por la unión del hepático común y el cístico.",
        "Desembocadura en la segunda porción del duodeno.",
        "Justifica: las sales biliares emulsionan grasas; no las digieren."
      ],
      modelo: "La bilis se produce en el hígado y sale por los conductos hepáticos derecho e izquierdo, que se unen en el conducto hepático común. Ese conducto se une al cístico, que viene de la vesícula biliar, donde la bilis se almacena y concentra. Así se forma el colédoco, que desemboca en la segunda porción del duodeno.",
      justificacion: "Las sales biliares emulsionan las grasas para que la lipasa pancreática pueda actuar; no las digieren. Por eso su llegada al duodeno es clave." },
    { id: "DV3", topic: "circulatorio", src: "guia", ref: "sección 13",
      q: "Enumere en orden el sistema de conducción cardíaca y explique por qué el nódulo AV introduce un retraso.",
      checklist: [
        "Nódulo sinoauricular (SA), luego nódulo AV, haz de His, ramas derecha e izquierda y fibras de Purkinje.",
        "El nódulo SA es el marcapasos natural.",
        "El retraso en el nódulo AV deja que las aurículas terminen de vaciarse antes de que se contraigan los ventrículos.",
        "El haz de His es la única vía eléctrica entre aurículas y ventrículos.",
        "Relaciona con el ECG: la onda P, el intervalo P-Q (con el retraso) y el complejo QRS."
      ],
      modelo: "El orden es: nódulo SA → nódulo AV → haz de His → ramas derecha e izquierda → fibras de Purkinje. El nódulo AV introduce un retraso para que las aurículas terminen de vaciarse antes de la contracción ventricular. Es el único puente eléctrico entre aurículas y ventrículos, por eso ese retraso se refleja en el intervalo P-Q del ECG.",
      justificacion: "Sin ese retraso, la contracción auricular y la ventricular serían casi simultáneas y el llenado ventricular sería menos eficiente." },
    { id: "DV4", topic: "respiratorio", src: "guia", ref: "sección 12",
      q: "Describa la pleura parietal, la pleura visceral y la cavidad pleural, y explique qué pasa en un neumotórax.",
      checklist: [
        "Pleura parietal: tapiza costillas, diafragma y mediastino.",
        "Pleura visceral: pegada al pulmón; entra en las fisuras.",
        "Cavidad pleural: espacio entre ambas hojas, con una película de líquido que reduce la fricción.",
        "Neumotórax: entra aire a la cavidad, las hojas se separan y el pulmón colapsa por retroceso elástico.",
        "Justifica: el colapso ocurre aunque la vía aérea esté permeable."
      ],
      modelo: "La pleura parietal tapiza la pared torácica, el diafragma y el mediastino; la visceral recubre el pulmón y entra en las fisuras. Entre ambas hay una cavidad con una película de líquido que reduce la fricción y, por tensión superficial, mantiene las hojas unidas. Si entra aire (neumotórax), las hojas se separan y el pulmón colapsa por su retroceso elástico.",
      justificacion: "El pulmón se mantiene expandido por la presión negativa de la cavidad pleural. Al perderla, se colapsa aunque la vía aérea siga abierta." },
    { id: "DV5", topic: "bioingenieria", src: "guia", ref: "sección 18",
      q: "Un constructo de alginato con Ca²⁺ pierde estradiol a partir del día 40. Explique qué hipótesis plantean los autores sobre la falla y qué cambio de diseño la resolvió.",
      checklist: [
        "La falla es del material, no de las células.",
        "El Ca²⁺ precipita con el tiempo y el alginato se calcifica (mineraliza).",
        "El constructo se endurece y compromete la difusión de nutrientes y hormonas.",
        "El cambio que lo resolvió fue reemplazar el Ca²⁺ por Sr²⁺, que mantiene el estradiol estable 90 días sin calcificación.",
        "Justifica: si un constructo falla con el tiempo, sospechar primero del andamio."
      ],
      modelo: "Los autores atribuyen la caída de estradiol a la calcificación del alginato entrelazado con Ca²⁺: el calcio precipita y el constructo se endurece, comprometiendo la difusión. El cambio que lo resolvió fue usar Sr²⁺ como entrecruzante, con estradiol estable durante 90 días y sin calcificación.",
      justificacion: "Diagnóstico por eliminación: si las células son sanas (progesterona, FSH y LH sin cambios) y la hormona cae, la falla está en el material que las rodea." }
  ]
};
