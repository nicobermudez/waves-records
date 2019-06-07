import React, { Component } from 'react'
import spotify_login from '../../assets/spotify_login.png'

class Login extends Component  {

  handleClick = event => {
    window.location = "http://localhost:3000/api/auth/login"
  }

  render() {
    return(
      <div className="login-auth">
        <input
          type="image"
          onClick={this.handleClick}
          src={spotify_login}
        />
      </div>
    )
  }
}

export default Login
