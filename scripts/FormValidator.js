export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  buttonInvalidClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

export class FormValidator {
  constructor (config, form) {
    this._form = form
    this._formSelector = config.formSelector
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._buttonInvalidClass = config.buttonInvalidClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._button = this._form.querySelector(this._submitButtonSelector)
  }

  _showError() {
    this._error = this._form.querySelector(`#${this._input.id}-error`)
    this._error.textContent = this._input.validationMessage
    this._input.classList.add(this._inputErrorClass)
  }
  
  _hideError() {
    this._error = this._form.querySelector(`#${this._input.id}-error`)
    this._error.textContent = ''
    this._input.classList.remove(this._inputErrorClass)
  }
  
  _checkInputValidity(input) {
    this._input = input
    if(this._input.validity.valid){
      this._hideError()
    } else {
      this._showError()
    }
  }
  
  setButtonState(isActive) {
    if(isActive){
      this._button.classList.remove(this._buttonInvalidClass)
      this._button.disabled = false
    } else {
      this._button.classList.add(this._buttonInvalidClass)
      this._button.disabled = true
    }
  }
  
  _setEventListener() {
    this._inputList = this._form.querySelectorAll(this._inputSelector)
  
    this._inputList.forEach(input => {
      input.addEventListener('input', ()=> {
        this._checkInputValidity(input)
        this.setButtonState(this._form.checkValidity())
      })
    })
  }
  
  enableValidation() {
    this.setButtonState(this._form.checkValidity())
    this._setEventListener()
  }
}