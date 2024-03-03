import { createBrowserRouter } from "react-router-dom";
import Defaultlayout from "./defaultlayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Defaultlayout />,
    }
])

export default router;