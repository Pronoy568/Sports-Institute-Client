import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const UserRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isUser, isUserLoading] = useUser();
  const location = useLocation();

  if (loading || isUserLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isUser) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default UserRoute;
