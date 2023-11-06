import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Mainpage from "./Pages/Mainpage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import PaymentPage from "./Pages/PaymentPage";
import UserProfilePage from "./Pages/UserProfilePage";
import UpdateProfilePage from "./Pages/UpdateProfilePage";
import DeliveryPage from "./Pages/DeliveryPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import Error from "./Pages/Error";
import MenuPage from "./Pages/MenuPage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { currentUser } from "./store/user/user-action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartPage from "./Pages/CartPage";
import OrderPage from "./Pages/OrderPage";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  const baseRouteElement = (
    <Route path="*" element={<Mainpage />} errorElement={<Error />}>
      <Route id="home" index element={<HomePage />} />
      <Route
        id="search"
        path="eats/stores/search/:resname"
        element={<HomePage />}
        exact
      />
      <Route
        id="menu"
        path="eats/stores/:id/menus"
        element={<MenuPage />}
        exact
      />
      <Route id="login" path="users/login" element={<LoginPage />} exact />
      <Route id="signup" path="users/signup" element={<SignupPage />} exact />
      <Route id="delivery" path="delivery" element={<DeliveryPage />} exact />
      <Route
        id="forgotPassword"
        path="users/forgotPassword"
        element={<ForgotPasswordPage />}
        exact
      />
      <Route
        id="payment"
        path="users/payment"
        element={<PaymentPage />}
        exact
      />
      <Route id="orders" path="users/orders" element={<OrderPage />} exact />

      <Route
        id="userProfile"
        path="users/me"
        element={<UserProfilePage />}
        exact
      />
      <Route
        id="updateProfile"
        path="users/updateProfile"
        element={<UpdateProfilePage />}
        exact
      />
      <Route id="cart" path="cart/cartdetails" element={<CartPage />} exact />
    </Route>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(baseRouteElement)
  );

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        draggable={true}
        transition={Flip}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
