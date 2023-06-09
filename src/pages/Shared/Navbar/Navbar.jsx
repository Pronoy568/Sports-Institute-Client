import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo3.png";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import unknown from "../../../assets/unknown/unknown.jpg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  const isAdmin = true;
  const navOptions = (
    <>
      <li className="mx-2">
        <Link to="/">Home</Link>
      </li>
      <li className="mx-2">
        <Link to="/instructors">Instructors</Link>
      </li>
      <li className="mx-2">
        <Link to="/class">Class</Link>
      </li>
      <li>
        <Link to={isAdmin ? "/dashboard/adminHome" : "/dashboard/userHome"}>
          Dashboard
        </Link>
      </li>
      {user?.email ? (
        <>
          <li className="mx-2">
            {user?.photoURL ? (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-10 rounded-xl"
                    src={user?.photoURL}
                    alt={user?.email}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-10 rounded-xl"
                    src={unknown}
                    alt={user?.email}
                  />
                </div>
              </>
            )}
          </li>

          <li className="mx-2">
            <button onClick={handleLogOut} className="rounded">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="mx-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="mx-2">
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar h-28 bg-white justify-around">
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
            <Link to="/">
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
