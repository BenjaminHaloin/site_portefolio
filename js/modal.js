const modal = document.querySelector('#imageModal');
const modalImg = document.querySelector('#imageModalImg');
const modalCaption = document.querySelector('#imageModalCaption');
function closeImageModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  if (modalImg) modalImg.src = '';
  if (modalCaption) modalCaption.textContent = '';
}
if (modal && modalImg && modalCaption) {
  document.querySelectorAll('.screenshot-open').forEach((button) => {
    button.addEventListener('click', () => {
      modalImg.src = button.dataset.full;
      modalCaption.textContent = button.dataset.title;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-locked');
    });
  });
  document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeImageModal));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeImageModal(); });
}
