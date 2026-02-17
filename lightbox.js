// Bulletproof lightbox - works everywhere
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');
  const thumbs = document.querySelectorAll('.gallery-thumb');

  // Open lightbox
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      lightboxImg.src = this.dataset.full;
      lightboxImg.alt = this.alt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // No scroll
    });
  });

  // Close lightbox
  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  
  // Close on outside click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeLightbox();
  });

  // Close on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
});
