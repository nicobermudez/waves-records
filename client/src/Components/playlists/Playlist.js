import React, { Component } from 'react'
import PlaylistInput from './PlaylistInput'

export default class Playlist extends Component {

  render() {
    const { playlist } = this.props
    debugger
    return (
      <div className="playlist" key={playlist.id}>
        <a href={playlist.external_urls.spotify} key={playlist.id}>
          <img src={playlist.images[0].url} />
        </a>
        <div className="save">
          <h3>{playlist.name}</h3>
          <PlaylistInput addPlaylist={this.props.addPlaylist}/>
        </div>
      </div>
    )
  }
}
