export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._token = headers
    this._userUrl = `${this._url}/users/me`
    this._cardsUrl = `${this._url}/cards`
    this._likesUrl = `${this._url}/cards/likes`;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
}

  getUserData() {
    return fetch(this._userUrl, {
      headers: {
        authorization: this._token,
      },
    })
      .then(this._checkResponse)
  } 

  getInitialCards() {
    return fetch(this._cardsUrl, {
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  saveUserChanges(
    name,
    about
  ) {
    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about,
        })
      })
      .then(this._checkResponse)
  }

  changedAvatar(src) {
    return fetch(`${this._userUrl}/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: src.link
        })
      })
      .then(this._checkResponse)
  }
  
  postNewCard({
    name,
    link
  }) {
    return fetch(this._cardsUrl, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
      .then(this._checkResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  likedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  dislikedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

}
