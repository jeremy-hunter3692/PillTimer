import { SET_CURRENT_DATA } from '../Actions/currentFormActions'

export default function currentForm(state = {}, action) {
  const { type, payload } = action
  console.log('reducer', action)
  switch (type) {
    case SET_CURRENT_DATA:
      return [...state, ...payload]
    default:
      return state
  }
}
