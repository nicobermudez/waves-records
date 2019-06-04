import React, { Component } from 'react'
import spotify_login from '../assets/spotify_login.png'

class Login extends Component  {

  handleChange = event => {
    event.preventDefault()
    // window.location.href = "http://localhost:3000/auth/login"
    // Now I need to authenticate user and if valid send the user back
    // with that response, set the state

    fetch()
      .then()
      .then()

  }

  render() {
    return(
      <div className="login-auth">
        <input
          type="image"
          onClick={this.handleChange}
          src={spotify_login}
        />
      </div>

    )
  }
}

export default Login
