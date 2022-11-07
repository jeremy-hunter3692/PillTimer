import { SET_LAST_DATA } from '../Actions/lastFormActions'

export default function lastForm(state = {}, action) {
  const { type, payload } = action

  switch (type) {
    case SET_LAST_DATA:
      return payload
    default:
      return state
  }
}
