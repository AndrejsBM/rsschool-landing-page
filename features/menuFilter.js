function menuFilter() {
  const filter = document.querySelector('.section-menu__filter');
  const menuSection = document.querySelector('.section-menu__menu-cards');

  function filterCards(category) {
    const menuCards = menuSection?.querySelectorAll('.section-menu__menu-card');

    menuCards?.forEach(card => card.style.display = card.dataset.category === category ? 'flex' : 'none');
  }

  filterCards(filter?.querySelector('.current')?.dataset.category);

  filter?.addEventListener('click', function(event) { 
    const filterBtn = event.target.closest('.section-menu__filter-item');

    if (!filterBtn) {
      return;
    };

    filter.querySelector('.current').classList.remove('current');
    filterBtn.classList.add('current');

    filterCards(filterBtn.dataset.category);
  });
}

export default menuFilter;