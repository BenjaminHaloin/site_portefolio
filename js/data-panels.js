document.querySelectorAll('[data-current-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const toggleBackToTop = () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 520);
  };
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

const projectFilterButtons = document.querySelectorAll('.filter-bar [data-filter]');
const projectCards = document.querySelectorAll('.all-projects .project-card');
if (projectFilterButtons.length && projectCards.length) {
  projectFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      projectFilterButtons.forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      projectCards.forEach((card) => {
        const categories = card.dataset.category || '';
        const visible = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !visible);
      });
    });
  });
}
