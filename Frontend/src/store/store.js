import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurants/restaurant-slice";
import menuSlice from "./menus/menus-slice";

const store = configureStore({
  reducer: {
    restaurantData: restaurantSlice.reducer,
    menus: menuSlice.reducer,
  },
});

export default store;
