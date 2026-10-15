const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('.main-navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNavigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar Menu' : 'Abrir Menu');
});
