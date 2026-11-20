// Capítulo 17. Generado desde data/s17.html.
// Sin el bloque de ejercicios inline (usaba pickQ, que no existe en este sitio).
const S17_HTML = `<details>
<summary><span class="num">17</span> Sistema nervioso <span class="sec-score" id="ss-fiuba-anatomia-17"></span></summary>
<div class="content">

<p>Clases 13 y 14 (<b>10/11 y 17/11/2026</b>): desde septiembre el cronograma le da <b>dos clases</b> a nervioso, y la segunda es la última antes del segundo parcial (24/11). Dos materiales distintos de la cátedra se reparten el tema y conviene saber cuál cubre qué, porque <b>ninguno cubre todo</b>:</p>
<div class="key"><div class="ky-t">De dónde sale cada parte</div>
· El deck <i>Sistema nervioso</i> (17 láminas) da <b>anatomía macroscópica, lóbulos, SNA y ondas cerebrales</b>. <b>No</b> tiene neurona ni glía.<br>
· La <b>histología</b> del tejido nervioso (neurona, neuritas, glía, mielina, fibra mielínica vs. amielínica, médula con Klüver-Barrera) está en <i>Clase Tejidos</i>, de la misma cátedra.<br>
· La clase del <b>Prof. Cynowiec</b> aporta la <b>embriología</b>: ectodermo → tubo neural → cresta neural.<br>
· Lo que la cátedra <b>no desarrolla</b>: potencial de membrana, bomba Na-K, neurotransmisores por nombre, meninges, LCR, vías y arco reflejo. De toda la fisiología neuronal, el material escrito tiene dos frases: que la neurona tiene "<i>propiedades electrofisiológicas especiales</i>" (<i>Clase Tejidos</i>) y el resumen del deck de Cynowiec, "<i>Neurona → impulso → sinapsis</i>". Todo lo que agregamos sobre ese punto va marcado como <b>ampliación</b>.
</div>

<h3>Las tres funciones, que ordenan todo lo demás</h3>
<p><b>Sensorial</b> (recibe información del entorno interno y externo por los receptores) → <b>integradora</b> (procesa esa información y la integra con la memoria) → <b>motora</b> (envía señales a los efectores: <b>músculos y glándulas</b>). Esa tríada es el esqueleto de cualquier respuesta: entrada, procesamiento, salida.</p>

<p>El sistema nervioso funciona como un sistema de comunicación a través de <b>sensores</b> y <b>efectores</b>; los reflejos son el ejemplo más básico. Un <b>estímulo</b> (lumínico, mecánico o químico) lo recibe un receptor, la <b>transducción</b> transforma esa señal en impulsos eléctricos y el sistema genera una <b>respuesta</b>.</p>
<h3>Embriología: de una lámina de ectodermo a un tubo</h3>
<p>El sistema nervioso nace del <b>ectodermo</b>, la capa más externa del embrión temprano. La secuencia es:</p>
<div class="formula">
<b>Gastrulación</b> (se forman las 3 capas germinales) → <b>inducción neural</b>: la <b>notocorda</b> induce la <b>placa neural</b> → la placa se pliega en <b>surco neural</b> → el surco se cierra en <b>tubo neural</b><br>
<b>Tubo neural → SNC</b> (encéfalo y médula espinal) &nbsp;·&nbsp; <b>Cresta neural → SNP</b>
</div>
<p>El tubo se dilata en su extremo cefálico y forma las <b>vesículas encefálicas</b>, que explican por qué el encéfalo adulto se divide como se divide <span class="muted">(secuencia de la bibliografía; la clase muestra el tubo y la cresta)</span>:</p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Vesícula primaria</th><th>Vesícula secundaria</th><th>Estructura adulta</th></tr>
  <tr><td rowspan="2"><b>Prosencéfalo</b></td><td>Telencéfalo</td><td>Hemisferios cerebrales, corteza, ganglios basales, hipocampo, amígdala, bulbo olfatorio</td></tr>
  <tr><td>Diencéfalo</td><td><b>Tálamo</b> e <b>hipotálamo</b></td></tr>
  <tr><td><b>Mesencéfalo</b></td><td>Mesencéfalo</td><td>Mesencéfalo (parte alta del tronco)</td></tr>
  <tr><td rowspan="2"><b>Rombencéfalo</b></td><td>Metencéfalo</td><td><b>Protuberancia</b> (puente) y <b>cerebelo</b></td></tr>
  <tr><td>Mielencéfalo</td><td><b>Bulbo raquídeo</b></td></tr>
</tbody></table></div>
<div class="key"><div class="ky-t">Por qué la cresta neural importa para bioingeniería</div>
La <b>cresta neural</b> es un caso raro: se desprende del borde del tubo, migra por todo el embrión y da el <b>SNP</b>: neuronas sensitivas de los ganglios raquídeos, ganglios autónomos, <b>células de Schwann</b> y <b>células satélite</b>, además de melanocitos y médula suprarrenal. Si necesitás células de Schwann para un conducto de guía nerviosa, estás pidiendo derivados de <b>cresta neural</b>, no de tubo neural.
</div>

<h3>Las dos divisiones: anatómica y funcional</h3>
<div class="formula">
<b>Sistema nervioso</b><br>
├─ <b>SNC</b>: encéfalo (cerebro + cerebelo + tronco) + médula espinal<br>
└─ <b>SNP</b>: nervios craneales, nervios espinales, ganglios y plexos<br>
&nbsp;&nbsp;&nbsp;&nbsp;├─ <b>somático</b>: movimientos <b>voluntarios</b> del músculo esquelético<br>
&nbsp;&nbsp;&nbsp;&nbsp;└─ <b>autónomo (SNA)</b>: funciones <b>involuntarias</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ <b>simpático</b>: estrés, peligro: luchar o huir · salida <b>toracolumbar</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├─ <b>parasimpático</b>: reposo: relajarse y digerir · salida <b>craneal y sacra</b><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ <b>entérico</b>: red propia de la pared del tubo digestivo
</div>
<div class="trap"><div class="tr-t">El SNA no es una tercera división: es una rama del SNP</div>
Una lámina de la cátedra habla de "la división del sistema nervioso en SNP y SNA" como si fueran categorías paralelas; <b>la misma lámina, dos renglones después, dice lo correcto</b>: el SNP "se divide en dos subsistemas: somático y autónomo". Quedate con el esquema de arriba. Poner al SNA al mismo nivel que el SNC y el SNP es el error de organización más frecuente del tema.<br><br>
Segundo error de la misma familia: meter la <b>médula espinal</b> dentro del SNP. La médula es <b>SNC</b>; lo periférico son los <b>nervios raquídeos</b> que salen de ella.
</div>
<p><span class="muted">El <b>sistema nervioso entérico</b> es la red intramural del tubo digestivo (plexos mientérico y submucoso). Puede generar reflejos locales sin consultar al SNC, y por eso se lo llama "el segundo cerebro". La cátedra no lo desarrolla; entra como ampliación.</span></p>

<h3>La neurona</h3>
<p>Célula con <b>propiedades electrofisiológicas especiales</b>. Consta de <b>cuerpo celular</b> (soma o pericarion) y <b>prolongaciones</b>, que la cátedra llama <b>neuritas</b>: dendritas y axón. El soma tiene el núcleo con <b>nucléolo bien visible</b>, los <b>corpúsculos de Nissl</b> (basófilos) y el resto de las organelas.</p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th></th><th>Dendritas</th><th>Axón</th></tr>
  <tr><td>Número</td><td><b>Numerosas</b></td><td><b>Único</b></td></tr>
  <tr><td>Diámetro</td><td><b>Variable</b></td><td><b>Constante</b></td></tr>
  <tr><td>Ramificación</td><td>Muchas, en <b>ángulo agudo</b></td><td>Pocas, en <b>ángulo recto</b></td></tr>
  <tr><td>Grumos de Nissl</td><td><b>Sí</b></td><td>No</td></tr>
  <tr><td>Espinas</td><td><b>Sí</b></td><td>No</td></tr>
  <tr><td>Dirección de la señal</td><td><b>Hacia</b> el soma (entrada)</td><td><b>Desde</b> el soma hacia el telodendrón (salida)</td></tr>
  <tr><td>Extremos con nombre</td><td>No</td><td><b>Cono axónico</b> (inicio, nace del soma) / <b>telodendrón</b> (final, arborización terminal)</td></tr>
</tbody></table></div>
<div class="trap"><div class="tr-t">Cono axónico = inicio; telodendrón = final</div>
Invertirlos es el error más barato del tema. Y si el enunciado dice "<b>diámetro constante y ramificación en ángulo recto</b>", es <b>axón</b> aunque mencione ramificaciones: lo que define no es que se ramifique, es el <b>ángulo</b> y la <b>constancia del diámetro</b>.
</div>

<p><b>Clasificación morfológica</b>, por número de prolongaciones que salen del soma, y <b>funcional</b>, por el sentido en que corren <span class="muted">(ampliación de la bibliografía)</span>:</p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Morfológica</th><th>Descripción</th><th>Dónde</th></tr>
  <tr><td><b>Multipolar</b></td><td>Un axón y muchas dendritas</td><td>La mayoría del SNC; motoneuronas del asta ventral</td></tr>
  <tr><td><b>Bipolar</b></td><td>Una dendrita y un axón, en polos opuestos</td><td>Retina, epitelio olfatorio, ganglio vestibulococlear</td></tr>
  <tr><td><b>Seudounipolar</b></td><td>Una sola prolongación que se bifurca en T</td><td><b>Ganglios raquídeos</b> (neuronas sensitivas)</td></tr>
</tbody></table></div>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Funcional</th><th>Qué hace</th><th>Sentido</th></tr>
  <tr><td><b>Sensitiva (aferente)</b></td><td>Lleva información del receptor al SNC</td><td>Periferia → centro</td></tr>
  <tr><td><b>Motora (eferente)</b></td><td>Lleva la orden del SNC al efector (músculo o glándula)</td><td>Centro → periferia</td></tr>
  <tr><td><b>Interneurona</b></td><td>Conecta neuronas dentro del SNC; es la mayoría</td><td>Interna</td></tr>
</tbody></table></div>

<h3>Neuroglía: la pregunta de distractores vecinos por excelencia</h3>
<p>Son células de <b>protección, nutrición y sostén</b>; <b>no conducen el impulso</b>. Cada una tiene una función distinta y la cátedra arma preguntas donde las cuatro opciones describen correctamente a una glía, pero solo una es la que corresponde. <b>No se puede eliminar por absurdo: hay que saber cuál es cuál.</b></p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Célula</th><th>Dónde</th><th>Función</th><th>Origen</th></tr>
  <tr><td><b>Astrocito</b></td><td>SNC</td><td>Depura (retira) residuos del metabolismo neuronal; metabolismo energético; conserva la <b>barrera hematoencefálica</b>; forma el <b>tejido cicatrizal</b> en zonas lesionadas</td><td>Ectodérmico</td></tr>
  <tr><td><b>Oligodendrocito</b></td><td>SNC</td><td>Elabora y conserva la <b>mielina</b> de los axones del SNC</td><td>Ectodérmico</td></tr>
  <tr><td><b>Microglía</b></td><td>SNC</td><td><b>Fagocita</b> desechos y estructuras lesionadas</td><td><b>Mesodérmico</b> (médula ósea)</td></tr>
  <tr><td><b>Ependimaria</b></td><td>SNC</td><td><b>Epitelio</b> que reviste los ventrículos cerebrales y el canal del epéndimo; participa en la producción y circulación del LCR</td><td>Ectodérmico</td></tr>
  <tr><td><b>Célula de Schwann</b></td><td><b>SNP</b></td><td>Envuelve los axones formando <b>axones mielínicos</b> (o agrupa varios axones sin mielinizar)</td><td>Ectodérmico (cresta neural)</td></tr>
  <tr><td><b>Célula satélite</b> <span class="muted">ampliación</span></td><td><b>SNP</b></td><td>Rodea el <b>soma</b> de las neuronas dentro de los <b>ganglios</b>, sostén y regulación del microambiente</td><td>Ectodérmico (cresta neural)</td></tr>
</tbody></table></div>
<div class="key"><div class="ky-t">Los tres disparadores que resuelven cualquier pregunta de glía</div>
Si el enunciado dice <b>"cicatriz"</b> o <b>"barrera hematoencefálica"</b> → <b>astrocito</b>.<br>
Si dice <b>"fagocitar"</b> o "respuesta a la lesión" → <b>microglía</b>.<br>
Si dice <b>"mielina"</b> → depende del compartimento: <b>SNC = oligodendrocito</b>, <b>SNP = célula de Schwann</b>.<br><br>
Corolario de diseño: un conducto de guía para regenerar un <b>nervio ciático</b> (SNP) se siembra con <b>células de Schwann</b>. Sembrarlo con oligodendrocitos es un error de compartimento, no un detalle.
</div>
<div class="trap"><div class="tr-t">La microglía es la excepción embriológica, y la cátedra lo remarca</div>
Todo el tejido nervioso es de origen <b>ectodérmico</b>… <b>salvo la microglía</b>, que viene de la <b>médula ósea</b> (mesodérmico). Consecuencia concreta: un <b>organoide neural</b> derivado solo de precursores ectodérmicos <b>no tiene microglía</b> y por lo tanto no tiene componente fagocítico ni respuesta inmune innata. Hay que agregarla desde linaje hematopoyético para modelar neuroinflamación.<br><br>
Ojo con la trampa espejo: decir que astrocitos, oligodendrocitos o Schwann son mesodérmicos también es <b>falso</b>. La excepción es <b>una sola</b>.
</div>

<h3>Mielina, fibra nerviosa y conducción saltatoria</h3>
<p><b>Fibra nerviosa</b> = axón + vaina de mielina (definición literal de la cátedra). La vaina la hace el <b>oligodendrocito</b> en el SNC y la <b>célula de Schwann</b> en el SNP. Al microscopio, la distinción mielínica/amielínica se resuelve por dos negativos:</p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th></th><th>Fibra mielínica</th><th>Fibra amielínica</th></tr>
  <tr><td>Relación Schwann-axón</td><td>Una célula por <b>segmento</b> de <b>un</b> axón</td><td>Una célula envolviendo <b>muchos</b> axones</td></tr>
  <tr><td>Vaina de mielina</td><td>Sí</td><td><b>No</b></td></tr>
  <tr><td>Neuroqueratina</td><td>Sí</td><td><b>No</b></td></tr>
  <tr><td>Incisura de Schmidt-Lanterman</td><td>Sí</td><td><b>No</b></td></tr>
  <tr><td>Axones visibles al MO</td><td>Sí (anillos)</td><td><b>No</b></td></tr>
  <tr><td>Endoneuro</td><td>Sí</td><td>Sí</td></tr>
</tbody></table></div>
<p>El <b>nodo de Ranvier</b> es la interrupción de la vaina entre dos células de Schwann consecutivas; se ve en corte <b>longitudinal</b>. Ahí es donde la membrana queda expuesta, y por eso el impulso <b>salta de nodo en nodo</b>: eso es la <b>conducción saltatoria</b>, mucho más rápida que en la fibra amielínica, donde la despolarización tiene que recorrer punto a punto toda la membrana. <b>A mayor mielinización y mayor calibre, mayor velocidad.</b></p>
<div class="trap"><div class="tr-t">"Amielínica" no significa "sin célula de Schwann"</div>
La célula de Schwann <b>está igual</b>: lo que cambia es que envuelve <b>muchos</b> axones sin formar vaina. Por eso los axones no se distinguen al MO y no hay neuroqueratina ni incisuras. Un andamio que "alinee axones" pero no favorezca la <b>mielinización por Schwann</b> no va a recuperar velocidad de conducción.
</div>

<h3>Sinapsis y potencial de acción <span class="muted">· ampliación</span></h3>
<p>La <b>sinapsis</b> es el punto de contacto entre dos neuronas (o entre neurona y efector): la terminación <b>convierte la señal eléctrica en señal química</b> y libera el <b>neurotransmisor</b> al espacio sináptico. <span class="muted">La cátedra no lo desarrolla (su única mención escrita es "Neurona → impulso → sinapsis"), así que todo lo que sigue es ampliación de bibliografía.</span></p>
<div class="formula">
<b>Reposo</b> (~−70 mV, mantenido por la bomba Na⁺/K⁺) → el estímulo despolariza hasta el <b>umbral</b> → se abren canales de <b>Na⁺</b>: entra Na⁺, <b>despolarización</b> → se abren los de <b>K⁺</b>: sale K⁺, <b>repolarización</b> → breve <b>hiperpolarización</b> y vuelta al reposo
</div>
<p>Dos propiedades que se preguntan: el potencial de acción es <b>todo o nada</b> (o supera el umbral y se dispara completo, o no pasa nada; la intensidad del estímulo se codifica en la <b>frecuencia</b> de disparo, no en la amplitud) y es <b>unidireccional</b> por el <b>período refractario</b>, que impide que vuelva hacia atrás.</p>

<h3>Anatomía del SNC</h3>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Estructura</th><th>Función</th></tr>
  <tr><td><b>Corteza cerebral</b></td><td>Parte más externa, dividida en dos hemisferios conectados por el <b>cuerpo calloso</b>. Funciones cognitivas superiores: pensamiento, memoria, lenguaje, emoción y conciencia</td></tr>
  <tr><td><b>Sistema límbico</b></td><td>Estructuras internas que regulan <b>emociones, motivación y memoria</b></td></tr>
  <tr><td><b>Ganglios basales</b></td><td><b>Movimiento voluntario y coordinación</b> (caudado, putamen, pálido). Son <b>telencéfalo</b></td></tr>
  <tr><td><b>Tálamo</b></td><td><b>Estación de relevo</b> de la información sensorial que va a la corteza. Es <b>diencéfalo</b></td></tr>
  <tr><td><b>Hipotálamo</b></td><td><b>Funciones vitales</b>: temperatura corporal, frecuencia cardíaca, presión arterial, apetito. Es <b>diencéfalo</b> y el puente con el endócrino</td></tr>
  <tr><td><b>Cerebelo</b></td><td><b>Coordinación</b> del movimiento, <b>equilibrio</b> y postura</td></tr>
  <tr><td><b>Tronco encefálico</b></td><td><b>Mesencéfalo + protuberancia + bulbo raquídeo</b>. Conecta cerebro y médula; controla <b>respiración, frecuencia cardíaca y presión arterial</b>, más deglución, alerta y sueño</td></tr>
  <tr><td><b>Epitálamo</b></td><td>Glándula pineal: produce melatonina, que regula los ritmos circadianos</td></tr>
  <tr><td><b>Médula espinal</b></td><td>Transmite información sensorial al cerebro y señales motoras a los músculos; sede de los reflejos medulares</td></tr>
</tbody></table></div>
<div class="trap"><div class="tr-t">Tres confusiones caras en esta tabla</div>
· <b>Tálamo / hipotálamo / ganglios basales</b>: relevo sensorial / funciones vitales / movimiento voluntario. Tálamo e hipotálamo son <b>diencéfalo</b>; los ganglios basales son <b>telencéfalo</b>.<br>
· El <b>cerebelo NO forma parte del tronco</b>. El tronco tiene <b>tres</b> piezas: mesencéfalo, protuberancia y bulbo.<br>
· La <b>sustancia gris está donde no la esperás</b>: en la <b>médula</b> es <b>central</b> (en H, con asta dorsal y asta ventral) y la blanca periférica; en el <b>cerebro</b> es al revés, la gris es la <b>corteza externa</b>. Con Klüver-Barrera, la sustancia <b>blanca se ve azul</b> porque la técnica tiñe la mielina; la gris se ve rosada/violácea y contiene los pericariones.
</div>

<p><b>Fibras de la sustancia blanca</b> del encéfalo: de <b>asociación</b> (conectan regiones de un mismo hemisferio, trayecto longitudinal); de <b>proyección</b> (comunican la corteza con estructuras inferiores, trayecto vertical); <b>comisurales</b> (unen un hemisferio con el otro, trayecto transversal, como el cuerpo calloso).</p>
<p><b>Médula espinal</b>: la sustancia gris es central, con astas <b>posteriores</b> (neuronas sensitivas, forman la raíz posterior del nervio espinal), <b>anteriores</b> (neuronas motoras, forman la raíz anterior) y <b>laterales</b> (somas viscerales del simpático). La sustancia blanca se organiza en cordones posteriores, anteriores y laterales.</p>
<p><b>Cola de caballo</b>: conjunto de nervios lumbares, sacros y bajos que desciende por el canal vertebral desde la parte inferior de la médula, a la altura de L1-L2.</p>
<h3>Lóbulos corticales · la cátedra lo toma</h3>
<p>Una de las 5 <i>Preguntas modelo</i> pregunta exactamente por la función del lóbulo temporal, "según la segregación de funciones corticales". <span class="muted">De la cátedra es la pregunta y el criterio; el desglose fino de la tabla sale del mapa de funciones corticales estándar.</span></p>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Lóbulo</th><th>Funciones</th></tr>
  <tr><td><b>Frontal</b></td><td>Resolución de problemas, <b>juicio</b>, <b>inhibición del comportamiento</b>, planificación y anticipación, planificación motora, personalidad, atención y concentración, iniciativa, expresión emocional, y el <b>habla como lenguaje expresivo: área de Broca</b></td></tr>
  <tr><td><b>Parietal</b></td><td><b>Somatosensorial</b>: tacto, dolor, temperatura y gusto; percepción espacial; cálculo matemático; lectura y escritura</td></tr>
  <tr><td><b>Temporal</b></td><td><b>Audición</b>, <b>comprensión del lenguaje: área de Wernicke</b>, <b>memoria</b> y aprendizaje, organización y secuenciación, recuperación de información, conciencia musical, sentimientos</td></tr>
  <tr><td><b>Occipital</b></td><td>Recepción e <b>interpretación visual</b>; lectura como percepción y reconocimiento</td></tr>
</tbody></table></div>
<div class="trap"><div class="tr-t">Broca vs. Wernicke: la inversión clásica</div>
<b>Broca = formar las palabras</b> (producción, lenguaje expresivo, lóbulo <b>frontal</b>). <b>Wernicke = comprender</b> el lenguaje (lóbulo <b>temporal</b>). Ambas están en el hemisferio izquierdo en el 95% de las personas. Si el enunciado dice "entiende lo que le dicen pero no logra formar las palabras", es <b>Broca</b>. Y ojo con el distractor "coordinación de movimientos voluntarios y equilibrio": eso es <b>cerebelo</b>, que no es un lóbulo cortical. La cátedra lo usa como distractor en la pregunta del temporal.
</div>

<p><b>Ubicación de los lóbulos</b>: el <b>frontal</b> va desde el polo frontal hasta el surco central; el <b>parietal</b>, detrás del surco central y por delante del parietooccipital; el <b>occipital</b> está en el polo posterior; el <b>temporal</b>, debajo del surco lateral. La <b>ínsula</b> está en la profundidad del surco lateral. Los surcos que separan los giros son el <b>central</b>, el <b>lateral</b> y el <b>parietooccipital</b>.</p>
<h3>Meninges y líquido cefalorraquídeo <span class="muted">· ampliación</span></h3>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Capa (de afuera hacia adentro)</th><th>Característica</th></tr>
  <tr><td><b>Duramadre</b></td><td>Gruesa, fibrosa, resistente. Es la que aporta la protección mecánica</td></tr>
  <tr><td><b>Aracnoides</b></td><td>Laxa, avascular. Por debajo, el <b>espacio subaracnoideo</b>, donde circula el <b>LCR</b></td></tr>
  <tr><td><b>Piamadre</b></td><td>Finísima y vascularizada, <b>adherida</b> a la superficie del encéfalo y la médula, siguiendo cada surco</td></tr>
</tbody></table></div>
<p>El <b>LCR</b> lo producen los <b>plexos coroideos</b> de los ventrículos, circula por los ventrículos y el espacio subaracnoideo y se reabsorbe en las vellosidades aracnoideas. Cumple tres funciones: <b>amortiguación mecánica</b> (el encéfalo flota y pesa mucho menos), <b>homeostasis química</b> del medio y <b>transporte</b> de metabolitos. Las <b>células ependimarias</b> son las que revisten los ventrículos y el canal del epéndimo, de modo que la interfaz LCR-tejido es una interfaz <b>glial</b>.</p>

<p>Los <b>espacios entre meninges</b> son: <b>epidural</b> (entre el cráneo y la duramadre), <b>subdural</b> (entre la duramadre y la aracnoides), <b>subaracnoideo</b> (entre la aracnoides y la piamadre, por donde circula el LCR) y <b>subpial</b> (espacio virtual).</p>
<p>El LCR circula por el sistema ventricular: los <b>ventrículos laterales</b> están en el telencéfalo, el <b>tercer ventrículo</b> en el diencéfalo y el <b>cuarto ventrículo</b> detrás del tronco encefálico.</p>
<h3>Vías sensitivas y motoras <span class="muted">· ampliación</span></h3>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th></th><th>Vía sensitiva (ascendente)</th><th>Vía motora (descendente)</th></tr>
  <tr><td>Sentido</td><td>Receptor → médula → tálamo → corteza</td><td>Corteza → tronco → médula → efector</td></tr>
  <tr><td>Entrada/salida de la médula</td><td>Por la raíz <b>dorsal (posterior)</b>; el soma está en el <b>ganglio raquídeo</b></td><td>Por la raíz <b>ventral (anterior)</b>; el soma está en el <b>asta ventral</b></td></tr>
  <tr><td>Estación obligada</td><td><b>Tálamo</b> (salvo el olfato)</td><td></td></tr>
  <tr><td>Neuronas en cadena</td><td>Tres, en general</td><td>Dos: motoneurona superior (corteza) y <b>motoneurona inferior</b> (asta ventral)</td></tr>
</tbody></table></div>
<p>El <b>arco reflejo</b> es el circuito mínimo y explica por qué la médula no es un cable: receptor → neurona sensitiva (raíz dorsal) → interneurona en la sustancia gris → motoneurona (raíz ventral) → efector. Se resuelve <b>en la médula</b>, sin pasar por la corteza; por eso la respuesta llega antes que la conciencia del estímulo.</p>

<h3>Pares craneales</h3>
<p>Son 12 pares que salen del encéfalo (no de la médula). Esta tabla da el tipo y la función de cada uno.</p>
<div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>N.º</th><th>Nombre</th><th>Tipo</th><th>Función principal</th></tr>
  <tr><td>I</td><td>Olfatorio</td><td>Sensitivo</td><td>Olfato: lleva los estímulos de la mucosa nasal al cerebro</td></tr>
  <tr><td>II</td><td>Óptico</td><td>Sensitivo</td><td>Vista: transmite la información visual desde la retina</td></tr>
  <tr><td>III</td><td>Oculomotor</td><td>Motor</td><td>La mayoría de los músculos del ojo: párpado, constricción pupilar y enfoque</td></tr>
  <tr><td>IV</td><td>Troclear</td><td>Motor</td><td>Músculo oblicuo superior del ojo</td></tr>
  <tr><td>V</td><td>Trigémino</td><td>Mixto</td><td>Sensibilidad de la cara, cuero cabelludo, dientes y cavidad bucal; músculos de la masticación. Tres ramas: oftálmica, maxilar y mandibular</td></tr>
  <tr><td>VI</td><td>Abducens</td><td>Motor</td><td>Músculo recto lateral del ojo</td></tr>
  <tr><td>VII</td><td>Facial</td><td>Mixto</td><td>Músculos de la expresión facial, glándulas lagrimales y salivales, y gusto en los dos tercios anteriores de la lengua</td></tr>
  <tr><td>VIII</td><td>Vestibulococlear</td><td>Sensitivo</td><td>Audición y equilibrio</td></tr>
  <tr><td>IX</td><td>Glosofaríngeo</td><td>Mixto</td><td>Gusto en el tercio posterior de la lengua, sensibilidad de la faringe, deglución y glándula parótida</td></tr>
  <tr><td>X</td><td>Vago</td><td>Mixto</td><td>Órganos del tórax y del abdomen (corazón, pulmones, tubo digestivo); fonación y deglución</td></tr>
  <tr><td>XI</td><td>Accesorio</td><td>Motor</td><td>Músculos esternocleidomastoideo y trapecio: movimientos del cuello y los hombros</td></tr>
  <tr><td>XII</td><td>Hipogloso</td><td>Motor</td><td>Movimientos de la lengua</td></tr>
  </tbody></table></div>

<h3>Irrigación del encéfalo: dos sistemas unidos por el polígono de Willis</h3>
<p><b>Circulación anterior</b> (sistema carotídeo): la arteria carótida interna irriga la mayor parte de los lóbulos frontal, parietal y temporal, a través de las arterias cerebrales anterior y media.</p>
<p><b>Circulación posterior</b> (sistema vertebrobasilar): irriga el tronco encefálico, el cerebelo, el lóbulo occipital y parte del temporal. La forman las arterias vertebrales, la basilar y la cerebral posterior.</p>
<p>El <b>polígono de Willis</b> da un flujo colateral entre ambos sistemas. Por eso, si una arteria principal se obstruye (por una placa de ateroma o un coágulo), en muchos casos otros vasos pueden suplir el flujo de la zona afectada.</p>
<p>El <b>seno cavernoso</b> depende de la duramadre y está a los lados de la silla turca; la vena principal que lo drena es la yugular.</p>

<h3>Sistema nervioso autónomo, órgano por órgano</h3>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Órgano</th><th>Simpático</th><th>Parasimpático</th></tr>
  <tr><td>Pupila</td><td><b>Dilata</b></td><td><b>Contrae</b></td></tr>
  <tr><td>Salivación</td><td>Inhibe</td><td>Estimula</td></tr>
  <tr><td>Bronquios</td><td><b>Relaja</b> (dilata)</td><td><b>Contrae</b></td></tr>
  <tr><td>Ritmo cardíaco</td><td>Aumenta</td><td>Disminuye</td></tr>
  <tr><td>Actividad digestiva</td><td>Inhibe</td><td>Estimula</td></tr>
  <tr><td>Hígado</td><td>Estimula la liberación de glucosa</td><td></td></tr>
  <tr><td>Vesícula biliar</td><td></td><td>Estimula</td></tr>
  <tr><td>Médula suprarrenal</td><td><b>Estimula</b> la secreción de adrenalina y noradrenalina</td><td>Inhibe la producción de adrenalina</td></tr>
  <tr><td><b>Vejiga</b></td><td><b>Relaja</b></td><td><b>Contrae</b></td></tr>
  <tr><td><b>Recto</b></td><td><b>Contrae</b></td><td><b>Relaja</b></td></tr>
  <tr><td>Salida medular</td><td><b>Toracolumbar</b>, con ganglios de la <b>cadena simpática</b> paravertebral</td><td><b>Craneal y sacra</b></td></tr>
</tbody></table></div>
<div class="trap"><div class="tr-t">Vejiga y recto van "cruzados" respecto de la intuición</div>
La intuición dice "el simpático contrae todo". Falso: el simpático <b>relaja</b> bronquios y <b>vejiga</b>, y <b>contrae</b> el recto; el parasimpático hace exactamente lo inverso en los tres. Si querés un anclaje: en modo <i>luchar o huir</i> no conviene ni orinar ni digerir, así que el simpático <b>retiene</b> (relaja la vejiga, cierra el recto) y abre los bronquios para entrar más aire.
</div>

<h3>Ondas cerebrales</h3>
<p class="tabla-aviso" hidden="">Deslizá la tabla de costado para ver el resto.</p><div class="tabla-desliza"><table class="tbl">
  <tbody><tr><th>Onda</th><th>Estado</th></tr>
  <tr><td><b>Gamma</b></td><td>Concentración, resolución de problemas</td></tr>
  <tr><td><b>Beta</b></td><td>Vigilia atenta</td></tr>
  <tr><td><b>Alpha</b></td><td>Relajación mental, descanso</td></tr>
  <tr><td><b>Theta</b></td><td>Duermevela, programación del subconsciente</td></tr>
  <tr><td><b>Delta</b></td><td>Dormir, soñar</td></tr>
</tbody></table></div>
<p>Son la especificación de filtrado de un <b>electroencefalógrafo</b>, un monitor de profundidad anestésica o un sistema de neurofeedback: monitorear sueño profundo es aislar <b>delta</b>; monitorear atención sostenida es <b>beta/gamma</b>.</p>

</div>
</details>
`;
