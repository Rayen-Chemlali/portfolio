// ═══════════════════════════════════════════════════════
//  RENDER EXPERIENCE
// ═══════════════════════════════════════════════════════
function renderExperience() {
  document.getElementById('label-experience').textContent = t(UI_LABELS.exp_lbl);
  document.getElementById('exp-title').textContent = t(UI_LABELS.exp_title);

  const internships = PORTFOLIO_DATA.experience.filter(e => t(e.type) !== 'Freelance');
  const freelances  = PORTFOLIO_DATA.experience.filter(e => t(e.type) === 'Freelance');

  function renderCard(e) {
    const projIdx = e.linkedProjectId
        ? PORTFOLIO_DATA.projects.findIndex(p => p.id === e.linkedProjectId)
        : -1;
    const viewProjectBtn = projIdx !== -1 ? `
      <button class="timeline-project-btn" onclick="openModal(${projIdx})" aria-label="View project for ${t(e.role)}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        View Project
      </button>` : '';
    return `
      <div class="timeline-item">
        <div class="timeline-dot" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${t(e.role)}</h3>
            <span class="timeline-period">${e.period}</span>
          </div>
          <div class="timeline-company">${e.company}</div>
          <span class="timeline-type-badge">${t(e.type)}</span>
          <p class="timeline-desc">${t(e.description)}</p>
          ${viewProjectBtn}
        </div>
      </div>`;
  }

  function renderColumn(titleObj, items) {
    return `
      <div class="exp-col">
        <div class="exp-col-header">
          <span class="exp-col-label">${t(titleObj)}</span>
          <span class="exp-col-count">${items.length}</span>
        </div>
        <div class="timeline">
          ${items.map(renderCard).join('')}
        </div>
      </div>`;
  }

  document.getElementById('timeline').innerHTML = `
    <div class="exp-two-col">
      ${renderColumn({ en: 'Internships & Part-Time', fr: 'Stages & Temps Partiel' }, internships)}
      ${renderColumn({ en: 'Freelance', fr: 'Freelance' }, freelances)}
    </div>
  `;
}