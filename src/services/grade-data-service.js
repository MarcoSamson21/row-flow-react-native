import config from '../config/config';
import Api from '../helpers/api';

export default class GradeDataService {
  static getList() {
    var request_url = config.server_url + '/user_grades'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static create(grade) {
    var request_url = config.server_url + '/user_grades/'
    var body = new FormData()

    for (var key in grade) {
      if (grade.hasOwnProperty(key)) {
        body.append(key, grade[key])
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
