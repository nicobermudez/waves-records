import React, { Component } from 'react'

class Mood extends Component {

  render() {
    return (
      <div className="mood">
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input
            type="text"
            name="mood"
            className="input"
            id="mood"
            value={this.props.mood}
            onChange={event => this.props.handleChange(event)}
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


export default Mood
