function menuModal() {
  const menuSection = document.querySelector('.section-menu__menu-cards');
  const modal = document.querySelector('.modal');

  menuSection?.addEventListener('click', function(event) {
    const card = event.target.closest('.card');

    if (!card) {
      return;
    }

    modal?.classList.add('opened');
  })
}

export default menuModal;