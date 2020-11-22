let editButtonNode = document.querySelector('.edit-button');
let popupNode = document.querySelector('.popup');
let closeButtonNode = document.querySelector('.popup__close');

let profileTitleNode = document.querySelector('.profile__title');
let profileSubtitleNode = document.querySelector('.profile__subtitle');
let popupFormNode = document.querySelector('.popup__form');

editButtonNode.addEventListener('click', editClick);
closeButtonNode.addEventListener('click', closeClick);

function editClick() {
  popupNode.classList.add('popup_visiable');
}

function closeClick() {
  popupNode.classList.remove('popup_visiable');
}

popupFormNode.addEventListener('submit', handleFormSubmit);

document.querySelector('.popup__input_place_title').value = 'Жак-Ив Кусто';
document.querySelector('.popup__input_place_subtitle').value = 'Исследователь океана';

function handleFormSubmit(evt) {
  evt.preventDefault();
  let popupInputTitleNode = document.querySelector('.popup__input_place_title');
  let popupInputSubtitleNode = document.querySelector('.popup__input_place_subtitle');
  profileTitleNode.textContent = popupInputTitleNode.value;
  profileSubtitleNode.textContent = popupInputSubtitleNode.value;
}

