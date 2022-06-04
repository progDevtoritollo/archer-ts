const initialState = {
  clubName: "",
  trainer: "",
  checks: [],
  isChecksLoaded: false,
  users: [],
  isUsersLoaded: false,
  check: {},
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
    case "SET_USERS":
      return {
        ...state,
        isUsersLoaded: action.payload,
      };
    case "SET_USERS_LOADED":
      return {
        ...state,
        users: action.payload,
        isUsersLoaded: true,
      };
    case "SET_CLUB_CHECKS":
      return {
        ...state,
        items: action.payload,
        isChecksLoaded: true,
      };
    case "SET_CHECK":
      return {
        ...state,
        check: action.payload,
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
