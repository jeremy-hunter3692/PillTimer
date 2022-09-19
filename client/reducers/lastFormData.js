import { SET_LAST_DATA } from '../Actions/lastFormActions'

const emptyForm = {}

export default function lastForm(state = emptyForm, action) {
  const { type, payload } = action
  console.log('lastFormData', action)

  switch (type) {
    case SET_LAST_DATA:
      return payload
    default:
      return state
  }
}
