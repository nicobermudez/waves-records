export const currentUser = (payload) => {
  return {
    type: 'SET_CURRENT_USER',
    payload: payload
  };
};
