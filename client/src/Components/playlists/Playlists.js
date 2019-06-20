import React from 'react'
import Playlist from './Playlist'

const Playlists = props => {

    if(props.playlists.length === 0) {
      return (
        <div className="empty">
          <h1> You currently do not have any saved playlists. </h1>
        </div>
      )
    } else {
      const playlistList = props.playlists.map(playlist => {
        return (

          <Playlist
            key={playlist.id}
            playlist={playlist}
            addPlaylist={props.addPlaylist}
            deletePlaylist={props.deletePlaylist}
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
