// ═══════════════════════════════════════════════════════
//  APP STATE & HELPERS
// ═══════════════════════════════════════════════════════
let lang = 'en';
let currentSection = 'hero';
let typewriterTimeout = null;
let typewriterIndex = 0;
let typewriterCharIndex = 0;
let typewriterDeleting = false;

const t = (field) => {
  if (!field) return '';
  if (typeof field === 'object' && (field.en !== undefined || field.fr !== undefined)) return field[lang] || field.en || '';
  return field;
};

const NAV_ITEMS = [
  { id: 'hero',           icon: '⌂', label: { en: 'Home',           fr: 'Accueil' } },
  { id: 'about',          icon: '◉', label: { en: 'About',          fr: 'À Propos' } },
  { id: 'skills',         icon: '✦', label: { en: 'Skills',         fr: 'Compétences' } },
  { id: 'experience',     icon: '◈', label: { en: 'Experience',     fr: 'Expérience' } },
  { id: 'projects',       icon: '⬡', label: { en: 'Projects',       fr: 'Projets' } },
  { id: 'education',      icon: '◎', label: { en: 'Education',      fr: 'Formation' } },
  { id: 'achievements',   icon: '◆', label: { en: 'Achievements',   fr: 'Récompenses' } },
  { id: 'certifications', icon: '◇', label: { en: 'Certifications', fr: 'Certifications' } },
  { id: 'contact',        icon: '◉', label: { en: 'Contact',        fr: 'Contact' } }
];

const UI_LABELS = {
  cat_internship: { en: 'Internship Projects', fr: 'Projets de Stage' },
  cat_freelance:  { en: 'Freelance Projects',  fr: 'Projets Freelance' },
  cat_academic:   { en: 'Academic Projects',   fr: 'Projets Académiques' },
  hero_work:    { en: 'View My Work',        fr: 'Voir Mon Travail' },
  hero_cv:      { en: 'Download CV',         fr: 'Télécharger CV' },
  stat_year:    { en: 'Year of Study',       fr: 'Année d\'études' },
  stat_bac:     { en: 'Baccalaureate Score', fr: 'Note au Baccalauréat' },
  stat_rank:    { en: 'Best Engineering Rank',fr: 'Meilleur Rang Ingénieur' },
  about_lbl:    { en: '// 02_about',         fr: '// 02_à_propos' },
  about_title:  { en: 'About Me',            fr: 'À Propos' },
  skills_lbl:   { en: '// 03_skills',        fr: '// 03_compétences' },
  skills_title: { en: 'My Stack',            fr: 'Mon Stack' },
  exp_lbl:      { en: '// 04_experience',    fr: '// 04_expérience' },
  exp_title:    { en: 'Experience',          fr: 'Expérience' },
  proj_lbl:     { en: '// 05_projects',      fr: '// 05_projets' },
  proj_title:   { en: 'My Work',             fr: 'Mes Projets' },
  edu_lbl:      { en: '// 06_education',     fr: '// 06_formation' },
  edu_title:    { en: 'Education',           fr: 'Formation' },
  ach_lbl:      { en: '// 07_achievements',  fr: '// 07_récompenses' },
  ach_title:    { en: 'Achievements',         fr: 'Récompenses' },
  cert_lbl:     { en: '// 08_certifications',fr: '// 08_certifications' },
  cert_title:   { en: 'Certifications',       fr: 'Certifications' },
  contact_lbl:  { en: '// 09_contact',       fr: '// 09_contact' },
  contact_title:{ en: 'Get In Touch',        fr: 'Me Contacter' },
  view_details: { en: '→ View Details',      fr: '→ Voir Détails' },
  view_post:    { en: '→ View Post',         fr: '→ Voir Post' },
  view_cert:    { en: '→ View Certificate',  fr: '→ Voir Certificat' },
  tab_overview: { en: 'Overview',            fr: 'Vue d\'ensemble' },
  tab_features: { en: 'Features',            fr: 'Fonctionnalités' },
  tab_challenges:{ en: 'Challenges',         fr: 'Défis' },
  tab_learnings:{ en: 'Key Learnings',       fr: 'Apprentissages' },
  my_role:      { en: '// my_role',          fr: '// mon_rôle' },
  form_name:    { en: 'Name',                fr: 'Nom' },
  form_email:   { en: 'Email',               fr: 'Email' },
  form_subject: { en: 'Subject',             fr: 'Sujet' },
  form_message: { en: 'Message',             fr: 'Message' },
  form_send:    { en: 'Send Message',        fr: 'Envoyer' },
  footer_copy:  { en: '© 2026 Rayen Chemlali', fr: '© 2026 Rayen Chemlali' },
  footer_made:  { en: '', fr: '' }
};

