import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "ordersData",
  initialState: { orders: [], loading: false, error: null, order: null },
  reducers: {
    OrderRequest(state) {
      state.loading = true;
    },
    getOrders(state, action) {
      state.orders = action.payload;
      state.loading = false;
    },
    getoneOrder(state, action) {
      state.order = action.payload;
      state.loading = false;
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
