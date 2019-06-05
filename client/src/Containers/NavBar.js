import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PlaylistsContainer from './PlaylistsContainer'
import Home from './Home'
import Logout from '../Components/Logout'
import waves from '../assets/waves.png'
import home from '../assets/iconmonstr-home-1-240.png'
import logout from '../assets/iconmonstr-log-out-9-240.png'
import playlists from '../assets/iconmonstr-equalizer-1-240.png'


class NavBar extends Component {

  render() {
    return (
      <Router>
      <header className="App-header">
        <img src={waves} />
        <div className="Nav-bar">
          <div className="link">
            <img src={home}/><Link to="/">Home</Link>
          </div>
          <div className="link">
            <img src={playlists}/><Link to="/playlists">Playlists</Link>
          </div>
          <div className="link">
            <img src={logout}/><Link to="/logout">Log Out</Link>
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
