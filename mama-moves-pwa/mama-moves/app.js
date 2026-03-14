// ── State ──────────────────────────────────────────────────────────────────
let state = {
  week: 20,
  phase: 'p1',
  day: 0,
  expanded: {},
  setData: {},       // key -> {reps, weight, done}
  cardioNotes: {},   // key -> string
  cardioDone: {},    // key -> bool
  history: {},       // dateStr -> [{phase,day,summary}]
};

function loadState() {
  try {
    const saved = localStorage.getItem('mama-moves-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed, expanded: {} };
    }
  } catch(e) {}
}

function saveState() {
  try {
    const toSave = { ...state };
    delete toSave.expanded;
    localStorage.setItem('mama-moves-state', JSON.stringify(toSave));
  } catch(e) {}
}

// ── Keys ───────────────────────────────────────────────────────────────────
function setKey(p, d, ei, si) { return `${p}-${d}-${ei}-${si}`; }
function cardioKey(p, d, oi) { return `${p}-${d}-${oi}`; }
function today() { return new Date().toISOString().slice(0,10); }

// ── Progress ───────────────────────────────────────────────────────────────
function calcProgress() {
  const day = PHASES[state.phase].days[state.day];
  if (!day) return 0;
  if (day.type === 'rest') return 100;
  if (day.type === 'cardio') {
    const any = (day.options || []).some((_,oi) => state.cardioDone[cardioKey(state.phase, state.day, oi)]);
    return any ? 100 : 0;
  }
  let total = 0, done = 0;
  (day.exercises || []).forEach((ex, ei) => {
    for (let s = 0; s < ex.sets; s++) {
      total++;
      if (state.setData[setKey(state.phase, state.day, ei, s)]?.done) done++;
    }
  });
  return total > 0 ? Math.round(done / total * 100) : 0;
}

// ── Render helpers ─────────────────────────────────────────────────────────
function phaseColor(p) {
  return { p1: 'sage', p2: 'amber', p3a: 'rose', p3b: 'purple' }[p] || 'sage';
}

function renderHeader() {
  const pd = PHASES[state.phase];
  const pct = calcProgress();
  return `
  <header class="app-header">
    <div class="header-inner">
      <div class="header-left">
        <div class="app-logo">Mama <em>Moves</em></div>
        <div class="week-row">
          <span class="week-label">Pregnancy week</span>
          <input class="week-input" type="number" min="1" max="50" value="${state.week}"
            oninput="updateWeek(+this.value)" inputmode="numeric">
        </div>
      </div>
      <div class="header-right">
        <div class="progress-ring-wrap">
          <svg class="progress-ring" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--border)" stroke-width="3"/>
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--${phaseColor(state.phase)})" stroke-width="3"
              stroke-dasharray="${Math.round(2*Math.PI*18)}"
              stroke-dashoffset="${Math.round(2*Math.PI*18*(1-pct/100))}"
              stroke-linecap="round"
              transform="rotate(-90 22 22)"/>
          </svg>
          <span class="ring-label">${pct}%</span>
        </div>
      </div>
    </div>
    <nav class="phase-nav" id="phase-nav">
      ${Object.entries(PHASES).map(([k,v]) => `
        <button class="phase-btn ${state.phase === k ? 'active-'+k : ''}" onclick="setPhase('${k}')">
          <span class="phase-btn-name">${v.label}</span>
          <span class="phase-btn-sub">${v.sublabel}</span>
        </button>`).join('')}
    </nav>
  </header>`;
}

function renderPhaseCard() {
  const pd = PHASES[state.phase];
  return `
  <div class="phase-card phase-card--${pd.color}">
    <div class="phase-card-title">${pd.title}</div>
    <div class="phase-card-sub">${pd.sub}</div>
    <div class="tag-row">${pd.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  </div>`;
}

function renderSafety() {
  const pd = PHASES[state.phase];
  return `<div class="safety-box">
    <span class="safety-icon">⚠</span>
    <p class="safety-text">${pd.safety}</p>
  </div>`;
}

