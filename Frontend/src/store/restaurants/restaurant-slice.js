import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurantData",
  initialState: { restaurant: [], loading: false },
  reducers: {
    getrequest(state) {
      state.loading = true;
    },
    getRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
      state.loading = false;
    },
  },
});

export const restaurantAction = restaurantSlice.actions;

export default restaurantSlice;
