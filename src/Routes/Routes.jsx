import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
// import Contact from "../Pages/Shared/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
// import UpdateProfile from "../Pages/Shared/UpdateProfile/UpdateProfile";
import UserProfile from "../Pages/Shared/UserProfile";
import Card from "../Pages/Carrd/Card";
import PrivateRouter from "./PrivateRouter";
import Land from "../Pages/land/Land";
import ErrorPage from "../Pages/Error-page/ErrorPage";


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
       path:'/',
       element:<Home></Home>,
       loader: () =>fetch('/land.json')

      },
      {
         path:'/land/:id',
         element:<PrivateRouter><Card></Card></PrivateRouter>,
         loader: () =>fetch('/land.json')
      },
      {
        path:'/user',
        element:<PrivateRouter><UserProfile></UserProfile></PrivateRouter>
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
           path:'/land',
           element:<PrivateRouter><Land></Land></PrivateRouter>
      }
  ]

  }

]);
export default router;