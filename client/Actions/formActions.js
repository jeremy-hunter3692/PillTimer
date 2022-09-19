export const SET_CURRENT_DATA = 'SET_CURRENT_DATA'
export const GET_CURRENT_DATA = 'GET_CURRENT_DATA'
export const SET_LAST_FORMDATA = 'GET_LAST_FORMDATA'

export function setTodaysFormData(data) {
  return {
    type: 'SET_CURRENT_DATA',
    payload: data,
  }
}

export function getTodaysFormData() {
  return {
    type: 'GET_CURRENT_DATA',
  }
}

export function setLastSessionFormData() {
  return {
    type: 'SET_LAST_FORMDATA',
  }
}
