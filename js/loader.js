const axisLoader = document.querySelector('#axisLoader');
if (axisLoader) {
  document.body.classList.add('is-locked');
  window.addEventListener('load', () => {
    setTimeout(() => {
      axisLoader.classList.add('is-hidden');
      document.body.classList.remove('is-locked');
      setTimeout(() => axisLoader.remove(), 750);
    }, 3200);
  });
}
