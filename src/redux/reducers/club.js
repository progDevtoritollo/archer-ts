const initialState = {
  clubName: "",
  trainer: "",
  checks: [],
  isChecksLoaded: false,
};

const club = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLUB_NAME":
      return {
        ...state,
        clubName: action.payload,
      };
    case "SET_CLUB_TRAINER":
      return {
        ...state,
        trainer: action.payload,
      };
    case "SET_CLUB_CHECKS":
      return {
        ...state,
        items: action.payload,
        isChecksLoaded: true,
      };

    case "SET_CLUB_CHECKS_LOADED":
      return {
        ...state,
        isChecksLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default club;
