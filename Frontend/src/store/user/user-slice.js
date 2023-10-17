import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    getSignupRequest(state) {
      state.loading = true;
    },
    getSignupDetails(state, action) {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    getErrors(state, action) {
      state.error = action.payload.errors;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
