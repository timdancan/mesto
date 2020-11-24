let editButtonNode = document.querySelector('.profile__edit-button');
let popupNode = document.querySelector('.popup');
let closeButtonNode = document.querySelector('.popup__close');

let profileTitleNode = document.querySelector('.profile__title');
let profileSubtitleNode = document.querySelector('.profile__subtitle');
let popupFormNode = document.querySelector('.popup__form');
let popupInputTitleNode = document.querySelector('.popup__input_place_title');
let popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');

function editClick() {
  popupInputTitleNode.value = profileTitleNode.textContent;
  popupInputSubtitleNode.value = profileSubtitleNode.textContent;
  popupNode.classList.add('popup_visiable');
}

function closeClick() {
  popupNode.classList.remove('popup_visiable');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
  closeClick();
}

popupFormNode.addEventListener('submit', handleFormSubmit);
editButtonNode.addEventListener('click', editClick);
closeButtonNode.addEventListener('click', closeClick);