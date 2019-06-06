export default function moodReducer (state= {
  mood: "Happy",
}, action) {
  switch(action.type) {
    case 'CHANGE_MOOD':
      return { mood: action.payload.mood }

    default:
      return state;
  }
}
