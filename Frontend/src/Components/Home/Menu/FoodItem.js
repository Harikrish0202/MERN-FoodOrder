import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { cartActions } from "../../../store/cart/cart-slice";
import { toast } from "react-toastify";
import { addItem } from "../../../store/cart/cart-action";
import { removeItem } from "../../../store/cart/cart-action";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cartActions } from "../../../store/cart/cart-slice";

//FoodItem component

const FoodItem = ({ fooditem }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  //here i have created one state for appearing and disappearing Addto cart button
  const [appear, setAppear] = useState("true");
  //Duspaling the total Quantity of whatever item you have added
  const [totalItems, setTotalItems] = useState(0);
  const { items } = useSelector((state) => state.cart);

  // whenever the the items and fooditem changing this use effect will run
  useEffect(() => {
    const cartItem = items.find((item) => item.id === fooditem._id);
    if (cartItem) {
      setTotalItems(cartItem.quantity);
      setAppear(false);
    }
  }, [items, fooditem]);

  //Function for disappearing button
  const disAppearButton = () => {
    const restaurant = items.find((item) => item.restaurantId !== id);
    if (restaurant) {
      const errormessage =
        "Sorry at the same you can not order the food from different restaurant";
      dispatch(cartActions.error(errormessage));
      return toast.error(errormessage);
    }

    dispatch(addItem(fooditem._id, id));

    setAppear((prevState) => !prevState);
    setTotalItems((prevState) => prevState + 1);
    toast.success("Item Added");
  };

  //Adding item
  const addToCartHandler = () => {
    const restaurant = items.find((item) => item.restaurantId !== id);

    if (restaurant) {
      const errormessage =
        "Sorry at the same you can not order the food from different restaurant";
      dispatch(cartActions.error(errormessage));
      return toast.error(errormessage);
    }
    dispatch(addItem(fooditem._id, id));

    setTotalItems((prevState) => prevState + 1);
    toast.success("Item Added");
  };

  //Removing item
  const removeToItemHandler = () => {
    if (totalItems === 1) {
      dispatch(removeItem(fooditem._id));

      setTotalItems((prevState) => prevState - 1);
      toast.success("Item Removed");
      return setAppear(true);
    }

    dispatch(removeItem(fooditem._id));
    setTotalItems((prevState) => prevState - 1);
    toast.success("Item Removed");
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
            {/* Displaying the add */}
            {appear && (
              <button className="button" onClick={disAppearButton}>
                Add to cart
              </button>
            )}
            {!appear && (
              <p>
                {/* Removing Items */}
                <button
                  className="removing_btn btn"
                  onClick={removeToItemHandler}
                >
                  -
                </button>
                <span>{totalItems}</span>
                {/* Add Items */}
                <button
                  className="adding_btn btn btn-primary"
                  onClick={addToCartHandler}
                >
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
