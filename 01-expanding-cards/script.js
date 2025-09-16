let cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', function () {
    removeActiveClass();
    card.classList.add('active');
    selected = card;
  });
}

function removeActiveClass() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
}
