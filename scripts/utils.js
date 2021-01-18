import { bodyNode, addKey } from './index.js'

export const popupImgNode = document.querySelector('.popup__img')
export const popupTextNode = document.querySelector('.popup__text')
export const popupOpenImgNode = document.querySelector('.popup_img')
// поиск элемента popupImgNode не дублируется, в первом случае это элемент, а во втором модификатор
export function openPopup(popup) {
  popup.classList.add('popup_visiable')
  bodyNode.addEventListener('keydown', addKey)
}