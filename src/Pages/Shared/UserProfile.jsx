// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
    const { user,updateUseprofile } = useContext(AuthContext);


    const handleUpdate = Updation =>{
      Updation()
      .then(result =>{
          console.log(result.user);
          
      })
      .catch(error =>{console.error(error)})
  }



  

    return (
       <div className="lg:flex grid">
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName||""}</h1>
            <p className="py-6">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={()=> handleUpdate(updateUseprofile)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
       </div>
    );
};

export default UserProfile;