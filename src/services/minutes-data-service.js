import config from '../config/config';
import Api from '../helpers/api';

export default class MinutesDataService {
  static getAllMinutes() {
    var request_url = config.server_url + '/meeting_notes'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static createMinutes(minutes) {
    var request_url = config.server_url + '/meeting_notes'
    var body = new FormData()

    for (var key in minutes) {
      if (minutes.hasOwnProperty(key)) {
        body.append(key, minutes[key])
      }
    }

    return Api.fetch(request_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      },
      body: body
    })
  }
}
