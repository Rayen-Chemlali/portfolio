// ═══════════════════════════════════════════════════════
//  NAVIGATE
// ═══════════════════════════════════════════════════════
function navigate(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById('section-' + id);
  if (sec) sec.classList.add('active');
  currentSection = id;
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === id);
  });
  document.querySelectorAll('.mobile-nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.section === id);
  });
  if (id === 'about') animateLangBars();
}

// ═══════════════════════════════════════════════════════
//  RENDER NAV
// ═══════════════════════════════════════════════════════
function renderNav() {
  const nav = document.getElementById('sidebar-nav');
  const mob = document.getElementById('mobile-nav-inner');
  nav.innerHTML = NAV_ITEMS.map(item => `
    <a href="#${item.id}" class="nav-item${currentSection === item.id ? ' active' : ''}"
       data-section="${item.id}" onclick="navigate('${item.id}');return false;"
       aria-label="Navigate to ${t(item.label)} section">
      <span class="nav-icon" aria-hidden="true">${item.icon}</span>
      ${t(item.label)}
    </a>
  `).join('');
  mob.innerHTML = NAV_ITEMS.map(item => `
    <div class="mobile-nav-item${currentSection === item.id ? ' active' : ''}"
         data-section="${item.id}" onclick="navigate('${item.id}')"
         role="button" tabindex="0" aria-label="${t(item.label)}">
      <span class="nav-icon" aria-hidden="true">${item.icon}</span>
      ${t(item.label)}
    </div>
  `).join('');
}
