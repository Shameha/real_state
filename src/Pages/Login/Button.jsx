import { useContext } from "react";
import { CgGoogle } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firbase/firebase.config";


const Button = () => {
    const {googleLogin} = useContext(AuthContext);
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const handleSocial = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(error =>{console.error(error)})
    }
    

    const gitHubLogin =() =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
        console.log(result);
    })
    }
  
    
    return (
        <div className="gap-5">
        <button  onClick={()=>handleSocial(googleLogin)} className="btn text-center mt-2 bg-green-800 text-slate-200"> <CgGoogle />Log in with Google</button>
        <button onClick={gitHubLogin} className="btn text-center mt-2 lg:mx-10 bg-green-800 text-slate-200"> <FaGithub />Log in with GitHub</button>
        </div>
    );
};

export default Button;