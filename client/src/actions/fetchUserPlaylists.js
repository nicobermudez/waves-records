export const fetchUserPlaylists = () => {

  return (dispatch) => {
    fetch("https://sheltered-waters-54715.herokuapp.com/api/playlists", {
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
