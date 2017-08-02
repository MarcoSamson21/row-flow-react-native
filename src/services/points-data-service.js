import config from '../config/config';
import Api from '../helpers/api';

export default class PointsDataService {
  static getAllPointsTransactions(user) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/points_transactions'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static createPointsTransaction(pointsTransaction) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/points_transactions'
    var body = new FormData()

    for (var key in pointsTransaction) {
      if (pointsTransaction.hasOwnProperty(key)) {
        body.append(key, pointsTransaction[key])
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
