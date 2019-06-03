import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Auth from '../Components/Auth'
import Mood from '../Components/Mood'
import waves from '../assets/waves.png'


class Routers extends Component {

  render() {
    return (
      <Router>
        <img src={waves} />
        <div className="Nav-bar">
          <Link to="/">Home</Link>
          <Link to="/login">Log In</Link>
          <Link to="/analyze">Analyze</Link>
        </div>
      </Router>
    )
  }

}
 export default Routers
