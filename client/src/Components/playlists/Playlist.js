import React from 'react'
import PlaylistInput from './PlaylistInput'

const Playlist = props => {

    return (
      <div className="playlist" key={props.playlist.id}>
        <a href={props.playlist.href}>
          <img src={props.playlist.cover_image} alt=""/>
        </a>
        <div className="save">
          <h3>{props.playlist.name}</h3>

          <PlaylistInput
            playlist={props.playlist}
            addPlaylist={props.addPlaylist}
            deletePlaylist={props.deletePlaylist}
            favorited={true}
          />

        </div>
      </div>
    )
}

export default Playlist;
