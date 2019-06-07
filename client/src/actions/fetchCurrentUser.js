import { currentUser } from './currentUser'

export const fetchCurrentUser = () => {
  return(dispatch) => {
    fetch("http://localhost:3000/api/get_current_user", {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())
      .then(user => {
        if(user.error) {
          console.log(user.error)
        } else {
          dispatch(currentUser(user))
        }
      })
  }
}
export default fetchCurrentUser
