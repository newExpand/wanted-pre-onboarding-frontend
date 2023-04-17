import React, { useState } from "react";
import OverlayForm from "../components/OverlayForm";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import classes from "./Authentication.module.css";

const Authentication = () => {
    const [isActive, setIsActive] = useState("");

    const onActiveHandler = () => {
        setIsActive("active");
    };

    const offActiveHandler = () => {
        setIsActive("");
    };

    const booleanActive = isActive === "active";

    return (
        <div className={classes.container}>
            <SignIn isActive={booleanActive} />
            <SignUp isActive={booleanActive} />
            <OverlayForm onActive={onActiveHandler} offActive={offActiveHandler} isActive={booleanActive} />
        </div>
    );
};

export default Authentication;
