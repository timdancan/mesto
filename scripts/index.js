import { Card } from './Card.js'
import { FormValidator, validationConfig } from "./FormValidator.js"
import { openPopup, popupOpenImgNode } from './utils.js'

const listContainerElement = document.querySelector('.elements') 
const addSrcNode = document.querySelector('.popup__input_add_src')
const popupAddForm = document.querySelector('.popup__form_add')
const popupCloseForm = document.querySelector('.popup__form_close')
const addNameNode = document.querySelector('.popup__input_add_name')
const inputListNode = popupCloseForm.querySelectorAll('.popup__input')
const errorNode = popupCloseForm.querySelectorAll('.popup__error')
const editButtonNode = document.querySelector('.profile__edit-button');
const editPopupNode = document.querySelector('.popup_edit');
const addPopupNode = document.querySelector('.popup_add');
const closeButtonNode = document.querySelector('.popup__close');
const popupNode = document.querySelectorAll('.popup');
const profileTitleNode = document.querySelector('.profile__title');
const profileSubtitleNode = document.querySelector('.profile__subtitle');
const popupInputTitleNode = document.querySelector('.popup__input_place_title');
const popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');
const addButtonNode = document.querySelector('.profile__add-button')
const closeClickAddNode = document.querySelector('.popup__close_add')
const popupCloseImgNode = document.querySelector('.popup__close_img')
export const bodyNode = document.querySelector('.body')
const escKeyCode = 'Escape'
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
editPopupValidation.enableValidation()
addPopupValidation.enableValidation()

function closePopup(popup) {
  popup.classList.remove('popup_visiable');
  bodyNode.removeEventListener('keydown', addKey)
  errorNode.forEach(error => {
    error.textContent = ''
  })
  inputListNode.forEach(input => {
    input.classList.remove('popup__input_type_error')
  })
}

function submitProfileForm(evt) {
  evt.preventDefault()
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  closePopup(editPopupNode)
}

export function addKey (e) {
  if (e.key === escKeyCode) {
    const popupActive = document.querySelector('.popup_visiable')
    closePopup(popupActive)
  }
}

popupCloseForm.addEventListener('submit', submitProfileForm);
editButtonNode.addEventListener('click', ()=> {
  openPopup(editPopupNode)
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  editPopupValidation.setButtonState(popupCloseForm.checkValidity())
});
addButtonNode.addEventListener('click', ()=>{
  openPopup(addPopupNode)
  addPopupValidation.setButtonState(popupAddForm.checkValidity())
});
closeButtonNode.addEventListener('click', ()=>{
  closePopup(editPopupNode)
});
popupNode.forEach(close=> {
  close.addEventListener('click', e =>{
    if (e.target.classList.contains('popup')) {
      closePopup(close)
    }
  })
})
closeClickAddNode.addEventListener('click', ()=>{
  closePopup(addPopupNode)
})

popupCloseImgNode.addEventListener('click', ()=>{
  closePopup(popupOpenImgNode)
})
popupAddForm.addEventListener('submit', addNewItem)

function addNewItem(evt) {
  evt.preventDefault()
  const newCard = {
    name: addNameNode.value,
    link: addSrcNode.value
  }
  // const addCard = new Card(newCard)
  // const cardElement = addCard.generateCard()
  listContainerElement.prepend(createNewCard(newCard))
  closePopup(addPopupNode)
  popupAddForm.reset()
}

initialCards.forEach(item => {
  // const card = new Card(item)
  // const cardElement = card.generateCard()
  listContainerElement.append(createNewCard(item))
})

function createNewCard(item) {
  return new Card(item).generateCard()
}