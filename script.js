// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent body close
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', function() {
  navMenu.classList.remove('active');
  hamburger.classList.remove('active');
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
