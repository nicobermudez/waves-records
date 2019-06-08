import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PlaylistsContainer from './PlaylistsContainer'
import Home from './Home'
import Logout from '../Components/auth/Logout'
import waves from '../assets/waves.png'
import home from '../assets/iconmonstr-home-1-240.png'
import logout from '../assets/iconmonstr-log-out-9-240.png'
import playlists from '../assets/iconmonstr-equalizer-1-240.png'
import link from '../assets/iconmonstr-share-9-240.png'

class NavBar extends Component {

  render() {
    return (
      <Router>
      <header className="App-header">
        <img src={waves} alt="Waves"/>
        <div className="Nav-bar">
          <div className="link">
            <img src={home} alt="" /><Link to="/">Home</Link>
          </div>
          <div className="link">
            <img src={playlists} alt=""/><Link to="/playlists">Playlists</Link>
          </div>
          <div className="link">
            <img src={link} alt=""/><a href="https://open.spotify.com/browse/featured">Spotify</a>
          </div>
          <div className="link">
            <img src={logout} alt=""/><Link to="/logout">Log Out</Link>
          </div>
          <div className="profile-image">
            <img src={this.props.currentUser.user.image} alt=""/>
          </div>
        </div>
      </header>

        <Route exact path="/" component={Home} />
        <Route exact path="/playlists" component={PlaylistsContainer} />
        <Route exact path="/logout" component={Logout} />
      </Router>
    )
  }
}

 export default NavBar
