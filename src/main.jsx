import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop/Shop";
import Home from "./Components/Layout/Home";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import cartProductsLoader from "./loaders/cartProductsLoader";
import Checkout from "./Components/Checkout/Checkout";
import SingUp from "./Components/SingUp/SingUp";
import AuthProvider from "./Components/provider/AuthProvider";
import PrivetRoute from "./routes/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "checkout",
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/sing-up",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
