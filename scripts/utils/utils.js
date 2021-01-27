export const bodyNode = document.querySelector('.body')
export const popupImgNode = document.querySelector('.popup__img')
export const popupTextNode = document.querySelector('.popup__text')
export const popupOpenImgNode = document.querySelector('.popup_img')
const escKeyCode = 'Escape'
export function openPopup(popup) {
  popup.classList.add('popup_visiable')
  bodyNode.addEventListener('keydown', addKey)
}

export function closePopup(popup) {
  popup.classList.remove('popup_visiable');
  bodyNode.removeEventListener('keydown', addKey)
}

export function addKey (e) {
  if (e.key === escKeyCode) {
    const popupActive = document.querySelector('.popup_visiable')
    closePopup(popupActive)
  }
}