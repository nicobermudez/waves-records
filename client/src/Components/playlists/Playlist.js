import React, { Component } from 'react'
import PlaylistInput from './PlaylistInput'

export default class Playlist extends Component {

  render() {
    return (
      <div className="playlist" key={this.props.playlist.id}>
        <a href={this.props.playlist.href}>
          <img src={this.props.playlist.image} alt=""/>
        </a>
        <div className="save">
          <h3>{this.props.playlist.name}</h3>

          <PlaylistInput
            playlist={this.props.playlist}
            addPlaylist={this.props.addPlaylist}
            isFavorited={true}
            deletePlaylist={this.props.deletePlaylist}
          />
          
        </div>
      </div>
    )
  }
}
