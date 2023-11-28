import { useNavigate } from "react-router-dom";
import "./UserProfileDetail.css";
import { useSelector } from "react-redux";
import Spinner from "../../Home/Loader";
const UserProfileDetail = () => {
  const { user, loading } = useSelector((state) => state.users);

  const navigate = useNavigate();
  const updateHandler = () => {
    navigate("/users/updateProfile");
  };
  return (
    <>
      {loading && <Spinner message="Loading..."></Spinner>}
      {user && !loading && (
        <main id="container2">
          <section>
            <h2 id="heading1">UserDetails</h2>
            <h3 id="userNameH">Name:</h3>
            <p id="userName">{user.name}</p>
            <h3 id="userEmailH">Email:</h3>
            <p id="userEmail">{user.email}</p>
            <h3 id="userNumberH">PhoneNumber:</h3>
            <p id="userNumber">{user.phoneNumber}</p>
            <button id="editProfilebtn" onClick={updateHandler}>
              Edit Profile
            </button>
          </section>
        </main>
      )}
    </>
  );
};

export default UserProfileDetail;
