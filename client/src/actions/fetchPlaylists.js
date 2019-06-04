export function fetchPlaylists() {
  return(dispatch) => {
    dispatch({
      type: 'LOAD_PLAYLISTS'
    })

    let mood = "hits"
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    return fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer BQCy52h7Psu7KiRoSuKJ6PZNG_39ZCx3FKeaDxVDqxENRIpXzW5cRQTKfph_kO2cf33UaCKViLkBz8L6prSuElgZrE6sxD533MVudeNjxTKqoyYFE28aV6lOKTVPcphjLcKLyVQIXtg3fi-vKYqv9-z6IWt0u_ul",
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {dispatch({
            type: 'FETCH_PLAYLISTS', playlists
          })})
  }
}
