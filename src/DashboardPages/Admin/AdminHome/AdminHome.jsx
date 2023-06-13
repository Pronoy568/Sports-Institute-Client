import React from "react";
import useAuth from "../../../hooks/useAuth";
import Profile from "../../../pages/Shared/Profile/Profile";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Profile user={user}></Profile>
    </div>
  );
};

export default AdminHome;
