// Lógica de la web: rutas por hash, filtros por origen, preguntas tipo parcial.
(function () {
  "use strict";

  const view = document.getElementById("view");
  const filters = document.getElementById("filters");
  const filterList = document.getElementById("filter-list");
  const CONF_LABEL = { alta: "confianza alta", media: "confianza media", baja: "confianza baja" };

  // ---------- utilidades ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const chip = (src) => `<span class="chip src-${src}" title="${esc(SOURCES[src].label)}">${esc(SOURCES[src].short)}</span>`;
  const refHtml = (ref) => (ref ? `<span class="ref">${esc(ref)}</span>` : "");
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const topicTitle = (id) => (TOPICS.find((t) => t.id === id) || { title: id }).title;

  // ---------- bloques de contenido ----------
  function renderBlock(b) {
    // Los bloques normales llevan src propio; el de conflicto usa a/b.
    const head = `<div class="blk src-${b.src}" data-src="${b.src}">`;
    const meta = () => `<div>${chip(b.src)}${refHtml(b.ref)}</div>`;
    switch (b.t) {
      case "p":
        return `${head}${meta()}<p>${esc(b.text)}</p></div>`;
      case "dato":
        return `<div class="blk dato src-${b.src}" data-src="${b.src}">${meta()}<p><strong>Ojo:</strong> ${esc(b.text)}</p></div>`;
      case "ul":
        return `${head}${meta()}<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`;
      case "table":
        return `${head}${meta()}<table><thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${b.rows
          .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`;
      case "conflict":
        return `<div class="conflict" data-conflict data-src-a="${b.a.src}" data-src-b="${b.b.src}">
          <strong>Las fuentes no coinciden</strong>
          <div class="side a">${chip(b.a.src)}${refHtml(b.a.ref)}<br>${esc(b.a.text)}</div>
          <div class="side b">${chip(b.b.src)}${refHtml(b.b.ref)}<br>${esc(b.b.text)}</div>
          <div class="note">${esc(b.note)}</div>
        </div>`;
      default:
        return "";
    }
  }

  // ---------- filtros por origen ----------
  function buildFilters() {
    filterList.innerHTML = Object.keys(SOURCES)
      .map((k) => `<label><input type="checkbox" value="${k}" checked> ${chip(k)} ${esc(SOURCES[k].short)}</label>`)
      .join("");
  }
  function applyFilters() {
    const on = new Set([...filterList.querySelectorAll("input:checked")].map((i) => i.value));
    view.querySelectorAll("[data-src]").forEach((el) => {
      el.classList.toggle("hidden-by-filter", !on.has(el.dataset.src));
    });
    view.querySelectorAll("[data-conflict]").forEach((el) => {
      const show = on.has(el.dataset.srcA) || on.has(el.dataset.srcB);
      el.classList.toggle("hidden-by-filter", !show);
    });
  }
  filterList.addEventListener("change", applyFilters);
  document.getElementById("filter-all").addEventListener("click", () => {
    filterList.querySelectorAll("input").forEach((i) => (i.checked = true));
    applyFilters();
  });

  // ---------- páginas ----------
  function pageInicio() {
    filters.hidden = true;
    const counts = { mc: QUIZ.mc.length, dev: QUIZ.dev.length };
    return `
      <section class="card">
        <h1>Segundo parcial de Anatomía</h1>
        <p>Martes 24/11/2026 (según la guía; confirmar en el campus). Formato esperado: 25 consignas, 20 de opción múltiple y 5 de desarrollo con justificación.</p>
        <p>Esta web mezcla la presentación de la cátedra, las preguntas modelo, el sistema endocrino y el sistema nervioso (PDF), los apuntes de una compañera, la guía web y los videos. Cada bloque muestra de dónde sale.</p>
        <div class="actions">
          <a class="btn primary" href="#/quiz">Hacer parcial simulado</a>
          <a class="btn" href="#/temas">Ver temas</a>
          <a class="btn" href="#/fuentes">Ver fuentes</a>
        </div>
      </section>
      <section class="card">
        <h2>Temas</h2>
        <div class="topic-list">
          ${TOPICS.map((t) => `<a href="#/tema/${t.id}"><strong>${esc(t.title)}</strong><br><span class="conf ${t.conf}">${CONF_LABEL[t.conf]}</span></a>`).join("")}
        </div>
      </section>
      <section class="card">
        <h2>Banco de preguntas</h2>
        <p>${counts.mc} de opción múltiple y ${counts.dev} de desarrollo, con explicación y origen de cada una.</p>
      </section>`;
  }

  function pageTemas() {
    filters.hidden = true;
    return `<section class="card"><h1>Temas</h1><p class="muted">Cada tema indica su nivel de confianza. Los marcados como baja salen sobre todo del resumen de la guía.</p></section>
      <section class="card"><div class="topic-list">
        ${TOPICS.map((t) => `<a href="#/tema/${t.id}"><strong>${esc(t.title)}</strong><br><span class="conf ${t.conf}">${CONF_LABEL[t.conf]}</span></a>`).join("")}
      </div></section>`;
  }

  function pageTema(id) {
    const t = TOPICS.find((x) => x.id === id);
    if (!t) return `<section class="card"><p>Tema no encontrado.</p></section>`;
    filters.hidden = false;
    return `<section class="card">
        <h1>${esc(t.title)} <span class="conf ${t.conf}">${CONF_LABEL[t.conf]}</span></h1>
        <p class="muted">${esc(t.intro)}</p>
      </section>
      ${t.sections
        .map((s) => `<section class="card"><h2>${esc(s.h)}</h2>${s.blocks.map(renderBlock).join("")}</section>`)
        .join("")}
      <section class="card"><div class="actions"><a class="btn primary" href="#/quiz/${t.id}">Practicar preguntas de ${esc(t.title)}</a></div></section>`;
  }

  function pageFuentes() {
    filters.hidden = true;
    const rows = Object.keys(SOURCES)
      .map((k) => `<tr><td>${chip(k)}</td><td>${esc(SOURCES[k].label)}</td><td>${esc(SOURCES[k].group)}</td></tr>`)
      .join("");
    return `<section class="card">
        <h1>Fuentes</h1>
        <p>Cada origen tiene un color. Los datos de cada bloque indican la diapositiva, la página del PDF o la sección de la guía.</p>
        <table class="src-table"><thead><tr><th>Origen</th><th>Material</th><th>Tipo</th></tr></thead><tbody>${rows}</tbody></table>
      </section>
      <section class="card">
        <h2>Pendientes y límites</h2>
        <ul>
          <li><strong>Videos sisbiofiuba:</strong> no se pudieron ver ni transcribir; sólo hay etiquetas (auditivo, visual, gustativo, olfativo, táctil).</li>
          <li><strong>Guía guiasdeingenieria:</strong> sitio no oficial, con fuente no preaprobada: el contenido está parafraseado. Secciones 12 (respiratorio), 13 (cardiovascular), 14 (digestivo), 16 (endócrino) y la primera parte de la 15 (urinario) se leyeron casi completas. El resto de la 15 y la 17 (nervioso) llegaron como resumen y se marcan \"resumen\" en la referencia. Las secciones 4, 6, 7 (33 preguntas reales) y 8 (simulacro) no se leyeron.</li>
          <li><strong>Apuntes de compañera:</strong> pueden tener errores. Ejemplo: la ubicación de la renina.</li>
          <li><strong>Preguntas generadas:</strong> las escribí yo y se marcan como generadas. No son de la cátedra.</li>
        </ul>
      </section>`;
  }

  // ---------- preguntas ----------
  // Estado del simulado / práctica
  let session = null;

  function buildSession(mode, topic) {
    if (mode === "parcial") {
      const mc = shuffle(QUIZ.mc).slice(0, 20).map((q) => prepareMC(q));
      const dev = QUIZ.dev.slice();
      return { mode, items: [...mc, ...dev.map((d) => ({ kind: "dev", data: d }))], i: 0, answers: {}, checks: {}, finished: false };
    }
    const mc = QUIZ.mc.filter((q) => !topic || q.topic === topic);
    const dev = QUIZ.dev.filter((d) => !topic || d.topic === topic);
    const items = [...shuffle(mc).map((q) => prepareMC(q)), ...dev.map((d) => ({ kind: "dev", data: d }))];
    return { mode, topic, items, i: 0, answers: {}, checks: {}, finished: false };
  }

  // Mezcla las opciones y registra dónde queda la correcta
  function prepareMC(q) {
    const order = shuffle(q.opts.map((text, idx) => ({ text, idx })));
    return { kind: "mc", data: q, opts: order, correctPos: order.findIndex((o) => o.idx === q.ans) };
  }

  function renderQuizItem(item, n, total) {
    if (item.kind === "mc") {
      const it = item;
      const answered = session.answers[n] !== undefined;
      const chosen = session.answers[n];
      const reveal = session.mode === "practica" && answered;
      const opts = it.opts
        .map((o, pos) => {
          let cls = "opt";
          if (reveal) {
            if (pos === it.correctPos) cls += " correct";
            else if (pos === chosen) cls += " wrong";
          }
          return `<button class="${cls}" data-pos="${pos}" ${answered && session.mode === "practica" ? "disabled" : ""}>${String.fromCharCode(65 + pos)}) ${esc(o.text)}</button>`;
        })
        .join("");
      const expl = reveal
        ? `<div class="expl"><strong>${chosen === it.correctPos ? "Correcto." : "Incorrecto."}</strong> ${esc(it.data.expl)}<div class="ref">${chip(it.data.src)} ${esc(it.data.ref)}</div></div>`
        : "";
      return `<section class="card"><p class="muted">Consigna ${n + 1} de ${total} · opción múltiple · ${esc(topicTitle(it.data.topic))}</p>
        <h2 style="border:0;margin-top:.3rem">${esc(it.data.q)}</h2>${opts}${expl}</section>`;
    }
    // desarrollo
    const d = item.data;
    const ck = session.checks[n] || {};
    const list = d.checklist
      .map((c, k) => `<li><label><input type="checkbox" data-check="${k}" ${ck[k] ? "checked" : ""}> ${esc(c)}</label></li>`)
      .join("");
    const showModel = session.revealed && session.revealed[n];
    const model = showModel
      ? `<div class="expl"><strong>Respuesta modelo:</strong> ${esc(d.modelo)}<br><strong>Justificación:</strong> ${esc(d.justificacion)}<div class="ref">${chip(d.src)} ${esc(d.ref)}</div></div>`
      : "";
    return `<section class="card"><p class="muted">Consigna ${n + 1} de ${total} · desarrollo (con justificación) · ${esc(topicTitle(d.topic))}</p>
      <h2 style="border:0;margin-top:.3rem">${esc(d.q)}</h2>
      <p class="muted">Escribí tu respuesta en papel o en un documento. Después marcá qué puntos incluiste:</p>
      <ul class="check">${list}</ul>
      <div class="actions"><button class="btn" data-reveal="${n}">${showModel ? "Ocultar respuesta modelo" : "Ver respuesta modelo"}</button></div>
      ${model}</section>`;
  }

  function renderQuiz(mode, topic) {
    filters.hidden = true;
    if (!session || session.mode !== mode || session.topic !== topic) {
      session = buildSession(mode, topic);
    }
    if (session.finished) return renderResult();

    const total = session.items.length;
    const n = session.i;
    const item = session.items[n];
    const isMC = item.kind === "mc";
    const answered = isMC ? session.answers[n] !== undefined : true;
    const isLast = n === total - 1;
    const pct = Math.round((n / total) * 100);
    const title = mode === "parcial" ? "Parcial simulado" : `Práctica${topic ? " · " + topicTitle(topic) : ""}`;
    const modeLabel = mode === "parcial" ? "" : `
      <select id="topic-select" aria-label="Tema">
        <option value="">Todos los temas</option>
        ${TOPICS.map((t) => `<option value="${t.id}" ${topic === t.id ? "selected" : ""}>${esc(t.title)}</option>`).join("")}
      </select>`;

    return `
      <section class="card">
        <div class="quiz-head">
          <h1 style="margin:0">${esc(title)}</h1>
          <div>${modeLabel}
            <a class="btn" href="#/quiz/parcial">Parcial simulado</a>
          </div>
        </div>
        <div class="progress"><div style="width:${pct}%"></div></div>
        <p class="muted">${mode === "parcial" ? "Sin respuestas ni explicaciones hasta el final." : "Respondé y leé la explicación con su origen."}</p>
      </section>
      ${renderQuizItem(item, n, total)}
      <div class="actions">
        <button class="btn" id="prev" ${n === 0 ? "disabled" : ""}>Anterior</button>
        ${isLast
          ? `<button class="btn primary" id="finish" ${answered || mode !== "practica" ? "" : "disabled"}>Terminar</button>`
          : `<button class="btn primary" id="next" ${answered || mode !== "practica" ? "" : "disabled"}>Siguiente</button>`}
      </div>`;
  }

  function renderResult() {
    const mcItems = session.items.map((it, n) => ({ it, n })).filter((x) => x.it.kind === "mc");
    const mcOk = mcItems.filter(({ it, n }) => session.answers[n] === it.correctPos).length;
    const devItems = session.items.map((it, n) => ({ it, n })).filter((x) => x.it.kind === "dev");
    const devPct = devItems.length
      ? devItems.reduce((acc, { n, it }) => acc + (session.checks[n] ? Object.values(session.checks[n]).filter(Boolean).length / it.data.checklist.length : 0), 0) / devItems.length
      : 0;
    const review = mcItems
      .map(({ it, n }) => {
        const ok = session.answers[n] === it.correctPos;
        return `<li>${ok ? "✔" : "✘"} ${esc(it.data.q)}<div class="expl" style="margin:.3rem 0">${esc(it.data.expl)} <span class="ref">${chip(it.data.src)} ${esc(it.data.ref)}</span></div></li>`;
      })
      .join("");
    return `
      <section class="card">
        <h1>Resultado del parcial simulado</h1>
        <p class="score">Opción múltiple: ${mcOk} / ${mcItems.length}</p>
        <p class="score">Desarrollo (autoevaluación): ${Math.round(devPct * 100)}% de los puntos de la checklist</p>
        <div class="actions"><a class="btn primary" href="#/quiz/parcial" id="again">Nuevo parcial simulado</a></div>
      </section>
      <section class="card"><h2>Revisión de opción múltiple</h2><ul style="padding-left:1.1rem">${review}</ul></section>`;
  }

  // ---------- eventos del quiz (delegación) ----------
  view.addEventListener("click", (e) => {
    const t = e.target;
    if (!session) return;
    const item = session.items[session.i];
    if (t.matches("button.opt") && item && item.kind === "mc") {
      const pos = Number(t.dataset.pos);
      if (session.mode === "practica" && session.answers[session.i] !== undefined) return;
      session.answers[session.i] = pos;
      rerender();
    } else if (t.id === "next") {
      session.i++; rerender();
    } else if (t.id === "prev") {
      session.i--; rerender();
    } else if (t.id === "again") {
      e.preventDefault();
      session = null;
      rerender();
    } else if (t.id === "finish") {
      session.finished = true;
      rerender();
    } else if (t.dataset.reveal !== undefined) {
      session.revealed = session.revealed || {};
      const k = Number(t.dataset.reveal);
      session.revealed[k] = !session.revealed[k];
      rerender();
    }
  });
  view.addEventListener("change", (e) => {
    const t = e.target;
    if (t.id === "topic-select") {
      const topic = t.value || "";
      location.hash = topic ? `#/quiz/${topic}` : "#/quiz";
      return;
    }
    if (t.dataset.check !== undefined && session) {
      session.checks[session.i] = session.checks[session.i] || {};
      session.checks[session.i][t.dataset.check] = t.checked;
    }
  });

  // ---------- router ----------
  function rerender() {
    const r = route();
    view.innerHTML = r.html;
    if (r.after) r.after();
    applyFilters();
    window.scrollTo(0, 0);
  }

  function route() {
    const parts = (location.hash || "#/inicio").replace(/^#\/?/, "").split("/");
    const [page, arg] = parts;
    if (page === "tema") return { html: pageTema(arg) };
    if (page === "temas") return { html: pageTemas() };
    if (page === "fuentes") return { html: pageFuentes() };
    if (page === "quiz") {
      if (arg === "parcial") return { html: renderQuiz("parcial") };
      return { html: renderQuiz("practica", arg || "") };
    }
    return { html: pageInicio() };
  }

  window.addEventListener("hashchange", rerender);

  // Integra el contenido extendido de la guía (secciones 12 a 17) en cada tema.
  TOPICS.forEach((t) => {
    const g = GUIA[t.id];
    if (!g) return;
    t.sections = g.mode === "replace" ? g.sections : t.sections.concat(g.sections);
    if (g.conf) t.conf = g.conf;
    if (g.intro) t.intro = g.intro;
  });

  buildFilters();
  rerender();
})();
