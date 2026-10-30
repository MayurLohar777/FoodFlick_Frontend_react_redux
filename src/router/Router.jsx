import { createBrowserRouter } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import Register from "../components/Register";
import AuthLayout from "../layout/AuthLayout.jsx";
import Layout from "../layout/Layout";

import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoutes from "./PublicRoutes";
import ROUTES from "./routespaths";

import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Restaurants from "../components/Restaurant";
import Menu from "../components/Menu";
import Offer from "../components/Offer";
import Order from "../components/Order";
import Wishlist from "../components/Wishlist";
import Cart from "../components/Cart";

export const Router = createBrowserRouter([
  // Public routes: Login and Register
  {
    element: <PublicRoutes />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <LoginForm />,
          },
          {
            path: ROUTES.REGISTER,
            element: <Register />,
          },
        ],
      },
    ],
  },

  // Protected routes: accessible only after login
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: ROUTES.HOME,
            element: <Home />,
          },
          {
            path: ROUTES.ABOUT,
            element: <About />,
          },
          {
            path: ROUTES.CONTACT,
            element: <Contact />,
          },
          {
            path: ROUTES.RESTAURANTS,
            element: <Restaurants />,
          },
          {
            path: ROUTES.MENU,
            element: <Menu />,
          },
          {
            path: ROUTES.OFFERS,
            element: <Offer />,
          },
          {
            path: ROUTES.ORDERS,
            element: <Order />,
          },
          {
            path: ROUTES.WISHLIST,
            element: <Wishlist />,
          },
          {
            path: ROUTES.CART,
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

export default Router;
