import React, { Component } from 'react'
import Mood from '../Components/main/Mood'
import Featured from '../Components/main/Featured'
import ImageUploader from 'react-images-upload';
import { fetchPlaylists } from '../actions/fetchPlaylists'
import { addUserPlaylist } from '../actions/addUserPlaylist'
import { changeMood } from '../actions/changeMood'
import { fetchUserPlaylists } from '../actions/fetchUserPlaylists'
import { fetchMood } from '../actions/fetchMood'
import { connect } from 'react-redux'

class Home extends Component {

  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
  }

  fetchPlaylistsFromHome = (mood) => {
    if(mood === "") {
      this.props.fetchPlaylists("Happy", this.props.currentUser.user.access_token, this.props.userPlaylists)
    } else {
      this.props.fetchPlaylists(mood, this.props.currentUser.user.access_token, this.props.userPlaylists)
    }
  }

  handleMoodChange = event => {
    this.props.changeMood(event.target.value)
  }

  handleMoodSubmit = event => {
      event.preventDefault()
      this.fetchPlaylistsFromHome(this.props.mood)
  }

  fetchMoodFromHome = (picture) => {
    console.log(picture)
    this.props.fetchMood(picture)
  }

  uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file[0])

    fetch("https://sheltered-waters-54715.herokuapp.com/api/photos", {
      method: "POST",
      body: formData,
      credentials: "include"
    })
    .then(response => response.json())
    .then(data => this.fetchMoodFromHome(data.image))
  }

  componentWillMount() {
    this.props.fetchUserPlaylists();
    this.fetchPlaylistsFromHome(this.props.mood)
  }

  render() {
    return (
      <>
        <section className="home">
          <h1>Home</h1>

          <ImageUploader
            buttonText='Upload Image'
            onChange={this.uploadImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={2000000}
          />

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
    playlists: state.playlists.playlists,
    userPlaylists: state.userPlaylists
  }
}

export default connect(mapStateToProps, { fetchPlaylists, changeMood, addUserPlaylist, fetchUserPlaylists, fetchMood })(Home)
