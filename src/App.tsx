import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                path: "signup",
                element: <Authentication />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
