// ═══════════════════════════════════════════════════════
//  RENDER HERO
// ═══════════════════════════════════════════════════════
function renderHero() {
  document.getElementById('hero-bio').textContent = lang === 'en'
      ? "4th-year Software Engineering student at INSAT, passionate about AI, ML and software architecture. Building things across internships, freelance projects, and open to new opportunities."
      : "Étudiant en 4ème année Génie Logiciel à l'INSAT, passionné par l'IA, le ML et l'architecture logicielle. Je construis des choses en stages, en freelance, et suis ouvert à de nouvelles opportunités.";
  document.getElementById('btn-work').textContent = t(UI_LABELS.hero_work);
  document.getElementById('btn-cv').textContent = t(UI_LABELS.hero_cv);
  const cvUrl = typeof PORTFOLIO_DATA.meta.cvUrl === 'object'
      ? PORTFOLIO_DATA.meta.cvUrl[lang]
      : PORTFOLIO_DATA.meta.cvUrl;
  document.getElementById('btn-cv').href = cvUrl;
  document.getElementById('btn-cv').setAttribute('download', cvUrl);
  const codeLines = [
    `<span class="json-punc">{</span>`,
    `  <span class="json-key">"name"</span><span class="json-punc">:</span> <span class="json-str">"Rayen Chemlali"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"role"</span><span class="json-punc">:</span> <span class="json-str">"${lang === 'en' ? 'Software Engineer' : 'Ingénieur Logiciel'}"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"status"</span><span class="json-punc">:</span> <span class="json-bool">"open_to_opportunities"</span><span class="json-punc">,</span>`,
    `  <span class="json-key">"location"</span><span class="json-punc">:</span> <span class="json-str">"Tunis, TN 🇹🇳"</span>`,
    `<span class="json-punc">}</span>`
  ];
  document.getElementById('code-block').innerHTML = codeLines.join('<br>');
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