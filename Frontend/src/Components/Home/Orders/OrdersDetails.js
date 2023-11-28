import React, { useEffect } from "react";
import "./OrdersDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getoneOrder } from "../../../store/orders/order-action";
import Spinner from "../Loader";

const OrdersDetails = () => {
  const dispatch = useDispatch();
  const { orderid } = useParams();
  const { order, loading } = useSelector((state) => state.orders);
  useEffect(() => {
    dispatch(getoneOrder(orderid));
  }, [dispatch, orderid]);
  return (
    <>
      {order === null && !loading && (
        <h3 style={{ textAlign: "center", color: "white" }}>
          Your orderDetails is Empty...
        </h3>
      )}
      {loading && <Spinner message="Loading..."></Spinner>}
      {order && !loading && (
        <div className="main_container">
          <div className="orderdetails_container">
            <h3 className="order_heading">Order #</h3>
            <h3 className="order_id">{order._id}</h3>
            <br></br>
            <div>
              <h5 className="pt-2 pb-2 m-0 delivery">Delivery Info</h5>
              <div className="info">
                <p className="m-0 p-2">
                  <b>Name: </b> &nbsp;
                  {order.deliveryInfo.name}
                </p>
                <p className="m-0 p-2">
                  <b>Phone:</b> &nbsp;
                  {order.deliveryInfo.phoneno}
                </p>
                <p className="m-0 p-2">
                  <b>Address:</b> &nbsp;
                  {order.deliveryInfo.address}
                </p>
                <p className="m-0 p-2">
                  <b>Amount:</b> &nbsp; <i className="fa fa-rupee"></i>
                  {order.paymentInfo.totalPrice}
                </p>
              </div>
              <hr />
              <h5 className="m-0 p-2">
                Payment: &nbsp;
                <span className="paid">
                  <b>PAID</b>
                </span>
              </h5>
              <h5 className="m-0 p-2">
                Order status: &nbsp;
                <span className="status">
                  <b
                    style={{
                      color:
                        order.paymentInfo.orderStatus === "Delivered "
                          ? "rgb(247, 6, 6)"
                          : "rgb(9, 186, 9)",
                    }}
                  >
                    {order.paymentInfo.orderStatus}
                  </b>
                </span>
              </h5>
              <hr />

              <h5 className="m-0 p-2 delivery">Order Items</h5>
              <div>
                {order.orderItems.map((item) => (
                  <div className="row " key={item._id}>
                    <div className="col-3 col-lg-2 pt-2 pb-4 ">
                      <img
                        alt="Laptop"
                        height="45"
                        width="65"
                        src={item.image}
                      />
                    </div>
                    <div className="col-4 pt-3 pb-3 col-lg-2">
                      <p className="item_name">{item.name}</p>
                    </div>
                    <div className="col-3 pt-3 pb-3 col-lg-2 ">
                      <p className="mb-0">
                        <i className="fa fa-rupee"></i>
                        {item.price}
                      </p>
                    </div>
                    <div className="col-3 pt-3 pb-3 col-lg-2">
                      <p className="item_quantity">
                        {item.quantity} &nbsp;
                        {item.quantity === 1 ? "item" : "(items)"}
                      </p>
                    </div>
                    <hr></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrdersDetails;
