import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [],
  },
]);

export default router;
