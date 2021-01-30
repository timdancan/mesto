import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { formSubmitCallBack }) {
    super(popupSelector)
    this._formSubmitCallBack = formSubmitCallBack
    this._formSubmit = this._formSubmit.bind(this)
    this._form = this._popupSelector.querySelector('.popup__form')
    this._inputList = this._popupSelector.querySelectorAll('.form__input')
  }

  _formSubmit(e) {
    e.preventDefault();
    this._formSubmitCallBack (this._getInputValues());
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach(input => {
      data[input.name] = input.value;
    })
    return data;
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this._formSubmit)
  }

  close() {
    super.close();
    this._form.reset();
  }
}