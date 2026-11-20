// Bancos de parcial simulado. Cada parcial: 20 opción múltiple y 5 de desarrollo.
// mc: 4 opciones, ans = índice de la correcta, why = justificación de cada opción (mismo orden que opts).
// dev: consigna con checklist de puntos clave, respuesta modelo y justificación.

const PARCIALES = [
  {
    "id": "p1",
    "nombre": "Parcial 1",
    "mc": [
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
        "expl": "El bronquio principal derecho es más vertical, corto y ancho, y por eso recibe con más frecuencia los cuerpos aspirados. El izquierdo es más largo y horizontal, pasa por debajo del arco de la aorta y da dos lobares. El derecho da tres.",
        "why": [
          "Correcta: el derecho es más vertical, corto y ancho, por eso recibe con más frecuencia los cuerpos aspirados.",
          "Descartada: el izquierdo es más largo y horizontal, no más vertical; la frase invierte las características de los dos bronquios.",
          "Descartada: es al revés. El derecho es el corto y vertical; el izquierdo es el largo y horizontal, y pasa por debajo del arco de la aorta.",
          "Descartada: el izquierdo da dos bronquios lobares y el derecho tres; los lobares corresponden a los lóbulos de cada pulmón."
        ]
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
        "expl": "La película de líquido que tapiza el alvéolo genera tensión superficial, que tiende a colapsarlo. El surfactante la baja y evita el colapso al final de la espiración. Sin surfactante aparece el síndrome de dificultad respiratoria del prematuro.",
        "why": [
          "Descartada: la presión intrapleural es negativa, no positiva, y actúa sobre el pulmón por fuera de los alvéolos; no es lo que los colapsa.",
          "Correcta: la tensión superficial del líquido alveolar tiende a colapsar el alvéolo, y el surfactante la reduce; sin surfactante suficiente, el alvéolo colapsa en la espiración.",
          "Descartada: el déficit de surfactante aumenta la tensión superficial y reduce la distensibilidad, no la aumenta.",
          "Descartada: la vía aérea está permeable en este cuadro; la resistencia no explica el colapso alveolar."
        ]
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
        "expl": "Al aumentar el volumen torácico, la presión alveolar cae unos 2 mmHg por debajo de la atmosférica, hasta 758, y entra aire. En la espiración tranquila sube a 762. La presión intrapleural de unos 756 mmHg no iguala a la alveolar.",
        "why": [
          "Descartada: 762 mmHg es la presión alveolar en la espiración tranquila, no en la inspiración.",
          "Descartada: 756 mmHg es la presión intrapleural, que siempre es subatmosférica y no es la presión alveolar.",
          "Correcta: al aumentar el volumen torácico, la presión alveolar cae unos 2 mmHg por debajo de la atmosférica, hasta 758, y entra aire.",
          "Descartada: en la inspiración la presión alveolar sí cambia y baja; si no cambiara, el aire no entraría."
        ]
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
        "expl": "La aorta sale del ventrículo izquierdo por la válvula aórtica con sangre oxigenada. La tricúspide es la válvula derecha, y la mitral la que separa la aurícula izquierda del ventrículo izquierdo, no la que sale hacia la aorta.",
        "why": [
          "Descartada: la aorta sale del ventrículo izquierdo; la tricúspide es la válvula derecha, y la aorta no nace del ventrículo derecho.",
          "Descartada: la mitral separa la aurícula izquierda del ventrículo izquierdo; la salida hacia la aorta es por la válvula aórtica.",
          "Descartada: la aorta no nace de la aurícula; las venas pulmonares llegan a la aurícula izquierda, no salen hacia la aorta.",
          "Correcta: la aorta nace del ventrículo izquierdo por la válvula aórtica y lleva sangre oxigenada a todo el cuerpo."
        ]
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
        "expl": "En la contracción isovolumétrica las cuatro válvulas están cerradas, sube la presión y el volumen no cambia. En la relajación isovolumétrica también están cerradas, pero la presión baja. En el llenado, las AV están abiertas.",
        "why": [
          "Correcta: en la contracción isovolumétrica las cuatro válvulas están cerradas, la presión sube y el volumen no cambia.",
          "Descartada: en la sístole auricular las AV están abiertas y las sigmoideas cerradas; además el volumen de la aurícula sí cambia.",
          "Descartada: en la eyección las sigmoideas están abiertas y el volumen ventricular disminuye, así que no hay isovolumetría.",
          "Descartada: en el llenado las AV están abiertas y el volumen aumenta; no hay válvulas cerradas."
        ]
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
        "expl": "La poscarga es la presión que hay que superar para abrir las sigmoideas. Si sube, el volumen sistólico baja. Es lo que pasa con la hipertensión. El aumento de precarga es el que sube el volumen sistólico, por Frank-Starling.",
        "why": [
          "Descartada: la poscarga es la presión que hay que vencer; si sube, el volumen sistólico baja, no aumenta.",
          "Correcta: con más presión que vencer para abrir las sigmoideas, el volumen sistólico disminuye en cada latido.",
          "Descartada: el volumen sistólico sí depende de la poscarga; la frecuencia no es el único factor.",
          "Descartada: la contractilidad y el estiramiento de las fibras son otros determinantes; el estiramiento corresponde a la precarga, no a la poscarga."
        ]
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
        "expl": "La vesícula sólo almacena bilis. Sin ella, la bilis llega desde el hígado por el hepático común, que se continúa como colédoco, y sale junto con el conducto pancreático por la papila duodenal mayor, en la segunda porción del duodeno. El cístico no llega al duodeno.",
        "why": [
          "Descartada: el cístico se une al hepático común y no llega al duodeno, y además se extirpa con la vesícula.",
          "Descartada: el hepático derecho se une al hepático izquierdo para formar el hepático común, no al conducto pancreático dentro del páncreas.",
          "Correcta: sin vesícula, la bilis llega desde el hígado por el hepático común, que se continúa como colédoco y desemboca en la papila duodenal mayor.",
          "Descartada: el conducto pancreático lleva jugo pancreático, no bilis, y desemboca en la segunda porción del duodeno, no en la primera."
        ]
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
        "expl": "El MALT está en la lámina propia y monta la respuesta inmunitaria donde el cuerpo está más expuesto. Las placas de Peyer son folículos del íleon, no del duodeno. Los plexos mientérico y submucoso son del sistema nervioso entérico.",
        "why": [
          "Descartada: el plexo mientérico es nervioso (sistema nervioso entérico) y regula la motilidad, no tiene folículos linfáticos.",
          "Descartada: las placas de Peyer están en el íleon, no en el duodeno, y no secretan jugo pancreático.",
          "Descartada: el plexo submucoso es nervioso y regula la secreción y la vasoconstricción; no es tejido linfático.",
          "Correcta: el MALT es el tejido linfático asociado a mucosas, con folículos prominentes en la lámina propia."
        ]
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
        "expl": "Las sales biliares emulsionan las grasas: es digestión mecánica, sin actividad enzimática. Después actúa la lipasa pancreática, que rompe los triglicéridos. La tripsina actúa sobre proteínas, la amilasa sobre almidón y el ácido gástrico no digiere grasas.",
        "why": [
          "Correcta: la bilis emulsiona las grasas con sus sales biliares, es digestión mecánica, y multiplica la superficie para que actúe la lipasa pancreática.",
          "Descartada: el ácido clorhídrico no emulsiona grasas; actúa sobre proteínas y activa el pepsinógeno.",
          "Descartada: la amilasa salival actúa sobre el almidón, no sobre los lípidos.",
          "Descartada: la tripsina actúa sobre proteínas, no sobre triglicéridos; la lipasa es la que rompe los triglicéridos."
        ]
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
        "expl": "La uretra femenina mide unos 4 cm y se abre cerca del ano, con un trayecto corto desde el exterior hasta la vejiga. La masculina mide unos 20 cm. El trígono sí tiene mucosa, lisa y firmemente adherida.",
        "why": [
          "Descartada: el urotelio es un epitelio de transición grueso y resistente, no es la razón de la mayor incidencia.",
          "Correcta: la uretra femenina es corta y se abre cerca del ano, así que las bacterias recorren un trayecto breve hasta la vejiga.",
          "Descartada: el trígono sí tiene mucosa, lisa y adherida a la capa muscular, y no deja pasar bacterias.",
          "Descartada: la glucosa no está en la orina normal, y su presencia no explica por qué la uretra femenina se infecta más."
        ]
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
        "expl": "En el túbulo contorneado distal, cúbico simple sin borde en cepillo, la PTH regula la reabsorción de Ca2+. El proximal reabsorbe la mayor parte del agua y del Na+. La rama delgada del asa es impermeable a solutos.",
        "why": [
          "Descartada: el túbulo proximal reabsorbe la mayor parte del agua y del sodio, pero la regulación de la reabsorción de calcio por PTH ocurre en el distal.",
          "Descartada: la rama descendente delgada es impermeable a solutos y no regula el calcio.",
          "Correcta: el túbulo contorneado distal, cúbico simple sin borde en cepillo, es donde la PTH regula la reabsorción de Ca2+.",
          "Descartada: el colector regula sodio y potasio por aldosterona; la vejiga no forma parte de la nefrona."
        ]
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
        "expl": "La renina convierte el angiotensinógeno en angiotensina I, que luego pasa a II en los pulmones. La angiotensina II produce vasoconstricción de la eferente y estimula la aldosterona, que retiene Na+ y agua. El ANP es el sistema opuesto.",
        "why": [
          "Descartada: el péptido natriurético atrial hace lo contrario: aumenta la diuresis y baja el volumen y la presión.",
          "Descartada: la calcitonina regula el calcio, no la presión ni el volumen.",
          "Descartada: la eritropoyetina regula la producción de glóbulos rojos; no actúa sobre la arteriola eferente ni sobre el volumen.",
          "Correcta: el sistema renina-angiotensina-aldosterona genera angiotensina II, que contrae la eferente, y aldosterona, que retiene sodio y agua."
        ]
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
        "expl": "La calcitonina la produce la célula parafolicular (célula C), entre los folículos y sin contacto con el coloide. Baja la calcemia frenando los osteoclastos. La PTH la produce la paratiroides y sube el calcio.",
        "why": [
          "Correcta: la célula parafolicular (C) produce calcitonina, está entre los folículos sin contacto con el coloide, y baja la calcemia.",
          "Descartada: la célula folicular produce T3 y T4, no calcitonina.",
          "Descartada: la paratiroides produce PTH, que sube la calcemia; la calcitonina la produce la tiroides y hace lo contrario.",
          "Descartada: la parafolicular no contacta el coloide, y la calcitonina baja la calcemia, no la sube."
        ]
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
        "expl": "El cortisol es de la fascicular de la corteza y sube la glucemia actuando sobre el hígado. La adrenalina es de la médula. La insulina baja la glucemia, y la aldosterona regula sodio y potasio.",
        "why": [
          "Descartada: la adrenalina viene de la médula suprarrenal, no de la corteza, y actúa sobre la respuesta de lucha o huida.",
          "Correcta: el cortisol de la zona fasciculada de la corteza eleva la glucemia actuando sobre el hígado, sobre todo en el ayuno.",
          "Descartada: la aldosterona regula el sodio y el potasio, no la glucemia.",
          "Descartada: la insulina es pancreática y baja la glucemia; no es una hormona de la corteza suprarrenal."
        ]
      },
      {
        "id": "PC15",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "Un paciente recibe levotiroxina por hipotiroidismo. ¿Cuál es la vía de administración habitual y por qué?",
        "opts": [
          "Intravenosa, porque la T4 es hidrosoluble y no se absorbe bien en el tubo digestivo de un adulto.",
          "Subcutánea, porque la T4 es una hormona peptídica y se degrada en el estómago si se administra por boca.",
          "Oral, porque la T4 es liposoluble y se absorbe en el yeyuno e íleon, sin depender de receptores de membrana.",
          "Oral, porque la T4 es hidrosoluble y se absorbe por la pared del estómago hacia la vena porta."
        ],
        "ans": 2,
        "expl": "Las tiroideas T3 y T4 son liposolubles, por eso se administran por vía oral y se absorben en el intestino delgado (yeyuno-íleon). Son hidrosolubles sólo las catecolaminas y los péptidos.",
        "why": [
          "Descartada: la T4 es liposoluble y se administra por vía oral; la vía intravenosa no es la habitual.",
          "Descartada: la T4 no es una hormona peptídica; es una tiroidea liposoluble que no se degrada en el estómago.",
          "Correcta: T3 y T4 son liposolubles, por eso se administran por vía oral y se absorben en el yeyuno e íleon.",
          "Descartada: la T4 es liposoluble, no hidrosoluble, y se absorbe en el intestino delgado, no por la pared del estómago."
        ]
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
        "expl": "El área somatosensorial primaria está en el lóbulo parietal, detrás de la cisura central. Broca está en el frontal, Wernicke en el temporal y la corteza visual en el occipital.",
        "why": [
          "Descartada: el lóbulo frontal contiene Broca y la planificación motora; no es el área somatosensorial.",
          "Descartada: el lóbulo temporal contiene Wernicke y procesa la audición, no el tacto ni el dolor.",
          "Descartada: el lóbulo occipital procesa la información visual, no la sensibilidad somática.",
          "Correcta: el área somatosensorial primaria está en el lóbulo parietal, detrás de la cisura central."
        ]
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
        "expl": "Los oligodendrocitos elaboran la mielina de los axones del SNC. En el SNP la mielina la hacen las células de Schwann. La microglía fagocita, y los astrocitos forman la cicatriz y la barrera hematoencefálica.",
        "why": [
          "Correcta: los oligodendrocitos mielinizan en el SNC, y en el SNP la mielina la hacen las células de Schwann.",
          "Descartada: la microglía es la que fagocita; los astrocitos son los que forman la cicatriz.",
          "Descartada: la barrera hematoencefálica la forman los astrocitos, y los oligodendrocitos no regulan el SNP.",
          "Descartada: en el SNP la mielina la hacen las células de Schwann, no los oligodendrocitos ni las satélite."
        ]
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
        "expl": "En la fibra mielínica el impulso salta de nodo a nodo (conducción saltatoria), y la mielina reduce la pérdida de corriente. La velocidad es mayor que en la amielínica, y además sube con el calibre.",
        "why": [
          "Descartada: la conducción saltatoria es más rápida, no más lenta; el impulso salta de nodo en nodo.",
          "Correcta: el impulso salta de nodo de Ranvier a nodo, y la mielina reduce la pérdida de corriente, así que la velocidad aumenta.",
          "Descartada: el calibre influye, pero la mielina también; la conducción no depende sólo del calibre.",
          "Descartada: la velocidad varía con la mielinización y el calibre; no es igual en todas las fibras."
        ]
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
        "expl": "Los tres niveles son pliegues circulares, vellosidades y microvellosidades. Cada uno multiplica al anterior. Las microvellosidades forman el borde en cepillo, donde están las enzimas de membrana. Las criptas no son un nivel de amplificación.",
        "why": [
          "Descartada: los pliegues circulares son el primer nivel de amplificación, de milímetros, no el tercero.",
          "Descartada: las vellosidades son el segundo nivel, no el tercero.",
          "Correcta: las microvellosidades son el tercer nivel, evaginaciones de la membrana apical de cada enterocito que forman el borde en cepillo.",
          "Descartada: las criptas secretan lisozima y defensinas, no amplifican el área de absorción."
        ]
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
        "expl": "La albúmina la retienen la barrera de tamaño y de carga de la membrana de filtración, y las hendiduras de filtración de los podocitos. El andamio conserva la membrana basal, pero sin podocitos hay filtración libre. El transporte tubular no actúa en el glomérulo.",
        "why": [
          "Descartada: la reabsorción tubular ocurre después del glomérulo; el problema del andamio está en la filtración, donde faltan los podocitos.",
          "Descartada: la presión osmótica de la orina no forma parte de la barrera de filtración.",
          "Descartada: la matriz de colágeno y la membrana basal se conservan en el andamio; lo que falta son los podocitos que retienen la albúmina.",
          "Correcta: la barrera de carga y las hendiduras de filtración de los podocitos son las que retienen la albúmina; sin ellos hay filtración libre."
        ]
      }
    ],
    "dev": [
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
  },
  {
    "id": "p2",
    "nombre": "Parcial 2",
    "mc": [
      {
        "id": "P2-1",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "Durante la maniobra de Valsalva, ¿qué estructuras de la laringe se cierran?",
        "opts": [
          "Los pliegues vestibulares, o cuerdas falsas, que se cierran y retienen la respiración.",
          "Los pliegues vocales, que se separan por la rima glótica para dejar pasar el aire.",
          "La epiglotis, que sólo se cierra durante la deglución y no en el esfuerzo.",
          "Los cartílagos aritenoides, que se alejan entre sí para ampliar la vía aérea."
        ],
        "why": [
          "Correcta: los pliegues vestibulares retienen la respiración y se cierran en la maniobra de Valsalva, como al defecar o levantar peso.",
          "Descartada: los pliegues vocales son los que vibran y se separan en la respiración normal; no son los que se cierran en Valsalva.",
          "Descartada: la epiglotis bascula durante la deglución para proteger la entrada laríngea; no es la que cierra en el esfuerzo.",
          "Descartada: los aritenoides mueven las cuerdas vocales, pero no se alejan para ampliar la vía en la maniobra."
        ],
        "ans": 0,
        "expl": "En la maniobra de Valsalva se cierran los pliegues vestibulares: la espiración forzada queda contra la rima glótica cerrada."
      },
      {
        "id": "P2-2",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "¿Qué tipo de epitelio tapiza la nasofaringe y qué función respiratoria cumple?",
        "opts": [
          "Plano estratificado no queratinizado, que es de desgaste y se descama con la fricción.",
          "Cilíndrico seudoestratificado ciliado, con caliciformes, que atrapa partículas con moco.",
          "Cúbico simple con microvellosidades, que absorbe los nutrientes del aire inspirado.",
          "Cilíndrico simple con microvellosidades, que secreta enzimas para digerir el polvo."
        ],
        "why": [
          "Descartada: el epitelio plano estratificado es de la orofaringe y la laringofaringe, que son vías digestivas y respiratorias a la vez.",
          "Correcta: la nasofaringe es respiratoria, con epitelio cilíndrico seudoestratificado ciliado con caliciformes que atrapa partículas.",
          "Descartada: el epitelio con microvellosidades es intestinal; el aire no tiene nutrientes que se absorban en la vía aérea.",
          "Descartada: el epitelio cilíndrico con microvellosidades es del intestino delgado, no de la vía aérea."
        ],
        "ans": 1,
        "expl": "La nasofaringe es respiratoria: epitelio cilíndrico seudoestratificado ciliado con caliciformes. La orofaringe y la laringofaringe son de epitelio plano estratificado."
      },
      {
        "id": "P2-3",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "Al inspirar tranquilamente, ¿qué ocurre con la presión intrapleural?",
        "opts": [
          "Se vuelve positiva y empuja el pulmón hacia el interior de la cavidad torácica.",
          "Se iguala con la presión atmosférica, y el pulmón deja de expandirse en la inspiración.",
          "Se vuelve más negativa, de unos 756 a unos 754 mmHg, y eso mantiene el pulmón expandido.",
          "No cambia, porque la presión intrapleural es siempre igual a la alveolar durante la respiración."
        ],
        "why": [
          "Descartada: la presión intrapleural nunca se vuelve positiva en la respiración normal; si lo hiciera, el pulmón colapsaría.",
          "Descartada: la presión intrapleural nunca se iguala con la atmosférica; si lo hiciera, el pulmón colapsaría.",
          "Correcta: la presión intrapleural es subatmosférica en reposo y baja un poco más en la inspiración; esa tracción mantiene el pulmón expandido.",
          "Descartada: la intrapleural no se iguala a la alveolar; por eso el pulmón se mantiene expandido."
        ],
        "ans": 2,
        "expl": "La presión intrapleural es siempre subatmosférica y baja un poco más al inspirar (de 756 a 754 mmHg). Esa presión negativa es lo que mantiene el pulmón abierto."
      },
      {
        "id": "P2-4",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "¿Qué válvula separa el ventrículo derecho del tronco pulmonar?",
        "opts": [
          "La válvula tricúspide, que separa la aurícula derecha del ventrículo derecho.",
          "La válvula mitral, que separa la aurícula izquierda del ventrículo izquierdo.",
          "La válvula aórtica, que separa el ventrículo izquierdo de la aorta ascendente.",
          "La válvula pulmonar, una sigmoidea que regula la salida del ventrículo derecho."
        ],
        "why": [
          "Descartada: la tricúspide está entre la aurícula derecha y el ventrículo derecho, no hacia el tronco pulmonar.",
          "Descartada: la mitral es la auriculoventricular izquierda, entre la aurícula y el ventrículo izquierdos.",
          "Descartada: la aórtica está del lado izquierdo, entre el ventrículo izquierdo y la aorta.",
          "Correcta: la pulmonar es una sigmoidea de tres valvas entre el ventrículo derecho y el tronco pulmonar."
        ],
        "ans": 3,
        "expl": "La válvula pulmonar es sigmoidea, de tres valvas, y regula la salida del ventrículo derecho al tronco pulmonar."
      },
      {
        "id": "P2-5",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "¿Qué relación describe correctamente el gasto cardíaco?",
        "opts": [
          "Gasto cardíaco igual a volumen sistólico multiplicado por la frecuencia cardíaca.",
          "Gasto cardíaco igual a presión arterial dividida por la resistencia periférica.",
          "Gasto cardíaco igual a volumen de fin de sístole menos volumen de fin de diástole.",
          "Gasto cardíaco igual a la reserva cardíaca más el volumen sistólico del reposo."
        ],
        "why": [
          "Correcta: el gasto cardíaco es el volumen expulsado por minuto, igual al volumen sistólico multiplicado por la frecuencia.",
          "Descartada: la presión dividida por la resistencia es la fórmula del flujo, pero no define el gasto cardíaco de un ventrículo.",
          "Descartada: esa diferencia es el volumen sistólico, no el gasto cardíaco.",
          "Descartada: la reserva cardíaca es la diferencia entre el gasto máximo y el de reposo, no una suma."
        ],
        "ans": 0,
        "expl": "GC = VS × FC. El volumen sistólico es la diferencia entre el volumen de fin de diástole y el de fin de sístole."
      },
      {
        "id": "P2-6",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "En la circulación en serie de los dos circuitos, ¿qué debe ocurrir con los volúmenes que expulsan los dos ventrículos?",
        "opts": [
          "El ventrículo izquierdo debe expulsar mucho más, porque el circuito sistémico ocupa más volumen.",
          "Deben ser iguales en promedio, porque los dos circuitos están conectados en serie.",
          "El ventrículo derecho debe expulsar más, porque el circuito pulmonar tiene mayor resistencia.",
          "Deben ser diferentes según la frecuencia de cada ciclo, sin relación entre ellos."
        ],
        "why": [
          "Descartada: el ventrículo izquierdo expulsa el mismo volumen que el derecho; lo que cambia es la presión, no el volumen.",
          "Correcta: como los circuitos están en serie, un desbalance sostenido de unos pocos mililitros por latido vaciaría un circuito y congestionaría el otro.",
          "Descartada: el circuito pulmonar tiene baja resistencia; el derecho no necesita expulsar más volumen.",
          "Descartada: los volúmenes deben ser iguales en promedio; si no lo fueran, uno de los circuitos se congestionaría."
        ],
        "ans": 1,
        "expl": "El corazón bombea a los dos circuitos en serie, así que los volúmenes de los dos ventrículos deben ser iguales en promedio."
      },
      {
        "id": "P2-7",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿Qué estructura separa el estómago del duodeno?",
        "opts": [
          "El cardias, que es la entrada del estómago desde el esófago.",
          "El ligamento falciforme, que fija el hígado a la pared abdominal anterior.",
          "El píloro, con el esfínter pilórico que regula el paso del quimo.",
          "La válvula ileocecal, que separa el intestino delgado del colon."
        ],
        "why": [
          "Descartada: el cardias es la entrada del estómago, desde el esófago, no la salida.",
          "Descartada: el ligamento falciforme fija el hígado; no separa ningún órgano del tubo digestivo.",
          "Correcta: el píloro, con su esfínter, separa el estómago del duodeno y regula el paso del quimo en chorros.",
          "Descartada: la válvula ileocecal separa el intestino delgado del colon, no el estómago del duodeno."
        ],
        "ans": 2,
        "expl": "El píloro, con el esfínter pilórico, separa el estómago del duodeno y regula el paso del quimo."
      },
      {
        "id": "P2-8",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿Cuál es la función principal de las vellosidades del intestino delgado?",
        "opts": [
          "Secretar moco para proteger la mucosa de la acidez gástrica.",
          "Digerir las proteínas del quimo mediante enzimas de su superficie.",
          "Producir la motilidad que mezcla el quimo con las secreciones.",
          "Absorber los nutrientes digeridos hacia la sangre y la linfa."
        ],
        "why": [
          "Descartada: el moco lo secretan las células caliciformes y las glándulas de Brunner, no es función de las vellosidades.",
          "Descartada: la digestión de proteínas la hacen las enzimas pancreáticas y de borde en cepillo; las vellosidades absorben, no digieren.",
          "Descartada: la motilidad la da la muscular de la pared, no las vellosidades.",
          "Correcta: la función principal de las vellosidades es la absorción, con la asa capilar y el vaso quilífero central."
        ],
        "ans": 3,
        "expl": "Las vellosidades son la principal superficie de absorción del intestino delgado. Cada una tiene un asa capilar y un vaso quilífero central."
      },
      {
        "id": "P2-9",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿Qué función cumple el hígado con el amoníaco que se forma al desaminar los aminoácidos?",
        "opts": [
          "Lo convierte en urea, mucho menos tóxica, que se excreta por la orina.",
          "Lo almacena en el glucógeno del hepatocito hasta que lo necesite el músculo.",
          "Lo transforma en bilirrubina, que se excreta en la bilis sin modificaciones.",
          "Lo elimina directamente por la vena porta sin ninguna transformación."
        ],
        "why": [
          "Correcta: el hígado convierte el amoníaco tóxico en urea, que se excreta por el riñón.",
          "Descartada: el amoníaco no se almacena en el glucógeno; el glucógeno es un depósito de glucosa.",
          "Descartada: la bilirrubina viene de la degradación del hemo, no del amoníaco.",
          "Descartada: el amoníaco no se elimina sin transformación; el hígado lo convierte en urea."
        ],
        "ans": 0,
        "expl": "El amoníaco es tóxico. El hígado lo convierte en urea, que se excreta por la orina."
      },
      {
        "id": "P2-10",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "¿Qué parte de la nefrona realiza la filtración del plasma?",
        "opts": [
          "El túbulo contorneado proximal, con su borde en cepillo denso.",
          "El corpúsculo renal, formado por el glomérulo y la cápsula glomerular.",
          "El conducto colector, que recibe el filtrado ya formado de todas las nefronas.",
          "La rama ascendente del asa de Henle, que concentra el filtrado en la médula."
        ],
        "why": [
          "Descartada: el túbulo proximal reabsorbe y secreta, pero no filtra el plasma.",
          "Correcta: la filtración ocurre en el corpúsculo renal, entre el glomérulo y la cápsula de Bowman.",
          "Descartada: el colector recibe el filtrado y regula el agua, pero no es el lugar donde se filtra.",
          "Descartada: la rama ascendente diluye el filtrado y no lo filtra."
        ],
        "ans": 1,
        "expl": "El corpúsculo renal, con el glomérulo y la cápsula glomerular, es donde se filtra el plasma. El resto de la nefrona modifica el filtrado."
      },
      {
        "id": "P2-11",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "¿Qué células del glomérulo son contráctiles y reducen la superficie disponible para filtrar?",
        "opts": [
          "Los podocitos, que forman las hendiduras de filtración con sus pedicelos.",
          "Las células endoteliales fenestradas, que forman los poros del capilar glomerular.",
          "Las células mesangiales, que son contráctiles y fagocíticas entre los capilares.",
          "Las células parietales de la cápsula, que tapizan el espacio capsular."
        ],
        "why": [
          "Descartada: los podocitos forman la barrera de filtración con sus pedicelos; no son contráctiles en ese sentido.",
          "Descartada: las células endoteliales forman los poros, pero no se contraen para reducir la superficie.",
          "Correcta: las células mesangiales se contraen y reducen la superficie de filtración, una tercera palanca de regulación.",
          "Descartada: las células parietales forman el revestimiento de la cápsula, no regulan la superficie de filtración."
        ],
        "ans": 2,
        "expl": "Las células mesangiales son contráctiles y fagocíticas. Al contraerse reducen la superficie disponible para filtrar."
      },
      {
        "id": "P2-12",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "¿Qué ocurre durante la reabsorción tubular?",
        "opts": [
          "Sustancias de la sangre pasan al filtrado ya formado dentro del túbulo.",
          "El plasma se filtra desde el capilar glomerular hacia el espacio capsular.",
          "El filtrado se elimina por la uretra sin modificaciones en el túbulo.",
          "Sustancias del filtrado pasan a la sangre, desde la luz del túbulo al intersticio."
        ],
        "why": [
          "Descartada: eso es la secreción tubular, que va de la sangre al filtrado ya formado.",
          "Descartada: eso es la filtración glomerular, que ocurre antes de la reabsorción.",
          "Descartada: el filtrado se modifica en todo el túbulo; no llega sin cambios a la uretra.",
          "Correcta: la reabsorción lleva sustancias del filtrado a la sangre; por eso casi todo el agua y la glucosa vuelven al cuerpo."
        ],
        "ans": 3,
        "expl": "La reabsorción es el paso del filtrado a la sangre. La secreción es el paso inverso. La filtración es el primer paso, en el glomérulo."
      },
      {
        "id": "P2-13",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "Un paciente tiene bocio, T4 elevada y TSH suprimida. ¿Qué diagnóstico es el más probable y en qué piso está la falla?",
        "opts": [
          "Hipertiroidismo primario: la tiroides produce demasiada hormona y la TSH queda suprimida.",
          "Hipotiroidismo primario: la glándula no responde a la TSH y la hipófisis la eleva al máximo.",
          "Hipotiroidismo secundario: la hipófisis no produce TSH, y por eso la T4 aparece elevada en sangre.",
          "Hipotiroidismo terciario: el hipotálamo produce TRH en exceso y frena la liberación de T4."
        ],
        "why": [
          "Correcta: T4 alta con TSH suprimida es periférica alta y trófica baja: falla la glándula, que produce de más y frena a la hipófisis.",
          "Descartada: en el hipotiroidismo primario la T4 está baja, no alta, y la TSH sube.",
          "Descartada: en el secundario la TSH está baja, pero la T4 también baja; la T4 alta no encaja con hipotiroidismo.",
          "Descartada: el terciario supone T4 y TSH bajas por falla del hipotálamo; la T4 alta descarta ese diagnóstico."
        ],
        "ans": 0,
        "expl": "T4 alta con TSH suprimida indica hiperfunción primaria de la tiroides, como en la enfermedad de Graves."
      },
      {
        "id": "P2-14",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "¿Qué hormona hipofisaria produce la maduración del folículo y la ovulación con formación del cuerpo lúteo en la mujer?",
        "opts": [
          "La FSH, que madura los folículos primarios y estimula la secreción de estrógenos.",
          "La LH, que forma y mantiene el cuerpo lúteo, y participa en la ovulación.",
          "La prolactina, que mantiene el cuerpo lúteo apoyando a la LH en la mama.",
          "La ACTH, que estimula la corteza suprarrenal y no tiene función ovárica."
        ],
        "why": [
          "Descartada: la FSH madura los folículos primarios, pero el cuerpo lúteo lo forma la LH.",
          "Correcta: la LH forma y mantiene el cuerpo lúteo, y participa en la ovulación; el cuerpo lúteo secreta progesterona y estrógenos.",
          "Descartada: la prolactina apoya a la LH en la mama y en el cuerpo lúteo, pero no es la hormona que lo forma.",
          "Descartada: la ACTH estimula la corteza suprarrenal y no tiene función en el ovario."
        ],
        "ans": 1,
        "expl": "La LH forma y mantiene el cuerpo lúteo; la FSH madura los folículos primarios."
      },
      {
        "id": "P2-15",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "¿Qué efecto tiene la insulina sobre la glucemia y sobre la célula?",
        "opts": [
          "Aumenta la glucemia, porque libera la glucosa almacenada en el hígado.",
          "No modifica la glucemia, pero acelera la degradación de los lípidos en el músculo.",
          "Disminuye la glucemia, porque favorece la entrada de glucosa a las células.",
          "Disminuye la glucemia, porque aumenta la excreción renal de glucosa por la orina."
        ],
        "why": [
          "Descartada: la hormona que aumenta la glucemia liberando glucosa del hígado es el glucagón de las células alfa.",
          "Descartada: la insulina sí modifica la glucemia; además no es la función que se pregunta.",
          "Correcta: la insulina de las células beta baja la glucemia al favorecer la captación de glucosa por las células.",
          "Descartada: la glucosa no se excreta por la orina en condiciones normales; la insulina baja la glucemia por captación."
        ],
        "ans": 2,
        "expl": "La insulina baja la glucemia porque favorece la entrada de glucosa a las células. El glucagón hace lo contrario."
      },
      {
        "id": "P2-16",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿Qué tipo de sustancia forma el centro del cerebelo?",
        "opts": [
          "Sustancia gris, en la parte central, con fibras de asociación en la periferia.",
          "Sustancia blanca, rodeada por ganglios basales que coordinan el movimiento.",
          "Sustancia gris, formando los núcleos dentados que se ubican en el lóbulo frontal.",
          "Sustancia blanca en el centro, con la corteza de sustancia gris en la periferia."
        ],
        "why": [
          "Descartada: el centro del cerebelo es blanco, y las fibras de asociación no son gris periférica.",
          "Descartada: los ganglios basales son del telencéfalo y no rodean el cerebelo.",
          "Descartada: los núcleos dentados son del cerebelo, no del lóbulo frontal.",
          "Correcta: en el cerebelo la sustancia blanca es central y la gris es periférica, a diferencia de la médula."
        ],
        "ans": 3,
        "expl": "El cerebelo tiene sustancia blanca central y gris periférica. Sus núcleos dentados están dentro del cerebelo."
      },
      {
        "id": "P2-17",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿Qué par craneal inerva el músculo oblicuo superior del ojo, que lo mueve hacia abajo y hacia adentro?",
        "opts": [
          "El par IV, el nervio troclear o patético, que inerva el oblicuo superior del ojo.",
          "El par III, el nervio oculomotor, que controla la mayoría de los músculos del ojo.",
          "El par VI, el nervio abducens, que mueve el recto lateral hacia afuera.",
          "El par VII, el nervio facial, que controla la expresión facial y las lágrimas."
        ],
        "why": [
          "Correcta: el troclear (IV) inerva el oblicuo superior, que mueve el ojo hacia abajo y adentro.",
          "Descartada: el oculomotor (III) inerva la mayoría de los músculos del ojo, pero no el oblicuo superior.",
          "Descartada: el abducens (VI) inerva el recto lateral, que lleva el ojo hacia afuera.",
          "Descartada: el facial (VII) no inerva ningún músculo del ojo; controla expresión facial y glándulas."
        ],
        "ans": 0,
        "expl": "El troclear (IV) inerva el oblicuo superior. El oculomotor (III) controla la mayoría de los músculos del ojo, el abducens (VI) el recto lateral."
      },
      {
        "id": "P2-18",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿Qué surco separa el lóbulo frontal del lóbulo parietal?",
        "opts": [
          "El surco lateral, que separa el temporal del resto de la corteza cerebral.",
          "El surco central, que marca el límite entre el frontal y el parietal.",
          "El surco parietooccipital, que separa el parietal del occipital.",
          "El surco de la ínsula, que marca el límite del lóbulo límbico con el frontal."
        ],
        "why": [
          "Descartada: el surco lateral separa el temporal del frontal y el parietal, no al frontal del parietal.",
          "Correcta: el surco central separa el lóbulo frontal del parietal.",
          "Descartada: el parietooccipital separa el parietal del occipital.",
          "Descartada: la ínsula está en la profundidad del surco lateral y no separa al frontal del parietal."
        ],
        "ans": 1,
        "expl": "El surco central separa los lóbulos frontal y parietal. El lateral separa el temporal, y el parietooccipital, el parietal del occipital."
      },
      {
        "id": "P2-19",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "Para evitar el rechazo en un trasplante de células, ¿qué fuente conviene elegir?",
        "opts": [
          "Células embrionarias de otro individuo, porque tienen la mayor potencialidad disponible.",
          "Células de médula ósea de un donante compatible, que siempre se toleran sin inmunosupresión.",
          "Células adultas del propio paciente o iPS autólogas, que no provocan rechazo inmunológico.",
          "Células de cordón umbilical de cualquier donante, porque no expresan antígenos de histocompatibilidad."
        ],
        "why": [
          "Descartada: las embrionarias de otro individuo tienen alta potencialidad, pero provocan rechazo y problemas éticos y legales.",
          "Descartada: aun con donante compatible, el trasplante de médula suele requerir inmunosupresión; no es tolerado sin tratamiento.",
          "Correcta: las células del propio paciente, o las iPS autólogas, no producen rechazo; es la fuente sin rechazo que plantea la guía.",
          "Descartada: el cordón umbilical tiene menos antígenos, pero no garantiza ausencia de rechazo en cualquier donante."
        ],
        "ans": 2,
        "expl": "Las células adultas del propio paciente y las iPS autólogas evitan el rechazo; las embrionarias y los donantes ajenos no."
      },
      {
        "id": "P2-20",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "¿Qué componente de la matriz de un tendón artificial aporta la resistencia a la tracción en una dirección?",
        "opts": [
          "Los glucosaminoglicanos, que retienen agua y forman el componente amorfo de la matriz.",
          "Las fibras elásticas, que se estiran y vuelven a su forma tras cada deformación.",
          "La lámina basal, que une el epitelio al tejido conjuntivo y no resiste tracción.",
          "Las fibras de colágeno tipo I orientadas en una dirección, que forman el componente fibrilar."
        ],
        "why": [
          "Descartada: los glucosaminoglicanos retienen agua y favorecen la difusión, pero no resisten la tracción.",
          "Descartada: las fibras elásticas recuperan forma; un tendón necesita resistir tracción sin estirarse en exceso.",
          "Descartada: la lámina basal une el epitelio al conectivo y no es el componente que resiste tracción en un tendón.",
          "Correcta: el colágeno tipo I en fibras orientadas resiste la tracción en una dirección, como un tendón."
        ],
        "ans": 3,
        "expl": "Un tendón resiste tracción en una dirección gracias al colágeno tipo I orientado, que forma el componente fibrilar de la matriz."
      }
    ],
    "dev": [
      {
        "id": "P2-D1",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "Se describe a una persona con enfisema. Explique qué cambia en la mecánica respiratoria y en el intercambio de gases.",
        "checklist": [
          "Se fusionan alvéolos y se pierde superficie de intercambio",
          "Se pierde el retroceso elástico y la espiración pasiva falla",
          "Aumenta la resistencia de la vía aérea por la broncoconstricción de los bronquiolos",
          "Aumenta la distancia de difusión y se afecta la respiración externa"
        ],
        "modelo": "En el enfisema se fusionan alvéolos, lo que reduce la superficie de intercambio. Se reemplaza tejido elástico por conectivo fibroso, así que se pierde el retroceso elástico y la espiración pasiva falla, con aire atrapado. Sube la resistencia de la vía aérea y aumenta la distancia de difusión, por lo que fallan la ventilación y la respiración externa.",
        "justificacion": "El enfisema combina pérdida de superficie, pérdida de retroceso elástico y aumento de la resistencia. Por eso la ventilación y el intercambio fallan a la vez."
      },
      {
        "id": "P2-D2",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "Explique por qué la aorta y la arteria pulmonar llevan sangre de distinta oxigenación, y qué tienen en común respecto de la cámara de origen.",
        "checklist": [
          "La aorta sale del ventrículo izquierdo con sangre oxigenada",
          "La arteria pulmonar sale del ventrículo derecho con sangre desoxigenada",
          "Ambas son arterias: salen del corazón, aunque transporten sangre distinta",
          "Ambas salen de ventrículos, que expulsan la sangre hacia las grandes arterias"
        ],
        "modelo": "La aorta sale del ventrículo izquierdo, que recibe la sangre oxigenada desde las venas pulmonares. La arteria pulmonar sale del ventrículo derecho, que recibe sangre desoxigenada de la circulación sistémica. Ambas son arterias porque salen del corazón; lo que las diferencia es la oxigenación de la sangre que llevan, no el sentido del flujo. Las dos salen de ventrículos y vencen la presión de la salida a través de una válvula sigmoidea.",
        "justificacion": "Arteria es el vaso que sale del corazón, no el que tiene sangre oxigenada. Por eso la diferencia de oxigenación depende de la cámara de origen y del circuito, no del nombre del vaso."
      },
      {
        "id": "P2-D3",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "Describa el eje tiroideo, indicando hormona de cada piso y cómo se retroalimenta. Luego explique qué pasaría con TSH y T4 si falla el hipotálamo.",
        "checklist": [
          "Hipotálamo: TRH",
          "Adenohipófisis: TSH",
          "Glándula periférica: tiroides, que produce T3 y T4",
          "Retroalimentación negativa: T3 y T4 frenan a la hipófisis y al hipotálamo",
          "Si falla el hipotálamo: baja la TRH, baja la TSH y baja la T4 (terciario)"
        ],
        "modelo": "El hipotálamo libera TRH, que estimula la adenohipófisis para liberar TSH. La TSH estimula la tiroides para producir T3 y T4, que frenan por retroalimentación negativa a la hipófisis y al hipotálamo. Si falla el hipotálamo, la TRH baja, la TSH baja y la T4 también baja: es un hipotiroidismo terciario, porque el piso roto es el de más arriba.",
        "justificacion": "Contar desde abajo: si falla el órgano final es primario; si falla la hipófisis es secundario; si falla el hipotálamo es terciario. La TRH es lo que permite separar secundario de terciario."
      },
      {
        "id": "P2-D4",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "Explique qué se pierde en una hemodiálisis y por qué un riñón descelularizado que filtra no reemplaza al riñón.",
        "checklist": [
          "La diálisis reproduce sólo la filtración, con una membrana acelular",
          "No hay reabsorción selectiva ni secreción tubular",
          "No hay producción de eritropoyetina ni calcitriol",
          "El andamio filtra, pero no concentra la orina ni secreta hormonas"
        ],
        "modelo": "La hemodiálisis reproduce sólo la filtración con una membrana semipermeable acelular. No hace reabsorción selectiva ni secreción tubular, y no produce eritropoyetina ni calcitriol. El riñón descelularizado filtra, pero tampoco concentra la orina ni secreta hormonas, porque no tiene asas de Henle funcionales ni aparato yuxtaglomerular. Por eso no reemplaza al riñón por completo.",
        "justificacion": "Un órgano que reemplaza al riñón tiene que hacer más que filtrar: perfusión, filtración, secreción, reabsorción y drenaje de orina. La diálisis y el andamio sólo cumplen parte de esas funciones."
      },
      {
        "id": "P2-D5",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "Un grupo quiere modelar un órgano hueco con epitelio que sea impermeable y pueda distenderse. ¿Qué requisitos estructurales debe cumplir y qué tejido epitelial conviene usar?",
        "checklist": [
          "Impermeabilidad: uniones estrechas entre las células",
          "Distensibilidad: el epitelio tiene que deformarse sin romperse",
          "Epitelio de transición o urotelio, con células en sombrilla",
          "Un epitelio intestinal no sirve, porque absorbe y genera acidosis y litiasis"
        ],
        "modelo": "El órgano necesita impermeabilidad, que dan las uniones estrechas entre las células, y distensibilidad, que da un epitelio que se deforma sin romperse. El epitelio de transición o urotelio cumple ambas cosas gracias a sus células en sombrilla y a sus uniones. Un epitelio intestinal no sirve, porque absorbe el contenido y puede causar acidosis metabólica y litiasis.",
        "justificacion": "Por eso la vía urinaria no se reemplaza con intestino sin pagar un precio: el epitelio intestinal absorbe, y el urotelio es casi impermeable y se distiende."
      }
    ]
  },
  {
    "id": "p3",
    "nombre": "Parcial 3",
    "mc": [
      {
        "id": "P3-1",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "¿Qué función cumple la epiglotis?",
        "opts": [
          "Bascula durante la deglución y cierra la entrada laríngea, separando la vía aérea de la digestiva.",
          "Vibra al paso del aire espirado y produce el sonido de la voz junto con los pliegues vocales.",
          "Regula el calibre de la tráquea mediante el músculo traqueal que se inserta en su cara posterior.",
          "Separa la nasofaringe de la orofaringe durante la respiración nasal tranquila y en reposo."
        ],
        "why": [
          "Correcta: la epiglotis bascula durante la deglución y sella la entrada laríngea, separando la vía aérea de la digestiva.",
          "Descartada: la voz la producen los pliegues vocales al vibrar, no la epiglotis.",
          "Descartada: el músculo traqueal regula el calibre, pero no está en la epiglotis.",
          "Descartada: la separación de la nasofaringe y la orofaringe la hace el paladar blando, no la epiglotis."
        ],
        "ans": 0,
        "expl": "La epiglotis bascula durante la deglución y cierra la entrada laríngea. Así separa la vía aérea del paso del alimento."
      },
      {
        "id": "P3-2",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "¿Qué hace el músculo intercostal externo durante la inspiración tranquila?",
        "opts": [
          "Desciende las costillas y reduce el volumen del tórax durante la espiración forzada.",
          "Eleva las costillas y aumenta los diámetros anteroposterior y lateral del tórax.",
          "Empuja las vísceras abdominales contra el diafragma para expulsar el aire residual.",
          "Eleva el esternón y las costillas superiores solamente en la inspiración forzada."
        ],
        "why": [
          "Descartada: eso lo hacen los intercostales internos en la espiración forzada, no los externos en la inspiración.",
          "Correcta: los intercostales externos elevan las costillas y aumentan el diámetro anteroposterior y lateral, sumando volumen al tórax.",
          "Descartada: empujar las vísceras es función de los abdominales en la espiración forzada.",
          "Descartada: elevar el esternón es función de los músculos inspiratorios forzados, como el esternocleidomastoideo, no del intercostal externo tranquilo."
        ],
        "ans": 1,
        "expl": "Los intercostales externos son inspiratorios: elevan las costillas y aumentan los diámetros anteroposterior y lateral."
      },
      {
        "id": "P3-3",
        "topic": "respiratorio",
        "ref": "sección 12",
        "q": "¿Dónde se encuentra la tráquea en relación con el esófago?",
        "opts": [
          "La tráquea está por detrás del esófago, y su cartílago se abre hacia adelante para la deglución.",
          "La tráquea y el esófago están a la misma altura, separados sólo por el tejido conectivo laxo.",
          "La tráquea está por delante del esófago, y tiene anillos cartilaginosos abiertos hacia atrás.",
          "La tráquea está por encima del esófago, dentro de la cavidad nasal, y se conecta con la laringe."
        ],
        "why": [
          "Descartada: es al revés. La tráquea está por delante, no por detrás del esófago.",
          "Descartada: no están a la misma altura: el esófago está por detrás de la tráquea en todo su trayecto.",
          "Correcta: la tráquea baja por delante del esófago; sus anillos están abiertos hacia atrás, donde está el esófago.",
          "Descartada: la tráquea no está en la cavidad nasal; empieza en el cricoides, debajo de la laringe."
        ],
        "ans": 2,
        "expl": "La tráquea baja por delante del esófago. Sus anillos están abiertos hacia atrás para permitir la expansión del esófago."
      },
      {
        "id": "P3-4",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "¿Qué estructura del sistema de conducción retrasa el impulso eléctrico antes de llegar a los ventrículos?",
        "opts": [
          "El nodo sinusal, que dispara el impulso a unos 100 latidos por minuto por su propio ritmo.",
          "El haz de His, que lleva el impulso a las ramas derecha e izquierda del tabique interventricular.",
          "Las fibras de Purkinje, que conducen el impulso directamente a las paredes de los ventrículos.",
          "El nodo auriculoventricular, que retrasa el impulso para que las aurículas se vacíen."
        ],
        "why": [
          "Descartada: el nodo sinusal es el marcapasos; dispara el impulso pero no lo retrasa.",
          "Descartada: el haz de His conduce el impulso sin retrasarlo; es la única vía hacia los ventrículos después del nodo AV.",
          "Descartada: las fibras de Purkinje son el último tramo de conducción, después del haz de His, no el que retrasa.",
          "Correcta: el nodo AV introduce un retraso en el impulso, para que las aurículas terminen de vaciarse antes de que arranque el ventrículo."
        ],
        "ans": 3,
        "expl": "El nodo auriculoventricular retrasa el impulso. El nodo sinusal es el marcapasos, el haz de His es la única vía hacia los ventrículos y Purkinje es la última parte."
      },
      {
        "id": "P3-5",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "¿En qué fase del ciclo cardíaco entra el grueso del llenado ventricular, sin que haya contracción auricular?",
        "opts": [
          "En el llenado ventricular pasivo, con las válvulas auriculoventriculares abiertas y la sangre entrando.",
          "En la contracción isovolumétrica, con las cuatro válvulas cerradas y el volumen constante.",
          "En la eyección ventricular, con las sigmoideas abiertas y la sangre saliendo a las arterias.",
          "En la relajación isovolumétrica, con las válvulas sigmoideas cerradas y la presión bajando."
        ],
        "why": [
          "Correcta: en el llenado ventricular pasivo las AV están abiertas y entra el grueso del llenado, sin necesidad de contracción auricular.",
          "Descartada: en la contracción isovolumétrica las cuatro válvulas están cerradas y el volumen no cambia; no hay llenado.",
          "Descartada: en la eyección las sigmoideas están abiertas y la sangre sale del ventrículo; no entra.",
          "Descartada: en la relajación isovolumétrica las cuatro válvulas están cerradas y la presión baja; tampoco hay llenado."
        ],
        "ans": 0,
        "expl": "El grueso del llenado ventricular es pasivo: entra con las AV abiertas, sin contracción auricular."
      },
      {
        "id": "P3-6",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿Qué estructura lleva la bilis y el jugo pancreático hacia el duodeno?",
        "opts": [
          "La papila duodenal menor, en la primera porción, inmediatamente después del píloro.",
          "La papila duodenal mayor, en la segunda porción, regulada por el esfínter de Oddi.",
          "El cardias, que comunica el estómago con el duodeno y regula el paso del quimo.",
          "La válvula ileocecal, que comunica el intestino delgado con el colon en la fosa ilíaca."
        ],
        "why": [
          "Descartada: la papila menor no es la que lleva la bilis; la vía biliar sale por la papila mayor.",
          "Correcta: la bilis y el jugo pancreático llegan al duodeno por la papila duodenal mayor, en la segunda porción, regulada por el esfínter de Oddi.",
          "Descartada: el cardias comunica el esófago con el estómago, no el estómago con el duodeno.",
          "Descartada: la válvula ileocecal comunica el íleon con el ciego, no el duodeno con el estómago."
        ],
        "ans": 1,
        "expl": "La bilis y el jugo pancreático salen por la papila duodenal mayor, en la segunda porción del duodeno."
      },
      {
        "id": "P3-7",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿Qué células del estómago secretan pepsinógeno, el precursor de la pepsina?",
        "opts": [
          "Las células parietales, que secretan el ácido clorhídrico y el factor intrínseco.",
          "Las células G del antro, que secretan gastrina para estimular el ácido.",
          "Las células principales, o zimógenas, que secretan pepsinógeno inactivo.",
          "Las células mucosas de la superficie, que secretan moco alcalino de protección."
        ],
        "why": [
          "Descartada: las parietales secretan ácido y factor intrínseco, no pepsinógeno.",
          "Descartada: las células G secretan gastrina, que regula el ácido y el pepsinógeno.",
          "Correcta: las células principales secretan pepsinógeno, que el ácido clorhídrico convierte en pepsina.",
          "Descartada: las células mucosas secretan moco de protección, no enzimas."
        ],
        "ans": 2,
        "expl": "Las células principales secretan pepsinógeno. Las parietales, ácido y factor intrínseco; las G, gastrina."
      },
      {
        "id": "P3-8",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "¿En qué tramo del intestino grueso desaparecen las tenias, los haustros y los apéndices epiploicos?",
        "opts": [
          "En el ciego, donde se ubica el apéndice y se inicia el intestino grueso.",
          "En el colon sigmoide, donde la pared se engrosa y se pliega sobre sí misma.",
          "En el colon transverso, donde el mesocolon fija el órgano a la pared posterior.",
          "En el recto, donde desaparecen las tenias, los haustros y los apéndices."
        ],
        "why": [
          "Descartada: el ciego tiene tenias, haustros y apéndices; son el inicio del colon, no donde desaparecen.",
          "Descartada: el sigmoide conserva las tenias y los haustros; no es donde desaparecen.",
          "Descartada: el colon transverso conserva los tres rasgos; el mesocolon fija el colon, no los elimina.",
          "Correcta: en el recto la capa longitudinal vuelve a ser continua, y desaparecen las tres rasgos del colon."
        ],
        "ans": 3,
        "expl": "Los tres rasgos del colon (tenias, haustros y apéndices epiploicos) desaparecen en el recto."
      },
      {
        "id": "P3-9",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "¿Qué estructuras forman el aparato yuxtaglomerular?",
        "opts": [
          "La mácula densa del distal y las células yuxtaglomerulares de la arteriola aferente.",
          "La cápsula de Bowman y los podocitos, que forman la barrera de filtración del glomérulo.",
          "Las células mesangiales y el túbulo contorneado proximal, que regulan la presión capilar.",
          "El asa de Henle descendente y los conductos colectores de la médula renal."
        ],
        "why": [
          "Correcta: el aparato yuxtaglomerular lo forman la mácula densa del distal y las células yuxtaglomerulares de la arteriola aferente, que secretan renina.",
          "Descartada: la cápsula y los podocitos forman el corpúsculo renal y la barrera de filtración, no el aparato yuxtaglomerular.",
          "Descartada: las mesangiales no forman el aparato yuxtaglomerular, y el proximal no participa en su control.",
          "Descartada: el asa descendente y los colectores no forman parte del aparato yuxtaglomerular."
        ],
        "ans": 0,
        "expl": "El aparato yuxtaglomerular está formado por la mácula densa y las células yuxtaglomerulares; regula la presión y la renina."
      },
      {
        "id": "P3-10",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "Si una persona contrae voluntariamente el esfínter urinario externo durante el reflejo miccional, ¿qué ocurre?",
        "opts": [
          "La vejiga se vacía de inmediato, porque el esfínter externo se relaja por acción parasimpática.",
          "Se posterga la micción, porque el esfínter externo esquelético y voluntario retiene la orina.",
          "La orina pasa a los uréteres, porque el trígono se abre al contraerse el esfínter.",
          "El detrusor se relaja, porque el simpático inhibe la vejiga al contraerse el esfínter."
        ],
        "why": [
          "Descartada: contraer el esfínter externo impide el vaciado; no lo acelera.",
          "Correcta: el esfínter externo es esquelético y voluntario; al contraerlo se puede posponer la micción aunque el reflejo esté activo.",
          "Descartada: el trígono es liso y no se abre por el esfínter; la orina no vuelve a los uréteres.",
          "Descartada: el detrusor se contrae con el parasimpático durante la micción; el simpático lo relaja, pero eso no depende del esfínter externo."
        ],
        "ans": 1,
        "expl": "El esfínter externo es esquelético y voluntario: al contraerlo se puede posponer la micción."
      },
      {
        "id": "P3-11",
        "topic": "urinario",
        "ref": "sección 15",
        "q": "¿Qué segmento de la nefrona o de la vía urinaria tiene células intercaladas que regulan el equilibrio ácido-base?",
        "opts": [
          "El túbulo contorneado proximal, con borde en cepillo denso que reabsorbe bicarbonato.",
          "La rama descendente delgada del asa de Henle, que es permeable al agua.",
          "El colector, con células intercaladas que regulan el equilibrio ácido-base.",
          "El conducto papilar, que desemboca en el cáliz menor sin modificar la orina."
        ],
        "why": [
          "Descartada: el proximal reabsorbe bicarbonato, pero las células intercaladas que regulan el equilibrio ácido-base están en el colector.",
          "Descartada: la rama descendente delgada es permeable al agua, pero no tiene células intercaladas.",
          "Correcta: el colector tiene células principales que regulan agua y sodio, y células intercaladas que regulan el equilibrio ácido-base.",
          "Descartada: el conducto papilar no modifica la orina; las intercaladas están antes, en el colector."
        ],
        "ans": 2,
        "expl": "Las células intercaladas del colector regulan el equilibrio ácido-base. Las principales regulan agua y sodio."
      },
      {
        "id": "P3-12",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "¿Qué hormona de la médula suprarrenal se libera en la respuesta de lucha, huida o alerta?",
        "opts": [
          "El cortisol, que se libera en la corteza y eleva la glucemia en el ayuno.",
          "La aldosterona, que retiene sodio y agua para mantener el volumen sanguíneo.",
          "La ACTH, que estimula la corteza suprarrenal durante el estrés prolongado.",
          "La adrenalina, que actúa sobre receptores alfa y beta de distintos órganos."
        ],
        "why": [
          "Descartada: el cortisol es de la corteza, no de la médula, aunque también participa en el estrés.",
          "Descartada: la aldosterona es de la corteza y regula el sodio y el volumen, no la respuesta de alerta.",
          "Descartada: la ACTH es hipofisaria; estimula la corteza y no se libera desde la médula.",
          "Correcta: la adrenalina de la médula desencadena la respuesta de lucha, huida o alerta, mediada por el simpático."
        ],
        "ans": 3,
        "expl": "La adrenalina es de la médula y desencadena la respuesta de lucha, huida o alerta."
      },
      {
        "id": "P3-13",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "¿Qué hormona estimula la liberación de cortisol por la corteza suprarrenal?",
        "opts": [
          "La ACTH, que fomenta el crecimiento de la corteza y estimula la secreción de cortisol.",
          "La TSH, que estimula la tiroides para producir T3 y T4 a partir de la tirosina.",
          "La prolactina, que estimula la producción de leche y mantiene el cuerpo lúteo del ovario.",
          "La FSH, que madura los folículos primarios y estimula la secreción de estrógenos."
        ],
        "why": [
          "Correcta: la ACTH, de la adenohipófisis, estimula la corteza suprarrenal para producir cortisol.",
          "Descartada: la TSH estimula la tiroides, no la corteza suprarrenal.",
          "Descartada: la prolactina estimula la producción de leche y apoya a la LH; no actúa sobre la corteza suprarrenal.",
          "Descartada: la FSH actúa sobre el ovario y los folículos; no estimula la corteza suprarrenal."
        ],
        "ans": 0,
        "expl": "La ACTH es la hormona trófica del cortisol: estimula el crecimiento de la corteza y la secreción de cortisol."
      },
      {
        "id": "P3-14",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "¿Qué efecto tiene el glucagón sobre el hígado?",
        "opts": [
          "Almacena glucosa en forma de glucógeno, después de una comida rica en hidratos.",
          "Libera glucosa a la sangre por glucogenólisis y gluconeogénesis, sobre todo en el ayuno.",
          "Aumenta la captación de glucosa por el hígado, reduciendo la glucemia en el ayuno.",
          "Degrada el glucógeno hepático para convertirlo en urea y excretarlo por la orina."
        ],
        "why": [
          "Descartada: almacenar glucógeno después de comer es función de la insulina, no del glucagón.",
          "Correcta: el glucagón de las células alfa libera glucosa del hígado durante el ayuno o el ejercicio.",
          "Descartada: el glucagón no aumenta la captación de glucosa; eso lo hace la insulina y baja la glucemia.",
          "Descartada: la urea viene del metabolismo de proteínas; el glucagón no degrada glucógeno para formarla."
        ],
        "ans": 1,
        "expl": "El glucagón libera glucosa del hígado en el ayuno; la insulina hace lo contrario después de comer."
      },
      {
        "id": "P3-15",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿En qué lóbulo cerebral se ubica el área de Wernicke, responsable de comprender el lenguaje?",
        "opts": [
          "En el lóbulo frontal, junto al área de Broca, que forma las palabras.",
          "En el lóbulo parietal, detrás del surco central, que procesa la sensibilidad.",
          "En el lóbulo temporal, en el hemisferio izquierdo de la mayoría de las personas.",
          "En el lóbulo occipital, que recibe la información visual desde el tálamo."
        ],
        "why": [
          "Descartada: el frontal contiene el área de Broca, que forma las palabras, no la comprensión.",
          "Descartada: el parietal procesa la sensibilidad somática, no el lenguaje.",
          "Correcta: el área de Wernicke, que permite comprender el lenguaje, está en el lóbulo temporal del hemisferio izquierdo.",
          "Descartada: el occipital procesa la visión; no es el área del lenguaje."
        ],
        "ans": 2,
        "expl": "Wernicke comprende el lenguaje y está en el temporal izquierdo. Broca forma las palabras y está en el frontal."
      },
      {
        "id": "P3-16",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿Qué estructura conecta el cerebro con la médula espinal y controla la respiración y la presión arterial?",
        "opts": [
          "El cerebelo, que coordina el movimiento, el equilibrio y la postura del cuerpo.",
          "El tálamo, que es la estación de relevo de la información sensorial hacia la corteza.",
          "El hipotálamo, que regula la temperatura y el apetito desde la base del cerebro.",
          "El tronco encefálico, que conecta el cerebro con la médula y regula la respiración."
        ],
        "why": [
          "Descartada: el cerebelo coordina el movimiento, el equilibrio y la postura, pero no conecta el cerebro con la médula.",
          "Descartada: el tálamo es estación de relevo sensorial del diencéfalo, no conecta con la médula.",
          "Descartada: el hipotálamo regula funciones vitales, pero está en la base del cerebro y no conecta con la médula.",
          "Correcta: el tronco encefálico conecta el cerebro con la médula y controla respiración, frecuencia cardíaca y presión arterial."
        ],
        "ans": 3,
        "expl": "El tronco encefálico conecta el cerebro con la médula y regula funciones vitales como respiración y presión."
      },
      {
        "id": "P3-17",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "¿En qué espacio meníngeo circula el líquido cefalorraquídeo?",
        "opts": [
          "En el espacio subaracnoideo, entre la aracnoides y la piamadre.",
          "En el espacio epidural, entre el cráneo y la duramadre.",
          "En el espacio subdural, entre la duramadre y la aracnoides.",
          "En el espacio subpial, que es un espacio virtual junto a la superficie del encéfalo."
        ],
        "why": [
          "Correcta: el LCR circula por el espacio subaracnoideo, entre la aracnoides y la piamadre.",
          "Descartada: el epidural está entre el cráneo y la duramadre, y no contiene LCR.",
          "Descartada: el subdural está entre la duramadre y la aracnoides; no es el espacio por donde circula el LCR.",
          "Descartada: el subpial es un espacio virtual, no un espacio por donde circula el LCR."
        ],
        "ans": 0,
        "expl": "El LCR circula por el espacio subaracnoideo, entre la aracnoides y la piamadre."
      },
      {
        "id": "P3-18",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "¿Qué célula del sistema nervioso central tiene origen mesodérmico y no ectodérmico?",
        "opts": [
          "El astrocito, que forma la cicatriz y conserva la barrera hematoencefálica.",
          "La microglía, que llega desde la médula ósea y es la única glía no ectodérmica.",
          "El oligodendrocito, que elabora la mielina de los axones del SNC.",
          "La célula ependimaria, que reviste los ventrículos y el canal del epéndimo."
        ],
        "why": [
          "Descartada: el astrocito es ectodérmico y forma la cicatriz y la barrera hematoencefálica.",
          "Correcta: la microglía tiene origen mesodérmico, de la médula ósea; es la excepción embriológica del SNC.",
          "Descartada: el oligodendrocito es ectodérmico y elabora mielina en el SNC.",
          "Descartada: la ependimaria es ectodérmica y reviste los ventrículos."
        ],
        "ans": 1,
        "expl": "La microglía es la única glía del SNC de origen mesodérmico; llega desde la médula ósea."
      },
      {
        "id": "P3-19",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "¿Qué ventaja tiene un andamio que reproduce la arquitectura vascular del órgano original?",
        "opts": [
          "Retiene la albúmina del filtrado porque la matriz vascular tiene los podocitos que faltaban.",
          "Evita la necesidad de sembrar células, porque la arquitectura vascular genera células nuevas.",
          "Distribuye el detergente y las células por todo el órgano, a través del árbol arterial.",
          "Concentra la orina en la médula, porque la vasculatura reemplaza a las asas de Henle."
        ],
        "why": [
          "Descartada: los podocitos son celulares y no forman parte de la matriz vascular; el andamio sin células pierde albúmina.",
          "Descartada: la arquitectura vascular no genera células; hay que sembrarlas.",
          "Correcta: en el riñón descelularizado, el árbol arterial distribuye el detergente y luego las células por todo el órgano, porque el riñón cuelga de una arteria.",
          "Descartada: la concentración de la orina depende de las asas de Henle y los vasos rectos; la vasculatura del andamio no las reemplaza."
        ],
        "ans": 2,
        "expl": "El riñón entero cuelga de una arteria: por ahí se distribuyen el detergente y, luego, las células a todo el órgano."
      },
      {
        "id": "P3-20",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "¿Qué válvula evita que la sangre vuelva desde la aorta hacia el ventrículo izquierdo durante la diástole?",
        "opts": [
          "La válvula mitral, que separa la aurícula izquierda del ventrículo izquierdo.",
          "La válvula tricúspide, que separa la aurícula derecha del ventrículo derecho.",
          "La válvula pulmonar, que separa el ventrículo derecho del tronco pulmonar.",
          "La válvula aórtica, una sigmoidea que se cierra al relajarse el ventrículo."
        ],
        "why": [
          "Descartada: la mitral es auriculoventricular y separa aurícula y ventrículo izquierdos, no la aorta del ventrículo.",
          "Descartada: la tricúspide es derecha y está entre aurícula y ventrículo derechos.",
          "Descartada: la pulmonar está del lado derecho, entre el ventrículo derecho y el tronco pulmonar.",
          "Correcta: la aórtica es una sigmoidea que se cierra cuando el ventrículo se relaja, y evita el reflujo desde la aorta."
        ],
        "ans": 3,
        "expl": "La válvula aórtica es sigmoidea y evita que la sangre regrese de la aorta al ventrículo izquierdo durante la diástole."
      }
    ],
    "dev": [
      {
        "id": "P3-D1",
        "topic": "endocrino",
        "ref": "sección 16",
        "q": "Describa el eje suprarrenal: hormona de cada piso, qué frena al eje y qué pasaría con el cortisol en un paciente que recibe corticoides por mucho tiempo.",
        "checklist": [
          "Hipotálamo: CRH",
          "Adenohipófisis: ACTH",
          "Corteza suprarrenal: cortisol",
          "El cortisol frena a la adenohipófisis y al hipotálamo por retroalimentación negativa",
          "Con corticoides prolongados, el eje se frena y la corteza puede atrofiarse por falta de ACTH"
        ],
        "modelo": "El hipotálamo libera CRH, que estimula la adenohipófisis para liberar ACTH. La ACTH estimula la corteza suprarrenal para producir cortisol, que frena por retroalimentación negativa a la adenohipófisis y al hipotálamo. Con corticoides externos por mucho tiempo, el eje queda frenado: se deja de producir ACTH y la corteza puede atrofiarse, por lo que al suspender el tratamiento hay riesgo de insuficiencia suprarrenal.",
        "justificacion": "El cortisol es el freno del eje suprarrenal. Un aporte externo de corticoides actúa como si el freno estuviera siempre encendido, así que la corteza deja de recibir estímulo."
      },
      {
        "id": "P3-D2",
        "topic": "nervioso",
        "ref": "sección 17",
        "q": "Explique la diferencia entre la vía sensitiva y la vía motora, indicando por dónde entra y sale cada una de la médula y cuántas neuronas tienen.",
        "checklist": [
          "La vía sensitiva entra por la raíz dorsal, con el soma en el ganglio raquídeo",
          "La vía motora sale por la raíz ventral, con el soma en el asta ventral",
          "La vía sensitiva tiene tres neuronas en cadena y pasa por el tálamo",
          "La vía motora tiene dos neuronas: la motoneurona superior y la inferior"
        ],
        "modelo": "La vía sensitiva ascendente entra a la médula por la raíz dorsal, con el soma de la neurona en el ganglio raquídeo. Tiene tres neuronas en cadena y la estación obligada es el tálamo, salvo el olfato. La vía motora descendente sale por la raíz ventral, con el soma en el asta ventral. Tiene dos neuronas: la motoneurona superior, en la corteza, y la motoneurona inferior, en el asta ventral.",
        "justificacion": "Las dos vías se diferencian por el sentido del impulso y por la raíz: la sensitiva entra por la dorsal y la motora sale por la ventral."
      },
      {
        "id": "P3-D3",
        "topic": "circulatorio",
        "ref": "sección 13",
        "q": "Un paciente tiene un volumen sistólico normal, pero su frecuencia cardíaca sube y el gasto aumenta. Explique cómo se relacionan el gasto, el volumen sistólico y la frecuencia, y qué determinantes del volumen sistólico influyen.",
        "checklist": [
          "Gasto cardíaco = volumen sistólico × frecuencia cardíaca",
          "Si el volumen sistólico es normal, el gasto sube con la frecuencia",
          "Determinantes del volumen sistólico: precarga, contractilidad y poscarga",
          "Frank-Starling: más precarga, más volumen sistólico"
        ],
        "modelo": "El gasto cardíaco es el producto del volumen sistólico por la frecuencia. Si el volumen sistólico se mantiene y la frecuencia sube, el gasto aumenta en la misma proporción. El volumen sistólico depende de tres determinantes: la precarga, que aumenta el volumen según Frank-Starling; la contractilidad, que lo aumenta; y la poscarga, que lo disminuye.",
        "justificacion": "El gasto es un producto, así que se puede subir por cualquiera de los dos factores. Para entender el volumen sistólico hay que mirar los tres determinantes, no sólo la frecuencia."
      },
      {
        "id": "P3-D4",
        "topic": "digestivo",
        "ref": "sección 14",
        "q": "Explique el recorrido de la bilis desde el hígado hasta el duodeno, y qué pasa con ese recorrido después de una colecistectomía.",
        "checklist": [
          "Sale del hígado por los conductos hepáticos derecho e izquierdo",
          "Se unen en el hepático común",
          "El cístico lleva la bilis de la vesícula y se une al hepático común para formar el colédoco",
          "El colédoco desemboca con el conducto pancreático en la papila duodenal mayor",
          "Sin vesícula, la bilis sigue llegando por el hepático común y el colédoco"
        ],
        "modelo": "La bilis sale del hígado por los conductos hepáticos derecho e izquierdo, que se unen en el hepático común. El cístico trae la bilis de la vesícula y se une al hepático común para formar el colédoco, que desemboca junto con el conducto pancreático en la papila duodenal mayor de la segunda porción del duodeno. Después de una colecistectomía, la bilis sigue llegando desde el hígado por el hepático común, así que el colédoco sigue funcionando, aunque sin el almacenamiento y la concentración de la vesícula.",
        "justificacion": "La vesícula almacena y concentra la bilis, pero no es necesaria para que la bilis llegue al duodeno. Por eso, sin ella, el colédoco sigue cumpliendo su función."
      },
      {
        "id": "P3-D5",
        "topic": "bioingenieria",
        "ref": "sección 18",
        "q": "Un grupo quiere un tejido que filtre plasma y retenga proteínas. Explique qué estructuras del riñón cumplen esa función y qué pasa si se usa un andamio que las pierde.",
        "checklist": [
          "Membrana basal glomerular con carga negativa",
          "Podocitos con hendiduras de filtración",
          "El endotelio fenestrado deja pasar el plasma, pero no retiene proteínas por sí solo",
          "Sin podocitos, el andamio filtra sin selectividad y pierde albúmina"
        ],
        "modelo": "La barrera de filtración la forman el endotelio fenestrado, la membrana basal glomerular con carga negativa y los podocitos con sus hendiduras. El endotelio fenestrado deja pasar todo el plasma; la retención de proteínas la hacen la membrana basal y las hendiduras de los podocitos, por tamaño y carga. Un andamio que pierde los podocitos filtra sin selectividad y pierde albúmina, aunque conserve la membrana basal.",
        "justificacion": "El andamio puede conservar la arquitectura y la membrana basal, pero si faltan los podocitos no retiene las proteínas. Confundir arquitectura con función es la trampa principal del tema."
      }
    ]
  }
];
