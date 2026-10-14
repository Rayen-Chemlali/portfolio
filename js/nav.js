// Single page: nav links scroll to sections, active link follows the scroll
function setActiveNav(id) {
  currentSection = id;
  document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === id);
  });
}

function navigate(id) {
  const sec = document.getElementById('section-' + id);
  if (!sec) return;
  sec.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  setActiveNav(id);
  history.replaceState(null, '', '#' + id);
}

function initScrollSpy() {
  const root = document.getElementById('main-panel');
  const sections = [...document.querySelectorAll('.section')];
  const onScroll = () => {
    const top = root.getBoundingClientRect().top + 120;
    let current = sections[0];
    for (const s of sections) { if (s.getBoundingClientRect().top <= top) current = s; }
    if (root.scrollTop + root.clientHeight >= root.scrollHeight - 4) current = sections[sections.length - 1];
    const id = current.id.replace('section-', '');
    if (id !== currentSection) setActiveNav(id);
  };
  root.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function renderNav() {
  const nav = document.getElementById('sidebar-nav');
  const mob = document.getElementById('mobile-nav-inner');
  nav.innerHTML = NAV_ITEMS.map(item => `
    <a href="#${item.id}" class="nav-item${currentSection === item.id ? ' active' : ''}"
       data-section="${item.id}" onclick="navigate('${item.id}');return false;">
      ${t(item.label)}
    </a>
  `).join('');
  mob.innerHTML = NAV_ITEMS.map(item => `
    <a href="#${item.id}" class="mobile-nav-item${currentSection === item.id ? ' active' : ''}"
       data-section="${item.id}" onclick="navigate('${item.id}');return false;">
      ${t(item.label)}
    </a>
  `).join('');
}
