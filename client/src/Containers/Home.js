import React, { Component } from 'react'
import Auth from '../Components/Auth'
import Mood from '../Components/Mood'

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
      <div className="login">
        <Auth />
        <Mood />
      </div>

    )
  }
}
