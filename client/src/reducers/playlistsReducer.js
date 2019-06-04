export default function playlistsReducer(state = {
  playlists: [],
}, action) {
  switch(action.type) {

    case 'FETCH_PLAYLISTS':
      return action.playlists

    default:
      return state;
  }
}
