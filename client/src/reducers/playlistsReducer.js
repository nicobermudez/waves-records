export default function playlistsReducer(state = {
  playlists: [],
}, action) {
  switch(action.type) {

    case 'FETCH_PLAYLISTS':
      return { playlists: action.payload.playlists.items }

    default:
      return state;
  }
}
