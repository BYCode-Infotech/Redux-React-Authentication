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
        element: localStorage.getItem('loggedIn') === 'true' ? <Defaultlayout /> : <Navigate to="/login" />,
        children: [
            {
                path: "/home",
                element: <Home />

            },
        ]
    }
])

export default router;