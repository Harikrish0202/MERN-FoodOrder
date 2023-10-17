import React from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";

//Menu Component
const Menu = ({ menu }) => {
  return (
    <>
      {menu.map((menu) => (
        <div className="menu_container" key={menu.items[0]._id}>
          <h4 className="category_name menu_category">{menu.category}</h4>
          <div className="row menu_list_container">
            {menu.items.map((fooditem) => (
              <div
                key={fooditem._id}
                className="col-md-4 col-sm-6 pb-4 col-lg-3 col-12"
              >
                <FoodItem fooditem={fooditem} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Menu;
