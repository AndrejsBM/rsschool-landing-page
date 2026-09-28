function carousel() {
  const carousel = document.querySelector('.carousel');
  const btnLeft = document.querySelector('.btn-left');
  const btnRight = document.querySelector('.btn-right');
  const carouselItems = [...document.querySelectorAll('.carousel__item')];
  const carouselIndicators = document.querySelectorAll('.carousel__indicator');
  let current = 0;
  let currentPosition = 0;
  const itemCount = carouselItems.length;
  const carouselWidth = carousel.scrollWidth;


  btnLeft.addEventListener('click', function() {
    carouselIndicators[current].classList.remove('active');

    current--;
    
    if (current < 0) {
      current = itemCount - 1;
      currentPosition = -(carouselWidth - carouselItems[current].offsetWidth);
    } else {
      currentPosition += carouselItems[current].offsetWidth;
    }
  
    carousel.style.transform = `translateX(${currentPosition}px)`;
    carouselIndicators[current].classList.add('active');
  });

  btnRight.addEventListener('click', function() {
    carouselIndicators[current].classList.remove('active');

    current++;
    
    
    if (current >= itemCount) {
      current = 0;
      currentPosition = 0;
    } else {
      currentPosition -= carouselItems[current].offsetWidth;
    }
    
    carousel.style.transform = `translateX(${currentPosition}px)`;
    carouselIndicators[current].classList.add('active');
  });
}

export default carousel;