import React, { Component } from 'react'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          playlists: data.people
        })
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
