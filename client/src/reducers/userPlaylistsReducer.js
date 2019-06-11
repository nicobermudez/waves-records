export default function userPlaylistsReducer(state = {
  user_playlists: [],
}, action) {

  switch(action.type) {

    case 'FETCH_USER_PLAYLISTS':
      return { user_playlists: action.playlists }

    case 'ADD_PLAYLIST':
      return { ...state, user_playlists: state.user_playlists.concat(action.playlist) }

    case 'DELETE_PLAYLIST':
      return { user_playlists: action.playlists }

    default:
      return state;
  }
}
