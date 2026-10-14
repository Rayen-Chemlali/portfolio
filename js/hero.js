// ═══════════════════════════════════════════════════════
//  RENDER HERO
// ═══════════════════════════════════════════════════════
function renderHero() {
  document.getElementById('hero-bio').textContent = lang === 'en'
      ? "5th-year engineering student at INP Toulouse - ENSEEIHT (HPC Big Data track), alongside the PSMSC Master (Scientific Computing), on academic exchange from INSAT. Passionate about AI, HPC and software architecture. Building things across internships, freelance projects and hackathons, and looking for a 6-month end-of-studies internship in 2027."
      : "Étudiant en 5ème année à l'INP Toulouse - ENSEEIHT (parcours HPC Big Data), en parallèle du Master PSMSC (Scientific Computing), en échange académique depuis l'INSAT. Passionné par l'IA, le HPC et l'architecture logicielle. Je construis des choses en stages, en freelance et en hackathons, et je recherche un stage de fin d'études de 6 mois en 2027.";
  const st = document.getElementById('hero-status');
  if (st) st.innerHTML = '<span class="hero-status-dot" aria-hidden="true"></span>' + (lang === 'en'
      ? 'Open to a 6-month end-of-studies internship in 2027'
      : 'Disponible pour un stage de fin d\'études de 6 mois en 2027');
  const facts = lang === 'en'
    ? [['Now', 'ENSEEIHT, HPC Big Data track, and the PSMSC Master, Toulouse'], ['Before', 'Four years of software engineering at INSAT, Tunisia'], ['Focus', 'Agentic AI and high-performance computing']]
    : [['Aujourd\'hui', 'ENSEEIHT, parcours HPC Big Data, et Master PSMSC, Toulouse'], ['Avant', 'Quatre ans de génie logiciel à l\'INSAT, Tunisie'], ['Domaines', 'IA agentique et calcul haute performance']];
  const factsEl = document.getElementById('hero-facts');
  if (factsEl) factsEl.innerHTML = facts.map(f => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('');
  const navCv = document.getElementById('nav-cv');
  if (navCv) navCv.setAttribute('aria-label', lang === 'en' ? 'Download my CV' : 'Télécharger mon CV');
  document.getElementById('btn-work').textContent = t(UI_LABELS.hero_work);
  document.getElementById('btn-cv').textContent = t(UI_LABELS.hero_cv);

  const cvBtn = document.getElementById('btn-cv');
  cvBtn.href = '#';
  cvBtn.removeAttribute('download');
  cvBtn.onclick = function(e) { e.preventDefault(); openCvModal(); };

  // hero-right now shows photo, no code block needed
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
        background: rgba(19,34,58,0.45);
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
        background: #FFFFFF;
        border: 1px solid #D8DEE7;
        border-radius: 14px;
        width: min(380px, 92vw);
        overflow: hidden;
        animation: cvSlideUp 0.22s ease;
        box-shadow: 0 16px 48px rgba(19,34,58,0.14), 0 4px 12px rgba(19,34,58,0.08);
      }
      #cv-modal-header {
        padding: 22px 22px 18px;
        border-bottom: 1px solid #E9EDF2;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        background: #F3F5F8;
      }
      #cv-modal-title {
        font-family: 'Archivo', system-ui, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: #13223A;
        letter-spacing: -0.2px;
        margin: 0;
      }
      #cv-modal-subtitle {
        font-family: 'Archivo', system-ui, sans-serif;
        font-size: 11px;
        color: #5F6B7D;
        margin-top: 4px;
        line-height: 1.4;
      }
      #cv-modal-close {
        background: #FFFFFF;
        border: 1px solid #D8DEE7;
        color: #5F6B7D;
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
        color: #13223A;
        background: #EAEEF3;
        border-color: #1A659E;
      }
      #cv-modal-options {
        padding: 14px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        background: #FFFFFF;
      }
      .cv-opt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: #F3F5F8;
        border: 1.5px solid #D8DEE7;
        border-radius: 9px;
        cursor: pointer;
        transition: border-color 0.18s, background 0.18s;
        text-align: left;
        width: 100%;
        gap: 12px;
      }
      .cv-opt:hover {
        border-color: #1A659E;
        background: rgba(26,101,158,0.05);
      }
      .cv-opt-left {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .cv-opt-label {
        font-family: 'Archivo', system-ui, sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #13223A;
        letter-spacing: 0.1px;
      }
      .cv-opt-sub {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: #5F6B7D;
        letter-spacing: 0.3px;
      }
      .cv-opt-arrow {
        color: #5F6B7D;
        font-size: 14px;
        flex-shrink: 0;
        transition: color 0.18s, transform 0.18s;
      }
      .cv-opt:hover .cv-opt-arrow {
        color: #1A659E;
        transform: translateX(3px);
      }
      .cv-opt-divider {
        height: 1px;
        background: #E9EDF2;
        margin: 2px 0;
      }
      .cv-opt.cv-opt-both {
        border-color: rgba(26,101,158,0.35);
        background: rgba(26,101,158,0.04);
      }
      .cv-opt.cv-opt-both .cv-opt-label { color: #1A659E; }
      .cv-opt.cv-opt-both .cv-opt-sub   { color: #5F6B7D; }
      .cv-opt.cv-opt-both:hover {
        border-color: #1A659E;
        background: rgba(26,101,158,0.09);
      }
      .cv-opt.cv-opt-both .cv-opt-arrow { color: rgba(26,101,158,0.5); }
      .cv-opt.cv-opt-both:hover .cv-opt-arrow { color: #1A659E; }
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
            <span class="cv-opt-label">${isEn ? 'French, full version (2 pages)' : 'Français, version complète (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="en">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English, full version (2 pages)' : 'Anglais, version complète (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="fr-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French, short version (1 page)' : 'Français, version courte (1 page)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR_1page.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="en-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English, short version (1 page)' : 'Anglais, version courte (1 page)'}</span>
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
  const el = document.getElementById('typewriter');
  if (!el) return;
  el.textContent = lang === 'en'
    ? 'Software engineer working on agentic AI and high-performance computing'
    : 'Ingénieur logiciel, entre IA agentique et calcul haute performance';
  const sub = document.getElementById('sidebar-sub');
  if (sub) sub.textContent = lang === 'en' ? 'Software engineer, HPC and agentic AI' : 'Ingénieur logiciel, HPC et IA agentique';
}
