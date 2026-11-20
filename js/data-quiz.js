// Banco de preguntas tipo parcial.
// mc: 4 opciones, ans = índice de la correcta (la app mezcla el orden al mostrar).
// dev: consigna con checklist de puntos clave y justificación.
// Todas las preguntas llevan origen (src) y referencia (ref).

const QUIZ = {
  mc: [
    {
      id: "E1", topic: "endocrino", src: "modelo", ref: "T0A preg. 1 y 5 (inspirada)",
      q: "Un paciente tiene T3 y T4 bajas y TSH alta. ¿Cuál es el diagnóstico más probable y dónde está la falla?",
      opts: [
        "Hipotiroidismo primario: la tiroides no produce suficientes hormonas y la hipófisis aumenta la TSH porque falta la retroalimentación negativa.",
        "Hipotiroidismo secundario: la hipófisis no estimula la tiroides, por lo que la TSH aparece baja aunque la T4 también esté baja, algo que se ve en el análisis de sangre de rutina.",
        "Hipotiroidismo terciario: el hipotálamo produce demasiada TRH, lo que bloquea la síntesis de TSH en la hipófisis y reduce la T3 y T4.",
        "Enfermedad de Graves: la tiroides está hiperestimulada y produce demasiada hormona, por eso la TSH aparece elevada junto con la T4."
      ],
      ans: 0,
      expl: "T3/T4 bajas con TSH alta indica que la glándula no responde a la hipófisis: es primario. La TSH sube porque falta la retroalimentación negativa de las hormonas tiroideas. En Graves la TSH está suprimida, no elevada."
    },
    {
      id: "E2", topic: "endocrino", src: "modelo", ref: "T0A preg. 4 (inspirada)",
      q: "¿Qué par de hormonas adenohipofisarias se denominan gonadotrofinas?",
      opts: [
        "FSH y LH, porque estimulan el crecimiento y mantenimiento de ovarios y testículos.",
        "TSH y ACTH, porque estimulan a otras glándulas endocrinas y regulan la respuesta al estrés.",
        "GH y prolactina, porque estimulan el crecimiento óseo y el desarrollo de las glándulas mamarias.",
        "ADH y oxitocina, porque se producen en la neurohipófisis y actúan sobre el riñón y el útero."
      ],
      ans: 0,
      expl: "Gonadotrofinas = FSH y LH, por su acción sobre las gónadas. TSH y ACTH son trópicas: estimulan otras glándulas, pero no las gónadas."
    },
    {
      id: "E3", topic: "endocrino", src: "generado", ref: "apunte pág. 2 y endo 2024",
      q: "¿Qué diferencia de mecanismo de acción existe entre las hormonas liposolubles y las hidrosolubles?",
      opts: [
        "Las liposolubles atraviesan la membrana y se unen a receptores intracelulares; las hidrosolubles se unen a receptores de membrana y usan un segundo mensajero.",
        "Las liposolubles se unen a receptores de membrana y usan AMPc; las hidrosolubles se unen a receptores intracelulares que regulan el ADN.",
        "Ambas atraviesan la membrana sin receptor y sólo difieren en la vía de administración: oral para las liposolubles e intravenosa para las hidrosolubles, por lo que la diferencia es casi sólo práctica.",
        "Las hidrosolubles regulan la transcripción del ADN directamente, mientras que las liposolubles sólo modifican proteínas ya existentes en la célula."
      ],
      ans: 0,
      expl: "Liposolubles (esteroideas, T3 y T4): receptor intracelular, actúan sobre la transcripción. Hidrosolubles (proteicas, aminoacídicas): receptor de membrana y segundo mensajero (AMPc)."
    },
    {
      id: "E4", topic: "endocrino", src: "generado", ref: "apunte pág. 4; endo 2024 pdf p.9",
      q: "Durante un ayuno prolongado baja la glucemia. ¿Qué hormona pancreática se libera y qué hace en el hígado?",
      opts: [
        "Glucagón, producido por las células alfa: estimula la salida de glucosa del hígado hacia la sangre.",
        "Insulina, producida por las células beta: favorece la entrada de glucosa a las células desde la sangre.",
        "Somatostatina, producida por las células delta: inhibe la secreción de insulina y de glucagón.",
        "Cortisol, producido por la corteza suprarrenal: disminuye la glucemia al aumentar la captación de glucosa por las células."
      ],
      ans: 0,
      expl: "En ayuno sube el glucagón (células alfa), que moviliza glucosa del hígado. La insulina hace lo contrario. El cortisol, por el contrario, sube la glucemia."
    },
    {
      id: "E5", topic: "endocrino", src: "generado", ref: "endo 2024 pdf p.4; apunte pág. 3",
      q: "En un adulto con exceso de hormona del crecimiento, ¿qué cuadro aparece?",
      opts: [
        "Acromegalia: crecimiento anormal de extremidades y cara, porque las placas de crecimiento ya están cerradas.",
        "Gigantismo: aumento de la estatura en un adulto, porque la hormona sigue activando las placas de crecimiento cerradas.",
        "Bocio: agrandamiento de la tiroides por exceso de hormona del crecimiento que estimula el tejido glandular.",
        "Hipotiroidismo: aumento de peso y fatiga por falta de hormona del crecimiento que regula el metabolismo basal."
      ],
      ans: 0,
      expl: "En adultos, el exceso de GH da acromegalia. El gigantismo es en niños, con las placas de crecimiento todavía abiertas."
    },
    {
      id: "E6", topic: "endocrino", src: "generado", ref: "apunte pág. 3; endo 2024 pdf p.6",
      q: "¿Qué hace la hormona antidiurética (ADH) en el riñón?",
      opts: [
        "Aumenta la reabsorción de agua, concentra la orina y reduce su volumen, sobre todo ante aumento de la osmolaridad.",
        "Aumenta la excreción de sodio y agua para bajar la presión arterial, sobre todo ante aumento del volumen sanguíneo.",
        "Estimula la contracción de las células mesangiales para aumentar la filtración glomerular y eliminar más agua.",
        "Activa la síntesis de renina en las células yuxtaglomerulares para elevar la angiotensina y el volumen plasmático."
      ],
      ans: 0,
      expl: "ADH: conserva agua reabsorbiéndola en el conducto colector. Se libera ante aumento de osmolaridad."
    },
    {
      id: "C1", topic: "circulatorio", src: "generado", ref: "apunte pág. 6-7; guía sección 13",
      q: "¿Qué válvula impide el reflujo de sangre desde el ventrículo izquierdo hacia la aurícula izquierda durante la sístole?",
      opts: [
        "Mitral o bicúspide: tiene dos valvas sostenidas por cuerdas tendinosas y músculos papilares.",
        "Tricúspide: tiene tres valvas y separa la aurícula derecha del ventrículo derecho.",
        "Aórtica: tiene tres valvas sin cuerdas y evita el reflujo desde la aorta hacia el ventrículo.",
        "Pulmonar: tiene tres valvas y controla la salida de sangre hacia el tronco pulmonar."
      ],
      ans: 0,
      expl: "La mitral separa AI y VI y tiene cuerdas tendinosas. Las sigmoideas (aórtica y pulmonar) no tienen cuerdas."
    },
    {
      id: "C2", topic: "circulatorio", src: "generado", ref: "apunte pág. 8",
      q: "¿Dónde está el nódulo sinusal, el marcapasos natural del corazón?",
      opts: [
        "En la pared de la aurícula derecha, junto a la desembocadura de la vena cava superior.",
        "En el tabique interventricular, por debajo de la válvula mitral, donde se dividen las ramas del haz de His.",
        "En la base del ventrículo izquierdo, cerca de la salida de la aorta y de las arterias coronarias.",
        "En la aurícula izquierda, junto a la desembocadura de las cuatro venas pulmonares."
      ],
      ans: 0,
      expl: "El nódulo SA está en la aurícula derecha, cerca de la VCS, y dispara unas 100 veces por minuto."
    },
    {
      id: "C3", topic: "circulatorio", src: "generado", ref: "apunte pág. 8",
      q: "En el ECG, ¿qué representa la onda P?",
      opts: [
        "La despolarización de las aurículas, que precede a su contracción.",
        "La despolarización de los ventrículos, que se ve como un complejo QRS amplio.",
        "La repolarización de los ventrículos, que aparece después de la meseta del segmento ST.",
        "La conducción por el nódulo AV, que aparece como un intervalo horizontal entre el QRS y la onda T."
      ],
      ans: 0,
      expl: "P = despolarización auricular. QRS = despolarización ventricular. T = repolarización ventricular. El intervalo P-Q incluye el retraso del nódulo AV."
    },
    {
      id: "C4", topic: "circulatorio", src: "generado", ref: "apunte pág. 8",
      q: "¿Qué función cumple el nódulo auriculoventricular (AV)?",
      opts: [
        "Introduce un retraso en la conducción para que las aurículas terminen de vaciarse antes de que se contraigan los ventrículos.",
        "Genera el impulso eléctrico más rápido del corazón, a unos 100 latidos por minuto, y lo transmite a ambos ventrículos a través del haz de His.",
        "Lleva el impulso directamente a las fibras de Purkinje, evitando la conducción por el tabique interventricular.",
        "Coordina la contracción de la pared ventricular derecha para impulsar la sangre hacia la circulación pulmonar."
      ],
      ans: 0,
      expl: "El nódulo AV retrasa el impulso. Esa demora permite que las aurículas terminen de vaciarse. El marcapasos es el nódulo SA."
    },
    {
      id: "N1", topic: "nervioso", src: "generado", ref: "apunte pág. 12-13",
      q: "¿Qué par craneal es mixto, da sensibilidad a la cara y controla los músculos de la masticación?",
      opts: [
        "Trigémino, que tiene tres ramas: oftálmica, maxilar y mandibular.",
        "Facial, que controla los músculos de la expresión facial y las glándulas lagrimales y salivales.",
        "Glosofaríngeo, que da sensibilidad a la faringe y controla la glándula parótida y la deglución.",
        "Hipogloso, que es motor y controla los movimientos de la lengua en la cavidad bucal."
      ],
      ans: 0,
      expl: "El trigémino (V) es mixto: sensibilidad de la cara y motor de la masticación."
    },
    {
      id: "N2", topic: "nervioso", src: "pres", ref: "diap. 31-33",
      q: "En el área de Broca, ¿qué función se localiza?",
      opts: [
        "Producción del habla: se ponen en marcha los planes y los patrones motores para formar cada palabra.",
        "Comprensión del lenguaje hablado, ubicada en el lóbulo temporal del hemisferio izquierdo.",
        "Procesamiento de la información visual que llega desde la retina, ubicada en el lóbulo occipital posterior.",
        "Recepción de la sensibilidad somática, ubicada detrás de la cisura central, en la corteza parietal."
      ],
      ans: 0,
      expl: "Broca: producción del habla (frontal). La comprensión del lenguaje es Wernicke (temporal), por eso es la opción vecina que confunde."
    },
    {
      id: "N3", topic: "nervioso", src: "generado", ref: "pres diap. 20; apunte pág. 12",
      q: "¿Qué función principal tiene el cerebelo?",
      opts: [
        "Coordinar los movimientos, el equilibrio y la postura.",
        "Regular las emociones y la motivación a través de las estructuras del sistema límbico.",
        "Actuar como estación de relevo de la información sensorial hacia la corteza cerebral.",
        "Controlar la temperatura corporal, la presión arterial y el apetito."
      ],
      ans: 0,
      expl: "Cerebelo: coordinación motora, equilibrio y postura. Las otras tres funciones corresponden a límbico (emoción), tálamo (relevo) e hipotálamo (homeostasis)."
    },
    {
      id: "S1", topic: "sensorial", src: "pres", ref: "diap. 25",
      q: "En la cóclea, ¿qué parte de la membrana basilar responde a los sonidos agudos?",
      opts: [
        "La base, cerca de la ventana oval, que responde a frecuencias de hasta unos 20 kHz.",
        "El ápex, en el extremo de la espiral, que responde a frecuencias bajas de alrededor de 200 Hz.",
        "La zona media de la espiral, que responde a frecuencias intermedias de unos 1000 Hz.",
        "La escala vestibular, que transmite las vibraciones de los sonidos graves hacia el nervio coclear."
      ],
      ans: 0,
      expl: "Tonotopía: la base responde a los agudos y el ápex a los graves."
    },
    {
      id: "S2", topic: "sensorial", src: "pres", ref: "diap. 28; apunte pág. 14",
      q: "¿Qué células de la retina transforman la luz en señal eléctrica?",
      opts: [
        "Los fotorreceptores: conos y bastones, que cambian su potencial al absorber la luz.",
        "Las células ganglionares, cuyos axones forman el nervio óptico y llevan la señal al cerebro.",
        "Las células bipolares, que conectan los fotorreceptores con las células ganglionares.",
        "Las células horizontales, que integran señales a lo largo de la capa plexiforme externa."
      ],
      ans: 0,
      expl: "La transducción la hacen los fotorreceptores. Las ganglionares llevan la señal al nervio óptico; las bipolares y horizontales son intermediarias."
    },
    {
      id: "S3", topic: "sensorial", src: "pres", ref: "diap. 23",
      q: "¿En qué orden están los huesecillos del oído medio desde la membrana timpánica hacia la ventana oval?",
      opts: [
        "Martillo, yunque y estribo.",
        "Estribo, yunque y martillo.",
        "Yunque, martillo y estribo.",
        "Martillo, estribo y yunque."
      ],
      ans: 0,
      expl: "Membrana timpánica → martillo → yunque → estribo → ventana oval."
    },
    {
      id: "M1", topic: "memoria", src: "pres", ref: "diap. 38 (Fig. 23-4)",
      q: "En la LTP de la sinapsis Schaffer-CA1, ¿qué receptor requiere despolarización fuerte para desbloquearse?",
      opts: [
        "El receptor NMDA, bloqueado por magnesio en reposo, que permite el ingreso de calcio durante la despolarización.",
        "El receptor GABA-A, que produce hiperpolarización y permite la salida de cloruro de la célula postsináptica, y es el principal receptor inhibitorio de la corteza.",
        "El receptor nicotínico de la placa motora, que al abrirse genera el potencial de placa terminal del músculo.",
        "El receptor muscarínico M2 del hipocampo, que disminuye el AMPc y reduce la liberación de neurotransmisor."
      ],
      ans: 0,
      expl: "El NMDA está bloqueado por Mg²⁺ en reposo. Con despolarización fuerte se desbloquea y entra calcio, que inicia la LTP."
    },
    {
      id: "R1", topic: "respiratorio", src: "guia", ref: "sección 3 y 12 (confianza baja)",
      q: "¿Qué células de los alvéolos producen surfactante?",
      opts: [
        "Los neumocitos tipo II, que también actúan como células progenitoras del epitelio alveolar.",
        "Los neumocitos tipo I, de epitelio plano, cuya función principal es el intercambio gaseoso con el capilar vecino.",
        "Los macrófagos alveolares, que fagocitan partículas y bacterias que llegan al alvéolo.",
        "Las células caliciformes de la vía aérea, que secretan moco para atrapar partículas."
      ],
      ans: 0,
      expl: "Neumocito tipo II = surfactante y progenitor. Tipo I = intercambio gaseoso."
    },
    {
      id: "D1", topic: "digestivo", src: "guia", ref: "sección 5 (confianza baja)",
      q: "¿En qué porción del duodeno desembocan el colédoco y el conducto pancreático principal?",
      opts: [
        "En la segunda porción del duodeno, la descendente.",
        "En la primera porción, justo después del píloro, donde comienza el intestino delgado.",
        "En la tercera porción, que cruza por delante de la aorta y de la vena cava inferior.",
        "En la cuarta porción, que se continúa con el yeyuno en el ángulo de Treitz."
      ],
      ans: 0,
      expl: "Segunda porción (descendente): colédoco y conducto pancreático. Verificar en clase porque el dato viene del resumen de la guía."
    },
    {
      id: "U1", topic: "urinario", src: "guia", ref: "sección 5 (confianza baja)",
      q: "¿Para qué sirve que el uréter entre oblicuo en la vejiga?",
      opts: [
        "Para evitar el reflujo de orina desde la vejiga hacia el uréter cuando la vejiga se contrae.",
        "Para aumentar la presión de la orina y facilitar su expulsión por la uretra al momento de orinar, con el esfínter relajado.",
        "Para permitir que la orina pase de la vejiga a la uretra sin atravesar el trígono.",
        "Para que el músculo detrusor controle el paso de la orina hacia el esfínter externo."
      ],
      ans: 0,
      expl: "El trayecto oblicuo dentro de la pared vesical funciona como válvula y evita el reflujo."
    }
  ],

  dev: [
    {
      id: "DV1", topic: "endocrino", src: "generado", ref: "modelo T0A preg. 1 y 5; guía sección 2",
      q: "Explique por qué en un hipotiroidismo primario la TSH está elevada, y qué cambiaría si la falla fuera secundaria. Justifique usando el eje de retroalimentación.",
      checklist: [
        "La tiroides no produce suficiente T3 y T4.",
        "Sin T3 y T4 no hay retroalimentación negativa sobre la hipófisis y el hipotálamo.",
        "La hipófisis aumenta la secreción de TSH para compensar.",
        "En el secundario la falla está en la hipófisis: la TSH no sube, queda baja o inadecuadamente normal, y la T4 sigue baja.",
        "Justifica con el eje tiroideo: TRH → TSH → T3/T4 con retroalimentación negativa."
      ],
      modelo: "En el hipotiroidismo primario la glándula no produce suficiente T4 y T3. Como esas hormonas ya no ejercen retroalimentación negativa sobre la hipófisis, la TSH sube. En el secundario la hipófisis no libera TSH, así que la TSH queda baja o normal inadecuadamente, mientras la T4 está baja.",
      justificacion: "Lo que decide la localización es la dirección de la hormona trófica respecto de la periférica. Primario: periférica baja y trófica alta. Secundario: periférica y trófica bajas."
    },
    {
      id: "DV2", topic: "digestivo", src: "guia", ref: "consigna de la sección 5 (confianza baja)",
      q: "Describa el recorrido de la bilis desde que se produce en el hígado hasta que llega al duodeno, y diga dónde se almacena y concentra.",
      checklist: [
        "Conductos hepáticos derecho e izquierdo que se unen en el conducto hepático común.",
        "Conducto cístico que trae la bilis desde la vesícula, donde se almacena y concentra.",
        "Conducto colédoco, formado por la unión del hepático común y el cístico.",
        "Desembocadura en la segunda porción del duodeno.",
        "Justifica: las sales biliares emulsionan grasas; no las digieren."
      ],
      modelo: "La bilis se produce en el hígado y sale por los conductos hepáticos derecho e izquierdo, que se unen en el conducto hepático común. Ese conducto se une al cístico, que viene de la vesícula biliar, donde la bilis se almacena y concentra. Así se forma el colédoco, que desemboca en la segunda porción del duodeno.",
      justificacion: "Las sales biliares emulsionan las grasas para que las lipasas puedan actuar; no las digieren. Por eso su llegada al duodeno es clave."
    },
    {
      id: "DV3", topic: "circulatorio", src: "apunte", ref: "apunte pág. 7-8; guía sección 13",
      q: "Enumere en orden el sistema de conducción cardíaca y explique por qué el nódulo AV introduce un retraso.",
      checklist: [
        "Nódulo sinoauricular (SA), luego nódulo AV, haz de His, ramas derecha e izquierda y fibras de Purkinje.",
        "El nódulo SA es el marcapasos natural.",
        "El retraso en el nódulo AV deja que las aurículas terminen de vaciarse antes de que se contraigan los ventrículos.",
        "El haz de His es la única vía eléctrica entre aurículas y ventrículos.",
        "Relaciona con el ECG: la onda P, el intervalo P-Q (con el retraso) y el complejo QRS."
      ],
      modelo: "El orden es: nódulo SA → nódulo AV → haz de His → ramas derecha e izquierda → fibras de Purkinje. El nódulo AV introduce un retraso para que las aurículas terminen de vaciarse y el llenado ventricular se complete antes de la contracción. Es el único puente entre aurículas y ventrículos, por eso ese retraso se refleja en el intervalo P-Q del ECG.",
      justificacion: "Sin ese retraso, la contracción auricular y ventricular sería simultánea y la eficiencia del llenado caería."
    },
    {
      id: "DV4", topic: "sensorial", src: "pres", ref: "diap. 25 y 26",
      q: "Explique la tonotopía de la cóclea: qué región responde a sonidos agudos y cuál a graves, y por qué ocurre así.",
      checklist: [
        "La base de la cóclea (cerca de la ventana oval) responde a los agudos, de hasta unos 20 kHz.",
        "El ápex responde a los graves, de unos 200 Hz.",
        "La membrana basilar cambia de ancho y rigidez a lo largo de la cóclea, y cada zona resuena con su frecuencia.",
        "Las células ciliadas del órgano de Corti se activan en la zona que resuena con cada frecuencia.",
        "Relaciona con la ventana oval: el estribo genera la onda que recorre la cóclea desde la base."
      ],
      modelo: "La membrana basilar varía en rigidez y ancho a lo largo de la cóclea. La base, cerca de la ventana oval, es rígida y responde a frecuencias altas; el ápex, más flexible, responde a las bajas. Cada zona se activa con su frecuencia característica, y las células ciliadas de ese punto transmiten la señal al nervio coclear.",
      justificacion: "La tonotopía permite distinguir la altura del sonido por la posición de la respuesta en la membrana, no por la intensidad."
    },
    {
      id: "DV5", topic: "memoria", src: "pres", ref: "diap. 38 y 41",
      q: "Explique qué es la potenciación a largo plazo (LTP) y por qué el receptor NMDA es clave para inducirla.",
      checklist: [
        "La LTP es un aumento persistente de la respuesta postsináptica tras una estimulación de alta frecuencia.",
        "Requiere coincidencia de actividad presináptica (liberación de glutamato) y despolarización postsináptica.",
        "El NMDA está bloqueado por Mg²⁺ en reposo.",
        "Con despolarización fuerte se desbloquea y entra calcio, que activa cascadas de señalización.",
        "El aumento de la respuesta se mantiene durante horas (en la vía de prueba de Schaffer-CA1)."
      ],
      modelo: "La LTP es un aumento persistente de la respuesta postsináptica después de una estimulación de alta frecuencia. Para inducirla, la liberación de glutamato en la presináptica tiene que coincidir con una despolarización fuerte de la postsináptica. Esa despolarización desbloquea el receptor NMDA, que deja entrar calcio. El calcio activa cascadas que hacen más eficiente la sinapsis durante horas.",
      justificacion: "El NMDA funciona como detector de coincidencia: sólo se abre cuando la actividad presináptica y la postsináptica ocurren al mismo tiempo. Por eso es la base del aprendizaje asociativo."
    }
  ]
};
