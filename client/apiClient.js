// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const apiUrl = '/api/v1/sessions'

export function getSessionById() {
  return request.get(apiUrl).then((res) => {
    return res.body
  })
}

export function addSession() {
  return request.post(apiUrl)
}
