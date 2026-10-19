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
      .cv-row { display: flex; gap: 6px; align-items: stretch; }
      .cv-row .cv-opt { flex: 1; min-width: 0; }
      .cv-prev {
        display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
        padding: 0 12px; min-width: 64px;
        background: #FFFFFF; border: 1.5px solid #D8DEE7; border-radius: 9px;
        color: #1A659E; cursor: pointer;
        font-family: 'Archivo', system-ui, sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.2px;
        transition: border-color 0.18s, background 0.18s;
      }
      .cv-prev svg { width: 16px; height: 16px; }
      .cv-prev:hover { border-color: #1A659E; background: rgba(26,101,158,0.05); }
      .cv-opt:focus-visible, .cv-prev:focus-visible, #cv-modal-close:focus-visible, .cv-view-btn:focus-visible {
        outline: 2px solid #1A659E; outline-offset: 2px;
      }
      #cv-modal-box.cv-viewing { width: min(920px, 94vw); height: 90vh; display: flex; flex-direction: column; }
      #cv-viewer { flex: 1; display: flex; flex-direction: column; background: #EAEEF3; min-height: 0; }
      #cv-viewer iframe { flex: 1; width: 100%; border: 0; background: #EAEEF3; }
      .cv-view-actions { display: flex; gap: 8px; align-items: center; flex-shrink: 0; }
      .cv-view-btn {
        background: #FFFFFF; border: 1px solid #D8DEE7; color: #13223A; cursor: pointer;
        font-family: 'Archivo', system-ui, sans-serif; font-size: 12px; font-weight: 600;
        padding: 6px 12px; border-radius: 7px; transition: all 0.15s; white-space: nowrap;
      }
      .cv-view-btn:hover { border-color: #1A659E; background: #EAEEF3; }
      .cv-view-btn.primary { background: #1A659E; border-color: #1A659E; color: #FFFFFF; }
      .cv-view-btn.primary:hover { background: #13507E; }
    </style>

    <div id="cv-modal-box">
      <div id="cv-modal-header">
        <div>
          <h3 id="cv-modal-title">${isEn ? 'Download CV' : 'Télécharger le CV'}</h3>
          <div id="cv-modal-subtitle">${isEn ? 'Preview or download a version' : 'Prévisualisez ou téléchargez une version'}</div>
        </div>
        <button id="cv-modal-close" aria-label="Close">&times;</button>
      </div>

      <div id="cv-modal-options">
        ${CV_CHOICES.map(c => `
        <div class="cv-row">
          <button class="cv-opt" data-cv="${c.id}" aria-label="${isEn ? 'Download' : 'Télécharger'}: ${isEn ? c.en : c.fr}">
            <div class="cv-opt-left">
              <span class="cv-opt-label">${isEn ? c.en : c.fr}</span>
              <span class="cv-opt-sub">${c.file}</span>
            </div>
            <span class="cv-opt-arrow">&#8595;</span>
          </button>
          <button class="cv-prev" data-preview="${c.id}" aria-label="${isEn ? 'Preview' : 'Aperçu'}: ${isEn ? c.en : c.fr}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            ${isEn ? 'Preview' : 'Aperçu'}
          </button>
        </div>`).join('')}
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
  overlay.querySelectorAll('.cv-prev').forEach(function(btn) {
    btn.addEventListener('click', function() { previewCv(btn.getAttribute('data-preview')); });
  });
}

const CV_CHOICES = [
  { id: 'fr',       fr: 'Français, version complète (2 pages)', en: 'French, full version (2 pages)',  file: 'CV_Rayen_Chemlali_FR.pdf' },
  { id: 'en',       fr: 'Anglais, version complète (2 pages)',  en: 'English, full version (2 pages)', file: 'CV_Rayen_Chemlali_EN.pdf' },
  { id: 'fr-short', fr: 'Français, version courte (1 page)',    en: 'French, short version (1 page)',  file: 'CV_Rayen_Chemlali_FR_1page.pdf' },
  { id: 'en-short', fr: 'Anglais, version courte (1 page)',     en: 'English, short version (1 page)', file: 'CV_Rayen_Chemlali_EN_1page.pdf' },
];

function cvUrlFor(choice) {
  const cvUrls = PORTFOLIO_DATA.meta.cvUrl;
  const short = PORTFOLIO_DATA.meta.cvUrlShort || {};
  const l = choice.slice(0, 2);
  if (choice.endsWith('-short')) return short[l];
  return typeof cvUrls === 'object' ? cvUrls[l] : cvUrls;
}

function previewCv(choice) {
  const url = cvUrlFor(choice);
  const c = CV_CHOICES.find(x => x.id === choice);
  const isEn = lang === 'en';
  // Small or touch screens: mobile browsers rarely render PDFs inside a frame, so open the native viewer.
  if (window.matchMedia('(max-width: 767px), (pointer: coarse)').matches) {
    window.open(url, '_blank', 'noopener');
    return;
  }
  const box = document.getElementById('cv-modal-box');
  if (!box) return;
  box.classList.add('cv-viewing');
  document.getElementById('cv-modal-title').textContent = isEn ? c.en : c.fr;
  document.getElementById('cv-modal-subtitle').textContent = c.file;
  const options = document.getElementById('cv-modal-options');
  options.style.display = 'none';
  const header = document.getElementById('cv-modal-header');
  const closeBtn = document.getElementById('cv-modal-close');
  const actions = document.createElement('div');
  actions.className = 'cv-view-actions';
  actions.innerHTML = `
    <button class="cv-view-btn" id="cv-view-back">&#8592; ${isEn ? 'Back' : 'Retour'}</button>
    <button class="cv-view-btn primary" id="cv-view-dl">&#8595; ${isEn ? 'Download' : 'Télécharger'}</button>`;
  header.insertBefore(actions, closeBtn);
  actions.appendChild(closeBtn);
  const viewer = document.createElement('div');
  viewer.id = 'cv-viewer';
  viewer.innerHTML = `<iframe src="${url}#view=FitH" title="${isEn ? 'CV preview' : 'Aperçu du CV'}"></iframe>`;
  box.appendChild(viewer);
  document.getElementById('cv-view-dl').addEventListener('click', function() { triggerCvDownload(choice); });
  document.getElementById('cv-view-back').addEventListener('click', function() {
    viewer.remove();
    header.appendChild(closeBtn);
    actions.remove();
    options.style.display = '';
    box.classList.remove('cv-viewing');
    document.getElementById('cv-modal-title').textContent = isEn ? 'Download CV' : 'Télécharger le CV';
    document.getElementById('cv-modal-subtitle').textContent = isEn ? 'Preview or download a version' : 'Prévisualisez ou téléchargez une version';
    const again = options.querySelector('[data-preview="' + choice + '"]');
    if (again) again.focus();
  });
  document.getElementById('cv-view-back').focus();
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
