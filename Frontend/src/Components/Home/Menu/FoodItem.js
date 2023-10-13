import React from "react";
import { useState } from "react";

const FoodItem = ({ fooditem }) => {
  const [appear, setAppear] = useState("true");
  const [totalItems, setTotalItems] = useState(0);

  const disAppearButton = () => {
    setAppear((prevState) => !prevState);
  };

  const addingFood = () => {
    setTotalItems((prevItem) => ++prevItem);
  };

  const removingFood = () => {
    if (totalItems === 0) {
      return setAppear(true);
    }
    setTotalItems((prevItem) => --prevItem);
  };

  return (
    <>
      <div className="card menu_list">
        <img
          src={fooditem.images[0].url}
          className="card-img-top menu_img "
          alt="loading"
        />
        <div className="card-body d-flex flex-column ">
          <h6 className="card-title">{fooditem.name}</h6>
          <p className="card-text menu-text menu_descripton">
            {fooditem.description}
          </p>
          <h6 className="card-title menu_price">&#8377;{fooditem.price}</h6>
          <div className="button_container">
            {appear && (
              <button className="button" onClick={disAppearButton}>
                Add to cart
              </button>
            )}
            {!appear && (
              <p>
                <button className="removing_btn" onClick={removingFood}>
                  -
                </button>
                <span>{totalItems}</span>
                <button className="adding_btn" onClick={addingFood}>
                  +
                </button>
              </p>
            )}
          </div>

          {fooditem.stock > 0 ? (
            <p className="card-text menu_status">
              Status:<span className="green red">In Stock</span>
            </p>
          ) : (
            <p className="card-text menu_status">
              Status:<span className="green red">No Stock</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
