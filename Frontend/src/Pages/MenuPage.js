import React, { useEffect } from "react";
import Menu from "../Components/Home/Menu/Menu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { menusData } from "../store/menus/menus-action";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { menus, loading } = useSelector((state) => state.menus);

  useEffect(() => {
    dispatch(menusData(id));
  }, [id, dispatch]);

  return (
    <>
      {loading && (
        <p style={{ color: "white ", textAlign: "center", fontSize: "20px" }}>
          Loading Menus...
        </p>
      )}
      {menus.length > 0 && !loading && <Menu menu={menus} />}
    </>
  );
};

export default MenuPage;
