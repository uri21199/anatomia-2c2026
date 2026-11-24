// Banco de unidades: 47 preguntas de opción múltiple y 3 de desarrollo de aplicación por sistema.
// ans = índice de la correcta en opts. sec = encabezado de la teoría donde se explica el punto.
// PRACTICA: opción múltiple. PRACTICA_DEV: desarrollo, con checklist, respuesta modelo y justificación.
const PRACTICA = {
  "respiratorio": [
    {
      "id": "P-resp-1",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Los anillos cartilaginosos de la tráquea son incompletos por detrás. ¿Cuál es la razón funcional de esa abertura?",
      "opts": [
        "Deja que el esófago se expanda durante la deglución, y el cartílago anterior mantiene la vía aérea permeable.",
        "Reduce el peso del cuello y facilita la flexión cervical, sin comprimir ningún órgano vecino durante los movimientos.",
        "Deja pasar los nervios laríngeos recurrentes hacia la laringe, que los necesita por su cara posterior para inervarla.",
        "Permite que la tráquea se alargue durante la inspiración profunda sin colapsar ni dañar el epitelio ciliado de la mucosa."
      ],
      "ans": 0,
      "expl": "El cartílago anterior mantiene la vía aérea permeable porque evita que la tráquea colapse cuando cae la presión intratorácica. La abertura posterior deja que el esófago se expanda hacia adelante al tragar. Es un compromiso de diseño: anillos completos evitarían el colapso pero bloquearían el bolo alimenticio.",
      "sec": "Tráquea: por qué los anillos son incompletos"
    },
    {
      "id": "P-resp-2",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un paciente tiene aire en la cavidad pleural, y el pulmón de ese lado colapsa aunque la vía aérea esté permeable. ¿Por qué?",
      "opts": [
        "Porque el aire que entra en la cavidad pleural comprime el pulmón de forma mecánica contra el mediastino y lo aplasta.",
        "Porque se pierde la presión negativa de la pleura y la adherencia entre hojas, y el pulmón se retrae elásticamente.",
        "Porque el diafragma deja de contraerse de ese lado, ya que pierde el estímulo del nervio frénico durante la lesión.",
        "Porque se interrumpe la producción de surfactante en ese pulmón, y la tensión superficial alveolar sube de forma brusca."
      ],
      "ans": 1,
      "expl": "El pulmón se mantiene expandido por la presión intrapleural subatmosférica y por la película de líquido que pega las dos hojas pleurales. Si entra aire se pierden ambas cosas y el pulmón se retrae por su propio retroceso elástico, aunque la vía aérea esté permeable. El aire no lo aplasta mecánicamente.",
      "sec": "Pulmones y pleuras"
    },
    {
      "id": "P-resp-3",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué célula del alvéolo secreta el surfactante y cuál es el sitio principal del intercambio gaseoso?",
      "opts": [
        "El neumocito tipo I secreta el surfactante, y el tipo II es el sitio del intercambio gaseoso por su gran superficie.",
        "El macrófago alveolar secreta el surfactante, y el neumocito tipo I cubre la superficie del alvéolo.",
        "El neumocito tipo II secreta el surfactante, y el tipo I es el sitio del intercambio por su delgadez.",
        "El neumocito tipo II secreta el surfactante y además cubre cerca del 95 % de la superficie alveolar con su epitelio."
      ],
      "ans": 2,
      "expl": "El neumocito tipo II es la célula cúbica que secreta el surfactante. El tipo I es plano y extremadamente delgado, y por eso es el sitio del intercambio gaseoso. La trampa es invertirlos: el tipo I cubre cerca del 95 % de la superficie, no el II.",
      "sec": "El alvéolo y la membrana alveolocapilar, capa por capa"
    },
    {
      "id": "P-resp-4",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál es el orden correcto de las capas que atraviesa el O2 desde el aire alveolar hasta la sangre?",
      "opts": [
        "Endotelio capilar, membrana basal del endotelio, membrana basal del epitelio, epitelio alveolar y líquido con surfactante.",
        "Epitelio alveolar, líquido con surfactante, endotelio capilar, membrana basal del epitelio y membrana basal del endotelio.",
        "Surfactante, membrana basal del endotelio, endotelio capilar, membrana basal del epitelio y epitelio alveolar.",
        "Líquido con surfactante, epitelio alveolar, membrana basal del epitelio, membrana basal del endotelio y endotelio."
      ],
      "ans": 3,
      "expl": "Desde el aire hacia la sangre, el O2 cruza primero el líquido con surfactante y el epitelio alveolar, luego la membrana basal del epitelio, después la del endotelio y por último el endotelio del capilar. Son cuatro capas con un espesor total de unos 0,5 µm.",
      "sec": "El alvéolo y la membrana alveolocapilar, capa por capa"
    },
    {
      "id": "P-resp-5",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un espirómetro registra: volumen corriente 500 mL, volumen de reserva inspiratoria 3.100 mL, volumen de reserva espiratoria 1.200 mL y volumen residual 1.200 mL. ¿Cuánto vale la capacidad residual funcional?",
      "opts": [
        "2.400 mL: suma del volumen residual y el de reserva espiratoria, lo que queda tras una espiración normal.",
        "1.700 mL, que resulta de sumar el volumen residual y el de reserva inspiratoria, tras una espiración forzada.",
        "3.600 mL, que resulta de sumar el volumen corriente y el de reserva inspiratoria, es decir la inspiración.",
        "4.800 mL, que resulta de sumar la reserva inspiratoria, el volumen corriente y la reserva espiratoria."
      ],
      "ans": 0,
      "expl": "La capacidad residual funcional es lo que queda tras una espiración normal: volumen residual más volumen de reserva espiratoria, 1.200 + 1.200 = 2.400 mL. La trampa es la capacidad vital (VRI + VC + VRE = 4.800 mL), que no incluye el volumen residual.",
      "sec": "Volúmenes y capacidades pulmonares"
    },
    {
      "id": "P-resp-6",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un músculo en ejercicio intenso produce acidosis local. ¿Qué ocurre con la afinidad de la hemoglobina por el oxígeno y con la entrega de O2 a ese tejido?",
      "opts": [
        "La afinidad aumenta, y la hemoglobina retiene más oxígeno para que el músculo no quede sin reserva.",
        "La afinidad disminuye y se entrega más O2 al tejido, por el efecto Bohr, que baja el pH local.",
        "La afinidad disminuye, pero como el músculo consume menos oxígeno, la entrega no cambia en el tejido.",
        "La afinidad no depende del pH y sólo cambia con la frecuencia respiratoria del individuo en reposo."
      ],
      "ans": 1,
      "expl": "Al bajar el pH (efecto Bohr) la afinidad de la hemoglobina por el O2 disminuye y se entrega más oxígeno al tejido. Es lógico: un músculo en ejercicio es ácido, caliente y con mucho CO2, y justo ahí hace falta más O2. La trampa es pensar que la hemoglobina retiene más oxígeno.",
      "sec": "Transporte de gases en la sangre"
    },
    {
      "id": "P-resp-7",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué estructuras de la cavidad nasal permiten calentar y humidificar el aire en pocos centímetros?",
      "opts": [
        "El vestíbulo, revestido de piel con vibrisas que retienen las partículas gruesas del aire inspirado.",
        "Los senos paranasales, que alivianan el cráneo y drenan su contenido hacia la cavidad nasal.",
        "Los cornetes y los meatos, que crean turbulencia y multiplican la superficie de contacto con el aire.",
        "El epitelio olfatorio del techo de la cavidad, que sobre el cornete superior recibe los olores."
      ],
      "ans": 2,
      "expl": "Los cornetes y los meatos crean turbulencia y multiplican la superficie de contacto con el aire. Eso permite calentarlo y humidificarlo en unos pocos centímetros. El vestíbulo con vibrisas sólo retiene partículas gruesas.",
      "sec": "Nariz y fosas nasales"
    },
    {
      "id": "P-resp-8",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué orificios comunican la cavidad nasal con la nasofaringe?",
      "opts": [
        "Las narinas, que son los orificios anteriores por donde entra el aire.",
        "El istmo de las fauces, que comunica la boca con la orofaringe.",
        "Las trompas auditivas, que se abren en la pared lateral de la nasofaringe.",
        "Las coanas, que son los orificios posteriores de la cavidad nasal."
      ],
      "ans": 3,
      "expl": "Las coanas son los dos orificios posteriores de la cavidad nasal y la comunican con la nasofaringe. Las narinas son los orificios anteriores, por donde entra el aire. El istmo de las fauces comunica la boca con la orofaringe.",
      "sec": "Nariz y fosas nasales"
    },
    {
      "id": "P-resp-9",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "En una vista anterior de la laringe, ¿qué cartílago es el punto de referencia para realizar una traqueotomía?",
      "opts": [
        "El cricoides, que forma un anillo completo y la pared inferior de la laringe.",
        "El tiroides, que es el cartílago impar más prominente de la laringe anterior.",
        "El aritenoides, que mueve las cuerdas vocales desde el borde posterior del cricoides.",
        "La epiglotis, que bascula durante la deglución y cierra la entrada laríngea."
      ],
      "ans": 0,
      "expl": "El cricoides es el único anillo completo de la laringe, forma su pared inferior y es el punto de referencia para la traqueotomía. De frente se ven el tiroides y, debajo, el cricoides. El tiroides también se ve, pero no es la referencia que pide la pregunta.",
      "sec": "Laringe: nueve cartílagos y dos pares de pliegues"
    },
    {
      "id": "P-resp-10",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué estructuras de la laringe vibran para producir el sonido de la voz?",
      "opts": [
        "Los pliegues vestibulares, superiores, que son las cuerdas falsas y producen el sonido de la voz.",
        "Los pliegues vocales inferiores, que son las cuerdas verdaderas y vibran al paso del aire.",
        "La epiglotis, que vibra al paso del aire espirado y se separa del cartílago tiroides.",
        "Los cartílagos corniculados, que se apoyan sobre los aritenoides y vibran con el aire."
      ],
      "ans": 1,
      "expl": "Los que vibran son los pliegues vocales, o cuerdas verdaderas, que son los inferiores. Los pliegues vestibulares (cuerdas falsas) son los superiores y no producen sonido: sólo retienen la respiración y se cierran en la maniobra de Valsalva.",
      "sec": "Laringe: nueve cartílagos y dos pares de pliegues"
    },
    {
      "id": "P-resp-11",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué controla el tono de la voz en la laringe?",
      "opts": [
        "La fuerza del aire espirado, que aumenta el tono cuando sale con más presión.",
        "El tamaño de la rima glótica, que se ensancha para producir los sonidos graves.",
        "La tensión de los pliegues vocales: a más tensión, más agudo el sonido.",
        "La separación de los aritenoides, que se abren para bajar la altura del sonido."
      ],
      "ans": 2,
      "expl": "El tono se controla con la tensión de los pliegues vocales: cuanto más tensos, más agudo el sonido. El volumen, en cambio, depende de la fuerza del aire espirado. Es la distinción que más se confunde.",
      "sec": "Laringe: nueve cartílagos y dos pares de pliegues"
    },
    {
      "id": "P-resp-12",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿En qué punto termina la tráquea y qué estructura marca esa división?",
      "opts": [
        "En el cricoides, que se continúa con la tráquea y marca el fin de la vía aérea superior.",
        "En los bronquiolos terminales, que la dividen en dos ramas de igual calibre.",
        "En la epiglotis, que separa la tráquea del esófago en la base del cuello.",
        "En la carina, donde se bifurca en los dos bronquios principales, a la altura de T4-T5."
      ],
      "ans": 3,
      "expl": "La tráquea baja desde el cricoides hasta la carina, donde se bifurca en los dos bronquios principales a la altura de T4-T5. El cricoides es su inicio, no su final.",
      "sec": "Tráquea: por qué los anillos son incompletos"
    },
    {
      "id": "P-resp-13",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál describe correctamente el cartílago de la tráquea?",
      "opts": [
        "Anillos completos de cartílago hialino, igual que el cricoides.",
        "Nueve piezas de cartílago elástico en forma de C.",
        "Anillos de cartílago elástico en forma de C, abiertos hacia atrás.",
        "De 16 a 20 anillos de cartílago hialino en forma de C, abiertos hacia atrás."
      ],
      "ans": 3,
      "expl": "La tráquea tiene de 16 a 20 anillos de cartílago hialino en forma de C, abiertos hacia atrás, donde hay tejido conjuntivo y músculo traqueal. La trampa es confundirla con el cricoides, que sí es un anillo completo, o con los cartílagos elásticos de la laringe.",
      "sec": "Tráquea: por qué los anillos son incompletos"
    },
    {
      "id": "P-resp-14",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "En el asma, ¿qué calibre de la vía aérea se cierra principalmente y por qué?",
      "opts": [
        "La tráquea, porque sus anillos cartilaginosos se contraen y estrechan el lumen durante la crisis.",
        "Los bronquiolos, porque aumenta la proporción de músculo liso a medida que el árbol se ramifica.",
        "Los bronquios principales, porque su cartílago se reblandece y se colapsa con el aire espirado.",
        "Los alvéolos, porque su tensión superficial sube y los cierra durante la espiración forzada."
      ],
      "ans": 1,
      "expl": "A medida que el árbol se ramifica el cartílago desaparece y aumenta la proporción relativa de músculo liso. Por eso el calibre que se cierra en el asma es el de los bronquiolos, no el de la tráquea.",
      "sec": "El árbol bronquial y sus gradientes"
    },
    {
      "id": "P-resp-15",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Por qué puerta entran y salen del pulmón el bronquio principal, la arteria pulmonar y las venas pulmonares?",
      "opts": [
        "Por el vértice, que asoma por encima de la clavícula y conecta con el cuello.",
        "Por la base, que se apoya cóncava sobre el diafragma y recibe los vasos sistémicos.",
        "Por el hilio, en la cara medial, que forma la raíz del pulmón junto con los vasos.",
        "Por la cisura oblicua, que separa los lóbulos y permite el paso de los bronquios lobares."
      ],
      "ans": 2,
      "expl": "El hilio es la puerta de entrada en la cara medial del pulmón. Por ahí pasan el bronquio principal, la arteria pulmonar y las venas pulmonares, y el conjunto forma la raíz del pulmón. El vértice asoma por encima de la clavícula y la base apoya sobre el diafragma.",
      "sec": "Pulmones y pleuras"
    },
    {
      "id": "P-resp-16",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué hoja pleural está pegada a la superficie del pulmón y se introduce en las fisuras?",
      "opts": [
        "La pleura parietal, que tapiza las costillas, el diafragma y el mediastino de forma externa.",
        "La cavidad pleural, que es el espacio virtual con líquido entre las dos hojas serosas.",
        "El mediastino, que es la región entre los pulmones y contiene el corazón y los grandes vasos.",
        "La pleura visceral, que se adhiere al parénquima pulmonar y se mete en las fisuras interlobares."
      ],
      "ans": 3,
      "expl": "La pleura visceral es la hoja pegada al pulmón y se mete en las fisuras. La parietal tapiza la pared torácica, el diafragma y el mediastino. La cavidad pleural es el espacio virtual entre ambas hojas, no una hoja.",
      "sec": "Pulmones y pleuras"
    },
    {
      "id": "P-resp-17",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué nervio inerva el diafragma, el principal músculo de la inspiración?",
      "opts": [
        "El nervio frénico, que se origina en las raíces C3 a C5 de la médula cervical.",
        "El nervio vago, que controla el ritmo de la respiración desde el bulbo raquídeo.",
        "Los nervios intercostales, que inervan los músculos entre las costillas y el diafragma.",
        "El nervio ciático, que se distribuye por los músculos de la pared abdominal inferior."
      ],
      "ans": 0,
      "expl": "El diafragma es el principal músculo de la inspiración y lo inerva el nervio frénico (C3-C5). Los intercostales externos también inspiran, pero inervan la pared y no el diafragma.",
      "sec": "Mecánica ventilatoria"
    },
    {
      "id": "P-resp-18",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Durante una inspiración forzada, ¿qué músculo se suma al diafragma y a los intercostales externos?",
      "opts": [
        "El recto abdominal, que empuja las vísceras contra el diafragma al contraerse con fuerza.",
        "El esternocleidomastoideo, que eleva el esternón y las costillas superiores para sumar volumen.",
        "El transverso del abdomen, que desciende las costillas y reduce el diámetro del tórax.",
        "Los intercostales internos, que descienden las costillas y disminuyen el volumen torácico."
      ],
      "ans": 1,
      "expl": "En la inspiración forzada se suman el esternocleidomastoideo, los escalenos y el pectoral menor, que elevan el esternón y las costillas superiores. Los abdominales y los intercostales internos actúan en la espiración forzada.",
      "sec": "Mecánica ventilatoria"
    },
    {
      "id": "P-resp-19",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "En la espiración forzada, ¿qué músculos actúan para reducir el volumen torácico?",
      "opts": [
        "El diafragma, que se contrae en sentido inverso para empujar el aire hacia afuera del pulmón.",
        "Los escalenos y el pectoral menor, que bajan el esternón y las costillas superiores.",
        "Los abdominales, que empujan las vísceras, y los intercostales internos, que descienden las costillas.",
        "Los intercostales externos, que elevan las costillas y aumentan el diámetro del tórax."
      ],
      "ans": 2,
      "expl": "En la espiración forzada actúan los abdominales, que empujan las vísceras contra el diafragma, y los intercostales internos, que descienden las costillas. Los escalenos y el pectoral menor son inspiratorios, y la espiración tranquila es pasiva.",
      "sec": "Mecánica ventilatoria"
    },
    {
      "id": "P-resp-20",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué volumen pulmonar no puede medirse con espirometría?",
      "opts": [
        "El volumen corriente, que entra y sale en una respiración normal y tranquila.",
        "El volumen de reserva inspiratoria, que se puede inspirar de más tras una inspiración normal.",
        "El volumen de reserva espiratoria, que se puede espirar de más tras una espiración normal.",
        "El volumen residual, que queda en el pulmón tras una espiración forzada."
      ],
      "ans": 3,
      "expl": "El volumen residual es lo que queda en el pulmón tras una espiración forzada, así que el espirómetro no puede medirlo porque ese aire nunca sale. Los otros tres volúmenes entran y salen del pulmón y sí se miden directamente.",
      "sec": "Volúmenes y capacidades pulmonares"
    },
    {
      "id": "P-resp-21",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Por qué respirar lento y profundo ventila mejor que respirar rápido y superficial con el mismo volumen minuto?",
      "opts": [
        "Porque el espacio muerto (unos 150 mL) es fijo, y con respiraciones superficiales ocupa más del volumen corriente.",
        "Porque la presión alveolar sube más con respiraciones lentas, y así el oxígeno difunde mejor hacia la sangre.",
        "Porque la frecuencia respiratoria baja la afinidad de la hemoglobina, y eso mejora la entrega de oxígeno.",
        "Porque en las respiraciones profundas el diafragma trabaja menos, y se reduce el gasto de oxígeno del músculo."
      ],
      "ans": 0,
      "expl": "El espacio muerto de unos 150 mL es una porción fija del volumen corriente que se queda en las vías de conducción y no participa del intercambio. Con respiraciones superficiales esa porción pesa más y la ventilación alveolar baja. La frecuencia no cambia la afinidad de la hemoglobina.",
      "sec": "Volúmenes y capacidades pulmonares"
    },
    {
      "id": "P-resp-22",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué gas es unas 24 veces más soluble en líquidos que el oxígeno, según la ley de Henry?",
      "opts": [
        "El nitrógeno, que es el gas más abundante del aire y el de mayor solubilidad.",
        "El dióxido de carbono, que se disuelve mucho más que el oxígeno en el plasma.",
        "El monóxido de carbono, que se une a la hemoglobina y desplaza al oxígeno disuelto.",
        "El oxígeno en su forma molecular, que se disuelve mejor en el agua fría de la sangre."
      ],
      "ans": 1,
      "expl": "La ley de Henry dice que lo que se disuelve depende de la presión parcial y de la solubilidad del gas. El CO2 es unas 24 veces más soluble que el O2, por eso se disuelve mucho más en el plasma.",
      "sec": "Intercambio de gases: dos leyes y cuatro números"
    },
    {
      "id": "P-resp-23",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "En condiciones normales, ¿cuál es el estímulo dominante que regula la respiración?",
      "opts": [
        "La PO2 baja, que es el estímulo principal de los quimiorreceptores en condiciones normales.",
        "El pH sanguíneo alto, que inhibe el centro respiratorio del bulbo raquídeo en reposo.",
        "La PCO2, por medio de los H+ del LCR, que activan a los quimiorreceptores centrales.",
        "La temperatura corporal, que aumenta la frecuencia respiratoria en el reposo habitual."
      ],
      "ans": 2,
      "expl": "En condiciones normales el estímulo dominante es la PCO2, que actúa a través de los H+ del líquido cefalorraquídeo sobre los quimiorreceptores centrales. La hipoxia sólo se vuelve un estímulo importante cuando la PO2 es muy baja.",
      "sec": "Control de la respiración"
    },
    {
      "id": "P-resp-24",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Dónde se encuentran los quimiorreceptores periféricos que detectan la hipoxia?",
      "opts": [
        "En el bulbo raquídeo, donde responden a los H+ del líquido cefalorraquídeo.",
        "En la protuberancia, que modula el ritmo respiratorio generado en el bulbo.",
        "En el hipotálamo, que regula la temperatura y la frecuencia respiratoria.",
        "En los cuerpos carotídeos y aórticos, que responden a PO2 baja, PCO2 alta y H+."
      ],
      "ans": 3,
      "expl": "Los quimiorreceptores periféricos están en los cuerpos carotídeos y aórticos y responden a PO2 baja, PCO2 alta y H+. Los centrales están en el bulbo y responden a los H+ del líquido cefalorraquídeo.",
      "sec": "Control de la respiración"
    },
    {
      "id": "P-resp-25",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué movimiento respiratorio modificado cierra completamente la rima glótica y luego la abre con una espiración fuerte?",
      "opts": [
        "La tos, que lanza el aire por las vías superiores tras cerrar la rima glótica.",
        "El sollozo, que tiene una serie de inspiraciones convulsivas con la rima cerrada antes de tiempo.",
        "El bostezo, que es una inspiración profunda con la boca abierta y la mandíbula deprimida.",
        "El hipo, que es una contracción espasmódica del diafragma seguida de cierre glótico."
      ],
      "ans": 0,
      "expl": "La tos es la que incluye cierre completo de la rima glótica y una espiración fuerte que la abre y lanza el aire por las vías superiores. En el sollozo el cierre es precoz tras cada inspiración, y el hipo es una contracción espasmódica del diafragma.",
      "sec": "Movimientos respiratorios modificados"
    },
    {
      "id": "P-resp-26",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué epitelio reviste la orofaringe, por donde pasan aire y alimentos?",
      "opts": [
        "Plano estratificado no queratinizado.",
        "Cilíndrico seudoestratificado ciliado, el epitelio respiratorio.",
        "Plano simple, el mismo del alvéolo.",
        "Cúbico simple ciliado, el de los bronquiolos."
      ],
      "ans": 0,
      "expl": "La orofaringe está revestida por epitelio plano estratificado no queratinizado, que resiste el roce del alimento. El epitelio respiratorio ciliado queda en la nasofaringe, que es exclusivamente aérea; no hay que extenderlo a toda la faringe.",
      "sec": "Faringe: tres porciones, y sólo una es exclusivamente aérea"
    },
    {
      "id": "P-resp-27",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué función cumplen los senos paranasales?",
      "opts": [
        "Producen la mayor parte del moco que humidifica el aire de la nasofaringe.",
        "Alivianan el cráneo, resuenan la voz y drenan hacia la cavidad nasal.",
        "Regulan la presión del aire inspirado para mantenerla por encima de la atmosférica.",
        "Filtran el aire antes de que llegue a la laringe, reteniendo las partículas grandes."
      ],
      "ans": 1,
      "expl": "Los senos paranasales alivianan el cráneo, resuenan la voz y drenan hacia la cavidad nasal. Filtrar partículas gruesas es tarea de las vibrisas del vestíbulo, y calentar el aire es tarea de los cornetes.",
      "sec": "Nariz y fosas nasales"
    },
    {
      "id": "P-resp-28",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál es el número aproximado de alvéolos en un pulmón humano adulto?",
      "opts": [
        "Unos 30 millones, que se distribuyen entre los dos pulmones de forma pareja.",
        "Unos 3 mil millones, que son necesarios para la superficie de intercambio.",
        "Unos 300 millones, que dan la superficie alveolar total de unos 70 m².",
        "Unos 300 mil, que bastan para cubrir la superficie necesaria del intercambio."
      ],
      "ans": 2,
      "expl": "El pulmón tiene unos 300 millones de alvéolos, que suman unos 70 m² de superficie de intercambio. La cifra se ve en la tabla del árbol bronquial.",
      "sec": "El árbol bronquial y sus gradientes"
    },
    {
      "id": "P-resp-29",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Por qué el pulmón derecho es más corto que el izquierdo?",
      "opts": [
        "Porque el corazón está desplazado a la derecha y le quita espacio al pulmón de ese lado.",
        "Porque el derecho tiene dos lóbulos y el izquierdo tiene tres, y los lóbulos acortan el pulmón.",
        "Porque el bronquio derecho es más largo y horizontal, y tira del pulmón hacia abajo.",
        "Porque el hígado empuja la base del pulmón derecho hacia arriba, por debajo del diafragma."
      ],
      "ans": 3,
      "expl": "El hígado empuja hacia arriba el diafragma del lado derecho, por eso el pulmón derecho es más ancho y más corto. La trampa es culpar al corazón: éste está desplazado a la izquierda y es el pulmón izquierdo el que tiene menos espacio.",
      "sec": "Pulmones y pleuras"
    },
    {
      "id": "P-resp-30",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué ocurre con la presión alveolar al final de una espiración tranquila?",
      "opts": [
        "Sube unos 2 mmHg por encima de la atmosférica, hasta 762 mmHg, y el aire sale.",
        "Baja unos 2 mmHg por debajo de la atmosférica, hasta 758 mmHg, y el aire sale.",
        "Se iguala con la atmosférica, de 760 mmHg, y el aire queda atrapado en el alvéolo.",
        "Sube hasta 770 mmHg por la contracción del diafragma durante la espiración tranquila."
      ],
      "ans": 0,
      "expl": "Al final de la espiración tranquila el volumen del tórax baja y la presión alveolar sube unos 2 mmHg por encima de la atmosférica, hasta 762 mmHg, así que el aire sale. El valor de 758 mmHg corresponde a la inspiración.",
      "sec": "Mecánica ventilatoria"
    },
    {
      "id": "P-resp-31",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuántas aberturas tiene la nasofaringe y cuáles son?",
      "opts": [
        "Tres: dos coanas, el istmo de las fauces y la entrada de la laringe.",
        "Cinco: dos coanas, dos trompas auditivas y una hacia la orofaringe.",
        "Cuatro: dos narinas, dos coanas y dos trompas auditivas en total.",
        "Dos: las coanas, que comunican con la cavidad nasal por delante."
      ],
      "ans": 1,
      "expl": "La nasofaringe tiene cinco aberturas: las dos coanas, las dos trompas auditivas y una hacia la orofaringe. Las narinas y el istmo de las fauces no son aberturas de la nasofaringe: las narinas son la entrada de la nariz y el istmo comunica la boca con la orofaringe.",
      "sec": "Faringe: tres porciones, y sólo una es exclusivamente aérea"
    },
    {
      "id": "P-resp-32",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál de estos cartílagos de la laringe es impar y de tejido elástico?",
      "opts": [
        "Tiroides: forma la nuez de Adán y es de cartílago hialino.",
        "Cricoides: es un anillo completo de cartílago hialino.",
        "Aritenoides: son dos piezas triangulares pares, de cartílago hialino.",
        "Epiglotis: bascula al tragar y es un cartílago de tejido elástico."
      ],
      "ans": 3,
      "expl": "La epiglotis es el único cartílago impar que es elástico. Los otros dos impares, tiroides y cricoides, son hialinos, y los aritenoides son pares. Su función es bascular al tragar e impedir que alimentos o líquidos entren en la tráquea.",
      "sec": "Laringe: nueve cartílagos y dos pares de pliegues"
    },
    {
      "id": "P-resp-33",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "A un niño le diagnostican adenoides inflamadas. ¿En qué porción de la faringe se ubican?",
      "opts": [
        "En la nasofaringe, donde se ubica la amígdala faríngea.",
        "En la orofaringe, junto a las amígdalas palatinas y linguales.",
        "En la laringofaringe, entre el hioides y el cricoides.",
        "En el vestíbulo nasal, justo detrás de las vibrisas."
      ],
      "ans": 0,
      "expl": "Las adenoides son la amígdala faríngea, que está en la nasofaringe. La orofaringe tiene las amígdalas palatinas y linguales, y la laringofaringe no tiene contenido linfático en el capítulo.",
      "sec": "Faringe: tres porciones, y sólo una es exclusivamente aérea"
    },
    {
      "id": "P-resp-34",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál NO es una función de la zona de conducción del aparato respiratorio?",
      "opts": [
        "Filtrar el aire que se inspira por la vía aérea.",
        "Calentar y humidificar el aire que se inspira.",
        "Intercambiar gases con la sangre de los capilares.",
        "Conducir el aire inspirado hasta los bronquiolos terminales."
      ],
      "ans": 2,
      "expl": "La zona de conducción conduce, filtra, calienta y humidifica el aire, pero no intercambia gases. El intercambio ocurre sólo en la zona respiratoria, que empieza en los bronquiolos respiratorios e incluye los alvéolos.",
      "sec": "Las dos divisiones que hay que tener separadas"
    },
    {
      "id": "P-resp-35",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un niño aspira un cacahuate. ¿A qué pulmón es más probable que vaya y por qué?",
      "opts": [
        "Al izquierdo, porque su bronquio pasa por debajo del arco de la aorta.",
        "Al izquierdo, porque el corazón le deja menos espacio al pulmón.",
        "Al derecho, porque tiene tres lóbulos y el izquierdo tiene sólo dos.",
        "Al derecho, porque su bronquio principal es más vertical y ancho."
      ],
      "ans": 3,
      "expl": "El bronquio principal derecho es más vertical, corto y ancho, así que los cuerpos extraños aspirados van con mucha más frecuencia al pulmón derecho. El izquierdo es más largo y horizontal. El número de lóbulos no es la razón.",
      "sec": "El árbol bronquial y sus gradientes"
    },
    {
      "id": "P-resp-36",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué hace el surfactante en el alvéolo?",
      "opts": [
        "Sube la tensión superficial para mantener abierto el alvéolo.",
        "Baja la tensión superficial y evita el colapso al espirar.",
        "Fagocita partículas y microorganismos que llegan a la luz alveolar.",
        "Es la célula progenitora de los neumocitos tipo I."
      ],
      "ans": 1,
      "expl": "El líquido que tapiza el alvéolo genera tensión superficial, que tiende a colapsarlo. El surfactante baja esa tensión y evita el colapso al final de la espiración. Fagocitar es función del macrófago alveolar, y la célula progenitora es el neumocito tipo II, que es además quien secreta el surfactante.",
      "sec": "El alvéolo y la membrana alveolocapilar, capa por capa"
    },
    {
      "id": "P-resp-37",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Además del surfactante, ¿qué evita que el pulmón colapse durante la espiración?",
      "opts": [
        "La presión intrapleural es subatmosférica y mantiene expandido el pulmón.",
        "La presión intrapleural se iguala con la alveolar al final de la espiración.",
        "El diafragma sigue contrayéndose de forma activa en la espiración tranquila.",
        "Los abdominales mantienen elevado el volumen torácico al espirar."
      ],
      "ans": 0,
      "expl": "La presión intrapleural es inferior a la atmosférica, por eso tracciona los pulmones hacia afuera y los mantiene expandidos. Nunca llega a igualar a la alveolar ni a la atmosférica. La espiración tranquila es pasiva: no trabajan músculos espiratorios.",
      "sec": "Mecánica ventilatoria"
    },
    {
      "id": "P-resp-38",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Con volumen corriente de 500 mL, espacio muerto de 150 mL y 12 respiraciones por minuto, ¿cuánto vale la ventilación alveolar?",
      "opts": [
        "6.000 mL/min, que es el volumen minuto.",
        "1.800 mL/min, que es el espacio muerto (150 × 12).",
        "4.200 mL/min, que resulta de (500 − 150) × 12.",
        "7.800 mL/min, que resulta de (500 + 150) × 12 sumado."
      ],
      "ans": 2,
      "expl": "La ventilación alveolar descuenta el espacio muerto, que no participa del intercambio: (500 − 150) × 12 = 4.200 mL/min. El valor de 6.000 mL/min es el volumen minuto, que no descuenta el espacio muerto.",
      "sec": "Volúmenes y capacidades pulmonares"
    },
    {
      "id": "P-resp-39",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Según la ley de Henry, ¿de qué depende la cantidad de gas que se disuelve en un líquido?",
      "opts": [
        "Sólo de la temperatura del cuerpo y del volumen del líquido.",
        "De la frecuencia respiratoria y la ventilación alveolar.",
        "Del peso molecular del gas, sin importar su presión parcial.",
        "De su presión parcial y de su solubilidad en ese líquido."
      ],
      "ans": 3,
      "expl": "La ley de Henry dice que la cantidad de gas disuelto es proporcional a su presión parcial y a su solubilidad. Por eso el CO2, unas 24 veces más soluble, se disuelve mucho más que el O2. La ventilación no entra en esta ley.",
      "sec": "Intercambio de gases: dos leyes y cuatro números"
    },
    {
      "id": "P-resp-40",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "En la respiración externa, ¿en qué dirección difunden el O2 y el CO2 entre el alvéolo y el capilar pulmonar?",
      "opts": [
        "O2 pasa del capilar hacia el alvéolo y CO2 del alvéolo a la sangre.",
        "O2 y CO2 pasan ambos del alvéolo hacia la sangre del capilar.",
        "O2 pasa del alvéolo a la sangre y CO2 de la sangre al alvéolo.",
        "O2 y CO2 pasan ambos desde la sangre hacia el aire alveolar."
      ],
      "ans": 2,
      "expl": "Cada gas sigue su gradiente de presión parcial. La PO2 es 105 en el alvéolo contra 40 en la sangre que llega, así que el O2 entra a la sangre. La PCO2 es 45 en la sangre contra 40 en el alvéolo, así que el CO2 sale.",
      "sec": "Intercambio de gases: dos leyes y cuatro números"
    },
    {
      "id": "P-resp-41",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué porcentaje del O2 de la sangre viaja unido a la hemoglobina?",
      "opts": [
        "Cerca del 98,5 %; el resto va disuelto en el plasma.",
        "Cerca del 70 %; el resto va unido a la globina del eritrocito.",
        "Cerca del 23 %; el resto va como bicarbonato.",
        "Cerca del 7 %; el resto va disuelto en el plasma."
      ],
      "ans": 0,
      "expl": "El 98,5 % del O2 va unido a la hemoglobina como oxihemoglobina y sólo 1,5 % va disuelto en el plasma. Las otras cifras son del CO2: 70 % como bicarbonato, 23 % como carbaminohemoglobina y 7 % disuelto.",
      "sec": "Transporte de gases en la sangre"
    },
    {
      "id": "P-resp-42",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Qué cataliza dentro del eritrocito la conversión de CO2 en bicarbonato?",
      "opts": [
        "La hemoglobina, que une el CO2 a su globina.",
        "La anhidrasa carbónica, que cataliza CO2 + H2O hacia H2CO3.",
        "El 2,3-BPG, que baja la afinidad de la hemoglobina por el O2.",
        "El cloruro, que se intercambia por el bicarbonato que sale al plasma."
      ],
      "ans": 1,
      "expl": "La anhidrasa carbónica acelera dentro del eritrocito la reacción CO2 + H2O hacia H2CO3, que se disocia en H+ y bicarbonato. El bicarbonato sale al plasma intercambiándose por cloruro. La hemoglobina transporta el CO2 como carbaminohemoglobina, que es otra vía.",
      "sec": "Transporte de gases en la sangre"
    },
    {
      "id": "P-resp-43",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Dónde se genera el ritmo respiratorio básico?",
      "opts": [
        "En los cuerpos carotídeos, que fijan el ritmo según la PO2 de la sangre.",
        "En el área pontina, que genera el ritmo mientras el bulbo sólo lo modula.",
        "En el centro respiratorio del bulbo, con un grupo dorsal y otro ventral.",
        "En el diafragma, que marca su propio ritmo sin ningún control nervioso."
      ],
      "ans": 2,
      "expl": "El ritmo básico lo genera el centro respiratorio bulbar, en el bulbo raquídeo, con un grupo dorsal (inspiración) y uno ventral (espiración forzada). El área pontina sólo lo modula. Los cuerpos carotídeos son quimiorreceptores que informan, no generan el ritmo.",
      "sec": "Control de la respiración"
    },
    {
      "id": "P-resp-44",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cuál de estas descripciones de movimientos respiratorios modificados es INCORRECTA?",
      "opts": [
        "El hipo: contracción espasmódica del diafragma con la rima glótica abierta.",
        "La tos: cierre completo de la rima glótica y una espiración fuerte posterior.",
        "La maniobra de Valsalva: espiración forzada con la rima glótica cerrada.",
        "El sollozo: serie de inspiraciones con cierre precoz de la rima glótica."
      ],
      "ans": 0,
      "expl": "La descripción incorrecta es la del hipo: la contracción espasmódica del diafragma va seguida de un cierre espasmódico de la rima glótica, no de una rima abierta. Las otras tres descripciones coinciden con la tabla del capítulo.",
      "sec": "Movimientos respiratorios modificados"
    },
    {
      "id": "P-resp-45",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un fumador de larga data pierde el retroceso elástico del pulmón y queda aire atrapado. ¿Qué cuadro describe?",
      "opts": [
        "Edema pulmonar, por líquido en el intersticio y los alvéolos.",
        "Enfisema, por fusión de alvéolos y pérdida de tejido elástico.",
        "Asma, por broncoconstricción que cede con broncodilatadores.",
        "Síndrome de dificultad respiratoria, por déficit de surfactante."
      ],
      "ans": 1,
      "expl": "En el enfisema se fusionan alvéolos y el tejido elástico es reemplazado por conectivo fibroso, así que se pierde el retroceso elástico y la espiración pasiva falla. El tabaco es su causa principal. El edema aumenta la distancia de difusión y el asma sube la resistencia de la vía aérea.",
      "sec": "Trastornos y correlatos que menciona el capítulo"
    },
    {
      "id": "P-resp-46",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "¿Cómo se calcula la capacidad residual funcional?",
      "opts": [
        "Volumen corriente + volumen de reserva inspiratoria.",
        "Volumen residual + volumen de reserva espiratoria.",
        "Volumen de reserva inspiratoria + volumen corriente + volumen de reserva espiratoria.",
        "Capacidad vital + volumen residual."
      ],
      "ans": 1,
      "expl": "La capacidad residual funcional es lo que queda en el pulmón tras una espiración normal: volumen residual + volumen de reserva espiratoria (2.400 mL). La trampa es confundirla con la capacidad vital, que no incluye el residual, o con la pulmonar total, que sí lo suma a la vital.",
      "sec": "Volúmenes y capacidades pulmonares"
    },
    {
      "id": "P-resp-47",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Durante la maniobra de Valsalva, al defecar o levantar peso, ¿qué estructuras laríngeas se cierran para retener el aire?",
      "opts": [
        "Los pliegues vocales, que son las cuerdas verdaderas inferiores.",
        "La epiglotis, que bascula sobre la entrada laríngea.",
        "Los pliegues vestibulares, o cuerdas vocales falsas superiores.",
        "Los cartílagos cuneiformes, que sostienen los pliegues vocales."
      ],
      "ans": 2,
      "expl": "Los pliegues vestibulares (cuerdas falsas) no producen sonido y sirven para contener la respiración al cerrarse, como en Valsalva. La trampa es elegir los pliegues vocales: son los que vibran para la voz, no los que retienen el aire.",
      "sec": "Laringe: nueve cartílagos y dos pares de pliegues"
    }
  ],
  "circulatorio": [
    {
      "id": "P-circ-1",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Se implanta una válvula protésica en posición mitral. ¿Cuál de estas descripciones corresponde a esa válvula?",
      "opts": [
        "Entre la aurícula derecha y el ventrículo derecho, con tres valvas que impiden el reflujo hacia la aurícula derecha en la diástole.",
        "Entre la aurícula izquierda y el ventrículo izquierdo, con dos valvas que impiden el reflujo a la aurícula en la sístole.",
        "En la salida del ventrículo izquierdo hacia la aorta, con tres valvas sin cuerdas tendinosas que se cierran al relajarse.",
        "Entre el ventrículo derecho y el tronco pulmonar, sostenida sólo por la presión de la sangre que la empuja hacia adelante."
      ],
      "ans": 1,
      "expl": "La mitral es la válvula auriculoventricular izquierda: tiene dos valvas y evita que la sangre vuelva del ventrículo a la aurícula cuando el ventrículo se contrae. La tricúspide es la derecha, y las sigmoideas están en las salidas de los ventrículos.",
      "sec": "Válvulas: cuatro, dos tipos, un solo objetivo"
    },
    {
      "id": "P-circ-2",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "La arteria pulmonar, ¿qué sangre lleva y desde dónde?",
      "opts": [
        "Sangre oxigenada, desde el ventrículo izquierdo hacia los tejidos del cuerpo.",
        "Sangre oxigenada, desde los pulmones hacia la aurícula izquierda.",
        "Sangre desoxigenada, desde el ventrículo derecho hacia los pulmones.",
        "Sangre desoxigenada, desde la aurícula derecha hacia el ventrículo izquierdo."
      ],
      "ans": 2,
      "expl": "Arteria es el vaso que sale del corazón, no el que lleva sangre oxigenada. La arteria pulmonar sale del ventrículo derecho con sangre desoxigenada hacia los pulmones. Las venas pulmonares son las que traen sangre oxigenada.",
      "sec": "La circulación, paso a paso, sin saltearse ninguna válvula"
    },
    {
      "id": "P-circ-3",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "En la circulación fetal, ¿qué estructura comunica la aurícula derecha con la izquierda, y cuál es su resto en el adulto?",
      "opts": [
        "El conducto arterioso, que une el tronco pulmonar con la aorta; en el adulto queda el ligamento arterioso.",
        "El foramen oval; en el adulto queda el ligamento arterioso, que cierra la comunicación entre las dos aurículas.",
        "El conducto arterioso, que comunica las aurículas; en el adulto queda la fosa oval en el tabique.",
        "El foramen oval, que comunica las aurículas; en el adulto queda la fosa oval en el tabique interauricular."
      ],
      "ans": 3,
      "expl": "Antes de nacer, el foramen oval comunica la aurícula derecha con la izquierda para saltear el pulmón, y su resto adulto es la fosa oval en el tabique interauricular. El ligamento arterioso es el resto del conducto arterioso, que va del tronco pulmonar a la aorta.",
      "sec": "La circulación, paso a paso, sin saltearse ninguna válvula"
    },
    {
      "id": "P-circ-4",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Un marcapasos reemplaza la función del nodo sinusal. ¿Cuál es el orden correcto por el que el impulso recorre el sistema de conducción?",
      "opts": [
        "Nodo sinusal → nodo auriculoventricular → haz de His → ramas → fibras de Purkinje.",
        "Nodo auriculoventricular → nodo sinusal → haz de His → ramas → fibras de Purkinje.",
        "Nodo sinusal → haz de His → nodo auriculoventricular → ramas → fibras de Purkinje.",
        "Nodo auriculoventricular → haz de His → nodo sinusal → fibras de Purkinje → ramas."
      ],
      "ans": 0,
      "expl": "El impulso nace en el nodo sinusal y pasa al nodo auriculoventricular, al haz de His, a las ramas y a las fibras de Purkinje. Cualquier opción que ponga el haz de His o Purkinje antes del nodo auriculoventricular está mal.",
      "sec": "Sistema de conducción y su lectura en el ECG"
    },
    {
      "id": "P-circ-5",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "En un electrocardiograma, ¿qué componente corresponde a la despolarización ventricular?",
      "opts": [
        "La onda P, que muestra la despolarización de las aurículas.",
        "El complejo QRS, que muestra la despolarización de los ventrículos.",
        "La onda T, que muestra la repolarización de las aurículas.",
        "El intervalo P-Q, que muestra la despolarización de los ventrículos completos."
      ],
      "ans": 1,
      "expl": "El complejo QRS es la despolarización de los ventrículos. La onda P es la despolarización auricular y la onda T es la repolarización ventricular. El intervalo P-Q es la conducción por las aurículas más el retraso en el nodo auriculoventricular, no un fenómeno ventricular.",
      "sec": "Sistema de conducción y su lectura en el ECG"
    },
    {
      "id": "P-circ-6",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Un atleta bien entrenado, comparado con una persona sedentaria, en reposo, ¿qué presenta?",
      "opts": [
        "Mayor gasto cardíaco de reposo, porque su corazón bombea más sangre por minuto.",
        "Menor volumen sistólico, compensado con una frecuencia cardíaca más alta.",
        "Mayor volumen sistólico y bradicardia de reposo, con un gasto cardíaco parecido.",
        "Igual volumen sistólico, pero mayor reserva cardíaca por hipertrofia del ventrículo."
      ],
      "ans": 2,
      "expl": "En reposo el gasto cardíaco lo fija la demanda metabólica, que es igual en el atleta y en el sedentario. Como el atleta tiene mayor volumen sistólico, para mantener el mismo producto VS × FC baja la frecuencia: bradicardia. Lo que sí es mayor en él es la reserva cardíaca.",
      "sec": "Gasto cardíaco y sus determinantes"
    },
    {
      "id": "P-circ-7",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿En qué región del cuerpo está el corazón?",
      "opts": [
        "En la cavidad pleural, rodeado de líquido que reduce la fricción durante cada latido.",
        "En la cavidad abdominal superior, apoyado sobre el diafragma y a la izquierda del estómago.",
        "En el pericardio fibroso, que lo separa de los pulmones y lo fija a la columna vertebral.",
        "En el mediastino, entre los pulmones, limitado por el esternón, la columna y el diafragma."
      ],
      "ans": 3,
      "expl": "El corazón está en el mediastino, la región entre los pulmones que va del esternón a la columna y de la primera costilla al diafragma. El pericardio es la bolsa que lo envuelve dentro del mediastino, no la región donde está.",
      "sec": "Ubicación: mediastino, no \"en el medio del pecho\""
    },
    {
      "id": "P-circ-8",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué capa de la pared cardíaca es la más gruesa y la que bombea la sangre?",
      "opts": [
        "El miocardio, que es tejido muscular cardíaco y forma la mayor parte de la masa del órgano.",
        "El epicardio, que es la hoja visceral del pericardio seroso y la capa más externa de la pared.",
        "El endocardio, que es la capa interna de endotelio y recubre las válvulas del corazón.",
        "El pericardio fibroso, que fija el corazón al diafragma y a los grandes vasos sanguíneos."
      ],
      "ans": 0,
      "expl": "El miocardio es el tejido muscular cardíaco: forma el grueso de la masa del órgano y es la capa que bombea. El epicardio es una capa serosa externa y el endocardio es la capa más interna, ninguna de las dos es la que se contrae.",
      "sec": "Pared cardíaca: tres capas, de afuera hacia adentro"
    },
    {
      "id": "P-circ-9",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué capa del corazón recubre las válvulas y se continúa con el endotelio de los grandes vasos?",
      "opts": [
        "El miocardio, que se extiende hasta las válvulas y tiene el espesor del ventrículo.",
        "El endocardio, que es una capa delgada de endotelio sobre tejido conjuntivo delgado.",
        "El epicardio, que es la hoja visceral del pericardio y se continúa con las válvulas.",
        "El pericardio parietal, que tapiza la cara interna del pericardio fibroso y los vasos."
      ],
      "ans": 1,
      "expl": "El endocardio es la capa más interna: un endotelio delgado sobre conjuntivo delgado, que recubre las válvulas y se continúa con el endotelio de los grandes vasos. Si la descripción dice mesotelio más conectivo, es epicardio, no endocardio.",
      "sec": "Pared cardíaca: tres capas, de afuera hacia adentro"
    },
    {
      "id": "P-circ-10",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué función cumple el pericardio fibroso, la capa más externa del pericardio?",
      "opts": [
        "Produce el líquido pericárdico que reduce la fricción entre las membranas durante cada latido.",
        "Recubre la cavidad pericárdica y se adhiere a la superficie externa del miocardio ventricular.",
        "Fija el corazón al diafragma y a los grandes vasos, e impide que se sobredistienda con el volumen.",
        "Forma las válvulas auriculoventriculares y sostiene las cuerdas tendinosas del corazón."
      ],
      "ans": 2,
      "expl": "El pericardio fibroso es conjuntivo irregular denso y poco elástico, y por eso fija el corazón al diafragma y a los grandes vasos y evita que se sobredistienda. El líquido que reduce la fricción está entre las hojas serosas, no lo produce el fibroso.",
      "sec": "Pericardio: tres capas y una cavidad"
    },
    {
      "id": "P-circ-11",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Por qué una pequeña hemorragia dentro del pericardio puede comprometer el llenado del corazón?",
      "opts": [
        "Porque el líquido pericárdico se coagula y bloquea las válvulas auriculoventriculares durante la diástole.",
        "Porque la sangre del pericardio se mezcla con la del miocardio y altera la contracción ventricular.",
        "Porque el epicardio se separa del miocardio y deja de transmitir la despolarización eléctrica.",
        "Porque el pericardio fibroso es poco elástico, y el líquido acumulado comprime las cámaras."
      ],
      "ans": 3,
      "expl": "Como el pericardio fibroso es poco elástico, no se estira de golpe cuando entra líquido o sangre. El líquido acumulado comprime las cámaras y les impide llenarse: es el taponamiento cardíaco. No tiene que ver con las válvulas ni con la conducción eléctrica.",
      "sec": "Pericardio: tres capas y una cavidad"
    },
    {
      "id": "P-circ-12",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Entre qué cavidades está la válvula tricúspide?",
      "opts": [
        "Entre la aurícula derecha y el ventrículo derecho, y tiene tres valvas.",
        "Entre la aurícula izquierda y el ventrículo izquierdo, y tiene dos valvas.",
        "Entre el ventrículo derecho y el tronco pulmonar, y tiene tres valvas sigmoideas.",
        "Entre el ventrículo izquierdo y la aorta, y no tiene cuerdas tendinosas."
      ],
      "ans": 0,
      "expl": "La tricúspide es la válvula auriculoventricular derecha: está entre la aurícula derecha y el ventrículo derecho y tiene tres valvas. La mitral es la izquierda y tiene dos. Las sigmoideas están entre cada ventrículo y su gran arteria.",
      "sec": "Válvulas: cuatro, dos tipos, un solo objetivo"
    },
    {
      "id": "P-circ-13",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué función cumplen las cuerdas tendinosas de las válvulas auriculoventriculares?",
      "opts": [
        "Abren la válvula cuando el ventrículo se relaja y deja entrar la sangre de la aurícula.",
        "Impiden que las valvas se evierten hacia la aurícula cuando el ventrículo se contrae.",
        "Cierran la válvula sigmoidea cuando la presión de la aorta supera la del ventrículo.",
        "Transmiten el impulso eléctrico desde el nodo auriculoventricular hasta el haz de His."
      ],
      "ans": 1,
      "expl": "Las cuerdas tendinosas y los músculos papilares impiden que las valvas se evierten hacia la aurícula, o sea sostienen la válvula cerrada. La válvula se cierra por la presión del ventrículo que se contrae, no por las cuerdas.",
      "sec": "Válvulas: cuatro, dos tipos, un solo objetivo"
    },
    {
      "id": "P-circ-14",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Por qué la pared del ventrículo izquierdo es unas tres veces más gruesa que la del ventrículo derecho?",
      "opts": [
        "Porque el ventrículo izquierdo expulsa un volumen de sangre mucho mayor que el derecho en cada latido.",
        "Porque el ventrículo derecho recibe más sangre desde la aurícula derecha y se estira menos durante la diástole.",
        "Porque debe generar más presión para vencer la mayor resistencia del circuito sistémico, que es más largo.",
        "Porque el circuito pulmonar es más largo y necesita un miocardio más grueso para bombear hasta los alvéolos."
      ],
      "ans": 2,
      "expl": "El ventrículo izquierdo tiene la pared unas tres veces más gruesa porque tiene que generar más presión para vencer la resistencia del circuito sistémico, que es más largo. Los dos ventrículos expulsan el mismo volumen: lo que cambia es la presión.",
      "sec": "Pared cardíaca: tres capas, de afuera hacia adentro"
    },
    {
      "id": "P-circ-15",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué tipo de sangre transportan las venas pulmonares hacia la aurícula izquierda?",
      "opts": [
        "Sangre desoxigenada, que vuelve del cuerpo por la vena cava superior y la inferior.",
        "Sangre mezclada, con oxígeno de los pulmones y CO2 del tejido de la misma circulación.",
        "Sangre desoxigenada, que vuelve de los pulmones después de atravesar los alvéolos.",
        "Sangre oxigenada, que vuelve de los pulmones después del intercambio en los alvéolos."
      ],
      "ans": 3,
      "expl": "Las cuatro venas pulmonares traen a la aurícula izquierda la sangre oxigenada, después de la hematosis en los capilares alveolares. La sangre desoxigenada llega al corazón por las venas cavas y el seno coronario, a la aurícula derecha.",
      "sec": "La circulación, paso a paso, sin saltearse ninguna válvula"
    },
    {
      "id": "P-circ-16",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cuántas ramas nacen del arco de la aorta, y cuáles son?",
      "opts": [
        "Tres: el tronco braquiocefálico, la carótida común izquierda y la subclavia izquierda.",
        "Dos: la carótida común derecha y la subclavia derecha, que irrigan los brazos.",
        "Cuatro: las dos carótidas comunes, las dos subclavias y la arteria pulmonar.",
        "Dos: la arteria coronaria derecha y la arteria coronaria izquierda, que parten de la aorta."
      ],
      "ans": 0,
      "expl": "Del arco de la aorta nacen tres ramas: el tronco braquiocefálico, la carótida común izquierda y la subclavia izquierda. Las coronarias nacen de la aorta ascendente, por encima de la válvula aórtica, y el tronco pulmonar sale del ventrículo derecho.",
      "sec": "Cardiovascular · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-circ-17",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Un corazón tiene una frecuencia de 75 latidos por minuto. ¿Cuánto dura cada ciclo cardíaco completo?",
      "opts": [
        "0,4 segundos, que es el tiempo de la sístole ventricular completa.",
        "0,8 segundos, repartidos en sístole auricular, ventricular y relajación.",
        "1,2 segundos, que es el tiempo de la diástole más la sístole auricular.",
        "0,3 segundos, que es el tiempo que dura la eyección ventricular."
      ],
      "ans": 1,
      "expl": "A 75 latidos por minuto el ciclo completo dura 0,8 s: 0,1 s de sístole auricular, 0,3 s de sístole ventricular y 0,4 s de relajación. Las otras duraciones corresponden solo a fases parciales del ciclo.",
      "sec": "Ciclo cardíaco y ruidos"
    },
    {
      "id": "P-circ-18",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué causa el primer ruido cardíaco, el 'lub'?",
      "opts": [
        "El cierre de las válvulas sigmoideas, al terminar la sístole ventricular.",
        "La apertura de la válvula mitral, cuando la sangre pasa a la aurícula izquierda.",
        "El cierre de las válvulas auriculoventriculares al comenzar la sístole.",
        "La contracción de las aurículas, que empuja la sangre hacia los ventrículos."
      ],
      "ans": 2,
      "expl": "El primer ruido, el lub, es el cierre de las válvulas auriculoventriculares al empezar la sístole ventricular. El segundo, el dup, es el cierre de las sigmoideas al terminarla. Los ruidos son cierres: la apertura de una válvula sana es silenciosa.",
      "sec": "Ciclo cardíaco y ruidos"
    },
    {
      "id": "P-circ-19",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cuál es el gasto cardíaco aproximado en reposo, con un volumen sistólico de 70 mL y 75 latidos por minuto?",
      "opts": [
        "Unos 1,5 L por minuto, que es el gasto de un ventrículo durante la sístole auricular.",
        "Unos 10 L por minuto, que es el doble de la volemia por el esfuerzo en reposo.",
        "Unos 20 L por minuto, que es el gasto de los dos ventrículos sumados en cada ciclo.",
        "Unos 5,25 L por minuto, que es toda la volemia que pasa por el corazón en un minuto."
      ],
      "ans": 3,
      "expl": "El gasto cardíaco es GC = VS × FC, es decir 70 mL × 75 lpm, unos 5,25 L/min, que equivale a toda la volemia en un minuto. Los otros valores no salen de ese cálculo.",
      "sec": "Gasto cardíaco y sus determinantes"
    },
    {
      "id": "P-circ-20",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué relación describe la ley de Frank-Starling?",
      "opts": [
        "Cuanto más se llena el ventrículo, más se estiran sus fibras y más fuerza tienen al contraerse.",
        "Cuanto más presión tiene la aorta, más sangre expulsa el ventrículo izquierdo en cada latido.",
        "Cuanto más rápida es la frecuencia cardíaca, mayor es el volumen sistólico de cada ventrículo.",
        "Cuanto más inerva el simpático al corazón, menor es la fuerza de contracción de las fibras."
      ],
      "ans": 0,
      "expl": "La ley de Frank-Starling dice que cuanto más se llena el ventrículo, más se estiran sus fibras y con más fuerza se contraen, dentro de un límite. Es el mecanismo que iguala el gasto de los dos ventrículos. Una presión aórtica alta es poscarga y baja el volumen sistólico.",
      "sec": "Gasto cardíaco y sus determinantes"
    },
    {
      "id": "P-circ-21",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué tipo de pared tiene la aorta, por su composición histológica?",
      "opts": [
        "Una pared muscular, con músculo liso abundante en la media que regula el calibre de la luz.",
        "Una pared elástica, con láminas elásticas en la media que almacenan energía en sístole.",
        "Una pared de capilares continuos, con endotelio sin poros y lámina basal continua.",
        "Una pared de sinusoides, con lámina basal discontinua que permite el paso de células."
      ],
      "ans": 1,
      "expl": "La aorta es una arteria elástica: su media tiene láminas elásticas fenestradas. Se dilata en sístole almacenando energía y retrocede en diástole, y así convierte un flujo pulsátil en uno más continuo. El músculo liso abundante es propio de las arterias musculares.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-22",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué tipo de capilar tiene poros en el endotelio y una lámina basal continua, como el que se encuentra en el glomérulo renal?",
      "opts": [
        "El capilar continuo, sin poros y con uniones estrechas, presente en el músculo y el pulmón.",
        "El sinusoide, con luz amplia, aberturas grandes y lámina basal ausente o discontinua.",
        "El capilar fenestrado, con poros de 70 a 100 nm en el endotelio y lámina basal continua.",
        "El capilar linfático, con válvulas que dirigen el líquido intersticial hacia los ganglios."
      ],
      "ans": 2,
      "expl": "El capilar fenestrado tiene poros de unos 70 a 100 nm en el propio endotelio y conserva la lámina basal continua, como en el glomérulo renal. Por eso filtra plasma pero retiene proteínas. El sinusoide, en cambio, tiene la lámina basal ausente o discontinua.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-23",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿En qué región del cuerpo se concentran las válvulas venosas, que impiden el reflujo de la sangre?",
      "opts": [
        "En las grandes venas del tórax, que están cerca del corazón y reciben la presión intratorácica.",
        "En las venas pulmonares, que llevan sangre oxigenada hacia la aurícula izquierda.",
        "En las arterias elásticas, para que la sangre no retroceda durante la diástole.",
        "En las venas de los miembros inferiores, porque la sangre sube contra la gravedad."
      ],
      "ans": 3,
      "expl": "Las válvulas venosas abundan en los miembros inferiores porque la presión de la sangre venosa es baja y de pie debe subir contra la gravedad. Hacen que el empuje de la bomba muscular sea unidireccional. Las grandes venas del tórax y del abdomen no tienen válvulas.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-24",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿De qué estructura nacen las arterias coronarias?",
      "opts": [
        "Del arco de la aorta, entre el tronco braquiocefálico y la carótida izquierda.",
        "De la aorta ascendente, apenas por encima de la válvula aórtica.",
        "Del tronco pulmonar, a la altura de la válvula pulmonar y del ventrículo derecho.",
        "De la aurícula izquierda, por las venas pulmonares que llegan a ella."
      ],
      "ans": 1,
      "expl": "Las arterias coronarias derecha e izquierda son las primeras ramas de la aorta: nacen de la aorta ascendente, apenas por encima de la válvula aórtica. No salen del arco ni del tronco pulmonar.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-25",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué vaso drena la mayor parte de la sangre venosa del propio corazón?",
      "opts": [
        "La vena cava superior, que llega a la aurícula derecha por el lado derecho.",
        "La vena pulmonar izquierda, que lleva la sangre oxigenada a la aurícula izquierda.",
        "El seno coronario, que desemboca en la aurícula derecha.",
        "La arteria coronaria derecha, que retorna la sangre venosa al tronco pulmonar."
      ],
      "ans": 2,
      "expl": "La mayor parte de la sangre venosa del corazón vuelve por las venas cardíacas al seno coronario, que desemboca en la aurícula derecha. Las arterias coronarias llevan sangre hacia el miocardio, no la retornan.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-26",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué tipo de célula del corazón tiene la mayor cantidad de mitocondrias por célula?",
      "opts": [
        "La fibra esquelética, que tiene más mitocondrias por la contracción voluntaria.",
        "La fibra del músculo liso de los vasos, que necesita energía para mantener el tono.",
        "La célula endotelial del endocardio, que consume energía para el intercambio.",
        "La fibra cardíaca, que tiene más mitocondrias que las fibras esqueléticas y lisas."
      ],
      "ans": 3,
      "expl": "La fibra cardíaca tiene el mayor número de mitocondrias por célula de los tres tipos musculares. Es coherente con que el corazón sea un órgano estrictamente aeróbico, que en reposo depende de la respiración celular aeróbica.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-27",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué porcentaje aproximado del ATP cardíaco proviene de la oxidación de ácidos grasos en reposo?",
      "opts": [
        "Alrededor del 60 %, mientras que la glucosa aporta cerca del 35 %.",
        "Alrededor del 10 %, porque la glucosa es la fuente principal del corazón.",
        "Alrededor del 35 %, igual que la glucosa, porque ambas se usan por partes iguales.",
        "Alrededor del 90 %, porque el corazón depende casi por completo de los ácidos grasos."
      ],
      "ans": 0,
      "expl": "En reposo el ATP del corazón viene sobre todo de la oxidación de ácidos grasos, alrededor del 60 %, y de la glucosa, cerca del 35 %. Los aportes de ácido láctico, aminoácidos y cuerpos cetónicos son menores.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-28",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué le ocurre a la perfusión de las coronarias durante una taquicardia?",
      "opts": [
        "Aumenta la perfusión, porque la sangre llega más rápido y en más cantidad al miocardio.",
        "Se acorta sobre todo la diástole, que es la fase de perfusión, y aumenta la demanda.",
        "No cambia, porque la perfusión depende sólo de la presión de la aorta, no del ritmo.",
        "Se perfunde sobre todo en la sístole, porque el músculo se relaja y se llena de sangre."
      ],
      "ans": 1,
      "expl": "El miocardio se perfunde sobre todo en diástole, porque en sístole el músculo comprime las ramas intramurales. La taquicardia acorta sobre todo la diástole, de modo que sube la demanda y baja la ventana de aporte a la vez: así se explica la angina de esfuerzo.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-29",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué tipo de capilar se encuentra en el hígado, el bazo y la médula ósea?",
      "opts": [
        "El capilar continuo, sin poros y con lámina basal continua en el músculo y el pulmón.",
        "El capilar fenestrado, con poros de 70 a 100 nm que filtran el plasma en el glomérulo.",
        "El capilar sinusoide, con luz amplia, grandes aberturas y lámina basal discontinua.",
        "El capilar linfático, con válvulas que dirigen el líquido intersticial hacia los ganglios."
      ],
      "ans": 2,
      "expl": "Los sinusoides están en el hígado, el bazo, la médula ósea roja y la adenohipófisis. Tienen luz amplia, grandes aberturas y lámina basal ausente o discontinua. El fenestrado, con poros de 70 a 100 nm, es el del glomérulo renal.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-30",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué sucede con los glóbulos rojos al pasar por los capilares?",
      "opts": [
        "Se deforman sólo en las arteriolas y los capilares tienen luz de más de 50 µm.",
        "Se detienen en el capilar para dejar pasar a los leucocitos y luego siguen su curso.",
        "Se mezclan con el plasma intersticial, porque el capilar no tiene endotelio continuo.",
        "Pasan casi en fila india, porque el capilar tiene un diámetro de unos 5 a 10 µm."
      ],
      "ans": 3,
      "expl": "El capilar mide unos 5 a 10 µm de diámetro, por eso los glóbulos rojos pasan casi en fila india. Los capilares están formados solo por endotelio y lámina basal, sin media ni adventicia.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-31",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "En un corazón trasplantado, con los nervios vagos seccionados, la frecuencia de reposo queda en unos 100 latidos por minuto. ¿Qué demuestra ese valor?",
      "opts": [
        "Que los nervios aceleradores quedan hiperactivos y aceleran el nódulo SA",
        "Que las fibras de Purkinje pasan a comandar el ritmo porque el nódulo SA deja de disparar",
        "Que el nódulo AV dispara solo, ya que sin el vago pierde su retraso y se vuelve marcapasos",
        "Que 100 por minuto es el ritmo propio del nódulo SA, que el vago frena normalmente"
      ],
      "ans": 3,
      "expl": "El nódulo SA es el marcapasos natural y dispara solo a unos 100 por minuto. Sin los vagos desaparece el freno vagal y esa es la frecuencia que queda. La frecuencia normal de reposo, más baja, es el nódulo SA frenado por el tono vagal.",
      "sec": "Sistema de conducción y su lectura en el ECG"
    },
    {
      "id": "P-circ-32",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cuál de estas afirmaciones sobre las fases isovolumétricas del ciclo cardíaco NO es correcta?",
      "opts": [
        "En la contracción isovolumétrica las sigmoideas se abren y sale el volumen",
        "En la contracción isovolumétrica sube la presión ventricular y el volumen no cambia",
        "En la relajación isovolumétrica cae la presión ventricular y el volumen no cambia",
        "En ambas fases isovolumétricas las cuatro válvulas permanecen cerradas"
      ],
      "ans": 0,
      "expl": "En la contracción isovolumétrica las cuatro válvulas están cerradas, así que todavía no sale sangre. Las sigmoideas se abren recién en la fase siguiente, la eyección ventricular, y ahí sale el volumen sistólico.",
      "sec": "Ciclo cardíaco y ruidos"
    },
    {
      "id": "P-circ-33",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cómo se cierran las válvulas sigmoideas, que no tienen cuerdas tendinosas ni músculos papilares?",
      "opts": [
        "Los músculos papilares tensan las valvas cuando el ventrículo se contrae con fuerza",
        "Al relajarse el ventrículo, la sangre que refluye desde la arteria llena las valvas",
        "La contracción de la aurícula empuja las valvas hacia la arteria y las cierra",
        "El haz de His ordena el cierre de las valvas apenas termina la eyección ventricular"
      ],
      "ans": 1,
      "expl": "Las sigmoideas no tienen aparato de sostén. Al relajarse el ventrículo, la sangre que refluye desde la arteria llena las valvas y las cierra, y así impide que vuelva al ventrículo en la diástole. Los papilares y las cuerdas son propios de las válvulas auriculoventriculares.",
      "sec": "Válvulas: cuatro, dos tipos, un solo objetivo"
    },
    {
      "id": "P-circ-34",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué territorio irriga la arteria coronaria izquierda a través de sus ramas interventricular anterior y circunfleja?",
      "opts": [
        "Aurícula y ventrículo derechos, cara diafragmática y, en la mayoría, los nódulos SA y AV",
        "Las dos aurículas y el tabique interauricular, mediante la rama marginal",
        "Ventrículo izquierdo, tabique interventricular y aurícula izquierda, con sus dos ramas",
        "Todo el miocardio por igual, porque la derecha solo irriga las válvulas y los grandes vasos"
      ],
      "ans": 2,
      "expl": "La coronaria izquierda, con la interventricular anterior y la circunfleja, irriga el ventrículo izquierdo, el tabique interventricular y la aurícula izquierda. El territorio de la primera opción es el de la coronaria derecha, que tiene las ramas marginal e interventricular posterior.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    },
    {
      "id": "P-circ-35",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cuál de estas afirmaciones sobre las venas NO es correcta?",
      "opts": [
        "Su pared combina una túnica media delgada con una adventicia gruesa y luz amplia",
        "Actúan como reservorio: contienen cerca del 60-65% del volumen sanguíneo",
        "Las válvulas venosas son repliegues de la íntima y abundan en los miembros inferiores",
        "Las grandes venas del tórax y del abdomen tienen válvulas para vencer la gravedad"
      ],
      "ans": 3,
      "expl": "Las grandes venas del tórax y del abdomen no tienen válvulas: están cerca del corazón y la presión intratorácica y la bomba respiratoria ayudan. Las válvulas abundan en las venas de los miembros inferiores, donde la sangre sube contra la gravedad.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-36",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué hay en la cavidad pericárdica y para qué sirve?",
      "opts": [
        "Aire a baja presión, que amortigua el golpe del corazón contra el esternón y la columna",
        "Tejido conjuntivo denso, que fija el corazón al diafragma y a los grandes vasos",
        "Líquido pericárdico en un espacio virtual entre las hojas serosas, que reduce la fricción",
        "Sangre venosa del propio corazón, que drena por el seno coronario hacia la aurícula"
      ],
      "ans": 2,
      "expl": "La cavidad pericárdica es un espacio virtual entre las dos hojas serosas, con líquido pericárdico que reduce la fricción durante cada latido. Fijar el corazón al diafragma y a los vasos es función del pericardio fibroso, no del contenido de la cavidad.",
      "sec": "Pericardio: tres capas y una cavidad"
    },
    {
      "id": "P-circ-37",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Dónde se encuentran los músculos pectíneos?",
      "opts": [
        "En la pared anterior de la aurícula derecha y en las orejuelas, como rebordes",
        "En el vértice libre de los ventrículos, donde se insertan las cuerdas tendinosas",
        "En el tabique interventricular, donde forman las ramas del sistema de conducción",
        "En la pared interna de los ventrículos, como relieves musculares irregulares"
      ],
      "ans": 0,
      "expl": "Los pectíneos son rebordes musculares paralelos, como dientes de peine, en la pared anterior de la aurícula derecha y en las orejuelas. Pectíneos corresponden a aurículas; trabéculas carnosas y músculos papilares corresponden a ventrículos.",
      "sec": "Cámaras, tabiques y accidentes internos"
    },
    {
      "id": "P-circ-38",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Un paciente con hipertensión arterial sostenida, ¿cómo ve afectado su volumen sistólico?",
      "opts": [
        "Sube la precarga, por lo que aumentan el volumen sistólico y el gasto cardíaco",
        "Sube la poscarga, por lo que bajan el volumen sistólico y el gasto cardíaco",
        "Baja la contractilidad de las fibras, que es lo que define a la hipertensión",
        "El volumen sistólico no cambia, porque la poscarga solo actúa sobre la aurícula"
      ],
      "ans": 1,
      "expl": "La hipertensión sube la poscarga, que es la presión que hay que superar para abrir las sigmoideas, y eso baja el volumen sistólico y el gasto. Es lo contrario de la combinación que maximiza el volumen sistólico: más precarga, menos poscarga y más contractilidad.",
      "sec": "Gasto cardíaco y sus determinantes"
    },
    {
      "id": "P-circ-39",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Cuál es el resto adulto del conducto arterioso fetal?",
      "opts": [
        "La fosa oval, depresión del tabique entre las dos aurículas",
        "El surco coronario, límite circular entre aurículas y ventrículos",
        "El seno coronario, que desemboca en la aurícula derecha del corazón",
        "El ligamento arterioso, que une el tronco pulmonar con la aorta"
      ],
      "ans": 3,
      "expl": "El conducto arterioso llevaba sangre del tronco pulmonar a la aorta para saltear el pulmón fetal, y su resto adulto es el ligamento arterioso. La fosa oval es el resto del foramen oval, que es interauricular.",
      "sec": "La circulación, paso a paso, sin saltearse ninguna válvula"
    },
    {
      "id": "P-circ-40",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "En una descripción histológica se lee mesotelio más tejido conjuntivo para la capa más externa de la pared cardíaca. ¿De qué capa se trata?",
      "opts": [
        "Pericardio fibroso, la capa más externa y poco elástica del saco pericárdico",
        "Epicardio, que es lo mismo que la hoja visceral del pericardio seroso",
        "Endocardio, la capa más interna, que recubre las válvulas del corazón",
        "Miocardio, la capa muscular que forma el grueso de la masa del órgano"
      ],
      "ans": 1,
      "expl": "Mesotelio más conectivo describe al epicardio, que es la hoja visceral del pericardio seroso y la capa más externa de la pared. El pericardio fibroso es conjuntivo denso poco elástico, y el endocardio es endotelio delgado sobre conjuntivo delgado.",
      "sec": "Pared cardíaca: tres capas, de afuera hacia adentro"
    },
    {
      "id": "P-circ-41",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué función cumple el nódulo auriculoventricular dentro del sistema de conducción?",
      "opts": [
        "Dispara solo a unos 100 por minuto y funciona como marcapasos natural del corazón",
        "Conduce el impulso directamente a las fibras contráctiles del miocardio ventricular",
        "Introduce un retraso que deja vaciarse a las aurículas antes del arranque ventricular",
        "Es la única vía eléctrica que atraviesa el esqueleto fibroso hacia los ventrículos"
      ],
      "ans": 2,
      "expl": "El nódulo AV introduce un retraso para que las aurículas terminen de vaciarse antes de la contracción ventricular. El marcapasos es el nódulo SA, la única vía hacia los ventrículos es el haz de His y las fibras de Purkinje son las que llegan a las fibras contráctiles.",
      "sec": "Sistema de conducción y su lectura en el ECG"
    },
    {
      "id": "P-circ-42",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Se analiza un capilar del sistema nervioso central, base de la barrera hematoencefálica. ¿Qué tipo de capilar es?",
      "opts": [
        "Fenestrado, con poros de unos 70 a 100 nm en el propio endotelio",
        "Sinusoide, con luz amplia y lámina basal ausente o discontinua",
        "Continuo, con endotelio sin poros y unido por uniones estrechas",
        "Vénula poscapilar, con endotelio de uniones laxas y pericitos"
      ],
      "ans": 2,
      "expl": "El capilar continuo tiene endotelio sin poros, unido por uniones estrechas, y lámina basal continua. Está en el músculo, el pulmón, la piel y el sistema nervioso central, y es la base de la barrera hematoencefálica.",
      "sec": "Histología de los vasos"
    },
    {
      "id": "P-circ-43",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué estructura de los discos intercalares da el acoplamiento eléctrico que hace del miocardio un sincitio funcional?",
      "opts": [
        "Los desmosomas, que dan la unión mecánica y mantienen juntas las fibras",
        "Las uniones de hendidura (gap), por donde pasa la despolarización entre fibras",
        "Las trabéculas carnosas, que conducen el impulso entre las fibras vecinas",
        "Los canales lentos de calcio, que sostienen la fase de meseta del potencial"
      ],
      "ans": 1,
      "expl": "Las uniones de hendidura dan el acoplamiento eléctrico: si se despolariza una fibra, se despolarizan todas. Los desmosomas dan solo la unión mecánica. Por eso un parche cardíaco debe acoplarse eléctricamente al miocardio del receptor.",
      "sec": "El miocardio como tejido: por qué hay que reemplazarlo y no repararlo"
    },
    {
      "id": "P-circ-44",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Al auscultar un corazón se detecta un soplo. ¿Qué indica?",
      "opts": [
        "Una alteración de las válvulas, no del miocardio ni de los nódulos",
        "Una falla del nódulo sinusal, que deja de marcar el ritmo del corazón",
        "Una alteración del miocardio, que se contrae con menos fuerza que lo normal",
        "Un cierre normal de las sigmoideas, que se oye al terminar la sístole"
      ],
      "ans": 0,
      "expl": "Los soplos indican una alteración de las válvulas, no del miocardio ni de los nódulos. El cierre normal de las sigmoideas es el segundo ruido, el dup, y no es un soplo.",
      "sec": "Ciclo cardíaco y ruidos"
    },
    {
      "id": "P-circ-45",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "¿Qué región del cuerpo drena la vena cava inferior?",
      "opts": [
        "Cabeza, cuello, brazos y pared del tórax, y llega a la aurícula derecha",
        "El propio corazón, que drena por el seno coronario hacia la aurícula izquierda",
        "Abdomen, pelvis y piernas, y desemboca en la aurícula derecha",
        "Los pulmones, por cuatro venas que llegan a la aurícula izquierda"
      ],
      "ans": 2,
      "expl": "La vena cava inferior trae la sangre del abdomen, la pelvis y las piernas a la aurícula derecha. La cava superior trae la de la cabeza, el cuello, los brazos y la pared del tórax. Los pulmones drenan por las venas pulmonares a la aurícula izquierda.",
      "sec": "Cardiovascular · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-circ-46",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "En el ventrículo izquierdo se observa una trabécula carnosa en forma de puente muscular, con sus dos extremos insertados en la pared miocárdica y la porción media libre. ¿A qué orden de músculo papilar corresponde?",
      "opts": [
        "Primer orden: base en la pared y vértice libre donde se insertan las cuerdas tendinosas.",
        "Primer orden: relieve o engrosamiento de la pared miocárdica sin porción libre.",
        "Segundo orden: puente muscular con ambos extremos fijos a la pared y porción media libre.",
        "Tercer orden: puente muscular que une las dos aurículas a través del tabique."
      ],
      "ans": 2,
      "expl": "El segundo orden son las trabéculas carnosas en puente: dos extremos fijos y la porción media libre. El primero tiene la base en la pared y el vértice libre con las cuerdas; el tercero son sólo relieves de la pared. Ninguno es auricular.",
      "sec": "Músculos papilares: tres órdenes"
    },
    {
      "id": "P-circ-47",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Una obstrucción de la arteria coronaria derecha cerca de su origen compromete el riego de varias estructuras. ¿Cuál de estas NO depende de ese vaso en la mayoría de las personas?",
      "opts": [
        "El tabique interventricular anterior y la pared del ventrículo izquierdo, regados por la coronaria izquierda.",
        "La aurícula derecha y el ventrículo derecho.",
        "La cara diafragmática del corazón, regada por la rama interventricular posterior.",
        "El nódulo sinoauricular y el nódulo auriculoventricular, en la mayoría de las personas."
      ],
      "ans": 0,
      "expl": "El tabique interventricular anterior y el ventrículo izquierdo dependen de la coronaria izquierda (interventricular anterior y circunfleja); solo el tercio posterior del tabique lo riega la derecha. La derecha riega aurícula y ventrículo derechos, cara diafragmática y, en la mayoría, los nódulos SA y AV. La trampa es pedir lo que NO depende.",
      "sec": "Circulación coronaria: el corazón se riega a sí mismo, y en diástole"
    }
  ],
  "digestivo": [
    {
      "id": "P-dige-1",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Una célula del estómago secreta ácido clorhídrico y factor intrínseco. ¿Cómo se llama y qué consecuencia clínica tiene su destrucción?",
      "opts": [
        "Célula parietal; su destrucción produce hipoclorhidria y anemia perniciosa por falta de vitamina B12 en sangre.",
        "Célula parietal; su destrucción causa sólo hipoclorhidria, sin repercusión sobre la absorción de la vitamina B12.",
        "Célula principal; su destrucción causa falta de pepsinógeno y de vitamina B12, en la misma proporción en el estómago.",
        "Célula G; su destrucción reduce la gastrina en sangre y aumenta la secreción de ácido clorhídrico en la luz."
      ],
      "ans": 0,
      "expl": "La célula parietal (oxíntica) secreta HCl y factor intrínseco, y este último es imprescindible para absorber vitamina B12 en el íleon. Por eso, si se destruye, no hay sólo hipoclorhidria: aparece anemia perniciosa. La trampa es la opción que habla de hipoclorhidria a secas.",
      "sec": "Estómago"
    },
    {
      "id": "P-dige-2",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Por qué el páncreas secreta tripsinógeno y no tripsina?",
      "opts": [
        "Porque la tripsina actúa sólo sobre grasas, y el tripsinógeno sobre las proteínas de la dieta.",
        "Porque se activa en el duodeno por la enterocinasa, y así no digiere a la célula que la produce.",
        "Porque el tripsinógeno es más estable en el jugo pancreático alcalino que la tripsina ya formada.",
        "Porque la secretina lo activa en la sangre antes de que llegue al intestino delgado, donde actúa."
      ],
      "ans": 1,
      "expl": "Las proteasas salen del páncreas como zimógenos y se activan recién en la luz del duodeno, donde la enterocinasa convierte el tripsinógeno en tripsina. Si se activaran antes, digerirían a la célula que las produce, y eso es la pancreatitis.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-3",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál es la capa externa del esófago y por qué no tiene mesotelio?",
      "opts": [
        "Serosa, porque el esófago está tapizado por peritoneo visceral que secreta líquido lubricante.",
        "Serosa, porque el esófago está fijo a la pared posterior mediante un mesenterio propio.",
        "Adventicia, porque el esófago es retroperitoneal y está cubierto sólo por tejido conectivo.",
        "Adventicia, porque toda su muscular es esquelética y no necesita una capa de mesotelio."
      ],
      "ans": 2,
      "expl": "La capa externa es serosa si el órgano está tapizado por peritoneo (con mesotelio) y adventicia si es retroperitoneal o está fuera de la cavidad. El esófago es casi todo adventicia, o sea sólo tejido conectivo y sin mesotelio. Por eso no tiene superficie deslizante y queda fijo.",
      "sec": "Las cuatro túnicas: el esqueleto de todo el tema"
    },
    {
      "id": "P-dige-4",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "En el hígado, ¿en qué sentido circulan la sangre y la bilis dentro del lobulillo?",
      "opts": [
        "Ambas van de la periferia al centro, la sangre por el sinusoide y la bilis por el canalículo.",
        "Ambas van del centro a la periferia, desde la vena centrolobulillar hacia las tríadas portales.",
        "La sangre va del centro a la periferia y la bilis va de la periferia al centro a través del sinusoide.",
        "La sangre va de la periferia (tríada) al centro del lobulillo, y la bilis va en sentido inverso."
      ],
      "ans": 3,
      "expl": "La sangre va de la periferia (tríada portal) al centro, a la vena centrolobulillar, por los sinusoides. La bilis hace el camino inverso, por los canalículos entre hepatocitos hasta los conductillos de la tríada. Es un intercambio a contracorriente, y la trampa es suponer que van juntas.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-5",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Por qué la absorción de los lípidos no sigue el mismo camino que la de los hidratos de carbono?",
      "opts": [
        "Salen como quilomicrones por el vaso quilífero y llegan por vía linfática, sin pasar por el hígado.",
        "Los lípidos se absorben en el estómago y pasan directo a la vena porta, junto con los carbohidratos.",
        "Se emulsionan con la pepsina gástrica y se absorben por el capilar de la vellosidad hacia la vena porta.",
        "Llegan al hígado por la arteria hepática, porque la vena porta sólo transporta carbohidratos y aminoácidos."
      ],
      "ans": 0,
      "expl": "Los lípidos se resintetizan como triglicéridos en el enterocito, se empaquetan en quilomicrones y salen por el vaso quilífero hacia la linfa, salteándose el hígado en el primer pasaje. Los hidratos de carbono y los aminoácidos, en cambio, van por el capilar de la vellosidad a la vena porta.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-6",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál es la función de las glándulas de Brunner?",
      "opts": [
        "Secretan jugo gástrico con HCl en la mucosa del duodeno para completar la digestión de proteínas.",
        "Secretan moco alcalino en la submucosa del duodeno, que neutraliza el quimo ácido que llega del estómago.",
        "Secretan bicarbonato en la mucosa del yeyuno y producen secretina por las células S de la cripta.",
        "Secretan lisozima en el fondo de las criptas del íleon para el control bacteriano de la luz intestinal."
      ],
      "ans": 1,
      "expl": "Las glándulas de Brunner están en la submucosa del duodeno, único tramo intestinal con glándulas submucosas, y secretan moco alcalino que neutraliza el quimo ácido. La lisozima no es de ellas: la secretan las células de Paneth, en el fondo de las criptas.",
      "sec": "Intestino delgado: los tres niveles de amplificación"
    },
    {
      "id": "P-dige-7",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuántos dientes tiene un adulto en la dentición permanente?",
      "opts": [
        "28 dientes: sin los terceros molares, que no siempre erupcionan en el adulto joven.",
        "30 dientes: en cada arcada, 2 incisivos, 1 canino, 2 premolares y 4 molares en total.",
        "32 dientes: 2 incisivos, 1 canino, 2 premolares y 3 molares en cada mitad de cada arcada.",
        "36 dientes: incluyendo los molares deciduos que persisten en el adulto sano."
      ],
      "ans": 2,
      "expl": "El adulto tiene 32 dientes: en cada mitad de cada arcada hay 2 incisivos, 1 canino, 2 premolares y 3 molares. La dentición decidua, en cambio, tiene 20 piezas.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-8",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué piezas ocupan el lugar de los molares de leche cuando se caen?",
      "opts": [
        "Los molares permanentes, que se ubican en el mismo lugar que los de leche.",
        "Los caninos, que se desplazan hacia atrás para ocupar el espacio libre.",
        "Los incisivos, que crecen en la zona posterior de la arcada dentaria.",
        "Los premolares, que no tienen antecesor en la dentición decidua."
      ],
      "ans": 3,
      "expl": "Los molares de leche son reemplazados por premolares, porque la dentición decidua no tiene premolares. Los molares permanentes no reemplazan a nada: erupcionan por detrás. Es contraintuitivo, y por eso se pregunta.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-9",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Por qué una caries no cicatriza?",
      "opts": [
        "Porque el esmalte es acelular y no se regenera, por ser el tejido más duro del cuerpo.",
        "Porque la dentina se calcifica por completo y no tiene vasos que puedan reparar el daño.",
        "Porque el cemento que recubre la raíz se disuelve con la saliva y no vuelve a formarse.",
        "Porque la pulpa, con vasos y nervios, se reemplaza por tejido conectivo sin función."
      ],
      "ans": 0,
      "expl": "El esmalte es el tejido más duro del cuerpo y es acelular, por lo tanto no se regenera y la caries no cicatriza. La dentina es conectivo calcificado, el cemento recubre la raíz y la pulpa tiene vasos y nervios, así que ninguno explica la falta de cicatrización.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-10",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué enzima de la saliva inicia la digestión del almidón en la boca?",
      "opts": [
        "La lipasa lingual, que actúa sobre los triglicéridos de la comida en la boca.",
        "La amilasa salival, que empieza a romper el almidón mientras el alimento está en la boca.",
        "La pepsina, que se activa con el ácido clorhídrico que llega desde el estómago.",
        "La tripsina, que se secreta en la saliva para degradar las proteínas de la dieta."
      ],
      "ans": 1,
      "expl": "La amilasa salival empieza la digestión del almidón ya en la boca. La pepsina es gástrica y la tripsina es pancreática, y la lipasa lingual actúa sobre grasas, no sobre almidón.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-11",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuántas fases tiene la deglución, y cuál es la única voluntaria?",
      "opts": [
        "Dos: la bucal y la faríngea son voluntarias, y la esofágica es involuntaria.",
        "Cuatro: la bucal, la faríngea, la esofágica y la gástrica, todas voluntarias.",
        "Tres: la bucal es voluntaria, y la faríngea y la esofágica son involuntarias.",
        "Tres: la bucal, la gástrica y la intestinal, con la faríngea siempre voluntaria."
      ],
      "ans": 2,
      "expl": "La deglución tiene tres fases: la bucal es voluntaria, y la faríngea y la esofágica son involuntarias. La trampa es creer que la faríngea también se controla a voluntad.",
      "sec": "Deglución y esófago"
    },
    {
      "id": "P-dige-12",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué tipo de músculo forma el esfínter esofágico superior?",
      "opts": [
        "Músculo liso, igual que el esfínter inferior, que es el único que se contrae involuntariamente.",
        "Músculo cardíaco, que se contrae de forma rítmica y se conecta con el nodo sinusal.",
        "Músculo mixto, con fibras lisas y esqueléticas en proporción equivalente en todo el esófago.",
        "Músculo esquelético, porque el tercio superior del esófago tiene musculatura voluntaria."
      ],
      "ans": 3,
      "expl": "El esfínter esofágico superior es de músculo esquelético y el inferior es de músculo liso. Es coherente con la muscular del esófago, que es esquelética en el tercio superior.",
      "sec": "Deglución y esófago"
    },
    {
      "id": "P-dige-13",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué ocurre en el reflujo gastroesofágico?",
      "opts": [
        "El esfínter inferior no cierra bien, y el contenido ácido sube a un epitelio que no lo tolera.",
        "El esfínter superior se abre durante el sueño y permite que el bolo alimenticio vuelva a la boca.",
        "El píloro se cierra y el quimo se acumula en el duodeno, subiendo luego hacia el estómago.",
        "La válvula ileocecal deja pasar el contenido del colon hacia el intestino delgado."
      ],
      "ans": 0,
      "expl": "En el reflujo, el esfínter esofágico inferior no cierra bien y el contenido gástrico ácido sube hacia un epitelio plano estratificado que no está preparado para el ácido. Ojo: el esfínter inferior es de músculo liso, y el de músculo esquelético es el superior.",
      "sec": "Deglución y esófago"
    },
    {
      "id": "P-dige-14",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Dónde se ubica el fundus del estómago?",
      "opts": [
        "En la salida del estómago, por delante del píloro y del antro pilórico.",
        "En la cúpula, por encima de la entrada del estómago, junto al cardias.",
        "En el cuerpo del estómago, entre la curvatura menor y la curvatura mayor.",
        "En el antro, que se continúa con el conducto pilórico y el esfínter pilórico."
      ],
      "ans": 1,
      "expl": "El fundus es la cúpula del estómago, por encima de la entrada (el cardias). El cuerpo está en el medio, y la salida (antro, conducto pilórico y esfínter pilórico) se abre hacia el duodeno.",
      "sec": "Estómago"
    },
    {
      "id": "P-dige-15",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿De qué curvatura del estómago cuelga el omento mayor?",
      "opts": [
        "De la curvatura menor, la cóncava, que mira hacia el hígado y el diafragma.",
        "Del fundus, que es la cúpula por encima de la entrada del estómago.",
        "De la curvatura mayor, que es convexa y se ubica a la izquierda del órgano.",
        "Del píloro, que se abre hacia el duodeno y permite el paso del quimo."
      ],
      "ans": 2,
      "expl": "El omento mayor (epiplón mayor) cuelga de la curvatura mayor, que es la convexa y está a la izquierda. La curvatura menor es cóncava y está a la derecha, y de ella parte el epiplón menor hacia el hígado.",
      "sec": "Estómago"
    },
    {
      "id": "P-dige-16",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué células de las criptas intestinales secretan lisozima y defensinas para el control bacteriano?",
      "opts": [
        "Las células caliciformes, que secretan moco en las vellosidades del yeyuno.",
        "Las células enteroendocrinas S, que secretan secretina ante el quimo ácido.",
        "Las células G, que secretan gastrina en el antro gástrico y en el duodeno.",
        "Las células de Paneth, ubicadas en el fondo de las criptas del intestino delgado."
      ],
      "ans": 3,
      "expl": "Las células de Paneth, en el fondo de las criptas, secretan lisozima y defensinas para el control bacteriano. Las caliciformes secretan moco, las S secretina y las G gastrina.",
      "sec": "Intestino delgado: los tres niveles de amplificación"
    },
    {
      "id": "P-dige-17",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿En qué tramo del intestino delgado se encuentran las placas de Peyer, folículos linfáticos agregados?",
      "opts": [
        "En el íleon, donde la carga bacteriana es mayor y hay vigilancia inmunitaria.",
        "En el duodeno, junto a las glándulas de Brunner de la submucosa.",
        "En el yeyuno, donde la absorción de lípidos es más intensa.",
        "En el colon transverso, junto a las tenias del colon y los haustros."
      ],
      "ans": 0,
      "expl": "Las placas de Peyer, folículos linfáticos agregados, están en el íleon, donde la carga bacteriana es mayor y hace falta vigilancia inmunitaria. El duodeno se distingue, en cambio, por las glándulas de Brunner.",
      "sec": "Intestino delgado: los tres niveles de amplificación"
    },
    {
      "id": "P-dige-18",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál de estos rasgos es propio del intestino grueso y no aparece en el delgado?",
      "opts": [
        "Las vellosidades, que aumentan la superficie de absorción de los nutrientes del quimo.",
        "Las tenias del colon, tres bandas longitudinales de la capa muscular condensada.",
        "Las placas de Peyer, que son folículos linfáticos agregados en la mucosa del íleon.",
        "Las criptas profundas con células de Paneth, que secretan lisozima en la luz intestinal."
      ],
      "ans": 1,
      "expl": "Las tenias del colon son tres bandas longitudinales que salen de la condensación de la capa longitudinal de la muscular, y son un rasgo exclusivo del intestino grueso. Las vellosidades y las placas de Peyer son del delgado, y las células de Paneth también están en sus criptas.",
      "sec": "Intestino grueso"
    },
    {
      "id": "P-dige-19",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué célula del hígado fagocita los desechos de la sangre que llega por la vena porta?",
      "opts": [
        "Los hepatocitos, que desaminan los aminoácidos y producen urea en la mitocondria.",
        "Las células estrelladas, que almacenan vitamina A y producen el colágeno del hígado.",
        "Las células de Kupffer, macrófagos que patrullan los sinusoides hepáticos.",
        "Las células de Paneth, que se encuentran en las criptas del intestino delgado."
      ],
      "ans": 2,
      "expl": "Las células de Kupffer son los macrófagos que patrullan los sinusoides hepáticos y fagocitan. Los hepatocitos hacen el metabolismo, y las células de Paneth son del intestino, no del hígado.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-20",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué hace el hígado con la bilirrubina, pigmento que se produce al degradar el hemo?",
      "opts": [
        "La almacena en el glucógeno del hepatocito para liberarla durante el ayuno prolongado.",
        "La convierte en urea, que es menos tóxica, y la excreta por la orina en lugar de la bilis.",
        "La reabsorbe en el colon y la devuelve a la sangre por la vena porta durante la digestión.",
        "La excreta con la bilis, sin almacenarla, y en el intestino se transforma en estercobilina."
      ],
      "ans": 3,
      "expl": "El hígado excreta la bilirrubina con la bilis y no la almacena; en el intestino se transforma en estercobilina, que da color a las heces. La trampa es que sí almacena glucógeno, vitaminas y hierro, pero la urea es producto del metabolismo de las proteínas.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-21",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué enzima del páncreas exocrino digiere el almidón y el glucógeno en disacáridos y dextrinas?",
      "opts": [
        "La amilasa pancreática, que actúa sobre el almidón y el glucógeno en la luz del intestino.",
        "La lipasa pancreática, que rompe los triglicéridos emulsionados en ácidos grasos y monoglicéridos.",
        "La tripsina, que activa a las demás enzimas y degrada uniones peptídicas en el duodeno.",
        "La ribonucleasa, que actúa sobre el ARN y el ADN para producir nucleótidos libres."
      ],
      "ans": 0,
      "expl": "La amilasa pancreática actúa sobre almidón y glucógeno y produce disacáridos y dextrinas. La lipasa actúa sobre triglicéridos, la tripsina sobre uniones peptídicas y la ribonucleasa sobre ARN.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-22",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué hormona estimula la secreción de bicarbonato del páncreas y de la vía biliar ante el quimo ácido?",
      "opts": [
        "La colecistocinina, que contrae la vesícula biliar y estimula las enzimas pancreáticas.",
        "La secretina, que liberan las células S del duodeno ante el quimo ácido.",
        "La gastrina, que estimula la producción de ácido clorhídrico en el estómago.",
        "La insulina, que aumenta la captación de glucosa por el hígado durante la digestión."
      ],
      "ans": 1,
      "expl": "La secretina la producen las células S del duodeno ante quimo ácido y estimula la secreción de bicarbonato pancreático y biliar, contrarrestando el ácido gástrico. La CCK contrae la vesícula y la gastrina estimula el HCl.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-23",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué hormona contrae la vesícula biliar y relaja el esfínter de la ampolla ante grasas y aminoácidos?",
      "opts": [
        "La secretina, que se libera ante el quimo ácido y estimula el bicarbonato pancreático.",
        "La gastrina, que liberan las células G del antro ante la distensión del estómago.",
        "La colecistocinina, que liberan las células del duodeno ante grasas y aminoácidos.",
        "La somatostatina, que se produce en los islotes y frena la secreción de insulina."
      ],
      "ans": 2,
      "expl": "La colecistocinina (CCK) se libera ante grasas y aminoácidos, contrae la vesícula y relaja el esfínter de la ampolla. La secretina responde al quimo ácido y la gastrina es de las células G del antro.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-24",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿A qué tramo del duodeno desemboca el colédoco, junto con el conducto pancreático?",
      "opts": [
        "A la primera porción del duodeno, justo después del píloro, en la papila duodenal menor.",
        "A la tercera porción del duodeno, que cruza por delante de la aorta y de la vena cava.",
        "A la cuarta porción del duodeno, en el ángulo de Treitz donde comienza el yeyuno.",
        "A la segunda porción del duodeno, en la papila duodenal mayor, que regula el esfínter de Oddi."
      ],
      "ans": 3,
      "expl": "El colédoco se junta con el conducto pancreático en la ampolla de Vater, y los dos desembocan en la papila duodenal mayor, en la segunda porción del duodeno. El esfínter de Oddi regula ese paso.",
      "sec": "Digestivo · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-dige-25",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué tipo de epitelio tapiza la mucosa del estómago?",
      "opts": [
        "Cilíndrico simple, que se invagina en fositas gástricas donde desembocan las glándulas.",
        "Plano estratificado no queratinizado, que se descama para protegerse del ácido gástrico.",
        "Cúbico simple con borde en cepillo, que absorbe los nutrientes del quimo gástrico.",
        "Pseudoestratificado ciliado, que mueve el quimo hacia el duodeno con sus cilios."
      ],
      "ans": 0,
      "expl": "La mucosa gástrica tiene epitelio cilíndrico simple que se invagina en fositas gástricas, y en el fondo de cada una desembocan las glándulas gástricas. El plano estratificado no queratinizado es del esófago.",
      "sec": "Estómago"
    },
    {
      "id": "P-dige-26",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Durante la fase faríngea de la deglución, ¿qué ocurre con la laringe?",
      "opts": [
        "Desciende hacia el esófago para ayudar a empujar el bolo alimenticio hacia abajo.",
        "Se eleva y la epiglotis bascula hacia abajo y atrás, sellando la entrada laríngea.",
        "Se separa de la faringe para que el aire siga entrando sin interrupción en la tráquea.",
        "Se contrae de forma voluntaria, como en la fase bucal, para controlar el paso del bolo."
      ],
      "ans": 1,
      "expl": "En la fase faríngea la laringe se eleva y la epiglotis bascula hacia abajo y atrás sellándola, mientras se cierran las cuerdas vocales. Esta fase es involuntaria, y por eso la opción de contracción voluntaria no sirve.",
      "sec": "Deglución y esófago"
    },
    {
      "id": "P-dige-27",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué formación peritoneal va desde la curvatura menor del estómago y el duodeno hasta el hígado?",
      "opts": [
        "El epiplón mayor, que cuelga de la curvatura mayor y cubre el intestino delgado.",
        "El mesenterio, que suspende el yeyuno e íleon de la pared posterior del abdomen.",
        "El epiplón menor, que es la vía de paso de la tríada portal hacia el hilio hepático.",
        "El ligamento falciforme, que fija el hígado a la pared abdominal anterior."
      ],
      "ans": 2,
      "expl": "El epiplón menor va de la curvatura menor del estómago y del duodeno al hígado, y es la vía de paso de la tríada portal hacia el hilio hepático. El epiplón mayor, en cambio, cuelga de la curvatura mayor.",
      "sec": "Peritoneo y sus formaciones"
    },
    {
      "id": "P-dige-28",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué ligamento contiene en su borde libre el ligamento redondo, resto de la vena umbilical fetal?",
      "opts": [
        "El epiplón mayor, que cuelga de la curvatura mayor del estómago y cubre el intestino.",
        "El mesocolon, que fija el colon transverso a la pared posterior del abdomen.",
        "El mesenterio, que suspende el intestino delgado y lleva sangre y linfa.",
        "El ligamento falciforme, que fija el hígado a la pared abdominal anterior y al diafragma."
      ],
      "ans": 3,
      "expl": "El ligamento falciforme fija el hígado a la pared abdominal anterior y al diafragma. En su borde libre corre el ligamento redondo, resto de la vena umbilical fetal.",
      "sec": "Peritoneo y sus formaciones"
    },
    {
      "id": "P-dige-29",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué porcentaje aproximado de agua tiene la saliva?",
      "opts": [
        "Más del 99 %, y el resto son amilasa, lipasa lingual, lisozima y moco.",
        "Alrededor del 50 %, y el resto son enzimas digestivas de alto peso molecular.",
        "Alrededor del 80 %, con proteínas que forman el bolo alimenticio junto con el moco.",
        "Alrededor del 20 %, porque la saliva es principalmente moco viscoso de protección."
      ],
      "ans": 0,
      "expl": "La saliva es agua en más de un 99 %. El resto es amilasa salival, lipasa lingual, lisozima y moco, y el conjunto ablanda los alimentos para formar el bolo.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-30",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál es la función principal de la vesícula biliar?",
      "opts": [
        "Producir la bilis a partir de los hepatocitos, que se vuelca en la vesícula.",
        "Almacenar y concentrar la bilis, que luego se libera cuando la colecistocinina la contrae.",
        "Secretar enzimas digestivas que se mezclan con la bilis antes de ir al duodeno.",
        "Absorber los ácidos grasos del quimo y devolverlos a la sangre por la vena porta."
      ],
      "ans": 1,
      "expl": "La vesícula almacena y concentra la bilis, y se vacía cuando la colecistocinina la contrae. La bilis no se produce en la vesícula: la fabrica el hígado.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-31",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál de estos órganos es accesorio del aparato digestivo, es decir, nunca está en contacto con el alimento?",
      "opts": [
        "El estómago, que mezcla el alimento con el jugo gástrico",
        "La vesícula biliar, que vuelca la bilis por conductos",
        "El duodeno, que recibe el quimo desde el esfínter pilórico",
        "El esófago, que conduce el bolo hasta el cardias"
      ],
      "ans": 1,
      "expl": "Los órganos accesorios (dientes, lengua, glándulas salivales, hígado, vesícula y páncreas) vuelcan sus secreciones al tubo por conductos. Estómago, duodeno y esófago forman parte del tubo digestivo, por donde pasa el alimento.",
      "sec": "Dos categorías de órganos, y una pregunta que sale de ahí"
    },
    {
      "id": "P-dige-32",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué plexo del sistema nervioso entérico regula la motilidad y dónde se ubica?",
      "opts": [
        "El plexo submucoso de Meissner, en la submucosa, que regula la motilidad del músculo",
        "El plexo mientérico, ubicado en la lámina propia, que regula la secreción glandular",
        "El plexo submucoso, ubicado entre las dos capas musculares, que regula la vasoconstricción",
        "El plexo mientérico de Auerbach, entre las dos capas musculares, que regula la motilidad"
      ],
      "ans": 3,
      "expl": "El plexo mientérico (de Auerbach) está entre las dos capas musculares y regula la motilidad. Regla del capítulo: el plexo que está dentro del músculo maneja el músculo, mientras que el submucoso regula secreción, movimiento de la mucosa y vasoconstricción.",
      "sec": "Las cuatro túnicas: el esqueleto de todo el tema"
    },
    {
      "id": "P-dige-33",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál es una función del epiplón mayor?",
      "opts": [
        "Aislar focos infecciosos, con sus ganglios y macrófagos",
        "Dar paso a la tríada portal hacia el hilio hepático",
        "Fijar el hígado a la pared abdominal anterior y al diafragma",
        "Suspender el yeyuno-íleon y llevarle sangre y linfa"
      ],
      "ans": 0,
      "expl": "El epiplón mayor es un delantal graso que cuelga de la curvatura mayor y cubre el intestino delgado; sus ganglios y macrófagos aíslan focos infecciosos. Las otras funciones corresponden al epiplón menor, al ligamento falciforme y al mesenterio.",
      "sec": "Peritoneo y sus formaciones"
    },
    {
      "id": "P-dige-34",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué glándula salival es de secreción serosa pura, rica en amilasa, y se agranda en las paperas?",
      "opts": [
        "La sublingual, de secreción mixta con predominio mucoso",
        "La submandibular, que aporta el grueso del volumen salival",
        "La parótida, de secreción serosa pura, la mayor de todas",
        "Las glándulas mucosas del esófago, ubicadas en la submucosa"
      ],
      "ans": 2,
      "expl": "La parótida es la glándula salival mayor, de secreción serosa pura y rica en amilasa, y es la que se agranda en las paperas. La submandibular y la sublingual son mixtas, con predominio seroso y mucoso respectivamente.",
      "sec": "Boca, dientes y glándulas salivales"
    },
    {
      "id": "P-dige-35",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Por qué una persona puede deglutir con la cabeza hacia abajo?",
      "opts": [
        "Porque la epiglotis sella el esófago y empuja el bolo hacia arriba",
        "Porque el avance del bolo lo produce el peristaltismo y no la gravedad",
        "Porque el esfínter esofágico inferior se cierra por reflejo durante el pasaje",
        "Porque las cuerdas vocales se abren y dejan pasar el bolo hacia el estómago"
      ],
      "ans": 1,
      "expl": "El bolo avanza por el peristaltismo del esófago, no por gravedad, así que la posición de la cabeza no impide la deglución. Durante la fase faríngea, además, las cuerdas vocales se cierran y la epiglotis sella la laringe, no el esófago.",
      "sec": "Deglución y esófago"
    },
    {
      "id": "P-dige-36",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué sustancia convierte al pepsinógeno, un zimógeno inactivo, en pepsina?",
      "opts": [
        "El HCl secretado por las células parietales del estómago",
        "La enterocinasa que se encuentra en la luz del duodeno",
        "La gastrina que secretan las células G del antro gástrico",
        "El factor intrínseco de la célula parietal del estómago"
      ],
      "ans": 0,
      "expl": "El pepsinógeno lo secreta la célula principal y el HCl de la célula parietal lo convierte en pepsina. La enterocinasa activa el tripsinógeno pancreático en el duodeno, y la gastrina sólo estimula la secreción de HCl y pepsinógeno.",
      "sec": "Estómago"
    },
    {
      "id": "P-dige-37",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál de estas estructuras NO es un nivel de amplificación de la superficie del intestino delgado?",
      "opts": [
        "Los pliegues circulares de mucosa y submucosa",
        "Las vellosidades con asa capilar y vaso quilífero",
        "Las microvellosidades de la membrana apical de cada célula",
        "Los haustros, saculaciones de la pared del colon"
      ],
      "ans": 3,
      "expl": "Los tres niveles del intestino delgado son los pliegues circulares, las vellosidades y las microvellosidades, y se multiplican entre sí. Los haustros son un rasgo del colon, producto de que las tenias fruncen la pared.",
      "sec": "Intestino delgado: los tres niveles de amplificación"
    },
    {
      "id": "P-dige-38",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué estructuras forman la tríada portal en cada vértice del lobulillo hepático?",
      "opts": [
        "Vena centrolobulillar, rama de la arteria hepática y conductillo biliar del lobulillo",
        "Rama de la vena porta, vena centrolobulillar y un sinusoide",
        "Rama de la arteria hepática, rama de la vena porta y conductillo biliar",
        "Arteria hepática, vena porta y colédoco, ya completos en cada vértice"
      ],
      "ans": 2,
      "expl": "La tríada portal está formada por una rama de la arteria hepática, una rama de la vena porta y un conductillo biliar. La vena centrolobulillar está en el centro del lobulillo, no en los vértices.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-39",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué función cumplen las sales biliares en la digestión de las grasas?",
      "opts": [
        "Emulsionan las grasas, lo cual es digestión mecánica y no enzimática",
        "Rompen los enlaces de los triglicéridos por su actividad enzimática",
        "Activan a la lipasa gástrica en el estómago antes de llegar al duodeno",
        "Transforman los triglicéridos en quilomicrones dentro de la vesícula"
      ],
      "ans": 0,
      "expl": "La bilis no contiene enzimas: las sales biliares emulsionan, o sea fragmentan los glóbulos de grasa y multiplican la superficie sobre la que actúa la lipasa pancreática. Quien rompe los enlaces es la lipasa, no las sales biliares.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "P-dige-40",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué ocurre con las tenias, los haustros y los apéndices epiploicos al llegar al recto?",
      "opts": [
        "Se hacen más marcados porque el recto es el tramo que almacena",
        "Se mantienen sólo las tenias, porque son la capa muscular externa",
        "Desaparecen los haustros, pero siguen las tenias y los apéndices",
        "Desaparecen los tres, pues la longitudinal vuelve a ser continua"
      ],
      "ans": 3,
      "expl": "Los tres rasgos propios del colon desaparecen en el recto, donde la capa longitudinal de la muscular deja de condensarse en tenias y vuelve a ser continua. Sin tenias no hay fruncido, y por eso tampoco hay haustros.",
      "sec": "Intestino grueso"
    },
    {
      "id": "P-dige-41",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Un fármaco liposoluble se absorbe por la vía de los lípidos. ¿Qué consecuencia tiene eso?",
      "opts": [
        "Pasa primero por el hígado por la vena porta y se metaboliza en el primer pasaje",
        "Escapa al efecto de primer paso hepático, porque llega por la vía linfática",
        "Se absorbe en el estómago y llega al hígado por la arteria hepática",
        "Queda retenido en el enterocito y nunca llega a la circulación general"
      ],
      "ans": 1,
      "expl": "Los lípidos salen como quilomicrones por el vaso quilífero y llegan a la circulación general por el conducto torácico, salteándose el hígado en el primer pasaje. Por eso un fármaco liposoluble absorbido por vía linfática escapa al efecto de primer paso hepático.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-42",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué monosacáridos produce la lactasa del borde en cepillo?",
      "opts": [
        "Glucosa y fructosa, igual que la sacarasa",
        "Sólo glucosa, igual que la maltasa y la α-dextrinasa",
        "Glucosa y galactosa, a partir de la lactosa",
        "Fructosa y galactosa, sin pasar por la glucosa"
      ],
      "ans": 2,
      "expl": "La lactasa produce glucosa y galactosa. La sacarasa produce glucosa y fructosa, y la maltasa y la α-dextrinasa producen sólo glucosa. Todos se absorben por el capilar de la vellosidad hacia la vena porta.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-43",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Cuál NO es un efecto de la colecistocinina (CCK)?",
      "opts": [
        "Estimular la secreción de bicarbonato pancreático y biliar",
        "Contraer la vesícula y vaciar la bilis hacia el duodeno",
        "Relajar el esfínter de la ampolla para dejar salir las secreciones",
        "Producir saciedad y estimular las enzimas pancreáticas"
      ],
      "ans": 0,
      "expl": "La CCK contrae la vesícula, relaja el esfínter de la ampolla, estimula las enzimas pancreáticas y produce saciedad. Estimular el bicarbonato pancreático y biliar es efecto de la secretina, que responde al quimo ácido.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-44",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Una persona siente miedo intenso justo después de comer. ¿Qué ocurre con su digestión?",
      "opts": [
        "Se acelera, porque el parasimpático estimula la motilidad ante el estrés",
        "No cambia, porque el sistema entérico actúa de forma independiente",
        "Se enlentece, porque el parasimpático inhibe el plexo mientérico por vía hormonal",
        "Se enlentece, porque el simpático la inhibe y la sangre va al músculo"
      ],
      "ans": 3,
      "expl": "El parasimpático estimula la digestión y el simpático la inhibe. El miedo o la ira activan el simpático, que enlentece la digestión porque la sangre y la actividad se redirigen al músculo esquelético.",
      "sec": "Digestión y absorción por nutriente"
    },
    {
      "id": "P-dige-45",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Un enunciado describe una capa como \"tejido conectivo areolar de la mucosa, con vasos sanguíneos y linfáticos y con MALT\". ¿De qué capa se trata?",
      "opts": [
        "De la submucosa, que fija la mucosa a la muscular",
        "De la muscular de la mucosa, una lámina fina de músculo liso",
        "De la lámina propia, una capa que forma parte de la mucosa",
        "De la adventicia, que es sólo tejido conectivo sin mesotelio"
      ],
      "ans": 2,
      "expl": "La lámina propia es parte de la mucosa: conectivo areolar con vasos, linfáticos y MALT. La submucosa es una túnica aparte, la que fija la mucosa a la muscular, y es la confusión típica.",
      "sec": "Trampas de esta sección"
    },
    {
      "id": "P-dige-46",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Un cirujano abre la pared del estómago y observa que la muscular tiene una capa que no existe en el resto del tubo digestivo. ¿Cuál es y qué ventaja funcional da?",
      "opts": [
        "Una capa muscular de la mucosa más gruesa, que forma las fositas gástricas para secretar más ácido.",
        "Una capa longitudinal condensada en tres tenias, que fruncen la pared y forman saculaciones.",
        "Una capa oblicua interna, que permite batir el contenido y no sólo empujarlo.",
        "Una capa de músculo esquelético en el píloro, que permite controlar a voluntad el pasaje al duodeno."
      ],
      "ans": 2,
      "expl": "El estómago tiene tres capas musculares (oblicua interna, circular y longitudinal), cuando el resto del tubo tiene dos. Esa capa extra permite mezclar y triturar el quimo. La trampa es confundir esto con las tenias, que son propias del colon, o con el músculo esquelético, que sólo está en el extremo superior del tubo y en el esfínter anal externo.",
      "sec": "Cómo se modifica el plan en cada tramo"
    },
    {
      "id": "P-dige-47",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "¿Qué se absorbe principalmente en el intestino grueso, que no tiene vellosidades?",
      "opts": [
        "Los monosacáridos y aminoácidos que quedaron sin absorber en el intestino delgado.",
        "Agua, iones y las vitaminas K y del grupo B producidas por la microbiota.",
        "Los quilomicrones, a través de los vasos quilíferos de sus criptas profundas.",
        "La vitamina B12 unida al factor intrínseco, en el colon ascendente."
      ],
      "ans": 1,
      "expl": "Sin vellosidades el colon no está hecho para absorber nutrientes: absorbe agua, iones y las vitaminas K y B que fabrica la microbiota. Su digestión química es bacteriana. La trampa es pensar que completa la absorción de nutrientes, que se hace en el delgado (la B12 en el íleon).",
      "sec": "Intestino grueso"
    }
  ],
  "urinario": [
    {
      "id": "P-urin-1",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "En un corte se observa un segmento tubular con epitelio cúbico simple, sin borde en cepillo, luz nítida y muchos núcleos por corte. ¿Qué segmento es?",
      "opts": [
        "Túbulo contorneado distal, por su epitelio cúbico sin borde en cepillo y su luz nítida.",
        "Túbulo contorneado proximal, por su borde en cepillo denso y citoplasma acidófilo.",
        "Rama descendente delgada del asa de Henle, por su epitelio plano simple en la médula.",
        "Conducto papilar, por su epitelio cilíndrico simple y el desembocar en el cáliz menor."
      ],
      "ans": 0,
      "expl": "El túbulo contorneado distal tiene epitelio cúbico simple sin borde en cepillo y luz nítida, con más núcleos por corte. El proximal sería la trampa más tentadora, pero ése tiene borde en cepillo denso y luz borrosa.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-2",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuáles son las dos estructuras que componen el corpúsculo renal?",
      "opts": [
        "El glomérulo y el túbulo contorneado proximal, que es el segmento donde empieza la reabsorción.",
        "El glomérulo y la cápsula glomerular o de Bowman, con su espacio capsular entre las dos capas.",
        "La mácula densa y el aparato yuxtaglomerular, que regulan la presión de la arteriola aferente.",
        "La cápsula glomerular y el asa de Henle, que se comunica con el polo urinario del corpúsculo."
      ],
      "ans": 1,
      "expl": "El corpúsculo renal está formado por dos estructuras: el glomérulo (el ovillo de capilares fenestrados) y la cápsula de Bowman. Llamar glomérulo a todo el corpúsculo es el error típico. La mácula densa pertenece al aparato yuxtaglomerular y el asa de Henle es parte del túbulo.",
      "sec": "1 · Corpúsculo renal: donde se filtra"
    },
    {
      "id": "P-urin-3",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "En la presión neta de filtración, ¿qué término se opone a la filtración y cuál es su origen?",
      "opts": [
        "La presión hidrostática glomerular, generada por la contracción de la arteriola eferente.",
        "La presión osmótica coloidal de las células sanguíneas, que retiene el agua dentro del capilar.",
        "La presión hidrostática capsular, la retrógrada del líquido que ya está en el espacio capsular.",
        "La presión hidrostática de la arteriola aferente, que frena el ingreso de sangre al glomérulo."
      ],
      "ans": 2,
      "expl": "La presión neta de filtración es PHG menos PHC menos POC. Se oponen a la filtración la presión hidrostática capsular, que es la retrógrada del líquido ya presente en el espacio capsular, y la osmótica coloidal. Esta última depende de las proteínas plasmáticas, no de las células sanguíneas.",
      "sec": "Los tres procesos"
    },
    {
      "id": "P-urin-4",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué tramo de la uretra masculina recibe los dos conductos eyaculadores?",
      "opts": [
        "La porción membranosa, la más corta, que atraviesa el piso de la pelvis y tiene el esfínter externo.",
        "La porción esponjosa, que recorre el cuerpo esponjoso del pene hasta el glande, donde termina el conducto.",
        "La porción vesical, que es el primer tramo muy corto dentro de la pared de la vejiga.",
        "La porción prostática, que atraviesa la próstata y recibe los dos conductos eyaculadores de la pelvis."
      ],
      "ans": 3,
      "expl": "Los dos conductos eyaculadores desembocan en la porción prostática, la que atraviesa la próstata. La membranosa cruza el piso de la pelvis y la esponjosa recorre el cuerpo esponjoso del pene. La vesical es el primer tramo, muy corto, dentro de la pared de la vejiga.",
      "sec": "Urinario · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-urin-5",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Durante la micción, ¿qué efecto tiene el parasimpático sobre la vejiga?",
      "opts": [
        "Contrae el detrusor y relaja el esfínter interno, lo que facilita el vaciado de la vejiga.",
        "Relaja el detrusor y contrae el esfínter interno, lo que retiene la orina dentro de la vejiga.",
        "Contrae el esfínter externo esquelético, que impide la salida de la orina durante el reflejo.",
        "Relaja el detrusor y estimula la contracción del trígono para expulsar el contenido vesical."
      ],
      "ans": 0,
      "expl": "En la micción el parasimpático contrae el detrusor y relaja el esfínter interno, y al mismo tiempo se inhibe el esfínter externo. Es el caso que se confunde porque la intuición de simpático igual a contracción no sirve acá: en la vejiga el parasimpático la contrae y el simpático la relaja.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-6",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Un injerto renal bioingenierizado filtra, pero produce orina más diluida que el riñón nativo. ¿Qué función no se reconstituyó, según lo que muestra la anatomía del tema?",
      "opts": [
        "La filtración glomerular, porque el andamio descelularizado no conserva la membrana basal glomerular.",
        "El gradiente osmótico medular, que exige asas de Henle largas y vasos rectos a contracorriente.",
        "La secreción de potasio por el túbulo distal, que depende de la presión en el hilio renal.",
        "La reabsorción de agua en el conducto colector, que depende de la ADH y de la inervación vesical."
      ],
      "ans": 1,
      "expl": "El injerto filtra pero no concentra la orina porque no se reconstituyó el gradiente osmótico medular. Ese gradiente exige asas de Henle largas de las nefronas yuxtamedulares y vasos rectos a contracorriente. Sin él la orina sale más diluida, y eso coincide con lo que muestra el trabajo.",
      "sec": "Nefrona cortical vs yuxtamedular"
    },
    {
      "id": "P-urin-7",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Entre qué vértebras se ubican los riñones?",
      "opts": [
        "Entre C7 y T4, a los lados de la columna, dentro de la cavidad peritoneal.",
        "Entre L4 y S2, por delante de los grandes vasos ilíacos y de la vejiga.",
        "Entre T12 y L3, a los lados de la columna, en el retroperitoneo.",
        "Entre T1 y T8, por encima del diafragma y en contacto con los pulmones."
      ],
      "ans": 2,
      "expl": "Los riñones están en el retroperitoneo, a los lados de la columna, entre T12 y L3. El derecho queda un poco más bajo por el hígado. Están detrás del peritoneo, no dentro de la cavidad peritoneal.",
      "sec": "Urinario · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-urin-8",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "De adelante hacia atrás en el hilio renal, ¿qué estructura queda más anterior?",
      "opts": [
        "La pelvis renal, seguida por la arteria renal y, al final, la vena renal.",
        "La arteria renal, seguida por la pelvis renal y, al final, la vena renal.",
        "El uréter, seguido por la arteria renal y, al final, la vena renal.",
        "La vena renal, seguida por la arteria renal y, al final, la pelvis renal."
      ],
      "ans": 3,
      "expl": "Por el hilio pasan, de adelante hacia atrás, la vena renal, la arteria renal y la pelvis renal. Por eso la vena es la más anterior. La pelvis queda en el plano más posterior, de ahí que las opciones que la ponen primera sean incorrectas.",
      "sec": "Urinario · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-urin-9",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuánto mide aproximadamente un uréter?",
      "opts": [
        "Entre 25 y 30 cm, desde la pelvis renal hasta la vejiga.",
        "Entre 4 y 6 cm, desde la pelvis renal hasta la vejiga.",
        "Entre 15 y 20 cm, que es la longitud de la uretra masculina.",
        "Unos 4 cm, que es la longitud de la uretra femenina."
      ],
      "ans": 0,
      "expl": "El uréter mide unos 25 a 30 cm y va desde la pelvis renal hasta la vejiga. Las otras longitudes son tentadoras porque corresponden a las uretras: unos 4 cm la femenina y unos 20 cm la masculina.",
      "sec": "Urinario · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-urin-10",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Por qué el uréter entra en la vejiga en forma oblicua, atravesando la pared?",
      "opts": [
        "Porque el trígono es una válvula anatómica que se cierra cuando la vejiga se contrae.",
        "Porque la presión de la vejiga llena aplasta los orificios ureterales y evita el reflujo.",
        "Porque la pared de la vejiga tiene un esfínter de músculo esquelético que se cierra al llenarla.",
        "Porque el uréter se fija a la vejiga con un ligamento que impide su desplazamiento."
      ],
      "ans": 1,
      "expl": "El uréter atraviesa la pared de la vejiga en forma oblicua, y eso crea un mecanismo valvular fisiológico. Cuando la vejiga se llena, la presión aplasta los orificios ureterales y la orina no vuelve. No hay una válvula anatómica, y el trígono es solo un área lisa.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-11",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué región de la vejiga es lisa, porque la mucosa está firmemente adherida a la capa muscular?",
      "opts": [
        "La cara superior de la vejiga, donde la serosa cubre el detrusor de forma continua.",
        "La porción vesical de la uretra masculina, que tiene pliegues que se borran al llenarse.",
        "El trígono, el triángulo entre los dos orificios ureterales y el orificio uretral interno.",
        "El cuello vesical, que contiene las rugosidades que se borran al distenderse la vejiga."
      ],
      "ans": 2,
      "expl": "El trígono es liso porque su mucosa está firmemente adherida a la capa muscular y no hace pliegues. Sus vértices son los dos orificios ureterales y el orificio uretral interno. El resto de la vejiga sí tiene rugosidades que se borran al llenarse.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-12",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Adónde desemboca la vena gonadal izquierda, testicular u ovárica?",
      "opts": [
        "A la vena cava inferior, igual que la gonadal derecha, por el mismo trayecto.",
        "A la vena ilíaca común izquierda, que luego se continúa con la vena cava superior.",
        "A la vena porta, que la lleva al hígado antes de llegar a la circulación general.",
        "A la vena renal izquierda, porque la derecha va directo a la vena cava inferior."
      ],
      "ans": 3,
      "expl": "Las venas gonadales son asimétricas: la derecha va a la cava inferior y la izquierda desemboca en la vena renal izquierda. Esa vena renal es más larga porque cruza por delante de la aorta para llegar a la cava.",
      "sec": "Urinario · la anatomía que mostró el docente en clase"
    },
    {
      "id": "P-urin-13",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué puede causar una pérdida brusca de la cápsula adiposa del riñón?",
      "opts": [
        "Ptosis renal: el riñón desciende y puede acodar el uréter, lo que muestra su función mecánica.",
        "Hipertensión arterial, porque la grasa perirrenal es la que mantiene la presión de la arteriola aferente.",
        "Glucosuria, porque la grasa perirrenal regula la reabsorción de glucosa en el túbulo proximal.",
        "Albuminuria, porque la grasa perirrenal forma parte de la membrana de filtración del glomérulo."
      ],
      "ans": 0,
      "expl": "Si se pierde la cápsula adiposa tras un adelgazamiento brusco, el riñón desciende (ptosis renal) y puede acodar el uréter. Es la demostración clínica de que esa grasa sostiene el órgano en su sitio, es decir, cumple una función mecánica.",
      "sec": "Anatomía macroscópica"
    },
    {
      "id": "P-urin-14",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuántas pirámides renales tiene la médula de un riñón?",
      "opts": [
        "Una sola pirámide grande, que termina en la papila única del riñón.",
        "Entre 8 y 18 pirámides, cuyas papilas drenan hacia los cálices menores.",
        "Entre 2 y 4 pirámides, cada una con dos papilas que drenan en la pelvis.",
        "Más de 40 pirámides, que se distribuyen por toda la corteza renal."
      ],
      "ans": 1,
      "expl": "La médula contiene entre 8 y 18 pirámides renales, y el vértice de cada una es una papila. La corteza no contiene pirámides: sus columnas son la corteza que se mete entre ellas.",
      "sec": "Anatomía macroscópica"
    },
    {
      "id": "P-urin-15",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuál es la primera estructura por la que pasa la orina ya formada en el riñón?",
      "opts": [
        "La pelvis renal, que es el primer receptor de la orina después del conducto papilar.",
        "Los cálices mayores, que se forman por la unión de los cálices menores.",
        "Los cálices menores, que reciben la orina directamente de la papila renal.",
        "El uréter, que se conecta directamente con los conductos colectores de la médula."
      ],
      "ans": 2,
      "expl": "Los cálices menores reciben la orina de la papila: son la primera estructura donde drena la orina ya formada. Después siguen los cálices mayores, la pelvis renal y el uréter. La vía excretora ya no modifica la orina.",
      "sec": "Anatomía macroscópica"
    },
    {
      "id": "P-urin-16",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué porcentaje del gasto cardíaco en reposo recibe el riñón, un órgano de unos 150 g?",
      "opts": [
        "Entre el 1 y el 2 %, que es el flujo habitual de un órgano de ese tamaño en reposo.",
        "Entre el 50 y el 60 %, porque el riñón es el principal órgano de bombeo de la sangre.",
        "Cerca del 5 %, que es el mismo flujo que recibe el hígado en reposo.",
        "Entre el 20 y el 25 %, un flujo muy alto que sirve para procesar la sangre."
      ],
      "ans": 3,
      "expl": "El riñón recibe el 20 a 25 % del gasto cardíaco en reposo aunque pese solo unos 150 g. Ese flujo enorme no es para nutrirse sino para procesar la sangre. Los porcentajes bajos serían los esperables por el tamaño, pero no son los reales.",
      "sec": "Irrigación renal, en orden"
    },
    {
      "id": "P-urin-17",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué capa de la membrana de filtración renal, con carga negativa, retiene la albúmina junto con las hendiduras de los podocitos?",
      "opts": [
        "La lámina basal glomerular, con fibras de colágeno y proteoglucanos de carga negativa.",
        "El endotelio capilar fenestrado, cuyos poros de 70 a 100 nm retienen las proteínas.",
        "La cápsula de Bowman, cuyo epitelio parietal plano simple retiene las proteínas grandes.",
        "La mácula densa, que detecta el NaCl y regula la carga eléctrica del filtrado."
      ],
      "ans": 0,
      "expl": "La lámina basal glomerular tiene carga negativa y frena las proteínas grandes, sobre todo la albúmina, que también es aniónica: es barrera de tamaño y de carga. El endotelio fenestrado deja pasar todo el plasma, y la mácula densa es un sensor de NaCl, no parte de la membrana.",
      "sec": "1 · Corpúsculo renal: donde se filtra"
    },
    {
      "id": "P-urin-18",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué función cumplen las células mesangiales del glomérulo?",
      "opts": [
        "Producen renina y la liberan a la arteriola aferente cuando detectan una caída de la presión.",
        "Se contraen y reducen la superficie filtrante, una tercera palanca de regulación.",
        "Forman el diafragma de la hendidura de filtración y retienen las proteínas plasmáticas.",
        "Secretan angiotensina II y aldosterona hacia el espacio capsular del corpúsculo renal."
      ],
      "ans": 1,
      "expl": "Las células mesangiales están entre los capilares y son contráctiles y fagocíticas. Al contraerse reducen la superficie disponible para filtrar, que es una tercera palanca además de las dos arteriolas. La renina la secretan las células yuxtaglomerulares, no las mesangiales.",
      "sec": "1 · Corpúsculo renal: donde se filtra"
    },
    {
      "id": "P-urin-19",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué segmento de la nefrona reabsorbe prácticamente el 100 % de la glucosa filtrada?",
      "opts": [
        "El túbulo contorneado distal, donde la PTH regula la reabsorción de calcio.",
        "La rama descendente delgada del asa de Henle, que es permeable al agua y no a los solutos.",
        "El túbulo contorneado proximal, con borde en cepillo denso y muchas mitocondrias.",
        "El conducto colector, donde la aldosterona regula la reabsorción de sodio y la secreción de potasio."
      ],
      "ans": 2,
      "expl": "El túbulo contorneado proximal reabsorbe prácticamente el 100 % de la glucosa y de los aminoácidos, además de cerca del 65 % del agua y del sodio. Tiene borde en cepillo denso y muchas mitocondrias. Los demás segmentos hacen ajustes más finos.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-20",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué hormona actúa sobre las células principales del conducto colector para que reabsorban agua?",
      "opts": [
        "La aldosterona, que actúa sobre las células principales para reabsorber agua y sodio.",
        "El péptido natriurético atrial, que aumenta la reabsorción de agua en el colector.",
        "La PTH, que regula la reabsorción de agua en el túbulo contorneado distal y el colector.",
        "La ADH, que actúa sobre los receptores de las células principales para reabsorber agua."
      ],
      "ans": 3,
      "expl": "La ADH actúa sobre los receptores de las células principales del colector y hace que reabsorban agua. La aldosterona también actúa sobre esas células, pero regula sodio y potasio, no el agua directamente. La PTH regula el calcio en el túbulo distal.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-21",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuál es el rango normal del pH de la orina?",
      "opts": [
        "Entre 4,6 y 8,0, un rango amplio que refleja la regulación ácido-base del riñón.",
        "Entre 7,35 y 7,45, igual que el pH de la sangre arterial en condiciones normales.",
        "Entre 1,0 y 2,0, que es el pH ácido del jugo gástrico que llega a la vía urinaria.",
        "Entre 9,0 y 10,0, porque el bicarbonato urinario mantiene la orina en el rango básico."
      ],
      "ans": 0,
      "expl": "El pH normal de la orina va de 4,6 a 8,0, un rango amplio. El pH de 7,35 a 7,45 es el de la sangre, y es la confusión más probable. Los otros rangos no corresponden a la orina.",
      "sec": "Orina: qué es normal y qué no"
    },
    {
      "id": "P-urin-22",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué puede causar la presencia de glucosa en la orina (glucosuria)?",
      "opts": [
        "Una falla en la filtración del glomérulo, que deja pasar la glucosa sin reabsorberse.",
        "Superar la capacidad de reabsorción del túbulo proximal, como en la diabetes.",
        "El exceso de ADH, que impide la reabsorción de glucosa en el túbulo contorneado distal.",
        "La hipertrofia de la vejiga, que favorece la reabsorción de glucosa en la mucosa."
      ],
      "ans": 1,
      "expl": "La glucosa normalmente no se excreta. Aparece en la orina cuando se supera la capacidad de reabsorción del túbulo contorneado proximal, como en la diabetes o en el estrés con adrenalina que degrada glucógeno. No es un problema de la barrera de filtración.",
      "sec": "Orina: qué es normal y qué no"
    },
    {
      "id": "P-urin-23",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué causa la presencia de albúmina en la orina (albuminuria)?",
      "opts": [
        "La reabsorción excesiva de albúmina en el túbulo contorneado proximal por exceso de glucosa.",
        "La secreción de albúmina por las células principales del conducto colector.",
        "Aumento de la permeabilidad de la membrana de filtración, por enfermedad o lesión.",
        "La falta de cápsula adiposa, que deja la membrana de filtración sin protección."
      ],
      "ans": 2,
      "expl": "La albuminuria indica un aumento de la permeabilidad de la membrana de filtración, por enfermedad, lesión o irritación con toxinas bacterianas o metales pesados. La albúmina normalmente queda retenida en el glomérulo, y la cápsula adiposa no forma parte de esa membrana.",
      "sec": "Orina: qué es normal y qué no"
    },
    {
      "id": "P-urin-24",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué tipo de epitelio tapiza la vejiga y los uréteres, y cuál es su característica principal?",
      "opts": [
        "Epitelio cilíndrico simple con microvellosidades, que absorbe agua y electrolitos de la orina.",
        "Epitelio plano estratificado no queratinizado, que se descama para eliminar bacterias.",
        "Epitelio cúbico simple con borde en cepillo, que secreta H+ y amonio hacia la luz vesical.",
        "Epitelio de transición o urotelio, con células en sombrilla y uniones estrechas."
      ],
      "ans": 3,
      "expl": "La vejiga y los uréteres están tapizados por epitelio de transición o urotelio. Sus células apicales en sombrilla tienen placas rígidas y uniones estrechas, así que forma una barrera casi impermeable y se deforma sin romperse. El epitelio intestinal, en cambio, sí absorbe.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-25",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué es la papila renal?",
      "opts": [
        "La base de cada pirámide renal, que se apoya en la corteza del riñón.",
        "La cápsula que rodea el glomérulo y recibe el filtrado del espacio capsular.",
        "El vértice de cada pirámide renal, por donde la orina pasa a un cáliz menor.",
        "El conducto que une la pelvis renal con la vejiga a través del trígono."
      ],
      "ans": 2,
      "expl": "La papila renal es el vértice de cada pirámide, y por ella la orina pasa al cáliz menor. La base de la pirámide mira hacia la corteza. No confundir con la cápsula glomerular ni con el uréter.",
      "sec": "Anatomía macroscópica"
    },
    {
      "id": "P-urin-26",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué presión favorece la filtración glomerular?",
      "opts": [
        "La presión hidrostática capsular, que es la retrógrada del líquido del espacio capsular.",
        "La presión osmótica coloidal, que retiene el agua dentro del capilar glomerular.",
        "La presión intrapleural, que es subatmosférica y se transmite al glomérulo.",
        "La presión hidrostática glomerular, que es la de la sangre en el capilar del glomérulo."
      ],
      "ans": 3,
      "expl": "En la fórmula PFN = PHG − PHC − POC, el único término que favorece la filtración es la presión hidrostática de la sangre glomerular. La capsular y la osmótica coloidal se oponen. La presión intrapleural no interviene en el glomérulo.",
      "sec": "Los tres procesos"
    },
    {
      "id": "P-urin-27",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué efecto tiene el péptido natriurético atrial sobre la diuresis?",
      "opts": [
        "La aumenta, porque inhibe la reabsorción de sodio y agua y baja el volumen.",
        "La disminuye, porque aumenta la reabsorción de agua en el conducto colector.",
        "No tiene efecto sobre la diuresis, porque sólo actúa sobre el corazón y no sobre el riñón.",
        "La disminuye, porque estimula la aldosterona para retener sodio y agua."
      ],
      "ans": 0,
      "expl": "El péptido natriurético atrial se libera cuando aumenta el volumen sanguíneo. Inhibe la ADH y la aldosterona y frena la reabsorción de sodio y agua, así que aumenta la diuresis y baja el volumen y la presión. Es el sistema opuesto al renina-angiotensina-aldosterona.",
      "sec": "Aparato yuxtaglomerular"
    },
    {
      "id": "P-urin-28",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué células del aparato yuxtaglomerular secretan renina?",
      "opts": [
        "Las células de la mácula densa del túbulo distal, que detectan el NaCl tubular.",
        "Las células yuxtaglomerulares de la arteriola aferente, que son barorreceptores.",
        "Las células mesangiales, que se contraen y reducen la superficie de filtración.",
        "Las células parietales de la cápsula de Bowman, que tapizan el espacio capsular."
      ],
      "ans": 1,
      "expl": "Las células yuxtaglomerulares son fibras musculares lisas modificadas de la arteriola aferente. Son barorreceptores del estiramiento y secretan renina. La mácula densa, que es del túbulo, solo detecta la concentración de NaCl.",
      "sec": "Aparato yuxtaglomerular"
    },
    {
      "id": "P-urin-29",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué efecto tiene la aldosterona sobre el conducto colector?",
      "opts": [
        "Aumenta la reabsorción de potasio y la excreción de sodio por la orina.",
        "Inhibe la reabsorción de agua, porque la ADH deja de actuar sobre las células principales.",
        "Aumenta la reabsorción de sodio y la secreción de potasio y protones.",
        "Aumenta la filtración glomerular, porque abre las hendiduras de los podocitos."
      ],
      "ans": 2,
      "expl": "La aldosterona actúa sobre las células principales del colector: aumenta la reabsorción de sodio y la secreción de potasio y protones. Eso retiene sodio y agua y sube el volumen. La opción que invierte sodio y potasio es la trampa más tentadora.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-30",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué es la creatinina en el análisis de la función renal?",
      "opts": [
        "Una hormona que el riñón produce para regular la presión arterial y la volemia.",
        "Una enzima que el túbulo proximal usa para reabsorber la glucosa filtrada.",
        "Un pigmento que se forma en el intestino y se excreta por la bilis.",
        "Un desecho del metabolismo muscular, cuya concentración plasmática estima la filtración."
      ],
      "ans": 3,
      "expl": "La creatinina es un desecho que viene de la creatina fosfato muscular. Su concentración plasmática, y el clearance de creatinina, se usan como prueba de función renal para estimar la filtración glomerular.",
      "sec": "Orina: qué es normal y qué no"
    },
    {
      "id": "P-urin-31",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "En el orden de la irrigación renal, ¿qué arterias corren en la base de las pirámides?",
      "opts": [
        "Las interlobulares, que suben por las columnas renales.",
        "Las arcuatas, que corren justo en la base de las pirámides.",
        "Las segmentarias, que nacen directamente de la arteria renal.",
        "Las interlobulillares, que llegan a la arteriola aferente."
      ],
      "ans": 1,
      "expl": "Las arterias arcuatas corren en la base de las pirámides. Las interlobulares suben por las columnas renales, y es un error típico invertir ambas. Las segmentarias vienen antes y las interlobulillares después.",
      "sec": "Irrigación renal, en orden"
    },
    {
      "id": "P-urin-32",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Por qué la arteriola eferente ayuda a mantener alta la presión hidrostática glomerular?",
      "opts": [
        "Porque es más ancha que la aferente y deja salir rápido la sangre.",
        "Porque el glomérulo desemboca directamente en una vénula de baja presión.",
        "Porque es más angosta que la aferente y estrangula la salida de sangre.",
        "Porque los vasos rectos retienen la sangre dentro del capilar glomerular."
      ],
      "ans": 2,
      "expl": "La arteriola eferente tiene menor diámetro que la aferente y funciona como un estrangulamiento a la salida. Eso mantiene alta la presión hidrostática glomerular. Además el glomérulo está entre dos arteriolas, no entre una arteriola y una vénula.",
      "sec": "Irrigación renal, en orden"
    },
    {
      "id": "P-urin-33",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuál NO es una capa de la membrana de filtración renal?",
      "opts": [
        "Endotelio capilar con fenestraciones",
        "Lámina basal glomerular con carga negativa",
        "Hendiduras de filtración entre pedicelos",
        "Epitelio parietal de la cápsula de Bowman"
      ],
      "ans": 3,
      "expl": "La membrana de filtración tiene tres capas: el endotelio fenestrado, la lámina basal y las hendiduras entre los pedicelos de los podocitos. La capa parietal de la cápsula de Bowman es epitelio plano simple y no forma parte de esa barrera.",
      "sec": "1 · Corpúsculo renal: donde se filtra"
    },
    {
      "id": "P-urin-34",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Un segmento de la nefrona está en plena médula, tiene epitelio plano simple y es permeable al agua pero no a los solutos. ¿Cuál es?",
      "opts": [
        "Rama descendente delgada del asa de Henle, donde el agua sale por ósmosis.",
        "Rama ascendente del asa de Henle, que reabsorbe sodio, potasio y cloro.",
        "Túbulo contorneado proximal, que reabsorbe el 100 % de la glucosa filtrada.",
        "Conducto papilar, de epitelio cilíndrico simple, que desemboca en el cáliz menor."
      ],
      "ans": 0,
      "expl": "La rama descendente delgada tiene epitelio plano simple y es permeable al agua: el agua sale por ósmosis y el líquido tubular se concentra. La rama ascendente es impermeable al agua, y el túbulo proximal está en la corteza.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-35",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué células del conducto colector tienen receptores de ADH y de aldosterona?",
      "opts": [
        "Las células intercaladas, que regulan el equilibrio ácido-base.",
        "Las células de la mácula densa, que detectan la concentración de NaCl.",
        "Las células principales, que tienen receptores de ADH y de aldosterona.",
        "Las células yuxtaglomerulares, que son barorreceptores y secretan renina."
      ],
      "ans": 2,
      "expl": "Las células principales del colector tienen receptores de ADH, que reabsorben agua, y de aldosterona, que reabsorbe sodio y secreta potasio. Las intercaladas participan del equilibrio ácido-base. La mácula densa y las yuxtaglomerulares no son del colector.",
      "sec": "2 · Túbulo renal, segmento por segmento"
    },
    {
      "id": "P-urin-36",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuál NO es una característica de la nefrona yuxtamedular?",
      "opts": [
        "Asa de Henle larga, que llega hasta la médula interna.",
        "Capilares peritubulares con vasos rectos asociados.",
        "Corpúsculo cercano a la unión corticomedular.",
        "Asa de Henle corta, que apenas entra en la médula."
      ],
      "ans": 3,
      "expl": "El asa corta que apenas entra en la médula es propia de la nefrona cortical. La yuxtamedular tiene asa larga, vasos rectos y el corpúsculo cerca de la unión corticomedular. Su rol es crear el gradiente osmótico medular para concentrar la orina.",
      "sec": "Nefrona cortical vs yuxtamedular"
    },
    {
      "id": "P-urin-37",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Si aumenta la filtración, llega más NaCl a la mácula densa. ¿Qué respuesta produce?",
      "opts": [
        "Vasoconstricción de la arteriola aferente, que hace bajar la filtración.",
        "Vasodilatación de la arteriola aferente, que hace subir la filtración.",
        "Contracción de las células mesangiales, que agranda la superficie filtrante.",
        "Liberación de angiotensina II por la mácula densa hacia la eferente."
      ],
      "ans": 0,
      "expl": "En la retroalimentación túbuloglomerular, más NaCl en la mácula densa produce vasoconstricción de la aferente y baja la filtración. Es un freno que corrige el aumento. La contracción mesangial reduce la superficie filtrante, no la agranda.",
      "sec": "Aparato yuxtaglomerular"
    },
    {
      "id": "P-urin-38",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cuál es el mecanismo de autorregulación renal más rápido?",
      "opts": [
        "Retroalimentación túbuloglomerular, que depende de la mácula densa.",
        "Sistema renina-angiotensina-aldosterona, que sigue a la caída de presión.",
        "Péptido natriurético atrial, que se libera cuando sube el volumen.",
        "Mecanismo miogénico, por el estiramiento de la pared de la aferente."
      ],
      "ans": 3,
      "expl": "El mecanismo miogénico es el más rápido: el estiramiento de la pared estimula la contracción del músculo liso de la arteriola aferente. La retroalimentación túbuloglomerular es más lenta. El renina-angiotensina-aldosterona y el péptido natriurético son sistemas hormonales, no autorregulación local.",
      "sec": "Aparato yuxtaglomerular"
    },
    {
      "id": "P-urin-39",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Una sustancia pasa de la sangre al líquido que ya se formó en el túbulo. ¿Qué proceso es?",
      "opts": [
        "Filtración glomerular, porque ocurre dentro del corpúsculo renal.",
        "Secreción tubular, porque ingresa al filtrado que ya se formó.",
        "Reabsorción tubular, porque va del filtrado a la corriente sanguínea.",
        "Excreción, porque sale del cuerpo junto con la orina final."
      ],
      "ans": 1,
      "expl": "Secreción es el pasaje de la sangre al filtrado ya formado. La clave es la expresión ya formado, que la distingue de la filtración. La reabsorción va en sentido contrario, del filtrado a la sangre.",
      "sec": "Los tres procesos"
    },
    {
      "id": "P-urin-40",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué volumen aproximado de filtrado se forma por día y qué porcentaje del agua se reabsorbe?",
      "opts": [
        "Unos 2 L/día de filtrado, y se reabsorbe cerca del 50 % del agua.",
        "Unos 180 L/día de filtrado, y se reabsorbe cerca del 99 % del agua.",
        "Unos 18 L/día de filtrado, y se reabsorbe cerca del 90 % del agua.",
        "Unos 1800 L/día de filtrado, y se reabsorbe cerca del 99 % del agua."
      ],
      "ans": 1,
      "expl": "Se filtran del orden de 180 L por día y se reabsorbe cerca del 99 % del agua. Los 2 L por día son el volumen de orina final, no el del filtrado.",
      "sec": "Los tres procesos"
    },
    {
      "id": "P-urin-41",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Un paciente con anorexia, en inanición o con una dieta muy baja en hidratos de carbono aparece con cuerpos cetónicos en orina. ¿Qué hallazgo es?",
      "opts": [
        "Glucosuria, por superar la capacidad de reabsorción del túbulo proximal.",
        "Cetonuria, por una dieta sin aporte suficiente de hidratos de carbono.",
        "Albuminuria, por mayor permeabilidad de la membrana de filtración.",
        "Urobilinogenuria, por exceso de productos de degradación de la hemoglobina."
      ],
      "ans": 1,
      "expl": "La cetonuria se asocia a anorexia, inanición o dieta muy baja en hidratos de carbono. Cada hallazgo anormal tiene su causa: la glucosuria es por superar al túbulo proximal y la albuminuria por una membrana de filtración permeable.",
      "sec": "Orina: qué es normal y qué no"
    },
    {
      "id": "P-urin-42",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Por qué la infección urinaria es mucho más frecuente en mujeres?",
      "opts": [
        "Porque la uretra es corta y su desembocadura queda cerca del ano.",
        "Porque la uretra femenina es larga y tiene tres porciones distintas.",
        "Porque la uretra femenina cumple función urinaria y genital.",
        "Porque la hiperplasia prostática comprime la uretra de la mujer."
      ],
      "ans": 0,
      "expl": "La uretra femenina mide unos 4 cm y se abre cerca del ano, de modo que el trayecto es corto y hay más incidencia de infección. La larga con tres porciones y función urinaria y genital es la masculina, y la próstata solo existe en el varón.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-43",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Qué estructura de la vejiga tiene tres capas de músculo liso y se contrae en la micción?",
      "opts": [
        "El músculo detrusor, que se contrae durante la micción.",
        "El esfínter interno, de músculo liso e involuntario.",
        "El esfínter externo, de músculo esquelético y voluntario.",
        "El trígono, área triangular con la mucosa adherida."
      ],
      "ans": 0,
      "expl": "El músculo detrusor tiene tres capas de músculo liso y es el que contrae el parasimpático durante la micción. Los esfínteres cierran la salida: el interno es liso e involuntario y el externo es esquelético y voluntario.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "P-urin-44",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "En el trabajo del riñón bioingenierizado, ¿por qué se sembraron células endoteliales por la arteria renal y células renales neonatales por el uréter?",
      "opts": [
        "Porque el uréter es más ancho y admite mejor las células más grandes.",
        "Porque ambas células compiten por el espacio y así crecen más rápido.",
        "Porque cada vía de acceso natural lleva a un compartimento distinto.",
        "Porque la arteria renal drena directamente en los túbulos."
      ],
      "ans": 2,
      "expl": "El riñón tiene dos compartimentos con dos vías de acceso naturales: la arteria lleva a vasos y glomérulos, y el uréter lleva a colectores y túbulos. Por eso se usó una siembra dual, cada tipo celular por su vía.",
      "sec": "El riñón bioingenierizado, leído con la anatomía en la mano"
    },
    {
      "id": "P-urin-45",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "En la irrigación renal, ¿qué vaso sigue inmediatamente después de los capilares glomerulares?",
      "opts": [
        "Una vénula peritubular, que lleva la sangre a las venas arcuatas.",
        "Una vena interlobulillar, que devuelve la sangre hacia la vena renal.",
        "La arteriola eferente, que alimenta a los capilares peritubulares.",
        "Los vasos rectos, que salen directo de los capilares glomerulares."
      ],
      "ans": 2,
      "expl": "Después del glomérulo viene la arteriola eferente, no una vénula: el glomérulo está entre dos arteriolas. Recién después aparecen los capilares peritubulares, con vasos rectos en las nefronas yuxtamedulares.",
      "sec": "Trampas de esta sección"
    },
    {
      "id": "P-urin-46",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Un paciente en hemodiálisis crónica sigue anémico y con alteraciones del metabolismo mineral óseo. ¿Cuál es la explicación según lo que reproduce la diálisis?",
      "opts": [
        "La membrana de diálisis retiene la urea y la creatinina en la sangre",
        "La diálisis hace reabsorción selectiva, pero no secreta fármacos ni H+",
        "La diálisis sólo reproduce la filtración y no reemplaza la eritropoyetina ni el calcitriol",
        "La diálisis reemplaza la función yuxtaglomerular pero no la del túbulo proximal"
      ],
      "ans": 2,
      "expl": "La hemodiálisis imita únicamente la filtración con una membrana acelular: no hay reabsorción selectiva, ni secreción, ni producción de eritropoyetina (anemia) ni de calcitriol (trastorno mineral óseo). La trampa es creer que reemplaza al riñón completo.",
      "sec": "El riñón bioingenierizado, leído con la anatomía en la mano"
    },
    {
      "id": "P-urin-47",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "¿Cómo se disponen las capas musculares de la pared del uréter, de adentro hacia afuera?",
      "opts": [
        "Circular interna y longitudinal externa, igual que en el tubo digestivo",
        "Longitudinal interna y circular externa, invertidas respecto del tubo digestivo",
        "Longitudinal interna, circular media y oblicua externa, como el detrusor",
        "Una sola capa circular, porque el uréter no tiene capa longitudinal"
      ],
      "ans": 1,
      "expl": "El uréter tiene mucosa (urotelio y lámina propia), muscular con capa longitudinal interna y circular externa, y adventicia. La trampa es copiar el orden del tubo digestivo, que es el inverso.",
      "sec": "Uréteres, vejiga, uretra y micción"
    }
  ],
  "endocrino": [
    {
      "id": "P-endo-1",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Una mujer tiene T4 baja y TSH alta. ¿Qué diagnóstico corresponde y en qué piso del eje falla la cadena?",
      "opts": [
        "Hipotiroidismo primario: la glándula no responde a la TSH, y ésta sube por falta de retroalimentación.",
        "Hipotiroidismo secundario: la hipófisis no estimula bien a la tiroides, y por eso la TSH aparece alta.",
        "Hipotiroidismo terciario: el hipotálamo deja de producir TRH, lo que frena la TSH y la T4 al mismo tiempo.",
        "Enfermedad de Graves: la tiroides produce demasiada hormona, y la TSH sube por encima de lo normal."
      ],
      "ans": 0,
      "expl": "Con la hormona periférica (T4) baja y la trófica (TSH) alta, falla la glándula final: es un hipotiroidismo primario. La hipófisis está sana y, al ver poca T4, pierde el freno de la retroalimentación negativa y sube la TSH. En Graves pasa lo contrario: T4 alta y TSH baja.",
      "sec": "EL MÉTODO · localizar la lesión en el eje"
    },
    {
      "id": "P-endo-2",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Una paciente tiene T4 baja, TSH baja y TRH también baja. ¿Qué piso del eje falló?",
      "opts": [
        "Primario: la tiroides falló, y la TSH no sube porque la glándula está dañada y no responde al estímulo hipofisario.",
        "Terciario: el hipotálamo no produce TRH, y sin TRH no hay TSH ni T4, aunque la hipófisis y la tiroides estén sanas.",
        "Secundario: la hipófisis no produce TSH por una lesión, aunque la TRH del hipotálamo esté normal y sin cambios.",
        "Primario por déficit de yodo, que deja la T4 baja y la TSH también baja al mismo tiempo en el paciente."
      ],
      "ans": 1,
      "expl": "Si la T4, la TSH y la TRH están todas bajas, el problema está en el piso más alto: el hipotálamo, o sea un fallo terciario. Sin TRH no hay TSH, y sin TSH no hay T3/T4. Con TRH normal o alta sería secundario, y el déficit de yodo es una causa primaria (TSH alta).",
      "sec": "EL MÉTODO · localizar la lesión en el eje"
    },
    {
      "id": "P-endo-3",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué diferencia a la neurohipófisis de la adenohipófisis?",
      "opts": [
        "La adenohipófisis es glandular y fabrica ADH y oxitocina, que después libera hacia la sangre por la neurohipófisis.",
        "La neurohipófisis es glandular y fabrica la GH, mientras que la adenohipófisis es nerviosa y produce la ADH.",
        "La adenohipófisis es glandular y fabrica sus hormonas; la neurohipófisis guarda y libera ADH y oxitocina hipotalámicas.",
        "Ambas fabrican sus hormonas, pero la neurohipófisis las libera por el sistema porta hacia la glándula tiroides."
      ],
      "ans": 2,
      "expl": "La adenohipófisis es tejido glandular que fabrica sus siete hormonas. La neurohipófisis es tejido nervioso: solo almacena y libera la ADH y la oxitocina que fabrican las neuronas del hipotálamo, cuyos axones bajan por el tallo.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-4",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Durante una toma, ¿qué hormona hace que salga la leche de la toma actual, y qué hace la prolactina?",
      "opts": [
        "La prolactina hace salir la leche de esta toma; la oxitocina fabrica la leche de la toma siguiente.",
        "La oxitocina fabrica la leche de la toma siguiente; la prolactina contrae el útero durante el parto.",
        "La prolactina contrae la mama para expulsar la leche; la oxitocina suprime la ovulación en la lactancia.",
        "La oxitocina hace salir la leche de esta toma; la prolactina fabrica la leche de la toma siguiente."
      ],
      "ans": 3,
      "expl": "La oxitocina (neurohipófisis) hace fluir la leche durante la toma, y la prolactina (adenohipófisis) trabaja después para producir la leche de la mamada siguiente. Regla corta: la prolactina fabrica la leche de la próxima toma y la oxitocina saca la de esta.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-5",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona produce la médula suprarrenal, y cuál es su mecanismo de acción?",
      "opts": [
        "Adrenalina y noradrenalina, aminoacídicas, con receptor de membrana y AMPc como segundo mensajero.",
        "Cortisol, de naturaleza esteroidea, con receptor intracelular, y su producción la estimula la ACTH.",
        "Aldosterona, de naturaleza esteroidea, con receptor de membrana, y su regulación es por angiotensina II.",
        "Adrenalina, de naturaleza esteroidea, con receptor intracelular, y su regulación es directa por la ACTH."
      ],
      "ans": 0,
      "expl": "La médula produce adrenalina y noradrenalina, que son aminoacídicas, hidrosolubles, con receptor de membrana y AMPc. El cortisol y la aldosterona son de la corteza y esteroideas. La médula no tiene hormona trófica: la estimula directamente el simpático.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-6",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En los islotes de Langerhans, ¿qué hormona frena tanto la insulina como el glucagón, y qué célula la produce?",
      "opts": [
        "Insulina, producida por las células alfa, que aumenta la glucemia al frenar la captación de glucosa.",
        "Somatostatina, producida por las células D, que frena la secreción de insulina y glucagón en el islote.",
        "Glucagón, producido por las células beta, que frena la secreción de insulina después de comer.",
        "Cortisol, producido por las células D de la corteza suprarrenal, que frena la secreción de glucagón."
      ],
      "ans": 1,
      "expl": "La célula D del islote produce somatostatina, que inhibe la secreción de insulina y de glucagón. La insulina (célula beta) baja la glucemia y el glucagón (célula alfa) la sube, así que ninguna de las dos es la que frena a las otras.",
      "sec": "Páncreas endócrino · islotes de Langerhans"
    },
    {
      "id": "P-endo-7",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué significa que la acción de una hormona sea específica?",
      "opts": [
        "Que sólo se produce en una glándula endocrina y no puede actuar sobre otros tejidos.",
        "Que se degrada en la sangre antes de llegar a las células, por eso actúa en forma local.",
        "Que sólo afecta a las células que tienen receptores para esa hormona en particular.",
        "Que la misma hormona regula siempre la misma función, sin importar el tejido blanco."
      ],
      "ans": 2,
      "expl": "La acción hormonal es específica: la hormona llega a todos lados por la sangre, pero solo responden las células que tienen el receptor correspondiente. Por eso una hormona puede actuar en tejidos lejanos a su glándula.",
      "sec": "Hormona: distribución universal, acción específica"
    },
    {
      "id": "P-endo-8",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Una hormona difunde por todo el organismo. ¿Qué determina que una célula determinada responda a ella?",
      "opts": [
        "Que la célula esté cerca de la glándula que secreta la hormona en el tejido conectivo.",
        "Que la célula pertenezca al mismo sistema que la glándula, como el sistema nervioso.",
        "Que la célula tenga una concentración alta de AMPc, que se activa al llegar la hormona.",
        "Que la célula tenga el receptor específico para esa hormona, aunque la sangre la lleve."
      ],
      "ans": 3,
      "expl": "Lo que decide si una célula responde es que tenga el receptor específico de esa hormona. La sangre reparte la hormona por todo el organismo, pero distribuir no es actuar: confundir ambas cosas es el error conceptual número uno del tema.",
      "sec": "Hormona: distribución universal, acción específica"
    },
    {
      "id": "P-endo-9",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Dónde está el receptor de las hormonas liposolubles, como los estrógenos o el cortisol?",
      "opts": [
        "En el interior de la célula, en el citosol o dentro del núcleo.",
        "En la membrana plasmática, donde se une la hormona como primer mensajero.",
        "En la superficie del ribosoma, donde se traducen las proteínas de la célula.",
        "En el aparato de Golgi, donde se empaquetan las hormonas para su secreción."
      ],
      "ans": 0,
      "expl": "Las hormonas liposolubles (estrógenos, cortisol) atraviesan la membrana, así que su receptor es intracelular, en el citosol o el núcleo. El receptor de membrana con primer mensajero es propio de las hidrosolubles.",
      "sec": "Clasificación química: la propiedad que decide todo lo demás"
    },
    {
      "id": "P-endo-10",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Por qué las hormonas liposolubles, como los estrógenos, pueden administrarse por vía oral?",
      "opts": [
        "Porque las enzimas digestivas las activan y las convierten en la forma funcional dentro del intestino.",
        "Porque atraviesan las paredes del estómago y del intestino sin ser degradadas por enzimas digestivas.",
        "Porque se absorben por la mucosa bucal y pasan directo a la circulación sin llegar al estómago.",
        "Porque se unen a proteínas del jugo gástrico que las protegen durante todo el tránsito digestivo."
      ],
      "ans": 1,
      "expl": "Las liposolubles atraviesan las paredes del tubo digestivo sin degradarse, por eso se administran por vía oral. Las hidrosolubles no lo hacen y se dan por vía endovenosa según la clase.",
      "sec": "Clasificación química: la propiedad que decide todo lo demás"
    },
    {
      "id": "P-endo-11",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona hipotalámica estimula la secreción de TSH en la hipófisis?",
      "opts": [
        "La CRH, que estimula la liberación de ACTH en la adenohipófisis.",
        "La GnRH, que estimula la liberación de FSH y LH en la hipófisis.",
        "La TRH, la hormona liberadora de tirotropina del hipotálamo.",
        "La oxitocina, que se libera desde la neurohipófisis durante el parto."
      ],
      "ans": 2,
      "expl": "En el eje tiroideo el hipotálamo libera TRH, que estimula la TSH de la adenohipófisis. Cada eje tiene su propia liberadora: CRH para la ACTH y GnRH para la FSH y la LH. La oxitocina no es liberadora: es de la neurohipófisis.",
      "sec": "Retroalimentación negativa y los ejes"
    },
    {
      "id": "P-endo-12",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona hipotalámica estimula la secreción de ACTH en el eje suprarrenal?",
      "opts": [
        "La TRH, que estimula la TSH y la secreción de cortisol en el lóbulo anterior de la hipófisis.",
        "La GnRH, que estimula la producción de cortisol por la zona fasciculada de la corteza.",
        "La ADH, que aumenta la secreción de ACTH cuando sube la osmolaridad de la sangre.",
        "La CRH, factor liberador de corticotropina, que llega a la hipófisis por el sistema porta."
      ],
      "ans": 3,
      "expl": "El eje suprarrenal arranca con la CRH hipotalámica, que estimula la ACTH, y esta estimula la corteza para producir cortisol. La TRH pertenece al eje tiroideo y la GnRH al gonadal.",
      "sec": "Retroalimentación negativa y los ejes"
    },
    {
      "id": "P-endo-13",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En el eje suprarrenal, ¿qué hormona final frena a la adenohipófisis y al hipotálamo?",
      "opts": [
        "El cortisol, que vuelve por la sangre y frena la liberación de CRH y de ACTH.",
        "La aldosterona, que frena la liberación de ACTH cuando sube la presión arterial.",
        "La adrenalina, que frena la CRH durante el estrés por acción del sistema simpático.",
        "La insulina, que frena la ACTH al aumentar la captación de glucosa por las células."
      ],
      "ans": 0,
      "expl": "La hormona final de cada eje inhibe a los dos pisos superiores; en el suprarrenal, el cortisol frena la CRH y la ACTH. La aldosterona regula volumen y sodio, y la adrenalina viene de la médula, fuera de este eje.",
      "sec": "Retroalimentación negativa y los ejes"
    },
    {
      "id": "P-endo-14",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En el varón, ¿qué función cumple la FSH?",
      "opts": [
        "Estimula la secreción de testosterona por las células intersticiales de los testículos.",
        "Estimula el desarrollo de los conductos seminíferos y mantiene la espermatogénesis.",
        "Forma y mantiene el cuerpo lúteo, que secreta progesterona para mantener el endometrio.",
        "Estimula la producción de melanina en los melanocitos de la piel del escroto."
      ],
      "ans": 1,
      "expl": "En el varón la FSH estimula los conductos seminíferos y mantiene la espermatogénesis. La testosterona la estimula la LH y la melanina la estimula la MSH: es la trampa de adjudicar a la FSH el efecto de otra hormona.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-15",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En la mujer, ¿qué estructura del ovario forma y mantiene la LH?",
      "opts": [
        "El folículo primario, que madura por acción de la LH para producir la ovulación.",
        "La teca interna del folículo, que secreta la ADH para regular la osmolaridad.",
        "El cuerpo lúteo, que segrega progesterona y estrógenos.",
        "El estroma ovárico, que produce oxitocina para la contracción del útero en el parto."
      ],
      "ans": 2,
      "expl": "La LH forma y mantiene el cuerpo lúteo, que secreta progesterona y estrógenos. La FSH, en cambio, madura los folículos primarios. La ADH y la oxitocina son de la neurohipófisis y no tienen que ver con esta función.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-16",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué estímulo libera principalmente la hormona antidiurética (ADH)?",
      "opts": [
        "La succión del pezón durante la lactancia, que hace fluir la leche de la mama.",
        "Las contracciones uterinas durante el parto, que se transmiten por el nervio vago.",
        "El aumento del volumen sanguíneo, que estimula la liberación de renina en el riñón.",
        "Los cambios de osmolaridad de la sangre, que hacen que el riñón concentre la orina."
      ],
      "ans": 3,
      "expl": "La ADH responde a la osmolaridad de la sangre y hace que el riñón reabsorba agua, concentrando la orina. La succión del pezón y las contracciones uterinas liberan oxitocina, no ADH.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-17",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Durante la lactancia, ¿qué estímulo libera oxitocina?",
      "opts": [
        "La succión del pezón por el bebé, que se transmite al hipotálamo y provoca la eyección de leche.",
        "El aumento de la osmolaridad de la sangre, que activa las neuronas del hipotálamo anterior.",
        "La disminución de la glucemia, que estimula la secreción de glucagón desde la neurohipófisis.",
        "La presión arterial alta, que frena la secreción de oxitocina en la lactancia prolongada."
      ],
      "ans": 0,
      "expl": "La succión del pezón sube al cerebro y libera oxitocina, que hace salir la leche de la mama. La osmolaridad es el estímulo de la ADH, y el glucagón es pancreático, no neurohipofisario.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-18",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En los adultos, ¿qué función cumple la hormona del crecimiento (GH)?",
      "opts": [
        "Promueve el crecimiento del esqueleto en el adulto y aumenta la altura por cierre de las placas.",
        "Mantiene la masa ósea y muscular, promueve la curación de heridas y la degradación de lípidos.",
        "Estimula la síntesis de tiroxina en la tiroides y regula el metabolismo basal del adulto.",
        "Aumenta la reabsorción de sodio en el túbulo distal y eleva la presión arterial."
      ],
      "ans": 1,
      "expl": "En el adulto la GH mantiene la masa ósea y muscular, promueve la curación de heridas y la degradación de lípidos. El crecimiento y la multiplicación celular son efectos de la GH en el niño; en el adulto el exceso da acromegalia, no más altura.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-19",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué efecto tiene la PTH sobre la calcemia?",
      "opts": [
        "La baja: inhibe los osteoclastos y lleva el calcio al hueso, como hace la calcitonina.",
        "La baja: aumenta la eliminación de calcio por la orina y reduce su absorción intestinal.",
        "La sube: aumenta la resorción ósea y la reabsorción renal de calcio, y facilita su absorción.",
        "No tiene efecto sobre la calcemia, porque sólo regula la producción de la vitamina D."
      ],
      "ans": 2,
      "expl": "La PTH sube la calcemia: aumenta la resorción ósea, la reabsorción renal de calcio y facilita su absorción intestinal. La que baja la calcemia es la calcitonina, que frena los osteoclastos.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "P-endo-20",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué células de la tiroides producen T3 y T4?",
      "opts": [
        "Las células parafoliculares, que están entre los folículos y producen calcitonina.",
        "Las células principales de la paratiroides, que producen la paratohormona.",
        "Las células alfa de los islotes del páncreas, que producen el glucagón.",
        "Las células foliculares, que contactan el coloide donde se almacenan las hormonas."
      ],
      "ans": 3,
      "expl": "T3 y T4 las producen las células foliculares, que contactan el coloide donde se guardan las hormonas. Las parafoliculares producen calcitonina, y las células principales de la paratiroides producen PTH.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "P-endo-21",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué célula del testículo produce la testosterona?",
      "opts": [
        "Las células intersticiales, que se encuentran entre los conductos seminíferos.",
        "Las células de Sertoli, que se ubican dentro de los conductos seminíferos.",
        "Las espermatogonias, que son las células madre de la espermatogénesis.",
        "Las células de Leydig de los conductos epididimarios, que secretan la prolactina."
      ],
      "ans": 0,
      "expl": "La testosterona la producen las células intersticiales del testículo, situadas entre los conductos seminíferos. Las células de Sertoli están dentro de los conductos y no son las que fabrican testosterona.",
      "sec": "Gónadas, pineal y timo"
    },
    {
      "id": "P-endo-22",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuándo se produce la melatonina en la glándula pineal?",
      "opts": [
        "Durante el día, cuando la luz estimula la pineal para liberar melatonina.",
        "Cuando no hay luz, y regula los ritmos circadianos y actúa sobre el timo.",
        "Sólo durante la adolescencia, cuando la hormona del crecimiento está en su pico.",
        "Durante la lactancia, para regular la producción de leche por las glándulas mamarias."
      ],
      "ans": 1,
      "expl": "La melatonina se produce cuando no hay luz y regula los ritmos circadianos; además actúa sobre el timo y es antioxidante. La producción es nocturna, por eso la opción que dice durante el día es falsa.",
      "sec": "Gónadas, pineal y timo"
    },
    {
      "id": "P-endo-23",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué enzima convierte la angiotensina I en angiotensina II?",
      "opts": [
        "La renina, que se secreta por las células yuxtaglomerulares del riñón.",
        "La aldosterona, que se activa en el hígado a partir del angiotensinógeno.",
        "La enzima convertidora de angiotensina, que se encuentra en los pulmones.",
        "La angiotensinógeno hepático, que se transforma en el pulmón al entrar en contacto con el aire."
      ],
      "ans": 2,
      "expl": "La ECA, presente en los pulmones, convierte la angiotensina I en angiotensina II. La renina es la enzima del riñón que actúa antes, sobre el angiotensinógeno hepático, y la aldosterona es el producto final de la cadena.",
      "sec": "Sistema renina-angiotensina-aldosterona"
    },
    {
      "id": "P-endo-24",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué estimula la secreción de adrenalina y noradrenalina en la médula suprarrenal?",
      "opts": [
        "La ACTH de la adenohipófisis",
        "La angiotensina II y el potasio",
        "El cortisol de la corteza, como hormona trófica",
        "La fibra simpática preganglionar"
      ],
      "ans": 3,
      "expl": "La médula no tiene hormona trófica: es el brazo hormonal del simpático y la activa directamente la fibra simpática preganglionar. La trampa es la ACTH, que apunta a la corteza (cortisol), y la angiotensina II y el K, que estimulan la aldosterona.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-25",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿En qué estructura ósea se aloja la hipófisis?",
      "opts": [
        "En la silla turca, y cuelga del hipotálamo por el tallo hipofisario.",
        "En la base del cráneo, sobre el hueso occipital y por debajo del cerebelo.",
        "En el hueso etmoides, por encima de la cavidad nasal y en contacto con los senos.",
        "En la columna cervical, entre la primera y la segunda vértebra."
      ],
      "ans": 0,
      "expl": "La hipófisis o pituitaria se aloja en la silla turca y cuelga del hipotálamo por el tallo. Las demás ubicaciones de las opciones no corresponden.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-26",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona del timo ayuda a la maduración de los linfocitos T?",
      "opts": [
        "La melatonina, que la glándula pineal libera durante la noche.",
        "La timosina, que está en el timo y tiene su máximo en la infancia.",
        "La calcitonina, que la tiroides libera cuando sube la calcemia.",
        "La eritropoyetina, que el riñón libera para estimular la médula ósea."
      ],
      "ans": 1,
      "expl": "La timosina es la hormona del timo y ayuda a madurar los linfocitos T; su actividad es máxima en la infancia. La melatonina es pineal, la calcitonina es tiroidea y la eritropoyetina es renal.",
      "sec": "Gónadas, pineal y timo"
    },
    {
      "id": "P-endo-27",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿En qué zona de la corteza suprarrenal se produce el cortisol?",
      "opts": [
        "En la zona glomerular, que sintetiza la aldosterona bajo la acción de la angiotensina II.",
        "En la zona reticular, que sintetiza los andrógenos suprarrenales.",
        "En la zona fasciculada, que sintetiza el glucocorticoide cortisol.",
        "En la médula suprarrenal, donde se sintetiza la adrenalina por acción simpática."
      ],
      "ans": 2,
      "expl": "El cortisol, glucocorticoide principal, se sintetiza en la zona fasciculada de la corteza. La glomerular produce aldosterona, la reticular andrógenos y la adrenalina es de la médula, que es otra capa.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-28",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué células de la corteza suprarrenal producen la aldosterona?",
      "opts": [
        "Las de la zona fasciculada, que responden a la ACTH y producen cortisol.",
        "Las de la zona reticular, que producen los andrógenos y la progesterona.",
        "Las cromafines de la médula, que producen la adrenalina y la noradrenalina.",
        "Las de la zona glomerular, que responden a la angiotensina II y al potasio."
      ],
      "ans": 3,
      "expl": "La aldosterona la produce la zona glomerular, que se estimula con angiotensina II y potasio. La fasciculada hace cortisol (estimulada por ACTH) y las cromafines de la médula hacen adrenalina y noradrenalina.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-29",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona regula el metabolismo y la temperatura corporal junto con los ritmos de la tiroides?",
      "opts": [
        "La T3 y la T4, que regulan el metabolismo basal de todas las células.",
        "La calcitonina, que frena los osteoclastos y regula la temperatura corporal.",
        "La PTH, que sube la calcemia y regula la temperatura del cuerpo.",
        "La insulina, que regula la temperatura al favorecer la captación de glucosa."
      ],
      "ans": 0,
      "expl": "T3 y T4 regulan el metabolismo basal de todas las células y la temperatura corporal. La calcitonina y la PTH regulan el calcio, y la insulina regula la glucemia, no la temperatura.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "P-endo-30",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué célula del islote pancreático produce la somatostatina?",
      "opts": [
        "La célula alfa, que sintetiza glucagón y aumenta la glucemia.",
        "La célula D, que inhibe la secreción de insulina y de glucagón.",
        "La célula beta, que sintetiza insulina y disminuye la glucemia.",
        "La célula parafolicular, que sintetiza calcitonina en la tiroides."
      ],
      "ans": 1,
      "expl": "La célula D del islote produce somatostatina, que inhibe la secreción de insulina y de glucagón. La alfa produce glucagón y la beta insulina; la parafolicular no es del páncreas, está en la tiroides.",
      "sec": "Páncreas endócrino · islotes de Langerhans"
    },
    {
      "id": "P-endo-31",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuál de estas NO es una función de las hormonas según la cátedra?",
      "opts": [
        "Regular la composición y el volumen del medio interno corporal",
        "Controlar el crecimiento, el desarrollo y la función reproductora",
        "Mandar la contracción del músculo esquelético por acetilcolina",
        "Modular el metabolismo y el equilibrio energético corporal"
      ],
      "ans": 2,
      "expl": "El músculo esquelético queda afuera a propósito: se contrae por orden nerviosa somática (placa motora, acetilcolina), no por hormonas. Las hormonas sí regulan el medio interno, el metabolismo, el crecimiento y la reproducción, además del músculo liso y cardíaco.",
      "sec": "Hormona: distribución universal, acción específica"
    },
    {
      "id": "P-endo-32",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuál de estas hormonas es hidrosoluble y usa AMPc como segundo mensajero?",
      "opts": [
        "La adrenalina que secreta la médula suprarrenal",
        "El cortisol de la zona fasciculada suprarrenal",
        "La aldosterona de la zona glomerular suprarrenal",
        "La tiroxina de las células foliculares tiroideas"
      ],
      "ans": 0,
      "expl": "La adrenalina es aminoacídica, hidrosoluble, con receptor de membrana y AMPc. Regla de la clase: si aparece AMPc, la hormona es hidrosoluble. El cortisol y la aldosterona son esteroideas, y T3/T4 son liposolubles: las tres tienen receptor intracelular.",
      "sec": "Clasificación química: la propiedad que decide todo lo demás"
    },
    {
      "id": "P-endo-33",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "En el eje tiroideo, ¿qué ocurre cuando suben T3 y T4 en sangre?",
      "opts": [
        "La adenohipófisis aumenta la TSH para sostener el nivel hormonal",
        "El hipotálamo libera más TRH para estimular a la hipófisis",
        "La tiroides responde liberando calcio desde el hueso",
        "Se frenan la TRH y la TSH, por retroalimentación negativa"
      ],
      "ans": 3,
      "expl": "La hormona final de cada eje inhibe a los dos pisos superiores: T3 y T4 frenan la TRH hipotalámica y la TSH hipofisaria. Subir TSH o TRH sería un feedback positivo, que la clase solo nombra sin desarrollar.",
      "sec": "Retroalimentación negativa y los ejes"
    },
    {
      "id": "P-endo-34",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Una persona con T4 baja y TSH alta tiene déficit de yodo en la dieta. ¿Qué clasificación corresponde?",
      "opts": [
        "Primario, porque falla la glándula periférica y la hipófisis compensa con más TSH",
        "Secundario, porque la hipófisis no responde al déficit de T4",
        "Terciario, porque falta el estímulo de la TRH",
        "Hiperfunción primaria, porque la TSH alta indica exceso de hormona"
      ],
      "ans": 0,
      "expl": "Con periférica baja y trófica alta falla la tiroides sin yodo para sintetizar T4 y la hipófisis aumenta la TSH: es primario. La trampa es leer 'primero el órgano del eje' o suponer que la TSH alta indica hiperfunción; la hiperfunción primaria tiene TSH baja.",
      "sec": "EL MÉTODO · localizar la lesión en el eje"
    },
    {
      "id": "P-endo-35",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Un paciente tiene T3/T4 altas y TSH baja. ¿Qué patrón corresponde?",
      "opts": [
        "Hiperfunción primaria, como la enfermedad de Graves",
        "Hipotiroidismo secundario por falla de la hipófisis",
        "Hipotiroidismo primario por falta de yodo en la dieta",
        "Hipotiroidismo terciario por falla del hipotálamo"
      ],
      "ans": 0,
      "expl": "Periférica alta con trófica baja es una hiperfunción primaria: la tiroides produce sola y el exceso frena a la hipófisis. Es el patrón de Graves. Las otras tres opciones son hipotiroidismos, que tienen la hormona periférica baja.",
      "sec": "EL MÉTODO · localizar la lesión en el eje"
    },
    {
      "id": "P-endo-36",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuál de estas hormonas NO se fabrica en la adenohipófisis?",
      "opts": [
        "Hormona estimulante de los melanocitos (MSH)",
        "Hormona antidiurética, de origen hipotalámico",
        "Hormona luteinizante (LH), una gonadotrofina",
        "Hormona del crecimiento (GH), la somatotrofina"
      ],
      "ans": 1,
      "expl": "La ADH la fabrican las neuronas del hipotálamo y la neurohipófisis solo la almacena y libera. La adenohipófisis fabrica siete hormonas: GH, prolactina, TSH, ACTH, FSH, LH y MSH.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-37",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Un adulto tiene manos, pies y mandíbula agrandados por exceso de GH. ¿Qué cuadro es y por qué?",
      "opts": [
        "Gigantismo, porque las placas epifisarias siguen abiertas",
        "Gigantismo, porque el exceso de GH ocurre en la infancia",
        "Acromegalia, porque el exceso de prolactina agranda los huesos",
        "Acromegalia: con la placa cerrada, el hueso crece en grosor"
      ],
      "ans": 3,
      "expl": "El exceso de GH da gigantismo en niños y acromegalia en adultos. Con la placa epifisaria ya cerrada, el hueso no se alarga y crecen en grosor la cara, las manos, los pies y las partes blandas. La prolactina no es la causa.",
      "sec": "Hipotálamo e hipófisis"
    },
    {
      "id": "P-endo-38",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué estímulo libera la paratohormona (PTH)?",
      "opts": [
        "Una calcemia elevada, detectada por la paratiroides",
        "Un aumento de la osmolaridad de la sangre circulante",
        "Una calcemia baja, detectada por la paratiroides",
        "Una caída de la presión arterial en el riñón"
      ],
      "ans": 2,
      "expl": "La PTH la liberan las células principales de la paratiroides cuando el calcio está bajo, y su efecto neto es subir la calcemia. La calcemia alta libera calcitonina; la osmolaridad estimula la ADH y la caída de presión activa la renina.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "P-endo-39",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuál NO es una consecuencia del hipertiroidismo?",
      "opts": [
        "Aumento de peso, por un metabolismo basal más lento",
        "Intolerancia al calor y aumento de la ansiedad",
        "Exoftalmia y agrandamiento de la glándula tiroides",
        "Bajo peso, porque el metabolismo consume más calorías"
      ],
      "ans": 0,
      "expl": "El hipertiroidismo acelera el metabolismo, por eso baja el peso; el aumento de peso corresponde al hipotiroidismo. Exoftalmia, bocio, intolerancia al calor y ansiedad sí son consecuencias del exceso de hormona tiroidea.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "P-endo-40",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué estimula la secreción de aldosterona en la corteza suprarrenal?",
      "opts": [
        "La ACTH, a través del eje hipotalámico-hipofisario",
        "La angiotensina II y el potasio sobre la corteza",
        "La fibra simpática preganglionar sobre la médula",
        "La TSH que viaja hasta la corteza suprarrenal"
      ],
      "ans": 1,
      "expl": "La aldosterona, de la zona glomerular, responde a la angiotensina II y al K⁺. La ACTH estimula el cortisol, y la fibra simpática preganglionar actúa sobre la médula, no sobre la corteza. La TSH es del eje tiroideo.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-41",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Cuál es el principal glucocorticoide de la corteza suprarrenal y qué efecto tiene sobre la inflamación?",
      "opts": [
        "Aldosterona; retiene sodio y refuerza defensas",
        "Adrenalina; es antiinflamatoria y de acción rápida",
        "Andrógenos suprarrenales; frenan la inflamación tisular",
        "Cortisol; es un antiinflamatorio e inmunosupresor"
      ],
      "ans": 3,
      "expl": "El cortisol es el glucocorticoide principal, se sintetiza en la zona fasciculada y tiene efecto antialérgico, antiinflamatorio e inmunosupresor. La aldosterona regula volumen y electrolitos, y la adrenalina es de la médula y desencadena la respuesta de lucha o huida.",
      "sec": "Suprarrenales · afuera corteza, adentro médula"
    },
    {
      "id": "P-endo-42",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Después de una comida, ¿qué célula del islote actúa y qué hace?",
      "opts": [
        "La célula alfa libera glucagón y saca glucosa del hígado",
        "La célula D libera somatostatina y sube la glucemia",
        "La célula beta libera insulina, que hace entrar glucosa",
        "La célula beta libera glucagón, que baja la glucemia"
      ],
      "ans": 2,
      "expl": "Tras comer actúa la célula beta: libera insulina, que permite la entrada de glucosa a las células y baja la glucemia. El glucagón (célula alfa) trabaja en el ayuno, y la somatostatina (célula D) solo inhibe a las otras dos hormonas.",
      "sec": "Páncreas endócrino · islotes de Langerhans"
    },
    {
      "id": "P-endo-43",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué función cumple la melatonina además de regular los ritmos circadianos?",
      "opts": [
        "Eleva la calcemia al estimular los osteoclastos",
        "Eleva las defensas por el timo y es antioxidante",
        "Estimula la maduración de los folículos del ovario",
        "Aumenta la glucemia por acción sobre el hígado"
      ],
      "ans": 1,
      "expl": "La melatonina de la pineal actúa sobre el timo elevando las defensas y es un poderoso antioxidante. La calcemia depende de PTH y calcitonina, la maduración folicular de la FSH y la glucemia de insulina y glucagón.",
      "sec": "Gónadas, pineal y timo"
    },
    {
      "id": "P-endo-44",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormonas produce el ovario y en qué estructura se produce cada una?",
      "opts": [
        "Estrógenos en el cuerpo lúteo y progesterona en el folículo",
        "Testosterona, producida por las células intersticiales",
        "Progesterona en el folículo y oxitocina en el cuerpo lúteo",
        "Estrógenos en el folículo, progesterona en el cuerpo lúteo"
      ],
      "ans": 3,
      "expl": "El folículo produce estrógenos y el cuerpo lúteo, progesterona. La primera opción invierte las estructuras. La testosterona es del testículo y la oxitocina es de la neurohipófisis.",
      "sec": "Gónadas, pineal y timo"
    },
    {
      "id": "P-endo-45",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué efecto tiene la aldosterona sobre el riñón en el sistema renina-angiotensina-aldosterona?",
      "opts": [
        "Reabsorbe sodio y agua, y secreta potasio y protones",
        "Reabsorbe potasio y excreta sodio, bajando el volumen",
        "Reabsorbe calcio y secreta fosfato hacia la orina",
        "Concentra la orina al responder a la osmolaridad"
      ],
      "ans": 0,
      "expl": "La aldosterona hace que el riñón reabsorba Na⁺ y agua y secrete K⁺ y H⁺, con lo que sube el volumen y la presión. Invertir sodio y potasio es la trampa, y concentrar la orina según la osmolaridad es la acción de la ADH.",
      "sec": "Sistema renina-angiotensina-aldosterona"
    },
    {
      "id": "P-endo-46",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Un páncreas artificial (sensor de glucosa y bomba de insulina) puede sobrecorregir y provocar hipoglucemia. ¿Qué explica este riesgo?",
      "opts": [
        "Que la insulina sube la glucemia cuando se la administra en exceso",
        "Que la somatostatina de la bomba frena también la insulina",
        "Que falta el brazo del glucagón, que subiría la glucemia desde el hígado",
        "Que las células beta no pueden captar la glucosa del sensor"
      ],
      "ans": 2,
      "expl": "Insulina y glucagón son antagónicos (push-pull): la bomba solo implementa el brazo que baja la glucemia, y sin glucagón nada la sube desde el hígado. La trampa es creer que la insulina sube la glucemia: la baja.",
      "sec": "Páncreas endócrino · islotes de Langerhans"
    },
    {
      "id": "P-endo-47",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Sobre qué sustrato actúa la renina para formar angiotensina I?",
      "opts": [
        "La angiotensina II de los pulmones",
        "El angiotensinógeno de origen hepático",
        "La aldosterona de la corteza suprarrenal",
        "La mácula densa del túbulo distal"
      ],
      "ans": 1,
      "expl": "La renina es la enzima y su sustrato es el angiotensinógeno hepático; luego la ECA pulmonar pasa I a II. La trampa es la frase de la diapositiva que dice que la renina 'se convierte' en angiotensina I: el esquema muestra que es el angiotensinógeno.",
      "sec": "Sistema renina-angiotensina-aldosterona"
    }
  ],
  "nervioso": [
    {
      "id": "P-nerv-1",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "En el SNC, ¿qué célula fagocita desechos y estructuras lesionadas, y cuál es su origen embrionario?",
      "opts": [
        "Microglía, de origen mesodérmico, que llega desde la médula ósea y fagocita tejido dañado.",
        "Astrocito, de origen ectodérmico, que forma el tejido cicatrizal en las zonas lesionadas.",
        "Oligodendrocito, de origen ectodérmico, que elabora la mielina de los axones centrales del SNC.",
        "Célula de Schwann, de origen mesodérmico, que envuelve axones del sistema periférico y los mieliniza."
      ],
      "ans": 0,
      "expl": "La microglía es la célula que fagocita desechos y estructuras lesionadas. Además es la excepción embriológica: viene de la médula ósea, así que es mesodérmica, mientras que el resto de la glía es ectodérmica. Los astrocitos forman la cicatriz y los oligodendrocitos hacen mielina, pero ninguno fagocita.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-2",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Para regenerar un nervio ciático (SNP) se diseña un conducto de guía. ¿Con qué célula conviene sembrarlo?",
      "opts": [
        "Con oligodendrocitos, que son las células que elaboran la mielina en el nervio periférico.",
        "Con células de Schwann, derivadas de la cresta neural, que mielinizan los axones del SNP.",
        "Con astrocitos, porque conservan la barrera hematoencefálica y favorecen el crecimiento axonal.",
        "Con microglía, que fagocita los desechos y dirige la reparación del nervio dañado."
      ],
      "ans": 1,
      "expl": "En el SNP la mielina la hace la célula de Schwann, que deriva de la cresta neural, así que el conducto se siembra con ella. Los oligodendrocitos también hacen mielina, pero solo en el SNC: sembrarlos en un nervio ciático es un error de compartimento.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-3",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Una prolongación de la neurona tiene diámetro constante, se ramifica en ángulo recto y no tiene grumos de Nissl. ¿Qué es?",
      "opts": [
        "Una dendrita, porque se ramifica en muchas direcciones, tiene espinas y sale del soma celular.",
        "Un axón, porque tiene espinas y conduce la señal hacia el soma de la neurona, como una antena.",
        "Un axón, porque tiene diámetro constante, ramifica en ángulo recto y carece de grumos de Nissl.",
        "Una dendrita, porque recibe la señal desde el telodendrón, con diámetro variable en su trayecto."
      ],
      "ans": 2,
      "expl": "Lo que define al axón es el diámetro constante, la ramificación en ángulo recto y la ausencia de grumos de Nissl y de espinas. Las dendritas tienen diámetro variable, ramifican en ángulo agudo y conducen hacia el soma. Que se ramifique no lo hace dendrita: importa el ángulo.",
      "sec": "La neurona"
    },
    {
      "id": "P-nerv-4",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Por qué la conducción en una fibra mielínica es más rápida que en una amielínica?",
      "opts": [
        "Porque la célula de Schwann de la fibra mielínica no envuelve el axón, y por eso el impulso no pierde energía.",
        "Porque la fibra amielínica tiene más neuroqueratina, que aumenta la resistencia eléctrica del axón.",
        "Porque la fibra mielínica tiene incisuras de Schmidt-Lanterman, que canalizan el impulso por el interior del axón.",
        "Porque la despolarización salta de nodo en nodo de Ranvier, y en la amielínica recorre toda la membrana."
      ],
      "ans": 3,
      "expl": "En la fibra mielínica la membrana queda expuesta solo en los nodos de Ranvier, y el impulso salta de nodo en nodo (conducción saltatoria). En la amielínica la despolarización debe recorrer punto a punto toda la membrana, por eso es más lenta. La célula de Schwann sí envuelve el axón en ambos casos.",
      "sec": "Mielina, fibra nerviosa y conducción saltatoria"
    },
    {
      "id": "P-nerv-5",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Un paciente entiende lo que le dicen, pero no logra formar las palabras. ¿Qué área está afectada?",
      "opts": [
        "Área de Broca, en el lóbulo frontal, que es la que forma las palabras al producir el lenguaje.",
        "Área de Wernicke, en el lóbulo temporal, que coordina el movimiento de los músculos del habla.",
        "Cerebelo, que coordina el movimiento voluntario y el equilibrio necesarios para hablar.",
        "Área de Wernicke, en el lóbulo parietal, que procesa la percepción espacial del lenguaje."
      ],
      "ans": 0,
      "expl": "Entender pero no poder formar las palabras es un problema de producción del lenguaje, que es el área de Broca, en el lóbulo frontal. El área de Wernicke es la de la comprensión y está en el lóbulo temporal. El cerebelo coordina el movimiento, pero no es un lóbulo cortical.",
      "sec": "Lóbulos corticales · la cátedra lo toma"
    },
    {
      "id": "P-nerv-6",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué efecto tiene el sistema nervioso simpático sobre la vejiga y el recto?",
      "opts": [
        "Contrae la vejiga y relaja el recto, lo que facilita la micción y la defecación en el reposo habitual.",
        "Relaja la vejiga y contrae el recto, lo que retiene la orina y las heces durante la respuesta de alarma.",
        "Relaja ambos órganos, porque el simpático siempre inhibe la musculatura lisa visceral en todo el cuerpo.",
        "Contrae ambos órganos, porque el simpático es el responsable de todo el peristaltismo digestivo y urinario."
      ],
      "ans": 1,
      "expl": "El simpático relaja la vejiga y contrae el recto, y el parasimpático hace lo inverso. Tiene sentido en modo luchar o huir: no conviene orinar ni digerir, así que el simpático retiene. La trampa es creer que el simpático contrae todo.",
      "sec": "Sistema nervioso autónomo, órgano por órgano"
    },
    {
      "id": "P-nerv-7",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué célula gliar conserva la barrera hematoencefálica en el sistema nervioso central?",
      "opts": [
        "La microglía, que fagocita desechos y estructuras lesionadas de origen mesodérmico.",
        "El oligodendrocito, que elabora la mielina de los axones del sistema nervioso central.",
        "El astrocito, que depura residuos neuronales y forma el tejido cicatrizal.",
        "La célula ependimaria, que reviste los ventrículos y participa en la producción del LCR."
      ],
      "ans": 2,
      "expl": "Cuando el enunciado dice barrera hematoencefálica o cicatriz, la respuesta es el astrocito: conserva la barrera y forma el tejido cicatrizal del SNC. La microglía fagocita, el oligodendrocito hace mielina y la ependimaria reviste los ventrículos.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-8",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué células de la glía revisten los ventrículos cerebrales y participan en la producción y circulación del LCR?",
      "opts": [
        "Las células satélite, que rodean el soma de las neuronas dentro de los ganglios del sistema periférico.",
        "Las células de Schwann, que envuelven los axones del sistema periférico y forman la mielina.",
        "Las células de la microglía, que fagocitan los restos de tejido dañado en el SNC.",
        "Las células ependimarias, de origen ectodérmico, que revisten los ventrículos y el canal del epéndimo."
      ],
      "ans": 3,
      "expl": "Las células ependimarias son el epitelio que reviste los ventrículos y el canal del epéndimo, y participan en la producción y circulación del LCR. Las satélite están en los ganglios, las de Schwann en el SNP y la microglía fagocita, así que ninguna cumple esa función.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-9",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué células rodean el cuerpo de las neuronas dentro de los ganglios del sistema nervioso periférico?",
      "opts": [
        "Las células satélite, de origen en la cresta neural, que regulan el microambiente del soma.",
        "Las células ependimarias, que revisten los ventrículos y el canal del epéndimo del SNC.",
        "Los astrocitos, que forman la barrera hematoencefálica en el sistema nervioso central.",
        "Los oligodendrocitos, que mielinizan los axones de las neuronas de los ganglios raquídeos."
      ],
      "ans": 0,
      "expl": "Las células satélite rodean el soma de las neuronas dentro de los ganglios del SNP y regulan su microambiente. Los astrocitos, los oligodendrocitos y las ependimarias son todas glía del SNC, no de los ganglios periféricos.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-10",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿De qué origen embrionario son las células de Schwann y las satélite?",
      "opts": [
        "Del tubo neural, que da origen al sistema nervioso central y a sus células de sostén.",
        "De la cresta neural, que se desprende del borde del tubo neural y migra por todo el embrión.",
        "De la médula ósea, que aporta las células de la microglía al sistema nervioso periférico.",
        "Del mesodermo, que forma las células de sostén de todo el sistema nervioso adulto."
      ],
      "ans": 1,
      "expl": "La cresta neural se desprende del borde del tubo, migra por el embrión y da el SNP, incluidas las células de Schwann y las satélite. El tubo neural da el SNC. La única excepción mesodérmica es la microglía, que viene de la médula ósea.",
      "sec": "Embriología: de una lámina de ectodermo a un tubo"
    },
    {
      "id": "P-nerv-11",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué vesícula encefálica secundaria da origen al tálamo y al hipotálamo?",
      "opts": [
        "El telencéfalo, que da los hemisferios cerebrales, la corteza y los ganglios basales.",
        "El mesencéfalo, que da la parte alta del tronco encefálico tras el desarrollo.",
        "El diencéfalo, que forma parte del prosencéfalo primario del embrión.",
        "El metencéfalo, que da la protuberancia y el cerebelo en el rombencéfalo."
      ],
      "ans": 2,
      "expl": "El prosencéfalo se divide en telencéfalo y diencéfalo, y el diencéfalo da el tálamo y el hipotálamo. El telencéfalo da los hemisferios y los ganglios basales, y el metencéfalo da la protuberancia y el cerebelo.",
      "sec": "Embriología: de una lámina de ectodermo a un tubo"
    },
    {
      "id": "P-nerv-12",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué estructura adulta deriva del mielencéfalo, la última vesícula encefálica?",
      "opts": [
        "La protuberancia, que forma el puente entre el cerebelo y el resto del tronco.",
        "El mesencéfalo, que forma la parte alta del tronco y el acueducto cerebral.",
        "El cerebelo, que se origina a partir del metencéfalo en el rombencéfalo embrionario.",
        "El bulbo raquídeo, que forma parte del tronco encefálico y controla la respiración."
      ],
      "ans": 3,
      "expl": "El mielencéfalo es la vesícula que da el bulbo raquídeo. La protuberancia y el cerebelo vienen del metencéfalo, que también es parte del rombencéfalo, y el mesencéfalo mantiene su nombre como parte alta del tronco.",
      "sec": "Embriología: de una lámina de ectodermo a un tubo"
    },
    {
      "id": "P-nerv-13",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Una neurona tiene una sola prolongación que se bifurca en forma de T, como las de los ganglios raquídeos. ¿Cómo se clasifica morfológicamente?",
      "opts": [
        "Seudounipolar, porque sus dos ramas se originan de un único tronco que sale del soma.",
        "Bipolar, porque tiene una dendrita y un axón que salen en polos opuestos del soma.",
        "Multipolar, porque tiene un axón y muchas dendritas que salen del cuerpo celular.",
        "Unipolar verdadera, porque tiene una sola prolongación que nunca se bifurca."
      ],
      "ans": 0,
      "expl": "Una sola prolongación que se bifurca en T es una neurona seudounipolar, típica de las neuronas sensitivas de los ganglios raquídeos. La bipolar tiene una dendrita y un axón en polos opuestos, y la multipolar tiene un axón y muchas dendritas.",
      "sec": "La neurona"
    },
    {
      "id": "P-nerv-14",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué tipo morfológico de neurona es la motoneurona del asta ventral de la médula?",
      "opts": [
        "Seudounipolar, con una prolongación que se bifurca en forma de T en el ganglio.",
        "Multipolar, con un axón y muchas dendritas, que es el tipo más común del SNC.",
        "Bipolar, con una dendrita y un axón en polos opuestos, como en la retina.",
        "Unipolar, con una sola prolongación que sale del soma y no se ramifica."
      ],
      "ans": 1,
      "expl": "La motoneurona del asta ventral es multipolar: tiene un axón y muchas dendritas, el tipo que predomina en el SNC. La seudounipolar es la sensitiva de los ganglios raquídeos y la bipolar se encuentra en retina, epitelio olfatorio y ganglio vestibulococlear.",
      "sec": "La neurona"
    },
    {
      "id": "P-nerv-15",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué es el nodo de Ranvier?",
      "opts": [
        "El punto donde el axón se une al soma y se origina el impulso nervioso en el cuerpo celular.",
        "La zona de la dendrita donde se forman las espinas que reciben la sinapsis de otras neuronas.",
        "La interrupción de la vaina de mielina entre dos células de Schwann, donde la membrana queda expuesta.",
        "El segmento del axón que se ramifica en el telodendrón y libera el neurotransmisor."
      ],
      "ans": 2,
      "expl": "El nodo de Ranvier es la interrupción de la vaina de mielina entre dos células de Schwann consecutivas, donde la membrana queda expuesta. Por eso el impulso salta de nodo en nodo. El cono axónico es el inicio del axón y el telodendrón es su final.",
      "sec": "Mielina, fibra nerviosa y conducción saltatoria"
    },
    {
      "id": "P-nerv-16",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué propiedad tiene el potencial de acción respecto de la intensidad del estímulo?",
      "opts": [
        "Es proporcional a la intensidad del estímulo, por eso un estímulo fuerte produce una amplitud mayor.",
        "Depende de la velocidad de la bomba de sodio y potasio, que regula la amplitud del impulso.",
        "Se atenúa con la distancia a lo largo del axón, por lo que necesita repetidas regeneraciones.",
        "Es de todo o nada: si supera el umbral se dispara completo, y la intensidad va en la frecuencia."
      ],
      "ans": 3,
      "expl": "El potencial de acción es todo o nada: si supera el umbral se dispara completo, y si no, no pasa nada. La intensidad del estímulo se codifica en la frecuencia de disparo, no en la amplitud. Por eso un estímulo más fuerte no da un impulso más grande.",
      "sec": "Sinapsis y potencial de acción"
    },
    {
      "id": "P-nerv-17",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué función cumple el tálamo dentro del diencéfalo?",
      "opts": [
        "Estación de relevo de la información sensorial que se dirige a la corteza cerebral.",
        "Regulación de la temperatura corporal, la frecuencia cardíaca y la presión arterial.",
        "Coordinación del movimiento voluntario, con el caudado, el putamen y el pálido como núcleos.",
        "Producción de la melatonina, que regula los ritmos circadianos durante la noche."
      ],
      "ans": 0,
      "expl": "El tálamo es la estación de relevo de la información sensorial que va a la corteza, y es parte del diencéfalo. Las otras funciones corresponden al hipotálamo (temperatura y presión), a los ganglios basales (movimiento) y al epitálamo (melatonina).",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-18",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué funciones vitales regula el hipotálamo?",
      "opts": [
        "La coordinación del movimiento, el equilibrio y la postura del cuerpo.",
        "La temperatura, la frecuencia cardíaca, la presión arterial y el apetito.",
        "La respiración, la deglución y la sensibilidad de la faringe y la lengua.",
        "La audición y la comprensión del lenguaje hablado en el hemisferio izquierdo."
      ],
      "ans": 1,
      "expl": "El hipotálamo regula las funciones vitales: temperatura corporal, frecuencia cardíaca, presión arterial y apetito, y es el puente con el sistema endócrino. La coordinación del movimiento es del cerebelo y la audición es del lóbulo temporal.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-19",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué función cumple el cerebelo?",
      "opts": [
        "Recibe la información sensorial y la envía a la corteza cerebral como estación de relevo.",
        "Regula las emociones y la motivación a través de las estructuras del sistema límbico.",
        "Coordina los movimientos del cuerpo, el equilibrio y la postura.",
        "Produce el líquido cefalorraquídeo que flota alrededor del encéfalo y la médula."
      ],
      "ans": 2,
      "expl": "El cerebelo coordina el movimiento, el equilibrio y la postura. No es estación de relevo, que es el tálamo, ni regula emociones, que es el sistema límbico. Tampoco produce LCR, que lo producen los plexos coroideos.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-20",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué estructura del telencéfalo controla el movimiento voluntario y la coordinación?",
      "opts": [
        "El tálamo, que es la estación de relevo de la información motora hacia la corteza.",
        "El hipotálamo, que regula los movimientos voluntarios a través de la hipófisis.",
        "El tronco encefálico, que coordina el movimiento a través del bulbo raquídeo.",
        "Los ganglios basales, como el caudado, el putamen y el pálido."
      ],
      "ans": 3,
      "expl": "Los ganglios basales (caudado, putamen y pálido) son telencéfalo y regulan el movimiento voluntario y la coordinación. El tálamo es relevo sensorial y el hipotálamo regula funciones vitales, y ambos son diencéfalo.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-21",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué función cumple el líquido cefalorraquídeo en el sistema nervioso central?",
      "opts": [
        "Amortigua mecánicamente el encéfalo, que flota y pesa mucho menos dentro del cráneo.",
        "Transmite los impulsos nerviosos entre las neuronas del sistema nervioso central.",
        "Produce la mielina de los axones del SNC y mantiene la conducción saltatoria.",
        "Forma la barrera hematoencefálica que impide el paso de células hacia el encéfalo."
      ],
      "ans": 0,
      "expl": "El LCR amortigua mecánicamente el encéfalo: este flota y pesa mucho menos. Además cumple homeostasis química y transporta metabolitos. No transmite impulsos, no hace mielina y la barrera hematoencefálica la conservan los astrocitos.",
      "sec": "Meninges y líquido cefalorraquídeo"
    },
    {
      "id": "P-nerv-22",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué meninge es la más externa, gruesa y resistente, y aporta la protección mecánica?",
      "opts": [
        "La aracnoides, que es laxa y avascular y por debajo tiene el espacio subaracnoideo.",
        "La duramadre, que contacta con el hueso del cráneo y es la capa más resistente.",
        "La piamadre, que es finísima, vascularizada y sigue cada surco del encéfalo.",
        "La pleura parietal, que tapiza la pared torácica y protege los pulmones."
      ],
      "ans": 1,
      "expl": "La duramadre es la capa más externa, gruesa, fibrosa y resistente, y es la que aporta la protección mecánica. La aracnoides es laxa y avascular, y la piamadre es finísima, vascularizada y adherida al encéfalo. La pleura no es una meninge.",
      "sec": "Meninges y líquido cefalorraquídeo"
    },
    {
      "id": "P-nerv-23",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué par craneal es motor y controla el músculo recto lateral del ojo, que gira el globo ocular hacia afuera?",
      "opts": [
        "El par III, el nervio oculomotor, que controla la mayoría de los músculos del ojo.",
        "El par IV, el nervio troclear, que mueve el músculo oblicuo superior del ojo.",
        "El par VI, el nervio abducens o motor ocular externo.",
        "El par VII, el nervio facial, que controla los músculos de la expresión facial."
      ],
      "ans": 2,
      "expl": "El par VI, abducens, es motor e inerva el músculo recto lateral del ojo. El oculomotor (III) mueve la mayoría de los músculos oculares y el troclear (IV) solo el oblicuo superior. El facial (VII) controla la expresión facial.",
      "sec": "Pares craneales"
    },
    {
      "id": "P-nerv-24",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué par craneal es mixto y regula funciones de los órganos del tórax y del abdomen, como el corazón y el tubo digestivo?",
      "opts": [
        "El par XI, el nervio accesorio, que controla los músculos del cuello y de los hombros.",
        "El par XII, el nervio hipogloso, que mueve los músculos de la lengua y la faringe.",
        "El par V, el nervio trigémino, que da sensibilidad a la cara y a la cavidad bucal.",
        "El par X, el nervio vago, que también interviene en la fonación y la deglución."
      ],
      "ans": 3,
      "expl": "El vago (X) es mixto y regula órganos del tórax y del abdomen, como corazón, pulmones y tubo digestivo, además de la fonación y la deglución. El accesorio (XI) es motor de cuello y hombros y el hipogloso (XII) mueve la lengua.",
      "sec": "Pares craneales"
    },
    {
      "id": "P-nerv-25",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué estructura forma el cuerpo calloso?",
      "opts": [
        "Las fibras de asociación, que conectan regiones de un mismo hemisferio en trayecto longitudinal.",
        "Las fibras de proyección, que comunican la corteza con estructuras inferiores en trayecto vertical.",
        "Las fibras comisurales, que unen un hemisferio cerebral con el otro en trayecto transversal.",
        "Los ganglios basales, que coordinan el movimiento voluntario desde el telencéfalo."
      ],
      "ans": 2,
      "expl": "El cuerpo calloso une los dos hemisferios, así que está formado por fibras comisurales, de trayecto transversal. Las de asociación conectan regiones del mismo hemisferio y las de proyección comunican la corteza con estructuras inferiores.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-26",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué lóbulo cerebral procesa la información visual que llega desde la retina?",
      "opts": [
        "El temporal, debajo del surco lateral, donde está el área de Wernicke.",
        "El parietal, detrás del surco central, que procesa la sensibilidad somática.",
        "El frontal, que contiene el área de Broca y la planificación motora.",
        "El occipital, en el polo posterior del cerebro, detrás del surco parietooccipital."
      ],
      "ans": 3,
      "expl": "El lóbulo occipital se encarga de la recepción y la interpretación visual. El temporal procesa audición y comprensión del lenguaje, el parietal la sensibilidad somática y el frontal el juicio, la planificación y el área de Broca.",
      "sec": "Lóbulos corticales · la cátedra lo toma"
    },
    {
      "id": "P-nerv-27",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué funciones cumple el nervio vestibulococlear, el par VIII?",
      "opts": [
        "Audición y equilibrio, y es un nervio sensitivo.",
        "Movimiento de los músculos de la lengua y la faringe, y es un nervio motor.",
        "Control de la expresión facial y de las glándulas lagrimales, y es un nervio mixto.",
        "Movimiento del globo ocular hacia afuera, y es un nervio motor."
      ],
      "ans": 0,
      "expl": "El nervio vestibulococlear (VIII) es sensitivo y se ocupa de la audición y el equilibrio. Las otras opciones describen al hipogloso (lengua), al facial (expresión facial) y al abducens (ojo hacia afuera).",
      "sec": "Pares craneales"
    },
    {
      "id": "P-nerv-28",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué estructura forma el cuarto ventrículo del sistema ventricular?",
      "opts": [
        "Un espacio en el telencéfalo, en contacto con el hipocampo y la amígdala.",
        "Un espacio detrás del tronco encefálico, que se relaciona con el LCR.",
        "Un espacio en el diencéfalo, que se ubica en el centro del tálamo.",
        "Un espacio en el mesencéfalo, que se comunica con el espacio subdural."
      ],
      "ans": 1,
      "expl": "El LCR circula por el sistema ventricular, y el cuarto ventrículo está detrás del tronco encefálico. Los ventrículos laterales están en el telencéfalo y el tercero en el diencéfalo, que son los espacios de las otras opciones.",
      "sec": "Meninges y líquido cefalorraquídeo"
    },
    {
      "id": "P-nerv-29",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué surco separa el lóbulo temporal del lóbulo frontal?",
      "opts": [
        "El surco central, que separa el frontal del parietal.",
        "El surco parietooccipital, que separa el parietal del occipital.",
        "El surco lateral, que se ubica debajo del lóbulo frontal y separa el temporal.",
        "El surco de la ínsula, que separa el lóbulo frontal del límbico."
      ],
      "ans": 2,
      "expl": "El lóbulo temporal queda debajo del surco lateral, que lo separa del frontal y del parietal. El surco central separa el frontal del parietal, y el parietooccipital separa el parietal del occipital.",
      "sec": "Lóbulos corticales · la cátedra lo toma"
    },
    {
      "id": "P-nerv-30",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué es la cola de caballo?",
      "opts": [
        "Una estructura del tronco encefálico que coordina la respiración y la presión arterial.",
        "La parte del cerebelo que coordina el equilibrio y la postura del cuerpo.",
        "La capa externa de las meninges, que contacta con el hueso del cráneo.",
        "El conjunto de nervios lumbares, sacros y bajos que desciende por el canal vertebral desde L1-L2."
      ],
      "ans": 3,
      "expl": "La cola de caballo es el conjunto de nervios lumbares, sacros y bajos que desciende por el canal vertebral desde la parte inferior de la médula, a la altura de L1-L2. No es una estructura del encéfalo ni una meninge.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-31",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Durante la inducción neural, ¿qué estructura induce la formación de la placa neural a partir del ectodermo?",
      "opts": [
        "La notocorda, que induce la placa neural tras la gastrulación.",
        "La cresta neural, que se desprende del borde del tubo neural.",
        "El surco neural, que se cierra para formar el tubo neural.",
        "El tubo neural, que da origen al encéfalo y a la médula espinal."
      ],
      "ans": 0,
      "expl": "Después de la gastrulación, la notocorda induce la placa neural, que luego se pliega en surco y se cierra en tubo. El surco y el tubo son pasos posteriores de la secuencia, y la cresta neural es la que da el SNP.",
      "sec": "Embriología: de una lámina de ectodermo a un tubo"
    },
    {
      "id": "P-nerv-32",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Cuál de las siguientes afirmaciones sobre la organización del sistema nervioso NO es correcta?",
      "opts": [
        "El SNC está formado por el encéfalo y la médula espinal.",
        "El SNP se divide en un componente somático y uno autónomo.",
        "El SNA se divide en simpático, parasimpático y entérico.",
        "La médula espinal es parte del SNP, junto a los ganglios."
      ],
      "ans": 3,
      "expl": "La médula espinal es SNC. Lo periférico son los nervios raquídeos que salen de ella, los ganglios y los plexos. Las otras tres afirmaciones describen bien el esquema, en el que el SNA es una rama del SNP.",
      "sec": "Las dos divisiones: anatómica y funcional"
    },
    {
      "id": "P-nerv-33",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Dónde se encuentran las neuronas bipolares, con una dendrita y un axón en polos opuestos?",
      "opts": [
        "En los ganglios raquídeos, donde están las neuronas sensitivas.",
        "En la retina, el epitelio olfatorio y el ganglio vestibulococlear.",
        "En el asta ventral de la médula, donde están las motoneuronas.",
        "En la mayor parte del SNC, donde predominan las neuronas multipolares."
      ],
      "ans": 1,
      "expl": "Las neuronas bipolares se encuentran en la retina, el epitelio olfatorio y el ganglio vestibulococlear. Las sensitivas de los ganglios raquídeos son seudounipolares y las motoneuronas del asta ventral son multipolares.",
      "sec": "La neurona"
    },
    {
      "id": "P-nerv-34",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué tipo funcional de neurona lleva la orden desde el SNC hasta un músculo o una glándula?",
      "opts": [
        "La neurona sensitiva, que lleva la información del receptor al SNC.",
        "La interneurona, que conecta neuronas dentro del SNC.",
        "La neurona motora, que lleva la orden del SNC al efector.",
        "La neurona seudounipolar, que se bifurca en forma de T."
      ],
      "ans": 2,
      "expl": "La neurona motora (eferente) lleva la orden del SNC al efector, que es un músculo o una glándula, en sentido centro-periferia. La sensitiva va de la periferia al centro y la interneurona conecta neuronas dentro del SNC.",
      "sec": "La neurona"
    },
    {
      "id": "P-nerv-35",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Cuál de estas células gliales NO es de origen ectodérmico?",
      "opts": [
        "El astrocito, que forma el tejido cicatrizal en el SNC.",
        "El oligodendrocito, que elabora la mielina en el SNC.",
        "La célula ependimaria, que reviste los ventrículos.",
        "La microglía, que fagocita y viene de la médula ósea."
      ],
      "ans": 3,
      "expl": "La microglía viene de la médula ósea, así que es mesodérmica: es la única excepción. Astrocitos, oligodendrocitos y ependimarias son ectodérmicos, igual que las células de Schwann.",
      "sec": "Neuroglía: la pregunta de distractores vecinos por excelencia"
    },
    {
      "id": "P-nerv-36",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "En un corte de nervio periférico los axones se ven como anillos y hay incisuras de Schmidt-Lanterman. ¿Qué fibra es?",
      "opts": [
        "Mielínica: una célula de Schwann por segmento de un solo axón.",
        "Amielínica: una célula de Schwann que envuelve muchos axones.",
        "Amielínica: un axón desnudo, sin ninguna célula de Schwann asociada.",
        "Mielínica del SNC: la vaina la forma una célula ependimaria."
      ],
      "ans": 0,
      "expl": "Los axones en anillo y las incisuras de Schmidt-Lanterman son propios de la fibra mielínica, con una célula de Schwann por segmento de un axón. La amielínica no muestra axones ni incisuras, y la mielina del SNC la hace el oligodendrocito.",
      "sec": "Mielina, fibra nerviosa y conducción saltatoria"
    },
    {
      "id": "P-nerv-37",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué estructura forma parte del tronco encefálico?",
      "opts": [
        "El cerebelo, que coordina el movimiento, el equilibrio y la postura.",
        "La protuberancia, junto con el mesencéfalo y el bulbo raquídeo.",
        "El tálamo, que hace de relevo de la información sensorial.",
        "El hipotálamo, que es el puente con el sistema endócrino."
      ],
      "ans": 1,
      "expl": "El tronco encefálico tiene tres piezas: mesencéfalo, protuberancia y bulbo raquídeo. El cerebelo no forma parte del tronco, y el tálamo y el hipotálamo son diencéfalo.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-38",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "En un corte transversal de médula espinal, ¿dónde se ubica la sustancia gris y qué forma tiene?",
      "opts": [
        "Periférica, formando una corteza externa, como en el cerebro.",
        "Periférica, con forma de H rodeando a la sustancia blanca.",
        "Central, con forma de H y con astas posteriores y anteriores.",
        "Central, y es la que se tiñe de azul con Klüver-Barrera."
      ],
      "ans": 2,
      "expl": "En la médula la sustancia gris es central, en forma de H, con astas dorsal y ventral, y la blanca es periférica. Es al revés que en el cerebro. Con Klüver-Barrera se tiñe de azul la blanca, por la mielina, no la gris.",
      "sec": "Anatomía del SNC"
    },
    {
      "id": "P-nerv-39",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Un paciente sufre una lesión en el lóbulo occipital. ¿Qué función se ve afectada?",
      "opts": [
        "La recepción y la interpretación de la información visual.",
        "La audición y la comprensión del lenguaje (área de Wernicke).",
        "Tacto, dolor y temperatura (percepción somatosensorial).",
        "El juicio, la planificación y la inhibición del comportamiento."
      ],
      "ans": 0,
      "expl": "El lóbulo occipital recibe e interpreta la información visual. La audición y Wernicke son del temporal, la somatosensibilidad del parietal y el juicio y la planificación del frontal.",
      "sec": "Lóbulos corticales · la cátedra lo toma"
    },
    {
      "id": "P-nerv-40",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Cuál de los siguientes pares craneales es sensitivo?",
      "opts": [
        "El par VII, facial, con músculos de la expresión facial.",
        "El par II, óptico, que transmite la visión desde la retina.",
        "El par XI, accesorio, con esternocleidomastoideo y trapecio.",
        "El par IX, glosofaríngeo, con deglución y glándula parótida."
      ],
      "ans": 1,
      "expl": "El óptico (II) es sensitivo: transmite la información visual desde la retina. El facial y el glosofaríngeo son mixtos, y el accesorio es motor.",
      "sec": "Pares craneales"
    },
    {
      "id": "P-nerv-41",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué sistema arterial irriga el tronco encefálico, el cerebelo y el lóbulo occipital?",
      "opts": [
        "La circulación anterior, a través de la carótida interna.",
        "El sistema carotídeo, por las arterias cerebrales anterior y media.",
        "El sistema vertebrobasilar, por las vertebrales y la basilar.",
        "El seno cavernoso, a los lados de la silla turca."
      ],
      "ans": 2,
      "expl": "La circulación posterior, vertebrobasilar, irriga el tronco encefálico, el cerebelo, el occipital y parte del temporal. El sistema carotídeo irriga sobre todo frontal, parietal y temporal. El seno cavernoso es un seno venoso de la duramadre.",
      "sec": "Irrigación del encéfalo: dos sistemas unidos por el polígono de Willis"
    },
    {
      "id": "P-nerv-42",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Ante una situación de peligro se activa el simpático. ¿Qué efecto se espera?",
      "opts": [
        "Contracción de los bronquios y aumento de la salivación.",
        "Disminución del ritmo cardíaco y contracción de la pupila.",
        "Estimulación de la actividad digestiva y contracción vesical.",
        "Dilatación de la pupila y liberación de glucosa hepática."
      ],
      "ans": 3,
      "expl": "El simpático prepara para luchar o huir: dilata la pupila y estimula la liberación de glucosa del hígado. Las otras opciones describen efectos del parasimpático, como contraer bronquios y pupila o estimular la digestión.",
      "sec": "Sistema nervioso autónomo, órgano por órgano"
    },
    {
      "id": "P-nerv-43",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Un sistema de neurofeedback debe detectar relajación mental y descanso. ¿Qué onda cerebral debe aislar?",
      "opts": [
        "Alpha, que es la de la relajación mental y del descanso.",
        "Theta, que es la propia de la duermevela y del subconsciente.",
        "Delta, que es la propia de dormir y de soñar a la vez.",
        "Beta, que es la propia de la vigilia atenta y despierta."
      ],
      "ans": 0,
      "expl": "La onda alpha corresponde a la relajación mental y al descanso. Theta es la duermevela, delta es dormir y soñar, y beta es la vigilia atenta.",
      "sec": "Ondas cerebrales"
    },
    {
      "id": "P-nerv-44",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué función del sistema nervioso envía señales a los músculos y a las glándulas?",
      "opts": [
        "La sensorial, que recibe la información mediante receptores.",
        "La motora, que envía las señales a músculos y glándulas.",
        "La integradora, que procesa la información con la memoria.",
        "La transductora, que convierte el estímulo en impulsos."
      ],
      "ans": 1,
      "expl": "La función motora envía las señales a los efectores, que son los músculos y las glándulas. La sensorial recibe la información, y la integradora la procesa y la integra con la memoria.",
      "sec": "Las tres funciones, que ordenan todo lo demás"
    },
    {
      "id": "P-nerv-45",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "¿Qué vesícula encefálica primaria da origen al metencéfalo?",
      "opts": [
        "El prosencéfalo, que además origina el telencéfalo y el diencéfalo.",
        "El mesencéfalo, que forma la parte alta del tronco encefálico.",
        "El rombencéfalo, que origina el metencéfalo y el mielencéfalo.",
        "El diencéfalo, que origina el tálamo y el hipotálamo."
      ],
      "ans": 2,
      "expl": "El rombencéfalo se divide en metencéfalo (protuberancia y cerebelo) y mielencéfalo (bulbo raquídeo). El prosencéfalo da telencéfalo y diencéfalo, y el mesencéfalo se mantiene como tal.",
      "sec": "Embriología: de una lámina de ectodermo a un tubo"
    },
    {
      "id": "P-nerv-46",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Un paciente presenta caída del párpado (ptosis), pupila dilatada que no se contrae con la luz y dificultad para enfocar. ¿Qué par craneal está lesionado?",
      "opts": [
        "Troclear (IV)",
        "Trigémino (V)",
        "Oculomotor (III)",
        "Abducens (VI)"
      ],
      "ans": 2,
      "expl": "El oculomotor inerva la mayoría de los músculos del ojo: elevador del párpado, constricción pupilar y enfoque. La trampa son el troclear (solo oblicuo superior) y el abducens (solo recto lateral), que no afectan párpado ni pupila.",
      "sec": "Pares craneales"
    },
    {
      "id": "P-nerv-47",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "En la vía sensitiva que llega a la médula espinal, ¿por dónde ingresa la información y dónde está el soma de la primera neurona?",
      "opts": [
        "Por la raíz anterior; el soma está en el asta ventral",
        "Por la raíz posterior; el soma está en el ganglio raquídeo",
        "Por la raíz posterior; el soma está en el asta lateral",
        "Por la raíz anterior; el soma está en el ganglio raquídeo"
      ],
      "ans": 1,
      "expl": "La información sensitiva entra por la raíz dorsal (posterior) y su soma está en el ganglio raquídeo, fuera de la médula. La raíz ventral y el asta ventral corresponden a la vía motora, y el asta lateral aloja somas viscerales del simpático.",
      "sec": "Vías sensitivas y motoras"
    }
  ],
  "bioingenieria": [
    {
      "id": "P-bioi-1",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un material debe resistir tracción en una sola dirección, como un tendón. ¿Qué tejido cumple ese requisito?",
      "opts": [
        "Tejido conjuntivo denso modelado, con colágeno tipo I orientado en una dirección.",
        "Tejido conjuntivo laxo, con fibras elásticas dispersas en una matriz abundante.",
        "Cartílago hialino, con condrocitos en lagunas que amortiguan la compresión mecánica.",
        "Músculo liso, con contracción lenta y sostenida dentro de la pared de un tubo."
      ],
      "ans": 0,
      "expl": "Resistir tracción en una sola dirección, como un tendón, se traduce a tejido conjuntivo denso modelado, con colágeno tipo I. La trampa es elegir el tejido por su nombre y no por el requisito: el cartílago amortigua compresión y el músculo liso contrae, pero ninguno resiste tracción.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-2",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un epitelio artificial debe impedir el paso de moléculas entre células y, además, resistir la separación mecánica. ¿Qué uniones se necesitan?",
      "opts": [
        "Uniones comunicantes, para impedir el paso de moléculas, y uniones de anclaje, para la resistencia mecánica.",
        "Uniones estrechas para la barrera, y uniones de anclaje (adherens y desmosomas) para la resistencia.",
        "Desmosomas para la barrera impermeable, y uniones estrechas para la resistencia mecánica entre las células.",
        "Uniones comunicantes para la barrera, y cilios para unir las células entre sí sobre la superficie."
      ],
      "ans": 1,
      "expl": "La barrera impermeable entre células la dan las uniones estrechas (zonula occludens). La resistencia mecánica la dan las uniones de anclaje: zonula adherens y desmosomas. Las uniones comunicantes son para el paso de iones, así que no sirven de barrera.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-3",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En el riñón descelularizado, la reabsorción de glucosa cae a 2,8 %; al resembrar células vuelve a 47,4 %. ¿Qué conclusión sostiene la evidencia?",
      "opts": [
        "La reabsorción de glucosa depende del andamio de colágeno, que se reconstituye al sembrar las células nuevas.",
        "La glucosa se reabsorbe por la membrana basal glomerular, que sólo se pierde al descelularizar el riñón.",
        "La reabsorción de glucosa depende del epitelio tubular proximal y de sus transportadores, no de la matriz.",
        "La reabsorción de glucosa depende de la presión de perfusión, que sube de 40 a 120 mmHg en el andamio."
      ],
      "ans": 2,
      "expl": "La reabsorción de glucosa cayó a 2,8 % al quitar las células y volvió a 47,4 % al resembrarlas. Eso indica que la función depende del epitelio tubular, que recupera su polaridad, y no de la matriz. La guía advierte que conservar la arquitectura no es conservar la función.",
      "sec": "Paper 1: riñón bioingenierizado"
    },
    {
      "id": "P-bioi-4",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un proyecto necesita generar células de endodermo y de mesodermo, dos capas germinales distintas, a partir de una única fuente. ¿Qué tipo de célula madre se necesita?",
      "opts": [
        "Una célula totipotente, porque forma el organismo completo y también sus anexos embrionarios.",
        "Una célula multipotente de médula ósea, que forma varios tipos celulares dentro de su linaje.",
        "Una célula unipotente de neumocito tipo II, que regenera los neumocitos tipo I del alvéolo.",
        "Una célula pluripotente, porque genera las tres capas germinales, aunque sin formar anexos."
      ],
      "ans": 3,
      "expl": "Para formar linajes de dos capas germinales distintas hace falta una célula pluripotente. La multipotente no cruza capas y la totipotente sobra porque además forma anexos. Pluripotente es una potencialidad, no un origen.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-5",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En un constructo de alginato con Ca²⁺, implantado en ratas ovariectomizadas, el estradiol cae desde el día 40 y el constructo se endurece. ¿Qué causa dan los autores?",
      "opts": [
        "Falla del material: el calcio precipita y el constructo se calcifica, comprometiendo la difusión.",
        "Inflamación del omento por reacción al implante, que destruye con el tiempo las células de la granulosa.",
        "Luteinización prematura de las células de la granulosa, que dejan de secretar estradiol en la sangre.",
        "Toxicidad del alginato sobre las células de la teca, que dejan de producir androstenediona in vivo."
      ],
      "ans": 0,
      "expl": "Los autores explican la caída del estradiol como una falla del material, no de las células: el calcio precipita con el tiempo y el constructo se calcifica, lo que compromete la difusión. Con Sr²⁺ el estradiol se mantuvo estable, así que no hubo luteinización prematura.",
      "sec": "Paper 2: constructo ovárico encapsulado"
    },
    {
      "id": "P-bioi-6",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Se cultiva un organoide neural a partir de precursores ectodérmicos y se quiere modelar neuroinflamación. ¿Qué agregado hace falta?",
      "opts": [
        "Astrocitos, porque son las células que forman la cicatriz y mantienen la barrera hematoencefálica.",
        "Microglía de linaje hematopoyético, porque es la única glía del SNC que no es ectodérmica.",
        "Oligodendrocitos, que elaboran la mielina de los axones centrales que forman el organoide.",
        "Células de Schwann, derivadas de la cresta neural, que envuelven los axones centrales del organoide."
      ],
      "ans": 1,
      "expl": "Para modelar neuroinflamación en un organoide hay que agregar microglía, que es la única glía no ectodérmica. Los astrocitos y los oligodendrocitos ya derivan del ectodermo, por eso un organoide hecho de precursores ectodérmicos no la trae.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-7",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un andamio necesita sostén, una matriz abundante y relleno entre células. ¿Qué tejido cumple ese requisito?",
      "opts": [
        "El tejido epitelial, que forma láminas de células unidas que cubren las superficies.",
        "El tejido muscular liso, que genera fuerza por contracción lenta y sostenida.",
        "El tejido conjuntivo, con una matriz extracelular abundante que da sostén y relleno.",
        "El tejido nervioso, que transmite impulsos eléctricos a lo largo de la matriz."
      ],
      "ans": 2,
      "expl": "Un andamio con matriz abundante, sostén y relleno se traduce a tejido conjuntivo. La clave del requisito es la matriz extracelular abundante. Los otros tejidos se definen por otras funciones: cubrir, contraer o conducir impulsos.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-8",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué componente de la matriz extracelular retiene agua y favorece la difusión de nutrientes?",
      "opts": [
        "Las fibras de colágeno, que aportan la resistencia a la tracción dentro de la matriz.",
        "Las fibras elásticas, que se estiran y recuperan su forma tras la deformación.",
        "Las microvellosidades, que aumentan la superficie de absorción de la membrana apical.",
        "Los glucosaminoglicanos, que forman el componente amorfo de la matriz."
      ],
      "ans": 3,
      "expl": "Retener agua y favorecer la difusión en la matriz es función de los glucosaminoglicanos, el componente amorfo. Las fibras colágenas son el componente fibrilar y se encargan de la tracción. Las microvellosidades son de la superficie de las células, no de la matriz.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-9",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué componente de la matriz resiste la tracción dentro de ella?",
      "opts": [
        "Las fibras colágenas, que forman el componente fibrilar de la matriz extracelular.",
        "Los glucosaminoglicanos, que retienen agua y forman el componente amorfo de la matriz.",
        "Las fibras elásticas, que se estiran sin romperse y vuelven a su longitud original.",
        "La lámina basal, que une el epitelio al tejido conjuntivo subyacente por debajo."
      ],
      "ans": 0,
      "expl": "Resistir tracción dentro de la matriz es función de las fibras colágenas, el componente fibrilar. No hay que confundirlas con los glucosaminoglicanos, que son el componente amorfo y sirven para retener agua.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-10",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Para impedir el paso de moléculas entre células de un epitelio, ¿qué unión se necesita?",
      "opts": [
        "Las uniones comunicantes o nexos, que permiten el paso de iones y moléculas pequeñas.",
        "Las uniones estrechas o zonula occludens, que forman la barrera impermeable.",
        "Los desmosomas, que dan resistencia mecánica pero no impiden el paso de moléculas.",
        "Los cilios, que mueven el fluido sobre la superficie del epitelio hacia el exterior."
      ],
      "ans": 1,
      "expl": "La barrera impermeable entre células es de las uniones estrechas (zonula occludens). Los desmosomas son uniones de anclaje y dan resistencia mecánica, y los nexos permiten el paso de iones, o sea lo contrario de una barrera.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-11",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué estructura permite el acople eléctrico entre fibras del miocardio y mantiene la contracción rítmica?",
      "opts": [
        "Las uniones estrechas, que impermeabilizan los discos intercalares de las fibras cardíacas.",
        "Los cilios, que se extienden por la superficie de las fibras musculares del corazón.",
        "Los nexos o uniones comunicantes, dentro de los discos intercalares de las fibras cardíacas.",
        "Las microvellosidades, que aumentan la superficie de contacto entre las fibras del miocardio."
      ],
      "ans": 2,
      "expl": "El acople eléctrico del miocardio lo dan los nexos (uniones comunicantes), que están en los discos intercalares. Permiten el paso de iones entre fibras y mantienen la contracción rítmica. Las uniones estrechas son una barrera, no un canal.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-12",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué estructura mueve fluidos sobre la superficie de un epitelio, como en la vía aérea?",
      "opts": [
        "Las microvellosidades, que aumentan la superficie de absorción de la célula.",
        "Los desmosomas, que unen las células y dan resistencia mecánica al tejido.",
        "Los nexos, que comunican las células y acoplan la conducción eléctrica.",
        "Los cilios, que son prolongaciones móviles de la célula epitelial."
      ],
      "ans": 3,
      "expl": "Mover fluidos sobre el epitelio es función de los cilios. Las microvellosidades se confunden fácil, pero sirven para maximizar la superficie de absorción, no para mover líquido.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-13",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué tejido amortigua la compresión y tiene una superficie de deslizamiento?",
      "opts": [
        "El cartílago hialino, que amortigua compresión y tiene superficie de deslizamiento.",
        "El tejido óseo, que resiste carga y actúa como reservorio de calcio en la sangre.",
        "El tejido conjuntivo denso, que resiste la tracción en una sola dirección.",
        "El músculo esquelético, que se contrae con rapidez y fuerza voluntaria."
      ],
      "ans": 0,
      "expl": "Amortiguar la compresión con una superficie de deslizamiento es propio del cartílago hialino. El tejido óseo resiste carga y es reservorio de calcio, y el conjuntivo denso resiste tracción.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-14",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué tejido resiste carga y actúa como reservorio de calcio bajo el control de la PTH y la calcitonina?",
      "opts": [
        "El cartílago hialino, que amortigua la compresión y tiene una matriz sin vasos.",
        "El tejido óseo, que se regula por la PTH y la calcitonina para mantener la calcemia.",
        "El tejido conjuntivo laxo, que sirve de relleno y sostén entre los órganos del cuerpo.",
        "El músculo liso, que se regula por la PTH para mantener el tono de las arterias."
      ],
      "ans": 1,
      "expl": "Resistir carga y ser reservorio de calcio es propio del tejido óseo, que está bajo el control de la PTH y la calcitonina. El cartílago hialino amortigua compresión, pero no se asocia a ese control hormonal del calcio.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-15",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué tipo de músculo genera una contracción rítmica e involuntaria con acople eléctrico entre sus fibras?",
      "opts": [
        "El músculo esquelético, con fibras multinucleadas que se contraen de forma voluntaria.",
        "El músculo liso, con contracción lenta y sostenida en la pared de los vasos y el tubo digestivo.",
        "El músculo cardíaco, con discos intercalares que tienen nexos para el acople eléctrico.",
        "El músculo cardíaco, con fibras sin nexos que se contraen de forma independiente."
      ],
      "ans": 2,
      "expl": "La contracción rítmica e involuntaria con acople eléctrico es del músculo cardíaco, que tiene nexos en los discos intercalares. La opción gemela dice que no tiene nexos, y eso es falso. El esquelético es voluntario y el liso es lento.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-16",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué tipo de músculo se contrae de forma lenta y sostenida en la pared de un tubo, como en los vasos o en el tubo digestivo?",
      "opts": [
        "El músculo esquelético, que genera contracciones rápidas y finas bajo control voluntario.",
        "El músculo cardíaco, que se contrae de forma rítmica y acopla sus fibras por nexos.",
        "El músculo estriado, con sarcómeros que se acortan de forma rápida y sostenida.",
        "El músculo liso, con contracción lenta y sostenida en la pared de los órganos."
      ],
      "ans": 3,
      "expl": "La contracción lenta y sostenida en la pared de un tubo es del músculo liso. El esquelético es rápido, voluntario y fino, y el cardíaco es rítmico con acople eléctrico. El estriado no encaja con una contracción lenta de la pared de un tubo.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-17",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Para un parche de piel que proteja y permita respirar, ¿qué tejido debe formar la base?",
      "opts": [
        "Epidermis delgada sobre dermis, que protegen y permiten el intercambio de gases y humedad.",
        "Tejido óseo compacto, que aporta la resistencia mecánica necesaria para la protección.",
        "Músculo esquelético, que contrae la piel para cerrar las heridas y proteger el tejido.",
        "Cartílago hialino, que da flexibilidad y amortigua la compresión sobre la superficie."
      ],
      "ans": 0,
      "expl": "Un parche de piel que proteja y respire se traduce a epidermis delgada más dermis. Los otros tejidos tienen otras funciones: carga, contracción voluntaria o amortiguar compresión.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-18",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Si un parche de piel debe pigmentarse, ¿qué célula conviene sembrar?",
      "opts": [
        "Fibroblastos, que producen colágeno en la dermis del parche.",
        "Melanocitos, que producen la melanina que pigmenta la piel.",
        "Queratinocitos, que forman la epidermis y producen la queratina del estrato córneo.",
        "Células de Langerhans, que actúan como células presentadoras de antígenos."
      ],
      "ans": 1,
      "expl": "Para que el parche pigmente hay que sembrar melanocitos. Los queratinocitos y los fibroblastos forman la piel, pero el requisito de pigmentar se traduce solo a melanocitos.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-19",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué estructura minimiza la distancia de difusión en el intercambio gaseoso pulmonar?",
      "opts": [
        "La tráquea, cuyos anillos cartilaginosos mantienen la vía aérea abierta durante la inspiración.",
        "Los bronquios principales, que se dividen en lobares y segmentarios hasta los bronquiolos.",
        "La barrera alveolocapilar, con neumocito I, membranas basales fusionadas y endotelio capilar.",
        "La pleura visceral, que se adhiere al pulmón y se mete en las fisuras entre los lóbulos."
      ],
      "ans": 2,
      "expl": "El intercambio gaseoso con mínima distancia se traduce a la barrera alveolocapilar: neumocito I, membranas basales fusionadas y endotelio. La tráquea y los bronquios son vías de conducción del aire, no el sitio del intercambio.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-20",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué sustancia evita que la superficie del alvéolo colapse al final de la espiración?",
      "opts": [
        "La mucina, que secretan las células caliciformes y que atrapa las partículas inhaladas.",
        "La melanina, que secretan los melanocitos y que protege la superficie alveolar de la luz.",
        "La histamina, que liberan los mastocitos y que dilata los bronquiolos durante la espiración.",
        "El surfactante, que secretan los neumocitos II y baja la tensión superficial alveolar."
      ],
      "ans": 3,
      "expl": "Para que la superficie alveolar no colapse se necesita el surfactante del neumocito II. Las otras sustancias vienen de otras células y no cumplen ese requisito.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-21",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Para un conducto que soporte una presión pulsátil alta y la transforme en un flujo más continuo, ¿qué tipo de vaso conviene modelar?",
      "opts": [
        "Una arteria elástica, cuya media tiene láminas elásticas fenestradas que almacenan energía.",
        "Una vena de gran calibre, cuya adventicia gruesa soporta la presión arterial pulsátil.",
        "Un capilar fenestrado, cuyos poros permiten el filtrado del plasma bajo presión alta.",
        "Una arteriola de resistencia, con músculo liso que regula el flujo hacia cada órgano."
      ],
      "ans": 0,
      "expl": "Un conducto con presión pulsátil alta se traduce a arteria elástica. El capilar, en cambio, es para el intercambio con el intersticio. Hay que traducir el requisito antes de mirar las opciones.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-22",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué estructuras de la barrera glomerular retienen las proteínas plasmáticas y dejan pasar el plasma?",
      "opts": [
        "El endotelio fenestrado del glomérulo, que retiene las proteínas por su tamaño de poro.",
        "La membrana basal glomerular junto con los podocitos y sus hendiduras de filtración.",
        "La cápsula de Bowman, cuyo epitelio parietal plano simple impide el paso de proteínas.",
        "El túbulo contorneado proximal, que reabsorbe las proteínas filtradas en el borde en cepillo."
      ],
      "ans": 1,
      "expl": "Filtrar plasma reteniendo proteínas se traduce a membrana basal glomerular más podocitos. La reabsorción selectiva es otro requisito, que cumple el epitelio tubular polarizado.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-23",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué organización celular secreta hormonas a la sangre sin conducto, como en el páncreas endócrino?",
      "opts": [
        "Folículos cerrados con una luz llena de coloide, donde se almacena la hormona.",
        "Glándulas con conducto excretor que vuelcan su secreción en la luz de un órgano hueco.",
        "Cordones o cúmulos de células con red capilar abundante, como los islotes de Langerhans.",
        "Láminas de epitelio plano con uniones estrechas, que impiden el paso de hormonas al exterior."
      ],
      "ans": 2,
      "expl": "Secretar hormona a la sangre sin conducto se traduce a cordones o cúmulos celulares con red capilar, como un islote de Langerhans. El folículo con coloide cumple otro requisito: almacenar la secreción fuera de la célula.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-24",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué estructura almacena la secreción de la tiroides fuera de la célula, hasta que se libera?",
      "opts": [
        "Los islotes de Langerhans, que almacenan insulina y glucagón dentro de las células alfa.",
        "El cordón de la adenohipófisis, que almacena la prolactina en gránulos de secreción.",
        "La médula suprarrenal, que almacena adrenalina dentro de las células cromafines.",
        "El folículo tiroideo, con su luz llena de coloide en el que se guardan T3 y T4."
      ],
      "ans": 3,
      "expl": "Almacenar la secreción fuera de la célula se traduce a folículo tiroideo con coloide. Las otras estructuras secretan hormona sin esa luz de almacenamiento: son cordones o cúmulos con red capilar.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-25",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué epitelio del túbulo renal reabsorbe selectivamente, gracias a su polaridad?",
      "opts": [
        "El epitelio tubular polarizado, con Na+/K+-ATPasa en la cara basolateral y acuaporinas.",
        "El epitelio plano simple de la rama descendente del asa de Henle, que es impermeable a solutos.",
        "El epitelio de transición del uréter, que se deforma sin romperse al llenarse.",
        "El epitelio estratificado de la cápsula de Bowman, que filtra sin reabsorber nada."
      ],
      "ans": 0,
      "expl": "Reabsorber selectivamente se traduce a epitelio tubular polarizado, con Na⁺/K⁺-ATPasa basolateral y acuaporinas. El epitelio recupera su polaridad al resembrar el riñón, y eso explica la reabsorción.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-26",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué células madre pueden originar un organismo completo y sus anexos?",
      "opts": [
        "Las totipotentes, como el cigoto y las blastómeras.",
        "Las pluripotentes, como las de la masa celular interna del blastocisto.",
        "Las multipotentes, como las de la médula ósea o el cordón umbilical.",
        "Las unipotentes, como el neumocito tipo II que regenera el neumocito tipo I."
      ],
      "ans": 0,
      "expl": "Solo las totipotentes forman el organismo completo más sus anexos: cigoto, blastómeras y mórula. Las pluripotentes forman las tres capas germinales, pero sin anexos.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-27",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué célula madre es unipotente y regenera los neumocitos tipo I del alvéolo?",
      "opts": [
        "El macrófago alveolar, que fagocita las partículas que llegan al alvéolo.",
        "El neumocito tipo II, que es la célula progenitora que repone a los tipo I.",
        "La célula caliciforme de la vía aérea, que secreta moco para atrapar partículas.",
        "La célula ependimaria, que reviste los ventrículos y participa en el LCR."
      ],
      "ans": 1,
      "expl": "El neumocito tipo II es el ejemplo de célula unipotente: regenera los neumocitos tipo I, o sea un solo linaje. Las otras células no son el ejemplo de unipotencia que da la revisión.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-28",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué fuente de células madre adultas tiene aplicación clínica consolidada?",
      "opts": [
        "El cerebro adulto, que aporta neuronas nuevas para reparar lesiones corticales.",
        "La piel adulta, que aporta melanocitos para trasplantes de piel completos.",
        "La médula ósea, que aporta células hematopoyéticas para el trasplante.",
        "El músculo cardíaco adulto, que se regenera por mitosis de sus fibras maduras."
      ],
      "ans": 2,
      "expl": "La aplicación consolidada es el trasplante de médula ósea, con células hematopoyéticas, para leucemias, linfomas, talasemia y otras enfermedades. Las adultas tienen mayor uso clínico que las embrionarias.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-29",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué riesgo tienen las células iPS por el método de reprogramación?",
      "opts": [
        "La reprogramación genera células que rechazan siempre al receptor por antígenos.",
        "La reprogramación impide que las células se diferencien en ningún linaje.",
        "La reprogramación produce células con más de un núcleo que no pueden dividirse.",
        "El transgén puede quedar integrado en el genoma y reactivar el c-Myc."
      ],
      "ans": 3,
      "expl": "El riesgo de las iPS es que el transgén queda en el genoma y puede reactivar c-Myc. Son autólogas, así que el rechazo no es su problema; el riesgo viene del método de reprogramación.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-30",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Qué técnica de reprogramación realizó Gurdon en 1962 en Xenopus, y que dio origen luego a la oveja Dolly?",
      "opts": [
        "La expresión forzada de Oct3/4, Sox2, Klf4 y c-Myc en fibroblastos adultos.",
        "La transferencia nuclear de una célula somática a un óvulo sin núcleo.",
        "La fusión de una célula madre embrionaria con un espermatozoide maduro.",
        "El cultivo de la masa celular interna del blastocisto en un medio sin suero."
      ],
      "ans": 1,
      "expl": "Gurdon (1962) y luego Dolly (1997) usaron transferencia nuclear: el núcleo de una célula somática pasa a un óvulo enucleado. Los cuatro factores corresponden a la reprogramación de Yamanaka (2006); la trampa es mezclar ambos métodos.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-31",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En el riñón descelularizado con SDS, ¿qué conserva la matriz?",
      "opts": [
        "Las células del epitelio tubular, que mantienen su polaridad dentro del andamio.",
        "La membrana basal glomerular, la membrana basal tubular y la cápsula de Bowman.",
        "El ADN de las células donantes, que se conserva casi intacto tras el SDS.",
        "Los transportadores tubulares, que siguen reabsorbiendo glucosa dentro del andamio."
      ],
      "ans": 1,
      "expl": "La matriz conserva la membrana basal glomerular, la membrana basal tubular y la cápsula de Bowman, y por eso mantiene la arquitectura. El ADN se reduce a menos del 10 % y las células y su función se pierden, por ejemplo la reabsorción de glucosa.",
      "sec": "Paper 1: riñón bioingenierizado"
    },
    {
      "id": "P-bioi-32",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En la resiembra dual del riñón descelularizado, ¿por qué vías se siembran los dos tipos celulares?",
      "opts": [
        "Células renales por la arteria renal y HUVECs por el uréter, con presión positiva.",
        "Ambos tipos celulares por la arteria renal, a 40 mmHg, para tapizar todo el árbol.",
        "HUVECs por el uréter y células renales por la vena renal, con gradiente.",
        "HUVECs por la arteria renal y células renales de rata por el uréter, con vacío."
      ],
      "ans": 3,
      "expl": "Se siembran las HUVECs por la arteria renal y las células renales neonatales de rata por el uréter, con gradiente de vacío. Es repoblar cada compartimento por su vía de acceso natural. Los 40 mmHg corresponden a la descelularización, no a la siembra.",
      "sec": "Paper 1: riñón bioingenierizado"
    },
    {
      "id": "P-bioi-33",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Cuál NO es una causa del déficit funcional del riñón regenerado que dan los autores?",
      "opts": [
        "La pérdida de la cápsula de Bowman al descelularizar con SDS.",
        "La resistencia vascular aumentada dentro del andamio sembrado.",
        "La inmadurez de las células renales neonatales sembradas.",
        "La siembra incompleta de células en los compartimentos del riñón."
      ],
      "ans": 0,
      "expl": "La cápsula de Bowman se conserva en la matriz, así que no puede ser la causa del déficit. Los autores señalan resistencia vascular aumentada, inmadurez de las células neonatales y siembra incompleta.",
      "sec": "Paper 1: riñón bioingenierizado"
    },
    {
      "id": "P-bioi-34",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En la microcápsula de alginato multicapa del constructo ovárico, ¿cómo se ubican las células?",
      "opts": [
        "Teca en la capa interna y granulosa en la externa, separadas por una capa de alginato.",
        "Granulosa y teca mezcladas en el núcleo, sin ninguna capa que las separe.",
        "Granulosa en la capa interna y teca en la externa, separadas por poli-L-ornitina.",
        "Granulosa en la capa externa y teca en la interna, separadas por poli-L-ornitina."
      ],
      "ans": 2,
      "expl": "Las células de la granulosa van en la capa interna y las de la teca en la externa, separadas por poli-L-ornitina. Hay que fijarse en el orden de las capas y en el material que las separa.",
      "sec": "Paper 2: constructo ovárico encapsulado"
    },
    {
      "id": "P-bioi-35",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En el constructo ovárico hecho con alginato y Sr²⁺, ¿qué resultado se observó a los 90 días?",
      "opts": [
        "El estradiol se mantiene estable durante los 90 días y el constructo no se calcifica.",
        "El estradiol cae desde el día 40 y el constructo se calcifica de forma progresiva hasta el día 90.",
        "El estradiol sube hasta el día 90 y la FSH y la LH caen por retroalimentación.",
        "La progesterona aumenta y la luteinización de la granulosa explica el resultado."
      ],
      "ans": 0,
      "expl": "Con Sr²⁺ el estradiol se mantuvo estable los 90 días y no hubo calcificación. La caída desde el día 40 es lo que pasó con Ca²⁺. La progesterona, la FSH y la LH no cambiaron entre condiciones.",
      "sec": "Paper 2: constructo ovárico encapsulado"
    },
    {
      "id": "P-bioi-36",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Según la revisión, ¿qué ventaja tienen las células madre adultas frente a las embrionarias?",
      "opts": [
        "Mayor versatilidad, porque forman las tres capas germinales sin límite alguno.",
        "Mayor uso clínico y ausencia de rechazo si son del propio paciente.",
        "Tendencia a proliferar más y a formar tumores con facilidad.",
        "Capacidad de formar anexos embrionarios, igual que una célula totipotente."
      ],
      "ans": 1,
      "expl": "Las adultas tienen mayor uso clínico, no destruyen embriones y no se rechazan si son del propio paciente. La alta versatilidad y la tendencia a formar tumores son características de las embrionarias.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-37",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "¿Cuál NO es uno de los cuatro factores de reprogramación de Yamanaka (2006)?",
      "opts": [
        "Oct3/4, uno de los cuatro factores usados para reprogramar las células.",
        "c-Myc, uno de los cuatro factores que se usan para reprogramar las células.",
        "Sox2, uno de los cuatro factores usados para reprogramar las células.",
        "Nanog, un factor que no integra el conjunto de cuatro que cita la guía."
      ],
      "ans": 3,
      "expl": "Los cuatro factores de Yamanaka son Oct3/4, Sox2, Klf4 y c-Myc. Nanog no integra esa lista. Hay que recordar los cuatro porque el riesgo de las iPS se relaciona con c-Myc.",
      "sec": "Paper 3: células madre (revisión)"
    },
    {
      "id": "P-bioi-38",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un equipo quiere una terapia celular sin rechazo y sin destruir embriones. ¿Qué fuente de células elige?",
      "opts": [
        "Células madre embrionarias de un donante, porque son pluripotentes.",
        "Células totipotentes del cigoto, porque forman el organismo completo.",
        "Células adultas del propio paciente o iPS autólogas del mismo paciente.",
        "Células multipotentes de otro donante, porque no destruyen ningún embrión."
      ],
      "ans": 2,
      "expl": "Una terapia sin rechazo se traduce a células adultas del propio paciente o iPS autólogas. Las embrionarias implican problema ético-legal y rechazo. Las de otro donante se rechazan, aunque sean adultas.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-39",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En el estudio de Dias y Ressler, ¿qué hallazgo molecular apoya una vía germinal en la herencia?",
      "opts": [
        "Mutaciones en la secuencia del gen Olfr151 de los espermatozoides.",
        "Hipometilación de los CpG de Olfr151 en espermatozoides de F0 y F1.",
        "Hipermetilación de los CpG de Olfr151 en espermatozoides de F0 y F2.",
        "Pérdida del receptor M71 en los espermatozoides de los machos F0."
      ],
      "ans": 1,
      "expl": "En los espermatozoides de F0 y F1 hay hipometilación de CpG en Olfr151. Es una marca epigenética, sin cambio en la secuencia del ADN. Eso sostiene que la vía es germinal.",
      "sec": "Paper 4: experiencia olfatoria parental"
    },
    {
      "id": "P-bioi-40",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En las crías F1 y F2 de machos condicionados con acetofenona, ¿qué cambio anatómico se halló?",
      "opts": [
        "Glomérulos M71 agrandados en el bulbo olfatorio y más neuronas M71 en el epitelio.",
        "Glomérulos M71 reducidos en el bulbo olfatorio y menos neuronas M71 en el epitelio.",
        "Más glomérulos de todos los receptores en el bulbo, sin cambio en el epitelio.",
        "Bulbo olfatorio sin cambios, pero con mayor mielinización de los axones olfatorios."
      ],
      "ans": 0,
      "expl": "F1 y F2 tienen glomérulos M71 agrandados en el bulbo y más neuronas M71 en el epitelio. La anatomía neural es plástica y puede heredarse por marcas epigenéticas. Es el cambio contrario al de las otras opciones.",
      "sec": "Paper 4: experiencia olfatoria parental"
    },
    {
      "id": "P-bioi-41",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un parche de piel ya protege, respira y pigmenta, pero se quiere que además sienta. ¿Qué hace falta?",
      "opts": [
        "Sembrar melanocitos tanto en la epidermis como en la dermis del parche de piel.",
        "Una epidermis más gruesa sobre la dermis, con una mayor cantidad de capas.",
        "Colonización del parche por fibras nerviosas del sistema nervioso periférico.",
        "Una capa de células de Schwann que envuelva por completo el parche de piel."
      ],
      "ans": 2,
      "expl": "Para que el parche sienta, tiene que ser colonizado por fibras nerviosas del SNP. Los melanocitos sirven para pigmentar, no para sentir. Las células de Schwann sirven para mielinizar axones periféricos.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-42",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Para armar una barrera hematoencefálica in vitro, ¿qué cocultivo propone la guía?",
      "opts": [
        "Endotelio cocultivado con oligodendrocitos, que forman la mielina central.",
        "Epitelio plano simple cocultivado con microglía de linaje mesodérmico.",
        "Células de Schwann cocultivadas con endoneuro como guía de crecimiento.",
        "Endotelio cocultivado con astrocitos para reproducir la barrera in vitro."
      ],
      "ans": 3,
      "expl": "La barrera hematoencefálica in vitro se arma con endotelio cocultivado con astrocitos. Las células de Schwann con endoneuro sirven para mielinizar axones periféricos. La microglía se agrega para modelar neuroinflamación.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-43",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Se diseña una bomba que mueva sangre en una sola dirección. ¿Qué estructuras se necesitan?",
      "opts": [
        "Válvulas cardíacas, miocardio contráctil y un sistema de conducción.",
        "Arterias elásticas, capilares fenestrados y músculo esquelético.",
        "Nexos, cilios y microvellosidades sobre el endocardio de la bomba.",
        "Músculo liso, tejido óseo y cartílago hialino sin sistema de conducción."
      ],
      "ans": 0,
      "expl": "Una bomba con flujo unidireccional se traduce a válvulas cardíacas, miocardio y sistema de conducción. Las otras opciones mezclan estructuras de otros requisitos, como la presión pulsátil o la absorción.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "P-bioi-44",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Ante una falla en un constructo encapsulado, ¿qué recomienda sospechar primero la guía?",
      "opts": [
        "La inmadurez de las células sembradas dentro de la microcápsula.",
        "Una luteinización prematura de las células de la granulosa del constructo.",
        "El material del constructo, antes que la función de sus células.",
        "La inflamación local en el sitio de implante del constructo."
      ],
      "ans": 2,
      "expl": "En un constructo encapsulado hay que sospechar primero del material, no de las células. Es lo que pasó con el Ca²⁺ en el constructo ovárico. Suponer que la falla es celular es una trampa del capítulo.",
      "sec": "Trampas de este capítulo"
    },
    {
      "id": "P-bioi-45",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Ante una pregunta de escenario de diseño, ¿cuál es el primer paso que propone la guía?",
      "opts": [
        "Aislar el requisito funcional y traducirlo a una estructura.",
        "Quitar el decorado para identificar cuál es la pregunta real.",
        "Mirar las opciones y descartar las que nombran otro órgano.",
        "Traducir el requisito con la tabla antes de leer el enunciado."
      ],
      "ans": 1,
      "expl": "El primer paso es quitar el decorado. Por ejemplo, un material similar a los tendones pregunta en realidad qué tejido forma los tendones. Recién después se aísla el requisito y se traduce a la estructura.",
      "sec": "Cómo resolver una pregunta envuelta en escenario"
    },
    {
      "id": "P-bioi-46",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "En un constructo ovárico encapsulado con alginato y Sr²⁺, el estradiol se mantiene estable durante 90 días. ¿Qué indica ese resultado según los autores?",
      "opts": [
        "Que las células de la granulosa se luteinizaron y por eso mantienen la secreción de estradiol.",
        "Que no hubo luteinización y que el material no se calcificó ni comprometió la difusión.",
        "Que la teca dejó de ser funcional y la granulosa compensó la producción de estradiol.",
        "Que la progesterona subió de forma sostenida y sostuvo la secreción de estradiol."
      ],
      "ans": 1,
      "expl": "Con Sr²⁺ el estradiol estable indica que no hubo luteinización y que el material no se endureció, a diferencia del Ca²⁺. La progesterona, la FSH y la LH no cambiaron entre condiciones; la trampa es leer la estabilidad como luteinización.",
      "sec": "Paper 2: constructo ovárico encapsulado"
    },
    {
      "id": "P-bioi-47",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Al resembrar un riñón descelularizado, ¿qué ocurre si el gradiente de vacío supera los 70 cm H₂O?",
      "opts": [
        "Las HUVECs dejan de tapizar el árbol vascular y se pierde la membrana basal glomerular.",
        "Se pierde la polaridad del epitelio tubular, pero la cápsula de Bowman queda intacta.",
        "Se rompen los cálices y el parénquima, por lo que se usa un gradiente de 40 cm H₂O.",
        "Disminuye el número de glomérulos de la matriz, que se vuelve más porosa al filtrado."
      ],
      "ans": 2,
      "expl": "Con más de 70 cm H₂O se rompen cálices y parénquima; el gradiente usado fue de 40 cm H₂O. El número de glomérulos no cambia con la descelularización y la presión de siembra no se vincula con la polaridad.",
      "sec": "Paper 1: riñón bioingenierizado"
    }
  ]
};

const PRACTICA_DEV = {
  "respiratorio": [
    {
      "id": "PD-respiratorio-01",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un ciclista sufre una caída y una costilla fracturada perfora la pared torácica: entra aire a la cavidad pleural de un lado. Tiene dificultad para respirar. ¿Qué esperás que le pase a ese pulmón y por qué, aunque la vía aérea esté permeable?",
      "checklist": [
        "Identifica neumotórax: aire en la cavidad pleural.",
        "La cavidad pleural es virtual, con una película de líquido entre pleura parietal y visceral.",
        "El líquido mantiene las hojas pegadas por tensión superficial, y eso hace que el pulmón siga a la pared torácica.",
        "Al entrar aire se pierde esa adherencia.",
        "El pulmón colapsa por su propio retroceso elástico, aunque la vía aérea esté libre."
      ],
      "modelo": "Esperamos un neumotórax con colapso del pulmón de ese lado. Normalmente la pleura parietal y la visceral están pegadas por la película de líquido pleural, y por eso el pulmón acompaña la expansión de la pared torácica. Cuando entra aire a la cavidad se pierde esa adherencia, y el pulmón retrocede por su elasticidad. Aunque el bronquio esté permeable, ya no se expande con la pared, y por eso falla la ventilación.",
      "justificacion": "La adherencia entre las dos hojas pleurales, dada por el líquido y su tensión superficial, es lo que mantiene el pulmón expandido contra la pared.",
      "sec": "Pulmones y pleuras"
    },
    {
      "id": "PD-respiratorio-02",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un recién nacido prematuro, a las pocas horas de vida, respira con mucho esfuerzo y sus alvéolos tienden a colapsarse al final de cada espiración. ¿Qué célula y qué sustancia están involucradas, qué esperás que falte y qué tratamiento tendría sentido?",
      "checklist": [
        "Los neumocitos tipo II (células septales) secretan el surfactante.",
        "El surfactante es una mezcla de fosfolípidos y lipoproteínas.",
        "La película de líquido alveolar genera tensión superficial que tiende a colapsar el alvéolo.",
        "El surfactante baja la tensión superficial y evita el colapso al final de la espiración.",
        "Es el síndrome de dificultad respiratoria; sirve surfactante exógeno instilado en la vía aérea, porque reemplaza una función fisicoquímica."
      ],
      "modelo": "Es un síndrome de dificultad respiratoria por déficit de surfactante. Los neumocitos tipo II todavía no producen suficiente mezcla de fosfolípidos y lipoproteínas. Sin ella, la tensión superficial del líquido que tapiza el alvéolo es alta y lo colapsa al final de la espiración. Por eso tiene sentido administrar surfactante exógeno directo en la vía aérea: reemplaza una función fisicoquímica, bajar la tensión superficial, no una función metabólica.",
      "justificacion": "El surfactante producido por los neumocitos II reduce la tensión superficial del líquido alveolar y mantiene abierto el alvéolo.",
      "sec": "El alvéolo y la membrana alveolocapilar, capa por capa"
    },
    {
      "id": "PD-respiratorio-03",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un hombre de 65 años, fumador de toda la vida, llega con disnea: espira con dificultad y queda aire atrapado en sus pulmones. ¿Qué cuadro sospechás, qué cambió en la estructura del pulmón y por qué fallan a la vez la ventilación y el intercambio de gases?",
      "checklist": [
        "Enfisema (EPOC), cuya causa principal es el tabaco.",
        "Se fusionan alvéolos y el tejido elástico se reemplaza por conectivo fibroso.",
        "Se pierde el retroceso elástico: la espiración pasiva falla y queda aire atrapado.",
        "Disminuye la superficie de intercambio y aumenta la distancia de difusión.",
        "La nicotina además contrae bronquiolos terminales, aumenta el moco e inhibe los cilios, y sube la resistencia."
      ],
      "modelo": "Sospechamos enfisema dentro de una EPOC, cuya causa principal es el tabaco. Se fusionan alvéolos y el tejido elástico se reemplaza por conectivo fibroso. Sin retroceso elástico la espiración pasiva falla y queda aire atrapado. Menos superficie y más distancia de difusión empeoran la respiración externa. Además la nicotina contrae bronquiolos, aumenta el moco e inhibe los cilios, y eso sube la resistencia.",
      "justificacion": "La espiración tranquila depende del retroceso elástico, y el intercambio depende de la superficie y de la distancia de difusión: el enfisema altera ambas cosas.",
      "sec": "Trastornos y correlatos que menciona el capítulo"
    }
  ],
  "circulatorio": [
    {
      "id": "PD-circulatorio-01",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "A una persona se le rompe una cuerda tendinosa de la válvula mitral durante un esfuerzo. Qué esperamos que ocurra con la válvula, hacia dónde se dirige la sangre y qué hallazgo esperarías al auscultar. Justificá con la anatomía.",
      "checklist": [
        "La válvula mitral es auriculoventricular: separa aurícula y ventrículo izquierdos y tiene dos valvas.",
        "Las cuerdas tendinosas y los músculos papilares no cierran la válvula: la sostienen cerrada e impiden que las valvas se evierten a la aurícula.",
        "Al romperse una cuerda, la valva se evierte (prolapsa) hacia la aurícula izquierda durante la sístole ventricular.",
        "Parte de la sangre refluye del ventrículo a la aurícula izquierda en lugar de salir por la aorta.",
        "Al auscultar se espera un soplo, que indica alteración valvular y no del miocardio ni de los nódulos."
      ],
      "modelo": "La mitral se cierra por la presión del ventrículo que se contrae, pero necesita las cuerdas tendinosas, tensadas por los músculos papilares, para que las valvas no se evierten. Si una cuerda se rompe, la valva prolapsa hacia la aurícula izquierda en la sístole y la válvula no sella. Una parte de la sangre vuelve a la aurícula en vez de salir por la aorta, y al auscultar se oye un soplo, signo de falla valvular.",
      "justificacion": "El aparato de sostén no cierra la válvula sino que evita su eversión; sin él, la válvula pierde estanqueidad y aparece el soplo.",
      "sec": "Válvulas: cuatro, dos tipos, un solo objetivo"
    },
    {
      "id": "PD-circulatorio-02",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Un paciente tiene una lesión que interrumpe el haz de His (el nódulo SA y el nódulo AV funcionan bien). Qué esperamos ver en el ECG respecto de las ondas P y de los complejos QRS, por qué ocurre, y qué dispositivo podríamos proponer.",
      "checklist": [
        "El esqueleto fibroso aísla eléctricamente aurículas y ventrículos.",
        "El haz de His es la única vía posible del potencial de acción de aurículas a ventrículos.",
        "El nódulo SA sigue disparando, por lo que las ondas P (despolarización auricular) se mantienen.",
        "Los ventrículos no reciben el impulso del SA: los QRS pierden su relación con las ondas P y el ritmo ventricular es (ritmo de escape).",
        "Un marcapasos artificial que estimule los ventrículos reemplazaría la vía interrumpida."
      ],
      "modelo": "Las P se mantienen, pero ningún impulso llega a los ventrículos desde el SA, así que los QRS no siguen a las P (disociación). Hay que implantar un marcapasos ventricular.",
      "justificacion": "Una sola vía eléctrica cruza el esqueleto fibroso: cortarla desconecta el ritmo de aurículas y ventrículos aunque los nódulos estén sanos.",
      "sec": "Sistema de conducción y su lectura en el ECG"
    },
    {
      "id": "PD-circulatorio-03",
      "topic": "circulatorio",
      "ref": "sección 13",
      "q": "Una persona sufrió un infarto y quedó una zona de miocardio muerto. Un grupo de bioingeniería propone cubrirla con un parche contráctil. Qué esperamos que pase con la zona dañada por sí sola, qué requisitos debe cumplir el parche y qué pasaría si no los cumple.",
      "checklist": [
        "El músculo cardíaco no se repara: carece de células madre y las fibras maduras no hacen mitosis.",
        "Por eso no sirve estimular la reparación endógena: hay que aportar tejido.",
        "El parche no puede ser sólo contráctil: debe acoplarse eléctricamente al miocardio del receptor.",
        "El acoplamiento se logra con uniones de hendidura (gap) de los discos intercalares, que forman el sincitio funcional.",
        "Sin ese acoplamiento el parche se contrae por su cuenta, sin sincronía con el resto del corazón."
      ],
      "modelo": "La zona infartada no se regenera, porque el miocardio no tiene células madre y sus fibras maduras no se dividen, así que hay que aportar tejido nuevo. El parche debe contraerse y además acoplarse al miocardio vecino mediante uniones de hendidura, para integrarse al sincitio funcional. Si sólo es contráctil, late por su cuenta, sin sincronía con el resto, y no ayuda al bombeo.",
      "justificacion": "El miocardio funciona como sincitio gracias a las uniones de hendidura; un tejido sin ese acoplamiento eléctrico no puede integrarse al latido.",
      "sec": "El miocardio como tejido: por qué hay que reemplazarlo y no repararlo"
    }
  ],
  "digestivo": [
    {
      "id": "PD-digestivo-01",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Una paciente con cálculos en la vesícula biliar refiere dolor y malestar cada vez que come un plato muy graso, y nota heces pálidas y grasosas. Explicá, razonando desde la anatomía y la fisiología, por qué el dolor aparece justo después de una comida grasa y por qué se afecta la digestión de los lípidos.",
      "checklist": [
        "Las grasas y aminoácidos en el duodeno estimulan la liberación de colecistocinina (CCK).",
        "La CCK contrae la vesícula biliar y relaja el esfínter de la ampolla.",
        "Con cálculos (colesterol cristalizado), la contracción choca contra la obstrucción y produce dolor.",
        "La bilis aporta sales biliares que emulsionan las grasas (digestión mecánica).",
        "Sin emulsión la lipasa pancreática actúa sobre menos superficie y los lípidos se digieren y absorben mal: heces con grasa."
      ],
      "modelo": "La grasa que llega al duodeno estimula a las células que liberan colecistocinina, hormona que contrae la vesícula y relaja el esfínter de la ampolla para vaciar la bilis. Si hay cálculos de colesterol cristalizado, esa contracción se produce contra una obstrucción y duele, por eso el síntoma aparece después de una comida grasa. Además, si la bilis no llega al duodeno faltan las sales biliares, que emulsionan las grasas y multiplican la superficie para la lipasa pancreática. Resultado: mala digestión y absorción de lípidos, con heces grasosas.",
      "justificacion": "La vesícula almacena y concentra la bilis y se vacía por orden de la CCK; las sales biliares no digieren sino que emulsionan, y sin ellas la lipasa rinde poco.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    },
    {
      "id": "PD-digestivo-02",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "A un paciente con una enfermedad inflamatoria se le reseca el íleon terminal. Meses después presenta anemia y diarrea. ¿Qué funciones del intestino delgado esperás que se hayan perdido y por qué podría aparecer anemia aunque el estómago esté sano?",
      "checklist": [
        "El íleon es el tramo donde se absorbe la vitamina B12 unida al factor intrínseco.",
        "El factor intrínseco se produce en las células parietales del estómago, así que éste puede estar sano y aun así faltar la absorción.",
        "La falta de B12 produce anemia (similar a la perniciosa).",
        "Se pierde superficie de absorción (pliegues circulares, vellosidades, microvellosidades), con malabsorción de nutrientes y agua.",
        "El íleon contiene placas de Peyer y termina en el esfínter ileocecal; su resección altera la vigilancia inmunitaria y la regulación del pasaje al colon."
      ],
      "modelo": "El íleon es el sitio donde se absorbe la vitamina B12 acoplada al factor intrínseco que secretan las células parietales. Aunque el estómago esté sano y produzca el factor, al faltar el íleon la B12 no se absorbe y aparece una anemia parecida a la perniciosa. Además se pierde superficie absortiva (pliegues, vellosidades y microvellosidades), por lo que llegan al colon más agua y nutrientes de los que puede manejar, lo que explica la diarrea. También se pierden las placas de Peyer y el esfínter ileocecal, que regula el paso hacia el colon.",
      "justificacion": "La absorción de B12 depende de dos eslabones: el factor intrínseco gástrico y el íleon; romper cualquiera de los dos da el mismo cuadro.",
      "sec": "Intestino delgado: los tres niveles de amplificación"
    },
    {
      "id": "PD-digestivo-03",
      "topic": "digestivo",
      "ref": "sección 14",
      "q": "Un paciente con cirrosis avanzada tiene el hígado muy dañado. Razonando desde la anatomía y las funciones hepáticas, ¿qué alteraciones esperás encontrar en su sangre y por qué la sangre del tubo digestivo se ve tan afectada por este órgano?",
      "checklist": [
        "La vena porta lleva al hígado toda la sangre del tubo digestivo y del bazo, con nutrientes recién absorbidos.",
        "Los hidratos de carbono y aminoácidos absorbidos pasan primero por el hígado, que amortigua la glucemia.",
        "El hígado convierte el amoníaco tóxico (de la desaminación de aminoácidos) en urea; si falla, el amoníaco se acumula.",
        "El hígado sintetiza la mayoría de las proteínas plasmáticas, que disminuyen.",
        "Se altera el procesamiento de fármacos y hormonas y la excreción de bilirrubina con la bilis."
      ],
      "modelo": "Todo lo que se absorbe por la sangre en el tubo digestivo viaja por la vena porta y pasa primero por el hígado, que lo procesa. Con un hígado dañado esperamos amoníaco elevado, porque no se convierte bien en urea; proteínas plasmáticas bajas, porque el hígado sintetiza la mayoría; y una glucemia menos regulada. También se acumula bilirrubina que no se excreta con la bilis, y los fármacos se inactivan peor, por lo que sus efectos se prolongan.",
      "justificacion": "El doble aporte sanguíneo (arteria hepática y vena porta) pone al hígado como filtro obligado de lo absorbido por vía sanguínea; por eso su falla altera el metabolismo de proteínas, glucosa, fármacos y bilirrubina.",
      "sec": "Hígado, vesícula y páncreas exocrino"
    }
  ],
  "urinario": [
    {
      "id": "PD-urinario-01",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Una persona baja mucho de peso en pocos meses y empieza a tener dolor lumbar; en la ecografía el riñón está más bajo de lo normal y hay dilatación de cálices. ¿Qué diagnóstico sospechás y por qué la pérdida de peso explica el cuadro?",
      "checklist": [
        "Sospecha de ptosis renal",
        "El adelgazamiento brusco hace perder la cápsula adiposa (grasa perirrenal)",
        "La cápsula adiposa sostiene al riñón en su sitio y lo protege de traumatismos",
        "El riñón desciende y puede acodar el uréter",
        "El uréter acodado impide el drenaje de la orina y dilata la vía excretora (cálices, pelvis)"
      ],
      "modelo": "Sospecho ptosis renal. La cápsula adiposa rodea al riñón y lo mantiene en su lugar dentro de la cavidad abdominal; al adelgazar bruscamente se pierde esa grasa y el riñón desciende. Al bajar, puede acodar el uréter, que sale del hilio. La orina no drena bien y se dilatan la pelvis y los cálices, lo que explica el dolor y la imagen.",
      "justificacion": "La grasa perirrenal cumple una función mecánica de sostén; perderla modifica la posición del riñón y la permeabilidad del uréter.",
      "sec": "Anatomía macroscópica"
    },
    {
      "id": "PD-urinario-02",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Un hombre de 68 años consulta porque orina con chorro débil, tarda en iniciar la micción y siente que no vacía del todo. ¿Qué estructura anatómica sospechás comprometida, qué relación tiene con la uretra y por qué en una mujer de la misma edad este cuadro sería menos probable por esa causa?",
      "checklist": [
        "Sospecha de hiperplasia prostática",
        "La próstata rodea la porción prostática de la uretra masculina",
        "El crecimiento comprime la uretra prostática y obstruye el vaciado",
        "La porción prostática también recibe los conductos eyaculadores (vía común urinaria y genital)",
        "La mujer no tiene próstata: su uretra es corta (unos 4 cm), única y sólo urinaria"
      ],
      "modelo": "Sospecho hiperplasia prostática. La uretra masculina, de unos 20 cm, atraviesa la próstata en su porción prostática; si la glándula crece, comprime ese tramo y dificulta el paso de la orina, con chorro débil y vaciado incompleto. En la mujer la uretra es corta, no atraviesa ninguna glándula y cumple sólo función urinaria, por eso esa causa de obstrucción no aplica. La porción prostática recibe además los conductos eyaculadores (vía urinaria y genital), y la uretra femenina mide unos 4 cm.",
      "justificacion": "La relación de vecindad entre la próstata y la uretra prostática explica la obstrucción; la diferencia de longitud y trayecto entre ambas uretras explica la diferencia por sexo.",
      "sec": "Uréteres, vejiga, uretra y micción"
    },
    {
      "id": "PD-urinario-03",
      "topic": "urinario",
      "ref": "sección 15",
      "q": "Una persona deshidratada por un día de calor y poca ingesta cae en la guardia con presión baja. ¿Qué respuesta esperás del aparato yuxtaglomerular y de la irrigación renal, y qué esperás encontrar en la orina y por qué?",
      "checklist": [
        "La caída de volumen y presión reduce la filtración glomerular",
        "Las células yuxtaglomerulares (aferente) detectan menos estiramiento y la mácula densa detecta el cambio de NaCl",
        "Secreción de renina, con activación de angiotensina II y aldosterona",
        "Vasoconstricción de la arteriola eferente y mayor reabsorción de Na+ y agua (ADH y aldosterona en el colector)",
        "Orina escasa y concentrada, posible gracias a las nefronas yuxtamedulares con asas largas y vasos rectos"
      ],
      "modelo": "Al bajar el volumen y la presión cae la filtración. Las células yuxtaglomerulares de la arteriola aferente sienten menos estiramiento y la mácula densa detecta el cambio, por lo que se libera renina; sigue angiotensina II, que contrae la arteriola eferente y mantiene la presión glomerular, y aldosterona, que retiene Na+. Con ADH el colector reabsorbe más agua. Espero poca orina y concentrada, algo que depende del gradiente medular de las nefronas yuxtamedulares.",
      "justificacion": "El aparato yuxtaglomerular conecta presión y flujo con la secreción de renina, y la anatomía de las asas largas permite concentrar la orina.",
      "sec": "Aparato yuxtaglomerular"
    }
  ],
  "endocrino": [
    {
      "id": "PD-endocrino-01",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "A una mujer con cansancio, hipotensión y oscurecimiento de la piel le miden cortisol bajo y ACTH muy alta. ¿En qué piso del eje se rompió la cadena y qué esperás encontrar en la glándula y en la hipófisis? Justificá con la retroalimentación negativa.",
      "checklist": [
        "Eje suprarrenal: CRH, luego ACTH, luego corteza suprarrenal, luego cortisol",
        "Periférica baja con trófica alta indica falla de la glándula periférica (primario)",
        "La hipófisis está viva y responde: pierde el freno del cortisol y aumenta la ACTH",
        "La corteza suprarrenal es el piso que no puede producir cortisol",
        "Un problema hipofisario o hipotalámico daría ACTH baja, no alta"
      ],
      "modelo": "Con cortisol bajo y ACTH alta falla el último piso: la corteza suprarrenal, o sea un cuadro primario. La adenohipófisis funciona bien: al ver poco cortisol pierde el freno de la retroalimentación negativa y secreta más ACTH para compensar. Si el problema estuviera arriba, la ACTH estaría baja o normal-baja.",
      "justificacion": "Regla de dos líneas: periférica baja más trófica alta localiza la falla en la glándula periférica, porque la hipófisis sigue respondiendo al déficit.",
      "sec": "EL MÉTODO · localizar la lesión en el eje"
    },
    {
      "id": "PD-endocrino-02",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "A un paciente le extirpan la tiroides junto con las paratiroides por error quirúrgico. Días después tiene calcemia baja. ¿Qué hormona le falta, cómo se compensaría fisiológicamente la calcemia (hueso, riñón, intestino) y qué esperás de la calcitonina?",
      "checklist": [
        "Le falta la PTH, producida por las células principales de la paratiroides",
        "La PTH sube la calcemia: resorción ósea, reabsorción renal de Ca y absorción intestinal",
        "En el riñón la PTH libera calcitriol, que facilita la absorción intestinal",
        "Sin PTH nada compensa la caída del calcio, y el hueso queda como reservorio sin usar",
        "La calcitonina baja la calcemia y no repara el déficit; además la extirpó la tiroides"
      ],
      "modelo": "Sin paratiroides falta la PTH, la hormona que sube la calcemia. Normalmente, con Ca baja la PTH aumenta la resorción ósea, la reabsorción renal de calcio y, vía calcitriol, la absorción intestinal. Sin ella el calcio sigue bajo. La calcitonina, de las células parafoliculares, baja la calcemia, así que no compensa nada. La calcitonina, de las células parafoliculares, también está ausente por la tiroidectomía y de todos modos baja la calcemia, así que no compensaría nada.",
      "justificacion": "PTH y calcitonina son antagonistas: la PTH sube la calcemia usando el hueso como reservorio, y la calcitonina la baja.",
      "sec": "Tiroides y paratiroides · el par del calcio"
    },
    {
      "id": "PD-endocrino-03",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "Una persona tiene una hemorragia importante y baja su volumen sanguíneo y su presión. ¿Qué cadena hormonal se activa, dónde se produce cada paso y qué esperás que haga la aldosterona en el riñón para recuperar la presión?",
      "checklist": [
        "Las células yuxtaglomerulares del riñón liberan renina ante la caída de volumen o presión",
        "La renina actúa sobre el angiotensinógeno hepático y forma angiotensina I",
        "La ECA de los pulmones convierte la angiotensina I en angiotensina II",
        "La angiotensina II produce vasoconstricción y estimula la corteza suprarrenal para liberar aldosterona",
        "La aldosterona hace reabsorber Na y agua, secretar K y H, sube el volumen y la presión"
      ],
      "modelo": "La caída de volumen hace que las células yuxtaglomerulares liberen renina, que transforma el angiotensinógeno hepático en angiotensina I. La ECA pulmonar la convierte en angiotensina II, que contrae las arteriolas y estimula la corteza suprarrenal. La aldosterona hace que el riñón reabsorba Na y agua y secrete K y H, con lo que sube el volumen y la presión.",
      "justificacion": "El sistema regula a largo plazo presión y volumen: una caída de volumen dispara una cascada que termina en retención renal de Na y agua.",
      "sec": "Sistema renina-angiotensina-aldosterona"
    }
  ],
  "nervioso": [
    {
      "id": "PD-nervioso-01",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Apoyás sin querer la mano en una hornalla caliente y la retirás antes de darte cuenta de que quema. Explicá qué circuito anatómico permite esa respuesta y por qué llega antes que la conciencia del dolor.",
      "checklist": [
        "Se trata de un arco reflejo, circuito mínimo",
        "Receptor y neurona sensitiva que entra por la raíz dorsal (soma en ganglio raquídeo)",
        "Interneurona en la sustancia gris de la médula",
        "Motoneurona que sale por la raíz ventral hacia el efector (músculo)",
        "Se resuelve en la médula sin pasar por la corteza, por eso es más rápido que la conciencia"
      ],
      "modelo": "Es un arco reflejo: el receptor de la piel activa una neurona sensitiva cuyo soma está en el ganglio raquídeo y que entra por la raíz dorsal. En la sustancia gris medular hace sinapsis con una interneurona, que activa la motoneurona del asta ventral; esta sale por la raíz ventral y contrae el músculo efector. Como el circuito se cierra en la médula y no necesita llegar a la corteza, la retirada ocurre antes de que la señal por la vía ascendente (tálamo y corteza) genere la percepción del dolor.",
      "justificacion": "La médula no es solo un cable: integra reflejos con un circuito de cinco elementos sin intervención cortical.",
      "sec": "Vías sensitivas y motoras"
    },
    {
      "id": "PD-nervioso-02",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "Una persona de 70 años con placas de ateroma sufre una obstrucción de la arteria basilar y presenta vértigo, descoordinación al caminar y pérdida de visión. ¿Qué estructuras esperás que estén comprometidas y por qué algunos pacientes se recuperan mejor que otros?",
      "checklist": [
        "La basilar pertenece a la circulación posterior (vertebrobasilar)",
        "Irriga tronco encefálico, cerebelo y lóbulo occipital",
        "Cerebelo explica descoordinación y falta de equilibrio",
        "Lóbulo occipital explica el déficit visual",
        "El polígono de Willis aporta flujo colateral que puede suplir la zona afectada"
      ],
      "modelo": "La basilar forma parte del sistema vertebrobasilar, que irriga el tronco encefálico, el cerebelo, el lóbulo occipital y parte del temporal. Esperamos compromiso del cerebelo (coordinación, equilibrio y postura), del occipital (visión) y eventualmente del tronco, con riesgo para funciones vitales. La evolución depende del polígono de Willis: si el flujo colateral desde la circulación anterior (carotídea) alcanza a suplir la zona, el daño es menor.",
      "justificacion": "Cada territorio arterial determina qué función se pierde, y el polígono de Willis modula la gravedad.",
      "sec": "Irrigación del encéfalo: dos sistemas unidos por el polígono de Willis"
    },
    {
      "id": "PD-nervioso-03",
      "topic": "nervioso",
      "ref": "sección 17",
      "q": "A un paciente se le administra un fármaco que bloquea el sistema parasimpático. ¿Qué efectos esperás en pupila, glándulas salivales, corazón y vejiga, y por qué?",
      "checklist": [
        "Pupila dilatada (sin la contracción parasimpática predomina el simpático)",
        "Disminuye la salivación (boca seca)",
        "Aumenta la frecuencia cardíaca",
        "Vejiga relajada con tendencia a retención urinaria",
        "El razonamiento: se pierde el efecto parasimpático y queda el efecto simpático predominante"
      ],
      "modelo": "Al bloquear el parasimpático predomina el simpático. La pupila se dilata, la salivación se inhibe y aparece boca seca, el ritmo cardíaco aumenta. En la vejiga el simpático relaja y el parasimpático contrae, por lo que sin este último hay tendencia a retener orina. También se enlentece la actividad digestiva.",
      "justificacion": "Simpático y parasimpático tienen efectos opuestos en cada órgano, así que bloquear uno deja al otro sin oposición.",
      "sec": "Sistema nervioso autónomo, órgano por órgano"
    }
  ],
  "bioingenieria": [
    {
      "id": "PD-bioingenieria-01",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un equipo diseña un pulmón en chip para estudiar el intercambio gaseoso. El prototipo permite el paso de oxígeno, pero la superficie colapsa al final de cada ciclo de ventilación. ¿Qué estructuras debería incluir el diseño para que funcione como un alvéolo, y por qué?",
      "checklist": [
        "Identificar el requisito de intercambio gaseoso con mínima distancia de difusión.",
        "Nombrar la barrera alveolocapilar: neumocito tipo I, membranas basales fusionadas y endotelio capilar.",
        "Atribuir el colapso a la falta de surfactante.",
        "Incluir el neumocito tipo II como fuente del surfactante.",
        "Mencionar que el neumocito II es unipotente y regenera neumocitos tipo I."
      ],
      "modelo": "Primero se quita el decorado y se aíslan dos requisitos: intercambio gaseoso con mínima distancia y superficie que no colapse. Para el primero hace falta la barrera alveolocapilar, con neumocito tipo I, membranas basales fusionadas y endotelio. Para el segundo, el surfactante secretado por el neumocito tipo II, que evita el colapso al final de la espiración. Además el neumocito II es unipotente y regenera los tipo I, así que sirve como célula de reposición.",
      "justificacion": "Cada falla del prototipo se traduce a una estructura de la tabla del capítulo: la barrera para el intercambio y el surfactante del neumocito II para la estabilidad.",
      "sec": "Tabla de traducción: requisito → estructura"
    },
    {
      "id": "PD-bioingenieria-02",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Un laboratorio implanta en el epiplón de ratas ovariectomizadas un constructo de alginato con granulosa y teca. Hasta el día 40 el estradiol es normal, pero luego cae y a los 90 días el constructo está duro al tacto. El equipo propone repetir el experimento con células nuevas. ¿Qué le aconsejarías y qué esperás obtener?",
      "checklist": [
        "Reconocer que la falla aparece tarde y progresiva, y que el constructo se endureció.",
        "Sospechar primero del material y no de las células.",
        "Identificar el Ca²⁺ como causa: precipita y calcifica el alginato.",
        "Proponer reemplazar el Ca²⁺ por Sr²⁺ como agente de entrecruzamiento.",
        "Predecir estradiol estable a 90 días, sin calcificación y sin cambios en progesterona, FSH y LH."
      ],
      "modelo": "Desaconsejaría cambiar las células: la caída tardía con endurecimiento apunta al material, no a una falla celular. El calcio precipita con el tiempo y calcifica el alginato, lo que compromete la difusión de nutrientes y hormonas. Propondría gelificar con Sr²⁺. Esperaría estradiol estable durante los 90 días, sin calcificación, y sin cambios en progesterona, FSH y LH, como en el estudio de la cátedra.",
      "justificacion": "La guía advierte que en un constructo encapsulado hay que sospechar primero del material, y el contraste Ca²⁺ versus Sr²⁺ lo respalda.",
      "sec": "Paper 2: constructo ovárico encapsulado"
    },
    {
      "id": "PD-bioingenieria-03",
      "topic": "bioingenieria",
      "ref": "sección 18",
      "q": "Se quiere fabricar un parche para reparar una zona dañada del miocardio, que debe contraerse en sincronía con el tejido vecino y no generar rechazo en el paciente. ¿Qué tipo de músculo y estructuras de unión debería reproducir el parche, y qué fuente de células elegirías? ¿Qué riesgo habría que vigilar?",
      "checklist": [
        "Traducir el requisito a músculo cardíaco, de contracción rítmica e involuntaria.",
        "Incluir los discos intercalares con nexos para el acople eléctrico.",
        "Descartar músculo liso y esquelético por su tipo de contracción.",
        "Elegir células del propio paciente: adultas autólogas o iPS autólogas.",
        "Señalar el riesgo de las iPS: el transgén queda en el genoma y puede reactivar c-Myc."
      ],
      "modelo": "El requisito es una contracción rítmica e involuntaria con acople eléctrico, que se traduce a músculo cardíaco con discos intercalares y nexos. El esquelético es voluntario y el liso es lento y sostenido, por lo que no sirven. Para evitar rechazo usaría células del propio paciente, por ejemplo iPS autólogas diferenciadas a cardiomiocitos. En ese caso habría que vigilar el riesgo de integración del vector y la posible reactivación de c-Myc.",
      "justificacion": "Se aplica la tabla de traducción para elegir el músculo y la regla de terapia sin rechazo para la fuente celular, junto con el riesgo de iPS de la revisión.",
      "sec": "Tabla de traducción: requisito → estructura"
    }
  ]
};
