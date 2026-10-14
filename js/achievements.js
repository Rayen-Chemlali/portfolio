// Render awards and contests
function renderAchievements() {
  document.getElementById('label-achievements').textContent = '';
  document.getElementById('ach-title').textContent = t(UI_LABELS.ach_title);
  document.getElementById('achievements-grid').innerHTML = PORTFOLIO_DATA.achievements.map(a => {
    const rank = lang === 'fr' ? String(a.place).replace(/^1st$/, '1er').replace(/^(\d+)(st|nd|rd|th)$/, '$1e') : a.place;
    const medal = lang === 'fr' ? String(a.medal || '').replace('Winner', 'Gagnant') : a.medal;
    const sub  = medal && a.medal !== a.place ? `<div class="ach-rank-sub">${medal}</div>` : '';
    return `
    <article class="ach-row">
      <div><div class="ach-rank">${rank}</div>${sub}</div>
      <div>
        <h3 class="ach-title">${t(a.title)}</h3>
        <p class="ach-sub">${t(a.subtitle)}</p>
        <a class="text-btn" href="${a.url}" target="_blank" rel="noopener noreferrer">${t(a.linkLabel || UI_LABELS.view_post)}</a>
      </div>
    </article>`;
  }).join('');
}
