// import React from 'react';

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firbase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

const creatUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}


const logOut = () =>{
    setLoading(true);
    return signOut(auth);
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

},[])

   const authInfo ={
    user,
    loading,
    creatUser,
    signIn,
     logOut

   }
   
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;