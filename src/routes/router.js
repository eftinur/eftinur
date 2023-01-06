import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Home/Blogs/Blogs";
import Contact from "../pages/Home/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import WorkItems from "../pages/WorkItems/WorkItems";

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
                element: <WorkItems />
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails />,
                loader: ({params}) => {
                    return fetch(`https://eftinur-serv.vercel.app/projects/${params.id}`)
                }
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