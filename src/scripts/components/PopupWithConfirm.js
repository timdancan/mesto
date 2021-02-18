import Popup from './Popup'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._buttonConfirm = this._popup.querySelector('.popup__button_confirm');
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
    console.log(this._cardId);
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("click", () => {
      this._handleSubmit(this._cardId);
    });
  }
}