import React, { Component } from 'react'

export default class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    fetch('')
  }

  render() {
    return (
      <div>
        {this.state.playlists.map(playlist => playlist.name)}
      </div>
    )
  }


}
