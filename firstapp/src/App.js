import "./App.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from "./components/RootLayout";
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Technologies from './components/technologies/Technologies';
import ErrorRoute from "./components/ErrorRoute";
import Java from './components/java/Java'
import NodeJs from './components/nodejs/NodeJs'
import Vue from './components/vue/VueJs'
import UserDashBoard from "./components/user-dashboard/UserDashBoard";


function App() {
  //createw browser router obj
  let router=createBrowserRouter([
   {
    path:'',
    element:<RootLayout />,
    errorElement:<ErrorRoute />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"user-dashboard",
        element:<UserDashBoard />
      },
      {
        path:"technologies",
        element:<Technologies />,
        children:[
          {
            path:'java',
            element:<Java />
          },
          {
            path:"nodejs",
            element:<NodeJs />
          },
          {
            path:"vue",
            element:<Vue />
          }
        ]
      }
    ]
   }
  ])

  return (
    <div>
      {/* provide BrowserRouter obj to application */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
