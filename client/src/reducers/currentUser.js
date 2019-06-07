// const defaultState = {
//   user: null,
//   name: null,
//   image: null,
//   loggedIn: false,
//   error: null
// }

export default function currentUser (state={
  user: {}
}, action) {
  switch (action.type) {

    case 'SET_CURRENT_USER':
      return { user: action.user }

    default:
      return state;
  }
}
