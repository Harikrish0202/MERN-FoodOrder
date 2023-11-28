import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/orders/order-action";
import "./Orders.css";
import Spinner from "../Loader";
import { Link } from "react-router-dom";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state.orders);
  console.log(orders);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <>
      {loading && <Spinner message="Loading your orders details" />}
      {orders.length === 0 && !loading && (
        <h3 style={{ textAlign: "center", color: "white" }}>
          Your orderlist is Empty...
        </h3>
      )}
      {orders && orders.length > 0 && !loading && (
        <div className="mainorder_container">
          <div className="order_container">
            <h3 className="order_header" style={{ color: "White" }}>
              My Orders
            </h3>
            <ul className="order_list_container">
              {orders.map((order) => (
                <li className="orderItems " key={order._id}>
                  <hr style={{ color: "white" }}></hr>
                  {order.restaurant.map((res) => (
                    <div className="item_container row" key={res._id}>
                      <div className="d-flex flex-column justify-content-center align-items-center img_name col-lg-2">
                        <img
                          className="orderres_image "
                          height="90"
                          width="115"
                          src={res.images[0].url}
                          alt={res.name}
                        />
                        <p className="orderres_name ">{res.name}</p>
                      </div>

                      <p className="orderres_address col-lg-5">{res.address}</p>
                      <p className="orderres_date col-lg-2">
                        {order.paymentInfo.paidAt}
                      </p>
                      <Link
                        to={`/orders/ordersdetails/${order._id}`}
                        className="btn btn-primary action col-lg-1"
                      >
                        <i className="fa fa-eye"></i>
                      </Link>
                    </div>
                  ))}
                  <hr style={{ color: "white" }}></hr>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Orders;
