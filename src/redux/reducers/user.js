const initialState = {
  // email: "",
  name: "",
  surname: "",
  userLevel: undefined,
  birthday: "2000-01-01",
  // avatar: "",
  isAuth: true,
  isCoach: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    // case "SET_EMAIL":
    //   return {
    //     ...state,
    //     email: action.payload,
    //   };
    case "SET_USERNAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_USERSUNAME":
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
    case "SET_AVATAR":
      return {
        ...state,
        avatar: action.payload,
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

export default user;
