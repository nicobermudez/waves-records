import React, { Component } from 'react'
export default class Mood extends Component {
  state = {
    mood: "Happy"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="mood">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            name="mood"
            id="mood"
            value={this.state.mood}
            onChange={this.handleMoodChange}
          />
        </form>
      </div>

    )
  }
}
