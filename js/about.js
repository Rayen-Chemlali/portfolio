// ═══════════════════════════════════════════════════════
//  RENDER ABOUT
// ═══════════════════════════════════════════════════════
function renderAbout() {
  const el = document.getElementById('about-text');
  el.innerHTML = t(PORTFOLIO_DATA.about).split('\n\n').map(p => `<p>${p}</p>`).join('');
  document.getElementById('label-about').textContent = t(UI_LABELS.about_lbl);
  document.getElementById('about-title').textContent = t(UI_LABELS.about_title);
  document.getElementById('stat-year').textContent = t(UI_LABELS.stat_year);
  const barsEl = document.getElementById('lang-bars');
  barsEl.innerHTML = PORTFOLIO_DATA.languages.map(l => `
    <div class="lang-bar-item">
      <div class="lang-bar-header">
        <span style="font-size:12px;font-family:var(--font-display);font-weight:600">${l.lang}</span>
        <span style="font-size:11px;color:var(--text-muted);font-family:var(--font-mono)">${t(l.level)}</span>
      </div>
      <div class="lang-bar-track"><div class="lang-bar-fill" data-pct="${l.pct}" style="width:0%"></div></div>
    </div>
  `).join('');
}

function animateLangBars() {
  setTimeout(() => {
    document.querySelectorAll('.lang-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);
}
