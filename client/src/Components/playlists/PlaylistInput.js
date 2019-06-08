import React, { Component } from 'react'
import liked from '../../assets/iconmonstr-favorite-3-240 (1).png'
import not_liked from '../../assets/iconmonstr-favorite-4-240.png'

export default class PlaylistInput extends Component {
  state = {
    favorited: false
  }

  handleOnChange(event) {
    if (this.state.favorite === false) {
      this.setState({
        favorited: true
      })

      // add playlist to user's playlists
      this.props.addPlaylist(this.props.playlist)
    } else {
      this.setState({
        favorited: false
      })

      // delete playlist from user's playlists
      this.props.deletePlaylist(this.props.playlist)
    }
  }

  render() {
    if(this.state.favorite === false || !this.props.isFavorited) {
      return (
        <div className="liked">
          <input
            type="image"
            onClick={(event) => this.handleOnChange(event)}
            src={not_liked}
            alt="Like"
          />
        </div>
      )
    } else {
      return (
        <div className="liked">
          <input
            type="image"
            onClick={(event) => this.handleOnChange(event)}
            src={liked}
            alt="Like"
          />
        </div>
      )
    }
  }
}
