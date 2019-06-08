export default function playlistsReducer(state = {
  playlists: [],
}, action) {

  switch(action.type) {

    case 'FETCH_PLAYLISTS':
      let playlists = action.payload.playlists.items
      if(playlists.length > 0) {
        playlists.forEach(function(item) {
          item["favorited"] = false
        });
      }
      return { playlists }
      
    default:
      return state;
  }
}
