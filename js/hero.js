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


    <div id="cv-modal-box">
      <div id="cv-modal-header">
        <div>
          <h3 id="cv-modal-title">${isEn ? 'Download CV' : 'Télécharger le CV'}</h3>
          <div id="cv-modal-subtitle">${isEn ? 'Choose a language and a length.' : 'Choisissez la langue et la longueur.'}</div>
        </div>
        <button id="cv-modal-close" aria-label="Close">${isEn ? 'Close' : 'Fermer'}</button>
      </div>

      <div id="cv-modal-options">
        <button class="cv-opt" data-cv="fr">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French, full version (2 pages)' : 'Français, version complète (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR.pdf</span>
          </div>
          <span class="cv-opt-arrow">PDF</span>
        </button>

        <button class="cv-opt" data-cv="en">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English, full version (2 pages)' : 'Anglais, version complète (2 pages)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN.pdf</span>
          </div>
          <span class="cv-opt-arrow">PDF</span>
        </button>

        <button class="cv-opt" data-cv="fr-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French, short version (1 page)' : 'Français, version courte (1 page)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR_1page.pdf</span>
          </div>
          <span class="cv-opt-arrow">PDF</span>
        </button>

        <button class="cv-opt" data-cv="en-short">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English, short version (1 page)' : 'Anglais, version courte (1 page)'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN_1page.pdf</span>
          </div>
          <span class="cv-opt-arrow">PDF</span>
        </button>

        <div class="cv-opt-divider"></div>

        <button class="cv-opt cv-opt-both" data-cv="both">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'Both full versions' : 'Les deux versions complètes'}</span>
            <span class="cv-opt-sub">${isEn ? 'Download EN + FR' : 'Télécharger EN + FR'}</span>
          </div>
          <span class="cv-opt-arrow">PDF</span>
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
