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
import Error from "./Pages/Error";
import MenuPage from "./Pages/MenuPage";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<Mainpage />} errorElement={<Error />}>
      <Route index element={<HomePage />} />
      <Route path="eats/stores/search/:resname" element={<HomePage />} exact />
      <Route path="eats/stores/:id/menus" element={<MenuPage />} exact />
      <Route path="users/login" element={<LoginPage />} exact />
      <Route path="users/signup" element={<SignupPage />} exact />
    </Route>
  )
);

const App = () => {
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
