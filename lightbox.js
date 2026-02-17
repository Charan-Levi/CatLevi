// Improved Lightbox - simple & safe
document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close-lightbox');

  // 👉 STOP script if gallery elements are not on page
  if (!modal || !lightboxImg || !closeBtn) return;

  // Open lightbox (single listener - cleaner)
  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('.gallery-thumb');
    if (!thumb) return;

    lightboxImg.style.opacity = "0";     // fade start
    lightboxImg.src = thumb.dataset.full;
    lightboxImg.alt = thumb.alt;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // When image loads → fade in
  lightboxImg.onload = () => {
    lightboxImg.style.opacity = "1";
  };

  // Close function
  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close button
  closeBtn.addEventListener('click', closeLightbox);

  // Click outside image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  // ESC key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });

});
