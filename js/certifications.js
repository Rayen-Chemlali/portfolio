// Render certifications
function renderCertifications() {
  document.getElementById('label-certifications').textContent = '';
  document.getElementById('cert-title').textContent = t(UI_LABELS.cert_title);
  document.getElementById('certs-grid').innerHTML = PORTFOLIO_DATA.certifications.map(c => {
    const projIdx = c.linkedProjectId
      ? PORTFOLIO_DATA.projects.findIndex(p => p.id === c.linkedProjectId)
      : -1;
    const projBtn = projIdx !== -1
      ? `<button class="text-btn" onclick="openModal(${projIdx})">${lang === 'en' ? 'Related project' : 'Projet associé'}</button>`
      : '';
    return `
      <article class="cert-row">
        <h3 class="cert-name">${c.name}</h3>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-actions">
          <a href="${c.url}" target="_blank" rel="noopener noreferrer">${t(UI_LABELS.view_cert)}</a>
          ${projBtn}
        </div>
      </article>`;
  }).join('');
}
