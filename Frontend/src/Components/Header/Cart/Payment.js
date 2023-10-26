import "./Payment.css";
function Payment() {
  return (
    <>
      <main id="container1">
        <form id="paymentform">
          <h1>Payment</h1>
          <h5 id="heading">Enter Your Card Details:</h5>
          <input placeholder=" Card Number" id="card_no"></input>
          <br></br>
          <input placeholder="Valid Through (MM/YY)" id="card_expiry"></input>
          <input placeholder="CVV" id="card_cvv"></input> <br></br>
          <input placeholder="Name On Card" id="card_name"></input>
          <button id="paymentbtn">Pay</button>
        </form>
      </main>
    </>
  );
}
export default Payment;
