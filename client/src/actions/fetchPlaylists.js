export function fetchPlaylists(mood) {
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    const playlists = fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer BQDpgqw693v720JfclJOF5_fsegiTl4N5hUGqDjqBOce88JbJuSfLU0HCTLwKqLZjxEMoHJEu0Q4RbenWqqbf5T5mtOmAaqp5bs4qLDBw9FD0AuRizvHiSupeJunHoGUE27v3D3GXtaevdM6ufjqqxgsMTkRqsPq",
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
      return {
        type: 'FETCH_PLAYLISTS',
        playlists
      }
}
