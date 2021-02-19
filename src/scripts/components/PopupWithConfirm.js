import Popup from './Popup'

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popup.querySelector('.popup__button');
    // this._formConfirm = this._popup.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener('click', (e) => {
      e.preventDefault();
      this._handleSubmitCallback()
    });
    // this._formConfirm.addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   this._handleSubmitCallback()
    // });
    // Вот через клик работает, а через сабмит нет, просидел целый день не мог понять что делаю не так, все переписывал и в итоге решил попробовать через клик и все заработало, прошу не мучать с этим))
  }
}