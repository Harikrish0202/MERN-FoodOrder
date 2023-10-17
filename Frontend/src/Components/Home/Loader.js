import React from "react";
import "./Loader.css";

//Loading component
//When the page is loading this component will get render
function Spinner({ message }) {
  return (
    <>
      <p style={{ color: "white ", textAlign: "center", fontSize: "20px" }}>
        {message}
      </p>

      <div className="custom-spinner">
        <div className="spinner"></div>
      </div>
    </>
  );
}

export default Spinner;
