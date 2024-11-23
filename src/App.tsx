import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/Login";
import Error from "./pages/Errorpage";
import Register from "./pages/register";
import HomePage from "./pages/home2";
import Gitbase from "./pages/gitbase";

const router = createBrowserRouter([
  {
    path: "/techfield",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

{

path: "/register",
element: <Register/>,

},

{

  path: "/",
  element: <HomePage/>,
},


  {
    path: "*",
    element: <Error />,
  },

{
  path:"/gitbase",
  element: <Gitbase/>
},

]);

export default function App() {
  return (
    //<h1 className="text-3xl font-bold underline ">
    //Hello world!
    //<Navbar></Navbar>
    //</h1>
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}
