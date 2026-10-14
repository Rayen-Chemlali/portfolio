// Single page with a top navigation bar; the window scrolls normally
function setActiveNav(id) {
  currentSection = id;
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === id);
    if (n.dataset.section === id) n.setAttribute('aria-current', 'true'); else n.removeAttribute('aria-current');
  });
  const active = document.querySelector('#top-nav .nav-item.active');
  const nav = document.getElementById('top-nav');
  if (active && nav && nav.scrollWidth > nav.clientWidth) {
    nav.scrollTo({ left: active.offsetLeft - 16, behavior: 'smooth' });
  }
}

function navigate(id) {
  const sec = document.getElementById('section-' + id);
  if (!sec) return;
  if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
  else sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setActiveNav(id);
  history.replaceState(null, '', id === 'hero' ? location.pathname : '#' + id);
}

function initScrollSpy() {
  const sections = [...document.querySelectorAll('.section')];
  let ticking = false;
  const update = () => {
    ticking = false;
    const line = 120;
    let current = sections[0];
    for (const s of sections) { if (s.getBoundingClientRect().top <= line) current = s; }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = sections[sections.length - 1];
    const id = current.id.replace('section-', '');
    if (id !== currentSection) setActiveNav(id);
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

function renderNav() {
  const nav = document.getElementById('top-nav');
  nav.innerHTML = NAV_ITEMS.filter(i => i.id !== 'hero').map(item => `
    <a href="#${item.id}" class="nav-item${currentSection === item.id ? ' active' : ''}"
       data-section="${item.id}" onclick="navigate('${item.id}');return false;">${t(item.label)}</a>
  `).join('');
}
