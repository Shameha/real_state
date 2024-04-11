// import React from 'react';

import { createContext, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firbase/firebase.config";
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

const creatUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
}

   const authInfo ={
    user,
    creatUser,
   }
   
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;