import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import MenuPage from "../pages/Menu";
import ShoppingCartPage from "../pages/Menu/ShoppingCart";
import MerchDetailedViewPage from "../pages/MerchDetailedView";
import { ROUTE } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTE["Index"],
    element: <App />,
    children: [
      {
        path: ROUTE["Home"],
        element: <HomePage />,
      },
      {
        path: ROUTE["Merch"],
        element: <MerchDetailedViewPage />,
      },
      {
        path: ROUTE["Menu"],
        element: <MenuPage />,
        children: [
          {
            path: ROUTE["ShoppingCart"],
            element: <ShoppingCartPage />,
          },
        ],
      },
    ],
  },
]);
