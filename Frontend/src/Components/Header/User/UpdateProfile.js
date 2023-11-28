import { useState } from "react";
import "./UpdateProfile.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUserData } from "../../../store/user/user-action";
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const [updateUser, setUpdateuser] = useState({
    name: "",
    email: "",
    phoneno: "",
    password: "",
    passwordConfirm: "",
  });

  const updateDetails = (e) => {
    e.preventDefault();
    if (updateUser.password !== updateUser.passwordConfirm) {
      return toast.error("Password Does not matched");
    }
    dispatch(
      updateUserData({
        name: updateUser.name,
        email: updateUser.email,
        phoneno: updateUser.phoneno,
        pasword: updateUser.password,
      })
    );
  };
  return (
    <>
      <main id="container3">
        <form id="updateprofileform" onSubmit={updateDetails}>
          <h1>UpdateProfile</h1>
          <label htmlFor="UpdateEmail">Email :</label> <br></br>
          <input
            placeholder="Update Email"
            id="UpdateEmail"
            onChange={(e) =>
              setUpdateuser({ ...updateUser, email: e.target.value })
            }
            value={updateUser.email}
          ></input>
          <br></br>
          <label htmlFor="UpdateName">Name :</label>
          <br></br>
          <input
            placeholder="Update Name"
            id="UpdateName"
            onChange={(e) =>
              setUpdateuser({ ...updateUser, name: e.target.value })
            }
            value={updateUser.name}
          ></input>
          <br></br>
          <label htmlFor="phoneNo">PhoneNo :</label>
          <br></br>
          <input
            placeholder="UpdatePhoneNo"
            id="UpdatePhoneNo"
            onChange={(e) =>
              setUpdateuser({ ...updateUser, phoneno: e.target.value })
            }
            value={updateUser.phoneno}
          ></input>
          <label htmlFor="UpdatePassword">Password :</label>
          <br></br>
          <input
            placeholder="UpdatePassword"
            id="UpdatePassword"
            type="password"
            onChange={(e) =>
              setUpdateuser({ ...updateUser, password: e.target.value })
            }
            value={updateUser.password}
          ></input>
          <label htmlFor="ConfirmUpdatePassword">Password :</label>
          <br></br>
          <input
            placeholder="ConfirmUpdatePassword"
            id="ConfirmUpdatePassword"
            type="password"
            onChange={(e) =>
              setUpdateuser({ ...updateUser, passwordConfirm: e.target.value })
            }
            value={updateUser.passwordConfirm}
          ></input>
          <button id="updatebtn">Update</button>
        </form>
      </main>
    </>
  );
};

export default UpdateProfile;
