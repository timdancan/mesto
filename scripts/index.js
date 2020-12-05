const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

let listContainerElement = document.querySelector('.elements') 
let addNameNode = document.querySelector('.popup__input_add_name')
let addSrcNode = document.querySelector('.popup__input_add_scr')
let addButtonElementNode = document.querySelector('.popup__button_add')
let templateElementNode = document.querySelector('.template')
let popupAddForm = document.querySelector('.popup__form_add')


function plusFormSubmit (evt) {
  evt.preventDefault()
}

function renderList () {

  const listItems = initialCards.map(composeItem)

  listContainerElement.append(...listItems)
}

function composeItem (item) {
  const newItem = templateElementNode.content.cloneNode(true)
  const headerElement = newItem.querySelector('.element__title')
  const imgElement = newItem.querySelector('.element__img')
  imgElement.style.backgroundImage = `url(${item.link})`
  headerElement.textContent = item.name
  return newItem
}

popupAddForm.addEventListener('submit', plusFormSubmit)

function bindAddItemListener () {
  addButtonElementNode.addEventListener('click', addNewItem)
}

function addNewItem() {
  const inputTitle = addNameNode.value
  const inputSubtitle = addSrcNode.value
  const newItem = composeItem({ name: inputTitle, link: inputSubtitle})
  listContainerElement.prepend(newItem)
}

renderList ()
bindAddItemListener ()

let editButtonNode = document.querySelector('.profile__edit-button');
let closePopupNode = document.querySelector('.popup_close');
let addPopupNode = document.querySelector('.popup_add');
let closeButtonNode = document.querySelector('.popup__close');

let profileTitleNode = document.querySelector('.profile__title');
let profileSubtitleNode = document.querySelector('.profile__subtitle');
let popupFormNode = document.querySelector('.popup__form');
let popupInputTitleNode = document.querySelector('.popup__input_place_title');
let popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');

let elementButton = document.querySelectorAll('.element__button')
let addButtonNode = document.querySelector('.profile__add-button')
let closeClickAddNode = document.querySelector('.popup__close_add')


function editClick() {
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  closePopupNode.classList.add('popup_visiable');
}

function closeClick() {
  closePopupNode.classList.remove('popup_visiable');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  closeClick();
}

function openClick () {
  addPopupNode.classList.add('popup_visiable');
}

function secondCloseClick () {
  addPopupNode.classList.remove('popup_visiable');
}

elementButton.forEach(function (entry) {
  entry.addEventListener('click', function () {
    entry.classList.toggle('element__button_active')
  })
})

popupFormNode.addEventListener('submit', handleFormSubmit);
editButtonNode.addEventListener('click', editClick);
closeButtonNode.addEventListener('click', closeClick);
addButtonNode.addEventListener('click', openClick);
closeClickAddNode.addEventListener('click', secondCloseClick)
popupAddForm.addEventListener('submit', plusFormSubmit)