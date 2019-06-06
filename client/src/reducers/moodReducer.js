export default function moodReducer (state= {
  mood: "",
}, action) {
  switch(action.type) {
    case 'CHANGE_MOOD':
      return { mood: action.payload.mood }

    default:
      return state;
  }
}
