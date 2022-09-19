export const SET_LAST_DATA = 'SET_LAST_DATA'

export function setLastSessionFormData(data) {
  console.log('setLast', data)
  return {
    type: 'SET_LAST_DATA',
    payload: data,
  }
}
