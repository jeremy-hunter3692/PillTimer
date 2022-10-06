// eslint-disable-next-line no-unused-vars
import { getAllByAltText } from '@testing-library/react'
import request from 'superagent'
// eslint-disable-next-line no-unused-vars
const apiUrl = '/api/v1/students'

export function getAllStudents() {
  return request.get(apiUrl).then((res) => {
    console.log('stuAPI', res.body)
    return res.body
  })
}
