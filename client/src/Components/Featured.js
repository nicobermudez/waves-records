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
            Authorization: "Bearer BQAwxft_BXNztTtbD25yK94acHGUdUj71TL34qz_C7of2-dHLgLZePpEmOW9ZruABeYid_F6Ls9ZSnr-K2Iez7EQ0Z7iSWSd_HH9xjlZ5Dc2ibvt_aTd1rz6D2kYwpze32hosrRTJz_5L3k-XV4jgGG3Z_IJO4AW",
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
