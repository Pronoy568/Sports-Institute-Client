import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/errorPage/error.gif";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div>
        <img src={logo} alt="NotFound" />
        <button className="btn btn-active btn-ghost">
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
