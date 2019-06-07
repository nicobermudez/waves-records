export const currentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
};

export default currentUser;
