import { redirect } from "react-router-dom";
import { getTodo } from "./getTodo";

export const getAuthToken = () => {
    const token = localStorage.getItem("token");

    if (!token) return null;

    return token;
};

export const checkLoader = () => {
    const token = getAuthToken();

    if (!token) return redirect("/signin");

    return getTodo(token);
};
