import { getAllStudents } from '../studentsAPI'
export const SET_STUDENTS_DATA = 'SET_STUDENTS_DATA'

export function setStudents(data) {
  return {
    type: SET_STUDENTS_DATA,
    payload: data,
  }
}

export function fetchStudents() {
  return (dispatch) => {
    return getAllStudents()
      .then((students) => {
        dispatch(setStudents(students))
      })
      .catch((error) => {
        console.log('actions', error)
      })
  }
}
