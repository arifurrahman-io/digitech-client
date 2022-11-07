import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            }
        ]
    }
])