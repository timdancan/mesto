import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitCallBack ) {
    super(popupSelector)
    this._formSubmitCallBack = formSubmitCallBack
    this._submit = this._submit.bind(this)
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = this._form.querySelectorAll('.form__input')
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach(input => {
      data[input.name] = input.value;
    })
    return data;
  }

  _submit (evt) {
    evt.preventDefault();
    this._formSubmitCallBack (this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', this._submit)
  }

  close() {
    super.close();
    this._form.reset();
  }
}