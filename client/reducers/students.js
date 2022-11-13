import { SET_STUDENTS_DATA } from '../Actions/studentsActions.js'

const init = []

export default function students(state = init, action) {
  const { type, payload } = action
  switch (type) {
    case SET_STUDENTS_DATA:
      return payload
    default:
      return state
  }
}
