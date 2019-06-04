import React, { Component } from 'react'
import Login from '../Components/Login'
import Mood from '../Components/Mood'
import PlaylistsContainer from './PlaylistsContainer'

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
        <section className="home">
          <Mood />
          <PlaylistsContainer />
        </section>

      </>



    )
  }
}
