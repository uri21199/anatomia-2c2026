// Fuentes y contenido por tema. Cada bloque lleva su origen (src) y una referencia (ref).
// Para agregar un bloque: { t: "p" | "ul" | "table" | "dato" | "conflict", src: "...", ref: "...", ... }

const SOURCES = {
  pres:     { label: "Cátedra · Presentación Sistema Nervioso (PDF)", short: "Presentación", group: "Cátedra" },
  modelo:   { label: "Cátedra · Preguntas modelo (T0A) y cuestionario endocrino (T7C)", short: "Modelo", group: "Cátedra" },
  endo:     { label: "Cátedra · Sistema endocrino 2024 (PDF)", short: "Endo 2024", group: "Cátedra" },
  snpdf:    { label: "Cátedra · Sistema nervioso (PDF)", short: "SN PDF", group: "Cátedra" },
  apunte:   { label: "Apuntes de compañera (PDF)", short: "Apunte", group: "Compañera" },
  guia:     { label: "Guía guiasdeingenieria (sitio no oficial)", short: "Guía", group: "Web" },
  video:    { label: "Videos sisbiofiuba (no verificados)", short: "Video", group: "Web" },
  paper:    { label: "Papers de la cátedra", short: "Paper", group: "Papers" },
  generado: { label: "Generado por mí (no oficial)", short: "Generado", group: "Generado" }
};

