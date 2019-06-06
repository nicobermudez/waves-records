export const changeMood = (mood) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_MOOD", mood })
  }
};

export default changeMood;
