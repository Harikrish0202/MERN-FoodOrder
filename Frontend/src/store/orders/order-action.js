import axios from "axios";
import { ordersAction } from "./order-slice";

export const createOrders = (order) => async (dispatch) => {
  try {
    dispatch(ordersAction.OrderRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/v1/eats/orders/createorder",
      order,
      config
    );
    dispatch(ordersAction.createOrder(data));
  } catch (error) {
    dispatch(ordersAction.Errors("Orders could not store"));
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    dispatch(ordersAction.OrderRequest());
    const { data } = await axios.get("/api/v1/eats/orders/userorder");

    dispatch(ordersAction.getOrders(data.result));
  } catch (error) {
    dispatch(ordersAction.Errors("Could not fetch the orders"));
  }
};

export const getoneOrder = (id) => async (dispatch) => {
  try {
    dispatch(ordersAction.OrderRequest());
    const { data } = await axios.get(`/api/v1/eats/orders/getorder/${id}`);

    dispatch(ordersAction.getoneOrder(data.result));
  } catch (error) {
    dispatch(ordersAction.Errors("Could not fetch the orderdetails"));
  }
};
