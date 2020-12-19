const listContainerElement = document.querySelector('.elements') 
const popupFormNode = document.querySelector('.popup__form');
const addSrcNode = document.querySelector('.popup__input_add_src')
const templateElementNode = document.querySelector('.template')
const popupAddForm = document.querySelector('.popup__form_add')
const popupCloseForm = document.querySelector('.popup__form_close')
const addNameNode = document.querySelector('.popup__input_add_name')
const inputListNode = popupCloseForm.querySelectorAll('.popup__input')
const errorNode = popupCloseForm.querySelectorAll('.popup__error')

const editButtonNode = document.querySelector('.profile__edit-button');
const closePopupNode = document.querySelector('.popup_close');
const addPopupNode = document.querySelector('.popup_add');
const closeButtonNode = document.querySelector('.popup__close');
const popupNode = document.querySelector('.popup');

const profileTitleNode = document.querySelector('.profile__title');
const profileSubtitleNode = document.querySelector('.profile__subtitle');

const popupInputTitleNode = document.querySelector('.popup__input_place_title');
const popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');

const addButtonNode = document.querySelector('.profile__add-button')
const closeClickAddNode = document.querySelector('.popup__close_add')

const popupImgNode = document.querySelector('.popup__img')
const popupTextNode = document.querySelector('.popup__text')
const headerElementNode = document.querySelectorAll('.element__title')

const popupOpenImgNode = document.querySelector('.popup_img')
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



function popupOpen(popup) {
  popup.classList.add('popup_visiable')
}

function popupClose(popup) {
  popup.classList.remove('popup_visiable');
}

function handleFormSubmit() {
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  popupClose(closePopupNode)
}


popupFormNode.addEventListener('submit', handleFormSubmit);
editButtonNode.addEventListener('click', ()=> {
  popupOpen(closePopupNode)
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  enableValidation(validationConfig)
});
addButtonNode.addEventListener('click', ()=>{
  popupOpen(addPopupNode)
  enableValidation(validationConfig)
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
closePopupNode.addEventListener('click', (e)=>{
  if (e.target.classList.contains('popup_close')) {
    popupClose(closePopupNode)
  }
});
bodyNode.addEventListener('keydown', (e)=>{
  if (e.key === 'Escape') {
    popupClose(closePopupNode)
    popupClose(addPopupNode)
    popupClose(popupOpenImgNode)
  }
});
closeClickAddNode.addEventListener('click', ()=>{
  popupClose(addPopupNode)
})
addPopupNode.addEventListener('click', (e)=>{
  if (e.target.classList.contains('popup_add')) {
    popupClose(addPopupNode)
  }
})
popupCloseImgNode.addEventListener('click', ()=>{
  popupClose(popupOpenImgNode)
})
popupOpenImgNode.addEventListener('click', (e)=>{
  if (e.target.classList.contains('popup_img')) {
    popupClose(popupOpenImgNode)
  }
})
popupAddForm.addEventListener('submit', addNewItem)



function renderList() {

  const listItems = initialCards.map(composeItem)

  listContainerElement.append(...listItems)
}

function composeItem(item) {
  const newItem = templateElementNode.content.cloneNode(true)
  const headerElement = newItem.querySelector('.element__title')
  const imgElement = newItem.querySelector('.element__img')
  imgElement.style.backgroundImage = `url(${item.link})`
  headerElement.textContent = item.name
  imgElement.addEventListener('click', ()=> {
    popupOpen(popupOpenImgNode)
    popupTextNode.textContent = item.name
    popupImgNode.src = item.link
  })
  const removeButton = newItem.querySelector('.element__trash')
  removeButton.addEventListener('click', removeItem)
  const elementButton = newItem.querySelector('.element__button')
  elementButton.addEventListener('click', ()=> {
    elementButton.classList.toggle('element__button_active')
  })
  return newItem
}

function removeItem(evt) {
  evt.target.closest('.element').remove()
}

function addNewItem() {
  const inputTitle = addNameNode.value
  const inputSubtitle = addSrcNode.value
  const newItem = composeItem({ name: inputTitle, link: inputSubtitle})
  listContainerElement.prepend(newItem)
  popupClose(addPopupNode)
  addNameNode.value = ''
  addSrcNode.value = ''
}

renderList()