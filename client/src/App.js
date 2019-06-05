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

  }

  componentDidMount() {
    let url = "http://localhost:3000/user"
    fetch(url)
      .then(response => console.log(response.json()))
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
