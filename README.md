# anatomia-2c2026

Réplica de la estructura de la guía de Anatomía e Histología Funcional (FIUBA, CB110) para el 2do parcial, con contenido sólo de los capítulos 12 a 18: respiratorio, cardiovascular, digestivo, urinario, endócrino, nervioso y enfoque bioingenieril.

## Uso

Abrir `index.html` en el navegador. No necesita servidor ni instalación.

- **Guía:** capítulos desplegables con anclas (`#fan-s12` a `#fan-s18`) e índice lateral.
- **Preguntas:** banco de 20 de opción múltiple y 5 de desarrollo, por capítulo o parcial simulado (25 consignas, sin respuestas hasta el final).

Las marcas *(resumen)* indican partes que llegaron como resumen y no como texto leído completo.

## Estructura

```
index.html
css/styles.css
js/data-guia.js     capítulos 12 a 17
js/data-cap18.js    capítulo 18
js/data-quiz.js     banco de preguntas (sólo 12 a 18)
js/app.js           índice, capítulos, quiz
tools/validate_quiz.mjs   valida cantidades y sesgo de longitud
```

## Validar el banco de preguntas

    node tools/validate_quiz.mjs

## Límites

- La fuente no es preaprobada: el contenido está parafraseado, con cifras y términos de la guía.
- Partes de los capítulos 15 y 17 llegaron como resumen.
- La guía indica que la fuente no es oficial: confirmar contra la cátedra antes del parcial.
