import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo3.png";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/class">Class</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link>Logout</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar h-28 bg-slate-400 justify-around">
        <div className="navbar-start md:w-1/4 md:mx-auto">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="ms-6 md:ms-0">
            <Link>
              <img className="rounded" src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden md:flex md:w-2/4 md:mx-auto">
          <ul className="menu menu-horizontal px-1 text-black text-xl">
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
