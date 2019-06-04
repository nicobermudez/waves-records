import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Components/Login'
import Mood from '../Components/Mood'
import waves from '../assets/waves.png'
import home from '../assets/iconmonstr-home-1-240.png'
import logout from '../assets/iconmonstr-log-out-9-240.png'
import playlists from '../assets/iconmonstr-equalizer-1-240.png'


class Routers extends Component {

  render() {
    return (
      <Router>
        <img src={waves} />
        <div className="Nav-bar">
          <div className="link">
            <img src={home}/><Link to="/">Home</Link>
          </div>
          <div className="link">
            <img src={playlists}/><Link to="/playlists">Playlists</Link>
          </div>
          <div className="link">
            <img src={logout}/><Link to="/login">Log Out</Link>
          </div>
        </div>
      </Router>
    )
  }

}
 export default Routers
