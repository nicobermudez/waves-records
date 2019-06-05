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
            Authorization: "Bearer BQB3zr09C4m9gTCOn1B7awnuZN2A3sSy1IONJkdRONqV2NX3hyvF1OpCtWL6myXyVgn1hKmULjK_SU07eBOjvP-zEuxCs4k4i-RN_z498twH3_EH1PrS-fo_dAz3C-E62D9cbUNiTXAp_iSxNdCX3VJ2kkqgRJy0",
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
