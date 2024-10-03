import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Service from "./pages/Service";
import Layout from "./components/Layout/Layout";
import ProductDetail from "./pages/ProductDetail";
import Main from "./pages/Main";
import Create from "./pages/Create";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>,
            },
            {
                path:"contact",
                element:<Contact/>,
            },
            {
                path:"service",
                element:<Service/>,
            },
            {
                path:"main",
                element:<Main/>,
            },
            {
                path:"*",
                element:<Notfound/>
            },
            {
                path:"Create",
                element:<Create/>
            },
            {
                path:"product/:id",
                element:<ProductDetail/>,   
            }



        ]
    },
    {

    }
])