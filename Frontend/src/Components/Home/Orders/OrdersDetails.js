import React from "react";
import "./OrdersDetails.css";
import { useSelector } from "react-redux";

const OrdersDetails = () => {
  const { deliveryInfo, items } = useSelector((state) => state.cart);
  return (
    <>
      <div className="main_container">
        <div className="orderdetails_container">
          <h3 className="order_heading">Order #</h3>
          <h3 className="order_id">64c110bd85a26a78c29c163d</h3>
          <br></br>
          <div>
            <h5 className="pt-2 pb-2 m-0 delivery">Delivery Info</h5>
            <div className="info">
              <p className="m-0 p-2">
                <b>Name:</b> &nbsp; {deliveryInfo.name}
              </p>
              <p className="m-0 p-2">
                <b>Phone:</b> &nbsp; {deliveryInfo.phone}
              </p>
              <p className="m-0 p-2">
                <b>Address:</b> &nbsp;
                {deliveryInfo.street},{deliveryInfo.city},{deliveryInfo.country}
                ,{deliveryInfo.pincode}
              </p>
              <p className="m-0 p-2">
                <b>Amount:</b> &nbsp; <i className="fa fa-rupee"></i>324
              </p>
            </div>
            <hr />
            <h5 className="m-0 p-2">
              Payment: &nbsp;{" "}
              <span className="paid">
                <b>PAID</b>
              </span>
            </h5>
            <h5 className="m-0 p-2">
              Order status: &nbsp;
              <span className="status">
                <b>Processing</b>
              </span>
            </h5>
            <hr />

            <h5 className="m-0 p-2 delivery">Order Items</h5>
            <div>
              {items.map((item) => (
                <div className="row " key={item.id}>
                  <div className="col-3 col-lg-2 pt-2 pb-4 ">
                    <img alt="Laptop" height="45" width="65" src={item.image} />
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
                    <p className="item_quantity">{item.quantity} (item)</p>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersDetails;
