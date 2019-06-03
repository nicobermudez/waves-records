import React, { Component } from 'react'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    let mood = "hits"
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer BQBQtGxw6888nwjQFAH66exeTgl5quqMBxA_I_gOJvbWwW4Qlvy2b5crISlq4U9sQjB5Z3NWCWXsreLAK0izEoS0I_4y3Ga8S7gIWWK6aPJiWPos5ZMwu7Vt2FOnCa7pGcHH37FU9gEhkIR9qiP9i1fuJ7kjVxuz",
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
        <a href={playlist.external_urls.spotify} key={playlist.id}>
          <div className="playlist" key={playlist.id}>
            <img src={playlist.images[0].url} />
            <h3>{playlist.name}</h3>
          </div>
      </a>
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
