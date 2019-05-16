import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';

export default class Mood extends Component {

  // analyzeImage = () => {
  //   const image='https://www.bolde.com/wp-content/uploads/2018/09/iStock-918377480-400x400.jpg'
  //
  //   const api_key = 'api_key=ZksgXAn3YithLhxw5Ia_FlszlpNZRGRN'
  //   const api_secret = '&api_secret=oB0ryqv7-S8Ukpq6mX47NaqKvf9i6ePr'
  //   const image_url = '&image_url=' + image
  //   const return_attributes = '&return_attributes=emotion'
  //
  //   const facePlusPlusUrl = 'https://api-us.faceplusplus.com/facepp/v3/face/detect?' + api_key + api_secret + image_url + return_attributes
  //   fetch(facePlusPlusUrl, {
  //     method: 'post',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //
  //   })
  //     .then(res => console.log(res))
  //
  //     // reroute to playlists
  // }
// <button onClick={this.analyzeImage}>Upload Image</button>

  render() {
    return (
      <div className="uploadImage">
        <p>Upload Photo</p>
      </div>
    )
  }
}
