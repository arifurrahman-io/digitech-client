import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/404Error/ErrorPage";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import PrivateRouter from "../Pages/PrivateRouter/PrivateRouter";
import Reviews from "../Pages/Reviews/Reviews";
import UpdateReview from "../Pages/Reviews/UpdateReview";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

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
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`https://digitech-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/addservices',
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
            },
            {
                path: '/myreviews',
                element: <PrivateRouter><Reviews></Reviews></PrivateRouter>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/updatereview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://digitech-server.vercel.app/reviews/${params.id}`)
            }
        ]
    }
])