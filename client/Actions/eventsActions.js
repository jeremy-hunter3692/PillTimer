import { getLastSessionById, getSessions, addSessions } from '../sessionsAPI'
export const SET_EVENTS_DATA = 'SET_EVENTS_DATA'
export const ADD_EVENTS_DATA = 'ADD_EVENTS_DATA'
export const SET_ERROR = 'SET_ERROR'

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}

export function setEventsData(data) {
  return {
    type: SET_EVENTS_DATA,
    payload: data,
  }
}

export function addEventsData(data) {
  return {
    type: ADD_EVENTS_DATA,
    payload: data,
  }
}

export function addEvents(data) {
  return (dispatch) => {
    return addSessions(data)
      .then(() => {
        dispatch(addEventsData(data))
      })
      .catch((error) => {
        console.log('actions', error)
      })
  }
}

export function fetchEvents() {
  return (dispatch) => {
    return getSessions()
      .then((sessions) => {
        dispatch(setEventsData(sessions))
      })
      .catch((error) => {
        dispatch(setError(error.message))
      })
  }
}
