import clubService from "./../../services/checkService";

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
