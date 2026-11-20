// Capítulo 18 de la guía: enfoque bioingenieril y papers de la cátedra.
// Fuente no preaprobada: parafraseado. Cifras y citas tal como aparecen en la guía.

const CAP18 = {
  sections: [
    { h: "Por qué este capítulo", blocks: [
      { t: "p", src: "guia", ref: "sección 18", text: "La materia se dicta para Bioingeniería. La cátedra sube cuatro papers y envuelve parte de las preguntas del parcial en escenarios de diseño." },
      { t: "ul", src: "guia", ref: "sección 18", items: [
        "De las 39 preguntas reales: 26 vienen de los parcialitos 1 a 3 y de 'Preguntas para repasar'; 8 del parcialito de endocrinología; 5 de 'Preguntas modelo'.",
        "9 de 39 (23%) tienen escenario de diseño o de laboratorio. Con la pregunta sobre la vía de administración de la insulina, son 10 de 39 (26%).",
        "Temas de los escenarios: andamio de órganos, superficie de cultivo, terapia génica, tejido que soporta tensión mecánica, material resistente y flexible tipo tendón, parche de piel, obtención de linajes, siembra dual del riñón y constructo ovárico."
      ]},
      { t: "dato", src: "guia", ref: "sección 18", text: "Lo evaluado sigue siendo histología y anatomía. El escenario agrega un paso: traducir un requisito funcional a la estructura que lo cumple." }
    ]},
    { h: "Cómo resolver una pregunta envuelta en escenario", blocks: [
      { t: "ul", src: "guia", ref: "sección 18", items: [
        "1. Quitar el decorado. Ejemplo de la guía: un material 'similar a los tendones' cuya pregunta real es qué tejido forma los tendones.",
        "2. Aislar el requisito funcional: resistir tracción, absorber, aislar, conducir, secretar sin conducto, deslizar, amortiguar.",
        "3. Traducir el requisito a la estructura (tabla final) y recién después mirar las opciones."
      ]}
    ]},
    { h: "Paper 1: riñón bioingenierizado", blocks: [
      { t: "p", src: "paper", ref: "Song, Guyette, Gilpin, Gonzalez, Vacanti y Ott. Nature Medicine 19(5), 2013", text: "Planteo: unos 100.000 pacientes en lista de espera de riñón en EE. UU." },
      { t: "table", src: "guia", ref: "sección 18", head: ["Etapa", "Qué se hizo"], rows: [
        ["Descelularización", "Por la arteria renal con SDS al 1%, a 40 mmHg. ADN reducido a menos del 10%. Colágeno y glucosaminoglicanos conservados. Número de glomérulos sin cambios. Escalado a riñón porcino y humano"],
        ["Resiembra dual", "HUVECs por la arteria renal y células renales neonatales de rata por el uréter, con gradiente de vacío de 40 cm H₂O. Por encima de 70 cm H₂O se rompen cálices y parénquima"],
        ["Cultivo y trasplante", "Biorreactor (las HUVECs tapizan el árbol vascular a los 3-5 días) y trasplante ortotópico en rata"]
      ]},
      { t: "table", src: "paper", ref: "Song y col., 2013 (vía guía)", head: ["Medida", "Cadavérico / descelularizado / regenerado"], rows: [
        ["Retención de albúmina", "89,9% / 23,3% / 46,9%"],
        ["Reabsorción de glucosa", "91,7% / 2,8% / 47,4%"],
        ["Reabsorción de electrolitos", "Fisiológica / perdida / ≈ 50% de lo fisiológico"],
        ["Clearance de creatinina", "100% / aumentado / ≈ 10% (hasta 23% con presión de perfusión de 120 mmHg)"]
      ]},
      { t: "ul", src: "paper", ref: "Song y col., 2013 (vía guía)", items: [
        "Causas del déficit que dan los autores: resistencia vascular aumentada, inmadurez de las células neonatales y siembra incompleta.",
        "La matriz conserva la membrana basal glomerular, la membrana basal tubular y la cápsula de Bowman. El andamio sin células filtra sin selectividad; el epitelio tubular recupera su polaridad."
      ]},
      { t: "dato", src: "guia", ref: "sección 18", text: "Pregunta real de la cátedra: la respuesta correcta es repoblar selectivamente los compartimentos vascular y epitelial por sus vías de acceso naturales." }
    ]},
    { h: "Paper 2: constructo ovárico encapsulado", blocks: [
      { t: "p", src: "paper", ref: "Sittadjody y col., Nature Communications 8:1858, 2017", text: "Planteo: el reemplazo hormonal farmacológico no participa del eje hipotálamo-hipófisis-ovario." },
      { t: "ul", src: "paper", ref: "Sittadjody y col., 2017 (vía guía)", items: [
        "Diseño: microcápsula de alginato multicapa. Células de la granulosa en la capa interna y de la teca en la externa, separadas por poli-L-ornitina. Unas 2500 células de cada tipo por constructo y unos 1000 constructos por animal.",
        "Implante en bolsillo de epiplón de ratas Fisher 344 ovariectomizadas, con seguimiento de 90 días."
      ]},
      { t: "table", src: "paper", ref: "Sittadjody y col., 2017 (vía guía)", head: ["Alginato", "Resultado"], rows: [
        ["Con Ca²⁺", "El estradiol cae desde alrededor del día 40 y sigue cayendo hasta el día 90. El constructo se calcifica (mineraliza)"],
        ["Con Sr²⁺", "El estradiol se mantiene estable los 90 días y no hay calcificación"],
        ["Progesterona, FSH y LH", "Sin cambios entre condiciones"]
      ]},
      { t: "p", src: "paper", ref: "Sittadjody y col., 2017 (vía guía)", text: "Explicación de los autores: falla del material, no de las células. El calcio precipita con el tiempo y el constructo se endurece, comprometiendo la difusión. E₂ estable con Sr²⁺ indica que no hubo luteinización; una LH sostenida indica teca funcional." },
      { t: "dato", src: "guia", ref: "sección 18", text: "Pregunta real: la respuesta correcta es que el Ca²⁺ calcificó progresivamente el constructo de alginato. Las otras opciones son inflamación en el omento, luteinización prematura y toxicidad para la teca." }
    ]},
    { h: "Paper 3: células madre (revisión)", blocks: [
      { t: "p", src: "paper", ref: "Pimentel-Parra y Murcia-Ordóñez, Perinatología y Reproducción Humana 31(1), 2017", text: "Propiedades de las células madre: autorrenovación y diferenciación." },
      { t: "table", src: "paper", ref: "Pimentel-Parra y Murcia-Ordóñez, 2017 (vía guía)", head: ["Potencialidad", "Qué puede formar", "Ejemplo"], rows: [
        ["Totipotente", "Organismo completo más anexos", "Cigoto, blastómeras, mórula"],
        ["Pluripotente", "Las tres capas germinales, sin anexos", "Masa celular interna del blastocisto"],
        ["Multipotente", "Varios tipos dentro de su linaje", "Médula ósea, cordón umbilical, cerebro, piel, músculo, retina, páncreas"],
        ["Unipotente", "Un solo linaje", "Neumocito tipo II, que regenera neumocitos tipo I"]
      ]},
      { t: "table", src: "paper", ref: "Pimentel-Parra y Murcia-Ordóñez, 2017 (vía guía)", head: ["Origen", "Características"], rows: [
        ["Embrionarias (pluripotentes)", "Versatilidad alta; tendencia a proliferar de más y formar tumores; problema ético-legal y rechazo"],
        ["Adultas", "Mayor uso clínico; sin destrucción embrionaria; sin rechazo si son del propio paciente"],
        ["iPS (reprogramadas)", "Autólogas; riesgo de integración del vector"]
      ]},
      { t: "ul", src: "paper", ref: "Pimentel-Parra y Murcia-Ordóñez, 2017 (vía guía)", items: [
        "Reprogramación: transferencia nuclear (Gurdon, 1962, en Xenopus; oveja Dolly, 1997) y Yamanaka (2006) con cuatro factores: Oct3/4, Sox2, Klf4 y c-Myc. Nobel 2012 para Gurdon y Yamanaka.",
        "Riesgo de las iPS: el transgén queda en el genoma y puede reactivar c-Myc.",
        "Aplicación consolidada: trasplante de médula ósea (hematopoyéticas), con leucemias, linfomas, neuroblastoma, mieloma múltiple, talasemia, anemia falciforme, inmunodeficiencias y aplasia medular. El cordón umbilical aporta hematopoyéticas y mesenquimales (gelatina de Wharton)."
      ]},
      { t: "dato", src: "guia", ref: "sección 18", text: "Regla: si se necesitan linajes de dos capas germinales distintas (por ejemplo endodermo y mesodermo), hace falta una célula pluripotente. La multipotente no cruza capas; la totipotente sobra porque forma anexos. 'Embrionaria' es origen; 'pluripotente' es potencialidad: si piden origen, responder origen." }
    ]},
    { h: "Paper 4: experiencia olfatoria parental", blocks: [
      { t: "p", src: "paper", ref: "Dias y Ressler, Nature Neuroscience, diciembre 2013", text: "Diseño: machos F0 condicionados con acetofenona (receptor M71, gen Olfr151) o propanol (control) antes del apareamiento. Se estudiaron F1 y F2 nunca expuestas." },
      { t: "ul", src: "paper", ref: "Dias y Ressler, 2013 (vía guía)", items: [
        "Conducta: F1 y F2 detectan el olor condicionado a concentraciones más bajas.",
        "Anatomía: glomérulos M71 del bulbo olfatorio agrandados y más neuronas M71 en el epitelio.",
        "Molecular: hipometilación de CpG en Olfr151 en espermatozoides de F0 y F1.",
        "Controles: persiste con fecundación in vitro, en F2 y con crianza cruzada. La vía es germinal."
      ]},
      { t: "p", src: "guia", ref: "sección 18", text: "Concepto: la anatomía neural es plástica y puede heredarse por marcas epigenéticas, sin cambio en la secuencia del ADN. Para bioingeniería: la plasticidad estructural es cuantificable y es la premisa de neuroprótesis e interfaces cerebro-máquina." }
    ]},
    { h: "Tabla de traducción: requisito → estructura", blocks: [
      { t: "p", src: "guia", ref: "sección 18", text: "La guía la presenta como autoevaluación: tapar la columna derecha, leer el requisito y pensar la estructura antes de mirar." },
      { t: "table", src: "guia", ref: "sección 18", head: ["Requisito funcional", "Estructura que lo cumple"], rows: [
        ["Andamio con matriz abundante, sostén y relleno", "Tejido conjuntivo"],
        ["Resistencia a la tracción en una dirección, como un tendón", "Conectivo denso modelado (colágeno tipo I)"],
        ["Retener agua y favorecer la difusión en la matriz", "Glucosaminoglicanos (componente amorfo)"],
        ["Resistir tracción dentro de la matriz", "Fibras colágenas (componente fibrilar)"],
        ["Maximizar la superficie de absorción", "Microvellosidades"],
        ["Barrera impermeable entre células", "Uniones estrechas (zonula occludens)"],
        ["Resistencia mecánica entre células", "Uniones de anclaje (zonula adherens y desmosomas)"],
        ["Paso de iones entre células, acople eléctrico", "Uniones comunicantes (nexos)"],
        ["Mover fluidos sobre el epitelio", "Cilios"],
        ["Amortiguar compresión con superficie de deslizamiento", "Cartílago hialino"],
        ["Resistir carga y reservorio de calcio", "Tejido óseo (bajo control de PTH y calcitonina)"],
        ["Contracción rápida, voluntaria y fina", "Músculo esquelético"],
        ["Contracción rítmica e involuntaria, con acople eléctrico", "Músculo cardíaco (discos intercalares con nexos)"],
        ["Contracción lenta y sostenida en la pared de un tubo", "Músculo liso"],
        ["Parche de piel protector que respire", "Epidermis delgada más dermis"],
        ["Que el parche pigmente", "Sembrar melanocitos"],
        ["Que el parche sienta", "Colonización por fibras nerviosas del SNP"],
        ["Intercambio gaseoso con mínima distancia", "Barrera alveolocapilar (neumocito I, membranas basales fusionadas, endotelio)"],
        ["Superficie alveolar que no colapse", "Surfactante del neumocito II"],
        ["Bomba con flujo unidireccional", "Válvulas cardíacas, miocardio y sistema de conducción"],
        ["Conducto con presión pulsátil alta", "Arteria elástica"],
        ["Intercambio con el intersticio", "Capilar"],
        ["Filtrar plasma reteniendo proteínas", "Membrana basal glomerular más podocitos"],
        ["Reabsorber selectivamente", "Epitelio tubular polarizado (Na⁺/K⁺-ATPasa basolateral, acuaporinas)"],
        ["Secretar hormona a la sangre sin conducto", "Cordones o cúmulos celulares con red capilar (tipo islote de Langerhans)"],
        ["Almacenar la secreción fuera de la célula", "Folículo tiroideo con coloide"],
        ["Mielinizar axones periféricos", "Células de Schwann, con endoneuro como guía"],
        ["Barrera hematoencefálica in vitro", "Endotelio cocultivado con astrocitos"],
        ["Neuroinflamación en un organoide", "Agregar microglía (la única glía no ectodérmica)"],
        ["Linajes de dos capas germinales distintas", "Célula madre pluripotente"],
        ["Terapia sin rechazo", "Células adultas del propio paciente o iPS autólogas"]
      ]}
    ]},
    { h: "Trampas de este capítulo", blocks: [
      { t: "ul", src: "guia", ref: "sección 18", items: [
        "Responder al decorado y no al requisito: el órgano nombrado es la pista, no el adjetivo.",
        "Suponer que la falla es celular: en un constructo encapsulado, sospechar primero del material.",
        "Confundir 'el andamio conserva la arquitectura' con 'conserva la función'. El riñón descelularizado filtra, pero sin selectividad.",
        "Mezclar criterios de células madre: origen (embrionaria, adulta, iPS) y potencialidad (totipotente, pluripotente, multipotente, unipotente) son ejes distintos."
      ]}
    ]}
  ]
};
