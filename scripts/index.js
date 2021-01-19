import { Card } from './Card.js'
import { FormValidator, validationConfig } from "./FormValidator.js"
import { openPopup, popupOpenImgNode, closePopup } from './utils.js'

const listContainerElement = document.querySelector('.elements') 
const addSrcNode = document.querySelector('.popup__input_add_src')
const popupAddForm = document.querySelector('.popup__form_add')
const popupCloseForm = document.querySelector('.popup__form_close')
const addNameNode = document.querySelector('.popup__input_add_name')
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



function submitProfileForm(evt) {
  evt.preventDefault()
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  closePopup(editPopupNode)
}

popupCloseForm.addEventListener('submit', submitProfileForm);
editButtonNode.addEventListener('click', ()=> {
  editPopupValidation.clearErrors()
  openPopup(editPopupNode)
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  editPopupValidation.setButtonState(popupCloseForm.checkValidity())
});
addButtonNode.addEventListener('click', ()=>{
  addPopupValidation.clearErrors()
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
  listContainerElement.prepend(createNewCard(newCard))
  closePopup(addPopupNode)
  popupAddForm.reset()
}

initialCards.forEach(item => {
  listContainerElement.append(createNewCard(item))
})

function createNewCard(item) {
  return new Card(item).generateCard()
}