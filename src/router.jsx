import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/pages/Home/Home.jsx";
import About from "./Components/pages/about/About.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
            path:"/about",
            element:<About></About>,

        },
    ]
  },

 
]);

export default router;