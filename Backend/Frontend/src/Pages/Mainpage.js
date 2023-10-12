import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";

function Mainpage() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Mainpage;
