export const fetchMood = (picture) => {
  const image = picture
  const api_key = 'api_key=ZksgXAn3YithLhxw5Ia_FlszlpNZRGRN'
  const api_secret = '&api_secret=oB0ryqv7-S8Ukpq6mX47NaqKvf9i6ePr'
  const image_url = '&image_url=' + image
  const return_attributes = '&return_attributes=emotion'
  const facePlusPlusUrl = 'https://api-us.faceplusplus.com/facepp/v3/face/detect?' + api_key + api_secret + image_url + return_attributes

  return(dispatch) => {
    fetch(facePlusPlusUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'no-cors'
    })
      .then(response => response.json())
      .then(mood => dispatch({ type: 'FACIAL_RECOGNITION_CHANGE_MOOD', mood}))
  }
}
