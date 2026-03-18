// ═══════════════════════════════════════════════════════
//  RENDER EDUCATION
// ═══════════════════════════════════════════════════════
function renderEducation() {
  document.getElementById('label-education').textContent = t(UI_LABELS.edu_lbl);
  document.getElementById('edu-title').textContent = t(UI_LABELS.edu_title);
  document.getElementById('edu-grid').innerHTML = PORTFOLIO_DATA.education.map(e => `
    <article class="edu-card">
      <div class="edu-inst">${t(e.institution)}</div>
      <div class="edu-full">${e.full}</div>
      <div class="edu-degree">${t(e.degree)}</div>
      <div class="edu-period">${e.period}</div>
      <ul class="edu-highlights" aria-label="Academic highlights">
        ${t(e.highlights).map(h => `<li>${h}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}
