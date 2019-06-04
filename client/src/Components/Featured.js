import React, { Component } from 'react'
import PlaylistInput from './playlists/PlaylistInput'

export default class Featured extends Component {
  state = {
    featuredPlaylists: []
  }

  componentWillMount() {
    let featured = "hits"
    let url = "https://api.spotify.com/v1/search?q=" + featured + "&type=playlist&limit=9"
    fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer BQDpgqw693v720JfclJOF5_fsegiTl4N5hUGqDjqBOce88JbJuSfLU0HCTLwKqLZjxEMoHJEu0Q4RbenWqqbf5T5mtOmAaqp5bs4qLDBw9FD0AuRizvHiSupeJunHoGUE27v3D3GXtaevdM6ufjqqxgsMTkRqsPq",
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
              featuredPlaylists: data.playlists.items
            })
          })
  }

  render() {
    return(
      <div className="playlists">
        {this.state.featuredPlaylists.map(playlist =>
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify} key={playlist.id}>
              <img src={playlist.images[0].url} />
            </a>
            <div className="save">
              <h3>{playlist.name}</h3>
              <PlaylistInput addPlaylist={this.props.addPlaylist}/>
            </div>
          </div>
        )}
      </div>
    )
  }
}
