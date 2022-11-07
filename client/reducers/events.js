import { SET_EVENTS_DATA, ADD_EVENTS_DATA } from '../Actions/eventsActions.js'

export default function events(state = {}, action) {
  const { type, payload } = action
  console.log('payload', payload, action)
  switch (type) {
    case SET_EVENTS_DATA:
      return [...state, ...payload]
    case ADD_EVENTS_DATA:
      return [...state, payload]
    default:
      return state
  }
}
