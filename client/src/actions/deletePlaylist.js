export const deletePlaylist = (playlist) => {
  return (dispatch) => {
    let url = "http://localhost:3000/api/playlists/" + playlist.id
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playlist.name,
        href: playlist.href,
        image: playlist.image
      }),
      credentials: "include"
    })
      .then(response => response.json())
      .then(playlists => {
        if(playlists.error) {
          console.log(playlists.error)
        } else {
          dispatch({ type: "DELETE_PLAYLIST", playlists })
        }
      })
  }
}
export default deletePlaylist