// ═══════════════════════════════════════════════════════
//  LANGUAGE SWITCH
// ═══════════════════════════════════════════════════════
function setLang(l) {
  lang = l;
  document.getElementById('html-root').lang = l;
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  document.getElementById('btn-fr').classList.toggle('active', l === 'fr');
  updateSEOMeta();
  renderAll();
  navigate(currentSection);
}

function updateSEOMeta() {
  const d = PORTFOLIO_DATA;
  document.getElementById('page-title').textContent = d.meta.name + ' | ' + t(d.meta.title) + ' – Tunis, Tunisia';
  document.getElementById('meta-desc').setAttribute('content', t(d.meta.description));
  document.getElementById('og-title').setAttribute('content', d.meta.name + ' | ' + t(d.meta.title));
  document.getElementById('og-desc').setAttribute('content', t(d.meta.description));
  document.getElementById('og-locale').setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');
  document.getElementById('tw-title').setAttribute('content', d.meta.name + ' | ' + t(d.meta.title));
  document.getElementById('tw-desc').setAttribute('content', t(d.meta.description));
}

// ═══════════════════════════════════════════════════════
//  RENDER ALL
// ═══════════════════════════════════════════════════════
function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
  renderAchievements();
  renderCertifications();
  renderContact();
  renderFooter();
  startTypewriter();
}

// ═══════════════════════════════════════════════════════
//  PARTICLES — warm amber dots to match new palette
// ═══════════════════════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles;
  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function makeParticles() {
    particles = Array.from({length: 50}, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.3 + 0.08
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      // Warm amber color matching --accent: #C17B2A
      ctx.fillStyle = `rgba(193,123,42,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); makeParticles(); draw();
  window.addEventListener('resize', () => { resize(); makeParticles(); });
}

// ═══════════════════════════════════════════════════════
//  SCHEMA.ORG JSON-LD
// ═══════════════════════════════════════════════════════
function injectSchema() {
  const d = PORTFOLIO_DATA;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": d.meta.name,
    "jobTitle": "Software Engineer & AI Developer",
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "INP Toulouse – ENSEEIHT" },
      { "@type": "CollegeOrUniversity", "name": "INSAT – Institut National des Sciences Appliquées et de Technologie" }
    ],
    "knowsAbout": ["Software Engineering","Machine Learning","HPC","Big Data","Competitive Programming","Full-Stack Development","Angular","NestJS","Python","Rust","Docker","Kubernetes"],
    "url": "https://rayen-chemlali.vercel.app",
    "email": d.meta.email,
    "telephone": d.meta.phone,
    "address": { "@type": "PostalAddress", "addressLocality": "Toulouse", "addressCountry": "FR" },
    "sameAs": [d.meta.linkedin, d.meta.github],
    "hasCredential": d.certifications.map(c => ({
      "@type": "EducationalOccupationalCredential",
      "name": c.name,
      "credentialCategory": "Certificate",
      "recognizedBy": { "@type": "Organization", "name": c.issuer }
    }))
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  updateSEOMeta();
  injectSchema();
  renderAll();
  navigate('hero');
  initParticles();

  const photoInput = document.getElementById('photo-upload-input');
  if (photoInput) {
    photoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = document.getElementById('profile-photo');
        if (img) img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
});