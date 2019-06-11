import React, { Component } from 'react'

export default class Search extends Component {

  render() {
    return (
      <div className="mood">
        <form onSubmit={event => this.props.handleSearchSubmit(event)}>
          <input
            type="text"
            name="mood"
            className="input"
            id="mood"
            placeholder="Search"
            onChange={event => this.props.handleSearchChange(event)}
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
