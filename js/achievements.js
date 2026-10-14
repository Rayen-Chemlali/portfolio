// ═══════════════════════════════════════════════════════
//  RENDER ACHIEVEMENTS — no emojis
// ═══════════════════════════════════════════════════════
function renderAchievements() {
    document.getElementById('label-achievements').textContent = t(UI_LABELS.ach_lbl);
    document.getElementById('ach-title').textContent = t(UI_LABELS.ach_title);
    document.getElementById('achievements-grid').innerHTML = PORTFOLIO_DATA.achievements.map(a => `
    <article class="achievement-card"
             style="--a-color:${a.color};--a-color-dim:color-mix(in srgb, ${a.color} 10%, transparent)">
      <div class="achievement-rank-badge" style="color:${a.color};border-color:${a.color};background:color-mix(in srgb, ${a.color} 8%, transparent)">
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