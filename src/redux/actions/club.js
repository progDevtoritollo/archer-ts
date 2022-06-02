import clubService from "./../../services/checkService";

export const setUsersLoaded = (payload) => ({
  type: "SET_USERS_LOADED",
  payload,
});

export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: "SET_USERS_LOADED",
    payload: false,
  });

  clubService.getUserChecks().then(({ data }) => {
    dispatch(setClubChecks(data));
  });
};

export const setUsers = (payload) => ({
  type: "SET_USERS",
  payload,
});

export const setClubName = (name) => ({
  type: "SET_CLUB_NAME",
  payload: name,
});

export const setTrainer = (name) => ({
  type: "SET_CLUB_TRAINER",
  payload: name,
});

export const setChecksLoaded = (payload) => ({
  type: "SET_CLUB_CHECKS_LOADED",
  payload,
});

export const fetchClubChecks = () => (dispatch) => {
  dispatch({
    type: "SET_CLUB_CHECKS_LOADED",
    payload: false,
  });

  clubService.getClubChecks().then(({ data }) => {
    dispatch(setClubChecks(data));
  });
};

export const setClubChecks = (payload) => ({
  type: "SET_CLUB_CHECKS",
  payload,
});
