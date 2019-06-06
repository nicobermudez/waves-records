import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/fetchPlaylists'
import store from '../store'
import { Redirect } from 'react-router-dom'

class Mood extends Component {
  state = {
    mood: "",
    playlists: []
  }

  handleChange = event => {
    this.setState({
      mood: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchPlaylists(this.state, store.getState().currentUser.user.access_token)
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

const mapStateToProps = state => {
  return {
    mood: state.mood,
    playlists: state.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(Mood)
