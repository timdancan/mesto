import Card from '../scripts/components/Card.js'
import { FormValidator, validationConfig } from "../scripts/components/FormValidator.js"
import { listContainerElement, addSrcNode, popupAddForm, popupCloseForm, addNameNode, editButtonNode, profileTitleNode, profileSubtitleNode, popupInputTitleNode, popupInputSubtitleNode, addButtonNode, initialCards, selectorObj } from '../scripts/utils/constans.js'
import Section from '../scripts/components/Section.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import UserInfo from '../scripts/components/UserInfo.js'
import Api from '../scripts/components/Api.js'

import './index.css'


const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-20',
  headers:"424dcfe6-7281-4ce4-8ed0-0018c46e204a"
})

api.getUserData()
api.getInitialCards()

function openImageCard(name, link) {
  popupWithImage.open(name, link)
}

function createNewCard(item) {
  return new Card({data: item, openImageCard}, selectorObj.template).generateCard()
}

function handlePopupAddCard () {
  const item = {
    name: addNameNode.value,
    link: addSrcNode.value
  }
  defaultCardList.setNewItem(createNewCard(item))
  popupWithFormAdd.close()
}

function handlePopupProfile () {
  userInfo.setInfo(popupInputTitleNode.value, popupInputSubtitleNode.value)
  popupWithFormEdit.close()
}

editButtonNode.addEventListener('click', ()=> {
  const data = userInfo.getInfo()
  popupInputTitleNode.value = data.name;
  popupInputSubtitleNode.value = data.description;
  editPopupValidation.clearErrors()
  popupWithFormEdit.open()
  editPopupValidation.setButtonState(popupCloseForm.checkValidity())
})

addButtonNode.addEventListener('click', ()=>{
    addPopupValidation.clearErrors()
    popupWithFormAdd.open()
    addPopupValidation.setButtonState(popupAddForm.checkValidity())
});


const editPopupValidation = new FormValidator (validationConfig, popupCloseForm)
editPopupValidation.enableValidation()

const addPopupValidation = new FormValidator (validationConfig, popupAddForm)
addPopupValidation.enableValidation()

const userInfo = new UserInfo(profileTitleNode, profileSubtitleNode)

const popupWithImage = new PopupWithImage(selectorObj.popupImageSelector);
popupWithImage.setEventListeners()

const popupWithFormEdit = new PopupWithForm(selectorObj.popupProfileSelector, handlePopupProfile)
popupWithFormEdit.setEventListeners()

const popupWithFormAdd = new PopupWithForm(selectorObj.popupAddCardSelector, handlePopupAddCard)
popupWithFormAdd.setEventListeners()

const defaultCardList  = new Section({ 
  data: initialCards,
  renderer: (item)=> {
    defaultCardList.setItem(createNewCard(item))
  } 
}, listContainerElement)
defaultCardList.renderItems()