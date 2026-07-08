import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Layout from "./Components/Layout/Layout.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:"/",
            element:<Home></Home>

        },
    ]
  },

 
]);

export default router;