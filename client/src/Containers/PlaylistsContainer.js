import React, { Component } from 'react'
import Playlists from '../Components/playlists/Playlists'
import addUserPlaylist from '../actions/addUserPlaylist'
import fetchUserPlaylists from '../actions/fetchUserPlaylists'
import { connect } from 'react-redux'

class PlaylistsContainer extends Component {

  componentWillMount() {
    this.props.fetchUserPlaylists()
  }

  render() {
    return (
      <section className="playlistsContainer">
        <Playlists
          playlists={this.props.user_playlists}
          addPlaylist={this.props.addUserPlaylist}
        />
      </section>
  )}
}

const mapStateToProps = state => ({ user_playlists: state.userPlaylists.user_playlists })

export default connect(mapStateToProps, { addUserPlaylist, fetchUserPlaylists })(PlaylistsContainer)
