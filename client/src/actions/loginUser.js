import { setCurrentUser } from './currentUser';

const LogInUser = (windowLocation) => {
  return (dispatch) => {
    const query = windowLocation.search.substring(1);
    if (query !== ""){
      const queryPairs = query.split('&');

      let queryObj ={};
      for (var i = 0; i < queryPairs.length; i++) {
          var pair = queryPairs[i].split('=');
          queryObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }

      const userObj = {
          name: queryObj.name.split("+").join(" "),
          image: queryObj.image,
          access_token: queryObj.token
        }

      dispatch(setCurrentUser(userObj));

      const jwt = queryObj.jwt

      localStorage.setItem('jwt', jwt)
    }
  }
};

export default LogInUser
