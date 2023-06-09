import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Class from "../pages/Class/Class";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../DashboardPages/Admin/AdminHome/AdminHome";
import UserHome from "../DashboardPages/User/UserHome/UserHome";
import ManageUser from "../DashboardPages/User/ManageUser/ManageUser";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/class",
        element: <Class />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          // <AdminRoute>
          <AdminHome></AdminHome>
          // </AdminRoute>
        ),
      },
    ],
  },
]);

export default Routes;
