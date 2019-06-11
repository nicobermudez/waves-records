import React, { Component } from 'react'
import spotify_login from '../../assets/spotify_login.png'

class Login extends Component  {

  handleClick = event => {
    window.location = "https://sheltered-waters-54715.herokuapp.com/api/auth/login"
  }

  render() {
    return(
      <div className="login-auth">
        <input
          type="image"
          onClick={this.handleClick}
          src={spotify_login}
          alt="Login with Spotify"
        />
      </div>
    )
  }
}

export default Login
