// ═══════════════════════════════════════════════════════
//  RENDER SKILLS
// ═══════════════════════════════════════════════════════
function renderSkills() {
  document.getElementById('label-skills').textContent = t(UI_LABELS.skills_lbl);
  document.getElementById('skills-title').textContent = t(UI_LABELS.skills_title);
  document.getElementById('skills-grid').innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <article class="skill-card">
      <div class="skill-card-header">
        <span class="skill-icon" role="img" aria-label="${t(s.category)} icon">${s.icon}</span>
        <h3 class="skill-category">${t(s.category)}</h3>
      </div>
      <div class="skills-pills">${s.items.map(item => `<span class="skill-pill">${item}</span>`).join('')}</div>
    </article>
  `).join('');
}
