import React, { useState } from "react";
import "./Menu.css";
import MenuList from "./MenuList";
const menu = {
  category: "Beverages",
  menus: [
    {
      images:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gpthd2xmhg2wdp0muwsb",
      foodname: "Cappucino",
      description:
        "Serves 1 | A strong shot of Italian styled espresso, evened out with steamed and foamed milk., Serving Size(gm/ml) - 250, Energy (kcal) - 128.9 Contains Milk",
      price: 209,
      status: "In Stock",
      id: 1,
    },
    {
      images:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/adxirgdok9fcgbiwcyzt",
      foodname: "Espresso Shot",
      description:
        "Serves 1 | A 30 ml serving of Coffee Shot for those who love a strong coffee black coffee without milk and without sugar. Serving Size(gm/ml) - 30, Energy (kcal) - 5.81",
      price: 169,
      status: "In Stock",
      id: 2,
    },
    {
      images:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/gwai3ndmxcjfkvk3y5s1",
      foodname: "Cafe Mocha",
      description:
        "Serves 1 | Hot coffee made with the right blend of espresso, hot milk and rich chocolate sauce., Serving Size(gm/ml) - 210, Energy (kcal) - 129.05 Contains Milk",
      price: 229,
      status: "In Stock",
      id: 3,
    },
    {
      images:
        "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream-500x500.jpg",
      foodname: "Cold Coffee",
      description:
        "Creamy Frothy Cold coffee is a perfect beverage for hot summers. With this easy to make the cold coffee recipe, you can make a perfect glass of chilled cafe-style cold coffee at home in minutes.",
      price: 80,
      status: "In Stock",
      id: 4,
    },
  ],
};
const Menu = () => {
  const [menuList] = useState(menu);

  return (
    <>
      <div className="menu_container">
        <h4 className="category_name menu_category">{menuList.category}</h4>
        <div className="row menu_list_container">
          {menuList.menus.map((menu) => (
            <div
              className="col-md-4 col-sm-6 pb-4 col-lg-3 col-12"
              key={menu.id}
            >
              <MenuList menu={menu} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
