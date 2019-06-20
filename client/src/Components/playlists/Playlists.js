import React from 'react'
import Playlist from './Playlist'

const Playlists = props => {

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
            addPlaylist={this.props.addPlaylist}
            deletePlaylist={this.props.deletePlaylist}
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

export default Playlists;
