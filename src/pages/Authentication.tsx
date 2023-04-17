import React from "react";
import OverlayForm from "../components/OverlayForm";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import classes from "./Authentication.module.css";

const Authentication = () => {
    return (
        <div className={classes.container}>
            <SignIn />
            <SignUp />
            <OverlayForm />
        </div>
    );
};

export default Authentication;
