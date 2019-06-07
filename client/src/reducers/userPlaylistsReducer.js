export default function userPlaylistsReducer(state = {
  user_playlists: [],
}, action) {

  switch(action.type) {

    case 'ADD_USER_PLAYLISTS':
      console.log(action)
      return { user_playlists: action }

    default:
      return state;
  }
}
