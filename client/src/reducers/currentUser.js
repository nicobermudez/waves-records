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
      let user = action.user
      user["loggedIn"] = true
      return { user }

    default:
      return state;
  }
}
