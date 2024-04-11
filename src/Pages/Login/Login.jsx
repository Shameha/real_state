// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
const handleLogin = e =>{
    e.preventDefault();
console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);
}


    return (
       <div >
        <h1 className="text-3xl my-10 text-center">Please Login</h1>
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
      </form>
      <p className="text-center mt-4">Do not have an account <Link className="text-green-800 font-bold" to="/register">Register</Link></p>
       </div>
    );
};

export default Login;