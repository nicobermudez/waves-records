import React, { Component } from 'react'
import PlaylistInput from './PlaylistInput'
import { connect } from 'react-redux'

class Playlists extends Component {
  state = {
    playlists: []
  }

  componentWillMount() {
    let mood = "hits"
    let url = "https://api.spotify.com/v1/search?q=" + mood + "&type=playlist&limit=9"
    fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer BQCy52h7Psu7KiRoSuKJ6PZNG_39ZCx3FKeaDxVDqxENRIpXzW5cRQTKfph_kO2cf33UaCKViLkBz8L6prSuElgZrE6sxD533MVudeNjxTKqoyYFE28aV6lOKTVPcphjLcKLyVQIXtg3fi-vKYqv9-z6IWt0u_ul",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          playlists: data.playlists.items
        })
      })
  }

  renderPlaylists = () => {
    return this.state.playlists.map(playlist => {
      return (
          <div className="playlist" key={playlist.id}>
            <a href={playlist.external_urls.spotify} key={playlist.id}>
              <img src={playlist.images[0].url} />
            </a>
            <div className="save">
              <h3>{playlist.name}</h3>
              <PlaylistInput addPlaylist={this.props.addPlaylist}/>
            </div>
          </div>
      )
    })
  }

  render() {
    return (
      <>
        <h1>Featured</h1>
        <div className="playlists">
          {this.renderPlaylists()}
        </div>
      </>

    )
  }
}

const mapStateToProps = state => ({ playlists: state.playlists })
const mapDispatchToProps = dispatch => ({
  addPlaylist: text => dispatch({type: 'ADD_PLAYLIST', text})
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)
