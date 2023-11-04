import "./Payment.css";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Payment = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("You have not logged in yet. Please login to get access");
    }
  }, [isAuthenticated]);
  return (
    <>
      {isAuthenticated && (
        <main id="container1">
          <form id="paymentform">
            <h1>Payment</h1>
            <h5 id="heading">Enter Your Card Details:</h5>
            <input placeholder=" Card Number" id="card_no"></input>
            <br></br>
            <input placeholder="Valid Through (MM/YY)" id="card_expiry"></input>
            <input placeholder="CVV" id="card_cvv"></input> <br></br>
            <input placeholder="Name On Card" id="card_name"></input>
            <Link to="/users/orders" className="pay_button">
              <button id="paymentbtn" type="button">
                Pay
              </button>
            </Link>
          </form>
        </main>
      )}
      {!isAuthenticated && (
        <h4 className="not_login">
          You have not Login yet .Please Login to Get Access
        </h4>
      )}
    </>
  );
};
export default Payment;
