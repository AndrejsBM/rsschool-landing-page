function menuFilter() {
  const filter = document.querySelector('.section-menu__filter');
  const menuSection = document.querySelector('.section-menu__menu-cards');
  const loadMoreBtn = document.querySelector('.section-menu__refresh-btn');

  const MOBILE_LIMIT = 4;

  let isExpanded = false;

  function filterCards(category) {
    const menuCards = menuSection?.querySelectorAll('.section-menu__menu-card');

    if (!menuCards) {
      return;
    }

    const catergoryCards = [...menuCards].filter(card => card.dataset.category === category);

    const isMobile = window.innerWidth <= 768;

    // menuCards?.forEach(card => card.style.display = card.dataset.category === category ? 'flex' : 'none');
    menuCards.forEach(card => {
      card.style.display = 'none';
    });

    if (!isMobile) {
      catergoryCards.forEach(card => {
        card.style.display = 'flex';
      });

      loadMoreBtn?.classList.remove('visible');

      return;
    }

     if (isExpanded) {
      catergoryCards.forEach(card => card.style.display = 'flex');

      loadMoreBtn?.classList.remove('visible');


      return;
     };
 
     catergoryCards.forEach((card, i) => {
      if (i < MOBILE_LIMIT) {
        card.style.display = 'flex';
      }
     });

     if (catergoryCards.length > MOBILE_LIMIT) {
      loadMoreBtn?.classList.add('visible');
     } else {
      loadMoreBtn?.classList.remove('visible');
     }
  }

  filterCards(filter?.querySelector('.current')?.dataset.category);

  filter?.addEventListener('click', function(event) { 
    const filterBtn = event.target.closest('.section-menu__filter-item');

    if (!filterBtn) {
      return;
    };

    filter.querySelector('.current').classList.remove('current');
    filterBtn.classList.add('current');

    isExpanded = false;

    filterCards(filterBtn.dataset.category);
  });

  loadMoreBtn?.addEventListener('click', function() {
    isExpanded = true;

    filterCards(filter?.querySelector('.current')?.dataset.category);
  });

  window.addEventListener('resize', function() {
    filterCards(filter?.querySelector('.current').dataset.category);
  })
}

export default menuFilter;