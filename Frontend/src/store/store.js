import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurants/restaurant-slice";
import menuSlice from "./menus/menus-slice";
import userSlice from "./user/user-slice";

const store = configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    menus: menuSlice.reducer,
    users: userSlice.reducer,
  },
});

export default store;
