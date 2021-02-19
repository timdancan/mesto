export default class UserInfo {
  constructor( profileName, profileDescription, profileAvatar ) {
    this._name = profileName
    this._description = profileDescription
    this._avatar = profileAvatar
  }

  getInfo() {
    const data = {
      name: this._name.textContent,
      description: this._description.textContent
    };
    return data;
  }

  setInfo(name , description, avatar) {
    this._name.textContent = name;
    this._description.textContent = description;
    this._avatar.src = avatar
  }
}