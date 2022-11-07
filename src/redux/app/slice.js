import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    alertMassage: "",
    isAlert: false,
  },
  userPage: {
    page: {},
    isUserLoaded: false,
  },
  checkPage: {
    page: {},
    isChecksLoaded: false,
  },
  isLoaded: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    setIsAlert: (state, action) => {
      state.alert.isAlert = action.payload;
    },
    setAlertMassage: (state, action) => {
      state.alert.alertMassage = action.payload;
    },
    setUserPage: (state, action) => {
      state.userPage.page = action.payload;
    },
    setUserPageLoaded: (state, action) => {
      state.userPage.isUserLoaded = action.payload;
    },
    setCheckPage: (state, action) => {
      state.checkPage.page = action.payload;
    },
    setCheckPageLoaded: (state, action) => {
      state.checkPage.isChecksLoaded = action.payload;
    },
  },
});

export const {
  setIsAlert,
  setAlertMassage,
  setUserPage,
  setUserPageLoaded,
  setCheckPage,
  setCheckPageLoaded,
} = appSlice.actions;

export default appSlice.reducer;
