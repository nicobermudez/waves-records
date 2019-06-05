import React, { Component } from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'


class App extends Component {

  // componentDidMount() {
  //   this.props.fetchCurrentUser();
  // }

  loggedIn = () => {
    console.log(localStorage)
  }

  render() {
      // if user is logged in, show home, else landing page
      if(!this.loggedIn()) {
        return (
          <div className="App">
            <NavBar />
          </div>
        );
      } else {
        return (
          <div className="App">
            <LandingPage />
          </div>
        );
      }

  }
}

export default App;
