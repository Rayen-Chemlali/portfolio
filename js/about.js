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
  const yn = document.getElementById('stat-year-num');
  if (yn) yn.textContent = lang === 'en' ? '5th' : '5ème';

  const barsEl = document.getElementById('lang-bars');
  barsEl.innerHTML = `
    <div class="fact-title">${lang === 'en' ? 'Languages' : 'Langues'}</div>
    <ul class="lang-list">
      ${PORTFOLIO_DATA.languages.map(l => `<li><span>${t(l.lang)}</span><span>${t(l.level)}</span></li>`).join('')}
    </ul>`;
}

function animateLangBars() {
  setTimeout(() => {
    document.querySelectorAll('.lang-bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);
}