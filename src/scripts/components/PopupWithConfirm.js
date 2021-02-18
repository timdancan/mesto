import Popup from './Popup'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("submit", (e) => {
      e.preventDefault()
      this._handleSubmitCallback()
    });
  }
}