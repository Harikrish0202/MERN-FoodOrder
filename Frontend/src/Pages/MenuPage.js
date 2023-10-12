import React from "react";
import Menu from "../Components/Home/Menu/Menu";
import { useParams } from "react-router-dom";

const MenuPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Menu />
    </>
  );
};

export default MenuPage;
