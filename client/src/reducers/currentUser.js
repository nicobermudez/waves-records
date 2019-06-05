const defaultState = {
  user: null,
  name: null,
  image: null,
  loggedIn: false,
  error: null
}

export default (state=defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {...state, user: action.user, loggedIn: true}
    default:
      return state;
  }
}
