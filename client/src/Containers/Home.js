import React, { Component } from 'react'
import Mood from '../Components/main/Mood'
import Featured from '../Components/main/Featured'
import { connect } from 'react-redux'
import { fetchPlaylists } from '../actions/fetchPlaylists'
import { addUserPlaylist } from '../actions/addUserPlaylist'
import { changeMood } from '../actions/changeMood'

class Home extends Component {

  fetchPlaylistsFromHome = () => {
    this.props.fetchPlaylists(this.props.mood, this.props.currentUser.user.access_token)
  }

  handleMoodChange = event => {
    this.props.changeMood(event.target.value)
  }

  handleMoodSubmit = event => {
      event.preventDefault()
      this.fetchPlaylistsFromHome()
  }

  componentWillMount() {
    if(this.props.playlists.length === 0 && Object.entries(this.props.currentUser).length !== 0) {
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
            playlists={this.props.playlists}
            mood={this.props.mood}
            addPlaylist={this.props.addUserPlaylist}
          />
        </section>
      </>
    )
  }
}



const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.user,
    mood: state.mood.mood,
    playlists: state.playlists.playlists
  }
}

// const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, { fetchPlaylists, changeMood, addUserPlaylist })(Home)
