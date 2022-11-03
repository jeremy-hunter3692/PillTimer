import { getLastSessionById, getSessions, addSessions } from '../sessionsAPI'
export const SET_EVENTS_DATA = 'SET_EVENTS_DATA'

export function setEventsData(data) {
  return {
    type: SET_EVENTS_DATA,
    payload: data,
  }
}

export function addEvents(data) {
  return (dispatch) => {
    addSessions(data)
      .then(() => {
        dispatch(setEventsData(data))
      })
      .catch((error) => {
        console.log('actions', error)
      })
  }
}

export function fetchEvents() {
  return (dispatch) => {
    getSessions()
      .then((sessions) => {
        dispatch(setEventsData(sessions))
      })
      .catch((error) => {
        console.log('actions', error)
      })
  }
}
