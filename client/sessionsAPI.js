// eslint-disable-next-line no-unused-vars
import { getAllByAltText } from '@testing-library/react'
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const apiUrl = '/api/v1/sessions'

export function getLastSessionById(id) {
  return request.get(`${apiUrl}/${id}`).then((res) => {
    return res.body
  })
}

export function getSessions() {
  console.log('sessions api')
  return request.get(apiUrl).then((res) => {
    return res.body
  })
}

export function addSession(data) {
  return request
    .post(apiUrl)
    .send(data)
    .then((res) => {
      if (res.status === 200) {
        return res.body
      } else {
        throw new Error('post not saved')
      }
    })
    .catch((err) => {
      console.log(err.status, 'bad from addSession')
    })
}
