export const fetchUserPlaylists = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/playlists", {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())
      .then(playlists => {
        if(playlists.error) {
          console.log(playlists.error)
        } else {
          dispatch({ type: "FETCH_USER_PLAYLISTS", playlists })
        }
      })

  }
}
export default fetchUserPlaylists
