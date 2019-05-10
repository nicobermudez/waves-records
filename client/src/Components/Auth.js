import React, { Component } from 'react'

export default class Auth extends Component {

  handleLogin = (event) => {
    try {
      console.log("OAuth")
    } catch(error) {
      throw(error)
    }
  }

  render() {
    return(
      <div className="login">
        <button onClick={ event => this.handleLogin(event)}>Login with Spotify
        </button>
      </div>

    )
  }
}
