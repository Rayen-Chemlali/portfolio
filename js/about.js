// ═══════════════════════════════════════════════════════
//  RENDER ABOUT
// ═══════════════════════════════════════════════════════
function renderAbout() {
  const paragraphs = t(PORTFOLIO_DATA.about).split('\n\n');
  const firstParagraph = paragraphs[0] || '';
  const restParagraphs = paragraphs.slice(1);

  // Restructure the about-left: photo + first paragraph side by side in .about-top
  // then remaining paragraphs below
  const aboutLeft = document.querySelector('.about-left');
  if (aboutLeft) {
    const photoWrapper = aboutLeft.querySelector('.photo-wrapper');
    const photoHtml = photoWrapper ? photoWrapper.outerHTML : '';

    aboutLeft.innerHTML = `
      <div class="about-top">
        ${photoHtml}
        <div class="about-intro"><p>${firstParagraph}</p></div>
      </div>
      <div class="about-text" id="about-text">
        ${restParagraphs.map(p => `<p>${p}</p>`).join('')}
      </div>
    `;
  } else {
    const el = document.getElementById('about-text');
    if (el) el.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  document.getElementById('label-about').textContent = t(UI_LABELS.about_lbl);
  document.getElementById('about-title').textContent = t(UI_LABELS.about_title);
  document.getElementById('stat-year').textContent = t(UI_LABELS.stat_year);

  const barsEl = document.getElementById('lang-bars');
  barsEl.innerHTML = PORTFOLIO_DATA.languages.map(l => `
    <div class="lang-bar-item">
      <div class="lang-bar-header">
        <span style="font-size:12px;font-family:var(--font-body);font-weight:600">${l.lang}</span>
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