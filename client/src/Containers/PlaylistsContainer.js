import React, { Component } from 'react'
import Playlists from '../Components/playlists/Playlists'
import addUserPlaylist from '../actions/addUserPlaylist'
import { connect } from 'react-redux'

class PlaylistsContainer extends Component {

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

const mapStateToProps = state => ({ user_playlists: state.user_playlists })

export default connect(mapStateToProps, { addUserPlaylist })(PlaylistsContainer)
