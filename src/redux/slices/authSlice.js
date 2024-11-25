import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");
const isAuthenticated = localStorage.getItem("isAuthenticated");

const initialState = {
  token: token ? JSON.parse(token) : null,
  isAuthenticated: isAuthenticated ? JSON.parse(isAuthenticated) : false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
      state.loading = false;

      localStorage.setItem("token", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    registrationStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registrationSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;

      localStorage.setItem("token", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    },
    registrationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registrationStart,
  registrationSuccess,
  registrationFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
