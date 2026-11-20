// Valida el banco de preguntas: estructura, cantidades y sesgo de longitud.
// Uso: node tools/validate_quiz.mjs
// Marca cada MC donde la respuesta correcta es la más larga o se aleja mucho del promedio de los distractores.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "js", "data-quiz.js"), "utf8");
const QUIZ = new Function(`${src}; return QUIZ;`)();

const errors = [];
const warnings = [];
const MAX_RATIO = 1.15; // la correcta no debería superar en más de 15% el promedio de los distractores

if (QUIZ.mc.length !== 20) errors.push(`Se esperaban 20 MC, hay ${QUIZ.mc.length}`);
if (QUIZ.dev.length !== 5) errors.push(`Se esperaban 5 de desarrollo, hay ${QUIZ.dev.length}`);

const ids = new Set();
for (const q of QUIZ.mc) {
  if (ids.has(q.id)) errors.push(`ID repetido: ${q.id}`);
  ids.add(q.id);
  if (!Array.isArray(q.opts) || q.opts.length !== 4) errors.push(`${q.id}: debe tener 4 opciones`);
  if (!(q.ans >= 0 && q.ans < 4)) errors.push(`${q.id}: ans fuera de rango`);
  if (!q.src || !q.ref) errors.push(`${q.id}: falta src o ref`);
  if (!q.expl) errors.push(`${q.id}: falta explicación (justificación)`);

  const correctLen = q.opts[q.ans].length;
  const others = q.opts.filter((_, i) => i !== q.ans).map((o) => o.length);
  const avg = others.reduce((a, b) => a + b, 0) / others.length;
  const ratio = correctLen / avg;
  const longest = correctLen > Math.max(...others);
  if (ratio > MAX_RATIO || longest) {
    warnings.push(`${q.id}: correcta ${correctLen} car. vs promedio distractores ${avg.toFixed(0)} (ratio ${ratio.toFixed(2)}${longest ? ", es la más larga" : ""})`);
  }
}

for (const d of QUIZ.dev) {
  if (ids.has(d.id)) errors.push(`ID repetido: ${d.id}`);
  ids.add(d.id);
  if (!d.checklist || d.checklist.length < 3) errors.push(`${d.id}: checklist con menos de 3 puntos`);
  if (!d.modelo) errors.push(`${d.id}: falta respuesta modelo`);
  if (!d.justificacion) errors.push(`${d.id}: falta justificación`);
  if (!d.src || !d.ref) errors.push(`${d.id}: falta src o ref`);
}

console.log(`MC: ${QUIZ.mc.length} · Desarrollo: ${QUIZ.dev.length}`);
if (warnings.length) {
  console.log(`\nAdvertencias de sesgo de longitud (${warnings.length}):`);
  for (const w of warnings) console.log("  - " + w);
}
if (errors.length) {
  console.log(`\nErrores (${errors.length}):`);
  for (const e of errors) console.log("  - " + e);
  process.exit(1);
}
console.log(warnings.length ? "\nEstructura OK. Hay advertencias de longitud para revisar." : "\nOK: sin errores ni sesgo de longitud.");
