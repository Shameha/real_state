// import React from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgGoogle } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
const {signIn} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate()
console.log("location of loghin ",location);

const handleLogin = e =>{
    e.preventDefault();
console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
  
      const password = form.get('password');
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
      console.log(result.user);
      //navigate
      navigate(location?.state?location.state: '/');
    })
    .catch(error =>{
      console.error(error)
    })
}


    return (
       <div >
        <h1 className="text-3xl my-7 text-center">Please Login</h1>
         <form onSubmit={handleLogin} className="card-body  mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="gap-5">
        <button className="btn text-center mt-2 bg-green-800 text-slate-200"> <CgGoogle />Log in with Google</button>
        <button className="btn text-center mt-2 lg:mx-10 bg-green-800 text-slate-200"> <FaGithub />Log in with GitHub</button>
        </div>
      </form>
     
      <p className="text-center mt-4"> Do not have an account <Link className="text-green-800 font-bold" to="/register">Register</Link></p>
       </div>
    );
};

export default Login;