// Réplica de la estructura de la guía (secciones 12 a 18): índice con anclas, capítulos
// desplegables y banco de preguntas tipo parcial.
(function () {
  "use strict";

  const view = document.getElementById("view");
  const toc = document.getElementById("toc");

  // Capítulos 12 a 18, con los títulos de la guía
  const CAPS = [
    { num: 12, id: "fan-s12", title: "Esplacnología: tórax y aparato respiratorio", topic: "respiratorio", sections: GUIA.respiratorio.sections, raw: S12_HTML },
    { num: 13, id: "fan-s13", title: "Sistema cardiovascular", topic: "circulatorio", sections: GUIA.circulatorio.sections, raw: S13_HTML },
    { num: 14, id: "fan-s14", title: "Aparato digestivo", topic: "digestivo", sections: GUIA.digestivo.sections, raw: S14_HTML },
    { num: 15, id: "fan-s15", title: "Aparato urinario", topic: "urinario", sections: GUIA.urinario.sections, raw: S15_HTML },
    { num: 16, id: "fan-s16", title: "Sistema endócrino", topic: "endocrino", sections: GUIA.endocrino.sections, raw: S16_HTML },
    { num: 17, id: "fan-s17", title: "Sistema nervioso", topic: "nervioso", sections: GUIA.nervioso.sections, raw: S17_HTML },
    { num: 18, id: "fan-s18", title: "Enfoque bioingenieril · los papers de la cátedra", topic: "bioingenieria", sections: CAP18.sections }
  ];
  const TOPIC_TITLE = Object.fromEntries(CAPS.map((c) => [c.topic, `${c.num} · ${c.title}`]));

  // ---------- utilidades ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // ---------- bloques de la guía ----------
  function renderBlock(b) {
    const ref = b.ref ? `<div class="ref">${esc(b.ref)}</div>` : "";
    switch (b.t) {
      case "p":
        return `<div class="blk">${ref}<p>${esc(b.text)}</p></div>`;
      case "ul":
        return `<div class="blk">${ref}<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
      case "table":
        return `<div class="blk">${ref}<div class="tbl"><table><thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows
          .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div></div>`;
      case "dato":
        return `<div class="blk trampa">${ref}<p><strong>Trampa:</strong> ${esc(b.text)}</p></div>`;
      default:
        return "";
    }
  }

  // Ids de encabezado para enlazar cada pregunta con el punto de la teoría que la explica
  const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const secId = (topic, text) => `sec-${topic}-${slug(text)}`;
  const withHeadingIds = (html, topic) =>
    html.replace(/<h3([^>]*)>([\s\S]*?)<\/h3>/g, (m, attr, inner) => `<h3${attr} id="${secId(topic, inner.replace(/<span[^>]*>[\s\S]*?<\/span>/g, "").replace(/<[^>]+>/g, ""))}">${inner}</h3>`);

  // Preguntas ya respondidas (persisten en localStorage): id -> { order, chosen }
  const DONE_KEY = "pracDone";
  function loadDone() {
    try {
      return JSON.parse(localStorage.getItem(DONE_KEY) || "{}");
    } catch (err) {
      return {};
    }
  }
  function saveDone(done) {
    try {
      localStorage.setItem(DONE_KEY, JSON.stringify(done));
    } catch (err) {
      /* sin almacenamiento: la marca dura lo que la página */
    }
  }
  const memDone = {};
  const doneMap = () => Object.assign({}, memDone, loadDone());

  // Banco de práctica por sistema: tandas de 15. Primero salen las no respondidas; no se repiten hasta agotar el banco
  const PRAC_SET = 15;
  const pracState = {};
  function pracNext(topic) {
    const list = PRACTICA[topic] || [];
    const st = pracState[topic] || (pracState[topic] = { queue: [], tanda: 0, current: null });
    if (st.queue.length < PRAC_SET) {
      const done = doneMap();
      const rest = list.map((_, i) => i).filter((i) => !st.queue.includes(i));
      const fresh = rest.filter((i) => !done[list[i].id]);
      const old = rest.filter((i) => done[list[i].id]);
      st.queue = st.queue.concat(shuffle(fresh), shuffle(old));
    }
    st.current = st.queue.splice(0, PRAC_SET).map((i) => list[i]);
    st.tanda += 1;
    return st;
  }

  // Desarrollo de aplicación del sistema: se muestra la checklist, se marcan los puntos que se incluyeron y recién ahí aparece el modelo
  function renderDevBlock(topic, done) {
    const list = PRACTICA_DEV[topic] || [];
    if (!list.length) return "";
    const items = list
      .map((d, n) => {
        const prev = done[d.id];
        const marks = prev && prev.marks ? prev.marks : [];
        const checks = d.checklist
          .map((c, i) => `<label class="pd-chk"><input type="checkbox" data-pd-check="${i}"${marks.includes(i) ? " checked" : ""}${prev ? " disabled" : ""}> ${esc(c)}</label>`)
          .join("");
        const badge = prev ? `<span class="badge-done ${prev.ok ? "ok" : "no"}">✓ Respondida · ${prev.ok ? "acertada" : "errada"}</span> ` : "";
        return `<div class="pd" data-id="${esc(d.id)}"${prev ? ' data-done="1"' : ""}>
          <p class="pd-q">${badge}<span class="muted">Desarrollo ${n + 1}.</span> ${esc(d.q)}</p>
          <div class="pd-checks">${checks}</div>
          ${prev ? "" : '<button type="button" class="btn" data-pd-show>Ver respuesta modelo</button>'}
          <div class="pd-model"${prev ? "" : " hidden"}><p><strong>Respuesta modelo.</strong> ${esc(d.modelo)}</p><p>${esc(d.justificacion)}</p><div class="ref">${esc(d.ref)} · <a href="#" class="ver-teoria" data-sec="${secId(topic, d.sec)}">Ver en la teoría: ${esc(d.sec)}</a></div></div>
        </div>`;
      })
      .join("");
    return `<div class="pd-bloque"><h4>Desarrollo de aplicación</h4><p class="muted">Pensá la respuesta, marcá los puntos que incluiste y mostrá el modelo. Cuenta como bien si marcaste al menos 3 de 5.</p>${items}</div>`;
  }

  // Práctica al final de cada sistema: opción múltiple con retroalimentación inmediata
  function renderPractica(topic) {
    const list = PRACTICA[topic] || [];
    if (!list.length) return "";
    const st = pracState[topic] && pracState[topic].current ? pracState[topic] : pracNext(topic);
    const done = doneMap();
    const answered = list.filter((q) => done[q.id]).length;
    const items = st.current
      .map((q, n) => {
        const prev = done[q.id];
        const order = prev
          ? prev.order.map((idx) => ({ text: q.opts[idx], idx }))
          : shuffle(q.opts.map((text, idx) => ({ text, idx })));
        const correctPos = order.findIndex((o) => o.idx === q.ans);
        const ok = prev && prev.chosen === correctPos;
        const opts = order
          .map((o, pos) => {
            let cls = "";
            if (prev) cls = pos === correctPos ? " correct" : pos === prev.chosen ? " wrong" : "";
            return `<button type="button" class="opt${cls}" data-pos="${pos}"${prev ? " disabled" : ""}>${String.fromCharCode(65 + pos)}) ${esc(o.text)}</button>`;
          })
          .join("");
        const badge = prev ? `<span class="badge-done ${ok ? "ok" : "no"}">✓ Respondida · ${ok ? "acertada" : "errada"}</span> ` : "";
        const link = q.sec
          ? `<a href="#" class="ver-teoria" data-sec="${secId(topic, q.sec)}">Ver en la teoría: ${esc(q.sec)}</a>`
          : "";
        return `<div class="pq" data-id="${esc(q.id)}" data-correct="${correctPos}" data-order="${order.map((o) => o.idx).join(",")}"${prev ? ' data-done="1"' : ""}>
          <p class="pq-q">${badge}<span class="muted">${n + 1}.</span> ${esc(q.q)}</p>
          <div class="pq-opts">${opts}</div>
          <div class="pq-fb"${prev ? "" : " hidden"}><div class="expl"><strong>${prev ? (ok ? "Correcto." : "Incorrecto.") : ""}</strong> ${esc(q.expl)}<div class="ref">${esc(q.ref)} · ${link}</div></div></div>
        </div>`;
      })
      .join("");
    return `<div class="practica" data-topic="${topic}">
        <h3>Práctica · preguntas de este sistema</h3>
        <div class="prac-bar">
          <span class="muted">Tanda ${st.tanda} · ${answered} de ${list.length} respondidas. Elegí una opción: se marca la correcta y aparece la justificación.</span>
          <span><button type="button" class="btn" data-reset-done="${topic}">Borrar marcas</button> <button type="button" class="btn" data-next-set="${topic}">Otras ${PRAC_SET} preguntas</button></span>
        </div>
        ${items}
        ${renderDevBlock(topic, done)}
      </div>`;
  }

  function renderCap(c) {
    const practica = renderPractica(c.topic);
    // Capítulos con HTML propio (12 a 17) se insertan tal cual, antes del cierre del details
    if (c.raw) return `<section class="cap" id="${c.id}">${withHeadingIds(c.raw, c.topic).replace(/<\/details>\s*$/, `${practica}</details>`)}</section>`;
    return `<section class="cap" id="${c.id}">
      <details>
        <summary><span class="num">${c.num}</span> ${esc(c.title)}</summary>
        <div class="cap-body">
          ${c.sections.map((s) => `<h3 id="${secId(c.topic, s.h)}">${esc(s.h)}</h3>${s.blocks.map(renderBlock).join("")}`).join("")}
          ${practica}
        </div>
      </details>
    </section>`;
  }

  function pageGuia() {
    return `
      <header class="guide-head">
        <h1>Anatomía e Histología Funcional · Guía del 2do parcial</h1>
        <p class="muted">Capítulos 12 a 18. Contenido parafraseado de la guía de estudio; las marcas <em>(resumen)</em> indican partes que se leyeron como resumen. Verificar antes de estudiar.</p>
        <p class="muted">Parcial: martes 24/11/2026 (según la guía; confirmar en el campus). Formato: 25 consignas, 20 de opción múltiple y 5 de desarrollo con justificación.</p>
      </header>
      ${CAPS.map(renderCap).join("")}`;
  }

  function buildToc() {
    toc.innerHTML = `<h2>Capítulos</h2><ol>${CAPS.map((c) => `<li><a href="#/guia" data-anchor="${c.id}">${c.num}. ${esc(c.title)}</a></li>`).join("")}</ol>
      <h2>Práctica</h2><ul><li><a href="#/preguntas">Preguntas tipo parcial</a></li></ul>`;
  }

  // ---------- preguntas ----------
  let session = null;

  function prepareMC(q) {
    const order = shuffle(q.opts.map((text, idx) => ({ text, idx })));
    return { kind: "mc", data: q, opts: order, correctPos: order.findIndex((o) => o.idx === q.ans) };
  }

  // Parcial por id ("p1", "p2", "p3"); si no existe, el primero
  function parcialById(id) {
    return PARCIALES.find((p) => p.id === id) || PARCIALES[0];
  }

  function buildSession(mode, topic) {
    if (mode === "parcial") {
      const p = parcialById(topic);
      const mc = shuffle(p.mc).slice(0, 20).map(prepareMC);
      const dev = p.dev.map((d) => ({ kind: "dev", data: d }));
      const s = { mode, topic: p.id, items: [...mc, ...dev], i: 0, answers: {}, checks: {}, revealed: {}, finished: false, inicio: new Date().toISOString() };
      guardarIntento(s);
      return s;
    }
    const pool = topic ? PRACTICA[topic] || [] : Object.values(PRACTICA).flat();
    const mc = pool.map(prepareMC);
    const allDev = Object.values(PRACTICA_DEV).flat();
    const dev = allDev.filter((d) => !topic || d.topic === topic).map((d) => ({ kind: "dev", data: d }));
    return { mode, topic, items: [...shuffle(mc), ...dev], i: 0, answers: {}, checks: {}, revealed: {}, finished: false };
  }

  // ---------- intentos de parcial (guardados en localStorage) ----------
  // Cada intento se guarda al empezar y se actualiza con cada respuesta, para no perder nada si se recarga la página
  const INTENTOS_KEY = "parcialesIntentos";
  function loadIntentos() {
    try {
      return JSON.parse(localStorage.getItem(INTENTOS_KEY) || "[]");
    } catch (err) {
      return [];
    }
  }
  function saveIntentos(list) {
    try {
      localStorage.setItem(INTENTOS_KEY, JSON.stringify(list));
    } catch (err) {
      /* sin almacenamiento disponible: no se puede guardar */
    }
  }
  function guardarIntento(s) {
    if (s.mode !== "parcial") return;
    if (!s.attemptId) s.attemptId = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    const p = parcialById(s.topic);
    const rec = {
      id: s.attemptId,
      parcial: s.topic,
      nombre: p.nombre,
      inicio: s.inicio,
      actualizado: new Date().toISOString(),
      terminado: !!s.finished,
      i: s.i,
      mc: s.items
        .map((it, n) => ({ it, n }))
        .filter((x) => x.it.kind === "mc")
        .map(({ it, n }) => {
          const elegida = s.answers[n] === undefined ? null : s.answers[n];
          return {
            id: it.data.id,
            topic: it.data.topic,
            q: it.data.q,
            sec: it.data.sec || null,
            opciones: it.opts.map((o) => o.text),
            correcta: it.correctPos,
            orden: it.opts.map((o) => o.idx),
            elegida,
            ok: elegida === it.correctPos,
            justificaciones: it.opts.map((o) => (it.data.why ? it.data.why[o.idx] : "")),
            expl: it.data.expl,
          };
        }),
      dev: s.items
        .map((it, n) => ({ it, n }))
        .filter((x) => x.it.kind === "dev")
        .map(({ it, n }) => ({
          id: it.data.id,
          q: it.data.q,
          sec: it.data.sec || null,
          checklist: it.data.checklist.map((c, k) => ({ punto: c, marcado: !!(s.checks[n] && s.checks[n][k]) })),
          modeloVisto: !!s.revealed[n],
        })),
    };
    const list = loadIntentos().filter((r) => r.id !== rec.id);
    list.push(rec);
    saveIntentos(list);
  }
  // Reanuda el último intento sin terminar de ese parcial (si lo hay), con las mismas preguntas y respuestas
  function restaurarIntento(topic) {
    const rec = loadIntentos().filter((r) => r.parcial === topic && !r.terminado).pop();
    if (!rec) return null;
    const p = parcialById(topic);
    const items = [];
    const answers = {};
    const checks = {};
    const revealed = {};
    rec.mc.forEach((m) => {
      const data = p.mc.find((q) => q.id === m.id);
      if (!data || !m.orden) return;
      const opts = m.orden.map((idx) => ({ text: data.opts[idx], idx }));
      items.push({ kind: "mc", data, opts, correctPos: opts.findIndex((o) => o.idx === data.ans) });
      if (m.elegida !== null && m.elegida !== undefined) answers[items.length - 1] = m.elegida;
    });
    rec.dev.forEach((d) => {
      const data = p.dev.find((x) => x.id === d.id);
      if (!data) return;
      const n = items.length;
      items.push({ kind: "dev", data });
      d.checklist.forEach((c, k) => {
        if (c.marcado) checks[n] = Object.assign(checks[n] || {}, { [k]: true });
      });
      if (d.modeloVisto) revealed[n] = true;
    });
    return { mode: "parcial", topic: p.id, items, i: Math.min(rec.i || 0, items.length - 1), answers, checks, revealed, finished: false, inicio: rec.inicio, attemptId: rec.id };
  }
  // ---------- práctica por unidad y repaso de errores ----------
  const PRAC_LOG_KEY = "practicaRespuestas";
  function loadPractica() {
    try {
      return JSON.parse(localStorage.getItem(PRAC_LOG_KEY) || "[]");
    } catch (err) {
      return [];
    }
  }
  function registrarPractica(id, ok, elegida, tipo) {
    const list = loadPractica();
    list.push({ id, ok, elegida: elegida || "", fecha: new Date().toISOString(), tipo: tipo || "mc" });
    try {
      localStorage.setItem(PRAC_LOG_KEY, JSON.stringify(list.slice(-5000)));
    } catch (err) {
      /* sin almacenamiento disponible */
    }
  }
  // Último resultado de cada pregunta, en el orden en que se respondió (parciales y práctica juntos)
  function erroresActuales() {
    const eventos = [];
    loadIntentos().forEach((r) => {
      r.mc.forEach((m) => {
        if (m.elegida !== null && m.elegida !== undefined) eventos.push({ t: r.actualizado, id: m.id, tipo: "mc", ok: m.ok });
      });
      r.dev.forEach((d) => {
        const marcados = d.checklist.filter((c) => c.marcado).length;
        if (marcados || d.modeloVisto) eventos.push({ t: r.actualizado, id: d.id, tipo: "dev", ok: marcados / d.checklist.length >= 0.6 });
      });
    });
    loadPractica().forEach((p) => eventos.push({ t: p.fecha, id: p.id, tipo: p.tipo || "mc", ok: p.ok }));
    eventos.sort((x, y) => (x.t < y.t ? -1 : x.t > y.t ? 1 : 0));
    const ultimo = {};
    eventos.forEach((e) => {
      ultimo[e.id] = e;
    });
    return Object.values(ultimo).filter((e) => !e.ok);
  }
  function findPregunta(id) {
    const todas = [...PARCIALES.filter((p) => !p.repaso).flatMap((p) => p.mc), ...Object.values(PRACTICA).flat()];
    return todas.find((q) => q.id === id);
  }
  function findDev(id) {
    return [...PARCIALES.filter((p) => !p.repaso).flatMap((p) => p.dev), ...Object.values(PRACTICA_DEV).flat()].find((d) => d.id === id);
  }
  // Tres parciales de repaso (Repaso 1, 2 y 3) con las preguntas que quedaron mal la última vez.
  // Se reparten por tema para que cada uno cubra todos los sistemas fallados.
  function buildRepaso() {
    for (let k = PARCIALES.length - 1; k >= 0; k--) if (PARCIALES[k].repaso) PARCIALES.splice(k, 1);
    const errs = erroresActuales();
    const mc = errs.filter((e) => e.tipo === "mc").map((e) => findPregunta(e.id)).filter(Boolean);
    const dev = errs.filter((e) => e.tipo === "dev").map((e) => findDev(e.id)).filter(Boolean);
    mc.sort((x, y) => (x.topic < y.topic ? -1 : x.topic > y.topic ? 1 : 0));
    for (let g = 0; g < 3; g++) {
      const m = mc.filter((_, i) => i % 3 === g).slice(0, 20);
      const d = dev.filter((_, i) => i % 3 === g).slice(0, 5);
      if (!m.length && !d.length) continue;
      PARCIALES.push({ id: `repaso${g + 1}`, nombre: `Repaso ${g + 1} · ${m.length} MC y ${d.length} de desarrollo`, mc: m, dev: d, repaso: true });
    }
  }

  function exportarIntentos() {
    const data = { parciales: loadIntentos(), practica: loadPractica() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "parciales-intentos.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  // Abre el capítulo que contiene el encabezado y se ubica en él
  let pendingSec = null;
  function openSec(el) {
    const d = el.closest("details");
    if (d) d.open = true;
    el.scrollIntoView({ block: "start" });
  }

  // Enlace a la sección de la teoría que justifica la respuesta (si el ítem tiene sec)
  function secLink(d) {
    if (!d.sec) return "";
    return `<a href="#" class="ver-teoria" data-sec="${secId(d.secTopic || d.topic, d.sec)}">Ver en la teoría: ${esc(d.sec)}</a>`;
  }

  function renderQuizItem(item, n, total) {
    if (item.kind === "mc") {
      const answered = session.answers[n] !== undefined;
      const chosen = session.answers[n];
      const reveal = session.mode === "practica" && answered;
      const opts = item.opts
        .map((o, pos) => {
          let cls = "opt";
          if (reveal) {
            if (pos === item.correctPos) cls += " correct";
            else if (pos === chosen) cls += " wrong";
          } else if (pos === chosen) {
            cls += " selected";
          }
          const dis = answered && session.mode === "practica" ? "disabled" : "";
          return `<button class="${cls}" data-pos="${pos}" ${dis}>${String.fromCharCode(65 + pos)}) ${esc(o.text)}</button>`;
        })
        .join("");
      const expl = reveal
        ? `<div class="expl"><strong>${chosen === item.correctPos ? "Correcto." : "Incorrecto."}</strong> ${esc(item.data.expl)}<div class="ref">${esc(TOPIC_TITLE[item.data.topic] || "")} · ${esc(item.data.ref)} · ${secLink(item.data)}</div></div>`
        : "";
      return `<section class="card"><p class="muted">Consigna ${n + 1} de ${total} · opción múltiple · ${esc(TOPIC_TITLE[item.data.topic] || "")}</p>
        <h2 class="q">${esc(item.data.q)}</h2>${opts}${expl}</section>`;
    }
    const d = item.data;
    const ck = session.checks[n] || {};
    const list = d.checklist
      .map((c, k) => `<li><label><input type="checkbox" data-check="${k}" ${ck[k] ? "checked" : ""}> ${esc(c)}</label></li>`)
      .join("");
    const show = !!session.revealed[n];
    const model = show
      ? `<div class="expl"><strong>Respuesta modelo:</strong> ${esc(d.modelo)}<br><strong>Justificación:</strong> ${esc(d.justificacion)}<div class="ref">${esc(TOPIC_TITLE[d.topic] || "")} · ${esc(d.ref)} · ${secLink(d)}</div></div>`
      : "";
    return `<section class="card"><p class="muted">Consigna ${n + 1} de ${total} · desarrollo con justificación · ${esc(TOPIC_TITLE[d.topic] || "")}</p>
      <h2 class="q">${esc(d.q)}</h2>
      <p class="muted">Escribí tu respuesta aparte. Después marcá los puntos que incluiste:</p>
      <ul class="check">${list}</ul>
      <div class="actions"><button class="btn" data-reveal="${n}">${show ? "Ocultar respuesta modelo" : "Ver respuesta modelo"}</button></div>
      ${model}</section>`;
  }

  function renderResult() {
    const mcIdx = session.items.map((it, n) => ({ it, n })).filter((x) => x.it.kind === "mc");
    const mcOk = mcIdx.filter(({ it, n }) => session.answers[n] === it.correctPos).length;
    const devIdx = session.items.map((it, n) => ({ it, n })).filter((x) => x.it.kind === "dev");
    const devPct = devIdx.length
      ? devIdx.reduce((acc, { n, it }) => acc + (session.checks[n] ? Object.values(session.checks[n]).filter(Boolean).length / it.data.checklist.length : 0), 0) / devIdx.length
      : 0;
    // Revisión pregunta por pregunta: si acertó o no, cada opción con su justificación
    const review = mcIdx
      .map(({ it, n }) => {
        const chosen = session.answers[n];
        const estado = chosen === undefined ? "Sin respuesta" : chosen === it.correctPos ? "Respondiste bien" : "Respondiste mal";
        const rows = it.opts
          .map((o, pos) => {
            const isOk = pos === it.correctPos;
            const isChosen = pos === chosen;
            const cls = isOk ? "correct" : isChosen ? "wrong" : "";
            const tag = isOk ? "✔ Correcta" : isChosen ? "✘ Tu respuesta" : "Descartada";
            const why = it.data.why ? it.data.why[o.idx] : "";
            return `<li class="${cls}"><strong>${String.fromCharCode(65 + pos)}) ${esc(o.text)}</strong> <span class="ref">${tag}</span><div class="muted">${esc(why)}</div></li>`;
          })
          .join("");
        return `<section class="card rv">
          <p class="muted">Consigna ${n + 1} · ${estado} · ${esc(TOPIC_TITLE[it.data.topic] || "")}</p>
          <h2 class="q">${esc(it.data.q)}</h2>
          <ol class="rv-opts">${rows}</ol>
          <div class="expl">${esc(it.data.expl)}<div class="ref">${esc(it.data.ref)} · ${secLink(it.data)}</div></div>
        </section>`;
      })
      .join("");
    return `<section class="card">
        <h1>Resultado del parcial simulado</h1>
        <p class="score">Opción múltiple: ${mcOk} / ${mcIdx.length}</p>
        <p class="score">Desarrollo (autoevaluación): ${Math.round(devPct * 100)}% de la checklist</p>
        <div class="actions">
          <a class="btn primary" href="#/preguntas/parcial/${esc(session.topic)}" id="again">Nuevo parcial simulado</a>
          <button class="btn" id="export-intentos">Exportar intentos (${loadIntentos().length})</button>
          ${PARCIALES.filter((p) => p.id !== session.topic).map((p) => `<a class="btn" href="#/preguntas/parcial/${esc(p.id)}">${esc(p.nombre)}</a>`).join("")}
        </div>
      </section>
      <h2 class="rv-title">Revisión pregunta por pregunta</h2>
      ${review}`;
  }

  function pagePreguntas(mode, topic) {
    buildRepaso();
    if (!session || session.mode !== mode || session.topic !== topic) {
      session = (mode === "parcial" && restaurarIntento(parcialById(topic).id)) || buildSession(mode, topic);
    }
    if (session.finished) return renderResult();
    const total = session.items.length;
    const n = session.i;
    const item = session.items[n];
    const answered = item.kind === "mc" ? session.answers[n] !== undefined : true;
    const isLast = n === total - 1;
    const pct = Math.round((n / total) * 100);
    const parcial = mode === "parcial" ? parcialById(topic) : null;
    const title = mode === "parcial" ? `Parcial simulado · ${parcial.nombre}` : "Práctica";
    const parcialSel = mode === "parcial"
      ? `<select id="parcial-select" aria-label="Parcial">
        ${PARCIALES.map((p) => `<option value="${esc(p.id)}" ${parcial.id === p.id ? "selected" : ""}>${esc(p.nombre)}</option>`).join("")}
      </select>`
      : "";
    const sel = mode === "parcial" ? parcialSel : `
      <select id="topic-select" aria-label="Capítulo">
        <option value="">Todos los capítulos</option>
        ${CAPS.map((c) => `<option value="${c.topic}" ${topic === c.topic ? "selected" : ""}>${esc(c.num + " · " + c.title)}</option>`).join("")}
      </select>`;
    return `
      <section class="card">
        <div class="quiz-head">
          <h1>${esc(title)}</h1>
          <div>${sel} <a class="btn" href="#/preguntas/parcial/p1">Parcial simulado</a>${mode === "parcial" ? ` <button class="btn" id="export-intentos">Exportar intentos (${loadIntentos().length})</button>` : ""}</div>
        </div>
        <div class="progress"><div style="width:${pct}%"></div></div>
        <p class="muted">${mode === "parcial" ? "Sin respuestas ni explicaciones hasta el final." : "Respondé y leé la explicación con su referencia."}</p>
      </section>
      ${renderQuizItem(item, n, total)}
      <div class="actions">
        <button class="btn" id="prev" ${n === 0 ? "disabled" : ""}>Anterior</button>
        ${isLast
          ? `<button class="btn primary" id="finish" ${answered || mode !== "practica" ? "" : "disabled"}>Terminar</button>`
          : `<button class="btn primary" id="next" ${answered || mode !== "practica" ? "" : "disabled"}>Siguiente</button>`}
      </div>`;
  }

  // ---------- eventos ----------
  view.addEventListener("click", (e) => {
    const t = e.target;
    if (!session) return;
    const item = session.items[session.i];
    if (t.matches("button.opt") && item && item.kind === "mc") {
      if (session.mode === "practica" && session.answers[session.i] !== undefined) return;
      session.answers[session.i] = Number(t.dataset.pos);
      if (session.mode === "practica") registrarPractica(item.data.id, Number(t.dataset.pos) === item.correctPos, item.opts[Number(t.dataset.pos)].text);
      guardarIntento(session);
      rerender();
    } else if (t.id === "next") { session.i++; guardarIntento(session); rerender(); }
    else if (t.id === "prev") { session.i--; guardarIntento(session); rerender(); }
    else if (t.id === "finish") { session.finished = true; guardarIntento(session); rerender(); }
    else if (t.id === "again") { e.preventDefault(); session = null; rerender(); }
    else if (t.id === "export-intentos") { exportarIntentos(); }
    else if (t.dataset.reveal !== undefined) {
      const k = Number(t.dataset.reveal);
      session.revealed[k] = !session.revealed[k];
      guardarIntento(session);
      rerender();
    }
  });
  view.addEventListener("change", (e) => {
    const t = e.target;
    if (t.id === "parcial-select") {
      location.hash = `#/preguntas/parcial/${t.value}`;
      return;
    }
    if (t.id === "topic-select") {
      location.hash = t.value ? `#/preguntas/${t.value}` : "#/preguntas";
      return;
    }
    if (t.dataset.check !== undefined && session) {
      session.checks[session.i] = session.checks[session.i] || {};
      session.checks[session.i][t.dataset.check] = t.checked;
      guardarIntento(session);
    }
  });

  // ---------- índice flotante, tema y texto ----------
  const root = document.documentElement;
  const tocBtn = document.getElementById("toc-toggle");
  const setToc = (open) => {
    toc.classList.toggle("open", open);
    tocBtn.setAttribute("aria-expanded", String(open));
  };
  tocBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setToc(!toc.classList.contains("open"));
  });
  document.addEventListener("click", (e) => {
    if (toc.classList.contains("open") && !toc.contains(e.target)) setToc(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setToc(false);
  });

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
  document.getElementById("font-family").addEventListener("click", () => {
    const next = root.dataset.font === "serif" ? "sans" : "serif";
    root.dataset.font = next;
    localStorage.setItem("font", next);
  });
  const setFs = (delta) => {
    const cur = parseFloat(getComputedStyle(root).fontSize) || 16;
    const px = Math.min(22, Math.max(14, cur + delta));
    root.style.setProperty("--fs", px + "px");
    localStorage.setItem("fs", String(px));
  };
  document.getElementById("font-down").addEventListener("click", () => setFs(-1));
  document.getElementById("font-up").addEventListener("click", () => setFs(1));

  // ---------- router ----------
  function rerender() {
    const parts = (location.hash || "#/guia").replace(/^#\/?/, "").split("/");
    const [page, arg] = parts;
    const isQuiz = page === "preguntas";
    const tab = isQuiz ? "preguntas" : "guia";
    document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("on", a.dataset.tab === tab));
    toc.hidden = false;
    if (isQuiz) {
      view.innerHTML = arg === "parcial" ? pagePreguntas("parcial", parts[2] || "p1") : pagePreguntas("practica", arg || "");
      window.scrollTo(0, 0);
      return;
    }
    view.innerHTML = pageGuia();
    window.scrollTo(0, 0);
    if (pendingSec) {
      const el = document.getElementById(pendingSec);
      pendingSec = null;
      if (el) openSec(el);
    }
  }

  // Los enlaces del índice a capítulos vuelven a la guía y se desplazan al ancla
  toc.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-anchor]");
    if (!a) return;
    e.preventDefault();
    setToc(false);
    const id = a.dataset.anchor;
    if (!location.hash.startsWith("#/guia")) location.hash = "#/guia";
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        el.querySelector("details").open = true;
      }
    };
    setTimeout(go, 0);
  });

  // Otra tanda de práctica para el sistema
  view.addEventListener("click", (e) => {
    const nb = e.target.closest("[data-next-set]");
    if (!nb) return;
    const topic = nb.dataset.nextSet;
    pracNext(topic);
    nb.closest(".practica").outerHTML = renderPractica(topic);
  });

  view.addEventListener("click", (e) => {
  });

  // Borrar las marcas de respondida de un sistema
  view.addEventListener("click", (e) => {
    const rb = e.target.closest("[data-reset-done]");
    if (!rb) return;
    const topic = rb.dataset.resetDone;
    const ids = new Set([...(PRACTICA[topic] || []), ...(PRACTICA_DEV[topic] || [])].map((q) => q.id));
    const done = loadDone();
    ids.forEach((id) => delete done[id]);
    saveDone(done);
    ids.forEach((id) => delete memDone[id]);
    rb.closest(".practica").outerHTML = renderPractica(topic);
  });

  // Enlace a la teoría: abre el capítulo, despliega su sección y se ubica en el encabezado
  view.addEventListener("click", (e) => {
    const a = e.target.closest("a.ver-teoria");
    if (!a) return;
    e.preventDefault();
    const el = document.getElementById(a.dataset.sec);
    if (!el) {
      // Desde el parcial o la práctica: vuelve a la guía y el render se ocupa del desplazamiento
      pendingSec = a.dataset.sec;
      location.hash = "#/guia";
      return;
    }
    openSec(el);
  });

  // Capítulos colapsables de a uno: al abrir uno, se cierran los demás
  view.addEventListener(
    "toggle",
    (e) => {
      const d = e.target;
      if (d.tagName !== "DETAILS" || !d.open) return;
      view.querySelectorAll(".cap details[open]").forEach((o) => {
        if (o !== d) o.open = false;
      });
    },
    true
  );

  // Preguntas de práctica dentro de cada capítulo: al elegir, se marca la correcta y se muestra la explicación
  view.addEventListener("click", (e) => {
    const b = e.target.closest(".pq .opt");
    if (!b) return;
    const pq = b.closest(".pq");
    if (pq.dataset.done) return;
    pq.dataset.done = "1";
    const chosen = Number(b.dataset.pos);
    const correct = Number(pq.dataset.correct);
    pq.querySelectorAll(".opt").forEach((o, i) => {
      o.disabled = true;
      if (i === correct) o.classList.add("correct");
      else if (i === chosen) o.classList.add("wrong");
    });
    const fb = pq.querySelector(".pq-fb");
    fb.querySelector("strong").textContent = chosen === correct ? "Correcto." : "Incorrecto.";
    fb.hidden = false;
    // Marca de respondida, guardada para que siga visible al volver a la página
    const ok = chosen === correct;
    pq.querySelector(".pq-q").insertAdjacentHTML("afterbegin", `<span class="badge-done ${ok ? "ok" : "no"}">✓ Respondida · ${ok ? "acertada" : "errada"}</span> `);
    const entry = { order: pq.dataset.order.split(",").map(Number), chosen };
    const done = loadDone();
    done[pq.dataset.id] = entry;
    saveDone(done);
    memDone[pq.dataset.id] = entry;
    registrarPractica(pq.dataset.id, ok, b.textContent.replace(/^[A-Z]\) /, ""));
  });

  // Desarrollo de aplicación: al mostrar el modelo se registra el resultado (bien con 3 o más puntos marcados)
  view.addEventListener("click", (e) => {
    const b = e.target.closest("[data-pd-show]");
    if (!b) return;
    const pd = b.closest(".pd");
    if (pd.dataset.done) return;
    pd.dataset.done = "1";
    const marks = [...pd.querySelectorAll("input[data-pd-check]")].filter((i) => i.checked).map((i) => Number(i.dataset.pdCheck));
    const ok = marks.length >= 3;
    pd.querySelectorAll("input").forEach((i) => (i.disabled = true));
    pd.querySelector(".pd-model").hidden = false;
    b.remove();
    pd.querySelector(".pd-q").insertAdjacentHTML("afterbegin", `<span class="badge-done ${ok ? "ok" : "no"}">✓ Respondida · ${ok ? "acertada" : "errada"}</span> `);
    const entry = { marks, ok };
    const done = loadDone();
    done[pd.dataset.id] = entry;
    saveDone(done);
    memDone[pd.dataset.id] = entry;
    registrarPractica(pd.dataset.id, ok, `${marks.length} de 5 puntos`, "dev");
  });

  window.addEventListener("hashchange", rerender);
  buildToc();
  rerender();
})();
