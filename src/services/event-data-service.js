import config from '../config/config';
import Api from '../helpers/api';

export default class EvenntDataService {
  static getList() {
    var request_url = config.server_url + '/event_invites'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static checkInEvent(eventID, location) {
    var request_url = config.server_url + '/event_invites/' + eventID + '/check_in'
    var body = new FormData()

    for (var key in location) {
      if (location.hasOwnProperty(key)) {
        body.append(key, location[key])
      }
    }

    return Api.fetch(request_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': AppState.currentUser.auth_token
      },
      body: body
    })
  }
}
