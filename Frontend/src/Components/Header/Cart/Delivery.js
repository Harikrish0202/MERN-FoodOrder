import "./Delivery.css";
function Payment() {
  return (
    <>
      <main id="container1">
        <form id="paymentform">
          <h1>Delivery Address</h1>
          <h5 id="heading">Enter Your Delivery Address:</h5>
          <input placeholder="Name" id="customer_name"></input>
          <br></br>
          <input placeholder="House No,Street Name" id="street_name"></input>
          <br></br>
          <input placeholder="City" id="city" type="text"></input>
          <br />
          <input placeholder="Country" id="country" type="text"></input>
          <br />
          <input placeholder="Pincode" id="pincode" type="text"></input>
          <button id="paymentbtn">Go To Payment</button>
        </form>
      </main>
    </>
  );
}
export default Payment;
