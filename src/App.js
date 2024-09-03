import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Title from "./components/Title"
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Error from "./components/Error"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import RestaurantDetails from "./components/RestaurantDeatils";
import Profile from './components/Profile'
import Shimmer from "./components/Shimmer";
//This is normal loading
// import Instamart from "./components/Instamart";
// import About from "./components/About"

// This is lazy loading
const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))



const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>loading .....</h1>}><About /></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetails />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>
            }
        ]
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
