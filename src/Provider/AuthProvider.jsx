// import React from 'react';

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firbase/firebase.config";
import { GithubAuthProvider} from "firebase/auth/cordova";
import { toast } from "react-toastify";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    

const creatUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}


//update user 
const updateUseprofile=(name,photo) =>{
   return updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL:photo
      })

}

//user profile 


const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}


const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}


//sign in with google

const googleLogin = () =>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
    toast.success('login succssfully',user);


    }).catch((error) => {
    toast.error(error.massage)
    });
}
const githubLogin =() =>{
    signInWithPopup(auth ,githubProvider)
    .then((result) => {
        const user = result.user;
      toast.success('login succssfully',user);
  
  
      }).catch((error) => {
      toast.error(error.massage)
      });
}

useEffect(()=>{

const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log("user in the change state ",currentUser);
    setUser(currentUser);
    setLoading(false);
});
return()=>{
    unSubscribe();
}

},[]);

   const authInfo ={
    user,
    loading,
    creatUser,
    signIn,
     logOut,
     googleLogin,
     githubLogin,
     updateUseprofile

   }
   
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;