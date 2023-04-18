import React from "react";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Authentication, { action as authAction } from "./pages/Authentication";
import RootPage from "./pages/RootPage";
import TodoPages from "./pages/TodoPages";
import { checkAuthLoader } from "./util/auth";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
    },
    {
        path: "signup",
        element: <Authentication />,
        action: authAction,
    },
    {
        path: "signin",
        element: <Authentication />,
        action: authAction,
    },
    {
        path: "todo",
        element: <TodoPages />,
        loader: checkAuthLoader,
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
