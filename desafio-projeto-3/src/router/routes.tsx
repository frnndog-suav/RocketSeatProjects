import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { DetailsPage } from "../pages/Details";
import { HomePage } from "../pages/Home";

export const paths = {
  home: "/",
  details: "/details/:number",
};

export const applicationRoutes = createBrowserRouter([
  {
    path: paths.home,
    element: <DefaultLayout />,
    children: [
      {
        path: paths.home,
        element: <HomePage />,
      },
      {
        path: paths.details,
        element: <DetailsPage />,
      },
    ],
  },
]);
