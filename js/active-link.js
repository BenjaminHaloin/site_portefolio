const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach((link) => {
  const path = new URL(link.href).pathname;
  if (currentPath.includes('/pages/') && path.endsWith('/projets.html')) link.classList.add('active');
  else if (currentPath.endsWith(path.split('/').pop())) link.classList.add('active');
  else if ((currentPath.endsWith('/') || currentPath.endsWith('/index.html')) && path.endsWith('/index.html')) link.classList.add('active');
});
