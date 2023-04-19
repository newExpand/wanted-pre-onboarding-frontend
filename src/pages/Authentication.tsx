import React, { useState } from "react";
import { json, redirect } from "react-router-dom";
import OverlayForm from "../components/OverlayForm";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import axios from "axios";
import Main from "../components/Main";

const Authentication = () => {
    const [isActive, setIsActive] = useState("");

    const onActiveHandler = () => {
        setIsActive("active");
        localStorage.setItem("isSign", "true");
    };

    const offActiveHandler = () => {
        setIsActive("");
        localStorage.setItem("isSign", "false");
    };

    const booleanActive = isActive === "active" || localStorage.getItem("isSign") === "true";

    return (
        <Main>
            <SignIn isActive={booleanActive} />
            <SignUp isActive={booleanActive} />
            <OverlayForm onActive={onActiveHandler} offActive={offActiveHandler} isActive={booleanActive} />
        </Main>
    );
};

export default Authentication;

export const action = async ({ request }: { request: Request }) => {
    try {
        const curPathname = new URL(request.url).pathname;
        const data = await request.formData();
        const authData = {
            email: data.get("email"),
            password: data.get("password"),
        };
        const response = await axios({
            url: process.env.REACT_APP_TODO_API + "auth" + curPathname,
            headers: { "Content-Type": "application/json" },
            method: request.method,
            data: authData,
        });

        if (curPathname === "/signup") {
            localStorage.setItem("isSign", "false");
            return redirect("/signin");
        }

        const resData = await response.data;
        const token = resData.access_token;

        localStorage.setItem("token", token);
        return redirect("/todo");
    } catch (err) {
        return redirect("/error");
    }
};
