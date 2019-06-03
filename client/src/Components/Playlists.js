import React, { Component } from 'react'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    fetch('http://localhost:3000/playlists')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        {this.state.playlists.map(playlist => playlist.name)}
      </div>
    )
  }


}
