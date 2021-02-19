export default class Card {
  constructor({ data, openImageCard, handleTrashClick, handleLikeClick }, template, userId) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = template
    this._openImageCard = openImageCard
    this._element = this._getTemplate()
    this._delete = this._element.querySelector('.element__trash')
    this._like = this._element.querySelector('.element__button')
    this._elementImg = this._element.querySelector('.element__img')
    this._headerElement = this._element.querySelector('.element__title')
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick
    this._idOwner = data.owner._id
    this._userId = userId
    this._cardId = data._id
    this._likes = data.likes
  }

  _getTemplate() {
    const newItem = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element')
    .cloneNode(true)


    return newItem
  }

  _setEventListeners() {
    this._delete.addEventListener('click', () => this._handleTrashClick(this._cardId, this))
    this._like.addEventListener('click', () => {
      this._handleLikeClick(this._cardId, this._checkLike(), this)
    })
    this._elementImg.addEventListener('click', () => this._openImageCard(this._name, this._link))
  }

  removeCard() {
    this._element.remove() 
    this._element = null
  }

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    })
  }


  generateCard() {
    this._elementImg.style.backgroundImage = `url(${this._link})`
    this._elementImg.ariaLabel = this._name
    this._headerElement.textContent = this._name
    if(this._userId !== this._idOwner) {
      this._delete.remove()
    }
    this.setLikes(this._likes)
    this._setEventListeners()
    return this._element
  }

  setLikes(arr) {
    this._element.querySelector('.element__counter').textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this._like.classList.add('element__button_active');
    } else {
      this._like.classList.remove('element__button_active');
    }
  }
}

