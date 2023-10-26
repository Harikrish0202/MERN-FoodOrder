import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    errors: [],
  },
  reducers: {
    signupRequest(state) {
      state.loading = true;
    },
    signupDetails(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginRequest(state) {
      state.loading = true;
    },
    loginDetails(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logoutRequest(state) {
      state.loading = true;
    },
    logOut(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = false;
      state.loading = false;
    },
    currentUserRequest(state) {
      state.loading = true;
    },
    currentUser(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    Errors(state, action) {
      state.errors = action.payload.errors;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
