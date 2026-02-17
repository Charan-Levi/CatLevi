// Safe Navigation Script
document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.header');

  // 👉 STOP if menu doesn't exist on page
  if (!hamburger || !navMenu) return;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });

  // Navbar background change on scroll (smooth effect)
  window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 50) {
      header.style.background = "rgba(10,10,10,0.98)";
    } else {
      header.style.background = "rgba(10,10,10,0.85)";
    }
  });

});
