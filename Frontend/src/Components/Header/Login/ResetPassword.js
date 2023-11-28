import "./ResetPassword.css";
function ResetPassword() {
  return (
    <>
      <main id="rst-container">
        <form id="rstpasswordform">
          <h1>ResetPassword</h1>
          <label id="password_label">New Password</label>
          <br></br>
          <input placeholder="New Password" id="New_Password"></input>
          <br></br>
          <label id="passwordcfm_label">Password Confirm</label>
          <br></br>
          <input placeholder="Password Confirm" id="Password_Confirm"></input>
          <br></br>
          <button id="rstbtn">Change Password</button>
        </form>
      </main>
    </>
  );
}
export default ResetPassword;
