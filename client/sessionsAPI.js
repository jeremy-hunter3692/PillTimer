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
  return request.get(apiUrl).then((res) => {
    //converting from UTC back to date object
    const data = res.body
    data.forEach((x) => {
      // console.log('type', typeof x.start, 'actual', x.start)
      x.start = new Date(parseInt(x.start))
      x.end = new Date(parseInt(x.end))
      // console.log('after type', typeof x.start, 'actual', x.start)
    })

    return data
  })
}

export function addSessions(data) {
  //convert to utc
  console.log('1', data)
  data.forEach((x) => {
    console.log(typeof x.start, x.start)
    x.start.toUTCString()
    console.log(typeof x.start, x.start)
  })
  console.log('2', data)
  // const submitData = { ...data }
  // console.log(submitData)
  // console.log(typeof data[0].start.toUTCString(), data[0].start.toUTCString())
  // console.log(typeof data[0].end.toUTCString(), data[0].end.toUTCString())
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
