import "./UpdateProfile.css";
const UpdateProfile = () => {
  return (
    <>
      <main id="container3">
        <form id="updateprofileform">
          <h1>UpdateProfile</h1>
          <label htmlFor="UpdateEmail">Email :</label> <br></br>
          <input placeholder="Update Email" id="UpdateEmail"></input>
          <br></br>
          <label htmlFor="UpdateName">Name :</label>
          <br></br>
          <input placeholder="Update Name" id="UpdateName"></input>
          <br></br>
          <label htmlFor="UpdateAvatar">Avatar :</label>
          <br></br>
          <input placeholder="Update Avatar" id="UpdateAvatar"></input>
          <button id="updatebtn">Update</button>
        </form>
      </main>
    </>
  );
};

export default UpdateProfile;
