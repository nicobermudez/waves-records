import React, { Component } from 'react'
import Login from '../Components/auth/Login'
import waves from '../assets/waves.png'
import mood from '../assets/iconmonstr-smiley-13-240.png'
import listen from '../assets/iconmonstr-headphones-2-240.png'
import save from '../assets/iconmonstr-download-15-240.png'

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
          <div className="items">
            <div className="item">
              <img src={mood} alt="mood"/>
              <h4>Analyze Mood</h4>
              <p>Analyze your current mood by taking a selfie or uploading a picture</p>
            </div>
            <div className="item">
              <img src={listen} alt="mood"/>
              <h4>Listen</h4>
              <p>Listen to the perfect playlist for the present moment</p>
            </div>
            <div className="item">
              <img src={save} alt="mood"/>
              <h4>Save</h4>
              <p>Save your playlists so you can come back and listen later</p>
            </div>
          </div>
        </section>

      </>
    )
  }
}
