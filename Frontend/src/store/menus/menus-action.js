import { menuActions } from "./menus-slice";
import axios from "axios";

export const menusData = (id) => async (dispatch) => {
  const fetchMenusData = async () => {
    dispatch(menuActions.getmenurequset());
    const response = await axios.get(`/api/v1/eats/stores/${id}/menus`);

    if (!response) {
      throw new Error("Could not Fetch Menus");
    }
    const data = response.data;
    return data;
  };
  try {
    const menuData = await fetchMenusData();
    dispatch(
      menuActions.getMenus({
        menus: menuData.data.menu || [],
      })
    );
  } catch (error) {
    throw new Error("Could not Fetch Menus");
  }
};
