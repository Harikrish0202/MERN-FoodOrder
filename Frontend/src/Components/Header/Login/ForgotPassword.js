import "./ForgotPassword.css";
function ForgotPassword() {
  return (
    <>
      <main id="container">
        <form id="frgtpasswordform">
          <h1>ForgotPassword</h1>
          <label htmlFor="email_id" id="email_label">
            Email
          </label>
          <br></br>
          <input id="email_input" placeholder="Enter your Email"></input>
          <br></br>
          <button id="forgotbtn" type="submit">
            Send Mail
          </button>
        </form>
      </main>
    </>
  );
}
export default ForgotPassword;
