export default class UserInfo {
  constructor({profileName, profileDescription}) {
    this._name = profileName
    this._description = profileDescription
  }

  getInfo() {
    const userData = {
      name: this._name.textContent,
      job: this._description.textContent,
    };
    return userData;
  }

  setInfo(userData) {
    this._name.textContent = userData.name;
    this._description.textContent = userData.description;
  }
}