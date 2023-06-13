import React from "react";
import {
  FaArrowAltCircleLeft,
  FaCalendarAlt,
  FaHome,
  FaUser,
  FaWallet,
  FaHourglassStart,
} from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { HiCash } from "react-icons/hi";
import { RiFileAddFill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineClass } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

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
                  <MdOutlineClass></MdOutlineClass> Manage Class
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
                  <RiFileAddFill></RiFileAddFill> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">
                  <FcManager></FcManager> My Class
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
                  <FaHourglassStart></FaHourglassStart> Enrolled Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <HiCash></HiCash> Payment History
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
              <GiTeacher />
              Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/class">
              <FaWallet></FaWallet> Class
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut} className="rounded">
              <AiOutlineLogout></AiOutlineLogout> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