function renderDayPills() {
  const days = PHASES[state.phase].days;
  return `<div class="day-pills-wrap">
    <div class="section-label">Select day</div>
    <div class="day-pills">
      ${days.map((d,i) => `
        <button class="day-pill ${i === state.day ? 'active' : ''} ${d.type === 'rest' ? 'rest-pill' : ''}"
          onclick="setDay(${i})">
          <span class="day-pill-label">${d.label}</span>
        </button>`).join('')}
    </div>
  </div>`;
}

function renderStrength(day, dayIdx) {
  const pills = (day.meta||[]).map(m => `<span class="meta-chip">${m}</span>`).join('');
  let html = `<div class="workout-header">
    <div class="workout-title">${day.name}</div>
    <div class="meta-chips">${pills}</div>
  </div>`;

  (day.exercises||[]).forEach((ex, ei) => {
    const open = !!state.expanded[ei];
    let setsHtml = '';
    for (let s = 0; s < ex.sets; s++) {
      const k = setKey(state.phase, dayIdx, ei, s);
      const d = state.setData[k] || { reps:'', weight:'', done: false };
      setsHtml += `
      <div class="set-row">
        <span class="set-num">${s+1}</span>
        <input class="set-input${d.done?' done':''}" type="number" inputmode="decimal"
          placeholder="${ex.reps}" value="${d.reps}"
          oninput="onSetInput('${k}','reps',this.value)">
        <input class="set-input${d.done?' done':''}" type="number" inputmode="decimal"
          placeholder="lbs" value="${d.weight}"
          oninput="onSetInput('${k}','weight',this.value)">
        <button class="check-btn${d.done?' checked':''}" onclick="toggleSet('${k}')">
          ${d.done ? '✓' : ''}
        </button>
      </div>`;
    }

    const doneCount = Array.from({length: ex.sets}, (_,s) =>
      state.setData[setKey(state.phase, dayIdx, ei, s)]?.done).filter(Boolean).length;
    const complete = doneCount === ex.sets;

    html += `
    <div class="ex-card${complete?' ex-complete':''}">
      <div class="ex-head" onclick="toggleEx(${ei})">
        <div class="ex-head-left">
          <div class="ex-name">${ex.name}</div>
          <div class="ex-chips">
            <span class="ex-chip">${ex.sets} sets</span>
            <span class="ex-chip">${ex.reps} reps</span>
            <span class="ex-chip">⏱ ${ex.tempo}</span>
            <span class="ex-chip">💤 ${ex.rest}</span>
          </div>
          ${doneCount > 0 ? `<div class="set-progress">${doneCount}/${ex.sets} sets done</div>` : ''}
        </div>
        <span class="ex-chevron${open?' open':''}">${open?'▲':'▼'}</span>
      </div>
      ${open ? `
      <div class="ex-body">
        <div class="ex-note">${ex.note}</div>
        <div class="set-logger">
          <div class="set-header-row">
            <span class="sh-cell narrow">Set</span>
            <span class="sh-cell">Reps done</span>
            <span class="sh-cell">Weight</span>
            <span class="sh-cell narrow">✓</span>
          </div>
          ${setsHtml}
          <button class="add-set-btn" onclick="addSet(${ei})">+ Add set</button>
        </div>
      </div>` : ''}
    </div>`;
  });
  return html;
}

function renderCardio(day, dayIdx) {
  let html = `<div class="workout-header">
    <div class="workout-title">${day.name}</div>
    <div class="meta-chips"><span class="meta-chip meta-chip--amber">Choose one option</span></div>
  </div>`;

  (day.options||[]).forEach((opt, oi) => {
    const ck = cardioKey(state.phase, dayIdx, oi);
    const done = !!state.cardioDone[ck];
    const note = state.cardioNotes[ck] || '';
    html += `
    <div class="cardio-card${done?' cardio-done':''}">
      <div class="cardio-name">${opt.name}</div>
      <div class="cardio-spec"><strong>Duration:</strong> ${opt.duration}</div>
      <div class="cardio-spec"><strong>Intensity:</strong> ${opt.intensity}</div>
      ${opt.notes ? `<div class="cardio-note">${opt.notes}</div>` : ''}
      <div class="cardio-log-row">
        <input class="cardio-input" type="text" placeholder="Notes (how it felt, actual duration...)"
          value="${note}" oninput="onCardioNote('${ck}',this.value)">
        <button class="cardio-btn${done?' done':''}" onclick="toggleCardio('${ck}')">
          ${done ? '✓ Done' : 'Mark done'}
        </button>
      </div>
    </div>`;
  });
  return html;
}

