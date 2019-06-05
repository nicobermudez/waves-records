import React, { Component } from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import LoginUser from './actions/loginUser';

import { connect } from 'react-redux'


class App extends Component {

  // componentDidMount() {
  //   this.props.fetchCurrentUser();
  // }

  componentWillMount() {
    // let url = "http://localhost:3000/api/users"
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    LoginUser(window.location)
  }

  setCurrentUser = () => {
    console.log(localStorage)
    if(localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  render() {
      // if user is logged in, show home, else landing page
      if(this.setCurrentUser()) {
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

// const mapStateToProps = state => {
//   return {
//     currentUser: state.currentUser.user
//   }
// }

export default App;
