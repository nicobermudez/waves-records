import React, { Component } from 'react'
import Playlists from '../Components/playlists/Playlists'
import Mood from '../Components/Mood'

export default class PlaylistsContainer extends Component {

  render() {
    return (
      <section className="playlistsContainer">

        <Playlists
          playlists={this.props.playlists}
        />
      </section>
  )}
}

// const mapStateToProps = state => ({ playlists: state.playlists })
// const mapDispatchToProps = dispatch => ({
//   addPlaylist: text => dispatch({type: 'ADD_PLAYLIST', text})
// })
