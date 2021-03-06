import React from 'react'
import spotify_login from '../../assets/spotify_login.png'

const handleClick = event => {
    window.location = "https://sheltered-waters-54715.herokuapp.com/api/auth/login"
  }

const Login = () => {
  return (
    <div className="login-auth">
      <input
        type="image"
        onClick={event => handleClick(event)}
        src={spotify_login}
        alt="Login with Spotify"
      />
    </div>
  )
}



export default Login
