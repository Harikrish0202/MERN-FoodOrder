import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OrderDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const OrderDetails = () => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate("/stripePayment");
  };
  return (
    <>
      <div className="order-container row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 order-confirm cartt ">
          <h2 className="mb-3">Delivery Info </h2>
          <hr></hr>
          <p>
            <b>Name:</b> <b>S.Arumuga Selvam</b>
          </p>
          <p>
            <b>Phone:</b> <b>9361458507</b>
          </p>
          <p className="mb-4">
            <b>Address:</b>{" "}
            <b>
              9C,Durgai Amman Kovil
              Street,Thachanallur,Tirunelveli,627358,India.
            </b>
          </p>
          <hr />
          <h4 className="mt-4">Your Cart Items:</h4>
          <Fragment>
            <hr />
            <div className="cart-item my-1">
              <div className="row">
                <div className="col-4 col-lg-2">
                  <img alt="Laptop" height="45" width="65" />
                </div>
                <div className="col-5 col-lg-6">
                  <Link>Item Name</Link>
                </div>
                <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                  <p>
                    1 x{/* <FontAwesomeIcon size="xs" /> */}
                    69 =
                    <b>
                      {/* <FontAwesomeIcon size="xs" /> */}
                      69
                    </b>
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </Fragment>
        </div>

        <div className="col-12 col-lg-3 my-5 cartt">
          <div id="order_summary">
            <h4>Order Summary</h4>
            <hr />
            <p>
              Subtotal:{""}
              <span className="order-summary-values">
                {/* <FontAwesomeIcon size="xs" /> */}
                {}
              </span>
            </p>
            <p>
              Delivery Charges:{" "}
              <span className="order-summary-values">
                {/* <FontAwesomeIcon size="xs" /> */}
                {}
              </span>
            </p>
            <p>
              Tax:{" "}
              <span className="order-summary-values">
                {/* <FontAwesomeIcon size="xs" /> */}
                {}
              </span>
            </p>

            <hr />
            <p>
              Total:{" "}
              <span className="order-summary-values">
                {/* <FontAwesomeIcon size="xs" /> */}

                {}
              </span>
            </p>
            <hr />
            <button
              id="prcdpayment"
              className="btn btn-primary btn-block"
              onClick={changePage}
            >
              Proceed to Payment
            </button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
