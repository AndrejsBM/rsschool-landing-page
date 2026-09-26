import mobileNav from "./features/mobileNav.js";
import carousel from "./features/carousel.js";
import menuModal from "./features/menuModal.js";

window.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const themeToggle = document.querySelector('.toggle');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModalBtn = document.querySelector('.modal__btn');

  updateTheme();
  mobileNav();
  // carousel();
  menuModal();

  modalOverlay.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__inner')) {
      // closeModal();
      modalOverlay.classList.remove('opened');
    }
  });

  closeModalBtn.addEventListener('click', () => {
    // closeModal();
     modalOverlay.classList.remove('opened');
  });


  window.addEventListener('keydown', function(e) {
    if (!document.querySelector('.modal.opened')) {
      return;
    }

    if (e.key === 'Escape') {
      modalOverlay.classList.remove('opened');
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
