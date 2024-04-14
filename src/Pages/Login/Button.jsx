import { useContext } from "react";
import { CgGoogle } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";


const Button = () => {
    const {googleLogin,githubLogin} = useContext(AuthContext);
    
    const handleSocial = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(error =>{console.error(error)})
    }
    
  
    
    return (
        <div className="gap-5">
        <button  onClick={()=>handleSocial(googleLogin)} className="btn text-center mt-2 bg-green-800 text-slate-200"> <CgGoogle />Log in with Google</button>
        <button onClick={() =>handleSocial(githubLogin)} className="btn text-center mt-2 lg:mx-10 bg-green-800 text-slate-200"> <FaGithub />Log in with GitHub</button>
        </div>
    );
};

export default Button;