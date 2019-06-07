import React, { Component } from 'react'
import Login from '../Components/auth/Login'
import waves from '../assets/waves.png'

export default class LandingPage extends Component {

  render() {
    return (
      <>
        <div className="logo">
          <img src={waves} alt="Waves"/>
        </div>
        <section className="landing-page">
          <h1>Curate Spotify playlists based on your current mood</h1>
          <p>Simply take a selfie and we'll take care of the rest!</p>
          <Login />
          <h3>Why use Waves Music?</h3>
        </section>
      </>
    )
  }
}
