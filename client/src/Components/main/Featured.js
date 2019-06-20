import React from 'react'
import PlaylistInput from '../playlists/PlaylistInput'

const Featured = props => {

    return (
      <div className="playlists">
        {props.playlists.map(playlist =>
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify} key={playlist.id}>
              <img src={playlist.images[0].url} alt="" />
            </a>
            <div className="save">
              <h3>{playlist.name}</h3>
              <PlaylistInput
                addPlaylist={props.addPlaylist}
                playlist={playlist}
                isFavorited={false}
              />
            </div>
          </div>
        )}
      </div>
    )
}

export default Featured;
