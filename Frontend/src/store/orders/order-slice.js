import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "ordersData",
  initialState: { orders: null, loading: false, error: null },
  reducers: {
    getOrderRequest(state) {
      state.loading = true;
    },
    createOrder(state, action) {
      state.orders = action.payload;
      state.loading = false;
    },
    Errors(state, action) {
      state.error = action.payload;
    },
  },
});

export const ordersAction = orderSlice.actions;

export default orderSlice;
