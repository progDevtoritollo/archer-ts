import userService from "./../../services/userService";
export const setName = (name) => ({
  type: "SET_USER_NAME",
  payload: name,
});

export const setSurname = (surname) => ({
  type: "SET_USER_SURNAME",
  payload: surname,
});

export const setRank = (rank) => ({
  type: "SET_USER_RANK",
  payload: rank,
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

export const setUserPage = (payload) => ({
  type: "SET_USER_PAGE",
  payload,
});
