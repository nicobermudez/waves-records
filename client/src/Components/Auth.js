import React, { Component } from 'react'

export default class Auth extends Component {
  
  render() {
    return(
      <div className="login">
        <a href="http://localhost:3001/api/v1/login" >Login with Spotify</a>
      </div>

    )
  }
}
