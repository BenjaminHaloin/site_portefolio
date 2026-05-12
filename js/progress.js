document.querySelectorAll('.progress-bar span').forEach((bar) => {
  bar.style.transition = 'width .8s cubic-bezier(.2,.8,.2,1), transform .8s cubic-bezier(.2,.8,.2,1)';
});
