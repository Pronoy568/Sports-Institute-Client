import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default Routes;
