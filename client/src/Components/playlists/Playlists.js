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
