import React, { Component } from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import LandingPage from './Containers/LandingPage'
import fetchCurrentUser from './actions/fetchCurrentUser'
import { connect } from 'react-redux'


class App extends Component {

componentWillMount() {
    this.props.fetchCurrentUser();
}

  render() {
      // if user is logged in, show home, else direct to landing page
      if(Object.entries(this.props.currentUser).length != 0) {
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


export default connect(mapStateToProps, { fetchCurrentUser })(App);
