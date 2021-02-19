import Popup from './Popup'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formConfirm = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formConfirm.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleSubmitCallback()
    });
  }
}