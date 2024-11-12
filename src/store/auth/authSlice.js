import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not authenticated", // "not authenticated", "authenticated"
    uid: null,
    email: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, {payload}) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, {payload}) => {
      console.log(payload);
      state.status = "not authenticated";
      state.uid = null;
      state.email = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;