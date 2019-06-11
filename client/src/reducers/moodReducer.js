export default function moodReducer (state= {
  mood: "",
}, action) {
  switch(action.type) {

    case 'CHANGE_MOOD':
      return { mood: action.mood }

    case 'FACIAL_RECOGNITION_CHANGE_MOOD':
      let facial_recognition_emotions = action.mood.faces[0].attributes.emotion
      let max_emotion = Object.keys(facial_recognition_emotions).reduce((a, b) => facial_recognition_emotions[a] > facial_recognition_emotions[b] ? a : b);
      return { mood: max_emotion }

    default:
      return state;
  }
}
