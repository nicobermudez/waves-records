import React, { Component } from 'react'
import PlaylistInput from '../playlists/PlaylistInput'

export default class Featured extends Component {

  render() {
    return(

      <div className="playlists">
        {this.props.playlists.map(playlist =>
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