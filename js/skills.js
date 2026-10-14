// Render skills: one row per category, items as plain text
function renderSkills() {
  document.getElementById('label-skills').textContent = '';
  document.getElementById('skills-title').textContent = t(UI_LABELS.skills_title);
  document.getElementById('skills-grid').innerHTML = PORTFOLIO_DATA.skills.map(s => `
    <div class="skill-row">
      <h3 class="skill-row-label">${t(s.category)}</h3>
      <p class="skill-row-items">${s.items.join(', ')}</p>
    </div>
  `).join('');
}
