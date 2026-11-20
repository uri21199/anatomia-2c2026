// Réplica de la estructura de la guía (secciones 12 a 18): índice con anclas, capítulos
// desplegables y banco de preguntas tipo parcial.
(function () {
  "use strict";

  const view = document.getElementById("view");
  const toc = document.getElementById("toc");

  // Capítulos 12 a 18, con los títulos de la guía
  const CAPS = [
    { num: 12, id: "fan-s12", title: "Esplacnología: tórax y aparato respiratorio", topic: "respiratorio", sections: GUIA.respiratorio.sections },
    { num: 13, id: "fan-s13", title: "Sistema cardiovascular", topic: "circulatorio", sections: GUIA.circulatorio.sections },
    { num: 14, id: "fan-s14", title: "Aparato digestivo", topic: "digestivo", sections: GUIA.digestivo.sections },
    { num: 15, id: "fan-s15", title: "Aparato urinario", topic: "urinario", sections: GUIA.urinario.sections },
    { num: 16, id: "fan-s16", title: "Sistema endócrino", topic: "endocrino", sections: GUIA.endocrino.sections },
    { num: 17, id: "fan-s17", title: "Sistema nervioso", topic: "nervioso", sections: GUIA.nervioso.sections },
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

  function renderCap(c) {
    return `<section class="cap" id="${c.id}">
      <details open>
        <summary><span class="num">${c.num}</span> ${esc(c.title)}</summary>
        <div class="cap-body">
          ${c.sections.map((s) => `<h3>${esc(s.h)}</h3>${s.blocks.map(renderBlock).join("")}`).join("")}
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

  function buildSession(mode, topic) {
    if (mode === "parcial") {
      const mc = shuffle(QUIZ.mc).slice(0, 20).map(prepareMC);
      const dev = QUIZ.dev.map((d) => ({ kind: "dev", data: d }));
      return { mode, items: [...mc, ...dev], i: 0, answers: {}, checks: {}, revealed: {}, finished: false };
    }
    const mc = QUIZ.mc.filter((q) => !topic || q.topic === topic).map(prepareMC);
    const dev = QUIZ.dev.filter((d) => !topic || d.topic === topic).map((d) => ({ kind: "dev", data: d }));
    return { mode, topic, items: [...shuffle(mc), ...dev], i: 0, answers: {}, checks: {}, revealed: {}, finished: false };
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
          }
          const dis = answered && session.mode === "practica" ? "disabled" : "";
          return `<button class="${cls}" data-pos="${pos}" ${dis}>${String.fromCharCode(65 + pos)}) ${esc(o.text)}</button>`;
        })
        .join("");
      const expl = reveal
        ? `<div class="expl"><strong>${chosen === item.correctPos ? "Correcto." : "Incorrecto."}</strong> ${esc(item.data.expl)}<div class="ref">${esc(TOPIC_TITLE[item.data.topic] || "")} · ${esc(item.data.ref)}</div></div>`
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
      ? `<div class="expl"><strong>Respuesta modelo:</strong> ${esc(d.modelo)}<br><strong>Justificación:</strong> ${esc(d.justificacion)}<div class="ref">${esc(TOPIC_TITLE[d.topic] || "")} · ${esc(d.ref)}</div></div>`
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
    const review = mcIdx
      .map(({ it, n }) => {
        const ok = session.answers[n] === it.correctPos;
        return `<li>${ok ? "✔" : "✘"} ${esc(it.data.q)}<div class="expl" style="margin:.3rem 0">${esc(it.data.expl)} <span class="ref">${esc(it.data.ref)}</span></div></li>`;
      })
      .join("");
    return `<section class="card">
        <h1>Resultado del parcial simulado</h1>
        <p class="score">Opción múltiple: ${mcOk} / ${mcIdx.length}</p>
        <p class="score">Desarrollo (autoevaluación): ${Math.round(devPct * 100)}% de la checklist</p>
        <div class="actions"><a class="btn primary" href="#/preguntas/parcial" id="again">Nuevo parcial simulado</a></div>
      </section>
      <section class="card"><h2>Revisión de opción múltiple</h2><ul class="review">${review}</ul></section>`;
  }

  function pagePreguntas(mode, topic) {
    if (!session || session.mode !== mode || session.topic !== topic) session = buildSession(mode, topic);
    if (session.finished) return renderResult();
    const total = session.items.length;
    const n = session.i;
    const item = session.items[n];
    const answered = item.kind === "mc" ? session.answers[n] !== undefined : true;
    const isLast = n === total - 1;
    const pct = Math.round((n / total) * 100);
    const title = mode === "parcial" ? "Parcial simulado" : "Práctica";
    const sel = mode === "parcial" ? "" : `
      <select id="topic-select" aria-label="Capítulo">
        <option value="">Todos los capítulos</option>
        ${CAPS.map((c) => `<option value="${c.topic}" ${topic === c.topic ? "selected" : ""}>${esc(c.num + " · " + c.title)}</option>`).join("")}
      </select>`;
    return `
      <section class="card">
        <div class="quiz-head">
          <h1>${esc(title)}</h1>
          <div>${sel} <a class="btn" href="#/preguntas/parcial">Parcial simulado</a></div>
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
      rerender();
    } else if (t.id === "next") { session.i++; rerender(); }
    else if (t.id === "prev") { session.i--; rerender(); }
    else if (t.id === "finish") { session.finished = true; rerender(); }
    else if (t.id === "again") { e.preventDefault(); session = null; rerender(); }
    else if (t.dataset.reveal !== undefined) {
      const k = Number(t.dataset.reveal);
      session.revealed[k] = !session.revealed[k];
      rerender();
    }
  });
  view.addEventListener("change", (e) => {
    const t = e.target;
    if (t.id === "topic-select") {
      location.hash = t.value ? `#/preguntas/${t.value}` : "#/preguntas";
      return;
    }
    if (t.dataset.check !== undefined && session) {
      session.checks[session.i] = session.checks[session.i] || {};
      session.checks[session.i][t.dataset.check] = t.checked;
    }
  });

  // ---------- router ----------
  function rerender() {
    const parts = (location.hash || "#/guia").replace(/^#\/?/, "").split("/");
    const [page, arg] = parts;
    const isQuiz = page === "preguntas";
    document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("on", a.dataset.tab === (isQuiz ? "preguntas" : "guia")));
    toc.hidden = false;
    if (isQuiz) {
      view.innerHTML = arg === "parcial" ? pagePreguntas("parcial") : pagePreguntas("practica", arg || "");
      window.scrollTo(0, 0);
      return;
    }
    view.innerHTML = pageGuia();
    // Desplaza al capítulo indicado por el ancla (#fan-sNN)
    window.scrollTo(0, 0);
  }

  // Los enlaces del índice a capítulos vuelven a la guía y se desplazan al ancla
  toc.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-anchor]");
    if (!a) return;
    e.preventDefault();
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

  window.addEventListener("hashchange", rerender);
  buildToc();
  rerender();
})();
