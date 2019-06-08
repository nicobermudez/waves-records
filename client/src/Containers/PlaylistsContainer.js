import React, { Component } from 'react'
import Playlists from '../Components/playlists/Playlists'
import addUserPlaylist from '../actions/addUserPlaylist'
import deletePlaylist from '../actions/deletePlaylist'
import { connect } from 'react-redux'

class PlaylistsContainer extends Component {



  render() {
    return (
      <section className="playlistsContainer">
        <h1>My Playlists</h1>
        <Playlists
          playlists={this.props.user_playlists}
          addPlaylist={this.props.addUserPlaylist}
          deletePlaylist={this.props.deletePlaylist}
        />
      </section>
  )}
}

const mapStateToProps = state => ({ user_playlists: state.userPlaylists.user_playlists })

export default connect(mapStateToProps, { addUserPlaylist, deletePlaylist })(PlaylistsContainer)
