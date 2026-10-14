// Render skills: one row per category inside a single frame
function renderSkills() {
  document.getElementById('label-skills').textContent = '';
  document.getElementById('skills-title').textContent = t(UI_LABELS.skills_title);
  document.getElementById('skills-grid').innerHTML = `
    <div class="frame-list">
      ${PORTFOLIO_DATA.skills.map(s => `
        <div class="sk-row">
          <h3 class="sk-label">${t(s.category)}</h3>
          <p class="sk-items">${s.items.join(', ')}</p>
        </div>`).join('')}
    </div>`;
}
