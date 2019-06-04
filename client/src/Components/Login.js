import React, { Component } from 'react'
import spotify_login from '../assets/spotify_login.png'

class Login extends Component  {

  state = {
    currentUser: null
  }

  handleChange = event => {
    event.preventDefault()
    // window.location.href = "http://localhost:3000/auth/login"
    // Now I need to authenticate user and if valid send the user back
    // with that response, set the state

    const user = this.state.currentUser
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    }

    fetch("http://localhost:3000/login", headers)
      .then(response => response.json())
      .then(data => {
        if(data.error) {
          alert("Invalid Credentials")
        } else {
          this.setState({
            currentUser: data
          })
        }
      })
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
