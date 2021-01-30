import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super (popupSelector)
    this._popupTextNode = document.querySelector('.popup__text')
    this._popupImgNode = document.querySelector('.popup__img')
  }

  open (name, link) {
    this._popupTextNode.textContent = name
    this._popupImgNode.src = link
    this._popupImgNode.alt = name
    super.open()
  }
}