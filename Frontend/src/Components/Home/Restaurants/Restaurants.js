import React, { useState } from "react";
import RestaurantList from "./RestaurantList";
import "./Restaurant.css";

const Restaurants = ({ restaurants }) => {
  const [restaurantslist] = useState(restaurants);

  return (
    <div className=" res_container ">
      <h4 className="res_count">{restaurantslist.length}&nbsp;Restaurants</h4>
      {restaurantslist.length === 0 && <p> Loading...</p>}
      {restaurantslist.length > 0 && (
        <div className="row res_list_container">
          {restaurantslist.map((res) => (
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
