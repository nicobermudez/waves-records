export const currentUser = (user) => {
  return (dispatch) => {
    dispatch({type: 'SET_CURRENT_USER', user})
  };
};

export default currentUser;
