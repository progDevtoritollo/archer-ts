const initialState = {
  checks: [],
  isChecksLoaded: false,
  userPage: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

export default user;
