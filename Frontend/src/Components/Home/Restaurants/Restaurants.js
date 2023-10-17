import React from "react";
import RestaurantList from "./RestaurantList";
import "./Restaurant.css";

//Restaurant Component
const Restaurants = ({ restaurants }) => {
  return (
    <div className=" res_container ">
      <h4 className="res_count">{restaurants.length}&nbsp;Restaurants</h4>
      {restaurants.length === 0 && <p> Loading...</p>}
      {restaurants.length > 0 && (
        <div className="row res_list_container">
          {restaurants.map((res) => (
            <div
              className="col-md-4 col-sm-6 pb-4 col-lg-3 col-12"
              key={res._id}
            >
              <RestaurantList resList={res} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Restaurants;
