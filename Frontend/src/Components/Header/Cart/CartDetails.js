import React from "react";
import { useSelector } from "react-redux";
import "./CartDetails.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import { cartActions } from "../../../store/cart/cart-slice";
import { addItem } from "../../../store/cart/cart-action";
import { removeItem } from "../../../store/cart/cart-action";
import { deleteItem } from "../../../store/cart/cart-action";

const CartDetails = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity } = useSelector((state) => state.cart);

  //Adding the iteem into cart
  const addToCartHandler = (id) => {
    dispatch(addItem(id));
    toast.success("Item Added");
  };

  //Removing the item into cart
  const removeToItemHandler = (id) => {
    dispatch(removeItem(id));
    toast.success("Item Removed");
  };

  //Deleting the item into cart
  const deleteToItemHandler = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      {items.length === 0 && <h3 className="cart_none">You Cart is empty</h3>}
      {items.length > 0 && (
        <div className="cart_container container">
          <h3 className="cart_length">
            Your Cart : {items.length} {items.length === 1 ? "Item" : "Items"}
          </h3>
          <div className="cartitem_container row d-flex justify-content-evenly">
            <div className="col-12 col-lg-8">
              {items.map((item) => (
                <>
                  <hr style={{ color: "white" }}></hr>
                  <div className="cart_item ">
                    <div className="row container ">
                      <div className="col-12 col-lg-3 item_image d-flex justify-content-center align-items-center">
                        <img
                          src={item.image}
                          alt="itemimage"
                          className="item_img"
                          height="90"
                          width="115"
                        ></img>
                      </div>
                      <div className="col-12 col-lg-3 item_name d-flex justify-content-center align-items-center ">
                        <p id="item_name">{item.name}</p>
                      </div>
                      <div className="col-4 col-lg-2 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                        <p id="item_price">
                          <i className="fa fa-rupee"></i>&nbsp;{item.price}
                        </p>
                      </div>
                      <div className="col-4 col-lg-3 mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                        <div className="stockCounter d-flex">
                          {/* Removing item */}
                          <span
                            className="btn btn-danger minus"
                            onClick={() => removeToItemHandler(item.id)}
                          >
                            -
                          </span>

                          <input
                            type="number"
                            className="form-control count "
                            value={item.quantity}
                            readOnly
                          />
                          {/* Adding item */}
                          <span
                            className="btn btn-primary plus"
                            onClick={() => addToCartHandler(item.id)}
                          >
                            +
                          </span>
                        </div>
                      </div>
                      <div className="col-4 col-lg-1 mt-4 mt-lg-0 d-flex justify-content-between align-items-center">
                        {/* Deleting item */}
                        <i
                          id="delete_cart_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() => deleteToItemHandler(item.id)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "white" }}></hr>
                </>
              ))}
            </div>
            <div
              className="col-12 col-lg-3 my-4 d-flex justify-content-around align-items-center"
              id="order_summary"
            >
              <div>
                <h4>Order Summary</h4>
                <hr />

                <p className="d-flex">
                  <span className="flex-grow-1"> Subtotal :</span>
                  <span className="order-summary-values">
                    {totalQuantity}(units)
                  </span>
                </p>

                <p className="d-flex">
                  <span className="flex-grow-1">Total :</span>
                  <span className="order-summary-values">
                    <i className="fa fa-rupee"></i>
                    {items
                      .reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                  <button id="checkout_btn" className="btn">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDetails;
