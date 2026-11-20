# anatomia-2c2026

Web de estudio para el 2do parcial de Anatomía (FIUBA, CB110). Mezcla la presentación y el material de la cátedra, apuntes de compañera, una guía web y videos. Cada bloque muestra de dónde sale.

## Uso

Abrir `index.html` en el navegador. No necesita servidor ni instalación.

- **Temas:** contenido por tema, con etiqueta de origen y referencia (diapositiva, página o sección). El panel de la izquierda filtra por origen.
- **Preguntas:** banco de 20 de opción múltiple y 5 de desarrollo. Las de desarrollo traen checklist y justificación.
  - *Práctica*: respondés y ves la explicación al instante.
  - *Parcial simulado*: 25 consignas, sin respuestas hasta el final.
- **Fuentes:** lista de materiales, niveles de confianza y pendientes.

## Estructura

```
index.html
css/styles.css
js/data-sources.js   contenido por tema (bloques con src y ref)
js/data-quiz.js      banco de preguntas
js/data-guia.js      contenido extendido de la guía (secciones 12 a 17)
js/app.js            lógica: rutas, filtros, quiz
tools/validate_quiz.mjs   valida cantidades y sesgo de longitud
```

## Validar el banco de preguntas

```
node tools/validate_quiz.mjs
```

Marca las preguntas donde la respuesta correcta es la más larga o se aleja más de 15% del promedio de los distractores.

## Orígenes

| Etiqueta | Material |
|---|---|
| Presentación | Sistema Nervioso (FIUBA 2014, PDF) |
| Modelo | Preguntas modelo T0A y cuestionario endocrino T7C |
| Endo 2024 / SN PDF | PDFs de la cátedra |
| Apunte | Apuntes de compañera (PDF) |
| Guía | guiasdeingenieria.com.ar (sitio no oficial) |
| Video | sisbiofiuba.wordpress.com (no verificados) |
| Paper | Sittadjody 2017; Dias y Ressler 2013 |
| Generado | Escrito para completar; no es de la cátedra |

## Límites conocidos

- Respiratorio, digestivo y urinario tienen confianza baja: sólo se leyó el resumen de la guía.
- Los videos no fueron verificados.
- La renina aparece con ubicación distinta según la fuente (ver el bloque de conflicto en Sistema renina-angiotensina-aldosterona).
- Las preguntas de desarrollo se autoevalúan con la checklist; no se corrigen automáticamente.
