// ═══════════════════════════════════════════════════════
//  RENDER HERO
// ═══════════════════════════════════════════════════════
function renderHero() {
  document.getElementById('hero-bio').textContent = lang === 'en'
      ? "5th-year engineering student at INP Toulouse – ENSEEIHT (HPC Big Data), on exchange from INSAT. Passionate about AI, ML and software architecture. Building things across internships, freelance projects, and open to new opportunities."
      : "Étudiant en 5ème année à l'INP Toulouse – ENSEEIHT (HPC Big Data), en échange depuis l'INSAT. Passionné par l'IA, le ML et l'architecture logicielle. Je construis des choses en stages, en freelance, et suis ouvert à de nouvelles opportunités.";
  document.getElementById('btn-work').textContent = t(UI_LABELS.hero_work);
  document.getElementById('btn-cv').textContent = t(UI_LABELS.hero_cv);

  const cvBtn = document.getElementById('btn-cv');
  cvBtn.href = '#';
  cvBtn.removeAttribute('download');
  cvBtn.onclick = function(e) { e.preventDefault(); openCvModal(); };

  // hero-right now shows photo — no code block needed
}

// ═══════════════════════════════════════════════════════
//  CV DOWNLOAD MODAL
// ═══════════════════════════════════════════════════════
function openCvModal() {
  const existing = document.getElementById('cv-modal-overlay');
  if (existing) existing.remove();

  const isEn = lang === 'en';

  const overlay = document.createElement('div');
  overlay.id = 'cv-modal-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'cv-modal-title');

  overlay.innerHTML = `
    <style>
      #cv-modal-overlay {
        position: fixed; inset: 0; z-index: 2000;
        background: rgba(28,25,23,0.45);
        backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center;
        animation: cvFadeIn 0.18s ease;
      }
      @keyframes cvFadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes cvSlideUp {
        from { opacity: 0; transform: translateY(14px) }
        to   { opacity: 1; transform: translateY(0) }
      }
      #cv-modal-box {
        background: #FDFAF5;
        border: 1px solid #D6CFBF;
        border-radius: 14px;
        width: min(380px, 92vw);
        overflow: hidden;
        animation: cvSlideUp 0.22s ease;
        box-shadow: 0 16px 48px rgba(28,25,23,0.14), 0 4px 12px rgba(28,25,23,0.08);
      }
      #cv-modal-header {
        padding: 22px 22px 18px;
        border-bottom: 1px solid #E8E2D8;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        background: #F2EDE4;
      }
      #cv-modal-title {
        font-family: 'Playfair Display', Georgia, serif;
        font-size: 16px;
        font-weight: 700;
        color: #1C1917;
        letter-spacing: -0.2px;
        margin: 0;
      }
      #cv-modal-subtitle {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 11px;
        color: #78716C;
        margin-top: 4px;
        line-height: 1.4;
      }
      #cv-modal-close {
        background: #FDFAF5;
        border: 1px solid #D6CFBF;
        color: #78716C;
        font-size: 16px;
        line-height: 1;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 7px;
        transition: all 0.15s;
        flex-shrink: 0;
        margin-top: -2px;
      }
      #cv-modal-close:hover {
        color: #1C1917;
        background: #EDE8DE;
        border-color: #C17B2A;
      }
      #cv-modal-options {
        padding: 14px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #FDFAF5;
      }
      .cv-opt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: #F2EDE4;
        border: 1.5px solid #D6CFBF;
        border-radius: 9px;
        cursor: pointer;
        transition: border-color 0.18s, background 0.18s;
        text-align: left;
        width: 100%;
        gap: 12px;
      }
      .cv-opt:hover {
        border-color: #C17B2A;
        background: rgba(193,123,42,0.05);
      }
      .cv-opt-left {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .cv-opt-label {
        font-family: 'DM Sans', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #1C1917;
        letter-spacing: 0.1px;
      }
      .cv-opt-sub {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: #78716C;
        letter-spacing: 0.3px;
      }
      .cv-opt-arrow {
        color: #78716C;
        font-size: 14px;
        flex-shrink: 0;
        transition: color 0.18s, transform 0.18s;
      }
      .cv-opt:hover .cv-opt-arrow {
        color: #C17B2A;
        transform: translateX(3px);
      }
      .cv-opt-divider {
        height: 1px;
        background: #E8E2D8;
        margin: 2px 0;
      }
      .cv-opt.cv-opt-both {
        border-color: rgba(193,123,42,0.35);
        background: rgba(193,123,42,0.04);
      }
      .cv-opt.cv-opt-both .cv-opt-label { color: #C17B2A; }
      .cv-opt.cv-opt-both .cv-opt-sub   { color: #78716C; }
      .cv-opt.cv-opt-both:hover {
        border-color: #C17B2A;
        background: rgba(193,123,42,0.09);
      }
      .cv-opt.cv-opt-both .cv-opt-arrow { color: rgba(193,123,42,0.5); }
      .cv-opt.cv-opt-both:hover .cv-opt-arrow { color: #C17B2A; }
    </style>

    <div id="cv-modal-box">
      <div id="cv-modal-header">
        <div>
          <h3 id="cv-modal-title">${isEn ? 'Download CV' : 'Télécharger le CV'}</h3>
          <div id="cv-modal-subtitle">${isEn ? 'Select a version to download' : 'Sélectionnez une version à télécharger'}</div>
        </div>
        <button id="cv-modal-close" aria-label="Close">&times;</button>
      </div>

      <div id="cv-modal-options">
        <button class="cv-opt" data-cv="fr">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French — Full (2 pages)' : 'Français — Complet (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="en">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English — Full (2 pages)' : 'Anglais — Complet (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="fr-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French — Short (1 page)' : 'Français — Court (1 page)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR_1page.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="en-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English — Short (1 page)' : 'Anglais — Court (1 page)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN_1page.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <div class="cv-opt-divider"></div>

        <button class="cv-opt cv-opt-both" data-cv="both">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'Both Full Versions' : 'Les deux versions complètes'}</span>
            <span class="cv-opt-sub">${isEn ? 'Download EN + FR' : 'Télécharger EN + FR'}</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeCvModal();
  });
  overlay.querySelector('#cv-modal-close').addEventListener('click', closeCvModal);

  overlay._keyHandler = function(e) { if (e.key === 'Escape') closeCvModal(); };
  document.addEventListener('keydown', overlay._keyHandler);

  overlay.querySelectorAll('.cv-opt').forEach(function(btn) {
    btn.addEventListener('click', function() {
      triggerCvDownload(btn.getAttribute('data-cv'));
      closeCvModal();
    });
  });
}

function closeCvModal() {
  const overlay = document.getElementById('cv-modal-overlay');
  if (!overlay) return;
  document.removeEventListener('keydown', overlay._keyHandler);
  overlay.remove();
}

function triggerCvDownload(choice) {
  const cvUrls = PORTFOLIO_DATA.meta.cvUrl;
  const enUrl = typeof cvUrls === 'object' ? cvUrls['en'] : cvUrls;
  const frUrl = typeof cvUrls === 'object' ? cvUrls['fr'] : cvUrls;

  function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || url.split('/').pop() || 'CV.pdf';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  if (choice === 'en') {
    downloadFile(enUrl, 'CV_Rayen_Chemlali_EN.pdf');
  } else if (choice === 'fr') {
    downloadFile(frUrl, 'CV_Rayen_Chemlali_FR.pdf');
  } else if (choice === 'fr-short' || choice === 'en-short') {
    const short = PORTFOLIO_DATA.meta.cvUrlShort || {};
    const l = choice.slice(0, 2);
    downloadFile(short[l], 'CV_Rayen_Chemlali_' + l.toUpperCase() + '_1page.pdf');
  } else if (choice === 'both') {
    downloadFile(enUrl, 'CV_Rayen_Chemlali_EN.pdf');
    setTimeout(function() {
      downloadFile(frUrl, 'CV_Rayen_Chemlali_FR.pdf');
    }, 400);
  }
}

// ═══════════════════════════════════════════════════════
//  TYPEWRITER
// ═══════════════════════════════════════════════════════
function startTypewriter() {
  const roles = PORTFOLIO_DATA.meta.roles[lang];
  const el = document.getElementById('typewriter');
  if (!el) return;
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  typewriterIndex = 0; typewriterCharIndex = 0; typewriterDeleting = false;
  function tick() {
    const current = roles[typewriterIndex % roles.length];
    if (typewriterDeleting) {
      typewriterCharIndex--;
      el.textContent = current.substring(0, typewriterCharIndex);
      if (typewriterCharIndex === 0) { typewriterDeleting = false; typewriterIndex++; typewriterTimeout = setTimeout(tick, 400); return; }
      typewriterTimeout = setTimeout(tick, 40);
    } else {
      typewriterCharIndex++;
      el.textContent = current.substring(0, typewriterCharIndex);
      if (typewriterCharIndex === current.length) { typewriterDeleting = true; typewriterTimeout = setTimeout(tick, 1800); return; }
      typewriterTimeout = setTimeout(tick, 80);
    }
  }
  tick();
}