function createMenuCard(data) {
  function formatTitle(title) {
    return title.replaceAll(' ', '-').toLowerCase();
  }

  const card = document.createElement('article');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const h2Elem = document.createElement('h2');
  const pElem = document.createElement('p');
  const pPriceElem = document.createElement('p');
  card.classList.add('section-menu__menu-card', 'card');
  card.dataset.category = data.category
  cardImg.src = `../assets/img/${formatTitle(data.name)}.jpg`;
  cardImg.alt = data.name;
  cardImg.classList.add('card__img');
  imgContainer.classList.add('img__container');
  imgContainer.appendChild(cardImg);
  card.appendChild(imgContainer);
  h2Elem.innerText = data.name;
  h2Elem.classList.add('card__title');
  card.appendChild(h2Elem);
  pElem.innerText = data.description;
  pElem.classList.add('card__text');
  card.appendChild(pElem);
  pPriceElem.innerText = `$${data.price}`;
  pPriceElem.classList.add('card__price');
  card.appendChild(pPriceElem);

  return card;
}

export default createMenuCard;
