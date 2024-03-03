import { Navigate, createBrowserRouter } from "react-router-dom";
import Defaultlayout from "./defaultlayout";
import SignUp from "../form/signup";
import Login from "../form/login/login";
import Home from "../app/home";



const router = createBrowserRouter([
    {
        path: '/',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/home" /> : <SignUp />
    },
    {
        path: '/login',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to="/home" /> : <Login />,
    },
    {
        path: "/",
        element: <Defaultlayout />,
        children: [
            {
                path: "/home",
                element:
                    localStorage.getItem('loggedIn') === 'true' ? <Home /> : <Navigate to="/login" />
            },
        ]
    }
])

export default router;