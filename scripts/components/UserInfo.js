export default class UserInfo {
  constructor( profileName, profileDescription ) {
    this._name = profileName
    this._description = profileDescription
  }

  getInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent
    };
    return data;
  }

  setInfo(name , description) {
    this._name.textContent = name;
    this._description.textContent = description;
  }
}