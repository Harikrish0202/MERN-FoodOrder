import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurantData",
  initialState: { restaurant: [] },
  reducers: {
    getRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
      // console.log(state.restaurant);
    },
    specifyRestaurant(state, action) {
      state.restaurant = action.payload.restaurant;
      console.log(state.restaurant);
    },
  },
});

export const restaurantAction = restaurantSlice.actions;

export default restaurantSlice;
