import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import CategoryFilteredProduct from "../components/CategoryFilteredProduct";
import AddListing from "../pages/AddListing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import PetSupplies from "../pages/PetSupplies";
import MyListing from "../pages/MyListing";
import MyOrders from "../pages/MyOrders";
import PetSuppliesDetails from "../pages/PetSuppliesDetails";
import UpdateListing from "../pages/UpdateListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category-filtered-product/:categoryName",
        element: <CategoryFilteredProduct></CategoryFilteredProduct>,
      },
      {
        path: "/pets-supplies",
        element: <PetSupplies></PetSupplies>,
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listings/:id",
        element: <UpdateListing></UpdateListing>,
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <PetSuppliesDetails></PetSuppliesDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
