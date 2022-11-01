import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    id: null,
    name: "",
    location: {
      sysStatus: "",
      createDtm: "",
      modifyDtm: "",
      id: null,
      country: "",
      city: "",
      street: "",
      building: "",
    },
  },
  trainer: "",
  checks: [],
  isChecksLoaded: false,
  users: [],
  isUsersLoaded: false,
  check: {},
};

export const appSlice = createSlice({
  name: "club",
  initialState: initialState,
  reducers: {
    setClub: (state, action) => {
      state.info = action.payload;
    },
    setClubName: (state, action) => {
      state.info.clubName = action.payload;
    },
    setClubTrainer: (state, action) => {
      state.info.trainer = action.payload;
    },
    setClubChecks: (state, action) => {
      state.checks = action.payload;
    },
    setCheck: (state, action) => {
      state.check = action.payload;
    },
    setClubchecksLoaded: (state, action) => {
      state.isChecksLoaded = action.payload;
    },
  },
});

export const { setClub } = appSlice.actions;

export default appSlice.reducer;
