// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('.main-navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNavigation.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar Menu' : 'Abrir Menu');
});

// Pega o tamanho do header e da espaço para não ficar por cima do conteúdo

const header = document.querySelector("header");

const observer = new ResizeObserver(() => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.offsetHeight}px`
  );
});

observer.observe(header);