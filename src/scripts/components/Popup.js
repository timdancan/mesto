export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._bodyNode = document.querySelector(".body");
    this._escKeyCode = "Escape";
    this._popupActive = document.querySelector(".popup_visiable");
    this._closeButtonNode = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add("popup_visiable");
    this._bodyNode.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_visiable");
    this._bodyNode.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === this._escKeyCode) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButtonNode.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
