import React, { useEffect } from "react";
import Menu from "../Components/Home/Menu/Menu";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { menusData } from "../store/menus/menus-action";
import Spinner from "../Components/Home/Loader";

const MenuPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //Getting the menu information from reducers
  const { menus, loading, error } = useSelector((state) => state.menus);

  useEffect(() => {
    //Calling the menuData function in action files
    dispatch(menusData(id));
  }, [id, dispatch]);

  return (
    <>
      {/* if the page is loading this spinner will run */}
      {loading && <Spinner message="Loading Menus..." />}

      {/*if everthing is correct this will run  */}
      {menus.length > 0 && !loading && !error && <Menu menu={menus} />}

      {/* if any error is occuring this will run */}
      {error && !loading && (
        <p style={{ color: "white ", textAlign: "center", fontSize: "20px" }}>
          Could not fetch the Menus...
        </p>
      )}
    </>
  );
};

export default MenuPage;
