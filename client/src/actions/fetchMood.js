import { fetchPlaylists } from './fetchPlaylists'

export function fetchMood(image, token) {

  const api_key = 'api_key=ZksgXAn3YithLhxw5Ia_FlszlpNZRGRN'
  const api_secret = '&api_secret=oB0ryqv7-S8Ukpq6mX47NaqKvf9i6ePr'
  const image_url = '&image_url=' + image
  const return_attributes = '&return_attributes=emotion'
  const url = 'https://api-us.faceplusplus.com/facepp/v3/detect?' + api_key + api_secret + image_url + return_attributes

  return (dispatch) => {
    dispatch({ type: "LOAD_FACIAL_RECOGNITION" })
    fetch(url, {
      method: 'POST',
      headers: new Headers()
    })
      .then(response => response.json())
      .then(mood =>
        dispatch({ type: 'FACIAL_RECOGNITION_CHANGE_MOOD', mood })
        let facial_recognition_emotions = action.mood.faces[0].attributes.emotion
        let max_emotion = Object.keys(facial_recognition_emotions).reduce((a, b) => facial_recognition_emotions[a] > facial_recognition_emotions[b] ? a : b);
        mood = max_emotion;
        return mood;
    )
      .then(mood => (dispatch(fetchPlaylists(mood, token))));
  }
}
