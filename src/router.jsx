import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/pages/Home/Home.jsx";




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