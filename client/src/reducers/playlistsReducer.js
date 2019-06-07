export default function playlistsReducer(state = {
  playlists: [],
}, action) {

  switch(action.type) {

    case 'FETCH_PLAYLISTS':
      let playlists = action.payload.playlists.items
      return { playlists }
      
    default:
      return state;
  }
}
