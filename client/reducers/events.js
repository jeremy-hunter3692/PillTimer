import { SET_EVENTS_DATA } from '../Actions/eventsActions.js'

const empty = []

export default function setEvents(state = empty, action) {
  const { type, payload } = action
  switch (type) {
    case SET_EVENTS_DATA:
      return [...state, ...payload]
    default:
      return state
  }
}
