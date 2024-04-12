// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import image from "../../../assets/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png"
const Navbar = () => {
const navLink=<>
 
 <li><NavLink to="/">Home</NavLink></li>
 <li><NavLink to="/user">User profile</NavLink></li>
 <li><NavLink to="/update">Update Profile</NavLink></li>

</>


    return (
        <div className="navbar bg-base-100 bg-gray-200 sticky">
        <div className="navbar-start sticky">
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
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
            
       <Link to="/login"><button className="btn ">Login</button></Link>
        </div>
      </div>
    );
};

export default Navbar;