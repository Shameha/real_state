import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
// import Contact from "../Pages/Shared/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UpdateProfile from "../Pages/Shared/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/Shared/UserProfile";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
       path:'/',
       element:<Home></Home>

      },
      {
        path:'/user',
        element:<UserProfile></UserProfile>
      },
      {
           path:'/login',
           element:<Login></Login>
      },
      {
           path:'/register',
           element:<Register></Register>
      },
      {
           path:'/update',
           element:<UpdateProfile></UpdateProfile>
      }
  ]

  }

]);
export default router;