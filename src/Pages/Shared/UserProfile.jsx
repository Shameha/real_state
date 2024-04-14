// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img src={{user?.photoURL||""}} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName||""}</h1>
            <p className="py-6">gmail</p>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;