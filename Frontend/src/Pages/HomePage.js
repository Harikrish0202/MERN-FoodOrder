import React, { useEffect } from "react";
import FoodCarousel from "../Components/Home/Foodcarousel/FoodCarousel";
import Restaraunts from "../Components/Home/Restaurants/Restaurants";
import { useDispatch, useSelector } from "react-redux";
import {
  restaurantsData,
  // specifyresData,
} from "../store/restaurants/restaurant-action";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Home/Loader";

const HomePage = () => {
  //useDispatch is used to call the function inside action files
  const dispatch = useDispatch();
  //useParams is used to get the id from router
  const { resname } = useParams();

  //getting the information of restaurant from reducers
  const { restaurant, loading, error } = useSelector(
    (state) => state.restaurants
  );

  useEffect(() => {
    //Calling the restaurantData function in action files
    dispatch(restaurantsData());
  }, [dispatch, resname]);

  return (
    <>
      <FoodCarousel />
      {/* if the page is loading this spinner will run */}
      {loading && <Spinner message="Loading Restaurants..." />}

      {/*if everthing is correct this will run  */}
      {restaurant.length > 0 && !loading && !error && (
        <Restaraunts restaurants={restaurant} />
      )}

      {/* if any error is occuring this will run */}
      {error && (
        <p style={{ color: "white ", textAlign: "center", fontSize: "20px" }}>
          Could not fetch the Restaraunts...
        </p>
      )}
    </>
  );
};

export default HomePage;
