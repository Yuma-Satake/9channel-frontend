import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail",
      element: <DetailPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
