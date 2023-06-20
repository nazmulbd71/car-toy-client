import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllToy from "../components/AllToy/AllToy";
import NotFound from "../components/NotFound/NotFound";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/alltoy",
                element: <AllToy></AllToy>,
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    }
])

export default router;