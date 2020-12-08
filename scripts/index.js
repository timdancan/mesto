const listContainerElement = document.querySelector('.elements') 
const addNameNode = document.querySelector('.popup__input_add_name')
const addSrcNode = document.querySelector('.popup__input_add_src')
const templateElementNode = document.querySelector('.template')
const popupAddForm = document.querySelector('.popup__form_add')

const editButtonNode = document.querySelector('.profile__edit-button');
const closePopupNode = document.querySelector('.popup_close');
const addPopupNode = document.querySelector('.popup_add');
const closeButtonNode = document.querySelector('.popup__close');

const profileTitleNode = document.querySelector('.profile__title');
const profileSubtitleNode = document.querySelector('.profile__subtitle');
const popupFormNode = document.querySelector('.popup__form');
const popupInputTitleNode = document.querySelector('.popup__input_place_title');
const popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');

const addButtonNode = document.querySelector('.profile__add-button')
const closeClickAddNode = document.querySelector('.popup__close_add')

const popupImgNode = document.querySelector('.popup__img')
const popupTextNode = document.querySelector('.popup__text')
const headerElementNode = document.querySelectorAll('.element__title')

const popupOpenImgNode = document.querySelector('.popup_img')
const popupCloseImgNode = document.querySelector('.popup__close_img')

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
  imgElement.addEventListener('click', () => {
    popupOpenImgNode.classList.add('popup_visiable')
    popupTextNode.textContent = item.name
    popupImgNode.src = item.link
  })
  const removeButton = newItem.querySelector('.element__trash')
  removeButton.addEventListener('click', removeItem)
  const elementButton = newItem.querySelector('.element__button')
  elementButton.addEventListener('click', () => {
    elementButton.classList.toggle('element__button_active')
  })
  return newItem
}

function removeItem (evt) {
  const targetElement = evt.target
  const targetItem = targetElement.closest('.element')
  targetItem.remove ()
}

function bindAddItemListener () {
  popupAddForm.addEventListener('submit', addNewItem)
}

function addNewItem(evt) {
  evt.preventDefault()
  const inputTitle = addNameNode.value
  const inputSubtitle = addSrcNode.value
  const newItem = composeItem({ name: inputTitle, link: inputSubtitle})
  listContainerElement.prepend(newItem)
  secondCloseClick ()
}

renderList ()
bindAddItemListener ()

function editClick() {
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  closePopupNode.classList.add('popup_visiable');
}

// elementButton.forEach(function (entry) {
//   entry.addEventListener('click', () => {
//     entry.classList.toggle('element__button_active')
//   })
// })

// elementButton.forEach(function (entry) {
//   entry.addEventListener('click', (evt) => {
//     const eventTarget = evt.target;
//     eventTarget.classList.toggle('element__button_active')
//   })
// })

// let elementButton = document.querySelectorAll('.element__button')

// elementButton.forEach(function (entry) {
//   entry.addEventListener('click', (e) => {
//     if(e.target.classList.contains('element__button')){
//       entry.classList.toggle('element__button_active')
//     }
//   })
// })

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

function thirdCloseClick () {
  popupOpenImgNode.classList.remove('popup_visiable')
}

popupFormNode.addEventListener('submit', handleFormSubmit);
editButtonNode.addEventListener('click', editClick);
closeButtonNode.addEventListener('click', closeClick);
addButtonNode.addEventListener('click', openClick);
closeClickAddNode.addEventListener('click', secondCloseClick)
popupCloseImgNode.addEventListener('click', thirdCloseClick)