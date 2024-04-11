import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Contact from "../Pages/Shared/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
        path:'/conect',
        element:<Contact></Contact>
      },
      {
           path:'/login',
           element:<Login></Login>
      },
      {
           path:'/register',
           element:<Register></Register>
      }
  ]

  }

]);
export default router;