// Contenido extendido de la guía guiasdeingenieria (secciones 12 a 17).
// Fuente no preaprobada: está parafraseado. Las marcas "(resumen)" indican partes que llegaron
// como resumen y no como texto leído completo; verificar contra la página antes de estudiar.
//
// mode "replace": reemplaza las secciones de la web del tema.
// mode "append":  agrega secciones al final del tema.

const GUIA = {

  respiratorio: { mode: "replace", conf: "media",
    intro: "Sección 12 de la guía: tórax y aparato respiratorio. Leída en texto casi completo y parafraseada.",
    sections: [
      { h: "Dos divisiones del aparato", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Criterio", "Qué incluye"], rows: [
          ["Anatómica superior", "Nariz, cavidad nasal, senos paranasales y faringe"],
          ["Anatómica inferior", "Laringe, tráquea, bronquios y pulmones"],
          ["Funcional: zona de conducción", "Desde la nariz hasta los bronquiolos terminales. Conduce, filtra, calienta y humidifica. No hay intercambio de gases"],
          ["Funcional: zona respiratoria", "Bronquiolos respiratorios, conductos alveolares, sacos y alvéolos. Acá ocurre el intercambio"]
        ]},
        { t: "dato", src: "guia", ref: "sección 12", text: "La tráquea NO es parte de la vía aérea superior. Si la pregunta pide 'lo que no es superior' entre nariz, cavidad bucal, faringe, tráquea y meatos, la respuesta es la tráquea." }
      ]},
      { h: "El recorrido del aire", blocks: [
        { t: "p", src: "guia", ref: "sección 12", text: "Nariz (narinas adelante, coanas atrás hacia la nasofaringe) → faringe → laringe → tráquea → bronquios principales → lobares → segmentarios → bronquiolos → alvéolos." },
        { t: "p", src: "guia", ref: "sección 12", text: "La tráquea va de C6 a T4-T5, por delante del esófago, y termina en los dos bronquios principales." },
        { t: "p", src: "guia", ref: "sección 12", text: "El bronquio principal derecho es más vertical, más corto y más ancho: por eso lo aspirado suele caer ahí. El izquierdo es más largo y horizontal, y pasa bajo el arco de la aorta." },
        { t: "p", src: "guia", ref: "sección 12", text: "Un segmento broncopulmonar tiene bronquio y arteria propios, y se puede resecar solo." }
      ]},
      { h: "Nariz, senos y faringe", blocks: [
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Armazón óseo (nasales, maxilares) y cartilaginoso (tabique, alares). El vestíbulo tiene vibrisas.",
          "Cornetes y meatos generan turbulencia y aumentan la superficie para calentar y humidificar el aire.",
          "El epitelio olfatorio está en el techo de la cavidad nasal.",
          "Senos paranasales (frontal, maxilar, etmoidal, esfenoidal): alivian el cráneo, dan resonancia a la voz y drenan a la cavidad nasal."
        ]},
        { t: "table", src: "guia", ref: "sección 12", head: ["Piso de la faringe", "Límites", "Epitelio y datos"], rows: [
          ["Nasofaringe", "Desde las coanas hasta el paladar blando", "Cilíndrico seudoestratificado ciliado. Cinco aberturas: 2 coanas, 2 trompas auditivas y 1 hacia la orofaringe. Amígdala faríngea (adenoides)"],
          ["Orofaringe", "Desde el paladar blando hasta el hioides", "Plano estratificado no queratinizado. Se comunica con la boca por el istmo de las fauces. Amígdalas palatinas y linguales"],
          ["Laringofaringe", "Desde el hioides hasta el cricoides", "Mismo epitelio. Continúa con el esófago y la laringe"]
        ]},
        { t: "dato", src: "guia", ref: "sección 12", text: "La faringe es vía común de aire, alimento y agua. Al tragar, la laringe sube y la epiglotis se inclina sobre la entrada laríngea." }
      ]},
      { h: "Laringe", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Cartílago", "Tipo", "Dato clave"], rows: [
          ["Tiroides", "Impar, hialino", "Nuez de Adán; más prominente en el varón"],
          ["Epiglotis", "Impar, elástico", "Único impar elástico. Impide la entrada de alimento a la tráquea"],
          ["Cricoides", "Impar, hialino", "Anillo completo; pared inferior de la laringe. Referencia para la traqueotomía"],
          ["Aritenoides", "Par, hialino", "Mueven las cuerdas vocales"],
          ["Corniculados", "Par, elástico", "Sobre el vértice de los aritenoides"],
          ["Cuneiformes", "Par, elástico", "Sostienen los pliegues vocales y los laterales de la epiglotis"]
        ]},
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Pliegues vestibulares (superiores, falsas cuerdas): no producen sonido; se cierran en la maniobra de Valsalva.",
          "Pliegues vocales (inferiores, verdaderas cuerdas): vibran. El espacio entre ellos es la rima glótica.",
          "El tono depende de la tensión de los pliegues; el volumen, de la fuerza del aire espirado."
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "De frente se ven tiroides y cricoides; aritenoides y epiglotis quedan atrás." }
      ]},
      { h: "Tráquea y árbol bronquial", blocks: [
        { t: "p", src: "guia", ref: "sección 12", text: "La tráquea tiene 16 a 20 anillos de cartílago hialino en forma de C, abiertos hacia atrás (ahí hay tejido conectivo denso y músculo traqueal). El cartílago anterior evita que la vía colapse; la abertura posterior deja que el esófago se expanda al tragar." },
        { t: "table", src: "guia", ref: "sección 12", head: ["Estructura", "Cambios a lo largo del árbol"], rows: [
          ["Cartílago", "Anillos en C → placas → desaparece en los bronquiolos"],
          ["Músculo liso", "Aumenta en proporción hacia distal; por eso se cierran los bronquiolos en el asma"],
          ["Epitelio", "Cilíndrico seudoestratificado ciliado con caliciformes → cúbico ciliado → cúbico sin cilios → plano simple en el alvéolo"]
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "Lobares: 3 derechos y 2 izquierdos. Bronquiolos terminales: fin de la zona de conducción. La superficie de intercambio llega a unos 70 m² con unos 300 millones de alvéolos." }
      ]},
      { h: "Pulmones y pleuras", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["", "Pulmón derecho", "Pulmón izquierdo"], rows: [
          ["Lóbulos", "3", "2"],
          ["Fisuras", "Oblicua y horizontal", "Sólo la oblicua"],
          ["Particularidades", "Más ancho y corto (el hígado empuja el diafragma)", "Tiene língula y escotadura cardíaca (el corazón está a la izquierda)"]
        ]},
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Pleura parietal: tapiza costillas, diafragma y mediastino. Pleura visceral: pegada al pulmón, entra en las fisuras.",
          "Cavidad pleural: espacio entre ambas hojas, con una película de líquido que reduce la fricción.",
          "Hilio: bronquio principal, arteria pulmonar y venas pulmonares."
        ]},
        { t: "dato", src: "guia", ref: "sección 12", text: "Neumotórax (aire) o hemotórax (sangre) en la cavidad pleural: el pulmón colapsa por retroceso elástico aunque la vía aérea esté permeable." }
      ]},
      { h: "Diafragma y músculos respiratorios", blocks: [
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Diafragma: principal músculo de la inspiración, inervado por el nervio frénico. Por sus orificios pasan la vena cava inferior, el esófago y la aorta.",
          "Inspiración tranquila: diafragma e intercostales externos (activa).",
          "Inspiración forzada: suma esternocleidomastoideo, escalenos y pectoral menor.",
          "Espiración tranquila: pasiva, por retroceso elástico.",
          "Espiración forzada: abdominales (recto, oblicuos, transverso) e intercostales internos."
        ]}
      ]},
      { h: "Alvéolo y membrana alveolocapilar", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Célula", "Función"], rows: [
          ["Neumocito tipo I", "Epitelio plano simple. Cubre unos 95% de la superficie; sitio del intercambio"],
          ["Neumocito tipo II (célula septal)", "Cúbica, con microvellosidades. Secreta surfactante y repone a los tipo I"],
          ["Macrófago alveolar (célula de polvo)", "Fagocita partículas y microorganismos"]
        ]},
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Membrana alveolocapilar, cuatro capas: (1) líquido alveolar con surfactante y epitelio; (2) membrana basal del epitelio; (3) membrana basal del endotelio, a menudo fusionada con la anterior; (4) endotelio capilar.",
          "Espesor ≈ 0,5 µm. Superficie ≈ 70 m².",
          "Factores de la difusión: diferencia de presión parcial, superficie, distancia, peso molecular y solubilidad. La fuerza del diafragma no es uno de ellos."
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "Surfactante: fosfolípidos y lipoproteínas de los neumocitos II. Baja la tensión superficial y evita el colapso en la espiración. Sin él aparece el síndrome de dificultad respiratoria del prematuro." }
      ]},
      { h: "Mecánica ventilatoria (Boyle y presiones)", blocks: [
        { t: "p", src: "guia", ref: "sección 12", text: "Ley de Boyle: a temperatura constante, P × V = constante. Al expandir el tórax baja la presión alveolar (unos 2 mmHg menos que la atmosférica) y entra aire." },
        { t: "table", src: "guia", ref: "sección 12", head: ["Presión (mmHg, nivel del mar)", "Valor"], rows: [
          ["Atmosférica", "760"],
          ["Alveolar: inspiración / reposo / espiración", "758 / 760 / 762"],
          ["Intrapleural (reposo / inspiración)", "≈ 756 / ≈ 754 (siempre subatmosférica)"]
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "La presión intrapleural negativa mantiene el pulmón abierto; junto con el surfactante evita el colapso en la espiración." },
        { t: "p", src: "guia", ref: "sección 12", text: "Distensibilidad baja en fibrosis, edema pulmonar y déficit de surfactante. La adrenalina dilata los bronquiolos (por eso se usa en anafilaxia); la histamina y el parasimpático los constriñen." }
      ]},
      { h: "Volúmenes y capacidades (varón de referencia)", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Volumen o capacidad", "Valor"], rows: [
          ["Volumen corriente (VC)", "500 mL"],
          ["Volumen de reserva inspiratorio (VRI)", "3.100 mL"],
          ["Volumen de reserva espiratorio (VRE)", "1.200 mL"],
          ["Volumen residual (VR)", "1.200 mL (no se mide con espirometría)"],
          ["Espacio muerto", "≈ 150 mL"],
          ["Capacidad inspiratoria = VC + VRI", "3.600 mL"],
          ["Capacidad residual funcional = VR + VRE", "2.400 mL"],
          ["Capacidad vital = VRI + VC + VRE", "4.800 mL"],
          ["Capacidad pulmonar total = CV + VR", "6.000 mL"],
          ["Volumen minuto = 500 × 12", "6.000 mL/min"],
          ["Ventilación alveolar = (500 − 150) × 12", "4.200 mL/min"]
        ]},
        { t: "dato", src: "guia", ref: "sección 12", text: "La capacidad vital NO incluye el VR; la CRF sí. El espacio muerto no es un volumen más: es parte del VC que queda en la vía de conducción. Respirar rápido y superficial ventila peor que lento y profundo con el mismo volumen minuto." }
      ]},
      { h: "Intercambio y transporte de gases", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Dato", "Valor"], rows: [
          ["Dalton, aire (760 mmHg): PO₂ / PN₂ / PCO₂", "≈ 159 / ≈ 597 / ≈ 0,3"],
          ["Respiración externa: PO₂ alvéolo / sangre que llega", "105 / 40 mmHg"],
          ["Respiración externa: PCO₂ alvéolo / sangre que llega", "40 / 45 mmHg"],
          ["Respiración interna: PO₂ sangre / tejido", "100 / 40 mmHg"],
          ["Respiración interna: PCO₂ sangre / tejido", "40 / 45 mmHg"],
          ["Solubilidad (Henry)", "El CO₂ es unas 24 veces más soluble que el O₂"]
        ]},
        { t: "table", src: "guia", ref: "sección 12", head: ["Transporte", "Forma"], rows: [
          ["O₂", "98,5% unido a la hemoglobina; 1,5% disuelto"],
          ["CO₂", "≈ 70% como bicarbonato (vía dominante); ≈ 23% como carbaminohemoglobina; ≈ 7% disuelto"]
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "Dentro del eritrocito, la anhidrasa carbónica convierte CO₂ + H₂O en H₂CO₃ → H⁺ + HCO₃⁻; el bicarbonato sale a cambio de cloruro." },
        { t: "p", src: "guia", ref: "sección 12", text: "La hemoglobina entrega más O₂ con pH bajo (efecto Bohr), PCO₂ alta, temperatura alta o 2,3-BPG alto. La frecuencia respiratoria no la modifica." }
      ]},
      { h: "Control de la respiración", blocks: [
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Centro bulbar: ritmo básico, grupo dorsal (inspiración) y ventral (espiración forzada). El área pontina lo modula.",
          "Quimiorreceptores centrales (bulbo): responden a H⁺ del LCR, dependientes de la PCO₂.",
          "Quimiorreceptores periféricos (cuerpos carotídeos y aórticos): responden a PO₂ baja, PCO₂ alta y H⁺.",
          "Estímulo dominante: PCO₂, no PO₂. Junto con el riñón, regula el pH."
        ]}
      ]},
      { h: "Movimientos modificados y trastornos", blocks: [
        { t: "table", src: "guia", ref: "sección 12", head: ["Movimiento o trastorno", "Qué pasa"], rows: [
          ["Tos", "Inspiración profunda, cierre de la rima y espiración fuerte que la abre"],
          ["Estornudo", "Espasmo de los músculos espiratorios; el aire sale por nariz y boca"],
          ["Hipo", "Espasmo del diafragma con cierre espasmódico de la rima"],
          ["Maniobra de Valsalva", "Espiración forzada contra la rima cerrada"],
          ["Asma", "Broncoconstricción, edema de mucosa e hipersecreción. Sube la resistencia; cede con broncodilatadores"],
          ["Enfisema (EPOC)", "Fusión de alvéolos; se pierde tejido elástico. Sube la resistencia y la distancia de difusión"],
          ["Tabaco", "Contrae bronquiolos terminales, aumenta moco e inhibe el movimiento ciliar; a largo plazo destruye el tejido elástico"]
        ]}
      ]},
      { h: "Trampas y consignas", blocks: [
        { t: "ul", src: "guia", ref: "sección 12", items: [
          "Neumocitos II secretan surfactante; los tipo I hacen el intercambio.",
          "Derecho: 3 lóbulos. Izquierdo: 2 lóbulos y escotadura cardíaca.",
          "CRF = VR + VRE. La capacidad vital no incluye el VR.",
          "El CO₂ viaja sobre todo como bicarbonato (≈ 70%).",
          "Al bajar el pH aumenta la liberación de O₂."
        ]},
        { t: "p", src: "guia", ref: "sección 12", text: "Consignas de desarrollo típicas: (1) enumerar de laringe a alvéolos y describir la división del árbol bronquial; (2) describir pleura parietal, visceral y cavidad pleural, y explicar qué pasa en un neumotórax." },
        { t: "p", src: "guia", ref: "sección 12", text: "Bioingeniería de la clase: ventilador mecánico (presión positiva; cuidado con la sobredistensión), ECMO como membrana alveolocapilar artificial, surfactante exógeno y andamios pulmonares descelularizados." }
      ]}
    ]
  },

  digestivo: { mode: "replace", conf: "media",
    intro: "Sección 14 de la guía: aparato digestivo. Leída casi completa y parafraseada.",
    sections: [
      { h: "Tubo digestivo y órganos accesorios", blocks: [
        { t: "table", src: "guia", ref: "sección 14", head: ["Grupo", "Órganos", "Cómo actúa"], rows: [
          ["Tubo digestivo", "Boca, faringe, esófago, estómago, intestino delgado e intestino grueso", "El alimento pasa por dentro"],
          ["Órganos accesorios", "Dientes, lengua, glándulas salivales, hígado, vesícula y páncreas", "No tocan el alimento; vuelcan secreciones por conductos"]
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Seis procesos: ingestión (función principal de la boca), secreción, mezcla y propulsión (motilidad, a cargo del músculo liso), digestión (mecánica y química), absorción (vellosidades del intestino delgado) y defecación." }
      ]},
      { h: "Las cuatro túnicas", blocks: [
        { t: "table", src: "guia", ref: "sección 14", head: ["Túnica", "Contenido", "Función"], rows: [
          ["Mucosa", "Epitelio (varía por tramo), lámina propia (conectivo con vasos, linfáticos y MALT) y muscular de la mucosa", "Protege, secreta y absorbe. La muscular de la mucosa aumenta la superficie"],
          ["Submucosa", "Conectivo que fija la mucosa a la muscular; vasos grandes y glándulas en algunos tramos. Plexo submucoso (Meissner)", "Secreción glandular, movimiento de la mucosa y vasoconstricción"],
          ["Muscular", "Esquelético en boca, faringe y tercio superior del esófago; liso en el resto (circular interna y longitudinal externa). Plexo mientérico (Auerbach)", "Motilidad"],
          ["Serosa o adventicia", "Serosa = peritoneo visceral (mesotelio + conectivo). Adventicia = sólo conectivo", "Cubre o fija el órgano"]
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "Regla de examen: el plexo que está dentro del músculo maneja el músculo. Serosa vs. adventicia es topográfico: si el órgano está tapizado por peritoneo es serosa; si es retroperitoneal, adventicia." }
      ]},
      { h: "Cómo cambia el plan por tramo", blocks: [
        { t: "table", src: "guia", ref: "sección 14", head: ["Tramo", "Epitelio", "Muscular", "Capa externa", "Marca distintiva"], rows: [
          ["Esófago", "Plano estratificado no queratinizado", "Esquelético (1/3 superior), mixto, liso (1/3 inferior)", "Adventicia", "Glándulas mucosas en la submucosa"],
          ["Estómago", "Cilíndrico simple con fositas gástricas", "Tres capas (oblicua, circular, longitudinal)", "Serosa", "Rugosidades que se borran al llenarse"],
          ["Intestino delgado", "Cilíndrico simple con microvellosidades y caliciformes", "Dos capas", "Serosa", "Pliegues circulares y vellosidades"],
          ["Intestino grueso", "Cilíndrico simple con muchísimas caliciformes, sin vellosidades", "Longitudinal condensada en tres tenias", "Serosa con apéndices epiploicos", "Haustros y criptas rectas y profundas"]
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "El cambio de plano estratificado (esófago) a cilíndrico simple (estómago) es brusco, en la unión gastroesofágica. El músculo esquelético aparece sólo en el extremo superior del tubo y en el esfínter anal externo." }
      ]},
      { h: "Peritoneo y sus formaciones", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Epiplón mayor: cuelga de la curvatura mayor, cae sobre el colon transverso y cubre el intestino delgado. Contiene ganglios y macrófagos.",
          "Epiplón menor: va de la curvatura menor y el duodeno al hígado. Por ahí pasa la tríada portal hacia el hilio hepático.",
          "Ligamento falciforme: fija el hígado a la pared anterior y al diafragma. En su borde libre corre el ligamento redondo (resto de la vena umbilical).",
          "Mesenterio: suspende el yeyuno-íleon y le lleva sangre y linfa.",
          "Mesocolon: fija el colon."
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "La guía advierte que el banco de la bibliografía le asigna al mesocolon (y no al mesenterio) la función principal de llevar sangre y linfa." }
      ]},
      { h: "Boca, dientes y glándulas salivales", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Adulto: 32 dientes (por hemiarcada: 2 incisivos, 1 canino, 2 premolares, 3 molares).",
          "Paladar duro: parte anterior del techo, formado por maxilares y palatinos. Del paladar blando cuelga la úvula. Los arcos palatogloso y palatofaríngeo limitan las amígdalas palatinas.",
          "Dentición decidua: 20 piezas, sin premolares. Los molares permanentes erupcionan por detrás, no reemplazan a los de leche."
        ]},
        { t: "table", src: "guia", ref: "sección 14", head: ["Tejido del diente", "Característica"], rows: [
          ["Esmalte", "El tejido más duro; acelular, no se regenera"],
          ["Dentina", "Conectivo calcificado; es el grueso del diente"],
          ["Cemento", "Recubre la raíz"],
          ["Pulpa", "Conectivo con vasos y nervios; se abre por el foramen apical"],
          ["Ligamento periodontal", "Recubre los alvéolos; es una gonfosis"]
        ]},
        { t: "table", src: "guia", ref: "sección 14", head: ["Glándula", "Tipo", "Dato"], rows: [
          ["Parótida", "Serosa pura (rica en amilasa)", "La que se agranda en las paperas. Es la mayor"],
          ["Submandibular", "Mixta, predominio seroso", "Aporta el grueso del volumen salival"],
          ["Sublingual", "Mixta, predominio mucoso", "—"]
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Saliva: más del 99% agua; contiene amilasa salival, lipasa lingual, lisozima y moco. Ablanda el bolo." }
      ]},
      { h: "Deglución y esófago", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Tres fases: voluntaria (bucal), faríngea y esofágica (ambas involuntarias).",
          "Fase faríngea: el paladar blando y la úvula tapan la nasofaringe; la laringe se eleva; la epiglotis sella la entrada; las cuerdas vocales se cierran.",
          "El avance es por peristaltismo: se puede deglutir cabeza abajo.",
          "El esófago mide unos 25 cm, va del cricoides al cardias y atraviesa el hiato esofágico.",
          "Esfínter superior de músculo esquelético; esfínter inferior de músculo liso. Si el inferior no cierra, sube contenido ácido: reflujo gastroesofágico."
        ]}
      ]},
      { h: "Estómago", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Regiones: cardias, fundus (la cúpula), cuerpo, antro pilórico, conducto pilórico y esfínter pilórico.",
          "Curvatura menor (derecha, cóncava) y mayor (izquierda, convexa).",
          "Los pliegues permiten distender el órgano; la muscular de tres capas bate el contenido.",
          "El alimento puede quedar hasta una hora en el fundus sin mezclarse con el jugo gástrico, mientras la amilasa salival sigue actuando.",
          "Epitelio cilíndrico simple que se invagina en fositas gástricas; en su fondo desembocan las glándulas gástricas."
        ]},
        { t: "table", src: "guia", ref: "sección 14", head: ["Célula", "Secreta", "Función"], rows: [
          ["Mucosa (superficial y del cuello)", "Moco alcalino", "Barrera que protege de la autodigestión"],
          ["Parietal (oxíntica)", "HCl y factor intrínseco", "HCl desnaturaliza proteínas y activa el pepsinógeno. El factor intrínseco es imprescindible para absorber B12 en el íleon"],
          ["Principal (zimogénica)", "Pepsinógeno y lipasa gástrica", "El pepsinógeno es inactivo; el HCl lo convierte en pepsina"],
          ["G (enteroendocrina, antro)", "Gastrina", "Estimula HCl, pepsinógeno y motilidad"]
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "Las parietales son clave: su destrucción (gastrectomía o gastritis atrófica) causa hipoclorhidria y anemia perniciosa por falta de B12. Las enzimas se secretan inactivas para no digerir la propia célula." },
        { t: "p", src: "guia", ref: "sección 14", text: "El estómago casi no absorbe (agua, algunos iones, ácidos grasos de cadena corta, ciertos fármacos y alcohol). Su producto es el quimo." }
      ]},
      { h: "Intestino delgado", blocks: [
        { t: "p", src: "guia", ref: "sección 14", text: "Tres porciones: duodeno (unos 25 cm, en C, retroperitoneal salvo la primera porción), yeyuno e íleon, que termina en la válvula ileocecal. Longitud en vivo: unos 2,5 m." },
        { t: "table", src: "guia", ref: "sección 14", head: ["Nivel de amplificación", "Qué es", "Tamaño"], rows: [
          ["1 · Pliegues circulares", "Rebordes permanentes de mucosa y submucosa; hacen espiral al quimo y lo enlentecen", "Milímetros"],
          ["2 · Vellosidades", "Proyecciones digitiformes con asa capilar y un vaso quilífero central", "0,5–1 mm"],
          ["3 · Microvellosidades", "Evaginaciones de la membrana apical; forman el borde en cepillo con enzimas", "≈ 1 µm"]
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "Los tres niveles se multiplican, no se suman. Pliegues circulares (permanentes) ≠ rugosidades gástricas (se borran al llenarse)." },
        { t: "table", src: "guia", ref: "sección 14", head: ["Célula o estructura", "Dónde", "Función"], rows: [
          ["Enterocito", "Vellosidad", "Absorbe; tiene el borde en cepillo"],
          ["Caliciforme", "Vellosidad y cripta", "Moco; aumenta hacia distal"],
          ["Paneth", "Fondo de las criptas", "Lisozima y defensinas"],
          ["Enteroendocrinas (S, CCK, K)", "Criptas", "Secretina, colecistocinina y otras"],
          ["Glándulas de Brunner", "Submucosa del duodeno (único tramo con glándulas submucosas)", "Moco alcalino que neutraliza el quimo ácido"],
          ["Placas de Peyer", "Íleon", "Folículos linfáticos agregados"]
        ]}
      ]},
      { h: "Hígado y vía biliar", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Lobulillo hepático: hexágono con una vena centrolobulillar en el centro. En cada vértice hay una tríada portal (rama de la arteria hepática, rama de la vena porta y un conductillo biliar). Entre las láminas de hepatocitos corren los sinusoides, con macrófagos de Kupffer.",
          "Contracorriente: la sangre va de la tríada a la vena centrolobulillar; la bilis va del centro a la periferia por los canalículos.",
          "Doble aporte: arteria hepática (oxígeno) y vena porta (sangre del tubo digestivo y del bazo, con los nutrientes absorbidos)."
        ]},
        { t: "table", src: "guia", ref: "sección 14", head: ["Función", "Detalle"], rows: [
          ["Hidratos de carbono", "Glucogenogénesis, glucogenólisis y gluconeogénesis"],
          ["Proteínas", "Desaminación; el amoníaco se convierte en urea; sintetiza la mayoría de las proteínas plasmáticas"],
          ["Lípidos", "Colesterol, lipoproteínas y oxidación de ácidos grasos"],
          ["Fármacos y hormonas", "Inactivación y excreción"],
          ["Bilirrubina", "La excreta con la bilis; NO la almacena"],
          ["Sales biliares", "Emulsionan las grasas"],
          ["Almacenamiento", "Glucógeno, vitaminas A, B12, D, E, K y hierro"],
          ["Vitamina D", "Primer paso de hidroxilación (el segundo lo hace el riñón)"]
        ]},
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Vesícula: almacena y concentra la bilis; se vacía por acción de la CCK. Los cálculos vienen de la cristalización del colesterol.",
          "La bilis no tiene enzimas. Las sales emulsionan (digestión mecánica); la lipasa pancreática hace la química.",
          "La bilirrubina (del hemo) se transforma en estercobilina en el intestino."
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Consigna típica: recorrido de la bilis desde el hígado hasta el duodeno. Conductos hepáticos derecho e izquierdo → hepático común; se le une el cístico (de la vesícula) y forman el colédoco; el colédoco desemboca junto con el conducto pancreático en la papila duodenal mayor, en la segunda porción del duodeno." }
      ]},
      { h: "Páncreas exocrino", blocks: [
        { t: "p", src: "guia", ref: "sección 14", text: "Acinos de células piramidales con gránulos de zimógeno. El jugo pancreático es rico en bicarbonato. Cabeza dentro de la C del duodeno, luego cuello, cuerpo y cola (llega hasta el bazo)." },
        { t: "table", src: "guia", ref: "sección 14", head: ["Enzima", "Sustrato", "Producto"], rows: [
          ["Amilasa pancreática", "Almidón y glucógeno", "Disacáridos y dextrinas"],
          ["Tripsina, quimotripsina, carboxipeptidasa, elastasa", "Uniones peptídicas", "Péptidos cortos y aminoácidos"],
          ["Lipasa pancreática", "Triglicéridos emulsionados", "Ácidos grasos y monoglicéridos"],
          ["Ribonucleasa y desoxirribonucleasa", "ARN y ADN", "Nucleótidos"]
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "Tripsinógeno, quimotripsinógeno y procarboxipeptidasa salen como zimógenos. La enterocinasa convierte el tripsinógeno en tripsina en la luz del duodeno. Si se activaran antes, digerirían al páncreas (pancreatitis)." }
      ]},
      { h: "Intestino grueso", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Tenias: tres bandas longitudinales (la capa longitudinal se condensa en tres cintas).",
          "Haustros: saculaciones, porque las tenias son más cortas que el colon.",
          "Apéndices epiploicos: pequeños sacos de grasa de la serosa.",
          "Los tres rasgos desaparecen en el recto.",
          "Función: absorbe agua, iones y las vitaminas K y del grupo B que produce la microbiota. La digestión química que ocurre acá es bacteriana."
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Colon derecho = ciego + ascendente. Colon izquierdo = descendente + sigmoides. El ciego recibe el íleon por la válvula ileocecal." }
      ]},
      { h: "Digestión y absorción por nutriente", blocks: [
        { t: "table", src: "guia", ref: "sección 14", head: ["Nutriente", "Dónde empieza", "Enzimas", "Vía de absorción"], rows: [
          ["Hidratos de carbono", "Boca", "Amilasa salival → amilasa pancreática → maltasa, sacarasa, lactasa, α-dextrinasa del borde en cepillo", "Sangre → vena porta"],
          ["Proteínas", "Estómago", "Pepsina → tripsina, quimotripsina, carboxipeptidasa, elastasa → aminopeptidasa y dipeptidasa del borde en cepillo", "Sangre → vena porta"],
          ["Lípidos", "Intestino delgado", "Emulsión por sales biliares → lipasa pancreática; ácidos grasos y monoglicéridos en micelas", "Linfa: quilomicrones por el vaso quilífero"],
          ["Ácidos nucleicos", "Intestino delgado", "Ribonucleasa, desoxirribonucleasa, nucleosidasas y fosfatasas", "Sangre"]
        ]},
        { t: "dato", src: "guia", ref: "sección 14", text: "Las grasas no van a la vena porta: llegan a la circulación general por el conducto torácico y saltean el hígado en el primer pasaje. Excepción: los ácidos grasos de cadena corta van a la sangre portal." }
      ]},
      { h: "Hormonas digestivas", blocks: [
        { t: "table", src: "guia", ref: "sección 14", head: ["Hormona", "Quién la produce y ante qué", "Efecto"], rows: [
          ["Gastrina", "Células G del antro; ante distensión y péptidos", "Estimula HCl, pepsinógeno y motilidad"],
          ["Secretina", "Células S del duodeno; ante quimo ácido", "Estimula bicarbonato pancreático y biliar"],
          ["Colecistocinina (CCK)", "Duodeno; ante grasas y aminoácidos", "Contrae la vesícula, relaja el esfínter de la ampolla, estimula enzimas y produce saciedad"]
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Inervación extrínseca: el parasimpático estimula la digestión y el simpático la inhibe." }
      ]},
      { h: "Trampas de la sección", blocks: [
        { t: "ul", src: "guia", ref: "sección 14", items: [
          "Lámina propia (parte de la mucosa, con vasos y MALT) ≠ submucosa (fija la mucosa a la muscular).",
          "Parietal = HCl y factor intrínseco; principal = pepsinógeno. La gastrina la secreta la célula G y es hormona, no componente del jugo gástrico.",
          "Las sales biliares emulsionan; no digieren. La lipasa pancreática rompe los enlaces.",
          "Glándulas de Brunner: en la submucosa del duodeno; moco alcalino.",
          "El hígado excreta bilirrubina; no la almacena. Sí almacena glucógeno, vitaminas A, B12, D, E, K y hierro.",
          "Músculo esquelético: sólo en boca, faringe y tercio superior del esófago."
        ]}
      ]}
    ]
  },

  urinario: { mode: "replace", conf: "media",
    intro: "Sección 15 de la guía: aparato urinario. La primera parte se leyó completa; el resto llegó como resumen (marcado en cada bloque).",
    sections: [
      { h: "De dónde sale y anatomía macroscópica", blocks: [
        { t: "p", src: "guia", ref: "sección 15", text: "Base: capítulo 26 de la bibliografía de la cátedra, con banco de 75 preguntas. Lectura de la cátedra: Song y col., Nature Medicine 2013 (riñón bioingenierizado)." },
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "Riñones retroperitoneales, entre T12 y L3; el derecho algo más bajo.",
          "Hilio, de adelante hacia atrás: vena, arteria y pelvis renal.",
          "Tres capas de recubrimiento, de adentro hacia afuera: cápsula fibrosa, cápsula adiposa y fascia renal. La grasa cumple función mecánica; su pérdida puede producir ptosis renal, que puede acodar el uréter.",
          "Corteza (granular, con corpúsculos y túbulos contorneados) y médula (8 a 18 pirámides). Vía de salida: cálices menores → cálices mayores → pelvis → uréter."
        ]}
      ]},
      { h: "Irrigación renal (en orden)", blocks: [
        { t: "p", src: "guia", ref: "sección 15 (resumen)", text: "Arteria renal → segmentarias → interlobulares → arcuatas → interlobulillares → arteriola aferente → glomérulo → arteriola eferente → capilares peritubulares (y vasos rectos) → venas → vena renal." },
        { t: "dato", src: "guia", ref: "sección 15 (resumen)", text: "El riñón recibe unos 20–25% del gasto cardíaco. El glomérulo está entre dos arteriolas; la eferente, de menor calibre, mantiene alta la presión de filtración. El orden es arteriola después del glomérulo, no una vénula." }
      ]},
      { h: "La nefrona", blocks: [
        { t: "p", src: "guia", ref: "sección 15 (resumen)", text: "Unas 1 millón de nefronas por riñón, fijas desde el nacimiento." },
        { t: "table", src: "guia", ref: "sección 15 (resumen)", head: ["Segmento", "Qué hace"], rows: [
          ["Corpúsculo renal (glomérulo + cápsula de Bowman)", "Capilares fenestrados. Barreras: endotelio fenestrado, lámina basal con carga negativa (retiene albúmina por tamaño y carga), hendiduras de filtración entre pedicelos. Células mesangiales modulan la superficie"],
          ["TCP", "Reabsorbe ≈ 65% del agua y del Na⁺, casi toda la glucosa y aminoácidos; secreta H⁺, amonio y fármacos"],
          ["Asa descendente", "Permeable al agua"],
          ["Asa ascendente", "Impermeable al agua; reabsorbe Na⁺, K⁺ y Cl⁻"],
          ["TCD", "Ajuste fino. El calcio está regulado por PTH"],
          ["Colector", "Receptores de ADH (agua) y aldosterona (Na⁺, K⁺); células intercaladas para el equilibrio ácido-base"],
          ["Conducto papilar", "Desemboca en el cáliz menor"]
        ]},
        { t: "p", src: "guia", ref: "sección 15 (resumen)", text: "Nefrona cortical (la mayoría, asa corta) vs. yuxtamedular (asa larga y vasos rectos): las yuxtamedulares crean el gradiente medular que permite concentrar la orina. La identificación de segmentos se enseña por el epitelio, no por microfotografía." },
        { t: "dato", src: "guia", ref: "sección 15 (resumen)", text: "El asa de Henle y los colectores están en la médula, no en la corteza. El corpúsculo renal es glomérulo más cápsula, no sólo el glomérulo." }
      ]},
      { h: "Aparato yuxtaglomerular y control", blocks: [
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "Mácula densa: sensor de NaCl en el túbulo. Células yuxtaglomerulares: sensores de estiramiento que secretan renina.",
          "Autorregulación miogénica (rápida) y retroalimentación túbulo-glomerular (lenta).",
          "Renina → angiotensina I → (ECA pulmonar) → angiotensina II → vasoconstricción, sed, ADH y aldosterona.",
          "El péptido natriurético atrial actúa en sentido opuesto.",
          "Inervación simpática, sobre todo vasomotora. El parasimpático no regula la función renal."
        ]},
        { t: "conflict",
          a: { src: "apunte", ref: "pág. 5", text: "La renina es secretada por las células yuxtaglomerulares en el túbulo contorneado distal." },
          b: { src: "guia", ref: "sección 15 (resumen)", text: "Células yuxtaglomerulares: en la pared de la arteriola aferente, junto a la mácula densa del túbulo distal." },
          note: "Los apuntes y el PDF de endocrino 2024 ubican la renina en el túbulo distal. La ubicación histológica correcta es la arteriola aferente; el túbulo distal es donde está la mácula densa. Confirmar con la cátedra." }
      ]},
      { h: "Filtración, reabsorción, secreción", blocks: [
        { t: "table", src: "guia", ref: "sección 15 (resumen)", head: ["Proceso", "Dónde", "Qué"], rows: [
          ["Filtración", "Corpúsculo", "Unos 180 L/día"],
          ["Reabsorción", "Túbulo, sobre todo proximal", "Del filtrado a la sangre"],
          ["Secreción", "Túbulo", "De la sangre al filtrado ya formado"]
        ]},
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "Presión neta de filtración = PHG − PHC − POC.",
          "Excreción = filtrado − reabsorbido + secretado.",
          "Funciones del riñón: regula iones, pH, volemia, osmolaridad y presión (vía renina); produce calcitriol y eritropoyetina; participa en la gluconeogénesis; excreta urea, creatinina, ácido úrico y fármacos.",
          "La hemodiálisis reproduce sólo la filtración; no hace reabsorción ni secreción selectivas, ni produce eritropoyetina ni calcitriol."
        ]},
        { t: "dato", src: "guia", ref: "sección 15 (resumen)", text: "Trampa: el riñón regula la producción de glóbulos rojos (eritropoyetina), no su tamaño. La glucosa normalmente no se excreta; si aparece en orina es glucosuria." }
      ]},
      { h: "Orina: normal y anormal", blocks: [
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "Valores de referencia: cerca de 95% agua; unos 2 L/día; pH 4,6 a 8,0; densidad 1,001 a 1,035.",
          "Hallazgos anormales: albuminuria, glucosuria, cetonuria, urobilinogenuria, cilindros y microorganismos.",
          "La creatinina plasmática es la prueba de función renal de referencia."
        ]}
      ]},
      { h: "Uréteres, vejiga, uretra y micción", blocks: [
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "Uréter de 25 a 30 cm; urotelio; musculatura invertida respecto del tubo digestivo; entra oblicuo en la vejiga, como válvula fisiológica.",
          "Vejiga: urotelio casi impermeable (por eso reemplazarla con intestino causa acidosis y litiasis). Trígono liso, entre los dos orificios ureterales y el uretral interno.",
          "Esfínter interno: liso e involuntario. Esfínter externo: esquelético y voluntario.",
          "Uretra femenina: unos 4 cm, por delante de la vagina; corta, con más infecciones. Masculina: unos 20 cm, con porciones vesical, prostática, membranosa y esponjosa; es urinaria y genital. La prostática recibe los conductos eyaculadores; obstrucción típica por hiperplasia prostática.",
          "Micción: el parasimpático contrae el detrusor y relaja el esfínter interno. El simpático relaja la vejiga."
        ]},
        { t: "dato", src: "guia", ref: "sección 15 (resumen)", text: "Vena renal izquierda: la más larga; cruza por delante de la aorta. Gonadal derecha → vena cava inferior; gonadal izquierda → vena renal izquierda." }
      ]},
      { h: "Preguntas de repaso y consignas", blocks: [
        { t: "ul", src: "guia", ref: "sección 15 (resumen)", items: [
          "El uréter va de la pelvis a la vejiga. La uretra nace en la vejiga y va al exterior.",
          "La pelvis renal se forma por la unión de los cálices mayores.",
          "En la mujer, la uretra va por delante de la vagina.",
          "Los conductos eyaculadores desembocan en la porción prostática.",
          "La vena testicular izquierda desemboca en la renal izquierda."
        ]},
        { t: "p", src: "guia", ref: "sección 15 (resumen)", text: "Consignas de desarrollo: (1) recorrido de la orina desde la papila hasta el exterior, con un catéter doble J; (2) describir la uretra masculina (porciones y conductos que recibe)." },
        { t: "p", src: "guia", ref: "sección 15 (resumen)", text: "Bioingeniería de la clase: catéter doble J, esfínter urinario artificial, hemodiálisis, riñón artificial portátil y regeneración de riñones sobre andamios." }
      ]},
      { h: "El riñón bioingenierizado (paper de Song y col., 2013)", blocks: [
        { t: "ul", src: "paper", ref: "Song y col., Nature Medicine 2013 (vía guía, resumen)", items: [
          "Descelularización con SDS perfundido por la arteria renal: se conserva la arquitectura vascular, la corteza, la médula y los uréteres.",
          "Siembra dual: endoteliales por la arteria; células renales por el uréter. Cultivo en biorreactor de hasta 12 días.",
          "Trasplante ortotópico en rata, con producción de orina desde el desclampeo.",
          "Retención de albúmina: 89,9% (cadavérico), 23,3% (descelularizado), 46,9% (regenerado). Reabsorción de glucosa: 91,7%, 2,8% y 47,4%."
        ]},
        { t: "dato", src: "paper", ref: "Song y col., 2013", text: "El trabajo no demuestra gradiente medular, aparato yuxtaglomerular, eritropoyetina ni calcitriol en el riñón regenerado." }
      ]}
    ]
  },

  endocrino: { mode: "append", conf: "alta",
    sections: [
      { h: "Distribución universal, acción específica", blocks: [
        { t: "p", src: "guia", ref: "sección 16", text: "Función principal: controlar las funciones corporales mediante mensajeros químicos. Acción específica: la hormona actúa sólo sobre células que tienen su receptor. La sangre la lleva a todo el cuerpo; sólo responde la célula con receptor." },
        { t: "dato", src: "guia", ref: "sección 16", text: "Error típico: confundir distribución con acción. Si una hormona se difunde por todo un tejido, no todas las células responden: hay que verificar receptor en la célula blanco." },
        { t: "p", src: "guia", ref: "sección 16", text: "El músculo esquelético queda fuera de las funciones endócrinas: se contrae por inervación somática. Toda opción que lo incluya es distractor." }
      ]},
      { h: "Clasificación química y AMPc", blocks: [
        { t: "table", src: "guia", ref: "sección 16", head: ["", "Liposolubles", "Hidrosolubles"], rows: [
          ["Ejemplos", "Estrógeno, cortisol, testosterona, progesterona, aldosterona, T3 y T4", "Adrenalina, noradrenalina, melatonina; oxitocina, ADH, GH, insulina; prostaglandinas"],
          ["Receptor", "Intracelular", "De membrana"],
          ["Segundo mensajero", "No usan", "AMPc"],
          ["Latencia", "Lenta (hay que transcribir)", "Rápida y breve"],
          ["Vía de administración", "Oral", "Endovenosa / intravenosa"]
        ]},
        { t: "dato", src: "guia", ref: "sección 16", text: "Regla del AMPc: si una opción menciona 'segundo mensajero' o 'AMPc', la hormona es hidrosoluble, nunca esteroidea ni tiroidea. T3 y T4 son liposolubles aunque deriven de la tirosina." },
        { t: "dato", src: "guia", ref: "sección 16", text: "Dos simplificaciones de la clase que la guía pide contestar tal cual: la insulina figura como endovenosa (en la práctica es subcutánea); la levotiroxina figura como absorbida en el estómago (en realidad se absorbe en yeyuno-íleon)." }
      ]},
      { h: "Ejes de retroalimentación negativa", blocks: [
        { t: "p", src: "guia", ref: "sección 16", text: "Casi todo el endócrino tiene ejes de tres pisos: hipotálamo (liberadora), adenohipófisis (trófica) y glándula periférica (hormona final). La hormona final inhibe a los dos pisos superiores." },
        { t: "table", src: "guia", ref: "sección 16", head: ["Eje", "Cadena"], rows: [
          ["Tiroideo (HHT)", "TRH → TSH → tiroides → T3 y T4"],
          ["Suprarrenal (HHS)", "CRH → ACTH → corteza suprarrenal → cortisol"],
          ["Gonadal (HPO)", "GnRH → FSH y LH → ovario o testículo → estradiol, progesterona o testosterona"]
        ]},
        { t: "dato", src: "guia", ref: "sección 16", text: "La GnRH no figura en los materiales de la cátedra; la guía la incluye como ampliación porque el razonamiento es idéntico." }
      ]},
      { h: "Método: localizar la falla en el eje", blocks: [
        { t: "ul", src: "guia", ref: "sección 16", items: [
          "Paso 1: mirar la hormona periférica (T3/T4, cortisol, estradiol). Si está baja, hay hipofunción.",
          "Paso 2: mirar la trófica (TSH, ACTH, FSH/LH). Periférica baja + trófica alta: primario (falla la glándula final).",
          "Periférica baja + trófica baja: si la hipotalámica también está baja, terciario (hipotálamo); si la hipotalámica es normal o alta, secundario (hipófisis).",
          "Periférica alta + trófica baja: hiperfunción primaria (patrón de Graves)."
        ]},
        { t: "table", src: "guia", ref: "sección 16", head: ["Tipo", "Hipotalámica", "Trófica", "Periférica"], rows: [
          ["Primario", "Alta", "Alta", "Baja"],
          ["Secundario", "Alta o normal", "Baja", "Baja"],
          ["Terciario", "Baja", "Baja", "Baja"]
        ]},
        { t: "dato", src: "guia", ref: "sección 16", text: "'Primario' no significa 'el primer órgano del eje': primario = falla el órgano final; terciario = falla el primero. El déficit de yodo da T4 baja con TSH alta: es causa primaria, aunque se la ponga como terciaria." },
        { t: "dato", src: "guia", ref: "sección 16", text: "La TRH no se dosa en sangre periférica en la práctica (es una hormona portal); es una licencia didáctica. En la pregunta modelo, la TRH baja decide el caso terciario." }
      ]},
      { h: "Hipófisis: hormonas, blancos y efectos", blocks: [
        { t: "p", src: "guia", ref: "sección 16", text: "La hipófisis se aloja en la silla turca y cuelga del hipotálamo por el tallo. La adenohipófisis (anterior, glandular) fabrica 7 hormonas. La neurohipófisis (posterior, nerviosa) sólo almacena y libera ADH y oxitocina, que fabrican las neuronas hipotalámicas." },
        { t: "table", src: "guia", ref: "sección 16", head: ["Hormona", "Blanco", "Efecto"], rows: [
          ["GH (somatotrofina)", "Hueso y músculo esquelético", "Niños: crecimiento. Adultos: mantiene masa ósea y muscular, cura heridas y degrada lípidos. Exceso: gigantismo (niño) o acromegalia (adulto)"],
          ["Prolactina", "Mama y cuerpo lúteo", "Produce leche para la próxima toma; mantiene el cuerpo lúteo apoyando a la LH; suprime la ovulación"],
          ["TSH (trópica)", "Tiroides", "Mantiene su crecimiento y estimula T3 y T4"],
          ["ACTH (trópica)", "Corteza suprarrenal", "Mantiene su crecimiento y estimula el cortisol"],
          ["FSH (gonadotrofina)", "Ovario o testículo", "Maduración de folículos y estrógenos; en el varón, conductos seminíferos y espermatogénesis"],
          ["LH (gonadotrofina)", "Ovario o testículo", "Forma y mantiene el cuerpo lúteo (progesterona y estrógenos); en el varón, testosterona"],
          ["MSH", "Melanocitos", "Melanina"],
          ["ADH (neurohipofisaria)", "Riñón", "Reabsorción de agua ante aumento de osmolaridad; concentra la orina"],
          ["Oxitocina (neurohipofisaria)", "Útero y mama", "Contracciones en el parto; eyección de leche ante la succión"]
        ]},
        { t: "dato", src: "guia", ref: "sección 16", text: "Prolactina vs. oxitocina: ambas se disparan con la succión. La prolactina fabrica la leche de la próxima toma; la oxitocina saca la de la toma actual. La prolactina alta frena la GnRH y con ella FSH y LH: por eso la lactancia prolongada cursa con amenorrea." },
        { t: "p", src: "guia", ref: "sección 16", text: "Gigantismo vs. acromegalia: con la placa epifisaria abierta, la GH alarga los huesos (gigantismo). Con la placa cerrada, el hueso crece sólo en grosor y se agrandan cara, manos, pies y partes blandas (acromegalia)." },
        { t: "p", src: "guia", ref: "sección 16", text: "Trópicas (TSH, ACTH) vs. gonadotrofinas (FSH, LH): la definición de las trópicas puesta en el casillero de las gonadotrofinas es el distractor típico: verdadera como frase, falsa como respuesta." }
      ]},
      { h: "Tiroides y paratiroides", blocks: [
        { t: "p", src: "guia", ref: "sección 16", text: "La tiroides está debajo del hueso hioides, junto al cartílago tiroides y sobre la tráquea. Tiene lóbulo derecho, izquierdo e istmo." },
        { t: "table", src: "guia", ref: "sección 16", head: ["Hormona", "Célula", "Función"], rows: [
          ["T4 (tiroxina) y T3 (triyodotironina)", "Folicular (contacta el coloide)", "Regulan el metabolismo basal, el crecimiento, otros sistemas y la temperatura corporal"],
          ["Calcitonina", "Parafolicular (célula C; no contacta el coloide)", "Baja la calcemia: frena osteoclastos y aumenta la captación ósea de Ca²⁺"],
          ["PTH (paratohormona)", "Principales de las paratiroides", "Sube la calcemia: resorción ósea, reabsorción renal de Ca²⁺, activación de calcitriol; en el intestino facilita la absorción de calcio, vitamina D y fosfato"]
        ]},
        { t: "p", src: "guia", ref: "sección 16", text: "Mnemotecnia de la guía: la glándula 'para' la tiroides (paratiroides) sube el calcio; la célula 'en' la tiroides (parafolicular) lo baja." },
        { t: "p", src: "guia", ref: "sección 16", text: "Histología: la unidad es el folículo, una capa de células foliculares sobre membrana basal que rodea un coloide. La T3 y T4 quedan guardadas en el coloide hasta liberarse. La célula parafolicular está entre folículos y no toca el coloide." },
        { t: "dato", src: "guia", ref: "sección 16", text: "Bocio ≠ Graves. El bocio es un signo (aumento de tamaño) y puede acompañar hiper o hipofunción. Graves es una causa de hipertiroidismo: exoftalmia, intolerancia al calor, ansiedad, T3/T4 altas y TSH baja." }
      ]},
      { h: "Suprarrenales", blocks: [
        { t: "table", src: "guia", ref: "sección 16", head: ["Parte", "Hormonas", "Clase y estímulo"], rows: [
          ["Corteza (zona glomerular)", "Aldosterona (mineralocorticoide)", "Esteroidea. Estímulo: angiotensina II y K⁺"],
          ["Corteza (zona fascicular)", "Cortisol (glucocorticoide; sube la glucemia)", "Esteroidea. Estímulo: ACTH"],
          ["Corteza (zona reticular)", "Andrógenos suprarrenales", "Esteroidea"],
          ["Médula", "Adrenalina y noradrenalina", "Aminoacídicas, con receptor de membrana y AMPc. Estímulo: fibra simpática preganglionar"]
        ]},
        { t: "dato", src: "guia", ref: "sección 16", text: "La médula no tiene hormona trófica. ACTH = adreno-CORTICO-tropina: apunta a la corteza, y su producto principal es el cortisol." }
      ]},
      { h: "Páncreas endócrino (islotes de Langerhans)", blocks: [
        { t: "ul", src: "guia", ref: "sección 16", items: [
          "Alfa: glucagón, sube la glucemia (en el ayuno saca glucosa del hígado).",
          "Beta: insulina, baja la glucemia (después de comer permite la entrada de glucosa a las células).",
          "D: somatostatina; no sube ni baja la glucemia; inhibe la secreción de insulina y de glucagón."
        ]},
        { t: "p", src: "guia", ref: "sección 16", text: "Insulina y glucagón son antagónicos. Dos hormonas suben la glucemia vía hígado: glucagón y cortisol. Si la pregunta pide una hormona pancreática, el cortisol queda afuera." }
      ]},
      { h: "Gónadas, pineal y timo", blocks: [
        { t: "table", src: "guia", ref: "sección 16", head: ["Glándula", "Hormona", "Función"], rows: [
          ["Ovario", "Estrógenos (folículo) y progesterona (cuerpo lúteo)", "Caracteres sexuales, ciclo, endometrio; retroalimentan sobre hipotálamo e hipófisis"],
          ["Testículo", "Testosterona (células intersticiales)", "Caracteres sexuales masculinos y espermatogénesis"],
          ["Pineal", "Melatonina", "Se produce sin luz; regula ritmos circadianos; eleva las defensas por acción en el timo; antioxidante"],
          ["Timo", "Timosina", "Maduración de linfocitos T; máximo en la infancia"]
        ]}
      ]},
      { h: "Sistema renina-angiotensina-aldosterona (cadena)", blocks: [
        { t: "p", src: "guia", ref: "sección 16", text: "Baja el volumen o la presión → las células yuxtaglomerulares liberan renina (la enzima) → la renina actúa sobre el angiotensinógeno hepático → angiotensina I → la ECA de los pulmones la convierte en angiotensina II → vasoconstricción y estímulo de la aldosterona → el riñón reabsorbe Na⁺ y agua y secreta K⁺ y H⁺ → sube el volumen y la presión." },
        { t: "dato", src: "guia", ref: "sección 16", text: "La renina es la enzima; lo que se convierte en angiotensina I es el angiotensinógeno. La conversión de I a II ocurre en los pulmones." }
      ]},
      { h: "Repaso y absolutos", blocks: [
        { t: "ul", src: "guia", ref: "sección 16", items: [
          "Inversiones frecuentes: calcitonina baja y PTH sube; beta = insulina = baja; alfa = glucagón = sube; D = somatostatina; corteza = cortisol y aldosterona; médula = adrenalina; primario = falla la glándula final.",
          "Absolutos ('exclusivamente', 'únicamente', 'el único'): suelen marcar distractores, pero no son regla automática.",
          "Erratas de la clase: 'Adenocorticotropa' debe leerse adrenocorticotropa; 'LSH' debe leerse LH.",
          "Trópica y trófica se usan como sinónimos; gonadotrofina = gonadotropina."
        ]}
      ]}
    ]
  },

  circulatorio: { mode: "append", conf: "alta",
    sections: [
      { h: "Ubicación y proyección", blocks: [
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Mediastino, entre los pulmones, limitado por el esternón y la columna, y por la primera costilla y el diafragma.",
          "Dos tercios de la masa a la izquierda de la línea media. El vértice (ventrículo izquierdo) apunta adelante, abajo e izquierda; la base, arriba y atrás, la forman sobre todo las aurículas.",
          "Implicancia: el latido se palpa a la izquierda; la RCP comprime sobre el esternón."
        ]}
      ]},
      { h: "Cámaras: detalle y accidentes internos", blocks: [
        { t: "table", src: "guia", ref: "sección 13", head: ["Estructura", "Dato"], rows: [
          ["Aurícula derecha", "Recibe VCS, VCI y seno coronario. Fosa oval en el tabique (resto del foramen oval)"],
          ["Ventrículo derecho", "Recibe por la tricúspide y expulsa por la pulmonar"],
          ["Aurícula izquierda", "Recibe las cuatro venas pulmonares (dos por pulmón)"],
          ["Ventrículo izquierdo", "Recibe por la mitral y expulsa por la aórtica. Pared más gruesa"],
          ["Orejuela", "Extensión en forma de bolsa de cada aurícula; aumenta su capacidad"],
          ["Músculos pectíneos", "Pared anterior de la aurícula derecha y orejuelas; rebordes paralelos"],
          ["Trabéculas carnosas", "Pared interna de los ventrículos; algunas conducen el impulso"],
          ["Surco coronario", "Límite externo entre aurículas y ventrículos; aloja vasos coronarios"],
          ["Surcos interventriculares", "Límite externo entre ventrículos; aloja vasos coronarios"]
        ]},
        { t: "dato", src: "guia", ref: "sección 13", text: "Espesor del ventrículo izquierdo: el rótulo de la figura dice '2 a 3 veces' el derecho; el texto dice 'del orden de tres veces'. Ambas dicen lo mismo. La razón: el circuito sistémico tiene más resistencia que el pulmonar, así que el izquierdo genera más presión." }
      ]},
      { h: "Pericardio y pared", blocks: [
        { t: "table", src: "guia", ref: "sección 13", head: ["Capa", "Constitución", "Función"], rows: [
          ["Pericardio fibroso", "Conectivo irregular denso, poco elástico", "Fija el corazón al diafragma y a los grandes vasos; impide que se sobredistienda"],
          ["Seroso parietal", "Mesotelio + conectivo, adherido a la cara interna del fibroso", "Reviste la cavidad"],
          ["Seroso visceral = epicardio", "Mesotelio + conectivo", "Capa más externa de la pared cardíaca"],
          ["Cavidad pericárdica", "Espacio virtual con líquido pericárdico", "Reduce la fricción en cada latido"],
          ["Miocardio", "Tejido muscular cardíaco", "Capa que bombea; la más gruesa"],
          ["Endocardio", "Endotelio sobre conectivo delgado; continuo con el endotelio de los grandes vasos", "Recubre las válvulas"]
        ]},
        { t: "dato", src: "guia", ref: "sección 13", text: "La poca elasticidad del fibroso explica el taponamiento cardíaco (el líquido comprime las cámaras) y la restricción de volumen ante una sobrecarga aguda." }
      ]},
      { h: "Válvulas: sostén y función", blocks: [
        { t: "table", src: "guia", ref: "sección 13", head: ["Tipo", "Válvulas", "Sostén y tejido"], rows: [
          ["Auriculoventriculares", "Tricúspide (3 valvas, derecha) y mitral (2 valvas, izquierda)", "Cuerdas tendinosas y músculos papilares. Impiden el reflujo a la aurícula en la sístole"],
          ["Sigmoideas", "Pulmonar y aórtica (3 valvas cada una)", "Sin cuerdas: al relajarse el ventrículo, la sangre que refluye llena las valvas y las cierra. Impiden el reflujo al ventrículo en la diástole"]
        ]},
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Las válvulas son avasculares: se nutren por difusión desde la sangre de la cámara.",
          "Si se rompe una cuerda, la valva prolapsa y aparece insuficiencia.",
          "El esqueleto fibroso sostiene las válvulas, da inserción al miocardio y aísla eléctricamente aurículas de ventrículos."
        ]}
      ]},
      { h: "Grandes vasos y circulación", blocks: [
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Del arco de la aorta nacen tres ramas: tronco braquiocefálico, carótida común izquierda y subclavia izquierda.",
          "Circulación menor: AD → tricúspide → VD → pulmonar → tronco pulmonar → arterias pulmonares → capilares alveolares → 4 venas pulmonares → AI.",
          "Circulación mayor: AI → mitral → VI → aórtica → aorta → arterias → arteriolas → capilares → vénulas → venas → VCS, VCI y seno coronario → AD.",
          "Los dos circuitos están en serie: el mismo volumen pasa por ambos en promedio."
        ]},
        { t: "dato", src: "guia", ref: "sección 13", text: "'Arteria' no significa sangre oxigenada: arteria es el vaso que sale del corazón, vena el que llega. Las arterias pulmonares llevan sangre desoxigenada y las venas pulmonares, oxigenada." },
        { t: "p", src: "guia", ref: "sección 13", text: "Circulación fetal: el foramen oval comunica aurícula derecha con izquierda; el conducto arterioso lleva sangre del tronco pulmonar a la aorta. Restos adultos: fosa oval y ligamento arterioso. Ojo: el vestigio entre aorta y pulmonar es el ligamento arterioso." }
      ]},
      { h: "Circulación coronaria", blocks: [
        { t: "table", src: "guia", ref: "sección 13", head: ["Arteria", "Ramas", "Territorio"], rows: [
          ["Coronaria izquierda", "Interventricular anterior (descendente anterior) y circunfleja", "VI, tabique interventricular y AI"],
          ["Coronaria derecha", "Marginal y interventricular posterior", "AD, VD, cara diafragmática y, en la mayoría, los nódulos SA y AV"]
        ]},
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Ambas son las primeras ramas de la aorta, apenas por encima de la válvula aórtica.",
          "Retorno venoso: venas cardíacas → seno coronario (surco coronario posterior) → aurícula derecha.",
          "Perfusión en diástole: en la sístole el músculo comprime las ramas intramurales. La taquicardia acorta sobre todo la diástole (mecanismo de la angina de esfuerzo).",
          "Metabolismo aeróbico: ácidos grasos ≈ 60%, glucosa ≈ 35%. La fibra cardíaca tiene más mitocondrias que los otros tipos musculares."
        ]}
      ]},
      { h: "El miocardio como tejido", blocks: [
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Fibras ramificadas, con uno o dos núcleos centrales.",
          "Discos intercalares: desmosomas (unión mecánica) y uniones gap (acoplamiento eléctrico). Por eso el miocardio funciona como sincitio funcional.",
          "No se repara: no tiene células madre y las fibras maduras no se dividen. Un parche tiene que acoplarse eléctricamente al miocardio o queda como foco arritmogénico."
        ]}
      ]},
      { h: "Sistema de conducción: fisiología", blocks: [
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Marcapasos natural (SA): unos 100 disparos por minuto. Frecuencia de reposo más baja porque el vago frena el nodo SA.",
          "En el trasplante cardíaco, sin control vagal, el corazón queda cerca de 100 latidos por minuto.",
          "La meseta del potencial de la fibra contráctil la sostienen canales lentos de Ca²⁺ dependientes de voltaje. Por eso el período refractario es muy largo y el corazón no puede tetanizar.",
          "La repolarización auricular no se ve en el ECG: coincide con el QRS."
        ]}
      ]},
      { h: "Ciclo cardíaco y ruidos", blocks: [
        { t: "p", src: "guia", ref: "sección 13", text: "A 75 latidos por minuto el ciclo dura 0,8 s: sístole auricular 0,1 s, sístole ventricular 0,3 s, relajación 0,4 s." },
        { t: "table", src: "guia", ref: "sección 13", head: ["Fase", "Válvulas", "Qué pasa"], rows: [
          ["1. Sístole auricular", "AV abiertas; sigmoideas cerradas", "Completa el llenado ventricular"],
          ["2. Contracción isovolumétrica", "Las cuatro cerradas", "Sube la presión; el volumen no cambia"],
          ["3. Eyección ventricular", "Sigmoideas abiertas", "Sale el volumen sistólico hacia las arterias"],
          ["4. Relajación isovolumétrica", "Las cuatro cerradas", "Cae la presión; el volumen no cambia"],
          ["5. Llenado ventricular pasivo", "AV abiertas", "Entra el grueso del llenado"]
        ]},
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Primer ruido ('lub') = cierre de las AV, al empezar la sístole ventricular. Segundo ruido ('dup') = cierre de las sigmoideas, al terminar la sístole.",
          "Los ruidos son cierres, no aperturas: la apertura de una válvula sana es silenciosa. Los soplos indican alteración de válvulas, no del miocardio ni de los nódulos."
        ]}
      ]},
      { h: "Gasto cardíaco y sus determinantes", blocks: [
        { t: "p", src: "guia", ref: "sección 13", text: "GC = VS × FC. Ejemplo: ≈ 70 mL × 75 lpm ≈ 5,25 L/min. VS = volumen de fin de diástole − volumen de fin de sístole. Reserva cardíaca = GC máximo − GC de reposo." },
        { t: "table", src: "guia", ref: "sección 13", head: ["Determinante", "Qué es", "Efecto sobre el VS"], rows: [
          ["Precarga", "Estiramiento de las fibras al final de la diástole (retorno venoso)", "Aumenta (Frank-Starling)"],
          ["Contractilidad", "Fuerza de contracción a una precarga dada", "Aumenta"],
          ["Poscarga", "Presión que hay que vencer para abrir las sigmoideas", "Disminuye"]
        ]},
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Frank-Starling: a más llenado, más estiramiento y más fuerza, dentro de un límite. Iguala el gasto de ambos ventrículos.",
          "Combinación que maximiza el VS: ↑ precarga, ↓ poscarga, ↑ contractilidad. La hipertensión sube la poscarga y baja el VS y el GC.",
          "Control nervioso: centro cardiovascular en el bulbo. El simpático acelera; el vago frena. La adrenalina y las hormonas tiroideas aceleran; el aumento de K⁺ plasmático frena."
        ]},
        { t: "dato", src: "guia", ref: "sección 13", text: "Atleta entrenado: mayor VS y bradicardia de reposo, sin mayor GC de reposo (con el mismo producto VS × FC, un VS más grande implica FC más baja)." }
      ]},
      { h: "Histología de vasos y capilares", blocks: [
        { t: "p", src: "guia", ref: "sección 13", text: "Salvo los capilares, los vasos tienen tres túnicas: íntima (endotelio, lámina basal, capa subendotelial), media (músculo liso y fibras elásticas) y adventicia (conectivo, vasa vasorum y nervios en los vasos grandes). Cambia el espesor relativo de cada una." },
        { t: "table", src: "guia", ref: "sección 13", head: ["Vaso", "Característica", "Función"], rows: [
          ["Arteria elástica (aorta, tronco pulmonar, carótidas comunes, subclavias)", "Media con láminas elásticas fenestradas", "Conducción; se dilata en sístole y retrocede en diástole"],
          ["Arteria muscular (braquial, radial, femoral)", "Media de músculo liso", "Distribución"],
          ["Arteriola", "Media de una a pocas capas de músculo liso", "Principal resistencia; regula presión y flujo de cada órgano"],
          ["Capilar", "Sólo endotelio y lámina basal; 5–10 µm", "Intercambio; los glóbulos rojos pasan casi en fila"],
          ["Vénula poscapilar", "Endotelio con uniones laxas y pericitos", "Salida de leucocitos y líquido en la inflamación"],
          ["Vena", "Media delgada, adventicia gruesa, luz amplia", "Reservorio: 60–65% del volumen sanguíneo"]
        ]},
        { t: "table", src: "guia", ref: "sección 13", head: ["Capilar", "Estructura", "Dónde"], rows: [
          ["Continuo", "Endotelio sin poros, uniones estrechas, lámina basal continua", "Músculo, pulmón, piel, SNC (base de la barrera hematoencefálica)"],
          ["Fenestrado", "Poros de ~70–100 nm en el endotelio; lámina basal continua", "Glomérulo, intestino delgado, plexos coroideos, glándulas endócrinas"],
          ["Sinusoide", "Luz amplia e irregular, grandes aberturas; lámina basal ausente o discontinua", "Hígado, bazo, médula ósea, adenohipófisis, suprarrenales"]
        ]},
        { t: "dato", src: "guia", ref: "sección 13", text: "Glomérulo renal = fenestrado (filtra plasma, retiene proteínas). Hígado = sinusoide (deja pasar proteínas y hasta células)." }
      ]},
      { h: "Válvulas venosas", blocks: [
        { t: "p", src: "guia", ref: "sección 13", text: "Son repliegues de la íntima, abundantes en las venas de los miembros inferiores: la presión venosa es baja y la sangre sube contra la gravedad. El empuje lo dan la bomba muscular y la respiratoria; las válvulas lo hacen unidireccional. Las arterias no las necesitan (salvo la sigmoidea de salida), porque la presión de eyección es alta y siempre anterógrada." }
      ]},
      { h: "Consignas típicas", blocks: [
        { t: "ul", src: "guia", ref: "sección 13", items: [
          "Válvula protésica mitral: entre aurícula izquierda y ventrículo izquierdo, dos valvas, impide el reflujo del ventrículo a la aurícula en la sístole, sostenida por cuerdas tendinosas y músculos papilares.",
          "Marcapasos: enumerar el sistema de conducción en orden (SA → AV → His → ramas → Purkinje) y ubicar los nodos.",
          "Preguntas de repaso: la aorta sale del ventrículo izquierdo; el nodo AV está entre el SA y el His; la sangre de la pulmonar vuelve a la aurícula izquierda; la mitral impide el reflujo del VI a la AI; la fosa oval es vestigio de la comunicación entre aurículas."
        ]},
        { t: "p", src: "guia", ref: "sección 13", text: "Bioingeniería de la clase: válvulas mecánicas y biológicas, stents y endoprótesis aórticas, cateterismo y marcapasos (reemplaza al nodo SA cuando falla)." }
      ]}
    ]
  },

  nervioso: { mode: "append", conf: "media",
    sections: [
      { h: "Embriología (tabla de vesículas)", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Vesícula", "Deriva en"], rows: [
          ["Prosencéfalo → telencéfalo", "Hemisferios, corteza, ganglios basales, hipocampo, amígdala, bulbo olfatorio"],
          ["Prosencéfalo → diencéfalo", "Tálamo e hipotálamo"],
          ["Mesencéfalo", "Mesencéfalo"],
          ["Rombencéfalo → metencéfalo", "Protuberancia y cerebelo"],
          ["Rombencéfalo → mielencéfalo", "Bulbo raquídeo"]
        ]},
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "Secuencia: gastrulación, inducción neural (la notocorda induce la placa neural), surco neural, tubo neural. El tubo neural da el SNC; la cresta neural da el SNP (ganglios raquídeos y autónomos, células de Schwann, satélite, melanocitos y médula suprarrenal). Las células de Schwann vienen de la cresta, no del tubo." }
      ]},
      { h: "Divisiones", blocks: [
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "SNC: encéfalo y médula espinal.",
          "SNP: nervios craneales y espinales, ganglios y plexos. Somático (movimientos voluntarios) y autónomo (SNA).",
          "SNA: simpático (toracolumbar), parasimpático (craneal y sacro) y entérico (plexos mientérico y submucoso; ampliación)."
        ]},
        { t: "dato", src: "guia", ref: "sección 17 (resumen)", text: "El SNA es una rama del SNP, no una tercera división. La médula espinal es SNC, no SNP." }
      ]},
      { h: "Neurona: partes y tipos", blocks: [
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "Cuerpo celular (soma o pericarion) y neuritas (dendritas y axón). El soma tiene nucléolo visible y corpúsculos de Nissl." },
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Dendrita", "Axón"], rows: [
          ["Número: muchas", "Uno"],
          ["Diámetro variable, se afina", "Diámetro constante"],
          ["Ramificación en ángulos agudos", "Ramificación en ángulo recto"],
          ["Con corpúsculos de Nissl", "Sin corpúsculos de Nissl"],
          ["Con espinas", "Sin espinas"],
          ["Recibe la señal", "Conduce la señal"],
          ["Extremo sin nombre especial", "Inicio: cono axónico. Final: telodendrón"]
        ]},
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "Morfológica: multipolar, bipolar, seudounipolar.",
          "Funcional: sensitiva (aferente), motora (eferente), interneurona."
        ]},
        { t: "dato", src: "guia", ref: "sección 17 (resumen)", text: "Cono axónico = inicio del axón; telodendrón = su final. Lo que define al axón son el ángulo recto de ramificación y el diámetro constante." }
      ]},
      { h: "Neuroglía", blocks: [
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "Protección, nutrición y sostén. No conducen el impulso." },
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Célula", "Dónde", "Función"], rows: [
          ["Astrocito", "SNC", "Cicatriz; barrera hematoencefálica"],
          ["Oligodendrocito", "SNC", "Mieliniza varios axones"],
          ["Microglía", "SNC", "Fagocitosis y respuesta a lesión; mesodérmica (de origen medular óseo)"],
          ["Ependimaria", "Ventrículos", "Reviste los ventrículos; interfaz con el LCR"],
          ["Célula de Schwann", "SNP", "Mieliniza un solo axón"],
          ["Célula satélite", "Ganglios del SNP", "Sostén y nutrición de los somas (ampliación)"]
        ]},
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "Disparadores de examen: 'cicatriz' o 'barrera hematoencefálica' → astrocito; 'fagocitar' o respuesta a lesión → microglía; 'mielina' → oligodendrocito (SNC) o célula de Schwann (SNP).",
          "Toda la glía es ectodérmica salvo la microglía (mesodérmica).",
          "Para regenerar un nervio periférico se siembran células de Schwann, no oligodendrocitos."
        ]}
      ]},
      { h: "Mielina y conducción", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Fibra mielínica", "Fibra amielínica"], rows: [
          ["Una célula de Schwann por axón", "Una célula envuelve muchos axones sin formar vaina"],
          ["Vaina de mielina con neuroqueratina", "Sin vaina"],
          ["Incisura de Schmidt-Lanterman", "Sin incisuras"],
          ["Se distingue al microscopio óptico", "Los axones no se ven bien al óptico"]
        ]},
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "Fibra nerviosa = axón + vaina de mielina.",
          "Nodo de Ranvier: interrupción de la vaina; permite la conducción saltatoria.",
          "Regla: a mayor mielinización y calibre, mayor velocidad."
        ]}
      ]},
      { h: "Sinapsis y potencial de acción (ampliación)", blocks: [
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "La sinapsis convierte la señal eléctrica en química con la liberación de neurotransmisor.",
          "Fases del potencial: reposo (≈ −70 mV, bomba Na⁺/K⁺), umbral, entrada de Na⁺ (despolarización), salida de K⁺ (repolarización), hiperpolarización breve.",
          "Todo o nada: la intensidad se codifica en frecuencia. Propagación unidireccional por el período refractario."
        ]}
      ]},
      { h: "Anatomía del SNC", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Estructura", "Función", "Ubicación"], rows: [
          ["Corteza cerebral", "Funciones superiores", "Telencéfalo"],
          ["Sistema límbico", "Emociones, motivación, memoria", "Telencéfalo y diencéfalo"],
          ["Ganglios basales", "Movimiento voluntario y coordinación", "Telencéfalo"],
          ["Tálamo", "Relevo sensitivo a la corteza", "Diencéfalo"],
          ["Hipotálamo", "Homeostasis; control de la hipófisis", "Diencéfalo"],
          ["Cerebelo", "Coordinación, equilibrio, postura", "Metencéfalo (fuera del tronco)"],
          ["Tronco encefálico", "Respiración, frecuencia cardíaca, presión", "Mesencéfalo, protuberancia y bulbo"],
          ["Médula espinal", "Conducción sensitiva y motora", "SNC"]
        ]},
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "Tálamo e hipotálamo son diencéfalo; ganglios basales son telencéfalo.",
          "El cerebelo no forma parte del tronco.",
          "Sustancia gris: central en la médula, externa en el cerebro. En la coloración de Klüver-Barrera la sustancia blanca se ve azul por la mielina."
        ]}
      ]},
      { h: "Lóbulos corticales", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Lóbulo", "Funciones"], rows: [
          ["Frontal", "Juicio, inhibición, planificación, atención; área de Broca (forma palabras)"],
          ["Parietal", "Somatosensorial, percepción espacial, cálculo, lectura y escritura"],
          ["Temporal", "Audición; área de Wernicke (comprende); memoria; secuenciación"],
          ["Occipital", "Interpretación visual"]
        ]},
        { t: "dato", src: "guia", ref: "sección 17 (resumen)", text: "Broca forma palabras (frontal); Wernicke comprende (temporal). Ambas en el hemisferio izquierdo en cerca del 95% de las personas. El cerebelo es distractor: no es lóbulo cortical." }
      ]},
      { h: "Meninges y LCR", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Meninge", "Característica"], rows: [
          ["Duramadre", "La más externa"],
          ["Aracnoides", "Espacio subaracnoideo con LCR"],
          ["Piamadre", "Adherida al tejido y vascularizada"]
        ]},
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "El LCR lo producen los plexos coroideos y se reabsorbe en las vellosidades aracnoideas. Funciones: amortiguación, homeostasis química y transporte." }
      ]},
      { h: "Vías y arco reflejo", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Vía", "Sentido", "Neuronas en cadena", "Estación obligada"], rows: [
          ["Sensitiva", "Entrada a la médula → cerebro", "3", "Tálamo (salvo olfato)"],
          ["Motora", "Salida de la corteza → músculo", "2", "—"]
        ]},
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "Arco reflejo: receptor → neurona sensitiva → interneurona → motoneurona → efector. Se resuelve en la médula, sin pasar por la corteza." }
      ]},
      { h: "SNA: efectos órgano por órgano", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Órgano", "Simpático", "Parasimpático"], rows: [
          ["Pupila", "Dilata", "Contrae"],
          ["Salivación", "Espesa (poca, viscosa)", "Abundante y fluida"],
          ["Bronquios", "Dilata", "Constriñe"],
          ["Ritmo cardíaco", "Acelera", "Enlentece"],
          ["Digestión", "Inhibe", "Estimula"],
          ["Hígado", "Glucogenólisis", "—"],
          ["Vesícula", "Relaja", "Contrae"],
          ["Médula suprarrenal", "Libera adrenalina", "—"],
          ["Vejiga", "Relaja el detrusor", "Contrae el detrusor"],
          ["Recto", "Contrae", "Relaja"]
        ]},
        { t: "dato", src: "guia", ref: "sección 17 (resumen)", text: "Vejiga y recto van 'cruzados' respecto de la intuición: el simpático relaja la vejiga y contrae el recto." }
      ]},
      { h: "Ondas cerebrales", blocks: [
        { t: "table", src: "guia", ref: "sección 17 (resumen)", head: ["Onda", "Estado"], rows: [
          ["Gamma", "Concentración"],
          ["Beta", "Vigilia atenta"],
          ["Alfa", "Relajación"],
          ["Theta", "Duermevela"],
          ["Delta", "Sueño profundo"]
        ]},
        { t: "p", src: "guia", ref: "sección 17 (resumen)", text: "Son la base del filtrado de un EEG o de un monitor de anestesia." }
      ]},
      { h: "Trampas de la sección", blocks: [
        { t: "ul", src: "guia", ref: "sección 17 (resumen)", items: [
          "Cono axónico vs. telodendrón; ángulo y diámetro del axón.",
          "Disparadores de glía; microglía como única excepción ectodérmica (es mesodérmica).",
          "Broca vs. Wernicke; cerebelo fuera del tronco y de los lóbulos.",
          "SNA no es categoría paralela al SNP; la médula es SNC."
        ]}
      ]}
    ]
  }
};
