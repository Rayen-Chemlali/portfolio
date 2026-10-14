// ═══════════════════════════════════════════════════════
//  RENDER CERTIFICATIONS, no emojis
// ═══════════════════════════════════════════════════════
function renderCertifications() {
    document.getElementById('label-certifications').textContent = t(UI_LABELS.cert_lbl);
    document.getElementById('cert-title').textContent = t(UI_LABELS.cert_title);
    document.getElementById('certs-grid').innerHTML = PORTFOLIO_DATA.certifications.map(c => {
        const projIdx = c.linkedProjectId
            ? PORTFOLIO_DATA.projects.findIndex(p => p.id === c.linkedProjectId)
            : -1;
        const viewProjectBtn = projIdx !== -1 ? `
      <button class="cert-project-btn" onclick="openModal(${projIdx})" aria-label="View ${c.name} project">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        View Project
      </button>` : '';
        return `
      <article class="cert-card">
        <div class="cert-icon-badge">${c.icon}</div>
        <h3 class="cert-name">${c.name}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        <a href="${c.url}" target="_blank" rel="noopener noreferrer"
           class="cert-link" aria-label="View ${c.name} certificate">
          ${t(UI_LABELS.view_cert)}
        </a>
        ${viewProjectBtn}
      </article>`;
    }).join('');
}