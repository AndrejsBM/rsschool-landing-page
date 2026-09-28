function carousel() {
  const carousel = document.querySelector('.carousel');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const carouselItems = [...document.querySelectorAll('.carousel__item')];
  const carouselIndicators = document.querySelectorAll('.carousel__indicator');
  const itemCount = carouselItems.length;
  let current = 0;
  let startX = 0;
  let endX = 0;

  function showSlide(index) {
    carouselItems[current].classList.remove('active');
    carouselIndicators[current].classList.remove('active');

    current = index;

    carouselItems[current].classList.add('active');
    carouselIndicators[current].classList.add('active');
  }

  btnLeft?.addEventListener('click', function () {
    changeSlide(-1);
  });

  btnRight?.addEventListener('click', function () {
    changeSlide(1);
  });

  function changeSlide(dir) {
    let next = current + dir;

    if (next >= itemCount) {
      next = 0;
    }

    if (next < 0) {
      next = itemCount - 1;
    }

    showSlide(next);
  }

  carousel?.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
  });

  carousel?.addEventListener('touchend', function (event) {
    endX = event.changedTouches[0].clientX;
    const dif = endX - startX;

    const swipeToCount = 50;

    if (Math.abs(dif) < swipeToCount) {
      return;
    }

    if (dif < 0) {
      changeSlide(1);
    } else {
      changeSlide(-1);
    }
  });

  carouselIndicators.forEach((indicator, i) => {
    indicator.addEventListener('click', function() {
      showSlide(i);
    })
  })
}

export default carousel;
