import config from '../config/config';
import Api from '../helpers/api';

export default class TaskDataService {
  static getAllTasks(user) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/tasks'

    return Api.fetch(request_url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static markTask(taskID, status) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/tasks/' + taskID + '/' + status

    return Api.fetch(request_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AppState.currentUser.auth_token
      }
    })
  }

  static createTask(task) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/tasks'
    var body = new FormData()

    for (var key in task) {
      if (task.hasOwnProperty(key)) {
        body.append(key, task[key])
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

  static editTask(task) {
    var request_url = config.server_url + '/users/' + AppState.currentUser.id + '/tasks/' + task.id
    var body = new FormData()

    for (var key in task) {
      if (task.hasOwnProperty(key)) {
        body.append(key, task[key])
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
