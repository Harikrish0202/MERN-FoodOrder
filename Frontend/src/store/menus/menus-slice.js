import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menus",
  initialState: { menus: [], loading: false },
  reducers: {
    getmenurequset(state) {
      state.loading = true;
    },
    getMenus(state, action) {
      state.menus = action.payload.menus;
      state.loading = false;
    },
  },
});

export const menuActions = menuSlice.actions;

export default menuSlice;
