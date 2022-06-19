const initialState = {
  name: "",
  surname: "",
  rank: undefined,
  birthday: "2000-01-01",
  isAuth: false,
  isCoach: false,
  checks: [],
  isChecksLoaded: false,
  userPage: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_USER_SURNAME":
      return {
        ...state,
        surname: action.payload,
      };

    case "SET_AUTH":
      return {
        ...state,
        isAuth: action.payload,
      };
    case "SET_BIRTHDAY":
      return {
        ...state,
        birthday: action.payload,
      };
    case "SET_COACH":
      return {
        ...state,
        isCoach: action.payload,
      };

    case "SET_USER_CHECKS":
      return {
        ...state,
        checks: action.payload,
        isChecksLoaded: true,
      };

    case "SET_USER_CHECKS_LOADED":
      return {
        ...state,
        isChecksLoaded: action.payload,
      };
    case "SET_USER_PAGE":
      return {
        ...state,
        userPage: action.payload,
      };
    case "SET_USER_RANK":
      return {
        ...state,
        rank: action.payload,
      };
    default:
      return state;
  }
};

export default user;
