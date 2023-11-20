import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurants/restaurant-slice";
import menuSlice from "./menus/menus-slice";
import userSlice from "./user/user-slice";
import cartSlice from "./cart/cart-slice";
import orderSlice from "./orders/order-slice";

const store = configureStore({
  reducer: {
    restaurants: restaurantSlice.reducer,
    menus: menuSlice.reducer,
    users: userSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
  },
});

export default store;
