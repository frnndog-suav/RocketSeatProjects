import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { HomePage } from "../pages/Home";

export const applicationRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
