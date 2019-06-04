import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/fetchPlaylists'

class Mood extends Component {
  state = {
    mood: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.fetchPlaylists(this.state)
    this.props.dispatch({type: 'ADD_MOOD', payload: this.state})
    this.setState({
      mood: ""
    })
  }

  render() {

    return (
      <div className="mood">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="mood"
            className="input"
            id="mood"
            value={this.state.mood}
            onChange={this.handleChange}
          />
          <input
            className="submit"
            type="submit"
          />
        </form>
      </div>
    )
  }
}

export default connect()(Mood)
