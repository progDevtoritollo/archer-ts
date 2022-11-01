import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    sysStatus: "",
    createDtm: "",
    modifyDtm: "",
    id: null,
    email: "",
    phoneNumber: null,
    name: "",
    surname: "",
    rank: "",
    birthday: "",
  },
  userLoaded: false,
  isAuth: false,
  isCoach: false,
  checks: [],
  isChecksLoaded: false,
  userPage: {},
};

export const appSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.info = action.payload;
    },
    SetIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    SetIsCoach: (state, action) => {
      state.isCoach = action.payload;
    },
    setUserName: (state, action) => {
      state.info.name = action.payload;
    },
    setUserSurname: (state, action) => {
      state.info.surname = action.payload;
    },
    setUserBirthday: (state, action) => {
      state.info.birthday = action.payload;
    },
    setUserRank: (state, action) => {
      state.info.rank = action.payload;
    },
  },
});

export const {
  setUser,
  SetIsAuth,
  SetIsCoach,
  setUserName,
  setUserSurname,
  setUserBirthday,
  setUserRank,
} = appSlice.actions;

export default appSlice.reducer;
