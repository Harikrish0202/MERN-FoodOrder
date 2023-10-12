import React from "react";
import { useState } from "react";

const MenuList = ({ menu }) => {
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
          src={menu.images}
          className="card-img-top menu_img "
          alt="loading"
        />
        <div className="card-body d-flex flex-column ">
          <h6 className="card-title">{menu.foodname}</h6>
          <p className="card-text menu-text menu_descripton">
            {menu.description}
          </p>
          <h6 className="card-title menu_price">&#8377;{menu.price}</h6>
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
          <p className="card-text menu_status">
            Status:<span className="green red">{menu.status}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MenuList;
