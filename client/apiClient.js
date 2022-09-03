// eslint-disable-next-line no-unused-vars
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const apiUrl = '/api/v1/sessions'

export function getSessionById() {
  return request.get(apiUrl).then((res) => {
    return res.body
  })
}

export function addSession(text) {
  return request
    .post(apiUrl)
    .send(text)
    .then((res) => {
      if (res.status === 200) {
        console.log('from apicli inside', text, 'body', res.body)
        return res.body
      } else {
        throw new Error('post not saved')
      }
    })
    .catch((err) => {
      console.error(err, 'bad from addSession')
    })
}
