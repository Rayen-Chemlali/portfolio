// ═══════════════════════════════════════════════════════
//  RENDER HERO
// ═══════════════════════════════════════════════════════
function renderHero() {
  document.getElementById('hero-bio').textContent = lang === 'en'
      ? "4th-year Software Engineering student at INSAT, passionate about AI, ML and software architecture. Building things across internships, freelance projects, and open to new opportunities."
      : "Étudiant en 4ème année Génie Logiciel à l'INSAT, passionné par l'IA, le ML et l'architecture logicielle. Je construis des choses en stages, en freelance, et suis ouvert à de nouvelles opportunités.";
  document.getElementById('btn-work').textContent = t(UI_LABELS.hero_work);
  document.getElementById('btn-cv').textContent = t(UI_LABELS.hero_cv);

  const cvBtn = document.getElementById('btn-cv');
  cvBtn.href = '#';
  cvBtn.removeAttribute('download');
  cvBtn.onclick = function(e) { e.preventDefault(); openCvModal(); };

  const codeLines = [
    `<span class="json-punc">{</span>`,
    `  <span class="json-key">"name"</span><span class="json-punc">:</span> <span class="json-str">"Rayen Chemlali"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"role"</span><span class="json-punc">:</span> <span class="json-str">"${lang === 'en' ? 'Software Engineer' : 'Ingénieur Logiciel'}"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"status"</span><span class="json-punc">:</span> <span class="json-bool">"open_to_opportunities"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"location"</span><span class="json-punc">:</span> <span class="json-str">"Tunis, TN"</span>`,
    `<span class="json-punc">}</span>`
  ];
  document.getElementById('code-block').innerHTML = codeLines.join('<br>');
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
        background: rgba(6, 10, 16, 0.75);
        backdrop-filter: blur(4px);
        display: flex; align-items: center; justify-content: center;
        animation: cvFadeIn 0.18s ease;
      }
      @keyframes cvFadeIn { from { opacity: 0 } to { opacity: 1 } }
      @keyframes cvSlideUp {
        from { opacity: 0; transform: translateY(16px) }
        to   { opacity: 1; transform: translateY(0) }
      }
      #cv-modal-box {
        background: #0d1220;
        border: 1px solid #1e2e47;
        border-radius: 12px;
        width: min(380px, 92vw);
        overflow: hidden;
        animation: cvSlideUp 0.22s ease;
        box-shadow: 0 24px 60px rgba(0,0,0,0.6);
      }
      #cv-modal-header {
        padding: 22px 22px 18px;
        border-bottom: 1px solid #1a2740;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }
      #cv-modal-title {
        font-family: 'Syne', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: #e2e8f0;
        letter-spacing: 0.2px;
        margin: 0;
      }
      #cv-modal-subtitle {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10.5px;
        color: #64748b;
        margin-top: 4px;
        line-height: 1.4;
      }
      #cv-modal-close {
        background: none;
        border: none;
        color: #4a5568;
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        padding: 2px 4px;
        border-radius: 4px;
        transition: color 0.15s, background 0.15s;
        flex-shrink: 0;
        margin-top: -2px;
      }
      #cv-modal-close:hover {
        color: #e2e8f0;
        background: rgba(255,255,255,0.06);
      }
      #cv-modal-options {
        padding: 14px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .cv-opt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        background: #0a1120;
        border: 1px solid #1a2740;
        border-radius: 8px;
        cursor: pointer;
        transition: border-color 0.18s, background 0.18s;
        text-align: left;
        width: 100%;
        gap: 12px;
      }
      .cv-opt:hover {
        border-color: #00d4ff;
        background: rgba(0, 212, 255, 0.04);
      }
      .cv-opt-left {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }
      .cv-opt-label {
        font-family: 'Syne', sans-serif;
        font-size: 13px;
        font-weight: 600;
        color: #cbd5e1;
        letter-spacing: 0.1px;
      }
      .cv-opt-sub {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 10px;
        color: #475569;
        letter-spacing: 0.3px;
      }
      .cv-opt-arrow {
        color: #334155;
        font-size: 13px;
        flex-shrink: 0;
        transition: color 0.18s, transform 0.18s;
      }
      .cv-opt:hover .cv-opt-arrow {
        color: #00d4ff;
        transform: translateX(3px);
      }
      .cv-opt-divider {
        height: 1px;
        background: #1a2740;
        margin: 2px 0;
      }
      .cv-opt.cv-opt-both .cv-opt-label { color: #00d4ff; }
      .cv-opt.cv-opt-both .cv-opt-sub   { color: #1e4a5e; }
      .cv-opt.cv-opt-both {
        border-color: #133245;
        background: rgba(0, 212, 255, 0.03);
      }
      .cv-opt.cv-opt-both:hover {
        border-color: #00d4ff;
        background: rgba(0, 212, 255, 0.07);
      }
      .cv-opt.cv-opt-both .cv-opt-arrow { color: #1e4a5e; }
      .cv-opt.cv-opt-both:hover .cv-opt-arrow { color: #00d4ff; }
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
        <button class="cv-opt" data-cv="en">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'English Version' : 'Version Anglaise'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_EN.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <button class="cv-opt" data-cv="fr">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'French Version' : 'Version Française'}</span>
            <span class="cv-opt-sub">CV_Rayen_Chemlali_FR.pdf</span>
          </div>
          <span class="cv-opt-arrow">&#8594;</span>
        </button>

        <div class="cv-opt-divider"></div>

        <button class="cv-opt cv-opt-both" data-cv="both">
          <div class="cv-opt-left">
            <span class="cv-opt-label">${isEn ? 'Both Versions' : 'Les deux versions'}</span>
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