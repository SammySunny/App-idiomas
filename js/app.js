/* Parla & Sprich — aplicación principal.
   Vanilla JS, sin dependencias ni paso de compilación. */
(() => {
  'use strict';

  const C = window.COURSES || {};
  const LANGS = ['de', 'it'].filter(l => C[l]);
  const LEVELS = {
    a1: { name: 'Principiante', color: 'var(--mint)' },
    a2: { name: 'Elemental', color: 'var(--sky)' },
    b1: { name: 'Intermedio', color: 'var(--lav)' },
    b2: { name: 'Intermedio alto', color: 'var(--peach)' },
    c1: { name: 'Avanzado', color: 'var(--rose)' },
  };
  const PASS = 0.7;                       // 70 % para aprobar una unidad
  const INTERVAL = [0, 1, 3, 7, 16, 35];  // días hasta el próximo repaso según la caja (1–5)
  const BOX_NAMES = ['', 'Nuevas', 'Aprendiendo', 'En camino', 'Firmes', 'Dominadas'];
  const KEY = 'parla-sprich:v1';
  const app = document.getElementById('app');

  /* ---------- utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const rnd = a => a[Math.floor(Math.random() * a.length)];
  const pad = n => String(n).padStart(2, '0');
  const dayStr = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); };

  /* ---------- íconos ---------- */
  const P = {
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
    cards: '<rect x="3" y="7" width="13" height="13" rx="2.5"/><path d="M8 4h10.5A2.5 2.5 0 0 1 21 6.5V17"/>',
    chart: '<path d="M5 20v-8M12 20V5M19 20v-5"/>',
    sliders: '<path d="M4 7h9M18 7h2M4 17h3M12 17h8"/><circle cx="15.5" cy="7" r="2.5"/><circle cx="9.5" cy="17" r="2.5"/>',
    flame: '<path d="M12 3c.8 3 4.5 4.8 4.5 9.2a4.5 4.5 0 0 1-9 0c0-1.8.8-3.1 1.7-4 .2 1.4 1 2.3 2 2.3C11 8 10.9 5.4 12 3z"/>',
    bolt: '<path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/>',
    check: '<path d="M5 12.5 9.5 17 19 7.5"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    speaker: '<path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    swap: '<path d="M7 7h12l-3.5-3.5M17 17H5l3.5 3.5"/>',
    down: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    up: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5z"/><path d="M3 13l9 5 9-5"/>',
    pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".8"/>',
  };
  const ico = (n, c = '') => `<svg class="ico ${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
  const LOGO = '<svg class="logo" viewBox="0 0 48 48" aria-hidden="true"><path d="M5 11a7 7 0 0 1 7-7h13a7 7 0 0 1 7 7v7a7 7 0 0 1-7 7h-8l-6.5 5.5V25A6 6 0 0 1 5 19z" fill="var(--peach)"/><path d="M43 25a7 7 0 0 0-7-7H23a7 7 0 0 0-7 7v7a7 7 0 0 0 7 7h8l6.5 5.5V39a6 6 0 0 0 5.5-6z" fill="var(--mint)" stroke="var(--bg)" stroke-width="2.5"/></svg>';

  /* ---------- estado persistente ---------- */
  const emptyProg = () => ({ units: {}, srs: {}, xp: 0, miss: {} });
  const defaults = () => ({
    lang: null,
    settings: { rate: 0.9, autoplay: true, unlockAll: false, goal: 20, direction: 'mix' },
    progress: Object.fromEntries(LANGS.map(l => [l, emptyProg()])),
    activity: {},
    streak: { count: 0, last: null },
  });
  function load() {
    const d = defaults();
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (s && typeof s === 'object') {
        return {
          ...d,
          lang: C[s.lang] ? s.lang : null,
          settings: { ...d.settings, ...(s.settings || {}) },
          progress: Object.fromEntries(LANGS.map(l => [l, { ...emptyProg(), ...((s.progress || {})[l] || {}) }])),
          activity: s.activity || {},
          streak: { ...d.streak, ...(s.streak || {}) },
        };
      }
    } catch (e) { /* datos dañados: se empieza de cero */ }
    return d;
  }
  let S = load();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* almacenamiento lleno o bloqueado */ } };

  /* ---------- índice del curso ---------- */
  const FLAT = {}, TOPICS = {}, ITEMS = {};
  LANGS.forEach(l => {
    FLAT[l] = C[l].levels.flatMap(lv => lv.units.map(u => Object.assign(u, { level: lv.id, kind: 'unit' })));
    TOPICS[l] = (C[l].topics || []).map(t => Object.assign(t, { kind: 'topic', cloze: t.cloze || [] }));
    ITEMS[l] = Object.fromEntries([...FLAT[l], ...TOPICS[l]].map(u => [u.id, u]));
  });
  const getUnit = (l, id) => ITEMS[l][id];
  const prog = (l = S.lang) => S.progress[l];
  const unitNo = (l, u) => FLAT[l].filter(x => x.level === u.level).indexOf(u) + 1;
  const isDone = (l, u) => !!prog(l).units[u.id]?.done;
  function isUnlocked(l, u) {
    if (u.kind === 'topic' || S.settings.unlockAll || isDone(l, u)) return true;
    const i = FLAT[l].indexOf(u);
    return i <= 0 || isDone(l, FLAT[l][i - 1]);
  }
  const nextOpenUnit = l => FLAT[l].find(u => !isDone(l, u) && isUnlocked(l, u));
  function cardOf(l, key) {
    const [uid, i] = key.split('#');
    const u = getUnit(l, uid);
    const v = u && u.vocab[+i];
    return v ? { w: v[0], t: v[1], unit: u } : null;
  }
  const dueKeys = (l = S.lang) => { const t = dayStr(), srs = prog(l).srs; return Object.keys(srs).filter(k => srs[k].due <= t && cardOf(l, k)); };

  /* ---------- XP y racha ---------- */
  function addXP(n, l = S.lang) {
    if (!n) return;
    prog(l).xp += n;
    const t = dayStr();
    S.activity[t] = (S.activity[t] || 0) + n;
    if (S.streak.last !== t) {
      S.streak.count = S.streak.last === addDays(-1) ? S.streak.count + 1 : 1;
      S.streak.last = t;
    }
    save();
  }
  const streak = () => (S.streak.last === dayStr() || S.streak.last === addDays(-1) ? S.streak.count : 0);

  /* ---------- voz (Web Speech API) ---------- */
  const TTS = { ok: 'speechSynthesis' in window, voices: [] };
  const loadVoices = () => { TTS.voices = speechSynthesis.getVoices(); };
  if (TTS.ok) { loadVoices(); speechSynthesis.addEventListener?.('voiceschanged', loadVoices); }
  function voiceFor(tag) {
    const t = tag.toLowerCase(), p = t.slice(0, 2);
    const list = TTS.voices.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(p));
    return list.find(v => v.lang.replace('_', '-').toLowerCase() === t && v.localService) ||
      list.find(v => v.lang.replace('_', '-').toLowerCase() === t) || list[0] || null;
  }
  const hasVoice = (l = S.lang) => TTS.ok && !!voiceFor(C[l].tts);
  function speak(text, l = S.lang, rate) {
    if (!TTS.ok || !text) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(text).replace(/…/g, ', '));
    u.lang = C[l].tts;
    const v = voiceFor(C[l].tts);
    if (v) u.voice = v;
    u.rate = rate || S.settings.rate;
    speechSynthesis.speak(u);
  }
  const sayBtn = (text, l = S.lang, cls = '') => TTS.ok
    ? `<button class="say ${cls}" data-act="say" data-text="${esc(text)}" data-lang="${l}" aria-label="Escuchar">${ico('speaker')}</button>` : '';

  /* Artículos alemanes con color según el género */
  function fmtWord(w, t, l) {
    if (l === 'de') {
      const m = String(w).match(/^(der|die|das) (\S+)$/);
      if (m) {
        const g = /^(los|las) /.test(t) ? 'pl' : { der: 'm', die: 'f', das: 'n' }[m[1]];
        return `<span class="art g-${g}">${m[1]}</span> ${esc(m[2])}`;
      }
    }
    return esc(w);
  }

  /* ---------- corrección de respuestas escritas ---------- */
  const norm = s => String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?¿¡;:«»"“”()…—–-]/g, ' ').replace(/\s+/g, ' ').trim();
  const fold = s => norm(s).replace(/ß/g, 'ss').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  function lev(a, b) {
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      for (let j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[b.length];
  }
  const ARTS = { de: ['der', 'die', 'das'], it: ["l'", 'gli', 'il', 'lo', 'la', 'le', 'i'] };
  function splitArt(s, l) {
    for (const a of ARTS[l] || []) {
      if (a.endsWith("'") ? s.startsWith(a) : s.startsWith(a + ' ')) return [a, s.slice(a.length).trim()];
    }
    return ['', s];
  }
  function checkWritten(input, target, l, strict) {
    const a = norm(input), b = norm(target);
    if (!a) return { ok: false };
    if (a === b) return { ok: true };
    // En las conjugaciones una letra cambia la forma (fährt ≠ fahrt), así que no hay tolerancia.
    if (strict) return fold(a) === fold(b) ? { ok: false, note: 'Casi: revisá acentos y diéresis.' } : { ok: false };
    const [aa, ar] = splitArt(a, l), [ba, br] = splitArt(b, l);
    const same = (x, y) => x === y || fold(x) === fold(y);
    if (ba && aa && aa !== ba && same(ar, br)) return { ok: false, note: `El artículo correcto es «${ba}».` };
    if (fold(a) === fold(b)) return { ok: true, note: 'Correcto, pero revisá acentos y diéresis.' };
    if (b.length > 4 && lev(fold(a), fold(b)) <= 1) return { ok: true, note: 'Casi perfecto: revisá la ortografía.' };
    if (ba && !aa && same(a, br)) return { ok: true, note: `Bien. Aprendela con su artículo: «${ba}».` };
    return { ok: false };
  }

  /* ---------- armado de las lecciones ---------- */
  const vocabOf = u => u.vocab.map(([w, t], i) => ({ w, t, key: `${u.id}#${i}` }));
  const allVocab = l => [...FLAT[l], ...TOPICS[l]].flatMap(vocabOf);
  const isLong = w => w.split(/\s+/).length > 3 || w.length > 22 || w.includes('…');
  const peers = (l, u) => (u.kind === 'topic' ? TOPICS[l] : FLAT[l].filter(x => x.level === u.level)).filter(x => x !== u);
  const missedKeys = (l = S.lang) => { const m = prog(l).miss || {}; return Object.keys(m).filter(k => cardOf(l, k)).sort((a, b) => m[b] - m[a]); };
  function optionsFor(item, pool, field) {
    const seen = new Set([item[field]]);
    const out = [item[field]];
    for (const p of pool) {
      if (out.length >= 4) break;
      if (!seen.has(p[field])) { seen.add(p[field]); out.push(p[field]); }
    }
    return shuffle(out);
  }
  function tilesFor(sentence) {
    const words = sentence.split(/\s+/).map(w => w.replace(/[.,!?¿¡;:«»"]/g, '')).filter(Boolean);
    let order = shuffle(words.map((text, id) => ({ id, text })));
    for (let n = 0; n < 8 && words.length > 1 && order.every((t, i) => t.text === words[i]); n++) order = shuffle(order);
    return order;
  }
  /* Sustantivos con artículo, para el ejercicio de género */
  function nounInfo(l, w) {
    if (l === 'de') {
      const m = w.match(/^(der|die|das) (\S+)$/);
      return m ? { art: m[1], bare: m[2], opts: ['der', 'die', 'das'] } : null;
    }
    if (l === 'it') {
      let m = w.match(/^(il|lo|la|i|gli|le) (\S+)$/);
      if (m) return { art: m[1], bare: m[2], opts: ['i', 'gli', 'le'].includes(m[1]) ? ['i', 'gli', 'le'] : ['il', 'lo', 'la', "l'"] };
      m = w.match(/^l'(\S+)$/);
      if (m) return { art: "l'", bare: m[1], opts: ['il', 'lo', 'la', "l'"] };
    }
    return null;
  }
  const TRUE = 'Sí, es correcta', FALSE = 'No, es incorrecta';
  function vocabQ(type, it, pool) {
    if ((type === 'write' || type === 'dictation') && isLong(it.w)) type = 'mcFrom';
    if (type === 'listen' && isLong(it.w)) type = 'mcTo';
    const q = { type, item: it, answer: type === 'mcTo' ? it.t : it.w };
    if (type === 'mcTo') q.opts = optionsFor(it, pool, 't');
    else if (type === 'mcFrom' || type === 'listen') q.opts = optionsFor(it, pool, 'w');
    else if (type === 'tf') {
      const other = shuffle(pool).find(p => p.t !== it.t);
      q.shown = Math.random() < 0.5 || !other ? it.t : other.t;
      q.answer = q.shown === it.t ? TRUE : FALSE;
      q.opts = [TRUE, FALSE];
    }
    return q;
  }
  function sentQ(t, es, i, sentPool, voice) {
    let type = (voice ? ['order', 'sentMC', 'listenOrder'] : ['order', 'sentMC', 'order'])[i % 3];
    const others = [...new Set(sentPool.map(x => x[1]).filter(x => x !== es))];
    if (type === 'sentMC' && others.length < 2) type = 'order';
    if (type === 'sentMC') return { type, s: t, answer: es, opts: shuffle([es, ...shuffle(others).slice(0, 2)]) };
    return { type, answer: t, es, tiles: tilesFor(t) };
  }
  /* Arma una sesión mezclando todos los tipos de ejercicio posibles con el material dado. */
  function buildFrom(l, { voc, pool = [], sentences = [], cloze = [], sentPool = [], dictation = false, max = 8 }) {
    const seen = new Set();
    voc = voc.filter(v => !seen.has(v.w) && seen.add(v.w));
    const fullPool = [...shuffle(voc), ...shuffle(pool)];
    const voice = hasVoice(l);
    const types = ['mcTo', 'mcFrom', 'write', 'tf'];
    if (voice) types.splice(2, 0, 'listen');
    if (voice && dictation) types.push('dictation');
    const items = shuffle(voc);
    const main = items.slice(0, max), rest = items.slice(max);
    const vocabQs = main.map((it, k) => vocabQ(types[k % types.length], it, fullPool));
    const genderQs = shuffle(voc).map(v => [v, nounInfo(l, v.w)]).filter(x => x[1]).slice(0, 2)
      .map(([v, n]) => ({ type: 'gender', item: v, noun: n, answer: n.art, opts: n.opts }));
    const match = voc.length >= 4 ? [{ type: 'match', pairs: [...rest, ...shuffle(main)].slice(0, 4) }] : [];
    const clozeQs = cloze.map(([s, a, o]) => ({ type: 'cloze', s, answer: a, opts: shuffle(o) }));
    const sentQs = sentences.map(([t, es], i) => sentQ(t, es, i, sentPool, voice));
    // Primero reconocimiento de vocabulario, después todo mezclado.
    const intro = vocabQs.filter(q => q.type === 'mcTo').concat(vocabQs.filter(q => q.type !== 'mcTo')).slice(0, 3);
    const others = vocabQs.filter(q => !intro.includes(q));
    return [...intro, ...match, ...shuffle([...others, ...genderQs, ...clozeQs, ...sentQs])];
  }
  function buildSession(l, u) {
    const others = peers(l, u);
    return buildFrom(l, {
      voc: vocabOf(u), pool: others.flatMap(vocabOf),
      sentences: u.sentences, cloze: u.cloze || [],
      sentPool: others.flatMap(x => x.sentences),
      dictation: u.level !== 'a1',
    });
  }
  function fakeParticiple(l, v) {
    const [inf, , , part] = v;
    if (l === 'de') {
      const stem = inf.replace(/e?n$/, '');
      return [`ge${stem}t`, `ge${stem}en`, `ge${inf}`].find(x => x !== part);
    }
    const m = inf.match(/^(.*)(are|ere|ire)$/) || [inf, inf.slice(0, -3), 'are'];
    const reg = { are: 'ato', ere: 'uto', ire: 'ito' }[m[2]];
    return [m[1] + reg, m[1] + (reg === 'uto' ? 'ito' : 'uto')].find(x => x !== part);
  }
  function buildConj(l, mode) {
    const c = C[l], verbs = c.verbs || [], auxes = Object.keys(c.aux || {});
    if (!verbs.length) return [];
    const qs = [], used = new Set();
    while (qs.length < 12) {
      const v = rnd(verbs), write = qs.length % 3 === 2;
      if (mode === 'pres') {
        const p = Math.floor(Math.random() * 6);
        if (used.has(v[0] + p)) continue;
        used.add(v[0] + p);
        const answer = v[2][p];
        const forms = shuffle([...new Set(v[2])].filter(f => f !== answer)).slice(0, 3);
        qs.push({ type: write ? 'conjWrite' : 'conjMC', verb: v, pron: c.pron[p], answer, opts: shuffle([answer, ...forms]) });
      } else {
        if (used.has(v[0])) continue;
        used.add(v[0]);
        const aux = c.aux[v[4]], other = c.aux[auxes.find(a => a !== v[4])];
        const answer = `${aux} ${v[3]}`;
        const opts = [...new Set([answer, `${other} ${v[3]}`, `${aux} ${fakeParticiple(l, v)}`])];
        qs.push({ type: write ? 'partWrite' : 'partMC', verb: v, pron: c.pron[0], answer, opts: shuffle(opts) });
      }
    }
    return qs;
  }
  const SPECIAL = ['mix', 'errores', 'verbos-pres', 'verbos-part'];
  function buildSpecial(l, kind) {
    if (kind === 'errores') {
      const voc = missedKeys(l).slice(0, 12).map(k => { const c = cardOf(l, k); return { w: c.w, t: c.t, key: k }; });
      return voc.length ? buildFrom(l, { voc, pool: allVocab(l), max: 12 }) : [];
    }
    if (kind === 'mix') {
      let src = [...FLAT[l], ...TOPICS[l]].filter(u => isDone(l, u));
      if (!src.length) src = FLAT[l].filter(u => isUnlocked(l, u));
      return buildFrom(l, {
        voc: shuffle(src.flatMap(vocabOf)).slice(0, 10), pool: allVocab(l),
        sentences: shuffle(src.flatMap(u => u.sentences)).slice(0, 3),
        cloze: shuffle(src.flatMap(u => u.cloze || [])).slice(0, 3),
        sentPool: src.flatMap(u => u.sentences), dictation: true,
      });
    }
    return buildConj(l, kind === 'verbos-part' ? 'part' : 'pres');
  }

  /* ---------- toast ---------- */
  let toastTimer;
  function toast(msg, btn) {
    const t = $('#toast');
    t.innerHTML = `<span>${esc(msg)}</span>${btn ? `<button class="toast-btn">${esc(btn.label)}</button>` : ''}`;
    if (btn) t.querySelector('button').onclick = () => { t.classList.remove('show'); btn.fn(); };
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), btn ? 9000 : 2800);
  }

  /* ---------- diálogo de confirmación ----------
     Propio de la app: la ventana nativa del navegador está bloqueada en algunos visores. */
  function ask({ title, text, ok = 'Confirmar', danger = false, word = '' }) {
    return new Promise(resolve => {
      const prev = document.activeElement;
      const back = document.createElement('div');
      back.className = 'modal-back';
      back.innerHTML = `
        <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="mTitle" aria-describedby="mText">
          <h2 id="mTitle">${esc(title)}</h2>
          <p id="mText">${esc(text)}</p>
          ${word ? `<label class="m-word"><span>Para confirmar, escribí <b>${esc(word)}</b></span>
            <input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></label>` : ''}
          <div class="m-actions">
            <button class="btn" data-m="no">Cancelar</button>
            <button class="btn ${danger ? 'bad' : 'primary'}" data-m="yes" ${word ? 'disabled' : ''}>${esc(ok)}</button>
          </div>
        </div>`;
      document.body.appendChild(back);
      document.body.classList.add('modal-open');
      const yes = back.querySelector('[data-m="yes"]');
      const inp = back.querySelector('input');
      const close = v => {
        back.remove();
        document.body.classList.remove('modal-open');
        document.removeEventListener('keydown', onKey, true);
        if (prev && prev.focus) prev.focus({ preventScroll: true });
        resolve(v);
      };
      const onKey = e => {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(false); }
        else if (e.key === 'Enter' && e.target === inp) { e.preventDefault(); e.stopPropagation(); if (!yes.disabled) close(true); }
        else if (e.key === 'Tab') {
          const f = [...back.querySelectorAll('input, button:not(:disabled)')];
          const i = f.indexOf(document.activeElement);
          if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
        }
      };
      document.addEventListener('keydown', onKey, true);
      if (inp) inp.addEventListener('input', () => { yes.disabled = norm(inp.value) !== norm(word); });
      back.addEventListener('click', e => {
        if (e.target === back) return close(false);
        const b = e.target.closest('[data-m]');
        if (b && !b.disabled) close(b.dataset.m === 'yes');
      });
      // Por seguridad, el foco arranca en «Cancelar» (o en el campo de texto).
      setTimeout(() => (inp || back.querySelector('[data-m="no"]')).focus(), 30);
    });
  }

  /* ---------- navegación ---------- */
  let L = null;   // lección en curso
  let R = null;   // repaso en curso
  let unitTab = 'g';

  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  function setLang(l) {
    S.lang = l; save();
    document.body.dataset.lang = l;
  }
  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split(/[/-]/);
    const r = parts[0] === 'inicio' ? '' : parts[0] || '', a = parts[1], b = parts.slice(2).join('-');
    if (TTS.ok) speechSynthesis.cancel();
    document.body.classList.remove('focus');
    document.body.classList.toggle('nolang', !S.lang);
    if (S.lang) document.body.dataset.lang = S.lang;
    if (r !== 'repaso') R = null;

    if (!S.lang) { viewWelcome(); updateChrome('learn'); return; }
    let tab = 'learn';
    if ((r === 'unidad' || r === 'leccion') && C[a]) {
      if (a !== S.lang) setLang(a);
      if (r === 'leccion' && SPECIAL.includes(b)) {
        if (!startSpecial(a, b)) {
          toast(b === 'errores' ? 'No tenés errores pendientes. ¡Bien!' : 'Todavía no hay material para practicar');
          return go('#practicar');
        }
        tab = 'practice';
      } else {
        const u = getUnit(a, b);
        if (!u) return go('#inicio');
        tab = u.kind === 'topic' ? 'topics' : 'learn';
        if (r === 'leccion') {
          if (!isUnlocked(a, u)) return go(`#unidad-${a}-${u.id}`);
          startLesson(a, u);
        } else viewUnit(a, u);
      }
    } else if (r === 'temas') { viewTopics(); tab = 'topics'; }
    else if (r === 'practicar') { viewPractice(); tab = 'practice'; }
    else if (r === 'repaso') { viewReview(); tab = 'practice'; }
    else if (r === 'verbos') { viewVerbs(); tab = 'practice'; }
    else if (r === 'diccionario') { viewDictionary(); tab = 'practice'; }
    else if (r === 'progreso') { viewStats(); tab = 'stats'; }
    else if (r === 'ajustes') { viewSettings(); tab = 'settings'; }
    else viewPath();
    updateChrome(tab);
    window.scrollTo(0, 0);
  }
  function updateChrome(tab) {
    $$('.tabbar a').forEach(a => a.classList.toggle('active', a.dataset.tab === tab));
    if (!S.lang) return;
    $('#streakVal').textContent = streak();
    $('#langLabel').textContent = C[S.lang].name;
    const due = dueKeys().length;
    const badge = $('#dueBadge');
    badge.hidden = !due;
    badge.textContent = due > 99 ? '99+' : due;
  }

  /* ---------- vista: bienvenida ---------- */
  function viewWelcome() {
    app.innerHTML = `
      <section class="welcome">
        <div class="welcome-mark">${LOGO}</div>
        <h1 class="welcome-title"><span lang="de">Zwei Sprachen,</span> <span lang="it">due lingue.</span></h1>
        <p class="lead">Aprendé alemán e italiano desde las primeras palabras hasta un nivel avanzado. Todo funciona sin conexión.</p>
        <p class="welcome-ask">¿Con qué idioma empezás?</p>
        <div class="lang-cards">
          ${LANGS.map(l => `
            <button class="lang-card" data-act="pickLang" data-lang="${l}" style="--c: var(--${C[l].color})">
              <span class="lang-hello" lang="${C[l].tts}">${esc(C[l].hello)}</span>
              <span class="lang-name">${esc(C[l].name)}</span>
              <span class="lang-meta">${FLAT[l].length} unidades y ${TOPICS[l].length} temas, del A1 al C1</span>
            </button>`).join('')}
        </div>
        <p class="hint">Podés cambiar de idioma cuando quieras: el progreso de cada uno se guarda por separado.</p>
      </section>`;
  }

  /* ---------- vista: camino de aprendizaje ---------- */
  function viewPath() {
    const l = S.lang, c = C[l];
    const next = nextOpenUnit(l);
    const hero = next ? `
      <a class="hero" href="#unidad-${l}-${next.id}" style="--lc:${LEVELS[next.level].color}">
        <span class="hero-kicker">${Object.keys(prog(l).units).length ? 'Seguí donde quedaste' : 'Tu primera unidad'}</span>
        <span class="hero-title">${esc(next.title)}</span>
        <span class="hero-sub">${next.level.toUpperCase()}, unidad ${unitNo(l, next)}: ${esc(next.topic)}</span>
        <span class="btn primary hero-btn">${ico('play')} Empezar</span>
      </a>` : `
      <div class="hero done-all">
        <span class="hero-title">¡Completaste el curso de ${esc(c.name.toLowerCase())}!</span>
        <span class="hero-sub">Seguí repasando para mantener el vocabulario fresco.</span>
        <a class="btn primary hero-btn" href="#repaso">${ico('cards')} Ir al repaso</a>
      </div>`;

    const levels = c.levels.map(lv => {
      const info = LEVELS[lv.id];
      const done = lv.units.filter(u => isDone(l, u)).length;
      return `
        <section class="level" style="--lc:${info.color}">
          <header class="level-head">
            <span class="lvl-badge">${lv.id.toUpperCase()}</span>
            <div class="level-info">
              <h2>${info.name}</h2>
              <div class="meter" role="progressbar" aria-valuenow="${done}" aria-valuemax="${lv.units.length}"><span style="width:${(done / lv.units.length) * 100}%"></span></div>
            </div>
            <span class="level-count">${done}/${lv.units.length}</span>
          </header>
          <ol class="units">
            ${lv.units.map((u, i) => unitNode(l, u, i + 1)).join('')}
          </ol>
        </section>`;
    }).join('');

    app.innerHTML = `${hero}${levels}`;
  }
  function unitNode(l, u, n) {
    const rec = prog(l).units[u.id];
    const open = isUnlocked(l, u);
    const state = rec?.done ? 'done' : open ? 'open' : 'locked';
    const stars = rec?.done ? starRow(rec.best) : '';
    const inner = `
      <span class="node">${state === 'done' ? ico('check') : state === 'locked' ? ico('lock') : n}</span>
      <span class="unit-body"><b>${esc(u.title)}</b><span>${esc(u.topic)}</span>${stars}</span>`;
    return `<li>${open
      ? `<a class="unit ${state}" href="#unidad-${l}-${u.id}">${inner}</a>`
      : `<button class="unit locked" data-act="locked">${inner}</button>`}</li>`;
  }
  function starRow(best) {
    const n = best >= 0.95 ? 3 : best >= 0.85 ? 2 : 1;
    return `<span class="stars" aria-label="${n} de 3 estrellas">${[1, 2, 3].map(i => ico('star', i <= n ? 'on' : 'off')).join('')}</span>`;
  }

  /* ---------- vista: unidad o tema ---------- */
  function viewUnit(l, u) {
    const c = C[l], topic = u.kind === 'topic', open = isUnlocked(l, u), rec = prog(l).units[u.id];
    const tabs = topic ? [['v', 'Vocabulario'], ['s', 'Frases']] : [['g', 'Gramática'], ['v', 'Vocabulario'], ['s', 'Frases']];
    const tab = topic && unitTab === 'g' ? 'v' : unitTab;
    const legend = l === 'de' ? `<p class="legend">${[['m', 'der', 'masculino'], ['f', 'die', 'femenino'], ['n', 'das', 'neutro'], ['pl', 'die', 'plural']].map(([g, a, n]) => `<span><span class="art g-${g}">${a}</span> ${n}</span>`).join('')}</p>` : '';
    app.innerHTML = `
      <div class="unit-page" style="--lc:${LEVELS[u.level].color}">
        <a class="back" href="${topic ? '#temas' : '#inicio'}">${ico('back')} ${topic ? 'Temas' : 'Camino'}</a>
        <header class="unit-head">
          <span class="lvl-badge">${u.level.toUpperCase()}</span>
          <div>
            <h1>${esc(u.title)}</h1>
            <p>${topic ? `Tema de vocabulario: ${u.vocab.length} palabras` : `Unidad ${unitNo(l, u)}: ${esc(u.topic)}`}</p>
          </div>
        </header>
        ${rec?.done ? `<p class="unit-best">Tu mejor resultado: ${Math.round(rec.best * 100)} %</p>` : ''}
        <div class="seg" role="tablist">
          ${tabs.map(([k, n]) => `<button role="tab" class="${tab === k ? 'on' : ''}" data-act="tab" data-tab="${k}" aria-selected="${tab === k}">${n}</button>`).join('')}
        </div>
        ${topic ? '' : `<section class="panel grammar" data-panel="g" ${tab !== 'g' ? 'hidden' : ''}>${u.grammar}</section>`}
        <section class="panel" data-panel="v" ${tab !== 'v' ? 'hidden' : ''}>
          ${u.note ? `<div class="tip">${u.note}</div>` : ''}
          ${legend}
          <ul class="vlist">
            ${u.vocab.map(([w, t]) => `<li>${sayBtn(w, l)}<div><b class="tw" lang="${c.tts}">${fmtWord(w, t, l)}</b><span>${esc(t)}</span></div></li>`).join('')}
          </ul>
        </section>
        <section class="panel" data-panel="s" ${tab !== 's' ? 'hidden' : ''}>
          <ul class="vlist sentences">
            ${u.sentences.map(([t, es]) => `<li>${sayBtn(t, l)}<div><b class="tw" lang="${c.tts}">${esc(t)}</b><span>${esc(es)}</span></div></li>`).join('')}
          </ul>
        </section>
        <div class="sticky-cta">
          ${open
            ? `<a class="btn primary block" href="#leccion-${l}-${u.id}">${ico('play')} ${rec?.done ? 'Practicar de nuevo' : topic ? 'Practicar este tema' : 'Practicar esta unidad'}</a>`
            : `<button class="btn block" data-act="locked">${ico('lock')} Completá la unidad anterior</button>`}
        </div>
      </div>`;
  }

  /* ---------- lección ---------- */
  const newL = (l, o) => ({ l, u: null, special: null, idx: 0, res: [], answered: false, sel: null, built: [], m: null, t0: Date.now(), done: false, ...o });
  function startLesson(l, u) {
    L = newL(l, { u, qs: buildSession(l, u), back: `#unidad-${l}-${u.id}` });
    renderLesson();
  }
  function startSpecial(l, kind) {
    const qs = buildSpecial(l, kind);
    if (!qs.length) return false;
    L = newL(l, { special: kind, qs, back: kind.startsWith('verbos') ? '#verbos' : '#practicar' });
    renderLesson();
    return true;
  }
  function renderLesson() {
    document.body.classList.add('focus');
    const q = L.qs[L.idx];
    L.answered = false; L.sel = null; L.built = [];
    L.m = q.type === 'match' ? { pick: null, matched: 0, errors: 0 } : null;
    const pct = Math.round((L.idx / L.qs.length) * 100);
    app.innerHTML = `
      <div class="lesson">
        <div class="lesson-top">
          <button class="icon-btn" data-act="quit" aria-label="Salir de la lección">${ico('x')}</button>
          <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemax="100"><span style="width:${pct}%"></span></div>
          <span class="lesson-count">${L.idx + 1}/${L.qs.length}</span>
        </div>
        <div class="q" id="q">${q.retry ? '<p class="retry-tag">Repaso de un error</p>' : ''}${qHTML(q)}</div>
        <div class="lesson-bottom" id="lb">
          <div class="fb" id="fb"></div>
          <button class="btn primary block" id="mainBtn" data-act="main" disabled ${q.type === 'match' ? 'hidden' : ''}>Comprobar</button>
        </div>
      </div>`;
    qMount(q);
  }
  const INPUT_TYPES = ['write', 'dictation', 'conjWrite', 'partWrite'];
  const ORDER_TYPES = ['order', 'listenOrder'];
  const STRICT_TYPES = ['conjWrite', 'partWrite'];
  const langName = () => C[L.l].name.toLowerCase();
  const optsHTML = (opts, target, row) => `<div class="opts${row ? ' opts-inline' : ''}">${opts.map((o, i) =>
    `<button class="opt${target ? ' tw' : ''}" data-act="opt" data-v="${esc(o)}"${target ? ` lang="${C[L.l].tts}"` : ''}><kbd>${i + 1}</kbd><span>${esc(o)}</span></button>`).join('')}</div>`;
  function qHTML(q) {
    const tts = C[L.l].tts;
    const input = () => `
      <input class="write tw" id="writeIn" type="text" lang="${tts}" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Tu respuesta" aria-label="Tu respuesta">
      <div class="chars">${C[L.l].chars.map(ch => `<button class="char" data-act="char" data-c="${ch}">${ch}</button>`).join('')}</div>`;
    const listen = text => `
      <div class="listen">
        <button class="big-play" data-act="say" data-text="${esc(text)}" aria-label="Reproducir">${ico('speaker')}</button>
        <button class="slow-play" data-act="say" data-slow="1" data-text="${esc(text)}">Más lento</button>
      </div>`;
    const tiles = () => `
      <div class="answer-line tw" id="built" lang="${tts}"></div>
      <div class="bank tw" id="bank" lang="${tts}">${q.tiles.map(t => `<button class="tile" data-act="tile" data-id="${t.id}">${esc(t.text)}</button>`).join('')}</div>`;
    const verb = () => `
      <div class="q-word"><span class="tw" lang="${tts}">${esc(q.verb[0])}</span></div>
      <p class="q-gloss">${esc(q.verb[1])}</p>
      <p class="cloze tw" lang="${tts}">${esc(q.pron)} <span class="blank" id="blank">&nbsp;</span></p>`;
    switch (q.type) {
      case 'mcTo': return `
        <p class="q-kicker">¿Qué significa?</p>
        <div class="q-word">${sayBtn(q.item.w, L.l)}<span class="tw" lang="${tts}">${fmtWord(q.item.w, q.item.t, L.l)}</span></div>
        ${optsHTML(q.opts)}`;
      case 'mcFrom': return `
        <p class="q-kicker">¿Cómo se dice en ${langName()}?</p>
        <div class="q-word"><span>${esc(q.item.t)}</span></div>
        ${optsHTML(q.opts, true)}`;
      case 'listen': return `<p class="q-kicker">Escuchá y elegí lo que oíste</p>${listen(q.item.w)}${optsHTML(q.opts, true)}`;
      case 'write': return `
        <p class="q-kicker">Escribilo en ${langName()}</p>
        <div class="q-word"><span>${esc(q.item.t)}</span></div>${input()}`;
      case 'dictation': return `<p class="q-kicker">Escuchá y escribí lo que oíste</p>${listen(q.item.w)}${input()}`;
      case 'tf': return `
        <p class="q-kicker">¿La traducción es correcta?</p>
        <div class="q-word">${sayBtn(q.item.w, L.l)}<span class="tw" lang="${tts}">${fmtWord(q.item.w, q.item.t, L.l)}</span></div>
        <p class="tf-shown">${esc(q.shown)}</p>
        ${optsHTML(q.opts, false, true)}`;
      case 'gender': return `
        <p class="q-kicker">¿Qué artículo lleva?</p>
        <div class="q-word"><span class="tw" lang="${tts}">${esc(q.noun.bare)}</span></div>
        <p class="q-gloss">${esc(q.item.t)}</p>
        ${optsHTML(q.opts, true, true)}`;
      case 'cloze': return `
        <p class="q-kicker">Completá la frase</p>
        <p class="cloze tw" lang="${tts}">${esc(q.s).replace('___', '<span class="blank" id="blank">&nbsp;</span>')}</p>
        ${optsHTML(q.opts, true)}`;
      case 'sentMC': return `
        <p class="q-kicker">¿Qué significa esta frase?</p>
        <div class="q-word q-sent">${sayBtn(q.s, L.l)}<span class="tw" lang="${tts}">${esc(q.s)}</span></div>
        ${optsHTML(q.opts)}`;
      case 'order': return `<p class="q-kicker">Traducí ordenando las palabras</p><p class="q-es">${esc(q.es)}</p>${tiles()}`;
      case 'listenOrder': return `<p class="q-kicker">Escuchá y armá la frase</p>${listen(q.answer)}${tiles()}`;
      case 'conjMC': return `<p class="q-kicker">Conjugá en presente</p>${verb()}${optsHTML(q.opts, true)}`;
      case 'conjWrite': return `<p class="q-kicker">Escribí la forma en presente</p>${verb()}${input()}`;
      case 'partMC': return `<p class="q-kicker">Completá en ${esc(C[L.l].perfName)}</p>${verb()}${optsHTML(q.opts, true)}`;
      case 'partWrite': return `<p class="q-kicker">Escribí el ${esc(C[L.l].perfName)}</p>${verb()}${input()}`;
      case 'match': {
        const left = shuffle(q.pairs.map((p, i) => ({ i, s: p.w })));
        const right = shuffle(q.pairs.map((p, i) => ({ i, s: p.t })));
        return `
          <p class="q-kicker">Uní cada palabra con su significado</p>
          <div class="match">
            <div class="col">${left.map(x => `<button class="mbtn tw" lang="${tts}" data-act="match" data-side="L" data-i="${x.i}">${esc(x.s)}</button>`).join('')}</div>
            <div class="col">${right.map(x => `<button class="mbtn" data-act="match" data-side="R" data-i="${x.i}">${esc(x.s)}</button>`).join('')}</div>
          </div>`;
      }
    }
    return '';
  }
  function qMount(q) {
    const auto = S.settings.autoplay;
    if (q.type === 'listen' || q.type === 'dictation') setTimeout(() => speak(q.item.w, L.l), 350);
    else if (q.type === 'listenOrder') setTimeout(() => speak(q.answer, L.l), 350);
    else if (auto && (q.type === 'mcTo' || q.type === 'tf')) setTimeout(() => speak(q.item.w, L.l), 300);
    else if (auto && q.type === 'sentMC') setTimeout(() => speak(q.s, L.l), 300);
    if (INPUT_TYPES.includes(q.type)) {
      const inp = $('#writeIn');
      inp.addEventListener('input', () => { L.sel = inp.value; $('#mainBtn').disabled = !inp.value.trim(); });
      setTimeout(() => inp.focus(), 50);
    }
  }
  function targetText(q) {
    if (q.item) return q.item.w;
    if (q.type === 'cloze') return q.s.replace('___', q.answer);
    if (q.type === 'sentMC') return q.s;
    if (q.verb) return `${q.pron.split('/')[0].trim()} ${q.answer}`;
    return q.type === 'match' ? '' : q.answer;
  }
  function answerHTML(q) {
    const tts = C[L.l].tts;
    if (q.item) return `<span class="tw" lang="${tts}">${fmtWord(q.item.w, q.item.t, L.l)}</span> = ${esc(q.item.t)}`;
    if (q.type === 'cloze') return `<span class="tw" lang="${tts}">${esc(q.s).replace('___', `<u>${esc(q.answer)}</u>`)}</span>`;
    if (q.type === 'sentMC') return `<span class="tw" lang="${tts}">${esc(q.s)}</span> = ${esc(q.answer)}`;
    if (q.verb) return `<span class="tw" lang="${tts}">${esc(q.pron)} <u>${esc(q.answer)}</u></span> (${esc(q.verb[0])})`;
    if (ORDER_TYPES.includes(q.type)) return `<span class="tw" lang="${tts}">${esc(q.answer)}</span>`;
    return '';
  }
  function check() {
    const q = L.qs[L.idx];
    if (INPUT_TYPES.includes(q.type)) {
      const r = checkWritten(L.sel || '', q.answer, L.l, STRICT_TYPES.includes(q.type));
      $('#writeIn').disabled = true;
      return finish(r.ok, r.note);
    }
    if (ORDER_TYPES.includes(q.type)) {
      const built = L.built.map(id => q.tiles.find(t => t.id === id).text).join(' ');
      return finish(norm(built) === norm(q.answer));
    }
    finish(L.sel === q.answer);
  }
  const PRAISE = ['¡Muy bien!', '¡Excelente!', '¡Perfecto!', '¡Así se hace!', '¡Genial!', '¡Impecable!'];
  function finish(ok, note = '') {
    const q = L.qs[L.idx];
    L.answered = true;
    if (!q.retry) L.res.push(ok);
    if (!ok && !q.retry && q.type !== 'match') {
      const again = { ...q, retry: true };
      if (again.opts) again.opts = shuffle(again.opts);
      if (again.tiles) again.tiles = tilesFor(again.answer);
      L.qs.push(again);
    }
    // Lista de errores: suma las palabras falladas y las saca al acertarlas en «Tus errores».
    if (q.item?.key) {
      const miss = prog(L.l).miss || (prog(L.l).miss = {});
      if (!ok) miss[q.item.key] = (miss[q.item.key] || 0) + 1;
      else if (L.special === 'errores' && !q.retry) delete miss[q.item.key];
      save();
    }
    if (q.opts) $$('.opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.v === q.answer) b.classList.add('right');
      else if (b.classList.contains('sel')) b.classList.add('wrong');
    });
    const bl = $('#blank');
    if (bl && (q.type === 'cloze' || q.verb)) { bl.textContent = q.answer; bl.classList.add(ok ? 'right' : 'wrong'); }
    if (ORDER_TYPES.includes(q.type)) { $$('.tile').forEach(t => { t.disabled = true; }); $('#built').classList.add(ok ? 'right' : 'wrong'); }
    if (S.settings.autoplay && !['listen', 'dictation', 'listenOrder'].includes(q.type)) speak(targetText(q), L.l);

    const lb = $('#lb'), fb = $('#fb'), btn = $('#mainBtn');
    lb.classList.add(ok ? 'ok' : 'bad');
    const title = q.type === 'match'
      ? (ok ? '¡Todos los pares, sin errores!' : `Pares completos, con ${L.m.errors} ${L.m.errors === 1 ? 'error' : 'errores'}`)
      : ok ? (note ? 'Correcto' : rnd(PRAISE)) : 'La respuesta correcta es';
    fb.innerHTML = `
      <p class="fb-title">${ok ? ico('check') : ico('x')} ${title}</p>
      ${q.type !== 'match' ? `<p class="fb-ans">${answerHTML(q)}</p>` : ''}
      ${note ? `<p class="fb-note">${esc(note)}</p>` : ''}
      ${ORDER_TYPES.includes(q.type) ? `<p class="fb-note">${esc(q.es)}</p>` : ''}`;
    btn.hidden = false;
    btn.disabled = false;
    btn.className = `btn block ${ok ? 'good' : 'bad'}`;
    btn.textContent = 'Continuar';
    btn.focus({ preventScroll: true });
  }
  function nextQ() {
    L.idx++;
    if (L.idx >= L.qs.length) showResults();
    else renderLesson();
  }
  function showResults() {
    L.done = true;
    const total = L.res.length, correct = L.res.filter(Boolean).length;
    const acc = total ? correct / total : 0, pass = acc >= PASS;
    const graded = !!L.u, topic = graded && L.u.kind === 'topic';
    const xp = correct + (graded && pass ? 10 : 0);
    let firstPass = false, nextU = null;
    if (graded) {
      const P = prog(L.l);
      const rec = P.units[L.u.id] || { best: 0, done: false, times: 0 };
      firstPass = pass && !rec.done;
      rec.times++;
      rec.best = Math.max(rec.best, acc);
      if (pass) { rec.done = true; addToDeck(L.l, L.u); }
      P.units[L.u.id] = rec;
      if (pass && !topic) nextU = FLAT[L.l][FLAT[L.l].indexOf(L.u) + 1];
    }
    addXP(xp, L.l);
    save();
    const mins = Math.max(1, Math.round((Date.now() - L.t0) / 60000));
    const pct = Math.round(acc * 100);
    let title, msg, primary;
    if (!graded) {
      title = 'Práctica terminada';
      msg = L.special === 'errores'
        ? (missedKeys(L.l).length ? `Te quedan ${missedKeys(L.l).length} palabras en la lista de errores.` : '¡Vaciaste tu lista de errores!')
        : 'Cada práctica suma XP y refuerza lo que ya aprendiste.';
      primary = `<a class="btn primary block" href="${L.back}">Volver</a>`;
    } else if (pass) {
      title = firstPass ? (topic ? '¡Tema completado!' : '¡Unidad completada!') : '¡Muy bien!';
      msg = firstPass ? `Las palabras de «${esc(L.u.title)}» se sumaron a tu repaso.` : 'Buen repaso. Tu mejor marca queda guardada.';
      primary = nextU && isUnlocked(L.l, nextU)
        ? `<a class="btn primary block" href="#unidad-${L.l}-${nextU.id}">Siguiente unidad: ${esc(nextU.title)}</a>`
        : `<a class="btn primary block" href="${topic ? '#temas' : '#inicio'}">${topic ? 'Volver a temas' : 'Volver al camino'}</a>`;
    } else {
      title = 'Casi lo lográs';
      msg = `Necesitás un ${Math.round(PASS * 100)} % para completar ${topic ? 'el tema' : 'la unidad'}. Repasá ${topic ? 'el vocabulario' : 'la teoría'} y volvé a intentarlo.`;
      primary = `<a class="btn primary block" href="#unidad-${L.l}-${L.u.id}">${topic ? 'Repasar el vocabulario' : 'Repasar la teoría'}</a>`;
    }
    app.innerHTML = `
      <div class="results ${!graded || pass ? 'pass' : 'fail'}">
        <div class="ring" style="--p:${pct}"><div><b>${pct} %</b><small>aciertos</small></div></div>
        <h1>${title}</h1>
        <p class="lead">${msg}</p>
        <div class="res-stats">
          <div>${ico('bolt')}<b>+${xp}</b><span>XP</span></div>
          <div>${ico('check')}<b>${correct}/${total}</b><span>a la primera</span></div>
          <div>${ico('flame')}<b>${streak()}</b><span>${streak() === 1 ? 'día de racha' : 'días de racha'}</span></div>
        </div>
        <p class="res-time">Duración: ${mins} min</p>
        <div class="res-actions">
          ${primary}
          <button class="btn ghost block" data-act="retry">Practicar otra vez</button>
        </div>
      </div>`;
  }
  function addToDeck(l, u) {
    const srs = prog(l).srs;
    u.vocab.forEach((_, i) => { const k = `${u.id}#${i}`; if (!srs[k]) srs[k] = { box: 1, due: addDays(1) }; });
  }

  /* ---------- vista: temas ---------- */
  function viewTopics() {
    const l = S.lang, T = TOPICS[l];
    const groups = Object.keys(LEVELS).map(lv => [lv, T.filter(t => t.level === lv)]).filter(g => g[1].length);
    const done = T.filter(t => isDone(l, t)).length;
    app.innerHTML = `
      <h1 class="page-title">Temas</h1>
      <p class="page-lead">Vocabulario por categorías, sin orden fijo. Llevás ${done} de ${T.length}.</p>
      ${groups.map(([lv, ts]) => `
        <section class="topic-group" style="--lc:${LEVELS[lv].color}">
          <h2 class="group-title"><span class="mini-badge">${lv.toUpperCase()}</span>${LEVELS[lv].name}</h2>
          <div class="topics">
            ${ts.map(t => {
              const rec = prog(l).units[t.id];
              return `<a class="topic${rec?.done ? ' done' : ''}" href="#unidad-${l}-${t.id}">
                <span class="topic-sample tw" lang="${C[l].tts}">${t.vocab.slice(0, 3).map(v => esc(v[0].replace(/^(der|die|das|il|lo|la|i|gli|le) /, '').replace(/^l'/, ''))).join(', ')}</span>
                <b>${esc(t.title)}</b>
                <span class="topic-meta">${rec?.done ? starRow(rec.best) : `${t.vocab.length} palabras`}</span>
              </a>`;
            }).join('')}
          </div>
        </section>`).join('')}`;
  }

  /* ---------- vista: practicar ---------- */
  function viewPractice() {
    const l = S.lang, c = C[l];
    const due = dueKeys(l).length, deck = Object.keys(prog(l).srs).length, miss = missedKeys(l).length;
    const card = (href, icon, title, text, count = 0) => href
      ? `<a class="pcard" href="${href}">${ico(icon)}<span><b>${title}</b><span>${text}</span></span>${count ? `<i class="count">${count}</i>` : ''}</a>`
      : `<div class="pcard off">${ico(icon)}<span><b>${title}</b><span>${text}</span></span></div>`;
    app.innerHTML = `
      <h1 class="page-title">Practicar</h1>
      <p class="page-lead">Reforzá lo aprendido con distintos tipos de práctica.</p>
      <div class="pcards">
        ${card('#repaso', 'cards', 'Repaso del día', deck ? (due ? 'Tarjetas con repetición espaciada' : 'Estás al día con tus tarjetas') : 'Se llena al completar unidades y temas', due)}
        ${card(`#leccion-${l}-mix`, 'bolt', 'Práctica mixta', 'Ejercicios variados con todo lo que ya completaste')}
        ${card(miss ? `#leccion-${l}-errores` : '', 'target', 'Tus errores', miss ? 'Las palabras que más te costaron' : 'Acá se juntan las palabras que fallás', miss)}
        ${card('#verbos', 'pen', 'Verbos', `${c.verbs.length} verbos esenciales: presente y ${c.perfName}`)}
        ${card('#diccionario', 'search', 'Diccionario', `${allVocab(l).length} palabras con audio y búsqueda`)}
      </div>`;
  }

  /* ---------- vista: verbos ---------- */
  function viewVerbs() {
    const l = S.lang, c = C[l], tts = c.tts;
    app.innerHTML = `
      <a class="back" href="#practicar">${ico('back')} Practicar</a>
      <h1 class="page-title">Verbos</h1>
      <p class="page-lead">Los ${c.verbs.length} verbos más usados. Tocá uno para ver su conjugación.</p>
      <div class="drill-btns">
        <a class="btn primary block" href="#leccion-${l}-verbos-pres">${ico('play')} Practicar el presente</a>
        <a class="btn block" href="#leccion-${l}-verbos-part">Practicar el ${esc(c.perfName)}</a>
      </div>
      ${l === 'it' ? '<p class="hint">Con <em>essere</em>, el participio concuerda con el sujeto. En los ejercicios se usa la forma masculina singular: <em>sono andato</em>.</p>' : '<p class="hint">El Perfekt se forma con <em>haben</em> o <em>sein</em> + Partizip II. Los verbos de movimiento y cambio de estado van con <em>sein</em>.</p>'}
      <div class="verbs">
        ${c.verbs.map(v => {
          const forms = c.pron.map((p, i) => `${p.split('/')[0].trim()} ${v[2][i]}`).join(', ');
          return `<details class="verb">
            <summary><b class="tw" lang="${tts}">${esc(v[0])}</b><span>${esc(v[1])}</span>${ico('chev')}</summary>
            <div class="verb-body">
              ${tbl(c.pron.map((p, i) => [p, v[2][i]]).concat([[esc(c.perfName), `${c.aux[v[4]]} ${v[3]}`]]))}
              <button class="btn small" data-act="say" data-text="${esc(forms)}" data-lang="${l}">${ico('speaker')} Escuchar la conjugación</button>
            </div>
          </details>`;
        }).join('')}
      </div>`;
  }
  const tbl = rows => `<div class="table-wrap"><table class="conj">${rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</table></div>`;

  /* ---------- vista: diccionario ---------- */
  function viewDictionary() {
    const l = S.lang, c = C[l];
    const strip = w => w.replace(/^(der|die|das|il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
    const entries = [...FLAT[l], ...TOPICS[l]].flatMap(u => u.vocab.map(([w, t]) => ({ w, t, src: `${u.level.toUpperCase()}, ${u.title}` })))
      .concat(c.verbs.map(v => ({ w: v[0], t: v[1], src: 'Verbo' })))
      .map(e => ({ ...e, fw: fold(e.w), ft: fold(e.t), key: fold(strip(e.w)) }))
      .sort((a, b) => a.key.localeCompare(b.key, c.code));
    app.innerHTML = `
      <a class="back" href="#practicar">${ico('back')} Practicar</a>
      <h1 class="page-title">Diccionario</h1>
      <label class="search">${ico('search')}<input id="dictQ" type="search" placeholder="Buscá en ${esc(c.name.toLowerCase())} o en español" autocomplete="off" autocapitalize="off" spellcheck="false"></label>
      <p class="hint" id="dictCount"></p>
      <ul class="vlist dict" id="dictList"></ul>`;
    const input = $('#dictQ');
    const render = () => {
      const q = fold(input.value);
      const res = q ? entries.filter(e => e.fw.includes(q) || e.ft.includes(q)) : entries;
      const shown = res.slice(0, 80);
      $('#dictCount').textContent = q
        ? (res.length ? `${res.length} ${res.length === 1 ? 'resultado' : 'resultados'}${res.length > 80 ? ', se muestran los primeros 80' : ''}` : 'Sin resultados. Probá con otra palabra.')
        : `${entries.length} palabras. Escribí para filtrar.`;
      $('#dictList').innerHTML = shown.map(e => `<li>${sayBtn(e.w, l)}<div><b class="tw" lang="${c.tts}">${fmtWord(e.w, e.t, l)}</b><span>${esc(e.t)}</span><small>${esc(e.src)}</small></div></li>`).join('');
    };
    input.addEventListener('input', render);
    render();
  }

  /* ---------- vista: repaso con tarjetas ---------- */
  function viewReview() {
    if (R && R.active) return renderCard();
    const l = S.lang, srs = prog(l).srs, keys = Object.keys(srs).filter(k => cardOf(l, k));
    const due = dueKeys(l);
    if (!keys.length) {
      app.innerHTML = `
        <h1 class="page-title">Repaso</h1>
        <div class="empty">
          ${ico('cards')}
          <p>Todavía no hay palabras para repasar.</p>
          <p class="hint">Cuando completes una unidad, su vocabulario aparece acá y vuelve a mostrarse justo antes de que lo olvides.</p>
          <a class="btn primary" href="#inicio">Ir a la primera unidad</a>
        </div>`;
      return;
    }
    const boxes = [1, 2, 3, 4, 5].map(b => keys.filter(k => srs[k].box === b).length);
    const max = Math.max(1, ...boxes);
    app.innerHTML = `
      <h1 class="page-title">Repaso</h1>
      <div class="review-hero">
        <b class="big">${due.length}</b>
        <p>${due.length === 1 ? 'palabra para repasar hoy' : 'palabras para repasar hoy'}</p>
        ${due.length
          ? `<button class="btn primary block" data-act="startReview">${ico('play')} Empezar repaso</button>`
          : `<p class="hint">Estás al día. Podés practicar igual: no cambia tu calendario de repasos.</p>`}
        <button class="btn ghost block" data-act="practiceReview">Practicar palabras al azar</button>
      </div>
      <h2 class="group-title">Tu mazo: ${keys.length} palabras</h2>
      <div class="boxes">
        ${boxes.map((n, i) => `<div class="box"><i style="height:${(n / max) * 100}%"></i><b>${n}</b><span>${BOX_NAMES[i + 1]}</span></div>`).join('')}
      </div>
      <p class="hint">Cada vez que acertás, la palabra sube de caja y tarda más en volver: 1, 3, 7, 16 y 35 días. Si fallás, vuelve al principio.</p>`;
  }
  function startReview(practice) {
    const l = S.lang, all = Object.keys(prog(l).srs).filter(k => cardOf(l, k));
    const queue = practice ? shuffle(all).slice(0, 15) : shuffle(dueKeys(l)).slice(0, 25);
    if (!queue.length) return;
    const dir = S.settings.direction;
    R = {
      active: true, l, practice, queue, idx: 0, flipped: false, known: 0, seen: 0, again: new Set(),
      front: Object.fromEntries(queue.map(k => [k, dir === 'mix' ? Math.random() < 0.5 : dir === 'to'])),
    };
    renderCard();
  }
  function renderCard() {
    document.body.classList.add('focus');
    if (R.idx >= R.queue.length) return reviewDone();
    const k = R.queue[R.idx], c = cardOf(R.l, k), lc = C[R.l];
    const targetFront = R.front[k];
    const pct = Math.round((R.idx / R.queue.length) * 100);
    const tw = `<span class="tw" lang="${lc.tts}">${fmtWord(c.w, c.t, R.l)}</span>`;
    const front = targetFront ? tw : esc(c.t), back = targetFront ? esc(c.t) : tw;
    app.innerHTML = `
      <div class="lesson review">
        <div class="lesson-top">
          <button class="icon-btn" data-act="quitReview" aria-label="Salir del repaso">${ico('x')}</button>
          <div class="bar"><span style="width:${pct}%"></span></div>
          <span class="lesson-count">${R.idx + 1}/${R.queue.length}</span>
        </div>
        <div class="flash-wrap">
          <div class="flash ${R.flipped ? 'flipped' : ''}" ${R.flipped ? '' : 'data-act="flip" role="button" tabindex="0" aria-label="Mostrar respuesta"'}>
            <span class="flash-label">${targetFront ? esc(lc.name) : 'Español'}</span>
            <div class="flash-front">${front}${targetFront ? sayBtn(c.w, R.l) : ''}</div>
            ${R.flipped ? `
              <div class="flash-sep"></div>
              <span class="flash-label">${targetFront ? 'Español' : esc(lc.name)}</span>
              <div class="flash-back">${back}${targetFront ? '' : sayBtn(c.w, R.l)}</div>
              <span class="flash-unit">${c.unit.level.toUpperCase()}: ${esc(c.unit.title)}</span>` : '<span class="flash-hint">Pensá la respuesta y tocá la tarjeta</span>'}
          </div>
        </div>
        <div class="lesson-bottom">
          ${R.flipped
            ? `<div class="two"><button class="btn bad" data-act="rvNo">No me la sabía</button><button class="btn good" data-act="rvYes">Me la sabía</button></div>`
            : `<button class="btn primary block" data-act="flip">Mostrar respuesta</button>`}
        </div>
      </div>`;
    if (R.flipped && S.settings.autoplay && !targetFront) speak(c.w, R.l);
    if (!R.flipped && targetFront && S.settings.autoplay) setTimeout(() => speak(c.w, R.l), 250);
  }
  function rvAnswer(known) {
    const k = R.queue[R.idx], srs = prog(R.l).srs[k];
    const firstTime = !R.again.has(k);
    if (firstTime) R.seen++;
    if (known) {
      if (firstTime) R.known++;
      if (!R.practice && srs.due <= dayStr()) {
        srs.box = Math.min(5, srs.box + (firstTime ? 1 : 0));
        srs.due = addDays(INTERVAL[srs.box]);
      }
    } else {
      if (!R.practice) { srs.box = 1; srs.due = dayStr(); }
      if (firstTime) { R.again.add(k); R.queue.push(k); }
      else if (!R.practice) srs.due = addDays(1);
    }
    save();
    R.idx++; R.flipped = false;
    renderCard();
  }
  function reviewDone() {
    const xp = R.known;
    addXP(xp, R.l);
    const pct = R.seen ? Math.round((R.known / R.seen) * 100) : 0;
    R.active = false;
    app.innerHTML = `
      <div class="results pass">
        <div class="ring" style="--p:${pct}"><div><b>${R.known}/${R.seen}</b><small>recordadas</small></div></div>
        <h1>Repaso terminado</h1>
        <p class="lead">${R.practice ? 'Práctica libre: tu calendario de repasos no cambió.' : 'Las palabras que recordaste vuelven más adelante; las otras, mañana.'}</p>
        <div class="res-stats">
          <div>${ico('bolt')}<b>+${xp}</b><span>XP</span></div>
          <div>${ico('flame')}<b>${streak()}</b><span>${streak() === 1 ? 'día de racha' : 'días de racha'}</span></div>
        </div>
        <div class="res-actions">
          <a class="btn primary block" href="#inicio">Volver al camino</a>
          <button class="btn ghost block" data-act="reviewHome">Ver mi mazo</button>
        </div>
      </div>`;
  }

  /* ---------- vista: progreso ---------- */
  function viewStats() {
    const l = S.lang, P = prog(l), units = FLAT[l];
    const done = units.filter(u => isDone(l, u)).length;
    const deck = Object.values(P.srs);
    const mastered = deck.filter(c => c.box >= 4).length;
    const goal = S.settings.goal, today = S.activity[dayStr()] || 0;
    const gp = Math.min(100, Math.round((today / goal) * 100));
    const days = [...Array(7)].map((_, i) => {
      const d = new Date(); d.setDate(d.getDate() - (6 - i));
      return { xp: S.activity[dayStr(d)] || 0, label: ['D', 'L', 'M', 'M', 'J', 'V', 'S'][d.getDay()], today: i === 6 };
    });
    const max = Math.max(goal, ...days.map(d => d.xp));
    const other = LANGS.filter(x => x !== l).map(x => {
      const d = FLAT[x].filter(u => isDone(x, u)).length;
      return `<button class="other-lang" data-act="setLang" data-lang="${x}" style="--c:var(--${C[x].color})"><b>${esc(C[x].name)}</b><span>${d}/${FLAT[x].length} unidades, ${prog(x).xp} XP</span>${ico('swap')}</button>`;
    }).join('');

    app.innerHTML = `
      <h1 class="page-title">Tu progreso en ${esc(C[l].name.toLowerCase())}</h1>
      <div class="goal">
        <div class="ring small" style="--p:${gp}"><div><b>${today}</b><small>de ${goal} XP</small></div></div>
        <div>
          <h2>${today >= goal ? '¡Objetivo de hoy cumplido!' : 'Objetivo diario'}</h2>
          <p>${today >= goal ? 'Lo que sumes ahora es extra.' : `Te faltan ${goal - today} XP. Una unidad o un repaso alcanzan.`}</p>
        </div>
      </div>
      <div class="stats">
        <div class="stat">${ico('flame')}<b>${streak()}</b><span>${streak() === 1 ? 'día de racha' : 'días de racha'}</span></div>
        <div class="stat">${ico('bolt')}<b>${P.xp}</b><span>XP en total</span></div>
        <div class="stat">${ico('book')}<b>${done}/${units.length}</b><span>unidades</span></div>
        <div class="stat">${ico('layers')}<b>${TOPICS[l].filter(t => isDone(l, t)).length}/${TOPICS[l].length}</b><span>temas</span></div>
        <div class="stat">${ico('cards')}<b>${deck.length}</b><span>palabras en repaso, ${mastered} dominadas</span></div>
        <div class="stat">${ico('target')}<b>${missedKeys(l).length}</b><span>palabras en tu lista de errores</span></div>
      </div>
      <h2 class="group-title">Últimos 7 días</h2>
      <div class="week">
        ${days.map(d => `<div class="${d.today ? 'today' : ''}"><small>${d.xp || ''}</small><i style="height:${Math.max(3, (d.xp / max) * 100)}%"></i><span>${d.label}</span></div>`).join('')}
      </div>
      <h2 class="group-title">Por nivel</h2>
      <div class="lvl-list">
        ${C[l].levels.map(lv => {
          const d = lv.units.filter(u => isDone(l, u)).length;
          return `<div class="lvl-row" style="--lc:${LEVELS[lv.id].color}"><span class="lvl-badge">${lv.id.toUpperCase()}</span><div><b>${LEVELS[lv.id].name}</b><div class="meter"><span style="width:${(d / lv.units.length) * 100}%"></span></div></div><span>${d}/${lv.units.length}</span></div>`;
        }).join('')}
      </div>
      ${other ? `<h2 class="group-title">Otro idioma</h2>${other}` : ''}`;
  }

  /* ---------- vista: ajustes ---------- */
  let installEvt = null;
  const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  function viewSettings() {
    const st = S.settings, l = S.lang;
    const voiceRows = LANGS.map(x => {
      const ok = hasVoice(x);
      return `<div class="row"><span>Voz en ${esc(C[x].name.toLowerCase())}</span><span class="pill ${ok ? 'ok' : 'warn'}">${ok ? 'Instalada' : TTS.ok ? 'No encontrada' : 'No disponible'}</span></div>`;
    }).join('');
    const offlineReady = !!navigator.serviceWorker?.controller;
    let install;
    if (isStandalone()) install = `<div class="row"><span>App instalada</span><span class="pill ok">Lista</span></div>`;
    else if (installEvt) install = `<div class="row"><span>Instalar en este dispositivo</span><button class="btn small primary" data-act="install">${ico('down')} Instalar</button></div>`;
    else if (isIOS) install = `<div class="row col"><span>Instalar en iPhone o iPad</span><p class="hint">En Safari tocá <b>Compartir</b> y después <b>Agregar a inicio</b>.</p></div>`;
    else install = `<div class="row col"><span>Instalar en este dispositivo</span><p class="hint">En Chrome para Android abrí el menú ⋮ y elegí <b>Instalar app</b> o <b>Agregar a la pantalla principal</b>.</p></div>`;

    app.innerHTML = `
      <h1 class="page-title">Ajustes</h1>

      <h2 class="group-title">Idioma que estudiás</h2>
      <div class="seg lang-seg">
        ${LANGS.map(x => `<button class="${x === l ? 'on' : ''}" data-act="setLang" data-lang="${x}" style="--c:var(--${C[x].color})">${esc(C[x].name)}</button>`).join('')}
      </div>

      <h2 class="group-title">Audio</h2>
      <div class="group">
        <label class="row"><span>Reproducir la pronunciación automáticamente</span><input type="checkbox" class="switch" data-set="autoplay" ${st.autoplay ? 'checked' : ''}></label>
        <div class="row col">
          <div class="row-head"><span>Velocidad de la voz</span><b id="rateVal">${Number(st.rate).toFixed(1)}×</b></div>
          <input type="range" min="0.5" max="1.3" step="0.1" value="${st.rate}" data-set="rate" aria-label="Velocidad de la voz">
        </div>
        ${voiceRows}
        <div class="row"><span>Escuchar un ejemplo</span><button class="btn small" data-act="testVoice">${ico('speaker')} Probar</button></div>
      </div>
      <p class="hint">La pronunciación usa las voces del sistema. Para que funcione sin internet, descargá las voces de alemán e italiano en los ajustes de «Texto a voz» de tu teléfono.</p>

      <h2 class="group-title">Aprendizaje</h2>
      <div class="group">
        <label class="row"><span>Objetivo diario</span>
          <select data-set="goal">${[10, 20, 40, 60].map(g => `<option value="${g}" ${st.goal === g ? 'selected' : ''}>${g} XP</option>`).join('')}</select>
        </label>
        <label class="row"><span>Tarjetas de repaso</span>
          <select data-set="direction">
            <option value="mix" ${st.direction === 'mix' ? 'selected' : ''}>Mezcladas</option>
            <option value="to" ${st.direction === 'to' ? 'selected' : ''}>Idioma → español</option>
            <option value="from" ${st.direction === 'from' ? 'selected' : ''}>Español → idioma</option>
          </select>
        </label>
        <label class="row"><span>Desbloquear todas las unidades<small>Para quienes ya tienen nivel</small></span><input type="checkbox" class="switch" data-set="unlockAll" ${st.unlockAll ? 'checked' : ''}></label>
      </div>

      <h2 class="group-title">App</h2>
      <div class="group">
        ${install}
        <div class="row"><span>Uso sin conexión</span><span class="pill ${offlineReady ? 'ok' : 'warn'}">${offlineReady ? 'Activo' : 'Se activa tras la primera carga'}</span></div>
        <div class="row"><span>Borrar la caché<small id="cacheSize">Vuelve a descargar la app. Tu progreso no se toca.</small></span><button class="btn small danger" data-act="clearCache">${ico('trash')} Borrar caché</button></div>
      </div>

      <h2 class="group-title">Tus datos</h2>
      <div class="group">
        <div class="row"><span>Guardar una copia del progreso<small>Archivo .json para pasarlo a otro dispositivo</small></span><button class="btn small" data-act="export">${ico('down')} Exportar</button></div>
        <div class="row"><span>Restaurar una copia</span><button class="btn small" data-act="import">${ico('up')} Importar</button></div>
        <div class="row"><span>Borrar el progreso de ${esc(C[l].name.toLowerCase())}</span><button class="btn small danger" data-act="resetLang">${ico('trash')} Borrar</button></div>
        <div class="row"><span>Borrar todo</span><button class="btn small danger" data-act="resetAll">${ico('trash')} Borrar todo</button></div>
      </div>
      <input type="file" id="importFile" accept="application/json,.json" hidden>
      <p class="about">${LOGO} Parla &amp; Sprich. El progreso se guarda solo en este dispositivo.</p>`;
    showCacheSize();
  }
  /* ---------- caché de la app ----------
     Solo toca lo de esta app: en usuario.github.io pueden convivir otros proyectos del mismo dueño. */
  const ownCache = k => k.startsWith('parla-sprich');
  const ownScope = () => new URL('./', location.href).href;
  async function cacheSize() {
    if (!('caches' in window)) return null;
    let total = 0;
    for (const k of (await caches.keys()).filter(ownCache)) {
      const c = await caches.open(k);
      for (const req of await c.keys()) {
        const res = await c.match(req);
        if (res) total += (await res.blob()).size;
      }
    }
    return total;
  }
  async function showCacheSize() {
    const n = await cacheSize().catch(() => null);
    const el = $('#cacheSize');
    if (!el || n === null) return;
    el.textContent = n
      ? `Ocupa ${(n / 1048576).toFixed(1).replace('.', ',')} MB. Se vuelve a descargar; tu progreso no se toca.`
      : 'No hay archivos guardados todavía.';
  }
  async function clearCache() {
    if (!('caches' in window)) return toast('Este navegador no guarda archivos de la app');
    if (!navigator.onLine) return toast('Necesitás conexión a internet para volver a descargar la app');
    const ok = await ask({
      title: '¿Borrar la caché?',
      text: 'Se borran los archivos de la app guardados en este dispositivo y se descargan de nuevo desde internet. Tu progreso, tu racha y tus ajustes no se tocan.',
      ok: 'Borrar caché', danger: true,
    });
    if (!ok) return;
    try {
      const keys = (await caches.keys()).filter(ownCache);
      await Promise.all(keys.map(k => caches.delete(k)));
      if ('serviceWorker' in navigator) {
        const regs = await navigator.serviceWorker.getRegistrations();
        await Promise.all(regs.filter(r => r.scope === ownScope()).map(r => r.unregister()));
      }
      toast('Caché borrada. Recargando la app…');
      setTimeout(() => location.reload(), 900);
    } catch (e) { toast('No se pudo borrar la caché'); }
  }

  function exportData() {
    const blob = new Blob([JSON.stringify({ app: 'parla-sprich', version: 1, exported: new Date().toISOString(), data: S }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `parla-sprich-progreso-${dayStr()}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    toast('Copia exportada');
  }
  function importData(file) {
    const r = new FileReader();
    r.onload = async () => {
      let d;
      try {
        const j = JSON.parse(r.result);
        d = j.data || j;
        if (!d || !d.progress) throw new Error('formato');
      } catch (e) { toast('Ese archivo no es una copia de Parla & Sprich'); return; }
      const ok = await ask({
        title: '¿Restaurar esta copia?',
        text: 'Tu progreso actual en los dos idiomas se reemplaza por el de la copia. No se puede deshacer.',
        ok: 'Restaurar', danger: true,
      });
      if (!ok) return;
      try {
        localStorage.setItem(KEY, JSON.stringify(d));
        S = load();
        toast('Copia restaurada');
        route();
      } catch (e) { toast('No se pudo guardar la copia en este dispositivo'); }
    };
    r.readAsText(file);
  }

  /* ---------- acciones ---------- */
  const ACT = {
    pickLang: el => { setLang(el.dataset.lang); go('#inicio'); },
    setLang: el => {
      if (el.dataset.lang === S.lang) return;
      setLang(el.dataset.lang);
      toast(`Ahora estudiás ${C[S.lang].name.toLowerCase()}`);
      route();
    },
    switchLang: () => {
      const i = LANGS.indexOf(S.lang);
      setLang(LANGS[(i + 1) % LANGS.length]);
      toast(`Ahora estudiás ${C[S.lang].name.toLowerCase()}`);
      const r = location.hash.replace(/^#\/?/, '').split(/[/-]/)[0];
      go(r === 'unidad' ? '#inicio' : location.hash || '#inicio');
    },
    say: el => speak(el.dataset.text, el.dataset.lang || (L && !L.done ? L.l : S.lang), el.dataset.slow ? 0.6 : undefined),
    locked: () => toast('Completá la unidad anterior para desbloquear esta'),
    tab: el => {
      unitTab = el.dataset.tab;
      $$('.seg [data-tab]').forEach(b => { b.classList.toggle('on', b === el); b.setAttribute('aria-selected', b === el); });
      $$('[data-panel]').forEach(p => { p.hidden = p.dataset.panel !== unitTab; });
    },
    quit: async () => {
      if (!L) return;
      const back = L.back;
      if (!L.done && L.idx > 0) {
        const ok = await ask({ title: '¿Salir de la lección?', text: 'Se pierde el avance de esta práctica. La unidad queda como estaba.', ok: 'Salir', danger: true });
        if (!ok) return;
      }
      L = null;
      go(back);
    },
    opt: el => {
      if (L.answered) return;
      $$('.opt').forEach(b => b.classList.toggle('sel', b === el));
      L.sel = el.dataset.v;
      $('#mainBtn').disabled = false;
      const q = L.qs[L.idx];
      const bl = $('#blank');
      if (bl) bl.textContent = L.sel;
      if (S.settings.autoplay && (q.type === 'mcFrom' || q.type === 'listen')) speak(L.sel, L.l);
    },
    char: el => {
      const inp = $('#writeIn');
      if (!inp || inp.disabled) return;
      const s = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? inp.value.length;
      inp.value = inp.value.slice(0, s) + el.dataset.c + inp.value.slice(e);
      inp.focus();
      inp.setSelectionRange(s + 1, s + 1);
      inp.dispatchEvent(new Event('input'));
    },
    tile: el => {
      if (L.answered) return;
      const id = +el.dataset.id, q = L.qs[L.idx];
      if (el.closest('#bank')) {
        L.built.push(id);
        el.classList.add('used');
        const t = q.tiles.find(x => x.id === id);
        $('#built').insertAdjacentHTML('beforeend', `<button class="tile placed" data-act="tile" data-id="${id}">${esc(t.text)}</button>`);
      } else {
        L.built = L.built.filter(x => x !== id);
        el.remove();
        $(`#bank .tile[data-id="${id}"]`).classList.remove('used');
      }
      $('#mainBtn').disabled = !L.built.length;
    },
    match: el => {
      if (L.answered || el.classList.contains('done')) return;
      const m = L.m, q = L.qs[L.idx];
      if (el.dataset.side === 'L' && S.settings.autoplay) speak(q.pairs[+el.dataset.i].w, L.l);
      if (!m.pick || m.pick.dataset.side === el.dataset.side) {
        if (m.pick) m.pick.classList.remove('sel');
        m.pick = el; el.classList.add('sel');
        return;
      }
      const a = m.pick; m.pick = null; a.classList.remove('sel');
      if (a.dataset.i === el.dataset.i) {
        [a, el].forEach(b => { b.classList.add('done'); b.disabled = true; });
        if (++m.matched === q.pairs.length) setTimeout(() => finish(m.errors === 0), 250);
      } else {
        m.errors++;
        [a, el].forEach(b => { b.classList.add('err'); setTimeout(() => b.classList.remove('err'), 500); });
      }
    },
    main: () => (L.answered ? nextQ() : check()),
    retry: () => (L.u ? startLesson(L.l, L.u) : startSpecial(L.l, L.special)),
    startReview: () => startReview(false),
    practiceReview: () => startReview(true),
    flip: () => { if (R && !R.flipped) { R.flipped = true; renderCard(); } },
    rvYes: () => rvAnswer(true),
    rvNo: () => rvAnswer(false),
    quitReview: async () => {
      if (R && R.idx > 0 && R.idx < R.queue.length) {
        const ok = await ask({ title: '¿Salir del repaso?', text: 'Lo que ya respondiste quedó guardado. Las tarjetas que faltan siguen pendientes.', ok: 'Salir' });
        if (!ok) return;
      }
      R = null; go('#repaso');
    },
    reviewHome: () => { R = null; go('#repaso'); },
    testVoice: () => speak({ de: 'Hallo! Wie geht es dir?', it: 'Ciao! Come stai?' }[S.lang]),
    install: async () => {
      if (!installEvt) return;
      installEvt.prompt();
      await installEvt.userChoice.catch(() => {});
      installEvt = null;
      viewSettings();
    },
    export: exportData,
    clearCache,
    import: () => $('#importFile').click(),
    resetLang: async () => {
      const l = S.lang, name = C[l].name.toLowerCase(), P = prog(l);
      const units = FLAT[l].filter(u => isDone(l, u)).length, words = Object.keys(P.srs).length;
      const ok = await ask({
        title: `¿Borrar el progreso de ${name}?`,
        text: `Se borran ${units} ${units === 1 ? 'unidad completada' : 'unidades completadas'}, ${words} ${words === 1 ? 'palabra' : 'palabras'} del repaso y ${P.xp} XP de ${name}. El otro idioma no se toca. No se puede deshacer: si querés conservarlo, exportá una copia antes.`,
        ok: 'Borrar', danger: true, word: 'borrar',
      });
      if (!ok) return;
      S.progress[l] = emptyProg(); save(); toast(`Progreso de ${name} borrado`); route();
    },
    resetAll: async () => {
      const ok = await ask({
        title: '¿Borrar todo?',
        text: 'Se borra el progreso de los dos idiomas, la racha, el historial y los ajustes. La app vuelve a empezar de cero. No se puede deshacer: si querés conservarlo, exportá una copia antes.',
        ok: 'Borrar todo', danger: true, word: 'borrar',
      });
      if (!ok) return;
      try { localStorage.removeItem(KEY); } catch (e) { /* almacenamiento bloqueado */ }
      S = load(); L = null; R = null; toast('Datos borrados'); go('#inicio');
    },
  };

  document.addEventListener('click', e => {
    const el = e.target.closest('[data-act]');
    if (!el || el.disabled) return;
    const fn = ACT[el.dataset.act];
    if (fn) { e.preventDefault(); fn(el, e); }
  });
  document.addEventListener('change', e => {
    const el = e.target;
    if (el.dataset.set) {
      const k = el.dataset.set;
      let v = el.type === 'checkbox' ? el.checked : el.value;
      if (k === 'rate') v = parseFloat(v);
      if (k === 'goal') v = parseInt(v, 10);
      S.settings[k] = v;
      save();
      if (k === 'unlockAll') toast(v ? 'Todas las unidades quedaron disponibles' : 'Las unidades se desbloquean en orden');
    }
    if (el.id === 'importFile' && el.files[0]) { importData(el.files[0]); el.value = ''; }
  });
  document.addEventListener('input', e => {
    if (e.target.dataset?.set === 'rate') $('#rateVal').textContent = `${parseFloat(e.target.value).toFixed(1)}×`;
  });
  document.addEventListener('keydown', e => {
    if (!document.body.classList.contains('focus') || document.body.classList.contains('modal-open')) return;
    const inInput = document.activeElement?.tagName === 'INPUT';
    if (L && !L.done && location.hash.startsWith('#leccion')) {
      if (e.key === 'Enter') {
        const b = $('#mainBtn');
        if (b && !b.disabled && !b.hidden) { e.preventDefault(); b.click(); }
      } else if (/^[1-9]$/.test(e.key) && !inInput && !L.answered) {
        const o = $$('.opt')[+e.key - 1];
        if (o) o.click();
      }
    } else if (R && R.active) {
      if (!R.flipped && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); ACT.flip(); }
      else if (R.flipped && e.key === '1') rvAnswer(false);
      else if (R.flipped && e.key === '2') rvAnswer(true);
    }
  });

  /* ---------- instalación y modo offline ---------- */
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; });
  window.addEventListener('appinstalled', () => { installEvt = null; toast('App instalada'); });
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    const hadController = !!navigator.serviceWorker.controller;
    window.addEventListener('load', async () => {
      try {
        // updateViaCache 'none': el navegador siempre revisa si sw.js cambió en el servidor.
        const reg = await navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' });
        // Al volver a la app (por ejemplo, desde otra pestaña o desde el inicio del celular) se busca una versión nueva.
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
      } catch (e) { /* sin service worker la app funciona igual, pero sin modo offline */ }
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (hadController) toast('Hay una versión nueva de la app', { label: 'Actualizar', fn: () => location.reload() });
    });
  }

  /* ---------- arranque ---------- */
  $$('[data-ico]').forEach(el => { el.outerHTML = ico(el.dataset.ico); });
  $('#brandLogo').innerHTML = LOGO;
  window.addEventListener('hashchange', route);
  route();
})();
