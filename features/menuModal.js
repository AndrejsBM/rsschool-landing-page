import { formatTitle } from "../utils/formatTitle.js";

const modal = document.querySelector('.modal');

export function menuModal() {
  const form = modal?.querySelector('.modal__form');
  const menuSection = document.querySelector('.section-menu__menu-cards');
  const imgModal = document.querySelector('.modal__img');
  const titleModal = document.querySelector('.modal__title');
  const descriptionModal = document.querySelector('.modal__description');
  const radioS = document.querySelector('#size-s + label .modal__form-radio-size-value');
  const radioM = document.querySelector('#size-m + label .modal__form-radio-size-value');
  const radioL = document.querySelector('#size-l + label .modal__form-radio-size-value');
  const checkboxFirst = document.querySelector('#add-1 + label .modal__form-checkbox-add-value');
  const checkboxSecond = document.querySelector('#add-2 + label .modal__form-checkbox-add-value');
  const checkboxThird = document.querySelector('#add-3 + label .modal__form-checkbox-add-value');
  const price = document.getElementById('total');
  let currentMenuItem = null;

  function resetModalForm() {
    form.reset();
  }

  function openModal(menuItem) {
    currentMenuItem = menuItem;

    resetModalForm();
    createModalCard(menuItem);
    handlePrice(menuItem);
    modal?.classList.add('opened');
    document.body.style.position = 
    document.body.style.position === 'fixed' ? 'static' : 'fixed';
  }

  function handlePrice(menuItem) {
    let totalPrice = Number(menuItem.price);
    const selectedSize = modal?.querySelector('input[name="size"]:checked');
    const selectedAdditives = modal?.querySelectorAll('input[type="checkbox"]:checked');

    if (selectedSize) {
      totalPrice += Number(menuItem.sizes[selectedSize.id.at(-1)]["add-price"]);;
    }

    selectedAdditives?.forEach((checkbox, i) => {
      totalPrice += Number(menuItem.additives[i]["add-price"]); 
    })

    price.textContent = `$${totalPrice.toFixed(2)}`;

  }

  form?.addEventListener('change', function() {
    if (!currentMenuItem) {
      return;
    }

    handlePrice(currentMenuItem);
  })
  
  function createModalCard(card) {
    imgModal.src = `../assets/img/${formatTitle(card.name)}.jpg`;
    imgModal.alt = card.name;
    titleModal.textContent = card.name;
    descriptionModal.textContent = card.description;
    radioS.textContent = card.sizes.s.size;
    radioM.textContent = card.sizes.m.size;
    radioL.textContent = card.sizes.l.size;
    checkboxFirst.textContent = card.additives[0].name;
    checkboxSecond.textContent = card.additives[1].name;
    checkboxThird.textContent = card.additives[2].name;
  }

  menuSection?.addEventListener('click', function(event) {
    const card = event.target.closest('.card');

    if (!card) {
      return;
    }

    const id = parseInt(card.dataset.id);
    const menuItem = app.store.menu.find(item => item.id === id);

    if (!menuItem) {
      return;
    }

    openModal(menuItem);
  })
}

export function closeModal() {
  modal?.classList.remove('opened');
  document.body.style.position = 'static';
}