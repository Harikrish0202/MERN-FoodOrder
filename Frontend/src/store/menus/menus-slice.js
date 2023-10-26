import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menus",
  initialState: { menus: [], loading: false, error: null },
  reducers: {
    //Get menu request
    getMenuRequset(state) {
      state.loading = true;
    },
    //Get all menus
    getMenus(state, action) {
      state.menus = action.payload.menus;
      state.loading = false;
    },
    //Get all Errors
    Errors(state, action) {
      state.loading = false;
      state.error = action.payload.errors;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
