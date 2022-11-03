import { SET_CURRENT_DATA } from '../Actions/currentFormActions'

const emptyForm = {
  studentId: '',
  teacherId: '',
  start: '',
  end: '',
  studentNotes: '',
  teacherNotes: '',
  name: 'empty',
}

export default function currentForm(state = emptyForm, action) {
  const { type, payload } = action
  // console.log('reducer', action)
  switch (type) {
    case SET_CURRENT_DATA:
      return { ...state, payload }
    default:
      return state
  }
}
