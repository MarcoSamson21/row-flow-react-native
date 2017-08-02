import config from '../config/config';
import Api from '../helpers/api';

export default class UserDataService {
  static getList() {
    var request_url = config.server_url + '/users'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static getUser(id) {
    var request_url = config.server_url + '/users/' + id

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static updateUser(id, user) {
    var request_url = config.server_url + '/users/' + id
    var body = new FormData()

    for (var key in user) {
      if (user.hasOwnProperty(key)) {
        body.append(key, user[key])
      }
    }

    return Api.fetch(request_url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': AppState.currentUser.auth_token
      },
      body: body
    })
  }
}
