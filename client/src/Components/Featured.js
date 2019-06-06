import React, { Component } from 'react'
import PlaylistInput from './playlists/PlaylistInput'
import store from '../store'

export default class Featured extends Component {
  state = {
    featuredPlaylists: []
  }

  componentWillMount() {
    const currentUser = store.getState().currentUser.user;
    const currentMood = store.getState().mood.mood

    // If currentMood is empty default as Happy
    let featured;
    currentMood != "" ? featured = currentMood : featured = "Happy"

    let url = "https://api.spotify.com/v1/search?q=" + featured + "&type=playlist&limit=9"
    fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + currentUser.access_token,
            "Content-Type": "application/json"
          }
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
              featuredPlaylists: data.playlists.items
            })
          })
  }

  render() {
    return(
      <div className="playlists">
        {this.state.featuredPlaylists.map(playlist =>
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify} key={playlist.id}>
              <img src={playlist.images[0].url} />
            </a>
            <div className="save">
              <h3>{playlist.name}</h3>
              <PlaylistInput addPlaylist={this.props.addPlaylist}/>
            </div>
          </div>
        )}
      </div>
    )
  }
}
