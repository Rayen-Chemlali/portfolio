// ═══════════════════════════════════════════════════════
//  RENDER ACHIEVEMENTS, no emojis
// ═══════════════════════════════════════════════════════
function renderAchievements() {
    document.getElementById('label-achievements').textContent = t(UI_LABELS.ach_lbl);
    document.getElementById('ach-title').textContent = t(UI_LABELS.ach_title);
    document.getElementById('achievements-grid').innerHTML = PORTFOLIO_DATA.achievements.map(a => `
    <article class="achievement-card"
             style="--a-color:var(--accent);--a-color-dim:color-mix(in srgb, var(--accent) 10%, transparent)">
      <div class="achievement-rank-badge" style="color:var(--accent);border-color:var(--accent);background:color-mix(in srgb, var(--accent) 8%, transparent)">
        <span class="achievement-rank-num">#${a.place}</span>
        <span class="achievement-rank-label">${a.medal}</span>
      </div>
      <h3 class="achievement-title">${t(a.title)}</h3>
      <p class="achievement-subtitle">${t(a.subtitle)}</p>
      <button onclick="window.open('${a.url}','_blank','noopener,noreferrer')"
         class="achievement-link" aria-label="View LinkedIn post about ${t(a.title)}">
        ${t(a.linkLabel || UI_LABELS.view_post)}
      </button>
    </article>
  `).join('');
}