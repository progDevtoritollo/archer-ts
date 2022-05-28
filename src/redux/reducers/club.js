const initialState = {
  name: "",
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
    default:
      return state;
  }
};

export default club;
