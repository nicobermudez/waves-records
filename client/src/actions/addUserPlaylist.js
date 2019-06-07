export const addUserPlaylist = (playlist) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/playlists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: playlist.name,
        href: playlist.external_urls.spotify,
        image: playlist.images[0].url
      }),
      credentials: "include"
    })
      .then(response => response.json())
      .then(playlists => {
        if(playlists.error) {
          console.log(playlists.error)
        } else {
          dispatch()
        }
      })
  }
}
export default addUserPlaylist
