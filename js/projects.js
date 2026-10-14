// ═══════════════════════════════════════════════════════
//  RENDER PROJECTS
// ═══════════════════════════════════════════════════════
function renderProjects() {
  document.getElementById('label-projects').textContent = t(UI_LABELS.proj_lbl);
  document.getElementById('proj-title').textContent = t(UI_LABELS.proj_title);

  const CAT_ICONS = {
    internship: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    freelance:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    academic:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    hackathon:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  };
  const CATS = [
    { key: 'internship', icon: CAT_ICONS.internship, label: UI_LABELS.cat_internship },
    { key: 'freelance',  icon: CAT_ICONS.freelance,  label: UI_LABELS.cat_freelance },
    { key: 'academic',   icon: CAT_ICONS.academic,   label: UI_LABELS.cat_academic },
    { key: 'hackathon',  icon: CAT_ICONS.hackathon,  label: UI_LABELS.cat_hackathon || { en: 'Hackathons', fr: 'Hackathons' } }
  ];

  const allProjects = [...PORTFOLIO_DATA.projects].sort((a, b) => {
    const getYear = d => parseInt((d || '').match(/\d{4}/)?.[0] || 0);
    return getYear(b.date) - getYear(a.date);
  });

  const card = p => {
    const idx = PORTFOLIO_DATA.projects.indexOf(p);
    return `
      <article class="project-card" style="--project-color:var(--accent)"
               onclick="openModal(${idx})"
               role="button" tabindex="0"
               aria-label="View details for ${p.name} project"
               onkeydown="if(event.key==='Enter')openModal(${idx})">
        <div class="project-card-top">
          <span class="project-emoji" role="img" aria-label="${p.name}">${p.emoji}</span>
        </div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-tagline">${t(p.tagline)}</p>
        <div class="project-tech-row">${p.tech.slice(0,3).map(tech => `<span class="tech-chip">${tech}</span>`).join('')}${p.tech.length > 3 ? `<span class="tech-chip">+${p.tech.length - 3}</span>` : ''}</div>
        ${p.date ? `<div class="project-date">${p.date}</div>` : ''}
        <div class="project-view-btn" aria-hidden="true">${t(UI_LABELS.view_details)}</div>
      </article>`;
  };

  const filters = PORTFOLIO_DATA.projectFilters || [];
  const byId = id => PORTFOLIO_DATA.projects.find(p => p.id === id);
  const active = filters.find(f => f.id === currentProjectFilter);

  const bar = `
    <div class="proj-filters" role="group" aria-label="${lang === 'en' ? 'Filter projects by field' : 'Filtrer les projets par domaine'}">
      <button class="proj-filter${active ? '' : ' active'}" aria-pressed="${!active}" onclick="setProjectFilter('all')">
        ${lang === 'en' ? 'All' : 'Tous'} <span class="proj-filter-count">${PORTFOLIO_DATA.projects.length}</span>
      </button>
      ${filters.map(f => `
        <button class="proj-filter${active && active.id === f.id ? ' active' : ''}" aria-pressed="${!!(active && active.id === f.id)}" onclick="setProjectFilter('${f.id}')">
          ${t(f.label)} <span class="proj-filter-count">${f.projects.filter(byId).length}</span>
        </button>`).join('')}
    </div>`;

  let body;
  if (active) {
    body = `<div class="projects-grid proj-filtered">${active.projects.map(byId).filter(Boolean).map(card).join('')}</div>`;
  } else {
    body = CATS.map(cat => {
      const catProjects = allProjects.filter(p => p.category === cat.key);
      if (!catProjects.length) return '';
      return `
      <div class="proj-category">
        <div class="proj-category-header">
          <span class="proj-category-icon" aria-hidden="true">${cat.icon}</span>
          <span class="proj-category-label">${t(cat.label)}</span>
          <span class="proj-category-count">${catProjects.length}</span>
        </div>
        <div class="projects-grid">${catProjects.map(card).join('')}</div>
      </div>`;
    }).join('');
  }
  document.getElementById('projects-container').innerHTML = bar + body;
}

let currentProjectFilter = 'all';

function setProjectFilter(id) {
  currentProjectFilter = id;
  renderProjects();
  history.replaceState(null, '', id === 'all' ? '#projects' : '#projects-' + id);
  const first = document.querySelector('.proj-filter.active');
  if (first) first.focus({ preventScroll: true });
  // keep the filter row in view when the list gets shorter
  const bar = document.querySelector('.proj-filters');
  const header = document.getElementById('topbar');
  if (bar) {
    const offset = (header ? header.offsetHeight : 0) + 16;
    const top = bar.getBoundingClientRect().top;
    if (top < offset || top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + top - offset, behavior: 'smooth' });
  }
}

