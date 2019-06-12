import React, { Component } from 'react'
import Search from '../Components/main/Search'
import Featured from '../Components/main/Featured'
import ImageUploader from 'react-images-upload';
import { fetchPlaylists } from '../actions/fetchPlaylists'
import { addUserPlaylist } from '../actions/addUserPlaylist'
import { changeMood } from '../actions/changeMood'
import { fetchUserPlaylists } from '../actions/fetchUserPlaylists'
import { fetchMood } from '../actions/fetchMood'
import { connect } from 'react-redux';

class Home extends Component {

// Bind this to uploadImage so it can access class functions and props
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
  }

// Fetch playlists, if there is nothing in the search input or no mood set, return happy playlists
  fetchPlaylistsFromHome = (mood) => {
    if(mood === "") {
      this.props.fetchPlaylists("Happy", this.props.currentUser.user.access_token)
    } else {
      this.props.fetchPlaylists(mood, this.props.currentUser.user.access_token)
    }
  }

  handleSearchChange = event => {
    this.props.changeMood(event.target.value)
  }
// Fetch playlists once a new search item is submitted
  handleSearchSubmit = event => {
      event.preventDefault()
      this.fetchPlaylistsFromHome(this.props.mood)
  }

// Fetch mood given the uploaded image and fetch playlists to reflect new mood
  fetchMoodFromHome = (picture) => {
    this.props.fetchMood(picture, this.props.currentUser.user.access_token)
  }

// Upload image to backend to get workable URL for Face++ API
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

// Initialize with playlists in both /home and /playlists
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

          <h2>or</h2>
          <h3>Search</h3>

          <Search
            handleSearchChange={this.handleSearchChange}
            handleSearchSubmit={this.handleSearchSubmit}
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
