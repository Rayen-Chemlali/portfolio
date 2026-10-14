// Render experience: two groups, one entry per role
function renderExperience() {
  document.getElementById('label-experience').textContent = '';
  document.getElementById('exp-title').textContent = t(UI_LABELS.exp_title);

  const internships = PORTFOLIO_DATA.experience.filter(e => t(e.type) !== 'Freelance');
  const freelances  = PORTFOLIO_DATA.experience.filter(e => t(e.type) === 'Freelance');

  function entry(e) {
    const projIdx = e.linkedProjectId
      ? PORTFOLIO_DATA.projects.findIndex(p => p.id === e.linkedProjectId)
      : -1;
    const btn = projIdx !== -1
      ? `<button class="text-btn" onclick="openModal(${projIdx})">${lang === 'en' ? 'See the project' : 'Voir le projet'}</button>`
      : '';
    return `
      <article class="entry">
        <div class="entry-when">${e.period}</div>
        <div>
          <h4 class="entry-title">${t(e.role)}</h4>
          <div class="entry-org">${e.company} <span class="entry-kind">(${t(e.type).toLowerCase()})</span></div>
          <p class="entry-desc">${t(e.description)}</p>
          ${btn}
        </div>
      </article>`;
  }

  function group(title, items) {
    return `
      <div class="exp-group">
        <h3 class="sub-title">${t(title)}</h3>
        ${items.map(entry).join('')}
      </div>`;
  }

  document.getElementById('timeline').innerHTML =
    group({ en: 'Internships and part-time work', fr: 'Stages et temps partiel' }, internships) +
    group({ en: 'Freelance', fr: 'Freelance' }, freelances);
}
