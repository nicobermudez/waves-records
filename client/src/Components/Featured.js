import React, { Component } from 'react'
import PlaylistInput from './playlists/PlaylistInput'

export default class Featured extends Component {
  state = {
    featuredPlaylists: []
  }

  componentWillMount() {
    let mood = "hits"
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer BQD2mE3NI4RkX2pXP11Lz_Ccs4Ucvu9nqEiQ3sBicaZH_KrkcmJ0O9Ka3XuITa9TBAdkB_LLYnqPACZjqp1kFQAavMdBycIFxOhzyCW4CwUSmxwsNPIOSo25V5meHVp_i1IiibVwagKQPuSjq4QloEC26lg-4UvL",
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
