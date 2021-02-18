import Card from '../scripts/components/Card.js'
import { FormValidator, validationConfig } from "../scripts/components/FormValidator.js"
import { listContainerElement, addSrcNode, popupAddForm, popupCloseForm, addNameNode, editButtonNode, profileTitleNode, profileSubtitleNode, popupInputTitleNode, popupInputSubtitleNode, addButtonNode, initialCards, selectorObj } from '../scripts/utils/constans.js'
import Section from '../scripts/components/Section.js'
import PopupWithForm from '../scripts/components/PopupWithForm.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
import UserInfo from '../scripts/components/UserInfo.js'
import Api from '../scripts/components/Api.js'
import PopupWithConfirm from '../scripts/components/PopupWithConfirm'
import './index.css'


const api = new Api({
  url:'https://mesto.nomoreparties.co/v1/cohort-20',
  headers:"424dcfe6-7281-4ce4-8ed0-0018c46e204a"
})

function handleTrashClick(id, card) {
  popupWithConfirm.setSubmitAction(() => handlePopupConfirm(id, card))
  popupWithConfirm.open()
}

function handlePopupConfirm (id, card) {
  api.deleteCard(id)
    .then(()=> {
      card.removeCard()
      popupWithConfirm.close()
    })
    .catch((err) => {
      console.log(err);
      popupWithConfirm.close();
    });
}

function openImageCard(name, link) {
  popupWithImage.open(name, link)
}


function createNewCard(item, id) {
  const card = new Card({data: item, openImageCard, handleTrashClick}, selectorObj.template, id)
  const newCard = card.generateCard()
  return newCard
}

function handlePopupAddCard () {
  const item = {
    name: addNameNode.value,
    link: addSrcNode.value
  }
  console.log(item);
  api.postNewCard(item)
    .then((data) => {
      // console.log(data)
      defaultCardList.setNewItem(createNewCard(data, data.owner._id))
      popupWithFormAdd.close()
    })
    .catch((err) => {
      console.log(err);
    })
}

function handlePopupProfile () {
  api.saveUserChanges(popupInputTitleNode.value, popupInputSubtitleNode.value)
    .then((data) => {
      console.log(data)
      userInfo.setInfo(
        data.name,
        data.about
      )
      popupWithFormEdit.close()
    })
    .catch((err) => {
      console.log(err);
    })
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

const popupWithConfirm = new PopupWithConfirm(selectorObj.popupConfirmSelector);
popupWithConfirm.setEventListeners();

const defaultCardList  = new Section({ 
  renderer: (item, id)=> {
    defaultCardList.setItem(createNewCard(item, id))
  } 
}, listContainerElement)



api.getUserData()
  .then(value => {
    userInfo.setInfo(
      value.name,
      value.about
    )
  })
  .catch((err) => {
    console.log(err);
  })

api.getInitialCards()
  .then(result => {
    console.log(result)
    result.map(item => {
      return defaultCardList.setItem(createNewCard(item, item._id))
    })
  })
  .catch((err) => {
    console.log(err);
    defaultCardList.renderItems()
  });