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

export { listContainerElement, addSrcNode, popupAddForm, popupCloseForm, addNameNode, editButtonNode, editPopupNode, addPopupNode, closeButtonNode, popupNode, profileTitleNode, profileSubtitleNode, popupInputTitleNode, popupInputSubtitleNode, addButtonNode, closeClickAddNode, popupCloseImgNode, initialCards }