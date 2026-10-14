// ═══════════════════════════════════════════════════════
//  RENDER PROJECTS
// ═══════════════════════════════════════════════════════
function renderProjects() {
  document.getElementById('label-projects').textContent = '';
  document.getElementById('proj-title').textContent = t(UI_LABELS.proj_title);

  const CATS = [
    { key: 'internship', label: UI_LABELS.cat_internship },
    { key: 'freelance',  label: UI_LABELS.cat_freelance },
    { key: 'academic',   label: UI_LABELS.cat_academic },
    { key: 'hackathon',  label: UI_LABELS.cat_hackathon || { en: 'Hackathons', fr: 'Hackathons' } }
  ];

  const allProjects = [...PORTFOLIO_DATA.projects].sort((a, b) => {
    const getYear = d => parseInt((d || '').match(/\d{4}/)?.[0] || 0);
    return getYear(b.date) - getYear(a.date);
  });

  document.getElementById('projects-container').innerHTML = CATS.map(cat => {
    const list = allProjects.filter(p => p.category === cat.key);
    if (!list.length) return '';
    return `
      <div class="proj-category">
        <h3 class="sub-title">${t(cat.label)}</h3>
        ${list.map(p => {
          const idx = PORTFOLIO_DATA.projects.indexOf(p);
          return `
          <article class="proj-row" onclick="openModal(${idx})" role="button" tabindex="0"
                   aria-label="${p.name}, ${t(UI_LABELS.view_details)}"
                   onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openModal(${idx})}">
            <div>
              <h4 class="proj-name">${p.name}</h4>
              <p class="proj-tagline">${t(p.tagline)}</p>
              <div class="proj-tech">${p.tech.join(', ')}</div>
            </div>
            ${p.date ? `<div class="proj-date">${p.date}</div>` : ''}
          </article>`;
        }).join('')}
      </div>`;
  }).join('');
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

  document.getElementById('modal-badges-el').textContent = [p.date || p.duration, p.team].filter(Boolean).join(', ');
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
      content = `<p class="modal-overview">${t(p.tabs.overview)}</p>` + (p.myRole ? `<p class="modal-role"><b>${t(UI_LABELS.my_role)} :</b> ${t(p.myRole)}</p>`.replace(' :</b>', lang === 'fr' ? ' :</b>' : ':</b>') : '');
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
  }).join('');

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