// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
const {creatUser} = useContext(AuthContext);

        const handleRegister = e =>{
            e.preventDefault();
        console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const name = form.get('name');
            const password = form.get('password');
            const photo = form.get('photo');

            console.log(email,name,password,photo);

            
          creatUser(email,password)
          .then(result =>{
            console.log(result.user);
          })
          .catch(error =>{
            console.error(error)
          })

        }
    return (
        <div >
        <h1 className="text-3xl my-10 text-center">Please Register</h1>
         <form onSubmit={handleRegister} className="card-body  mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">Already have an accout?<Link className="text-green-800 font-bold" to="/login">Login</Link></p>
       </div>
    );
        };

export default Register;