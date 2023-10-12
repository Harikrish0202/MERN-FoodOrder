import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurants/restaurant-slice";

const store = configureStore({
  reducer: { restaurantData: restaurantSlice.reducer },
});

export default store;
