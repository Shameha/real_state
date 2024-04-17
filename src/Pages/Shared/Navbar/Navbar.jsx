// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import image from "../../../assets/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  const navLink = <>

<li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/user">Update profile</NavLink></li>
    {/* <li><NavLink to="/update">Update Profile</NavLink></li> */}
    <li><NavLink to="/land">Lands and Farm</NavLink></li>

  </>


  return (
    <div className="navbar  bg-gray-200 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
                    
        </div>
        <a className="btn btn-ghost font-bold text-green-900 text-2xl">
          <img src={image} width={50} height={50} alt="" />
          Bella<span className="text-green-600 font-bold">Thorn</span> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1 gap-5">
           {navLink}
         </ul> 
                   
        
      </div>

      <div className="navbar-end">


        <div className="tooltip mt-5" data-tip= {
          user?.displayName||""
        }>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user?.photoURL||""} />
            </div>
          </div>
        </div>
       


        {
          user ?<button onClick={handleSignOut} className="btn mt-5 ">Sign Out</button> :
            <Link to="/login"><button className="btn ">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;