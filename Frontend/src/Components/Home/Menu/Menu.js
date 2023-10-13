import React, { useState } from "react";
import "./Menu.css";
import FoodItem from "./FoodItem";

const Menu = ({ menu }) => {
  const [menuList] = useState(menu);

  return (
    <>
      {menuList.map((menu) => (
        <div className="menu_container">
          <h4 className="category_name menu_category">{menu.category}</h4>
          <div className="row menu_list_container" key={menu._id}>
            {menu.items.map((fooditem) => (
              <div className="col-md-4 col-sm-6 pb-4 col-lg-3 col-12">
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
