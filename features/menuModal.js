function menuModal() {
  const menuCards = document.querySelectorAll('.card');
  const modal = document.querySelector('.modal');

  menuCards.forEach(card => {
    card.addEventListener('click', function() {
      modal.classList.add('opened');
    })
  })
}

export default menuModal;