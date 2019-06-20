import React from 'react'

const Search = props => {

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

export default Search;
