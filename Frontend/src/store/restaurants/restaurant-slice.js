import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurantData",
  initialState: { restaurant: [], loading: false, error: null },
  reducers: {
    getrequest(state) {
      state.loading = true;
    },
    getRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
      state.loading = false;
    },
    getErrors(state, action) {
      state.loading = false;
      state.error = action.payload.errors;
    },
  },
});

export const restaurantAction = restaurantSlice.actions;

export default restaurantSlice;
