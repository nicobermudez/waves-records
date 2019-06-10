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

active_user = () => {
  if(Object.entries(this.props.currentUser).length !== 0) {
    return true
  }  else {
    return false
  }
}

// componentDidMount() {
//   debugger
//   if(this.active_user()) {
//     this.props.fetchUserPlaylists();
//   }
//
// }

  render() {
      // if user is logged in, show home, else direct to landing page
      if(this.active_user()) {
        return (
          <div className="App">
            <NavBar
              currentUser={this.props.currentUser}
              userPlaylists={this.props.userPlaylists}
            />
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
    currentUser: state.currentUser.user,
    userPlaylists: state.userPlaylists.user_playlists
  }
}


export default connect(mapStateToProps, { fetchCurrentUser })(App);
