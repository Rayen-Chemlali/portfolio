// ═══════════════════════════════════════════════════════
//  RENDER SKILLS — tuned for warm sand palette
// ═══════════════════════════════════════════════════════
const SKILL_ACCENTS = {
  lang:   { color: '#C17B2A', bg: 'rgba(193,123,42,0.08)',  border: 'rgba(193,123,42,0.22)' },
  web:    { color: '#6366F1', bg: 'rgba(99,102,241,0.07)',  border: 'rgba(99,102,241,0.22)' },
  ai:     { color: '#4A7C6F', bg: 'rgba(74,124,111,0.08)',  border: 'rgba(74,124,111,0.22)' },
  devops: { color: '#DC6B4A', bg: 'rgba(220,107,74,0.07)',  border: 'rgba(220,107,74,0.22)' },
  arch:   { color: '#7C5CBF', bg: 'rgba(124,92,191,0.07)',  border: 'rgba(124,92,191,0.22)' },
  hpc:    { color: '#2F7FA8', bg: 'rgba(47,127,168,0.07)',  border: 'rgba(47,127,168,0.22)' },
  opt:    { color: '#B5487A', bg: 'rgba(181,72,122,0.07)',  border: 'rgba(181,72,122,0.22)' }
};

function renderSkills() {
  document.getElementById('label-skills').textContent = t(UI_LABELS.skills_lbl);
  document.getElementById('skills-title').textContent = t(UI_LABELS.skills_title);

  document.getElementById('skills-grid').innerHTML = PORTFOLIO_DATA.skills.map(s => {
    const accent = SKILL_ACCENTS[s.tag] || SKILL_ACCENTS.lang;
    const pills = s.items.map(item => `
      <span class="skill-pill" style="
        background:${accent.bg};
        border-color:${accent.border};
        color:#57534E;
      " onmouseover="this.style.color='${accent.color}';this.style.borderColor='${accent.color}';this.style.background='${accent.bg}'"
         onmouseout="this.style.color='#57534E';this.style.borderColor='${accent.border}';this.style.background='${accent.bg}'"
      >${item}</span>
    `).join('');

    return `
      <article class="skill-row">
        <div class="skill-row-bar" style="background:${accent.color}"></div>
        <div class="skill-row-body">
          <div class="skill-row-header">
            <span class="skill-row-label" style="color:${accent.color}">${t(s.category)}</span>
            <span class="skill-row-count" style="color:${accent.color};background:${accent.bg};border-color:${accent.border}">${s.items.length}</span>
          </div>
          <div class="skill-pills-wrap">${pills}</div>
        </div>
      </article>
    `;
  }).join('');
}