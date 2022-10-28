import { SET_EVENTS_DATA } from '../Actions/eventsActions.js'

const empty = {}

export default function lastForm(state = empty, action) {
  const { type, payload } = action

  switch (type) {
    case SET_EVENTS_DATA:
      return payload
    default:
      return state
  }
}
