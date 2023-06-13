import React from "react";
import { motion } from "framer-motion";

const Profile = ({ user }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1.5 }}
        transition={{ duration: 2 }}
      >
        <div className="flex items-center justify-center text-center">
          <div>
            <h1 className="text-center my-10 font-bold italic text-4xl md:text-5xl text-blue-900 underline decoration-blue-100 decoration-wavy underline-offset-8">
              Profile
            </h1>
            <div className="flex items-center justify-center text-center">
              <img
                //   className="rounded-full border-4 border-green-400"
                className="rounded-full border-8 w-2/5 object-fill"
                src={user?.photoURL}
                alt={user?.displayName}
              />
            </div>
            <h1 className="text-3xl my-5 font-semibold text-center">
              {user?.displayName}
            </h1>
            <h1 className="text-3xl font-semibold text-center">
              {user?.email}
            </h1>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Profile;
