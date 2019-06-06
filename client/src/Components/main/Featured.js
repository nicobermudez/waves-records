import React, { Component } from 'react'
import PlaylistInput from '../playlists/PlaylistInput'
import fetchPlaylists from '../../actions/fetchPlaylists'
import { connect } from 'react-redux'
import store from '../../store'

export default class Featured extends Component {

  // componentDidMount() {
  //   // const currentUser = store.getState().currentUser.user;
  //   // const currentMood = store.getState().mood.mood || "Happy"
  //   // const playlists = store.getState().playlists.playlists
  //
  //   if (this.props.playlists.length == 0) {
  //     // let url = "https://api.spotify.com/v1/search?q=" + featured + "&type=playlist&limit=9"
  //     // fetch(url, {
  //     //       headers: {
  //     //         Accept: "application/json",
  //     //         Authorization: "Bearer " + currentUser.access_token,
  //     //         "Content-Type": "application/json"
  //     //       }
  //     //     })
  //     //       .then(response => response.json())
  //     //       .then(data => {
  //     //       })
  //     console.log("fetch")
  //     this.props.fetchPlaylists(this.props.mood, store.getState().currentUser.user.access_token)
  //
  //   }
  // }

  render() {

    return(
      <div className="playlists">
        {this.props.playlists.map(playlist =>
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify} key={playlist.id}>
              <img src={playlist.images[0].url} />
            </a>
            <div className="save">
              <h3>{playlist.name}</h3>
              <PlaylistInput addPlaylist={this.props.addPlaylist}/>
            </div>
          </div>
        )}
      </div>
    )
  }
}



//
// const mapStateToProps = state => {
//   return {
//     playlists: this.state.playlists,
//     mood: this.state.mood
//   }
// }
