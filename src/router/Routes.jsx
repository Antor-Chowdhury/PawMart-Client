import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import CategoryFilteredProduct from "../components/CategoryFilteredProduct";
import AddListing from "../pages/AddListing";

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
        path: "/add-listing",
        element: <AddListing></AddListing>,
      },
    ],
  },
]);

export default router;
