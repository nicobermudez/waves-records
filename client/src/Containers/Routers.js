import React, { Component } from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Auth from '../Components/Auth'
import Mood from '../Components/Mood'


class Routers extends Component {

  render() {
    return (
      <Router>
        <div class="Nav-bar">
          <Link to="/login">Log In</Link>
          <Link to="/analyze">Analyze</Link>
        </div>
        <Route exact path='/login' component={Auth} />
        <Route exact path ='/analyze' component={Mood} />
      </Router>
    )
  }

}
 export default Routers
