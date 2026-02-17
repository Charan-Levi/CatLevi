document.addEventListener('DOMContentLoaded', function() {
  // Mobile hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Close on nav link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }

  // ESC key closes menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      body.classList.remove('menu-open');
    }
  });
});
