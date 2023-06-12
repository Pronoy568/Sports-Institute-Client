import React from "react";
import {
  FaArrowAltCircleLeft,
  FaBook,
  FaCalendarAlt,
  FaEgg,
  FaHome,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="m-3">
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <FaArrowAltCircleLeft />
          </label>
        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side bg-[#f0f0f0]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClass">
                  <FaUtensils></FaUtensils> Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUser">
                  <FaUser></FaUser> Manage User
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorHome">
                  <FaHome></FaHome> Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <FaUtensils></FaUtensils> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">
                  <FaUser></FaUser> My Class
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedClass">
                  <FaCalendarAlt></FaCalendarAlt> Selected Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClass">
                  <FaWallet></FaWallet> Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaEgg />
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/class">
              <FaWallet></FaWallet> Class
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
