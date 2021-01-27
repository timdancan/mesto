export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderer = renderer;
    this._initialArray = data
    this._container = containerSelector;
  }

  setItem(element) {
    this._container.append(element);
  }

  setNewItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item)
    })
  }
} 