import React, { Component } from 'react'
import PlaylistInput from '../Components/playlists/PlaylistInput'
import Playlists from '../Components/playlists/Playlists'
import { connect } from 'react-redux'

class PlaylistsContainer extends Component {
  state = {
    playlists: []
  }

  render() {
    return (
      <Playlists
        playlists={this.props.playlists}
      />
    )
  }
}

// const mapStateToProps = state => ({ playlists: state.playlists })
// const mapDispatchToProps = dispatch => ({
//   addPlaylist: text => dispatch({type: 'ADD_PLAYLIST', text})
// })

export default connect()(PlaylistsContainer)
