import React, { Component } from 'react'
import Playlist from './Playlist'
import { connect } from 'react-redux'

export default class Playlists extends Component {

  render() {
    if(this.props.playlists.length === 0) {
      return (
        <div className="empty">
          <h1> You currently do not have any saved playlists. </h1>
        </div>
      )
    } else {
      const playlistList = this.props.playlists.map(playlist => {
        return (
          <Playlist
            key={playlist.id}
            playlist={playlist}
            addPlaylist={this.props.addPlaylists}
          />
        )
      });

      return (
        <div className="playlists">
          {playlistList}
        </div>
      )
    }
    }
}
