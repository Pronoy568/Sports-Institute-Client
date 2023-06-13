import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
import ManageClass from "../DashboardPages/Admin/ManageClass/ManageClass";
import EnrolledClass from "../DashboardPages/User/EnrolledClass/EnrolledClass";
import PaymentHistory from "../DashboardPages/User/PaymentHistory/PaymentHistory";
import NotFound from "../pages/Shared/NotFound/NotFound";
import App from "../pages/Home/Home/App";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import UserRoute from "./UserRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <App />,
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
        element: (
          <UserRoute>
            <UserHome></UserHome>
          </UserRoute>
        ),
      },
      {
        path: "selectedClass",
        element: (
          <UserRoute>
            <SelectedClass></SelectedClass>
          </UserRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <UserRoute>
            <Payment></Payment>
          </UserRoute>
        ),
      },
      {
        path: "enrolledClass",
        element: (
          <UserRoute>
            <EnrolledClass></EnrolledClass>
          </UserRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageClass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      // instructor routes
      {
        path: "instructorHome",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default Routes;
