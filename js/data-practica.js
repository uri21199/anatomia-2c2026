// Banco de práctica: 20 a 30 preguntas de opción múltiple por sistema.
// ans = índice de la correcta en opts. La app muestra tandas de 6 y mezcla el orden.
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
      "expl": "El cartílago anterior impide que la tráquea colapse cuando baja la presión intratorácica. La abertura posterior deja que el esófago se expanda durante la deglución, y el músculo traqueal ajusta el calibre. Es un compromiso de diseño."
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
      "expl": "La presión intrapleural es negativa y mantiene el pulmón expandido, y la película de líquido une las pleuras. Al entrar aire, se pierden ambas cosas y el pulmón colapsa por su retroceso elástico, aunque la vía aérea esté libre."
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
      "expl": "El tipo I es plano y delgadísimo, cubre cerca del 95 % de la superficie, y es el sitio del intercambio. El tipo II es cúbico, secreta surfactante y es la célula progenitora que repone a los tipo I. El macrófago alveolar fagocita partículas."
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
      "expl": "Las cuatro capas, de adentro hacia afuera: líquido alveolar con surfactante y epitelio alveolar; membrana basal del epitelio; membrana basal del endotelio (a menudo fusionada con la anterior); y endotelio del capilar. El espesor total es de unos 0,5 µm."
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
      "expl": "La capacidad residual funcional es VR + VRE = 2.400 mL. La capacidad inspiratoria es VC + VRI = 3.600 mL. La capacidad vital es VRI + VC + VRE = 4.800 mL y no incluye el volumen residual."
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
      "expl": "Bajar el pH (efecto Bohr) desplaza la curva a la derecha: baja la afinidad y se libera más O2 donde más se necesita. La frecuencia respiratoria no afecta la afinidad. Subir la PCO2, la temperatura o el 2,3-BPG hacen lo mismo."
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
      "expl": "Los cornetes y los meatos crean turbulencia y multiplican la superficie de contacto. Por eso el aire se calienta y humidifica en unos pocos centímetros. El vestíbulo filtra partículas gruesas, los senos alivianan el cráneo y el epitelio olfatorio es el receptor del olfato."
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
      "expl": "Las coanas son los dos orificios posteriores que comunican la cavidad nasal con la nasofaringe. Las narinas son anteriores, el istmo de las fauces comunica la boca con la orofaringe, y las trompas auditivas también se abren en la nasofaringe pero no conectan con la cavidad nasal."
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
      "expl": "El cricoides es el único anillo completo de la laringe, forma su pared inferior y es el punto de referencia para la traqueotomía. El tiroides se ve de frente, pero no es el punto de referencia. Los aritenoides y la epiglotis quedan atrás y no aparecen en la vista anterior."
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
      "expl": "Los pliegues vocales (cuerdas verdaderas) son los inferiores y son los que vibran. Los pliegues vestibulares no producen sonido: retienen la respiración y se cierran en la maniobra de Valsalva. La epiglotis no vibra para producir la voz."
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
      "expl": "El tono depende de la tensión de los pliegues vocales: más tensión, más agudo. El volumen depende de la fuerza del aire espirado. La rima glótica es el espacio entre los pliegues, y la separación de los aritenoides no define el tono."
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
      "expl": "La tráquea termina en la carina, donde se divide en los bronquios principales, a la altura de T4-T5. El cricoides es su inicio, no su final. Los bronquiolos terminales son parte del árbol bronquial, no la división de la tráquea."
    },
    {
      "id": "P-resp-13",
      "topic": "respiratorio",
      "ref": "sección 12",
      "q": "Un paciente aspiró un cuerpo extraño y tiene una lesión en la vía aérea posterior. ¿Qué estructura está por detrás de la tráquea?",
      "opts": [
        "El esófago, que queda en contacto con la cara posterior de la tráquea.",
        "La aorta descendente, que pasa por delante de la tráquea a la altura de T5.",
        "La vena cava superior, que desemboca en la aurícula derecha por detrás de la tráquea.",
        "La columna vertebral cervical, que queda separada de la tráquea por la faringe."
      ],
      "ans": 0,
      "expl": "El esófago queda por detrás de la tráquea, y es la razón por la que la tráquea tiene anillos abiertos hacia atrás. La aorta y la vena cava están en el mediastino, en otro plano. La faringe queda por encima."
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
      "expl": "El calibre que se cierra en el asma son los bronquiolos. A medida que el árbol se ramifica, el cartílago desaparece y la proporción de músculo liso aumenta. Por eso la broncoconstricción se concentra ahí, y no en la tráquea."
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
      "expl": "El hilio es la puerta de entrada en la cara medial. Por ahí pasan el bronquio principal, la arteria y las venas pulmonares, y el conjunto forma la raíz del pulmón. El vértice y la base no son puertas de entrada de esos vasos."
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
      "expl": "La pleura visceral está adherida al pulmón y se mete en las fisuras. La parietal tapiza la pared torácica, el diafragma y el mediastino. La cavidad pleural es el espacio entre ambas hojas, no una hoja."
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
      "expl": "El nervio frénico inerva el diafragma y nace de C3 a C5. El vago regula funciones viscerales, los intercostales inervan la pared torácica y el ciático no interviene en la respiración."
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
      "expl": "En la inspiración forzada se suman el esternocleidomastoideo, los escalenos y el pectoral menor. Los abdominales y los intercostales internos actúan en la espiración forzada, reduciendo el volumen del tórax."
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
      "expl": "En la espiración forzada actúan los músculos abdominales (recto, oblicuos y transverso) y los intercostales internos. La espiración tranquila es pasiva. Los escalenos y el pectoral menor son inspiratorios, y los intercostales externos también."
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
      "expl": "El volumen residual no se puede medir con espirometría porque queda en el pulmón después de la espiración forzada. Los otros tres sí se miden directamente con el espirómetro."
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
      "expl": "El espacio muerto de unos 150 mL no participa del intercambio. Con respiraciones superficiales, esa porción fija pesa más sobre el volumen corriente, así que la ventilación alveolar cae. La frecuencia no modifica la afinidad de la hemoglobina."
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
      "expl": "Según la ley de Henry, la cantidad disuelta depende de la presión parcial y la solubilidad. El CO2 es unas 24 veces más soluble que el O2. El nitrógeno es poco soluble, y el monóxido de carbono no se disuelve por esa vía."
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
      "expl": "El estímulo dominante en condiciones normales es la PCO2, a través de los H+ del líquido cefalorraquídeo. La hipoxia sólo se vuelve un estímulo importante con PO2 muy baja. El pH alto y la temperatura no son el estímulo principal."
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
      "expl": "Los quimiorreceptores periféricos están en los cuerpos carotídeos y aórticos. Los centrales están en el bulbo y responden a los H+ del LCR. La protuberancia modula el ritmo y el hipotálamo no es un quimiorreceptor respiratorio."
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
      "expl": "La tos cierra completamente la rima glótica y la espiración fuerte la abre y lanza el aire. El sollozo tiene una serie de inspiraciones, el bostezo es una inspiración profunda y el hipo es una contracción espasmódica del diafragma."
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
      "expl": "La mitral es auriculoventricular izquierda, con dos valvas sostenidas por cuerdas tendinosas. La tricúspide es la derecha. Las sigmoideas (aórtica y pulmonar) son las de salida de los ventrículos y no tienen cuerdas."
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
      "expl": "Arteria es el vaso que sale del corazón, no el que tiene sangre oxigenada. La arteria pulmonar sale del ventrículo derecho con sangre desoxigenada. Las venas pulmonares son las que llevan sangre oxigenada a la aurícula izquierda."
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
      "expl": "El foramen oval es interauricular y lleva la sangre de la aurícula derecha a la izquierda, salteando el pulmón fetal. Su resto es la fosa oval. El conducto arterioso une el tronco pulmonar con la aorta y deja el ligamento arterioso."
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
      "expl": "El orden es sinusal, auriculoventricular, haz de His, ramas derecha e izquierda y Purkinje. El nodo auriculoventricular retrasa el impulso y es el único paso hacia los ventrículos a través del haz de His."
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
      "expl": "La onda P es la despolarización auricular y el complejo QRS la ventricular. La onda T es la repolarización ventricular. El intervalo P-Q es conducción auricular más el retraso del nodo auriculoventricular, no una despolarización ventricular."
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
      "expl": "El atleta tiene mayor volumen sistólico y menor frecuencia de reposo; el producto volumen sistólico por frecuencia es el mismo en reposo porque lo fija la demanda metabólica. Lo que cambia es la reserva cardíaca, que es mayor."
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
      "expl": "El corazón está en el mediastino, la región entre los pulmones. Su límite es el esternón adelante, la columna atrás, la primera costilla arriba y el diafragma abajo. El pericardio es la envoltura del corazón, no su ubicación."
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
      "expl": "El miocardio es el tejido muscular que bombea y el grueso de la masa del órgano. El epicardio es una capa serosa, el endocardio es la capa más interna y el pericardio fibroso es la envoltura externa."
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
      "expl": "El endocardio es la capa más interna. Es un endotelio delgado sobre tejido conjuntivo, recubre las válvulas y se continúa con el endotelio de la aorta y de la pulmonar. El miocardio es el músculo y el epicardio es la capa externa."
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
      "expl": "El pericardio fibroso es tejido conjuntivo denso poco elástico. Fija el corazón y evita que se dilate sin límite frente a una sobrecarga aguda. El líquido lo producen las hojas serosas y las válvulas son de endocardio."
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
      "expl": "El pericardio no se estira de golpe, así que el líquido acumulado comprime las cámaras. Esto es un taponamiento cardíaco. La válvula y el miocardio no se afectan por esa vía."
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
      "expl": "La tricúspide es la auriculoventricular derecha, con tres valvas, y separa la aurícula derecha del ventrículo derecho. La mitral es la izquierda, con dos valvas. Las sigmoideas están en las salidas hacia las grandes arterias."
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
      "expl": "Las cuerdas tendinosas sostienen las valvas cerradas, impidiendo que se den vuelta hacia la aurícula. La válvula se cierra por la presión del ventrículo, no por las cuerdas. El impulso eléctrico no pasa por las cuerdas."
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
      "expl": "Los dos ventrículos expulsan el mismo volumen en promedio. Lo que cambia es la presión: el izquierdo empuja contra el circuito sistémico, que tiene más resistencia, por eso su pared es más gruesa. El circuito pulmonar es corto y de baja resistencia."
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
      "expl": "Las cuatro venas pulmonares llevan sangre oxigenada a la aurícula izquierda. Las arterias pulmonares son las que llevan sangre desoxigenada desde el ventrículo derecho hacia los pulmones."
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
      "expl": "Del arco de la aorta nacen tres ramas: el tronco braquiocefálico, la carótida común izquierda y la subclavia izquierda. Las coronarias nacen de la aorta ascendente, no del arco, y la pulmonar sale del ventrículo derecho."
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
      "expl": "A 75 latidos por minuto, el ciclo dura 0,8 s: 0,1 s de sístole auricular, 0,3 s de sístole ventricular y 0,4 s de relajación. Las otras duraciones corresponden a fases parciales."
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
      "expl": "El primer ruido es el cierre de las AV al comenzar la sístole ventricular. El segundo ruido, el 'dup', es el cierre de las sigmoideas al terminar la sístole. La apertura de una válvula sana es silenciosa."
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
      "expl": "GC = VS × FC = 70 mL × 75 = unos 5,25 L/min. Es aproximadamente toda la volemia por minuto. Los otros valores no corresponden al cálculo con esos datos."
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
      "expl": "Frank-Starling relaciona la precarga con la fuerza de contracción: más llenado, más estiramiento, más fuerza, hasta un límite. Más presión aórtica es poscarga y reduce el volumen sistólico. El simpático aumenta la contractilidad."
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
      "expl": "La aorta es una arteria elástica: en la media tiene láminas elásticas fenestradas. Se dilata en sístole y retrocede en diástole, convirtiendo un flujo pulsátil en uno más continuo. Las arterias musculares tienen más músculo liso."
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
      "expl": "El capilar fenestrado tiene poros en el endotelio y lámina basal continua; por eso filtra plasma y retiene proteínas. El continuo no tiene poros y el sinusoide tiene aberturas grandes y lámina discontinua."
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
      "expl": "Las válvulas venosas abundan en los miembros inferiores: la sangre venosa tiene poca presión y tiene que subir contra la gravedad. Las grandes venas del tórax no tienen válvulas. Las arterias tienen la válvula sigmoidea de salida, no válvulas venosas."
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
      "expl": "La parietal (oxíntica) secreta HCl y factor intrínseco. El factor intrínseco es imprescindible para absorber B12 en el íleon, así que su pérdida produce anemia perniciosa. La principal secreta pepsinógeno; la G, gastrina."
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
      "expl": "Las proteasas pancreáticas salen como zimógenos inactivos. La enterocinasa del duodeno convierte el tripsinógeno en tripsina, que activa a las demás. Si se activaran dentro del páncreas, lo digerirían: eso es la pancreatitis."
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
      "expl": "La capa externa es serosa si el órgano está tapizado por peritoneo (mesotelio) y adventicia si es retroperitoneal o está fuera de la cavidad. El esófago es casi todo adventicia. Su muscular es esquelética sólo en el tercio superior."
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
      "expl": "La sangre entra por la tríada portal, recorre los sinusoides y sale por la vena centrolobulillar. La bilis va en sentido contrario, por los canalículos entre hepatocitos, hasta los conductillos de la tríada: es un intercambio a contracorriente."
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
      "expl": "Los lípidos se resintetizan en el enterocito como triglicéridos, se empaquetan en quilomicrones y salen por el vaso quilífero (linfa). Los hidratos y aminoácidos van por la vena porta. Excepción: los ácidos grasos de cadena corta van a la sangre portal."
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
      "expl": "Las glándulas de Brunner están en la submucosa del duodeno, el único tramo intestinal con glándulas submucosas, y secretan moco alcalino que neutraliza el quimo. La lisozima la secretan las células de Paneth de las criptas, no las de Brunner."
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
      "expl": "El adulto tiene 32 dientes: en cada mitad de cada arcada, 2 incisivos, 1 canino, 2 premolares y 3 molares. La dentición decidua tiene 20 piezas y no tiene premolares."
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
      "expl": "Los premolares son los que reemplazan a los molares de leche. Los molares permanentes erupcionan por detrás, sin reemplazar a ninguno, y por eso el dato es contraintuitivo."
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
      "expl": "El esmalte es el tejido más duro y es acelular: no se regenera. La dentina es conectiva calcificada, el cemento recubre la raíz y la pulpa tiene vasos y nervios; ninguno explica la falta de cicatrización del esmalte."
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
      "expl": "La amilasa salival empieza la digestión del almidón en la boca. La lipasa lingual actúa sobre grasas, la pepsina es gástrica y la tripsina pancreática; la saliva también contiene lisozima y moco."
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
      "expl": "La deglución tiene tres fases: la bucal, voluntaria; la faríngea y la esofágica, involuntarias. En la faríngea el paladar blando sube, la laringe se eleva, la epiglotis bascula y se cierran las cuerdas vocales."
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
      "expl": "El esfínter superior es de músculo esquelético, y el inferior es de músculo liso. La muscular del esófago es esquelética en el tercio superior, mixta en el medio y lisa en el inferior."
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
      "expl": "En el reflujo, el esfínter inferior (de músculo liso) no cierra bien y el contenido ácido sube hacia el epitelio plano estratificado del esófago, que no está preparado para el ácido. El esfínter superior es de músculo esquelético."
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
      "expl": "El fundus es la cúpula, por encima de la entrada cardias. El cuerpo está en el medio, y el antro, el conducto pilórico y el píloro están en la salida hacia el duodeno."
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
      "expl": "El omento mayor cuelga de la curvatura mayor, que es la convexa y mira a la izquierda. La curvatura menor es cóncava y mira a la derecha, y el omento menor va desde ella hacia el hígado."
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
      "expl": "Las células de Paneth, en el fondo de las criptas, secretan lisozima y defensinas. Las caliciformes secretan moco, las S secretan secretina y las G secretan gastrina en el estómago."
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
      "expl": "Las placas de Peyer están en el íleon, donde la carga bacteriana es mayor. El duodeno tiene las glándulas de Brunner, y el colon tiene tenias y haustros, no placas de Peyer."
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
      "expl": "Las tenias, los haustros y los apéndices epiploicos son rasgos del colon. Las vellosidades y las placas de Peyer están en el intestino delgado, y las células de Paneth también están en las criptas delgadas."
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
      "expl": "Las células de Kupffer son los macrófagos que patrullan los sinusoides y fagocitan. Los hepatocitos metabolizan y las células de Paneth están en el intestino, no en el hígado."
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
      "expl": "El hígado excreta la bilirrubina con la bilis, no la almacena. En el intestino se transforma en estercobilina, que da color a las heces. La urea es producto del metabolismo de las proteínas."
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
      "expl": "La amilasa pancreática actúa sobre almidón y glucógeno y produce disacáridos y dextrinas. La lipasa actúa sobre grasas, la tripsina sobre proteínas y la ribonucleasa sobre ácidos nucleicos."
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
      "expl": "La secretina la producen las células S del duodeno ante el quimo ácido y estimula la secreción de bicarbonato. La CCK contrae la vesícula, la gastrina estimula el ácido y la insulina es pancreática endocrina."
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
      "expl": "La colecistocinina contrae la vesícula, relaja el esfínter de la ampolla y estimula las enzimas pancreáticas; también produce saciedad. La secretina actúa sobre el bicarbonato, la gastrina sobre el ácido y la somatostatina es islotes."
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
      "expl": "El colédoco y el conducto pancreático se juntan en la ampolla de Vater y desembocan en la papila duodenal mayor, en la segunda porción del duodeno. El esfínter de Oddi regula ese paso."
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
      "expl": "El TCP tiene borde en cepillo denso. El TCD es cúbico sin borde en cepillo, con luz nítida. La rama delgada del asa es plana simple. El conducto papilar es cilíndrico simple y desemboca en el cáliz menor. Se identifica el segmento por el epitelio, no por la ubicación."
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
      "expl": "El corpúsculo renal es el glomérulo (ovillo de capilares fenestrados) más la cápsula de Bowman. La mácula densa y el aparato yuxtaglomerular son estructuras de control, no del corpúsculo. El asa de Henle empieza después del polo urinario."
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
      "expl": "PFN = PHG − PHC − POC. La PHG favorece la filtración. Se oponen la PHC, que es retrógrada, y la POC, que depende de las proteínas plasmáticas, no de las células sanguíneas."
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
      "expl": "Los conductos eyaculadores desembocan en la porción prostática. La membranosa atraviesa el piso pélvico y la esponjosa recorre el pene. La porción vesical es el primer tramo, dentro de la pared de la vejiga."
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
      "expl": "El reflejo miccional es parasimpático: contrae el detrusor y relaja el esfínter interno. Al mismo tiempo se inhibe el esfínter externo, que es esquelético y voluntario. El simpático relaja la vejiga y el parasimpático la contrae."
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
      "expl": "El trabajo de Ott y colaboradores reporta filtración y drenaje, y reabsorción tubular parcial. No reporta el gradiente osmótico medular, que depende de las nefronas yuxtamedulares. Sin él, la orina no se concentra. La membrana basal sí se conservó en el andamio."
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
      "expl": "Los riñones están en el retroperitoneo, a los lados de la columna, entre T12 y L3. El derecho queda un poco más bajo por el hígado. Están por detrás del peritoneo, no dentro de la cavidad peritoneal."
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
      "expl": "Por el hilio pasan, de adelante hacia atrás, la vena renal, la arteria renal y la pelvis renal. El uréter sale de la pelvis y no forma parte de ese orden."
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
      "expl": "El uréter mide unos 25 a 30 cm. La uretra femenina mide unos 4 cm y la masculina unos 20 cm; los uréteres no coinciden con esas longitudes."
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
      "expl": "La entrada oblicua crea un mecanismo valvular fisiológico, no anatómico: al llenarse la vejiga la presión aplasta los orificios y no hay reflujo. El trígono es liso, no es una válvula, y el esfínter externo es esquelético."
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
      "expl": "El trígono es liso porque la mucosa está adherida a la muscular, y sus vértices son los orificios ureterales y el uretral interno. El resto de la vejiga tiene rugosidades que se borran al llenarse."
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
      "expl": "Las venas gonadales son asimétricas: la derecha va a la cava inferior y la izquierda a la vena renal izquierda. La vena renal izquierda es más larga y cruza por delante de la aorta."
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
      "expl": "Si se pierde la cápsula adiposa, el riñón puede descender (ptosis) y acodar el uréter. Eso muestra su función mecánica de sostén. No tiene relación con la presión arterial, la glucosa ni la albúmina."
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
      "expl": "La médula contiene entre 8 y 18 pirámides renales. Cada una tiene una papila que drena en un cáliz menor. La corteza no tiene pirámides: sus columnas son las que se meten entre ellas."
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
      "expl": "Los cálices menores son la primera estructura donde drena la orina formada. Después van los cálices mayores, la pelvis renal y el uréter. La pelvis se forma a partir de los cálices mayores."
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
      "expl": "El riñón recibe el 20 a 25 % del gasto cardíaco en reposo, para un órgano de unos 150 g. Es un flujo enorme porque el riñón procesa la sangre para filtrar y regular, no sólo para nutrirse."
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
      "expl": "La lámina basal glomerular tiene carga negativa y retiene la albúmina, que también es aniónica. El endotelio fenestrado deja pasar todo el plasma, la cápsula parietal no forma parte de la barrera y la mácula densa es un sensor."
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
      "expl": "Las células mesangiales son contráctiles y fagocíticas. Al contraerse reducen la superficie filtrante. La renina la producen las yuxtaglomerulares, y el diafragma de hendidura lo forman los pedicelos de los podocitos."
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
      "expl": "El túbulo contorneado proximal reabsorbe prácticamente toda la glucosa y los aminoácidos filtrados, además de la mayor parte del agua y del sodio. Los otros segmentos tienen funciones distintas."
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
      "expl": "La ADH actúa sobre los receptores de las células principales del colector y aumenta la reabsorción de agua. La aldosterona regula sodio y potasio, el ANP inhibe la reabsorción y la PTH regula el calcio."
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
      "expl": "El pH normal de la orina va de 4,6 a 8,0, un rango amplio. El pH de la sangre (7,35 a 7,45) no es el de la orina. La orina no tiene el pH del jugo gástrico."
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
      "expl": "La glucosa normalmente no se excreta: si aparece en la orina es porque se superó la capacidad de reabsorción del TCP, como en la diabetes o el estrés con adrenalina, que degrada glucógeno. La filtración en sí no selecciona la glucosa."
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
      "expl": "La albúmina aparece en la orina cuando la membrana de filtración pierde permeabilidad por enfermedad, lesión o irritación. El TCP la reabsorbe normalmente, y la cápsula adiposa no forma parte de la membrana."
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
      "expl": "El urotelio es un epitelio de transición con células en sombrilla y uniones estrechas: forma una barrera casi impermeable y se deforma sin romperse. Por eso la vía urinaria no se puede reemplazar por intestino sin problemas."
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
      "expl": "T4 baja con TSH alta es periférica baja y trófica alta: falla la glándula final. La hipófisis está viva y compensa elevando la TSH. En Graves la TSH está suprimida, no elevada."
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
      "expl": "Con periférica baja, trófica baja e hipotalámica baja, el piso roto es el hipotálamo: terciario. Si la TRH estuviera normal o alta, sería secundario. El déficit de yodo da TSH alta, así que es primario."
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
      "expl": "La adenohipófisis es epitelial y fabrica sus siete hormonas. La neurohipófisis es nerviosa: son los axones de las neuronas hipotalámicas los que bajan por el tallo y ella sólo almacena y libera ADH y oxitocina."
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
      "expl": "La oxitocina es de la neurohipófisis: hace la eyección de la leche ante la succión. La prolactina es de la adenohipófisis: produce leche, y actúa después de la toma. Además suprime la ovulación."
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
      "expl": "La médula produce adrenalina y noradrenalina, que son aminoacídicas y actúan por receptor de membrana con AMPc. No tiene hormona trófica: la maneja directamente el simpático. El cortisol y la aldosterona son de la corteza."
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
      "expl": "La somatostatina la produce la célula D del islote y frena a la insulina (beta) y al glucagón (alfa). La insulina la produce la beta y baja la glucemia; el glucagón la produce la alfa y la sube."
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
      "expl": "La acción es específica: sólo responden las células con receptor para esa hormona, aunque la hormona llegue a todas. Una hormona puede actuar en tejidos distantes de la glándula que la produce."
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
      "expl": "La sangre distribuye la hormona a todos lados, pero sólo responde la célula que tiene receptor. Confundir distribución con acción es el error conceptual más frecuente del tema."
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
      "expl": "Las hormonas liposolubles atraviesan la membrana y tienen receptor intracelular, en el citosol o en el núcleo. Las hidrosolubles tienen receptor de membrana."
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
      "expl": "Las liposolubles atraviesan las membranas del tubo digestivo, así que se administran por vía oral. Las hidrosolubles, en cambio, son degradadas por enzimas digestivas y se administran por vía endovenosa."
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
      "expl": "La TRH estimula la TSH. La CRH estimula la ACTH, la GnRH estimula la FSH y la LH, y la oxitocina es de la neurohipófisis. Cada eje tiene su hormona liberadora."
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
      "expl": "La CRH estimula la ACTH, que estimula la corteza suprarrenal para producir cortisol. La TRH es del eje tiroideo, la GnRH del eje gonadal y la ADH regula el agua."
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
      "expl": "El cortisol es el freno del eje suprarrenal: vuelve al hipotálamo y a la adenohipófisis y frena la CRH y la ACTH. La aldosterona regula volumen y sodio, la adrenalina viene de la médula y la insulina es pancreática."
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
      "expl": "En el varón la FSH estimula los conductos seminíferos y mantiene la espermatogénesis. La testosterona la estimula la LH, y la melanina la estimula la MSH."
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
      "expl": "La LH forma y mantiene el cuerpo lúteo, que secreta progesterona y estrógenos. La FSH madura los folículos primarios. La ADH y la oxitocina son de la neurohipófisis."
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
      "expl": "La ADH se libera en respuesta a cambios en la osmolaridad y hace que el riñón reabsorba agua. La succión del pezón y las contracciones uterinas liberan oxitocina, no ADH."
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
      "expl": "La succión del pezón libera oxitocina, que hace fluir la leche. La osmolaridad estimula la ADH y la glucemia regula el glucagón. La oxitocina no se regula por la presión arterial en ese contexto."
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
      "expl": "En el adulto la GH mantiene la masa ósea y muscular, promueve la curación y la lipólisis. En el niño promueve el crecimiento; con las placas cerradas, la GH no aumenta la altura."
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
      "expl": "La PTH sube la calcemia: saca calcio del hueso, lo reabsorbe en el riñón y facilita su absorción intestinal junto con la vitamina D. La calcitonina es la que baja la calcemia."
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
      "expl": "Las células foliculares producen T4 y T3, que se almacenan en el coloide del folículo. Las parafoliculares producen calcitonina, las principales de la paratiroides producen PTH y las alfa del páncreas, glucagón."
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
      "expl": "La testosterona la producen las células intersticiales del testículo, estimuladas por la LH. Las de Sertoli están dentro de los conductos seminíferos y no son las productoras de testosterona."
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
      "expl": "La melatonina se produce cuando no hay luz y regula los ritmos circadianos. También actúa sobre el timo y es antioxidante. La producción es nocturna, no diurna."
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
      "expl": "La conversión de angiotensina I a II la hace la enzima convertidora (ECA) en los pulmones. La renina convierte el angiotensinógeno en angiotensina I. La aldosterona es el producto final, no la enzima."
    },
    {
      "id": "P-endo-24",
      "topic": "endocrino",
      "ref": "sección 16",
      "q": "¿Qué hormona se libera cuando aumenta el volumen sanguíneo, inhibe la aldosterona y la ADH y aumenta la diuresis?",
      "opts": [
        "La renina, que se libera cuando baja el volumen y eleva la presión arterial.",
        "La angiotensina II, que aumenta la retención de sodio y agua en el túbulo contorneado distal.",
        "La calcitonina, que se libera cuando sube la calcemia y frena la reabsorción tubular de sodio.",
        "El péptido natriurético atrial, que libera la aurícula al llenarse y frena la reabsorción de sodio."
      ],
      "ans": 3,
      "expl": "El péptido natriurético atrial se libera cuando aumenta el volumen y el corazón se llena. Inhibe la ADH y la aldosterona, frena la reabsorción de sodio y agua, y aumenta la diuresis. Es el sistema opuesto al RAA."
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
      "expl": "La microglía fagocita y es la excepción embriológica: deriva de la médula ósea, es mesodérmica. Los astrocitos forman la cicatriz y conservan la barrera hematoencefálica. Los oligodendrocitos hacen mielina en el SNC."
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
      "expl": "En el SNP la mielina la hace la célula de Schwann, que deriva de la cresta neural. Sembrar oligodendrocitos es un error de compartimento: esas células hacen mielina sólo en el SNC."
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
      "expl": "Lo que define al axón es el diámetro constante, la ramificación en ángulo recto y la ausencia de grumos de Nissl y espinas. Las dendritas conducen hacia el soma; el axón sale del soma hacia el telodendrón."
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
      "expl": "En la fibra mielínica el impulso salta entre nodos de Ranvier, conducción saltatoria. En la amielínica la despolarización recorre punto a punto. Las incisuras y la neuroqueratina son propias de la fibra mielínica, y la célula de Schwann sí envuelve el axón mielinizado."
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
      "expl": "Broca forma las palabras y está en el lóbulo frontal. Wernicke comprende el lenguaje y está en el temporal. El cerebelo no es un lóbulo cortical: coordina el movimiento y el equilibrio, y no interviene en la formación del habla."
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
      "expl": "El simpático relaja la vejiga y contrae el recto. El parasimpático hace lo inverso: contrae la vejiga y relaja el recto. Esto contradice la intuición de que el simpático contrae todo."
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
      "expl": "El astrocito conserva la barrera hematoencefálica, depura residuos y forma la cicatriz. La microglía fagocita, el oligodendrocito hace mielina y la ependimaria reviste los ventrículos."
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
      "expl": "Las células ependimarias revisten los ventrículos y el canal del epéndimo, y participan en la producción y circulación del LCR. Las satélite están en los ganglios, las de Schwann en el SNP y la microglía fagocita."
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
      "expl": "Las células satélite rodean el soma de las neuronas en los ganglios del SNP y regulan su microambiente. Son de origen en la cresta neural. Los astrocitos y los oligodendrocitos son del SNC."
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
      "expl": "Las células de Schwann y las satélite son derivadas de la cresta neural, que nace del borde del tubo neural y migra por el embrión. El tubo neural da el SNC. La microglía es la excepción mesodérmica."
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
      "expl": "El prosencéfalo se divide en telencéfalo y diencéfalo. El diencéfalo da el tálamo y el hipotálamo. El telencéfalo da los hemisferios y los ganglios basales. El metencéfalo da la protuberancia y el cerebelo."
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
      "expl": "El mielencéfalo da el bulbo raquídeo. La protuberancia y el cerebelo vienen del metencéfalo, y el mesencéfalo es el de la vesícula del mismo nombre."
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
      "expl": "La seudounipolar tiene una sola prolongación que se bifurca en T y se encuentra en los ganglios raquídeos. La bipolar tiene dos polos, la multipolar tiene muchas dendritas y la unipolar verdadera no se bifurca."
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
      "expl": "Las motoneuronas del asta ventral son multipolares: un axón y muchas dendritas. Es el tipo más común en el SNC. La seudounipolar es la de los ganglios, y la bipolar es la de la retina y el olfato."
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
      "expl": "El nodo de Ranvier es la interrupción de la vaina entre dos células de Schwann consecutivas. Ahí la membrana queda expuesta, y el impulso salta de nodo en nodo. El cono axónico es donde nace el axón y el telodendrón es la terminación."
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
      "expl": "El potencial de acción es todo o nada. La intensidad del estímulo se codifica en la frecuencia de disparo, no en la amplitud. El período refractario también hace que el impulso sea unidireccional."
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
      "expl": "El tálamo es la estación de relevo sensorial hacia la corteza. El hipotálamo regula temperatura y presión, los ganglios basales coordinan el movimiento y la melatonina es de la glándula pineal."
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
      "expl": "El hipotálamo regula temperatura, frecuencia cardíaca, presión arterial y apetito, y es el puente con el sistema endócrino. La coordinación motora es del cerebelo, la respiración del tronco y la audición del temporal."
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
      "expl": "El cerebelo coordina el movimiento, el equilibrio y la postura. No es un lóbulo cortical ni estación de relevo: esa función es del tálamo. El LCR lo producen los plexos coroideos."
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
      "expl": "Los ganglios basales son telencéfalo y coordinan el movimiento voluntario. El tálamo es diencéfalo y es relevo sensorial, el hipotálamo regula funciones vitales y el tronco conecta el cerebro con la médula."
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
      "expl": "El LCR amortigua el encéfalo, lo hace flotar, cumple homeostasis química y transporta metabolitos. No transmite impulsos, no forma mielina y la barrera hematoencefálica la mantienen los astrocitos."
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
      "expl": "La duramadre es la capa más externa, gruesa y fibrosa, y contacta con el hueso. La aracnoides es laxa, la piamadre es finísima y vascularizada. La pleura pertenece al tórax."
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
      "expl": "El abducens (VI) inerva el recto lateral. El oculomotor (III) controla la mayoría de los músculos del ojo, el troclear (IV) el oblicuo superior y el facial (VII) la expresión facial."
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
      "expl": "El vago (X) es mixto y regula órganos del tórax y del abdomen, además de intervenir en la fonación y la deglución. El accesorio (XI) es motor para cuello y hombros, el hipogloso (XII) mueve la lengua y el trigémino (V) da sensibilidad a la cara."
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
      "expl": "Resistir tracción en una dirección es tejido conjuntivo denso modelado, con colágeno tipo I. Eso es lo que forma los tendones. El cartílago amortigua compresión y el músculo liso contrae; ninguno resiste tracción de esa forma."
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
      "expl": "La barrera impermeable es de uniones estrechas (zonula occludens). La resistencia mecánica es de uniones de anclaje (zonula adherens y desmosomas). Las uniones comunicantes (nexos) dejan pasar iones y moléculas pequeñas, así que no sirven como barrera."
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
      "expl": "Que la reabsorción caiga al descelularizar y vuelva al resembrar prueba que es función del epitelio del túbulo proximal, con sus transportadores. La matriz conserva la arquitectura, pero no reabsorbe. La presión de perfusión se midió sobre el clearance de creatinina, no sobre la glucosa."
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
      "expl": "Cruzar capas germinales requiere pluripotencia. La multipotente queda dentro de su linaje; la totipotente sobra porque forma anexos. Si la pregunta pide el origen de la célula, la respuesta es embrionaria o adulta, no pluripotente."
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
      "expl": "Los autores atribuyen la falla al material, no a las células: el Ca²⁺ precipita y mineraliza el constructo, y la difusión se compromete. Con Sr²⁺ el estradiol se mantiene estable y no hay calcificación. La luteinización no es el problema."
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
      "expl": "Todo el tejido nervioso es ectodérmico salvo la microglía, de origen mesodérmico. Sin ella el organoide no tiene componente fagocítico ni respuesta inmune innata. Los astrocitos y oligodendrocitos son ectodérmicos y no suplen eso."
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
      "expl": "El tejido conjuntivo es el que tiene matriz extracelular abundante y da sostén y relleno. El epitelio tiene poca matriz, el músculo contrae y el nervioso conduce impulsos."
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
      "expl": "Los glucosaminoglicanos forman el componente amorfo, retienen agua y favorecen la difusión. Las fibras colágenas resisten la tracción, las elásticas recuperan forma y las microvellosidades son de las células epiteliales."
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
      "expl": "Las fibras colágenas forman el componente fibrilar y resisten la tracción. Los glucosaminoglicanos son el componente amorfo, retienen agua y no resisten tracción."
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
      "expl": "Las uniones estrechas forman la barrera impermeable. Las comunicantes dejan pasar iones, los desmosomas dan resistencia mecánica y los cilios mueven fluidos sobre el epitelio."
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
      "expl": "Los nexos están en los discos intercalares y permiten el acople eléctrico: si se despolariza una fibra, se despolarizan todas. Las uniones estrechas no permiten el paso eléctrico y los cilios no existen en el miocardio."
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
      "expl": "Los cilios mueven fluidos sobre la superficie del epitelio, por ejemplo en la vía aérea, donde barren el moco. Las microvellosidades absorben, los desmosomas unen y los nexos conducen la señal."
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
      "expl": "El cartílago hialino amortigua la compresión y tiene superficie de deslizamiento. El hueso resiste carga y es reservorio de calcio, el conectivo denso resiste tracción y el músculo esquelético contrae voluntariamente."
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
      "expl": "El tejido óseo resiste carga y es reservorio de calcio. Se regula por la PTH, que lo reabsorbe, y por la calcitonina, que lo deposita. El cartílago no regula calcio y el músculo liso responde a otros estímulos."
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
      "expl": "El músculo cardíaco es rítmico, involuntario y tiene nexos en los discos intercalares para el acople eléctrico. El esquelético es voluntario, el liso es lento y sostenido, y el cardíaco sí tiene nexos."
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
      "expl": "El músculo liso es el que se contrae lenta y sostenidamente en la pared de los tubos. El esquelético es rápido y voluntario, y el cardíaco es rítmico con nexos."
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
      "expl": "El parche debe tener epidermis delgada y dermis, que protegen y permiten el intercambio. El hueso, el músculo y el cartílago no cumplen esa función de cobertura respirable."
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
      "expl": "Los melanocitos producen la melanina que pigmenta la piel. Los fibroblastos hacen colágeno, los queratinocitos forman la epidermis y las de Langerhans son inmunitarias."
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
      "expl": "La barrera alveolocapilar tiene un espesor de unos 0,5 µm: el neumocito I, las membranas basales fusionadas y el endotelio. La tráquea y los bronquios conducen el aire, y la pleura no interviene en el intercambio."
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
      "expl": "El surfactante lo secretan los neumocitos II y baja la tensión superficial, así que el alvéolo no colapsa. La mucina es de las caliciformes, la melanina de los melanocitos y la histamina dilata o contrae bronquiolos."
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
      "expl": "La arteria elástica, como la aorta, tiene láminas elásticas que almacenan energía en sístole y la devuelven en diástole. Las venas tienen presión baja, los capilares intercambian y las arteriolas regulan resistencia."
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
      "expl": "La membrana basal glomerular y los podocitos con sus hendiduras retienen las proteínas, por tamaño y carga. El endotelio fenestrado deja pasar todo el plasma, y la reabsorción proximal es posterior."
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
      "expl": "Las hormonas endócrinas se secretan a la sangre desde cordones o cúmulos de células con red capilar, como los islotes. Los folículos almacenan en el coloide, las glándulas exocrinas usan conducto y el epitelio plano no secreta."
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
      "expl": "El folículo tiroideo guarda T3 y T4 en el coloide, fuera de la célula. Los islotes del páncreas, la adenohipófisis y la médula suprarrenal almacenan en otras estructuras."
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
      "expl": "El epitelio tubular está polarizado: la Na+/K+-ATPasa basolateral y las acuaporinas permiten reabsorber de forma selectiva. La rama descendente es impermeable a solutos, el urotelio es de la vía urinaria y la cápsula no reabsorbe."
    }
  ]
};
