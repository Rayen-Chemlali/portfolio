// ═══════════════════════════════════════════════════════
//  RENDER SKILLS, tuned for warm sand palette
// ═══════════════════════════════════════════════════════
const SKILL_ACCENTS = {
  lang:   { color: '#1A659E', bg: 'rgba(26,101,158,0.08)',  border: 'rgba(26,101,158,0.22)' },
  web:    { color: '#6366F1', bg: 'rgba(99,102,241,0.07)',  border: 'rgba(99,102,241,0.22)' },
  ai:     { color: '#4A7C6F', bg: 'rgba(74,124,111,0.08)',  border: 'rgba(74,124,111,0.22)' },
  devops: { color: '#DC6B4A', bg: 'rgba(220,107,74,0.07)',  border: 'rgba(220,107,74,0.22)' },
  arch:   { color: '#7C5CBF', bg: 'rgba(124,92,191,0.07)',  border: 'rgba(124,92,191,0.22)' },
  hpc:    { color: '#1A659E', bg: 'rgba(26,101,158,0.06)',  border: 'rgba(26,101,158,0.20)' }
};

function renderSkills() {
  document.getElementById('label-skills').textContent = t(UI_LABELS.skills_lbl);
  document.getElementById('skills-title').textContent = t(UI_LABELS.skills_title);

  document.getElementById('skills-grid').innerHTML = PORTFOLIO_DATA.skills.map(s => {
    const accent = SKILL_ACCENTS.hpc;
    const pills = s.items.map(item => `
      <span class="skill-pill" style="
        background:${accent.bg};
        border-color:${accent.border};
        color:#3B4759;
      " onmouseover="this.style.color='${accent.color}';this.style.borderColor='${accent.color}';this.style.background='${accent.bg}'"
         onmouseout="this.style.color='#3B4759';this.style.borderColor='${accent.border}';this.style.background='${accent.bg}'"
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