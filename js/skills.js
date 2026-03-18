// ═══════════════════════════════════════════════════════
//  RENDER SKILLS
// ═══════════════════════════════════════════════════════
const SKILL_ACCENTS = {
  lang:   { color: '#00d4ff', bg: 'rgba(0,212,255,0.06)',   border: 'rgba(0,212,255,0.18)'  },
  web:    { color: '#818cf8', bg: 'rgba(129,140,248,0.06)', border: 'rgba(129,140,248,0.2)' },
  ai:     { color: '#34d399', bg: 'rgba(52,211,153,0.06)',  border: 'rgba(52,211,153,0.2)'  },
  devops: { color: '#fb923c', bg: 'rgba(251,146,60,0.06)',  border: 'rgba(251,146,60,0.2)'  },
  arch:   { color: '#a78bfa', bg: 'rgba(167,139,250,0.06)', border: 'rgba(167,139,250,0.2)' }
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
        color:#cbd5e1;
      " onmouseover="this.style.color='${accent.color}';this.style.borderColor='${accent.color}'"
         onmouseout="this.style.color='#cbd5e1';this.style.borderColor='${accent.border}'"
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