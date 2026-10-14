// ═══════════════════════════════════════════════════════
//  RENDER CONTACT
// ═══════════════════════════════════════════════════════
function renderContact() {
  document.getElementById('label-contact').textContent = t(UI_LABELS.contact_lbl);
  document.getElementById('contact-title').textContent = t(UI_LABELS.contact_title);
  const d = PORTFOLIO_DATA.meta;
  document.getElementById('contact-info').innerHTML = `
    <a href="mailto:${d.email}" class="contact-card" aria-label="Send email to ${d.email}">
      <span class="contact-card-icon" aria-hidden="true">✉</span>
      <div><div class="contact-card-label">EMAIL</div><div class="contact-card-val">${d.email}</div></div>
    </a>
    <a href="tel:${d.phone.replace(/\s/g,'')}" class="contact-card" aria-label="Call ${d.phone}">
      <span class="contact-card-icon" aria-hidden="true">☎</span>
      <div><div class="contact-card-label">PHONE</div><div class="contact-card-val">${d.phone}</div></div>
    </a>
    ${d.whatsapp ? `<a href="https://wa.me/${d.whatsapp.replace(/[^0-9]/g,'')}" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="WhatsApp ${d.whatsapp}">
      <span class="contact-card-icon" aria-hidden="true">✆</span>
      <div><div class="contact-card-label">WHATSAPP</div><div class="contact-card-val">${d.whatsapp}</div></div>
    </a>` : ''}
    <a href="${d.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="LinkedIn profile">
      <span class="contact-card-icon" aria-hidden="true">in</span>
      <div><div class="contact-card-label">LINKEDIN</div><div class="contact-card-val">chemlali-rayen</div></div>
    </a>
    <a href="${d.github}" target="_blank" rel="noopener noreferrer" class="contact-card" aria-label="GitHub profile">
      <span class="contact-card-icon" aria-hidden="true">⌥</span>
      <div><div class="contact-card-label">GITHUB</div><div class="contact-card-val">Rayen-Chemlali</div></div>
    </a>
    <div class="contact-card" style="cursor:default">
      <span class="contact-card-icon" aria-hidden="true">◎</span>
      <div><div class="contact-card-label">LOCATION</div><div class="contact-card-val">${d.location}</div></div>
    </div>
  `;
  document.getElementById('contact-form').innerHTML = `
    <div id="form-success" style="display:none;background:rgba(34,197,94,0.1);border:1px solid rgba(34,197,94,0.3);border-radius:10px;padding:20px;text-align:center;">
      <div style="font-size:28px;margin-bottom:8px">✅</div>
      <div style="font-size:14px;font-weight:700;color:#22c55e;margin-bottom:4px">${lang === 'en' ? 'Message sent!' : 'Message envoyé !'}</div>
      <div style="font-size:12px;color:var(--text-muted)">${lang === 'en' ? "I'll get back to you soon." : 'Je vous répondrai bientôt.'}</div>
    </div>
    <div id="form-fields">
      <div class="form-group">
        <label class="form-label" for="f-name">${t(UI_LABELS.form_name)}</label>
        <input id="f-name" class="form-input" type="text" placeholder="${t(UI_LABELS.form_name)}..." autocomplete="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-email">${t(UI_LABELS.form_email)}</label>
        <input id="f-email" class="form-input" type="email" placeholder="you@email.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-subject">${t(UI_LABELS.form_subject)}</label>
        <input id="f-subject" class="form-input" type="text" placeholder="${t(UI_LABELS.form_subject)}...">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-message">${t(UI_LABELS.form_message)}</label>
        <textarea id="f-message" class="form-textarea" placeholder="${t(UI_LABELS.form_message)}..."></textarea>
      </div>
      <button class="btn-primary" id="form-submit-btn" onclick="handleFormSubmit()" style="align-self:flex-start" aria-label="Send contact message">
        ${t(UI_LABELS.form_send)}
      </button>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════
//  FORM SUBMIT
// ═══════════════════════════════════════════════════════
async function handleFormSubmit() {
  const name    = document.getElementById('f-name')?.value?.trim();
  const email   = document.getElementById('f-email')?.value?.trim();
  const subject = document.getElementById('f-subject')?.value?.trim();
  const message = document.getElementById('f-message')?.value?.trim();

  if (!name || !email || !message) {
    alert(lang === 'en' ? 'Please fill in Name, Email and Message.' : 'Veuillez remplir Nom, Email et Message.');
    return;
  }

  const btn = document.getElementById('form-submit-btn');
  btn.textContent = lang === 'en' ? 'Sending...' : 'Envoi...';
  btn.disabled = true;

  const FORMSPREE_ID = 'mkoqbpyn';

  if (FORMSPREE_ID === 'YOUR_FORM_ID') {
    window.location.href = `mailto:${PORTFOLIO_DATA.meta.email}?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\n' + message)}`;
    btn.textContent = t(UI_LABELS.form_send);
    btn.disabled = false;
    return;
  }

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, subject: subject || 'Portfolio Contact', message })
    });
    if (res.ok) {
      document.getElementById('form-fields').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      throw new Error('Failed');
    }
  } catch {
    alert(lang === 'en'
      ? 'Error sending. Please email directly: ' + PORTFOLIO_DATA.meta.email
      : "Erreur d'envoi. Contactez directement : " + PORTFOLIO_DATA.meta.email
    );
    btn.textContent = t(UI_LABELS.form_send);
    btn.disabled = false;
  }
}

// ═══════════════════════════════════════════════════════
//  RENDER FOOTER
// ═══════════════════════════════════════════════════════
function renderFooter() {
  document.getElementById('footer-left').innerHTML = t(UI_LABELS.footer_copy);
  document.getElementById('footer-right').innerHTML = `<span>${t(UI_LABELS.footer_made)}</span>`;
}
