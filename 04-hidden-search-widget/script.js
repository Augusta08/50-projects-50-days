let searchButton = document.getElementById('search-button');
let search = document.querySelector('.search');
let searchBar = document.querySelector('.search-bar');

searchButton.addEventListener('click', () => {
  search.classList.toggle('active');
  searchBar.focus();
});
