// Navbar: fundo ao rolar
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger menu
const navToggle = document.querySelector('.nav-toggle');

navToggle?.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('#navbar ul a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('nav-open');
  });
});

// Animação de entrada
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.skill-card, .projeto-card, .sobre-grid, .contato-inner, .exp-card, .tools-grid').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

document.querySelectorAll('.projeto-detalhe-header, .projeto-fotos-grid').forEach(el => {
  observer.observe(el);
});
