import React, { Component } from 'react'
import PlaylistInput from './PlaylistInput'

export default class Playlist extends Component {

  render() {
    return (
      <div className="playlist" key={this.props.playlist.id}>
        <a href={this.props.playlist.href}>
          <img src={this.props.playlist.image} />
        </a>
        <div className="save">
          <h3>{this.props.playlist.name}</h3>
          <PlaylistInput addPlaylist={this.props.addPlaylist}/>
        </div>
      </div>
    )
  }
}
