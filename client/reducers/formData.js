import {
  SET_CURRENT_DATA,
  GET_CURRENT_DATA,
  SET_LAST_FORMDATA,
} from '../Actions/formActions'

const emptyForm = {
  date: ' ',
  hour: ' ',
  studentNotes: ' ',
  teacherNotes: ' ',
  name: ' ',
}

export default function form(state = emptyForm, action) {
  const { type, payload } = action

  switch (type) {
    case SET_CURRENT_DATA:
      return { ...state, ...payload }
    case GET_CURRENT_DATA:
      //unsure if payload is correct here
      return payload

    case SET_LAST_FORMDATA:
      return state
    default:
      return state
  }
}
