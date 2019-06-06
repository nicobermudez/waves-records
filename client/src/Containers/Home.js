import React, { Component } from 'react'
import Mood from '../Components/Mood'
import Featured from '../Components/Featured'
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/fetchPlaylists'
import store from '../store'

class Home extends Component {

  // state = {
  //   user: store.getState().currentUser.user,
  //   mood: "Happy",
  //   playlists: this.props.playlistsReducer
  // }

  fetchPlaylistsFromHome = () => {
    // if(this.state.mood == "") {
    //   this.setState({
    //     mood: "Happy"
    //   })
    // }
    this.props.fetchPlaylists(this.props.mood, this.props.user.access_token)
  }

  handleMoodChange = event => {
    if(event) {
      this.setState({
        mood: event.target.value
      })
    }
  }

  handleMoodSubmit = event => {

    if(event) {
      event.preventDefault()
      this.fetchPlaylistsFromHome()
      this.setState({
        mood: ""
      })
    }
  }

  componentDidMount() {
    if(this.props.playlists.length == 0) {
      this.fetchPlaylistsFromHome()
    }
  }


  render() {
    return (
      <>
        <section className="home">
          <h1>Featured</h1>

          <Mood
            handleMoodChange={this.handleMoodChange}
            handleMoodSubmit={this.handleMoodSubmit}
            playlists={this.props.playlists}
            mood={this.props.mood}
          />

          <Featured
            fetchPlaylistsFromHome={this.fetchPlaylistsFromHome()}
            playlists={this.props.playlists}
            mood={this.props.mood}
          />
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser.user,
    mood: state.mood.mood,
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps, { fetchPlaylists })(Home)
