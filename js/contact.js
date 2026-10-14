// ═══════════════════════════════════════════════════════
//  RENDER CONTACT
// ═══════════════════════════════════════════════════════
function renderContact() {
  document.getElementById('label-contact').textContent = '';
  document.getElementById('contact-title').textContent = t(UI_LABELS.contact_title);
  const d = PORTFOLIO_DATA.meta;
  const en = lang === 'en';
  const rows = [
    [en ? 'Email' : 'Email', `<a href="mailto:${d.email}">${d.email}</a>`],
    [en ? 'Phone' : 'Téléphone', `<a href="tel:${d.phone.replace(/\s/g,'')}">${d.phone}</a>`],
    d.whatsapp ? ['WhatsApp', `<a href="https://wa.me/${d.whatsapp.replace(/[^0-9]/g,'')}" target="_blank" rel="noopener noreferrer">${d.whatsapp}</a>`] : null,
    ['LinkedIn', `<a href="${d.linkedin}" target="_blank" rel="noopener noreferrer">chemlali-rayen</a>`],
    ['GitHub', `<a href="${d.github}" target="_blank" rel="noopener noreferrer">Rayen-Chemlali</a>`],
    [en ? 'Based in' : 'Basé à', d.location]
  ].filter(Boolean);
  document.getElementById('contact-info').innerHTML = `
    <dl class="contact-list frame-list">
      ${rows.map(r => `<div class="contact-row"><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join('')}
    </dl>`;
  document.getElementById('contact-form').innerHTML = `
    <h3 class="contact-form-title">${en ? 'Write to me' : 'M\'écrire'}</h3>
    <div id="form-success" class="form-success" style="display:none">
      <strong>${en ? 'Message sent' : 'Message envoyé'}</strong>
      <span>${en ? "I'll get back to you soon." : 'Je vous répondrai rapidement.'}</span>
    </div>
    <div id="form-fields">
      <div class="form-group">
        <label class="form-label" for="f-name">${t(UI_LABELS.form_name)}</label>
        <input id="f-name" class="form-input" type="text" autocomplete="name">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-email">${t(UI_LABELS.form_email)}</label>
        <input id="f-email" class="form-input" type="email" placeholder="you@company.com" autocomplete="email">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-subject">${t(UI_LABELS.form_subject)}</label>
        <input id="f-subject" class="form-input" type="text">
      </div>
      <div class="form-group">
        <label class="form-label" for="f-message">${t(UI_LABELS.form_message)}</label>
        <textarea id="f-message" class="form-textarea"></textarea>
      </div>
      <button class="btn-primary" id="form-submit-btn" onclick="handleFormSubmit()" style="align-self:flex-start">
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
    alert(lang === 'en' ? 'Add your name, email and message before sending.' : 'Ajoutez votre nom, votre email et votre message avant l\'envoi.');
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
