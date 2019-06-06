export function fetchPlaylists(mood, token) {
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"

    return (dispatch) => {
      dispatch({ type: "LOAD_PLAYLISTS" });
      return fetch(url, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => dispatch({ type: "FETCH_PLAYLISTS", payload: data }))
    }
}
