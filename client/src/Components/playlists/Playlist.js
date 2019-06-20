import React from 'react'
import PlaylistInput from './PlaylistInput'

const Playlist = props => {

    return (
      <div className="playlist" key={this.props.playlist.id}>
        <a href={this.props.playlist.href}>
          <img src={this.props.playlist.cover_image} alt=""/>
        </a>
        <div className="save">
          <h3>{this.props.playlist.name}</h3>

          <PlaylistInput
            playlist={this.props.playlist}
            addPlaylist={this.props.addPlaylist}
            deletePlaylist={this.props.deletePlaylist}
            favorited={true}
          />

        </div>
      </div>
    )
}

export default Playlist;
