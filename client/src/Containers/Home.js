import React, { Component } from 'react'
import Auth from '../Components/Auth'
import Mood from '../Components/Mood'
import Playlists from '../Components/Playlists'

export default class Home extends Component {

  // componentDidMount = () => {
  //   this.fetchUser()
  // }
  //
  // fetchUser = () => {
  //
  // }

  render() {
    return (
      <>
        {/*<Auth />*/}
        <div className="login">
          <Mood />
        </div>

        <div className="featured">
          <Playlists />
        </div>

      </>



    )
  }
}
