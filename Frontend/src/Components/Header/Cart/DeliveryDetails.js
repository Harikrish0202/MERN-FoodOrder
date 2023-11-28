import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../store/cart/cart-slice";

const DeliveryDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deliveryInfo, items } = useSelector((state) => state.cart);

  //This function is calculating the subtoatal of items
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const taxRate = 0.08; // 8% tax rate
  const deliveryCharge = 5; // Fixed delivery charge

  //calculate the tax
  const calculateTax = () => {
    return calculateSubtotal() * taxRate;
  };

  //calculate the total amount of an item
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + deliveryCharge;
  };

  const nextPage = () => {
    dispatch(
      cartActions.paymentInfo({
        itemsPrice: calculateSubtotal(),
        taxPrice: calculateTax().toFixed(2),
        deliveryCharge,
        totalPrice: calculateTotal(),
      })
    );
    navigate("/users/payment");
  };
  return (
    <>
      {items.length === 0 && (
        <h3 style={{ textAlign: "center", color: "white" }}>
          Could not show about your deliverydetails because your cart is empty
        </h3>
      )}
      {items.length > 0 && (
        <div className="main-container row d-flex justify-content-center">
          <div className="order-container row d-flex justify-content-around">
            <div className="col-12 col-lg-8 mt-5 order-confirm cartt ">
              <h4 className="pt-2 pb-2 m-0 delivery">Delivery Info</h4>
              <hr></hr>
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

              <hr />
              {/* Cart Items */}
              <h4 className="mt-2 delivery">Your Cart Items</h4>
              <Fragment>
                <div className="cart-item my-1">
                  {items.map((item) => (
                    <div className="row " key={item.id}>
                      <div className="col-4 col-lg-2 pt-2 pb-4 ">
                        <img
                          alt="Laptop"
                          height="45"
                          width="65"
                          src={item.image}
                        />
                      </div>
                      <div className="col-4 pt-3 pb-3 col-lg-6">
                        <p className="item_name">{item.name}</p>
                      </div>
                      <div className="col-4 pt-3 pb-3 col-lg-4 ">
                        <p className="mb-0">
                          {item.quantity} x <i className="fa fa-rupee"></i>
                          {item.price} =
                          <b>
                            <i className="fa fa-rupee"></i>
                            {item.totalPrice}
                          </b>
                        </p>
                      </div>
                      <hr></hr>
                    </div>
                  ))}
                </div>
              </Fragment>
            </div>

            {/* Order Summary */}
            <div className="col-12 col-lg-3 my-5 cartt">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <div className="d-flex p-1">
                  <span className="flex-grow-1"> Subtotal:</span>
                  <span className="order-summary-values">
                    <i className="fa fa-rupee"></i>
                    {calculateSubtotal()}
                  </span>
                </div>
                <div className="d-flex p-1">
                  <span className="flex-grow-1"> Delivery Charges:</span>
                  <span className="order-summary-values">
                    <i className="fa fa-rupee"> </i>
                    {deliveryCharge}
                  </span>
                </div>
                <div className="d-flex p-1">
                  <span className="flex-grow-1">Tax: </span>
                  <span className="order-summary-values">
                    <i className="fa fa-rupee"></i> {calculateTax().toFixed(2)}
                  </span>
                </div>

                <hr />
                <div className="d-flex p-1">
                  <span className="flex-grow-1"> Total:</span>

                  <span className="order-summary-values">
                    <i className="fa fa-rupee"></i>
                    {calculateTotal()}
                  </span>
                </div>

                <hr />

                <button
                  id="prcdpayment"
                  className="btn btn-primary btn-block"
                  onClick={nextPage}
                >
                  Proceed to Payment
                </button>

                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveryDetails;
