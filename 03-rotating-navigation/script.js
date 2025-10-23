const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');
const container = document.querySelector('.container');

openButton.addEventListener('click', function () {
  container.classList.add('show-nav');
});

closeButton.addEventListener('click', function () {
  container.classList.remove('show-nav');
});
