export const SET_EVENTS_DATA = 'SET_EVENTS_DATA'

export function setEventsData(data) {
  return {
    type: SET_EVENTS_DATA,
    payload: data,
  }
}

// export const fetchEvents = (dispatch) => {
//   return

// }

// export const fetchPlaylists = () => (dispatch) => {
//   dispatch(fetchPlaylistsRequest())
//   return getPlaylists()
//     .then((playlists) => {
//       dispatch(fetchPlaylistsSuccess(playlists))
//     })
//     .catch((error) => {
//       dispatch(fetchPlaylistsFailure(error.message))
//     })
// }
