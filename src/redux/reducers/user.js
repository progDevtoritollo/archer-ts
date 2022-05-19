const initialState = {
  email: "",
  name: "",
  surname: "",
  isAuth: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

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
    default:
      return state;
  }
};

export default user;
