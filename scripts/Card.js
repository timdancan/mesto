import { popupOpen, popupImgNode, popupTextNode, popupOpenImgNode } from './index.js'


export class Card {
  constructor(data) {
    this._name = data.name
    this._link = data.link
    this._element = this._getTemplate()
    this._removeButton = this._element.querySelector('.element__trash')
    this._elementButton = this._element.querySelector('.element__button')
    this._elementImg = this._element.querySelector('.element__img')
  }

  _getTemplate() {
    const newItem = document
    .querySelector('.template')
    .content.querySelector('.element')
    .cloneNode(true)


    return newItem
  }

  // Установка слушателя
  _setEventListeners() {
    this._removeButton.addEventListener('click', () => this._removeCard())
    this._elementButton.addEventListener('click', () => this._addToggle())
    this._elementImg.addEventListener('click', () => this._popupOpenImg())
  }

  _removeCard() {
    this._element.remove()
  }

  _addToggle() {
    this._elementButton.classList.toggle('element__button_active')
  }

  _popupOpenImg() {
    popupOpen(popupOpenImgNode)
    popupTextNode.textContent = this._name
    popupImgNode.src = this._link
    popupImgNode.alt = this._name
  }

  // Создание карточки
  generateCard() {
    this._setEventListeners()
    const headerElement = this._element.querySelector('.element__title')
    this._elementImg.style.backgroundImage = `url(${this._link})`
    headerElement.textContent = this._name

    return this._element
  }
}

