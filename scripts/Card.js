import { openPopup, popupImgNode, popupTextNode, popupOpenImgNode } from './utils.js'


export class Card {
  constructor(data) {
    this._name = data.name
    this._link = data.link
    this._element = this._getTemplate()
    this._removeButton = this._element.querySelector('.element__trash')
    this._elementButton = this._element.querySelector('.element__button')
    this._elementImg = this._element.querySelector('.element__img')
    this._headerElement = this._element.querySelector('.element__title')
  }

  _getTemplate() {
    const newItem = document
    .querySelector('.template')
    .content.querySelector('.element')
    .cloneNode(true)


    return newItem
  }

  _setEventListeners() {
    this._removeButton.addEventListener('click', () => this._removeCard())
    this._elementButton.addEventListener('click', () => this._addToggle())
    this._elementImg.addEventListener('click', () => this._popupOpenImg())
  }

  _removeCard() {
    this._element.remove() 
    this._element = null
  }

  _addToggle() {
    this._elementButton.classList.toggle('element__button_active')
  }

  _popupOpenImg() {
    openPopup(popupOpenImgNode)
    popupTextNode.textContent = this._name
    popupImgNode.src = this._link
    popupImgNode.alt = this._name
  }

  generateCard() {
    this._setEventListeners()
    this._elementImg.style.backgroundImage = `url(${this._link})`
    this._elementImg.ariaLabel = this._name
    this._headerElement.textContent = this._name
    return this._element
  }
}

