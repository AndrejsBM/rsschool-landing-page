function mobileNav() {
  const navBtn = document.querySelector('.nav-mobile-btn');
  const pageHeader = document.querySelector('.header');
  const navLinks = pageHeader.querySelectorAll('.nav__list-link');

  function toggleNav() {
     if (window.innerWidth > 768) {
      return;
    }

    pageHeader.classList.toggle('nav-open');
    document.body.style.position = 
    document.body.style.position === 'fixed' ? 'static' : 'fixed';
  }

  navBtn.addEventListener('click', toggleNav);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleNav();
    })
  })

  window.addEventListener('keydown', function(e) {
    if (!document.querySelector('.nav-open')) {
      return;
    }

    if (e.key === 'Escape') {
      pageHeader.classList.remove('nav-open');
      document.body.style.position = 'static';
    }
  })
}


export default mobileNav;