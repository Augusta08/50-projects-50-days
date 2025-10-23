const pages = document.querySelectorAll('.page');

pages.forEach((page) => {
  page.addEventListener('mouseenter', () => page.classList.add('active'));

  page.addEventListener('mouseleave', () => page.classList.remove('active'));
});
