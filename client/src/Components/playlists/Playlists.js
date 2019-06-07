import React, { Component } from 'react'
import Playlist from './Playlist'
import { connect } from 'react-redux'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
  }


  render() {
    const playlistList = this.state.playlists.map(playlist => {
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