// ═══════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════
function openModal(idx) {
  const p = PORTFOLIO_DATA.projects[idx];
  document.getElementById('modal-watermark-el').textContent = p.watermark;
  document.getElementById('modal-emoji-el').textContent = p.emoji;
  document.getElementById('modal-emoji-el').setAttribute('aria-label', p.name + ' icon');
  document.getElementById('modal-title-el').textContent = p.name;
  document.getElementById('modal-badges-el').innerHTML = `
    <span class="modal-badge">${p.date || p.duration}</span>
    <span class="modal-badge">${p.team}</span>
  `;
  document.getElementById('modal-tech-el').innerHTML = p.tech.map(tech => `<span class="tech-chip">${tech}</span>`).join('');

  const tabs = [
    { key: 'overview',    label: t(UI_LABELS.tab_overview) },
    { key: 'features',   label: t(UI_LABELS.tab_features) },
    { key: 'challenges', label: t(UI_LABELS.tab_challenges) },
    { key: 'learnings',  label: t(UI_LABELS.tab_learnings) }
  ];

  document.getElementById('modal-tabs-el').innerHTML = tabs.map((tab, i) => `
    <div class="modal-tab${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}"
         onclick="switchModalTab('${tab.key}', this)" data-tab="${tab.key}">${tab.label}</div>
  `).join('');

  document.getElementById('modal-tab-contents').innerHTML = tabs.map((tab, i) => {
    let content = '';
    if (tab.key === 'overview') {
      content = `<p class="modal-overview">${t(p.tabs.overview)}</p>`;
    } else if (tab.key === 'features') {
      const feats = t(p.tabs.features);
      content = `<ul class="modal-features-list">${(Array.isArray(feats) ? feats : []).map(f => `<li>${f}</li>`).join('')}</ul>`;
    } else if (tab.key === 'challenges') {
      content = `<p class="modal-text">${t(p.tabs.challenges)}</p>`;
    } else if (tab.key === 'learnings') {
      content = `<p class="modal-text">${t(p.tabs.learnings)}</p>`;
    }
    return `<div class="modal-tab-content${i === 0 ? ' active' : ''}" data-content="${tab.key}">${content}</div>`;
  }).join('');

  const githubIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>';
  const demoIcon  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  const imageIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>';
  const linkIcon  = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

  document.getElementById('modal-links-el').innerHTML = p.links.map(link => {
    let iconSvg = link.label.toLowerCase().includes('github') || link.label.toLowerCase().includes('code')
        ? githubIcon
        : link.label.toLowerCase().includes('demo')
            ? demoIcon
            : linkIcon;
    return `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="modal-link-btn"
         aria-label="${link.label} for ${p.name}">
        ${iconSvg}
        ${link.label}
      </a>
    `;
  }).join('') + (p.images || []).map((im, i) => `
      <button type="button" class="modal-link-btn" onclick="openLightbox(${idx}, ${i})">
        ${imageIcon}
        ${t(im.label)}
      </button>`).join('');

  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('open');
  overlay.focus();
  document.body.style.overflow = 'hidden';
}

function switchModalTab(key, el) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.modal-tab-content').forEach(c => {
    c.classList.toggle('active', c.dataset.content === key);
  });
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});

// Image viewer on the same page (opened from a project's buttons)
function openLightbox(projIdx, imgIdx) {
  const im = PORTFOLIO_DATA.projects[projIdx].images[imgIdx];
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = `
      <button type="button" class="lightbox-close" aria-label="Close">×</button>
      <figure class="lightbox-figure"><img alt=""><figcaption></figcaption></figure>`;
    document.body.appendChild(lb);
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) closeLightbox(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lb.classList.contains('open')) { e.stopImmediatePropagation(); closeLightbox(); }
    }, true);
  }
  lb.querySelector('img').src = im.src;
  lb.querySelector('img').alt = t(im.caption);
  lb.querySelector('figcaption').textContent = t(im.caption);
  lb.querySelector('.lightbox-close').setAttribute('aria-label', lang === 'en' ? 'Close' : 'Fermer');
  lb.classList.add('open');
  lb.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
}
