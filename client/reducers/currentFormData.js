import { SET_CURRENT_DATA } from '../Actions/currentFormActions'

const init = {}

export default function currentForm(state = init, action) {
  const { type, payload } = action
  console.log('current', payload)
  switch (type) {
    case SET_CURRENT_DATA:
      return { ...state, payload }
    default:
      return state
  }
}
