import { Card } from './Card.js'
import { FormValidator, validationConfig } from "./FormValidator.js"

const listContainerElement = document.querySelector('.elements') 
const popupFormNode = document.querySelector('.popup__form');
const addSrcNode = document.querySelector('.popup__input_add_src')
const popupAddForm = document.querySelector('.popup__form_add')
const popupCloseForm = document.querySelector('.popup__form_close')
const addNameNode = document.querySelector('.popup__input_add_name')
const inputListNode = popupCloseForm.querySelectorAll('.popup__input')
const errorNode = popupCloseForm.querySelectorAll('.popup__error')
const editButtonNode = document.querySelector('.profile__edit-button');
const closePopupNode = document.querySelector('.popup_close');
const addPopupNode = document.querySelector('.popup_add');
const closeButtonNode = document.querySelector('.popup__close');
const popupNode = document.querySelectorAll('.popup');
const profileTitleNode = document.querySelector('.profile__title');
const profileSubtitleNode = document.querySelector('.profile__subtitle');
const popupInputTitleNode = document.querySelector('.popup__input_place_title');
const popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');
const addButtonNode = document.querySelector('.profile__add-button')
const closeClickAddNode = document.querySelector('.popup__close_add')
export const popupImgNode = document.querySelector('.popup__img')
export const popupTextNode = document.querySelector('.popup__text')
export const popupOpenImgNode = document.querySelector('.popup_img')
const popupCloseImgNode = document.querySelector('.popup__close_img')
const bodyNode = document.querySelector('.body')
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

const addPopupValidation = new FormValidator (validationConfig, popupAddForm)
const editPopupValidation = new FormValidator (validationConfig, popupCloseForm)


export function popupOpen(popup) {
  popup.classList.add('popup_visiable')
  bodyNode.addEventListener('keydown', addKey)
}

function popupClose(popup) {
  popup.classList.remove('popup_visiable');
  bodyNode.removeEventListener('keydown', addKey)
}

function handleFormSubmit(evt) {
  evt.preventDefault()
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  popupClose(closePopupNode)
}

function addKey (e) {
  if (e.key === 'Escape') {
    const popupActive = document.querySelector('.popup_visiable')
    popupClose(popupActive)
  }
}

popupFormNode.addEventListener('submit', handleFormSubmit);
editButtonNode.addEventListener('click', ()=> {
  popupOpen(closePopupNode)
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  editPopupValidation.enableValidation()
});
addButtonNode.addEventListener('click', ()=>{
  popupOpen(addPopupNode)
  addPopupValidation.enableValidation()
});
closeButtonNode.addEventListener('click', ()=>{
  popupClose(closePopupNode)
  errorNode.forEach(error => {
    error.textContent = ''
  })
  inputListNode.forEach(input => {
    input.classList.remove('popup__input_type_error')
  })
});
popupNode.forEach(close=> {
  close.addEventListener('click', e=>{
    if (e.target.classList.contains('popup')) {
      popupClose(close)
    }
  })
})
closeClickAddNode.addEventListener('click', ()=>{
  popupClose(addPopupNode)
})

popupCloseImgNode.addEventListener('click', ()=>{
  popupClose(popupOpenImgNode)
})
popupAddForm.addEventListener('submit', addNewItem)

function addNewItem(evt) {
  evt.preventDefault()
  const newCard = {
    name: addNameNode.value,
    link: addSrcNode.value
  }
  const addCard = new Card(newCard)
  const cardElement = addCard.generateCard()
  listContainerElement.prepend(cardElement)
  popupClose(addPopupNode)
  popupAddForm.reset()
}

initialCards.forEach(item => {
  const card = new Card(item)
  const cardElement = card.generateCard()
  
  listContainerElement.append(cardElement)
})