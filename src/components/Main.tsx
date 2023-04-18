import React from "react";
import classes from "./Main.module.css";

interface Props {
    className?: string;
}

const Main = (props: React.PropsWithChildren<Props>) => {
    return <main className={`${classes.container} ${classes[`${props.className}`]}`}>{props.children}</main>;
};

export default Main;
