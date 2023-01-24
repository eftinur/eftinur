import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Home/Blogs/Blogs";
import Contact from "../pages/Home/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Work from "../pages/Home/Work/Work";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/projects',
                element: <Work />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router;