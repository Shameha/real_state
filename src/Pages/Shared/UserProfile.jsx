// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";
// import { getAuth, updateProfile } from "firebase/auth";
// import app from "../../Firbase/firebase.config";

const UserProfile = () => {
  //  const auth = getAuth(app)

    const {user,updateUseprofile, setUser} = useContext(AuthContext);

  //   const update = (data) =>{
  //     const name = data.name;
  //     const photo = data.photo;
  //     updateProfile(auth.currentUser, {
  //       displayName: name, photoURL: photo
  //     }).then(() => {
  //       const updateUser = auth.currentUser;
  //       setUser(updateUser);
      
  //     }).catch((error) => {
  //       console.error(error);
  //     });
      

  //   }

const updation = e=>{
  e.preventDefault();
  const name = e.target.name.value;
  const photo = e.target.photo.value;

updateUseprofile(name,photo)
.then(
  setUser({...user,displayName:name, 
    photoURL:photo})
)

  console.log(name,photo);
}
        
  

    return (
       <div className="lg:flex grid">
         <Helmet><title>Bella thorn| User Profile</title></Helmet>
         <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={user?.photoURL} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={updation} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">{user?.displayName}</span>
          </label>
          <input type="text" placeholder={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text w-auto">Photo</span>
          </label>
          <input type="text" placeholder={user?.photoURL} name="photo"  className="input input-bordered" required />
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