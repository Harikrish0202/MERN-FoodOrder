import { useNavigate } from "react-router-dom";
import "./UserProfileDetail.css";
const UserProfileDetail = () => {
  const navigate = useNavigate();
  const updateHandler = () => {
    navigate("/users/updateProfile");
  };
  return (
    <>
      <main id="container2">
        <section>
          <h1 id="heading1">UserDetails</h1>
          <h3 id="userNameH">Name:</h3>
          <p id="userName">ArumugaSelvam</p>
          <h3 id="userEmailH">Email:</h3>
          <p id="userEmail">selvam2305@gmail.com</p>
          <h3 id="userNumberH">PhoneNumber:</h3>
          <p id="userNumber">2005200312</p>
          <button id="editProfilebtn" onClick={updateHandler}>
            Edit Profile
          </button>
        </section>
      </main>
    </>
  );
};

export default UserProfileDetail;