function renderRest(day) {
  return `
  <div class="rest-card">
    <div class="rest-emoji">🌿</div>
    <div class="rest-title">${day.name}</div>
    <div class="rest-note">${day.note}</div>
  </div>`;
}

function renderHistory() {
  const entries = Object.entries(state.history || {})
    .sort((a,b) => b[0].localeCompare(a[0]))
    .slice(0, 7);
  if (!entries.length) return '';
  return `
  <div class="section-label" style="margin-top:20px">Recent activity</div>
  <div class="history-list">
    ${entries.map(([date, items]) => `
      <div class="history-item">
        <span class="history-date">${formatDate(date)}</span>
        <span class="history-detail">${items.map(i=>i.summary).join(', ')}</span>
      </div>`).join('')}
  </div>`;
}

function formatDate(str) {
  const d = new Date(str+'T12:00:00');
  return d.toLocaleDateString('en-US', { month:'short', day:'numeric' });
}

// ── Full render ────────────────────────────────────────────────────────────
function render() {
  const pd = PHASES[state.phase];
  const day = pd.days[state.day];

  let dayContent = '';
  if (day.type === 'strength') dayContent = renderStrength(day, state.day);
  else if (day.type === 'cardio') dayContent = renderCardio(day, state.day);
  else dayContent = renderRest(day);

  document.getElementById('app-root').innerHTML = `
    ${renderHeader()}
    <main class="main-scroll">
      ${renderPhaseCard()}
      ${renderSafety()}
      ${renderDayPills()}
      <div class="day-content">${dayContent}</div>
      ${renderHistory()}
      <div style="height:20px"></div>
    </main>
  `;
}

// ── Event handlers ─────────────────────────────────────────────────────────
function updateWeek(v) {
  state.week = v;
  saveState();
  document.querySelector('.week-input').value = v;
  document.getElementById('app-root').querySelector('.week-input').value = v;
}

function setPhase(p) {
  state.phase = p;
  state.day = 0;
  state.expanded = {};
  saveState();
  render();
  document.querySelector('.phase-nav')?.scrollTo({ left: 0, behavior: 'smooth' });
}

function setDay(d) {
  state.day = d;
  state.expanded = {};
  saveState();
  render();
  document.querySelector('.main-scroll')?.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleEx(idx) {
  state.expanded[idx] = !state.expanded[idx];
  render();
}

function onSetInput(k, field, value) {
  if (!state.setData[k]) state.setData[k] = { reps:'', weight:'', done: false };
  state.setData[k][field] = value;
  saveState();
}

function toggleSet(k) {
  if (!state.setData[k]) state.setData[k] = { reps:'', weight:'', done: false };
  state.setData[k].done = !state.setData[k].done;
  saveState();
  logActivity();
  render();
}

function addSet(ei) {
  PHASES[state.phase].days[state.day].exercises[ei].sets++;
  render();
}

function onCardioNote(ck, val) {
  state.cardioNotes[ck] = val;
  saveState();
}

function toggleCardio(ck) {
  state.cardioDone[ck] = !state.cardioDone[ck];
  saveState();
  logActivity();
  render();
}

function logActivity() {
  const pd = PHASES[state.phase];
  const day = pd.days[state.day];
  const pct = calcProgress();
  const dateStr = today();
  if (!state.history) state.history = {};
  if (!state.history[dateStr]) state.history[dateStr] = [];
  const summary = `${day.name} (${pct}%)`;
  state.history[dateStr] = [{ phase: state.phase, day: state.day, summary }];
  saveState();
}

// ── Init ───────────────────────────────────────────────────────────────────
loadState();
render();

// Service worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
