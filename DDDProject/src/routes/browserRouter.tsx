import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home";
import MerchDetailedViewPage from "../pages/MerchDetailedView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/merch/:id",
        element: <MerchDetailedViewPage />,
      },
    ],
  },
]);
