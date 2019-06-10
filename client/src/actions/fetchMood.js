export function fetchMood(picture) {
  const file_url = URL.createObjectURL(picture).slice(5);
  const api_key = 'api_key=ZksgXAn3YithLhxw5Ia_FlszlpNZRGRN'
  const api_secret = '&api_secret=oB0ryqv7-S8Ukpq6mX47NaqKvf9i6ePr'
  const image_url = '&image_url=' + file_url
  const return_attributes = '&return_attributes=emotion'
  const url = 'https://api-us.faceplusplus.com/facepp/v3/detect?' + api_key + api_secret + image_url + return_attributes
  debugger
  return (dispatch) => {
    dispatch({ type: "LOAD_FACIAL_RECOGNITION" })
    fetch(url, {
      method: 'POST',
      headers: new Headers()
    })
      .then(response => response.json())
      .then(mood => dispatch({ type: 'FACIAL_RECOGNITION_CHANGE_MOOD', mood }))
  }
}
