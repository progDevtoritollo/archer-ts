const initialState = {
  name: "",
  isCoach: true,
  club: "",
  trainer: "",
};

const club = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLUBNAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_COACH":
      return {
        ...state,
        isCoach: action.payload,
      };
    default:
      return state;
  }
};

export default club;
