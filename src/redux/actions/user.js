import userService from "./../../services/userService";
export const setName = (name) => ({
  type: "SET_USERNAME",
  payload: name,
});

export const setSurname = (surname) => ({
  type: "SET_USERSUNAME",
  payload: surname,
});

export const setAuth = (auth) => ({
  type: "SET_AUTH",
  payload: auth,
});

export const setBirthday = (date) => ({
  type: "SET_BIRTHDAY",
  payload: date,
});

export const setCoach = (isCoach) => ({
  type: "SET_COACH",
  payload: isCoach,
});

export const setChecksLoaded = (payload) => ({
  type: "SET_USER_CHECKS_LOADED",
  payload,
});

export const fetchUserChecks = () => (dispatch) => {
  dispatch({
    type: "SET_USER_CHECKS_LOADED",
    payload: false,
  });

  userService.getUserChecks().then(({ data }) => {
    dispatch(setClubChecks(data));
  });
};

export const setClubChecks = (payload) => ({
  type: "SET_USER_CHECKS",
  payload,
});
