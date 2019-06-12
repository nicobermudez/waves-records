import React, { Component } from 'react'
import waves from '../../assets/waves.png'
import mood from '../../assets/iconmonstr-smiley-13-240.png'
import listen from '../../assets/iconmonstr-headphones-2-240.png'
import save from '../../assets/iconmonstr-download-15-240.png'

export default class About extends Component {

  render() {
    return (
      <section className="about">
      
        <div className="logo">
          <img src={waves} alt="Waves"/>
        </div>

        <section className="landing-page">
          <p>Waves Records is a music-based platform aimed to facilitate the music searching process. Simply take a selfie or use an old photo of you which you feel captures your current state of mind, and we'll take care of the rest. Based on your current mood, Waves Records will curate a set of perfect playlists for you through Spotify, allowing you to save or remove any playlists through the app.</p>

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

          <footer>
            <p>Made by &copy; Nico</p>
          </footer>
        </section>
      </section>
    )
  }
}
