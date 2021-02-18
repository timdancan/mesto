export default class Card {
  constructor({ data, openImageCard, handleTrashClick }, template, userId) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = template
    this._openImageCard = openImageCard
    this._element = this._getTemplate()
    this._delete = this._element.querySelector('.element__trash')
    this._elementButton = this._element.querySelector('.element__button')
    this._elementImg = this._element.querySelector('.element__img')
    this._headerElement = this._element.querySelector('.element__title')
    this._handleTrashClick = handleTrashClick;
    this._idOwner = data.owner._id;
    this._userId = userId;
    this._cardId = data._id
  }

  _getTemplate() {
    const newItem = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element')
    .cloneNode(true)


    return newItem
  }

  _setEventListeners() {
    this._delete.addEventListener('click', () => this._handleTrashClick(this._cardId, this._element))
    this._elementButton.addEventListener('click', () => this._addToggle())
    this._elementImg.addEventListener('click', () => this._openImageCard(this._name, this._link))
  }

  removeCard() {
    this._element.remove() 
    this._element = null
  }


  _addToggle() {
    this._elementButton.classList.toggle('element__button_active')
  }

  generateCard() {
    this._setEventListeners()
    this._elementImg.style.backgroundImage = `url(${this._link})`
    this._elementImg.ariaLabel = this._name
    this._headerElement.textContent = this._name
    if(this._userId !== this._idOwner) {
      this._delete.remove()
    }

    return this._element
  }
}

