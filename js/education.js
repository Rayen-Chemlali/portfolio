// Render education
function renderEducation() {
  document.getElementById('label-education').textContent = '';
  document.getElementById('edu-title').textContent = t(UI_LABELS.edu_title);
  document.getElementById('edu-grid').innerHTML = PORTFOLIO_DATA.education.map(e => `
    <article class="entry">
      <div class="entry-when">${e.period}</div>
      <div>
        <h3 class="entry-title">${t(e.institution)}</h3>
        <div class="entry-org">${e.full}</div>
        <p class="entry-desc">${t(e.degree)}</p>
        <ul class="entry-list">${t(e.highlights).map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
    </article>
  `).join('');
}
