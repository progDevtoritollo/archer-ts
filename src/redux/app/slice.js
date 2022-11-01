import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    alertMassage: "",
    isAlert: false,
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
  },
});

export const { setLoaded, setIsAlert, setAlertMassage } = appSlice.actions;

export default appSlice.reducer;
