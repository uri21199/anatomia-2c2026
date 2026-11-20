// Banco del parcial simulado: 20 opción múltiple (todos los sistemas) y 5 de desarrollo.
// mc: 4 opciones, ans = índice de la correcta (la app mezcla el orden al mostrar).
// dev: consigna con checklist de puntos clave, respuesta modelo y justificación.

const QUIZ = {
  mc: [
  {
    "id": "PC1",
    "topic": "respiratorio",
    "ref": "sección 12",
    "q": "¿Cuál de las siguientes afirmaciones sobre los bronquios principales es correcta?",
    "opts": [
      "El derecho es más vertical, corto y ancho, y por eso recibe con más frecuencia los cuerpos aspirados.",
      "El izquierdo es más vertical, corto y ancho, por eso los cuerpos extraños aspirados suelen ir a ese pulmón.",
      "El derecho es más largo y horizontal, y pasa por debajo del arco de la aorta antes de ramificarse.",
      "El izquierdo da tres bronquios lobares, uno por cada lóbulo de su pulmón, mientras el derecho da sólo dos."
    ],
    "ans": 0,
    "expl": "El bronquio principal derecho es más vertical, corto y ancho, y por eso recibe con más frecuencia los cuerpos aspirados. El izquierdo es más largo y horizontal, pasa por debajo del arco de la aorta y da dos lobares. El derecho da tres."
  },
  {
    "id": "PC2",
    "topic": "respiratorio",
    "ref": "sección 12",
    "q": "Un paciente tiene déficit de surfactante y sus alvéolos colapsan durante la espiración. ¿Qué parámetro físico explica ese colapso?",
    "opts": [
      "La presión intrapleural, que se vuelve positiva y comprime los alvéolos desde afuera del pulmón.",
      "La tensión superficial del líquido alveolar, que tiende a colapsar el alvéolo y el surfactante la baja.",
      "La distensibilidad pulmonar, que aumenta tanto que el pulmón se retrae más de lo que puede sostener.",
      "La resistencia de la vía aérea, que sube por la acción de los bronquiolos sobre su calibre al espirar."
    ],
    "ans": 1,
    "expl": "La película de líquido que tapiza el alvéolo genera tensión superficial, que tiende a colapsarlo. El surfactante la baja y evita el colapso al final de la espiración. Sin surfactante aparece el síndrome de dificultad respiratoria del prematuro."
  },
  {
    "id": "PC3",
    "topic": "respiratorio",
    "ref": "sección 12",
    "q": "Durante la inspiración tranquila, ¿qué valor tiene la presión alveolar y por qué entra aire?",
    "opts": [
      "762 mmHg, porque el diafragma comprime el pulmón y sube la presión alveolar por encima de la atmosférica.",
      "756 mmHg, porque la presión intrapleural se iguala con la alveolar cuando el diafragma desciende al inspirar.",
      "758 mmHg, porque el aumento del volumen torácico baja la presión alveolar unos 2 mmHg bajo la atmosférica.",
      "760 mmHg, porque la presión alveolar no cambia y el aire entra sólo por la presión intrapleural negativa."
    ],
    "ans": 2,
    "expl": "Al aumentar el volumen torácico, la presión alveolar cae unos 2 mmHg por debajo de la atmosférica, hasta 758, y entra aire. En la espiración tranquila sube a 762. La presión intrapleural de unos 756 mmHg no iguala a la alveolar."
  },
  {
    "id": "PC4",
    "topic": "circulatorio",
    "ref": "sección 13",
    "q": "Un estudiante afirma que la aorta nace del ventrículo derecho. ¿Cuál de las siguientes frases es correcta?",
    "opts": [
      "La aorta nace del ventrículo derecho, a través de la válvula tricúspide, y lleva sangre desoxigenada al cuerpo.",
      "La aorta nace del ventrículo izquierdo, a través de la válvula mitral, y lleva sangre oxigenada a los tejidos.",
      "La aorta nace de la aurícula izquierda, a través de las venas pulmonares, y lleva sangre oxigenada hacia el cuerpo.",
      "La aorta nace del ventrículo izquierdo, a través de la válvula aórtica, y lleva sangre oxigenada a todo el cuerpo."
    ],
    "ans": 3,
    "expl": "La aorta sale del ventrículo izquierdo por la válvula aórtica con sangre oxigenada. La tricúspide es la válvula derecha, y la mitral la que separa la aurícula izquierda del ventrículo izquierdo, no la que sale hacia la aorta."
  },
  {
    "id": "PC5",
    "topic": "circulatorio",
    "ref": "sección 13",
    "q": "En el ciclo cardíaco, ¿en qué fase las cuatro válvulas están cerradas y el volumen ventricular no cambia?",
    "opts": [
      "Contracción isovolumétrica, cuando la presión ventricular sube, con las cuatro válvulas cerradas y el volumen fijo.",
      "Sístole auricular, porque la contracción de la aurícula cierra las válvulas sigmoideas al completar el llenado.",
      "Eyección ventricular, porque la presión sube y empuja las válvulas sigmoideas hacia la aorta y la pulmonar.",
      "Llenado ventricular pasivo, con las válvulas auriculoventriculares cerradas y la sangre que llega de la aurícula."
    ],
    "ans": 0,
    "expl": "En la contracción isovolumétrica las cuatro válvulas están cerradas, sube la presión y el volumen no cambia. En la relajación isovolumétrica también están cerradas, pero la presión baja. En el llenado, las AV están abiertas."
  },
  {
    "id": "PC6",
    "topic": "circulatorio",
    "ref": "sección 13",
    "q": "¿Qué le ocurre al volumen sistólico cuando aumenta la poscarga, y por qué?",
    "opts": [
      "Aumenta, porque el ventrículo tiene que vencer más resistencia y se estira mejor antes de contraerse.",
      "Disminuye, porque el ventrículo debe vencer más presión para abrir las válvulas sigmoideas en cada latido.",
      "No cambia, porque el volumen sistólico depende sólo de la frecuencia cardíaca y no de la presión arterial.",
      "Aumenta, porque la contractilidad del miocardio se eleva cuando las fibras ventriculares se estiran demasiado."
    ],
    "ans": 1,
    "expl": "La poscarga es la presión que hay que superar para abrir las sigmoideas. Si sube, el volumen sistólico baja. Es lo que pasa con la hipertensión. El aumento de precarga es el que sube el volumen sistólico, por Frank-Starling."
  },
  {
    "id": "PC7",
    "topic": "digestivo",
    "ref": "sección 14",
    "q": "Tras una colecistectomía, ¿qué estructura sigue llevando bilis al duodeno?",
    "opts": [
      "El conducto cístico, que une la vesícula con la segunda porción del duodeno a través de la ampolla de Vater.",
      "El conducto hepático derecho, que se une al conducto pancreático dentro del páncreas y llega al duodeno.",
      "El colédoco, que recibe bilis del hígado por el hepático común y desemboca en la papila duodenal mayor.",
      "El conducto pancreático, que lleva bilis desde el hígado hasta la primera porción del duodeno por la papila."
    ],
    "ans": 2,
    "expl": "La vesícula sólo almacena bilis. Sin ella, la bilis llega desde el hígado por el hepático común, que se continúa como colédoco, y sale junto con el conducto pancreático por la papila duodenal mayor, en la segunda porción del duodeno. El cístico no llega al duodeno."
  },
  {
    "id": "PC8",
    "topic": "digestivo",
    "ref": "sección 14",
    "q": "¿Qué estructura del tubo digestivo es un tejido linfático asociado a mucosas, con folículos en la lámina propia?",
    "opts": [
      "Plexo mientérico, que regula la motilidad entre las dos capas de músculo liso del tubo.",
      "Placas de Peyer, que sólo existen en el duodeno y secretan jugo pancreático al lumen intestinal.",
      "Plexo submucoso, que regula la secreción glandular, el movimiento de la mucosa y la vasoconstricción local.",
      "MALT, el tejido linfático asociado a mucosas, que forma folículos prominentes en la lámina propia."
    ],
    "ans": 3,
    "expl": "El MALT está en la lámina propia y monta la respuesta inmunitaria donde el cuerpo está más expuesto. Las placas de Peyer son folículos del íleon, no del duodeno. Los plexos mientérico y submucoso son del sistema nervioso entérico."
  },
  {
    "id": "PC9",
    "topic": "digestivo",
    "ref": "sección 14",
    "q": "Un paciente tiene problemas para absorber vitaminas liposolubles por cambios en la secreción digestiva. ¿Qué secreción interviene en la emulsión de las grasas antes de la acción de la lipasa?",
    "opts": [
      "La bilis, cuyas sales biliares emulsionan las grasas y multiplican la superficie para la lipasa pancreática.",
      "El jugo gástrico, cuyo ácido clorhídrico disuelve los triglicéridos antes de que pasen al intestino delgado.",
      "La saliva, cuya amilasa descompone los lípidos en ácidos grasos en la boca y en el esófago.",
      "El jugo pancreático, cuya tripsina rompe los triglicéridos en monoglicéridos dentro del duodeno."
    ],
    "ans": 0,
    "expl": "Las sales biliares emulsionan las grasas: es digestión mecánica, sin actividad enzimática. Después actúa la lipasa pancreática, que rompe los triglicéridos. La tripsina actúa sobre proteínas, la amilasa sobre almidón y el ácido gástrico no digiere grasas."
  },
  {
    "id": "PC10",
    "topic": "urinario",
    "ref": "sección 15",
    "q": "¿Por qué la uretra femenina tiene mayor incidencia de infección urinaria que la masculina?",
    "opts": [
      "Porque su epitelio de transición es más delgado y se lesiona con facilidad al paso de la orina.",
      "Porque es más corta y su desembocadura queda cerca del ano, con un trayecto breve hasta la vejiga.",
      "Porque el trígono no tiene mucosa y deja pasar bacterias directamente desde la uretra hacia la vejiga.",
      "Porque la orina femenina contiene más glucosa, que favorece el crecimiento bacteriano en la uretra."
    ],
    "ans": 1,
    "expl": "La uretra femenina mide unos 4 cm y se abre cerca del ano, con un trayecto corto desde el exterior hasta la vejiga. La masculina mide unos 20 cm. El trígono sí tiene mucosa, lisa y firmemente adherida."
  },
  {
    "id": "PC11",
    "topic": "urinario",
    "ref": "sección 15",
    "q": "¿En qué segmento de la nefrona la PTH regula la reabsorción de calcio?",
    "opts": [
      "Túbulo contorneado proximal, con borde en cepillo denso que reabsorbe la mayor parte del calcio filtrado.",
      "Rama descendente delgada del asa de Henle, de epitelio plano simple, que reabsorbe calcio en la médula.",
      "Túbulo contorneado distal, cúbico simple sin borde en cepillo, donde la PTH regula la reabsorción de Ca2+.",
      "Conducto colector, de células principales que reabsorben calcio por acción de la aldosterona sobre la vejiga."
    ],
    "ans": 2,
    "expl": "En el túbulo contorneado distal, cúbico simple sin borde en cepillo, la PTH regula la reabsorción de Ca2+. El proximal reabsorbe la mayor parte del agua y del Na+. La rama delgada del asa es impermeable a solutos."
  },
  {
    "id": "PC12",
    "topic": "urinario",
    "ref": "sección 15",
    "q": "¿Qué sistema hormonal sube la presión arterial y el volumen actuando sobre la arteriola eferente y el riñón?",
    "opts": [
      "El péptido natriurético atrial, que aumenta la diuresis y disminuye el volumen y la presión sanguínea.",
      "La calcitonina, que frena la reabsorción de sodio en el túbulo proximal y baja la calcemia en sangre.",
      "La eritropoyetina, que aumenta la producción de glóbulos rojos y con ello la presión arterial sistémica.",
      "El sistema renina-angiotensina-aldosterona, que genera angiotensina II y aldosterona para retener sodio."
    ],
    "ans": 3,
    "expl": "La renina convierte el angiotensinógeno en angiotensina I, que luego pasa a II en los pulmones. La angiotensina II produce vasoconstricción de la eferente y estimula la aldosterona, que retiene Na+ y agua. El ANP es el sistema opuesto."
  },
  {
    "id": "PC13",
    "topic": "endocrino",
    "ref": "sección 16",
    "q": "¿Qué célula de la tiroides produce calcitonina, y dónde se ubica?",
    "opts": [
      "Célula parafolicular, entre los folículos y sin contacto con el coloide, que baja la calcemia.",
      "Célula folicular, que contacta el coloide del folículo y produce T3 y T4 para el metabolismo basal.",
      "Célula principal de la paratiroides, que sube la calcemia al liberar PTH hacia la sangre.",
      "Célula parafolicular, ubicada dentro del folículo y en contacto con el coloide, que sube la calcemia."
    ],
    "ans": 0,
    "expl": "La calcitonina la produce la célula parafolicular (célula C), entre los folículos y sin contacto con el coloide. Baja la calcemia frenando los osteoclastos. La PTH la produce la paratiroides y sube el calcio."
  },
  {
    "id": "PC14",
    "topic": "endocrino",
    "ref": "sección 16",
    "q": "¿Qué hormona de la corteza suprarrenal aumenta la glucemia al actuar sobre el hígado?",
    "opts": [
      "Adrenalina, de la médula suprarrenal, que aumenta la glucemia al actuar sobre el hígado en el estrés.",
      "Cortisol, de la corteza suprarrenal, que aumenta la glucemia al actuar sobre el hígado durante el ayuno.",
      "Aldosterona, de la corteza suprarrenal, que disminuye la glucemia al actuar sobre el riñón y el sodio.",
      "Insulina, de las células beta del páncreas, que sube la glucemia al estimular la gluconeogénesis hepática."
    ],
    "ans": 1,
    "expl": "El cortisol es de la fascicular de la corteza y sube la glucemia actuando sobre el hígado. La adrenalina es de la médula. La insulina baja la glucemia, y la aldosterona regula sodio y potasio."
  },
  {
    "id": "PC15",
    "topic": "endocrino",
    "ref": "sección 16",
    "q": "Un paciente recibe levotiroxina por hipotiroidismo. ¿Cuál es la vía de administración habitual y por qué?",
    "opts": [
      "Intravenosa, porque la T4 es hidrosoluble y no se absorbe bien en el tubo digestivo de un adulto.",
      "Subcutánea, porque la T4 es una hormona peptídica y se degrada en el estómago si se administra por boca.",
      "Cortisol, de la corteza suprarrenal, que sube la glucemia al actuar sobre el hígado en el ayuno.",
      "Oral, porque la T4 es hidrosoluble y se absorbe por la pared del estómago hacia la vena porta."
    ],
    "ans": 2,
    "expl": "Las tiroideas T3 y T4 son liposolubles, por eso se administran por vía oral y se absorben en el intestino delgado (yeyuno-íleon). Son hidrosolubles sólo las catecolaminas y los péptidos."
  },
  {
    "id": "PC16",
    "topic": "nervioso",
    "ref": "sección 17",
    "q": "¿Qué lóbulo cerebral contiene el área somatosensorial primaria, que procesa el tacto, el dolor y la temperatura?",
    "opts": [
      "Frontal, que contiene el área de Broca y la planificación de los movimientos voluntarios del cuerpo.",
      "Temporal, que contiene el área de Wernicke y la percepción de los sonidos y la audición.",
      "Occipital, que recibe la información visual desde el tálamo y la interpreta en la corteza.",
      "Parietal, detrás de la cisura central, que procesa el tacto, el dolor y la temperatura del cuerpo."
    ],
    "ans": 3,
    "expl": "El área somatosensorial primaria está en el lóbulo parietal, detrás de la cisura central. Broca está en el frontal, Wernicke en el temporal y la corteza visual en el occipital."
  },
  {
    "id": "PC17",
    "topic": "nervioso",
    "ref": "sección 17",
    "q": "¿Qué función cumplen los oligodendrocitos, y en qué compartimento actúan?",
    "opts": [
      "Mielinizan los axones del sistema nervioso central, y en el periférico la hacen las células de Schwann.",
      "Fagocitan desechos en el sistema nervioso central y forman la cicatriz tras una lesión de la médula.",
      "Forman la barrera hematoencefálica y regulan el medio extracelular de los nervios del sistema periférico.",
      "Mielinizan los axones del sistema periférico, junto con las células satélite de los ganglios raquídeos."
    ],
    "ans": 0,
    "expl": "Los oligodendrocitos elaboran la mielina de los axones del SNC. En el SNP la mielina la hacen las células de Schwann. La microglía fagocita, y los astrocitos forman la cicatriz y la barrera hematoencefálica."
  },
  {
    "id": "PC18",
    "topic": "nervioso",
    "ref": "sección 17",
    "q": "¿Qué consecuencia tiene que una fibra nerviosa sea mielínica en cuanto a la conducción del impulso?",
    "opts": [
      "La velocidad de conducción es menor, porque el impulso se detiene en cada nodo de Ranvier para regenerarse.",
      "La velocidad aumenta porque el impulso salta de nodo a nodo, y la mielina reduce la pérdida de corriente.",
      "La velocidad no cambia, porque el calibre del axón es el único factor que determina la conducción nerviosa.",
      "La velocidad es igual en todas las fibras, porque la conducción depende sólo del potencial de reposo."
    ],
    "ans": 1,
    "expl": "En la fibra mielínica el impulso salta de nodo a nodo (conducción saltatoria), y la mielina reduce la pérdida de corriente. La velocidad es mayor que en la amielínica, y además sube con el calibre."
  },
  {
    "id": "PC19",
    "topic": "bioingenieria",
    "ref": "sección 18",
    "q": "Para modelar un epitelio de absorción intestinal, ¿qué estructura amplifica el área de absorción en el tercer nivel de la superficie?",
    "opts": [
      "Pliegues circulares, rebordes permanentes de la mucosa y la submucosa que enlentecen el paso del quimo.",
      "Vellosidades, proyecciones digitiformes de la mucosa, cada una con un asa capilar y un vaso quilífero.",
      "Microvellosidades del borde en cepillo, prolongaciones de la membrana apical de cada enterocito.",
      "Criptas de Lieberkühn, invaginaciones que secretan lisozima y defensinas para el control bacteriano."
    ],
    "ans": 2,
    "expl": "Los tres niveles son pliegues circulares, vellosidades y microvellosidades. Cada uno multiplica al anterior. Las microvellosidades forman el borde en cepillo, donde están las enzimas de membrana. Las criptas no son un nivel de amplificación."
  },
  {
    "id": "PC20",
    "topic": "bioingenieria",
    "ref": "sección 18",
    "q": "Un andamio renal sin células filtra plasma, pero retiene poca albúmina. ¿Qué componente de la barrera de filtración falta para retenerla?",
    "opts": [
      "La reabsorción por transportadores de Na+/K+ en el túbulo proximal, que recupera la albúmina filtrada.",
      "La presión osmótica de la orina, que impide el paso de la albúmina hacia el espacio capsular.",
      "La matriz de colágeno tipo I, que sólo aporta resistencia a la tracción y no participa de la filtración.",
      "La barrera de carga y las hendiduras de filtración de los podocitos, que retienen las proteínas grandes."
    ],
    "ans": 3,
    "expl": "La albúmina la retienen la barrera de tamaño y de carga de la membrana de filtración, y las hendiduras de filtración de los podocitos. El andamio conserva la membrana basal, pero sin podocitos hay filtración libre. El transporte tubular no actúa en el glomérulo."
  }
],
  dev: [
  {
    "id": "DV1",
    "topic": "endocrino",
    "src": "guia",
    "ref": "sección 16",
    "q": "Explique por qué en un hipotiroidismo primario la TSH está elevada, y qué cambiaría si la falla fuera secundaria. Justifique usando el eje de retroalimentación.",
    "checklist": [
      "La tiroides no produce suficiente T3 y T4.",
      "Sin T3 y T4 no hay retroalimentación negativa sobre la hipófisis y el hipotálamo.",
      "La hipófisis aumenta la secreción de TSH para compensar.",
      "En el secundario la falla está en la hipófisis: la TSH no sube, queda baja o inadecuadamente normal, y la T4 sigue baja.",
      "Justifica con el eje tiroideo: TRH → TSH → T3/T4 con retroalimentación negativa."
    ],
    "modelo": "En el hipotiroidismo primario la glándula no produce suficiente T4 y T3. Como esas hormonas ya no ejercen retroalimentación negativa sobre la hipófisis, la TSH sube. En el secundario la hipófisis no libera TSH, así que la TSH queda baja o normal inadecuadamente, mientras la T4 está baja.",
    "justificacion": "Lo que decide la localización es la dirección de la hormona trófica respecto de la periférica. Primario: periférica baja y trófica alta. Secundario: periférica y trófica bajas."
  },
  {
    "id": "DV2",
    "topic": "digestivo",
    "src": "guia",
    "ref": "sección 14",
    "q": "Describa el recorrido de la bilis desde que se produce en el hígado hasta que llega al duodeno, y diga dónde se almacena y concentra.",
    "checklist": [
      "Conductos hepáticos derecho e izquierdo que se unen en el conducto hepático común.",
      "Conducto cístico que trae la bilis desde la vesícula, donde se almacena y concentra.",
      "Conducto colédoco, formado por la unión del hepático común y el cístico.",
      "Desembocadura en la segunda porción del duodeno.",
      "Justifica: las sales biliares emulsionan grasas; no las digieren."
    ],
    "modelo": "La bilis se produce en el hígado y sale por los conductos hepáticos derecho e izquierdo, que se unen en el conducto hepático común. Ese conducto se une al cístico, que viene de la vesícula biliar, donde la bilis se almacena y concentra. Así se forma el colédoco, que desemboca en la segunda porción del duodeno.",
    "justificacion": "Las sales biliares emulsionan las grasas para que la lipasa pancreática pueda actuar; no las digieren. Por eso su llegada al duodeno es clave."
  },
  {
    "id": "DV3",
    "topic": "circulatorio",
    "src": "guia",
    "ref": "sección 13",
    "q": "Enumere en orden el sistema de conducción cardíaca y explique por qué el nódulo AV introduce un retraso.",
    "checklist": [
      "Nódulo sinoauricular (SA), luego nódulo AV, haz de His, ramas derecha e izquierda y fibras de Purkinje.",
      "El nódulo SA es el marcapasos natural.",
      "El retraso en el nódulo AV deja que las aurículas terminen de vaciarse antes de que se contraigan los ventrículos.",
      "El haz de His es la única vía eléctrica entre aurículas y ventrículos.",
      "Relaciona con el ECG: la onda P, el intervalo P-Q (con el retraso) y el complejo QRS."
    ],
    "modelo": "El orden es: nódulo SA → nódulo AV → haz de His → ramas derecha e izquierda → fibras de Purkinje. El nódulo AV introduce un retraso para que las aurículas terminen de vaciarse antes de la contracción ventricular. Es el único puente eléctrico entre aurículas y ventrículos, por eso ese retraso se refleja en el intervalo P-Q del ECG.",
    "justificacion": "Sin ese retraso, la contracción auricular y la ventricular serían casi simultáneas y el llenado ventricular sería menos eficiente."
  },
  {
    "id": "DV4",
    "topic": "respiratorio",
    "src": "guia",
    "ref": "sección 12",
    "q": "Describa la pleura parietal, la pleura visceral y la cavidad pleural, y explique qué pasa en un neumotórax.",
    "checklist": [
      "Pleura parietal: tapiza costillas, diafragma y mediastino.",
      "Pleura visceral: pegada al pulmón; entra en las fisuras.",
      "Cavidad pleural: espacio entre ambas hojas, con una película de líquido que reduce la fricción.",
      "Neumotórax: entra aire a la cavidad, las hojas se separan y el pulmón colapsa por retroceso elástico.",
      "Justifica: el colapso ocurre aunque la vía aérea esté permeable."
    ],
    "modelo": "La pleura parietal tapiza la pared torácica, el diafragma y el mediastino; la visceral recubre el pulmón y entra en las fisuras. Entre ambas hay una cavidad con una película de líquido que reduce la fricción y, por tensión superficial, mantiene las hojas unidas. Si entra aire (neumotórax), las hojas se separan y el pulmón colapsa por su retroceso elástico.",
    "justificacion": "El pulmón se mantiene expandido por la presión negativa de la cavidad pleural. Al perderla, se colapsa aunque la vía aérea siga abierta."
  },
  {
    "id": "DV5",
    "topic": "bioingenieria",
    "src": "guia",
    "ref": "sección 18",
    "q": "Un constructo de alginato con Ca²⁺ pierde estradiol a partir del día 40. Explique qué hipótesis plantean los autores sobre la falla y qué cambio de diseño la resolvió.",
    "checklist": [
      "La falla es del material, no de las células.",
      "El Ca²⁺ precipita con el tiempo y el alginato se calcifica (mineraliza).",
      "El constructo se endurece y compromete la difusión de nutrientes y hormonas.",
      "El cambio que lo resolvió fue reemplazar el Ca²⁺ por Sr²⁺, que mantiene el estradiol estable 90 días sin calcificación.",
      "Justifica: si un constructo falla con el tiempo, sospechar primero del andamio."
    ],
    "modelo": "Los autores atribuyen la caída de estradiol a la calcificación del alginato entrelazado con Ca²⁺: el calcio precipita y el constructo se endurece, comprometiendo la difusión. El cambio que lo resolvió fue usar Sr²⁺ como entrecruzante, con estradiol estable durante 90 días y sin calcificación.",
    "justificacion": "Diagnóstico por eliminación: si las células son sanas (progesterona, FSH y LH sin cambios) y la hormona cae, la falla está en el material que las rodea."
  }
]
};
