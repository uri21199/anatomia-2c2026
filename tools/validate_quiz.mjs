// Valida los bancos de preguntas: estructura, cantidades, sesgo de longitud y reparto de la correcta.
// Uso: node tools/validate_quiz.mjs
// - js/data-quiz.js:     parcial simulado (QUIZ.mc = 20 opción múltiple, QUIZ.dev = 5 de desarrollo)
// - js/data-practica.js: práctica al final de cada sistema (PRACTICA: 20 a 30 opción múltiple por sistema)
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const load = (file, expr) => new Function(`${readFileSync(join(root, "js", file), "utf8")}; return ${expr};`)();
const QUIZ = load("data-quiz.js", "QUIZ");
const PRACTICA = load("data-practica.js", "PRACTICA");

const TOPICS = ["respiratorio", "circulatorio", "digestivo", "urinario", "endocrino", "nervioso", "bioingenieria"];
const errors = [];
const warnings = [];
const ids = new Set();

// Reglas de sesgo: la correcta no debe ser sistemáticamente la más larga ni la más corta,
// y su posición debe estar repartida.
const MAX_EXTREME_SHARE = 0.3;
const RATIO_MIN = 0.8;
const RATIO_MAX = 1.2;

function checkMC(q, where) {
  if (ids.has(q.id)) errors.push(`${where}: ID repetido ${q.id}`);
  ids.add(q.id);
  if (!Array.isArray(q.opts) || q.opts.length !== 4) errors.push(`${q.id}: debe tener 4 opciones`);
  if (!(Number.isInteger(q.ans) && q.ans >= 0 && q.ans < 4)) errors.push(`${q.id}: ans fuera de rango`);
  if (!q.ref) errors.push(`${q.id}: falta ref`);
  if (!q.expl) errors.push(`${q.id}: falta explicación`);
  if (!TOPICS.includes(q.topic)) errors.push(`${q.id}: topic desconocido (${q.topic})`);
}

function biasReport(name, mcs) {
  let longest = 0, shortest = 0;
  const pos = [0, 0, 0, 0];
  const ratios = [];
  for (const q of mcs) {
    const c = q.opts[q.ans].length;
    const others = q.opts.filter((_, i) => i !== q.ans).map((o) => o.length);
    if (c > Math.max(...others)) longest++;
    if (c < Math.min(...others)) shortest++;
    const avg = others.reduce((a, b) => a + b, 0) / others.length;
    const r = c / avg;
    ratios.push(r);
    if (r < RATIO_MIN || r > RATIO_MAX) warnings.push(`${q.id}: largo de la correcta ${(r).toFixed(2)} veces el promedio de distractores`);
    pos[q.ans]++;
  }
  const n = mcs.length;
  if (longest / n > MAX_EXTREME_SHARE) errors.push(`${name}: la correcta es la más larga en ${longest}/${n} (máx ${Math.round(MAX_EXTREME_SHARE * 100)} %)`);
  if (shortest / n > MAX_EXTREME_SHARE) errors.push(`${name}: la correcta es la más corta en ${shortest}/${n} (máx ${Math.round(MAX_EXTREME_SHARE * 100)} %)`);
  const minPos = Math.min(...pos);
  if (minPos / n < 0.15) errors.push(`${name}: posición de la correcta desbalanceada (${pos.join("/")})`);
  return { longest, shortest, pos, n };
}

// Parcial
if (QUIZ.mc.length !== 20) errors.push(`Parcial: se esperaban 20 MC, hay ${QUIZ.mc.length}`);
if (QUIZ.dev.length !== 5) errors.push(`Parcial: se esperaban 5 de desarrollo, hay ${QUIZ.dev.length}`);
QUIZ.mc.forEach((q) => checkMC(q, "Parcial"));
for (const d of QUIZ.dev) {
  if (ids.has(d.id)) errors.push(`ID repetido: ${d.id}`);
  ids.add(d.id);
  if (!d.checklist || d.checklist.length < 3) errors.push(`${d.id}: checklist con menos de 3 puntos`);
  if (!d.modelo || !d.justificacion) errors.push(`${d.id}: falta respuesta modelo o justificación`);
  if (!d.ref) errors.push(`${d.id}: falta ref`);
}
const parcialStats = biasReport("Parcial", QUIZ.mc);

// Práctica por sistema (20 a 30 MC cada uno)
const allPractica = [];
for (const t of TOPICS) {
  const list = PRACTICA[t];
  if (!list) { errors.push(`Práctica: falta el sistema ${t}`); continue; }
  if (list.length < 20 || list.length > 30) errors.push(`Práctica ${t}: se esperaban entre 20 y 30 MC, hay ${list.length}`);
  list.forEach((q) => { if (q.topic !== t) errors.push(`${q.id}: topic ${q.topic} dentro de ${t}`); checkMC(q, `Práctica ${t}`); });
  allPractica.push(...list);
}
const practicaStats = biasReport("Práctica", allPractica);

console.log(`Parcial: ${QUIZ.mc.length} MC · ${QUIZ.dev.length} desarrollo`);
console.log(`  correcta más larga: ${parcialStats.longest}/${parcialStats.n} · más corta: ${parcialStats.shortest}/${parcialStats.n} · posiciones A-D: ${parcialStats.pos.join("/")}`);
console.log(`Práctica: ${allPractica.length} MC en ${TOPICS.length} sistemas`);
console.log(`  correcta más larga: ${practicaStats.longest}/${practicaStats.n} · más corta: ${practicaStats.shortest}/${practicaStats.n} · posiciones A-D: ${practicaStats.pos.join("/")}`);

if (warnings.length) {
  console.log(`\nAdvertencias de longitud (${warnings.length}):`);
  for (const w of warnings) console.log("  - " + w);
}
if (errors.length) {
  console.log(`\nErrores (${errors.length}):`);
  for (const e of errors) console.log("  - " + e);
  process.exit(1);
}
console.log("\nOK: estructura, cantidades y reparto correctos.");
