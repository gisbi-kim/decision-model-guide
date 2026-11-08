const buttons = document.querySelectorAll('.language button');
function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-ko][data-en]').forEach(el => { el.innerHTML = el.dataset[lang]; });
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.id === lang)));
  try { localStorage.setItem('decision-guide-language', lang); } catch (_) {}
}
buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.id)));
try { const saved = localStorage.getItem('decision-guide-language'); if (saved === 'en') setLanguage(saved); } catch (_) {}
