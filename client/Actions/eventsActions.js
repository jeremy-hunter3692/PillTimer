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
        console.log('actions2 then', data)
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
        // const filterd = sessions.map((x) => {
        //   console.log('in thunk', x)
        //   return { ...x, title: x.name }
        // })
        dispatch(setEventsData(sessions))
      })
      .catch((error) => {
        console.log('actions', error)
      })
  }
}
