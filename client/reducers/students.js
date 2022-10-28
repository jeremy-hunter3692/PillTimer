import { SET_STUDENTS_DATA } from '../Actions/studentsActions.js'

const empty = {}

export default function lastForm(state = empty, action) {
  const { type, payload } = action

  switch (type) {
    case SET_STUDENTS_DATA:
      return payload
    default:
      return state
  }
}
