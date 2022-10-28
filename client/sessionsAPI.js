// eslint-disable-next-line no-unused-vars
import { getAllByAltText } from '@testing-library/react'
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const apiUrl = '/api/v1/sessions'

export function getLastSessionById(id) {
  return request.get(`${apiUrl}/${id}`).then((res) => {
    // console.log('api', res.body)
    return res.body
  })
}

export function getSessions() {
  return request.get(apiUrl).then((res) => {
    //converting from UTC back to date object
    const data = res.body
    // data.forEach((x) => {
    //   // console.log('type', typeof x.start, 'actual', x.start)
    //   x.start = new Date(x.start)
    //   x.end = new Date(x.end)
    //   // console.log('after type', typeof x.start, 'actual', x.start)
    // })
    console.log('from sessions', data)
    return data
  })
}

export function addSessions(data) {
  //convert to utc
  data.forEach((x) => {
    x.start.toUTCString()
    x.end.toUTCString()
  })

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
