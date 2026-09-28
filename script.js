import mobileNav from "./features/mobileNav.js";
import carousel from "./features/carousel.js";
import { menuModal, closeModal } from "./features/menuModal.js";
import createMenuCard from "./features/createMenuCard.js";
import menuFilter from "./features/menuFilter.js";

window.app = {};
app.store = {
  menu: null,
};

window.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeToggle = document.querySelector('.toggle');
  const menuSection = document.querySelector('.section-menu__menu-cards');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal__btn');

  updateTheme();
  mobileNav();
  carousel();
  menuModal();

  async function loadMenu() {
    const response = await fetch('../data/products.json');
    
    return await response.json();
  }


  async function init() {
    if (!menuSection) {
      return;
    }

    app.store.menu = await loadMenu();

    app.store.menu.forEach(item => {
      const cards = createMenuCard(item);

      menuSection.append(cards);
    });

    menuFilter();
  }

  init();



  modalOverlay?.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__inner')) {
      closeModal();
      modalOverlay?.classList.remove('opened');
    }
  });

  closeModalBtn?.addEventListener('click', () => {
    closeModal();
     modalOverlay?.classList.remove('opened');
  });


  window.addEventListener('keydown', function(e) {
    if (!document.querySelector('.modal.opened')) {
      return;
    }

    if (e.key === 'Escape') {
      modalOverlay?.classList.remove('opened');
      document.body.style.position = 'static';
    }
  })


  themeToggle.addEventListener('click', function (e) {
    e.target.value === 'dark' ? toggleTheme('dark') : toggleTheme('light');
  });

  function toggleTheme(theme) {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
  }

  function updateTheme() {
    localStorage.getItem('theme')
      ? body.setAttribute('data-theme', localStorage.getItem('theme'))
      : body.setAttribute('data-theme', 'light');

    localStorage.getItem('theme') === 'dark'
      ? (themeToggle.checked = true)
      : (themeToggle.checked = false);
  }
});
