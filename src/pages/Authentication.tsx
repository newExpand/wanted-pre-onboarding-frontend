import React, { useState } from "react";
import OverlayForm from "../components/OverlayForm";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import classes from "./Authentication.module.css";

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
        <div className={classes.container}>
            <SignIn isActive={booleanActive} />
            <SignUp isActive={booleanActive} />
            <OverlayForm onActive={onActiveHandler} offActive={offActiveHandler} isActive={booleanActive} />
        </div>
    );
};

export default Authentication;
