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
import ManageUser from "../DashboardPages/Admin/ManageUser/ManageUser";
import InstructorHome from "../DashboardPages/Instructor/InstructorHome/InstructorHome";
import SelectedClass from "../DashboardPages/User/SelectedClass/SelectedClass";
import Payment from "../DashboardPages/User/Payment/Payment";
import AddClass from "../DashboardPages/Instructor/AddClass/AddClass";
import MyClass from "../DashboardPages/Instructor/MyClass/MyClass";

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
        path: "selectedClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
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
      {
        path: "manageUser",
        element: <ManageUser></ManageUser>,
      },
      // instructor routes
      {
        path: "instructorHome",
        element: (
          // <AdminRoute>
          <InstructorHome></InstructorHome>
          // </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
    ],
  },
]);

export default Routes;
