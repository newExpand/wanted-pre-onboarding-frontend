import { redirect } from "react-router-dom";

export const getAuthToken = () => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    return token;
};

export const checkAuthLoader = () => {
    const token = getAuthToken();

    if (!token) return redirect("/signin");

    return token;
};
