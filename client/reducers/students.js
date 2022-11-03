import { SET_STUDENTS_DATA } from '../Actions/studentsActions.js'

const empty = []

export default function students(state = empty, action) {
  const { type, payload } = action
  switch (type) {
    case SET_STUDENTS_DATA:
      return [...state, ...payload]
    default:
      return state
  }
}
