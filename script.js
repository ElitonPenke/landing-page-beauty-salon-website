// Menu do celular (abre e fecha)
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');
const label = toggle.querySelector('span');
const icon = toggle.querySelector('use');

function setMenu(open) {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  label.textContent = open ? 'Fechar' : 'Menu';
  icon.setAttribute('href', open ? '#i-x' : '#i-menu');
}

toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));

// Fecha o menu ao clicar em um link (a rolagem suave é feita pelo CSS)
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

// Fecha o menu com a tecla Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    setMenu(false);
    toggle.focus();
  }
});

// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
