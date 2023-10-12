import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating-stars-component";

function RestaurantList({ resList }) {
  return (
    <div className="card  res_list">
      <Link to="/eats/stores/:id/menus">
        <img
          src={resList.images[0].url}
          id={resList.images[0]._id}
          className="card-img-top res_img"
          alt={resList.name}
        />
      </Link>
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title">{resList.name}</h5>
        {/* <hr></hr> */}
        <p className="card-text">{resList.address}</p>
        <div className="mt-auto">
          <Rating
            className="rating"
            count={5}
            size={20}
            activeColor="#ffd700" // Gold color for filled stars
            value={resList.ratings}
            edit={false} // Disable user interaction
          />
          <span id="no_of_reviews">{resList.numOfReviews} Reviews</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;
