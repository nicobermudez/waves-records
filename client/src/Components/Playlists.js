import React, { Component } from 'react'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    let mood = "happy"
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer BQCFX-62FIetLbG73HzmTuaS56bL0_7Z3AOibz85PyQTWgCXfwXfLUbsKmo6Yk7e_s5jhTbeLUKTCVTXgFEpMv-FXAxMrZqZraIFL-04P8rdzeUIQ7c9Hxe1ipka5lQUp_ZTNwkDbPWEERLC8m6xq4Q1XdSIMrsr",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          playlists: data.playlists.items
        })
      })
  }

  renderPlaylists = () => {
    return this.state.playlists.map(playlist => {
      return (
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify}>
              <img src={playlist.images[0].url} />
              <h3>{playlist.name}</h3>
            </a>
          </div>

      )
    })
  }

  render() {
    return (
      <>
        <h1>Featured</h1>
        <div className="playlists">
          {this.renderPlaylists()}
        </div>
      </>

    )
  }


}
