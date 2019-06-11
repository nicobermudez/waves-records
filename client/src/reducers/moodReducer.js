export default function moodReducer (state= {
  mood: "",
}, action) {
  switch(action.type) {

    case 'CHANGE_MOOD':
      return { mood: action.mood }

    case 'FACIAL_RECOGNITION_CHANGE_MOOD':
      return { mood: max_emotion }

    default:
      return state;
  }
}
