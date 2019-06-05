import { currentUser } from './currentUser';

const LoginUser = (windowLocation) => {
    const query = windowLocation.search.substring(1);
    if(query !== "") {
      const queryPairs = query.split("&")


      let queryObject={}
      queryPairs.forEach(item => {
        let pair = item.split("=")
        queryObject[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      })


      // deconstruct
      const userObject = {
        name: queryObject.name,
        image: queryObject.image,
        access_token: queryObject.token
      }

      // dispatch(currentUser(userObject))

      const jwt = queryObject.jwt
      localStorage.setItem('jwt', jwt)
    }
  }
export default LoginUser;
