import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

function Error() {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <main id="error-content">
        <h1>An Error occured</h1>
        <h1>{error.message}</h1>
      </main>
    </div>
  );
}

export default Error;
