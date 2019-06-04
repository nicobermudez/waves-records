import React, { Component } from 'react'
import liked from '../../assets/iconmonstr-favorite-3-240 (1).png'
import not_liked from '../../assets/iconmonstr-favorite-4-240.png'

export default class PlaylistInput extends Component {
  state = {
    favorite: false
  }

  handleOnChange(event) {
    if (this.state.favorite == false) {
      this.setState({
        favorite: true
      })
      console.log(event.target)
      // this.props.dispatch({type: 'ADD_PLAYLIST', payload: event.target})
    } else {
      this.setState({
        favorite: false
      })
    }
  }

  render() {
    if(this.state.favorite == false) {
      return (
        <div className="liked">
          <input
            type="image"
            onClick={(event) => this.handleOnChange(event)}
            src={not_liked}
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
          />
        </div>
      )
    }
  }
}
