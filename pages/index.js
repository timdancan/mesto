import Card from '../scripts/components/Card.js'
import { FormValidator, validationConfig } from "../scripts/components/FormValidator.js"
import { openPopup, popupOpenImgNode, closePopup } from '../scripts/utils/utils.js'
import { listContainerElement, addSrcNode, popupAddForm, popupCloseForm, addNameNode, editButtonNode, editPopupNode, addPopupNode, closeButtonNode, popupNode, profileTitleNode, profileSubtitleNode, popupInputTitleNode, popupInputSubtitleNode, addButtonNode, closeClickAddNode, popupCloseImgNode, initialCards } from '../scripts/utils/constans.js'
import Section from '../scripts/components/Section.js'
// import PopupWithForm from '../scripts/components/PopupWithForm.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js'
// import UserInfo from '../scripts/components/UserInfo.js'

const addPopupValidation = new FormValidator (validationConfig, popupAddForm)
const editPopupValidation = new FormValidator (validationConfig, popupCloseForm)
editPopupValidation.enableValidation()
addPopupValidation.enableValidation()

const defaultCardList  = new Section({ 
  data: initialCards,
  renderer: (item)=> {
    defaultCardList.setItem(createNewCard(item))
  } 
}, listContainerElement)


function createNewCard(item) {
  return new Card({data: item, openImageCard}).generateCard()
}

defaultCardList.renderItems()

function openImageCard(name, link) {
  popupWithImage.open(name, link)
}


const popupWithImage = new PopupWithImage(popupOpenImgNode);
popupWithImage.setEventListeners()

// const UserInfo = new UserInfo(profileTitleNode, profileSubtitleNode)

// const PopupWithForm = new PopupWithForm(editPopupNode, ()=> {
//   formSubmitCallBack: (data) => {
//     userInfo.setInfo(data)
//     PopupWithForm.close()
//   }
// })
// PopupWithForm.setEventListeners()

// const addNewCardPopup = new PopupWithForm(addPopupNode, ()=> {
//   formSubmitCallBack: (data) => {
    
//   }
// })

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

// popupCloseImgNode.addEventListener('click', ()=>{
//   closePopup(popupOpenImgNode)
// })
popupAddForm.addEventListener('submit', addNewItem)

function addNewItem(evt) {
  evt.preventDefault()
  const newCard = {
    name: addNameNode.value,
    link: addSrcNode.value
  }
  defaultCardList.setNewItem(createNewCard(newCard))
  closePopup(addPopupNode)
  popupAddForm.reset()
}