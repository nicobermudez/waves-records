import React, { Component } from 'react'
import Mood from '../Components/Mood'
import Featured from '../Components/Featured'

export default class Home extends Component {

  componentDidMount() {
    const { currentUser } = this.props;
  }

  render() {
    return (
      <>
        <section className="home">
          <h1>Featured</h1>
          <Mood />
          <Featured />
        </section>
      </>
    )
  }
}
