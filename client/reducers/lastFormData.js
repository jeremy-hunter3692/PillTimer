import { SET_LAST_DATA } from '../Actions/lastFormActions'

const init = {}

export default function lastForm(state = init, action) {
  const { type, payload } = action

  switch (type) {
    case SET_LAST_DATA:
      return payload
    default:
      return state
  }
}