const TOPICS = [
  {
    id: "endocrino", title: "Sistema endocrino", conf: "alta",
    intro: "Hormonas, clasificación, eje hipotálamo-hipófisis-tiroides y glándulas. Es el tema con más preguntas en el parcial (11 de 33 en la guía).",
    sections: [
      { h: "Función y clasificación", blocks: [
        { t: "p", src: "endo", ref: "pdf p.1-2", text: "Función principal: controlar las funciones corporales mediante la liberación de mensajeros químicos (hormonas). Actúan sólo sobre células que tienen el receptor específico: son células diana." },
        { t: "table", src: "apunte", ref: "pág. 2", head: ["", "Liposolubles", "Hidrosolubles"], rows: [
          ["Ejemplos", "Esteroideas (estrógeno, cortisol, testosterona, progesterona), tiroideas (T3 y T4)", "Aminoacídicas (adrenalina, melatonina), peptídicas y proteicas (insulina, ADH, oxitocina, GH), eicosanoides"],
          ["Vía de administración", "Oral (atraviesan la pared del estómago)", "Parenteral, intravenosa (la digestión las degradaría)"],
          ["Receptor", "Intracelular (citosol o núcleo)", "De membrana"],
          ["Mecanismo", "El complejo hormona-receptor se une al ADN y activa la transcripción", "Primer mensajero en la membrana; activa la adenilato ciclasa; segundo mensajero (AMPc)"]
        ]},
        { t: "dato", src: "modelo", ref: "T7C preg. 5", text: "La insulina es hidrosoluble, por eso su vía de administración clásica en el cuestionario es intravenosa. Ojo con la pregunta: la vía real en la práctica es subcutánea; el cuestionario la plantea como intravenosa." }
      ]},
      { h: "Adenohipófisis y neurohipófisis", blocks: [
        { t: "table", src: "endo", ref: "pdf p.4-6", head: ["Hormona", "Efecto principal"], rows: [
          ["GH (somatotrofina)", "Crecimiento en niños; en adultos mantiene masa muscular y ósea. Exceso: gigantismo (niños) o acromegalia (adultos)"],
          ["Prolactina", "Producción de leche y mantenimiento del cuerpo lúteo; suprime la ovulación"],
          ["TSH", "Trófica: estimula a la tiroides a secretar T3 y T4"],
          ["ACTH (adrenocorticotropa)", "Trófica: estimula la corteza suprarrenal (cortisol)"],
          ["FSH", "Ovario: maduración de folículos. Testículo: espermatogénesis"],
          ["LH", "Mujer: cuerpo lúteo (progesterona y estrógenos). Varón: testosterona"],
          ["MSH", "Melanocitos de la piel: producción de melanina"]
        ]},
        { t: "p", src: "apunte", ref: "pág. 3", text: "Gonadotrofinas = FSH y LH, porque estimulan el crecimiento y mantenimiento de las gónadas. TSH y ACTH son trópicas: estimulan a otras glándulas." },
        { t: "p", src: "endo", ref: "pdf p.6", text: "Neurohipófisis: ADH (se libera ante cambios de osmolaridad; el riñón reabsorbe agua) y oxitocina (contracciones uterinas, eyección de leche)." },
        { t: "p", src: "pres", ref: "dato de la cátedra", text: "Cuidado con las erratas de la clase: 'Adenocorticotropa' debe decir adrenocorticotropa y 'LSH' debe decir LH." }
      ]},
      { h: "Tiroides, paratiroides y suprarrenales", blocks: [
        { t: "p", src: "apunte", ref: "pág. 3-4", text: "Tiroides: T4 y T3 (liposolubles) por células foliculares, regulan el metabolismo basal. Calcitonina por células parafoliculares: baja el calcio." },
        { t: "p", src: "apunte", ref: "pág. 4", text: "Hipertiroidismo: agrandamiento, exoftalmia, intolerancia al calor, ansiedad, bajo peso. Hipotiroidismo primario: la tiroides no produce suficiente hormona. Secundario: la tiroides no recibe estímulo de la hipófisis." },
        { t: "p", src: "apunte", ref: "pág. 4", text: "Paratiroides: PTH. Sube el calcio (aumenta la reabsorción en riñón y la resorción ósea, y la absorción intestinal con vitamina D)." },
        { t: "ul", src: "apunte", ref: "pág. 4", items: [
          "Corteza: aldosterona (volemia, presión y electrolitos) y cortisol (hiperglucemiante, antiinflamatorio, inmunosupresor).",
          "Médula: adrenalina y noradrenalina (respuesta de lucha o huida, sistema simpático)."
        ]}
      ]},
      { h: "Páncreas endócrino", blocks: [
        { t: "ul", src: "apunte", ref: "pág. 4", items: [
          "Células alfa: glucagón (sube la glucemia).",
          "Células beta: insulina (baja la glucemia).",
          "Células delta: somatostatina (inhibe la secreción de insulina y glucagón)."
        ]},
        { t: "p", src: "endo", ref: "pdf p.9", text: "Después de comer sube la glucosa, sube la insulina y baja la glucosa. En ayuno baja la glucosa, sube el glucagón, y el hígado libera glucosa a la sangre. Efectos antagónicos." }
      ]},
      { h: "Sistema renina-angiotensina-aldosterona", blocks: [
        { t: "conflict",
          a: { src: "apunte", ref: "pág. 5", text: "La renina es secretada por las células yuxtaglomerulares en el túbulo contorneado distal." },
          b: { src: "guia", ref: "sección 15", text: "Aparato yuxtaglomerular: mácula densa (sensa NaCl, en el túbulo distal) y células yuxtaglomerulares (secretan renina)." },
          note: "La cátedra (PDF endo 2024) y los apuntes ubican la renina en el túbulo distal. Las células yuxtaglomerulares están en la pared de la arteriola aferente; la mácula densa es la del túbulo distal. Confirmar con la cátedra qué se evalúa." },
        { t: "p", src: "apunte", ref: "pág. 5", text: "Renina → angiotensina I (circulación) → angiotensina II (pulmones, por la ECA). Angiotensina II: vasoconstricción, sed, ADH y aldosterona." }
      ]},
      { h: "Eje hipotiroideo: cómo ubicar la falla", blocks: [
        { t: "p", src: "guia", ref: "sección 2", text: "Método en dos pasos. 1) Mirar la hormona periférica (T3/T4): si está baja hay hipofunción. 2) Comparar con la trófica (TSH) y la hipotalámica (TRH)." },
        { t: "ul", src: "guia", ref: "sección 2", items: [
          "Periférica baja y trófica alta (direcciones opuestas): primario, falla la glándula.",
          "Periférica y trófica bajas: central. Si además la hipotalámica está baja: terciario.",
          "Periférica baja con hipotalámica normal o alta: secundario."
        ]},
        { t: "dato", src: "modelo", ref: "T0A preg. 1 y 5", text: "Trampa del modelo: 'primario' se cuenta desde la glándula final, no desde el primer órgano del eje. Un déficit de yodo es primario, aunque se lo ponga como 'terciario'." }
      ]},
      { h: "Otras glándulas", blocks: [
        { t: "p", src: "endo", ref: "pdf p.9", text: "Pineal: produce melatonina en ausencia de luz; regula ciclos de vigilia-sueño (ritmos circadianos). Antioxidante." },
        { t: "p", src: "guia", ref: "sección 16", text: "Timo: timosina, que eleva las defensas (dato de resumen; verificar en clase)." }
      ]}
    ]
  },

  {
    id: "circulatorio", title: "Corazón y circulación", conf: "alta",
    intro: "Anatomía del corazón, válvulas, circulación, sistema de conducción y ECG. Fuentes principales: apuntes y guía sección 13.",
    sections: [
      { h: "Ubicación y cámaras", blocks: [
        { t: "p", src: "apunte", ref: "pág. 5", text: "El corazón está en el mediastino, entre los pulmones, del esternón a la columna y de la primera costilla al diafragma. Es el principal órgano propulsor de la sangre." },
        { t: "table", src: "apunte", ref: "pág. 5-6", head: ["Cámara", "Recibe / envía", "Válvula"], rows: [
          ["Aurícula derecha", "Recibe sangre venosa de VCS, VCI y seno coronario", "Tricúspide (hacia el VD)"],
          ["Ventrículo derecho", "Envía sangre al tronco pulmonar (circulación menor)", "Pulmonar (sigmoidea)"],
          ["Aurícula izquierda", "Recibe sangre oxigenada de las 4 venas pulmonares", "Mitral (hacia el VI)"],
          ["Ventrículo izquierdo", "Envía sangre a la aorta (circulación mayor)", "Aórtica (sigmoidea)"]
        ]},
        { t: "dato", src: "apunte", ref: "pág. 7", text: "'Arteria' no significa sangre oxigenada: arteria es el vaso que sale del corazón, vena el que llega. Las arterias pulmonares llevan sangre desoxigenada y las venas pulmonares, oxigenada." }
      ]},
      { h: "Válvulas", blocks: [
        { t: "table", src: "apunte", ref: "pág. 6-7", head: ["Válvula", "Tipo y valvas", "Qué impide", "Sostén"], rows: [
          ["Tricúspide", "Auriculoventricular, 3 valvas", "Reflujo a la aurícula en la sístole", "Cuerdas tendinosas y músculos papilares"],
          ["Mitral (bicúspide)", "Auriculoventricular, 2 valvas", "Reflujo a la aurícula en la sístole", "Cuerdas tendinosas y músculos papilares"],
          ["Pulmonar", "Sigmoidea, 3 valvas", "Reflujo al ventrículo en la diástole", "Ninguno: la sangre que refluye llena las valvas y las cierra"],
          ["Aórtica", "Sigmoidea, 3 valvas", "Reflujo al ventrículo en la diástole", "Ninguno"]
        ]}
      ]},
      { h: "Pericardio y pared cardíaca", blocks: [
        { t: "ul", src: "apunte", ref: "pág. 6", items: [
          "Pericardio fibroso: poco elástico; fija el corazón al diafragma y a los grandes vasos.",
          "Seroso parietal: reviste la cavidad. Seroso visceral: es el epicardio.",
          "Cavidad pericárdica: líquido que reduce la fricción."
        ]},
        { t: "ul", src: "apunte", ref: "pág. 6", items: [
          "Epicardio: hoja serosa visceral.",
          "Miocardio: tejido muscular que bombea.",
          "Endocardio: endotelio sobre tejido conectivo; recubre las válvulas."
        ]}
      ]},
      { h: "Circulación menor y mayor", blocks: [
        { t: "p", src: "apunte", ref: "pág. 7", text: "Circulación menor (pulmonar): AD → tricúspide → VD → tronco pulmonar → arterias pulmonares → capilares alveolares (hematosis) → 4 venas pulmonares → AI." },
        { t: "p", src: "apunte", ref: "pág. 7", text: "Circulación mayor (sistémica): AI → mitral → VI → aorta → arterias → arteriolas → capilares (intercambio) → vénulas → venas → VCS y VCI + seno coronario → AD." }
      ]},
      { h: "Sistema de conducción y ECG", blocks: [
        { t: "table", src: "apunte", ref: "pág. 7-8", head: ["Estructura", "Función"], rows: [
          ["Nódulo sinoauricular (SA)", "Marcapasos natural, en la pared de la AD junto a la VCS. Unos 100 disparos por minuto"],
          ["Nódulo AV", "Introduce un retraso para que las aurículas terminen de vaciarse"],
          ["Haz de His", "Única vía posible entre aurículas y ventrículos; atraviesa el esqueleto fibroso"],
          ["Ramas derecha e izquierda", "A ambos lados del tabique interventricular, bajan hacia el ápex"],
          ["Fibras de Purkinje", "Conducen el impulso a las fibras contráctiles del miocardio ventricular"]
        ]},
        { t: "table", src: "apunte", ref: "pág. 8", head: ["Trazado", "Fenómeno eléctrico"], rows: [
          ["Onda P", "Despolarización auricular"],
          ["Intervalo P-Q", "Conducción por aurículas más retraso en el nódulo AV"],
          ["Complejo QRS", "Despolarización ventricular"],
          ["Segmento ST", "Ventrículos despolarizados (meseta del potencial de acción)"],
          ["Onda T", "Repolarización ventricular"]
        ]},
        { t: "p", src: "guia", ref: "sección 13", text: "Ruidos: B1 = cierre de las AV; B2 = cierre de las sigmoideas. Gasto cardíaco = volumen sistólico × frecuencia cardíaca (≈ 70 mL × 75 lpm ≈ 5,25 L/min)." }
      ]},
      { h: "Circulación fetal", blocks: [
        { t: "p", src: "guia", ref: "sección 13", text: "Foramen oval (comunicación interauricular; su resto es la fosa oval). Conducto arterioso (tronco pulmonar a la aorta; su resto es el ligamento arterioso)." }
      ]}
    ]
  },

  {
    id: "respiratorio", title: "Aparato respiratorio", conf: "baja",
    intro: "Sólo tenemos el resumen de la guía (sección 12) y algunos datos de los apuntes. No se leyó la guía completa. Verificar antes de estudiar.",
    sections: [
      { h: "Vías aéreas", blocks: [
        { t: "ul", src: "guia", ref: "sección 12 (resumen)", items: [
          "Faringe en tres porciones: nasofaringe, orofaringe, laringofaringe.",
          "Laringe con nueve cartílagos.",
          "Tráquea de 16 a 20 anillos cartilaginosos en C.",
          "Bronquio principal derecho más vertical que el izquierdo.",
          "Pulmón derecho con tres lóbulos; izquierdo con dos (língula y escotadura cardíaca)."
        ]},
        { t: "dato", src: "guia", ref: "sección 12", text: "Trampa: la tráquea es vía inferior, no superior." }
      ]},
      { h: "Alvéolo y membrana alveolocapilar", blocks: [
        { t: "table", src: "guia", ref: "sección 3 y 12", head: ["Célula", "Función"], rows: [
          ["Neumocito tipo I", "Epitelio plano; intercambio gaseoso (≈ 95% de la superficie)"],
          ["Neumocito tipo II", "Secreta surfactante; es progenitora"],
          ["Macrófago alveolar", "Fagocita"]
        ]},
        { t: "ul", src: "guia", ref: "sección 3", items: [
          "Membrana alveolocapilar: 4 capas, espesor ≈ 0,5 µm, superficie ≈ 70 m².",
          "Factores de la difusión: diferencia de presión parcial, superficie, distancia, peso molecular y solubilidad. La fuerza del diafragma no es uno de ellos."
        ]}
      ]},
      { h: "Vasos y capilares", blocks: [
        { t: "ul", src: "guia", ref: "sección 3", items: [
          "Arteria elástica: conducción. Arteria muscular: distribución. Arteriola: principal resistencia.",
          "Capilar: intercambio. Vénula poscapilar: salida de leucocitos. Vena: reservorio (60-65% del volumen sanguíneo).",
          "Capilar continuo (uniones estrechas, p. ej. SNC). Fenestrado (glomérulo, intestino, glándulas endócrinas). Sinusoide (hígado, bazo, médula ósea, adenohipófisis, suprarrenales)."
        ]}
      ]},
      { h: "Mecánica y control", blocks: [
        { t: "p", src: "guia", ref: "sección 12", text: "Diafragma: principal músculo inspiratorio. Temas de la clase: mecánica ventilatoria, volúmenes y capacidades, ley de Dalton, ley de Henry, transporte de O₂ y CO₂, control bulbar y quimiorreceptores." }
      ]}
    ]
  },

  {
    id: "digestivo", title: "Aparato digestivo", conf: "baja",
    intro: "Sólo el resumen de la guía (secciones 5 y 14), no el texto completo. Lo que sigue es lo que surge de esas partes. Verificar.",
    sections: [
      { h: "Boca y estómago", blocks: [
        { t: "ul", src: "guia", ref: "sección 5 y 14", items: [
          "32 dientes en el adulto; tres pares de glándulas salivales.",
          "Esófago de unos 25 cm; termina en el cardias.",
          "Estómago: cardias, fundus, cuerpo, antro, píloro.",
          "Células gástricas: mucosa (moco), parietal (HCl y factor intrínseco, necesario para absorber B12 en el íleon), principal (pepsinógeno), G (gastrina)."
        ]}
      ]},
      { h: "Intestino delgado y duodeno", blocks: [
        { t: "p", src: "guia", ref: "sección 5", text: "Duodeno con cuatro porciones. En la segunda porción desembocan el colédoco y el conducto pancreático (el cístico y el hepático no llegan ahí)." },
        { t: "p", src: "guia", ref: "sección 5 y 14", text: "Tres niveles de amplificación del intestino delgado: pliegues circulares (mm), vellosidades (0,5-1 mm), microvellosidades (~1 µm). El efecto es el producto, no la suma." },
        { t: "p", src: "guia", ref: "sección 5", text: "El íleon desemboca en el ciego por la válvula ileocecal." }
      ]},
      { h: "Hígado, vesícula y bilis", blocks: [
        { t: "p", src: "guia", ref: "sección 5", text: "Lobulillo hepático: sangre de la periferia al centro; bilis en sentido contrario (contracorriente). Macrófagos de Kupffer." },
        { t: "p", src: "guia", ref: "sección 14", text: "Hígado: convierte amoníaco en urea, sintetiza la mayoría de las proteínas plasmáticas, excreta bilirrubina, almacena glucógeno, vitaminas A, B12, D, E, K y hierro, y sintetiza sales biliares." },
        { t: "p", src: "guia", ref: "sección 14", text: "Vesícula: almacena y concentra la bilis. Los cálculos vienen de la cristalización del colesterol." },
        { t: "p", src: "guia", ref: "consigna de la sección 5", text: "Consigna típica: recorrido de la bilis desde el hígado hasta el duodeno. Las sales biliares emulsionan las grasas; no las digieren." }
      ]},
      { h: "Hormonas digestivas", blocks: [
        { t: "ul", src: "guia", ref: "sección 5 y 14", items: [
          "Gastrina (célula G): estímulo del estómago.",
          "Secretina: ante quimo ácido; estimula bicarbonato.",
          "CCK: ante grasas; contrae la vesícula y estimula enzimas pancreáticas."
        ]},
        { t: "p", src: "guia", ref: "sección 14", text: "Enzimas pancreáticas: salen como zimógenos y se activan en el duodeno por la enterocinasa. Activarlas antes causaría pancreatitis." }
      ]}
    ]
  },

  {
    id: "urinario", title: "Aparato urinario", conf: "baja",
    intro: "Sólo el resumen de la guía (secciones 5 y 15). Fisiología incompleta. Verificar.",
    sections: [
      { h: "Anatomía", blocks: [
        { t: "ul", src: "guia", ref: "sección 5 y 15", items: [
          "Riñones retroperitoneales, entre T12 y L3. Por el hilio, de adelante hacia atrás: vena, arteria y pelvis renal.",
          "Uréter de 25 a 30 cm; entra oblicuo en la vejiga (evita el reflujo).",
          "Trígono: entre los dos orificios ureterales y el uretral interno.",
          "Uretra femenina de unos 4 cm; masculina de unos 20 cm (vesical, prostática, membranosa, esponjosa)."
        ]},
        { t: "dato", src: "guia", ref: "sección 5", text: "Vena renal izquierda: la más larga; cruza por delante de la aorta. La gonadal derecha va a la vena cava inferior; la izquierda, a la vena renal izquierda." }
      ]},
      { h: "Nefrona", blocks: [
        { t: "table", src: "guia", ref: "sección 15", head: ["Segmento", "Qué hace"], rows: [
          ["Túbulo contorneado proximal", "Reabsorbe ≈ 65% del agua y del Na, casi toda la glucosa; secreta H+ y amonio"],
          ["Asa descendente", "Permeable al agua"],
          ["Asa ascendente", "Impermeable al agua; reabsorbe Na, K y Cl"],
          ["Túbulo contorneado distal", "Ajuste fino; el Ca está regulado por PTH"],
          ["Conducto colector", "Actúa ADH y aldosterona"]
        ]},
        { t: "p", src: "guia", ref: "sección 15", text: "Nefrona cortical (la mayoría, asa corta) vs yuxtamedular (asa larga y vasos rectos, genera el gradiente medular y la orina concentrada)." }
      ]},
      { h: "Procesos", blocks: [
        { t: "p", src: "guia", ref: "sección 15", text: "Filtración ≈ 180 L/día. Reabsorción: del filtrado a la sangre. Secreción: de la sangre al filtrado. Excreción = filtrado − reabsorbido + secretado." },
        { t: "p", src: "guia", ref: "sección 15", text: "Vejiga: el parasimpático contrae el detrusor (micción); el simpático lo relaja." }
      ]}
    ]
  },

  {
    id: "nervioso", title: "Sistema nervioso", conf: "alta",
    intro: "Embriología, neurona, arco reflejo, encéfalo, pares craneales, meninges, LCR e irrigación. Fuentes: presentación, PDF de la cátedra y apuntes.",
    sections: [
      { h: "Embriología", blocks: [
        { t: "p", src: "pres", ref: "diap. 6-9", text: "El sistema nervioso nace del ectodermo. Gastrulación, luego inducción neural por la notocorda, placa neural, surco neural, tubo neural. La cresta neural da origen al SNP." },
        { t: "p", src: "pres", ref: "diap. 10-11", text: "Vesículas secundarias (5 semanas): telencéfalo (cerebro), diencéfalo (tálamo, hipotálamo, epitálamo), mesencéfalo, metencéfalo (puente y cerebelo), mielencéfalo (bulbo raquídeo)." }
      ]},
      { h: "Funciones y divisiones", blocks: [
        { t: "ul", src: "snpdf", ref: "pdf p.1", items: [
          "Función sensorial: recibe información del medio interno y externo por receptores.",
          "Función integradora: procesa la información y la compara con la memoria.",
          "Función motora: envía señales a músculos y glándulas."
        ]},
        { t: "table", src: "apunte", ref: "pág. 11", head: ["Sistema", "Subdivisión"], rows: [
          ["SNC", "Encéfalo y médula espinal"],
          ["SNP", "Nervios craneales y espinales; con el somático (voluntario) y el autónomo (involuntario)"],
          ["SNA simpático", "Lucha o huida: estrés y peligro"],
          ["SNA parasimpático", "Reposo: digestión y relajación"]
        ]}
      ]},
      { h: "Neurona y reflejo", blocks: [
        { t: "table", src: "pres", ref: "diap. 16", head: ["Tipo", "Función"], rows: [
          ["Bipolar", "Interneurona"],
          ["Unipolar (seudounipolar)", "Neurona sensitiva"],
          ["Multipolar", "Motoneurona"]
        ]},
        { t: "p", src: "pres", ref: "diap. 17", text: "Partes: soma, núcleo, sustancia de Nissl, dendritas, cono axónico, axón, vaina de mielina, nodos de Ranvier, botones sinápticos." },
        { t: "p", src: "pres", ref: "diap. 13 (Fig. 1-5)", text: "Arco reflejo miotático (rodilla): receptor de estiramiento → fibra aferente → sinapsis en la médula con la motoneurona → fibra eferente → músculo extensor se contrae. Una interneurona inhibe al flexor." },
        { t: "dato", src: "guia", ref: "sección 17", text: "Neuroglía: astrocito (barrera hematoencefálica), oligodendrocito (mielina del SNC), microglía (fagocitosis), células de Schwann (mielina del SNP)." }
      ]},
      { h: "Encéfalo", blocks: [
        { t: "table", src: "snpdf", ref: "pdf p.1-2", head: ["Estructura", "Función"], rows: [
          ["Corteza cerebral", "Funciones superiores: pensamiento, memoria, lenguaje, emoción, conciencia"],
          ["Sistema límbico", "Emociones, motivación y memoria"],
          ["Ganglios basales", "Movimiento voluntario y coordinación"],
          ["Tálamo", "Estación de relevo de la información sensorial hacia la corteza"],
          ["Hipotálamo", "Temperatura, frecuencia cardíaca, presión arterial, apetito; control de la hipófisis"],
          ["Cerebelo", "Coordinación de movimientos, equilibrio y postura"],
          ["Tronco encefálico", "Conecta con la médula; respiración, frecuencia cardíaca, presión arterial"]
        ]},
        { t: "p", src: "apunte", ref: "pág. 10-11", text: "Diencéfalo: tálamo, hipotálamo, subtálamo, epitálamo (glándula pineal). Tronco: mesencéfalo, protuberancia y bulbo raquídeo. El cerebelo NO forma parte del tronco." },
        { t: "p", src: "apunte", ref: "pág. 11", text: "Fibras de la sustancia blanca: de asociación (dentro de un hemisferio, longitudinales), de proyección (corteza con estructuras inferiores, verticales) y comisurales (entre hemisferios, transversales, como el cuerpo calloso)." },
        { t: "p", src: "apunte", ref: "pág. 11", text: "Médula espinal: sustancia gris (astas posterior sensitiva, anterior motora, lateral simpática) y sustancia blanca (cordones). Cola de caballo a la altura de L1-L2." }
      ]},
      { h: "Centros de la corteza", blocks: [
        { t: "table", src: "pres", ref: "diap. 31-33", head: ["Área", "Función"], rows: [
          ["Broca", "Producción del habla; planifica y ejecuta los patrones motores de cada palabra (lóbulo frontal)"],
          ["Wernicke", "Comprensión del lenguaje (lóbulo temporal). Es la región más importante para las funciones intelectuales superiores"],
          ["Lóbulo occipital", "Visión"],
          ["Lóbulo parietal", "Sensibilidad general y espacial"],
          ["Lóbulo temporal", "Audición, memoria"],
          ["Lóbulo frontal", "Movimiento, planificación, personalidad"]
        ]},
        { t: "table", src: "pres", ref: "diap. 34", head: ["Hemisferio", "Función"], rows: [
          ["Izquierdo", "Razonamiento, lenguaje hablado y escrito, habilidad numérica y científica. Controla la mano derecha"],
          ["Derecho", "Intuición, imaginación, sentido artístico y musical, percepción tridimensional. Controla la mano izquierda"]
        ]},
        { t: "p", src: "pres", ref: "diap. 34", text: "El cuerpo calloso comunica los dos hemisferios." },
        { t: "p", src: "guia", ref: "sección 17", text: "Ondas cerebrales: gamma, beta, alfa, theta, delta (de más rápida a más lenta)." }
      ]},
      { h: "Pares craneales", blocks: [
        { t: "table", src: "apunte", ref: "pág. 12-13", head: ["N.º", "Nombre", "Tipo", "Función"], rows: [
          ["I", "Olfatorio", "Sensitivo", "Olfato"],
          ["II", "Óptico", "Sensitivo", "Vista"],
          ["III", "Oculomotor", "Motor", "Mayoría de los músculos del ojo, párpado, pupila"],
          ["IV", "Troclear", "Motor", "Músculo oblicuo superior"],
          ["V", "Trigémino", "Mixto", "Sensibilidad de la cara; masticación (3 ramas)"],
          ["VI", "Abducens", "Motor", "Recto lateral (gira el ojo hacia afuera)"],
          ["VII", "Facial", "Mixto", "Expresión facial, lagrimal y salival; gusto de 2/3 anteriores de la lengua"],
          ["VIII", "Vestibulococlear", "Sensitivo", "Audición y equilibrio"],
          ["IX", "Glosofaríngeo", "Mixto", "Gusto del tercio posterior, faringe, parótida"],
          ["X", "Vago", "Mixto", "Órganos del tórax y abdomen; fonación y deglución"],
          ["XI", "Accesorio", "Motor", "Esternocleidomastoideo y trapecio"],
          ["XII", "Hipogloso", "Motor", "Músculos de la lengua"]
        ]}
      ]},
      { h: "Meninges, LCR e irrigación", blocks: [
        { t: "ul", src: "apunte", ref: "pág. 12", items: [
          "Meninges de afuera hacia adentro: duramadre, aracnoides, piamadre.",
          "Espacios: epidural (entre cráneo y duramadre), subdural (entre duramadre y aracnoides), subaracnoideo (entre aracnoides y piamadre).",
          "LCR: da flotabilidad. Circula por el espacio subaracnoideo y los ventrículos (laterales en telencéfalo, tercero en diencéfalo, cuarto detrás del tronco)."
        ]},
        { t: "ul", src: "apunte", ref: "pág. 13", items: [
          "Circulación anterior (carótida interna): lóbulos frontal, parietal y temporal.",
          "Circulación posterior (vertebral y basilar): tronco, cerebelo, occipital y parte del temporal.",
          "Polígono de Willis: anastomosis que da flujo colateral si se obstruye una arteria principal."
        ]}
      ]},
      { h: "Plasticidad sináptica en la unión neuromuscular", blocks: [
        { t: "p", src: "pres", ref: "diap. 37 (Fig. 23-1)", text: "Facilitación → depresión → potenciación postetánica. Tras un tren de estímulos la respuesta puede volverse mucho mayor que la inicial, minutos después." }
      ]}
    ]
  },

  {
    id: "sensorial", title: "Sistemas sensoriales", conf: "media",
    intro: "Transducción, oído, ojo y retina. Gusto y olfato están poco desarrollados en la presentación; completar con los videos (no verificados).",
    sections: [
      { h: "Transducción", blocks: [
        { t: "table", src: "apunte", ref: "pág. 14", head: ["Sistema", "Estímulo", "Transducción"], rows: [
          ["Auditivo", "Mecánico / sonoro", "La onda deforma las estructuras de la cóclea y se transforma en impulso eléctrico"],
          ["Visual", "Lumínico", "Los fotorreceptores (conos y bastones) cambian su potencial al absorber la luz"],
          ["Tacto", "Mecánico", "La presión modifica células que despolarizan la membrana y disparan potenciales de acción"],
          ["Olfato", "Químico", "Las moléculas se unen a receptores específicos"],
          ["Gusto", "Químico", "Partículas químicas en la lengua"]
        ]},
        { t: "p", src: "apunte", ref: "pág. 13", text: "Esquema general: estímulo → recepción → transducción → respuesta." }
      ]},
      { h: "Oído", blocks: [
        { t: "ul", src: "pres", ref: "diap. 23", items: [
          "Oído externo: pabellón, conducto auditivo externo y membrana timpánica.",
          "Oído medio: martillo, yunque y estribo, que transmiten la vibración hasta la ventana oval. Trompa faringotimpánica.",
          "Oído interno: cóclea (audición), canales semicirculares (equilibrio), nervio vestibular y auditivo."
        ]},
        { t: "p", src: "pres", ref: "diap. 25 y 26", text: "Escala vestibular y timpánica: perilinfa. Escala media: endolinfa. El órgano de Corti (células ciliadas internas y externas) está sobre la membrana basilar. El estribo empuja la ventana oval y genera la onda que dobla la membrana basilar." },
        { t: "dato", src: "pres", ref: "diap. 25", text: "Tonotopía: la base de la cóclea (cerca de la ventana oval) responde a los agudos, de hasta unos 20 000 Hz; el ápex responde a los graves, de unos 200 Hz." }
      ]},
      { h: "Ojo y retina", blocks: [
        { t: "ul", src: "pres", ref: "diap. 27", items: [
          "Córnea, humor acuoso, iris, cristalino, humor vítreo.",
          "Retina, coroides y esclerótica.",
          "Mancha amarilla (fóvea) y mancha ciega; nervio óptico."
        ]},
        { t: "table", src: "pres", ref: "diap. 28-29", head: ["Capa de la retina (de afuera hacia adentro)", "Contenido"], rows: [
          ["Epitelio pigmentario", "Soporte de los fotorreceptores"],
          ["Capa de fotorreceptores", "Conos y bastones"],
          ["Nuclear externa", "Cuerpos de fotorreceptores"],
          ["Plexiforme externa", "Sinapsis con células horizontales"],
          ["Nuclear interna", "Células bipolares y amacrinas"],
          ["Plexiforme interna", "Sinapsis con células ganglionares"],
          ["Ganglionar", "Células ganglionares"],
          ["Fibras del nervio óptico", "Axones de las ganglionares"]
        ]},
        { t: "dato", src: "pres", ref: "diap. 28", text: "La luz atraviesa todas las capas de la retina antes de llegar a los fotorreceptores." },
        { t: "p", src: "pres", ref: "diap. 30 (Fig. 'on/off')", text: "Las células ganglionares tienen campos receptores centro-periferia: 'on-center' responde al centro iluminado y 'off-center' al revés. El contraste entre centro y periferia es la base de la detección de bordes." }
      ]},
      { h: "Gusto y olfato", blocks: [
        { t: "p", src: "paper", ref: "Dias y Ressler, 2013", text: "Experiencia olfatoria parental en ratones: el condicionamiento al acetofenona (receptor Olfr151) aumentó la sensibilidad en F1 y F2 y la representación neuroanatómica de esa vía. Se explica por hipometilación del gen Olfr151 en el esperma." },
        { t: "p", src: "video", ref: "sisbiofiuba", text: "Los videos de la página cubren gusto y olfato, pero no tenemos su contenido verificado. Pendiente." }
      ]}
    ]
  },

  {
    id: "memoria", title: "Plasticidad y memoria (LTP)", conf: "media",
    intro: "Potenciación a largo plazo, hipocampo y memoria espacial. Figuras de la presentación (diapositivas 37 a 41).",
    sections: [
      { h: "LTP y receptores", blocks: [
        { t: "p", src: "pres", ref: "diap. 38 (Fig. 23-4)", text: "La LTP requiere la coincidencia de actividad presináptica y postsináptica. El receptor NMDA está bloqueado por magnesio en reposo; con despolarización fuerte se desbloquea, entra calcio y la respuesta aumenta de forma persistente." },
        { t: "p", src: "pres", ref: "diap. 41 (Fig. 23-3)", text: "En la sinapsis de Schaffer → CA1, la estimulación de alta frecuencia en la vía de prueba aumenta la respuesta durante horas. La vía control, sin estimulación, se mantiene igual." }
      ]},
      { h: "Circuito del hipocampo", blocks: [
        { t: "p", src: "pres", ref: "diap. 39 (Fig. 23-2)", text: "Vía perforante (corteza entorrinal) → circunvolución dentada → fibras musgosas → CA3 → colaterales de Schaffer → CA1. Se estudia la potenciación en la sinapsis Schaffer → CA1." }
      ]},
      { h: "Memoria espacial", blocks: [
        { t: "p", src: "pres", ref: "diap. 40 (Morris)", text: "En el laberinto de agua de Morris, las ratas control aprenden la plataforma oculta en unos 10 ensayos. Las ratas con hipocampo lesionado no la recuerdan. La memoria espacial depende del hipocampo." }
      ]}
    ]
  }
];
