import React from "react";
import MainLayout from "../Layout/MainLayout";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MainLayout></MainLayout>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default myRouter;
