import React, { Component } from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import Home from './Containers/Home'
import LandingPage from './Containers/LandingPage'
import LogInUser from './actions/loginUser';
import setCurrentUser from './actions/currentUser'
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

    // insecure solution to get from url query
    this.props.LogInUser(window.location)
  }

  // temporary solution -> should be a state
  // setCurrentUser = () => {
  //   if(localStorage.getItem('jwt')) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  render() {
      // if user is logged in, show home, else direct to landing page
      // Object.entries(this.props.currentUser).length != 0
      if(true) {
        return (
          <div className="App">
            <NavBar currentUser={this.props.currentUser}/>
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user
  }
}


export default connect(mapStateToProps, { LogInUser })(App);
