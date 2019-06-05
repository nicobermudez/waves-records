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
            Authorization: "Bearer BQACOB_Y0pOz9eYd-x8xb5IjZxaDj11RbC1z4_fGWkFGDY9EKp_dufL7vds5VbLnoYI9qwbB-k1KjgX0EfR0kYcQ1gg6BLauxd-C0p4RTqPVBC8E64fatuDSJAh31cCMDqgf6uj3IvM52xvnchUs99xafm3mjnl2",
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
