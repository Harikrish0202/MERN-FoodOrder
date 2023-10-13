import React, { useEffect } from "react";
import FoodCarousel from "../Components/Home/Foodcarousel/FoodCarousel";
import Restaraunts from "../Components/Home/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  restaurantsData,
  // specifyresData,
} from "../store/restaurants/restaurant-action";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { resname } = useParams();
  // console.log(resname);
  const { restaurant, loading } = useSelector((state) => state.restaurantData);

  useEffect(() => {
    if (resname) {
      // dispatch(specifyresData(resname));
    } else {
      dispatch(restaurantsData());
    }
  }, [dispatch, resname]);

  return (
    <>
      <FoodCarousel />
      {loading && (
        <p style={{ color: "white ", textAlign: "center", fontSize: "20px" }}>
          Loading Restaurant.....
        </p>
      )}
      {restaurant.length > 0 && !loading && (
        <Restaraunts restaurants={restaurant} />
      )}
    </>
  );
};

export default HomePage;
