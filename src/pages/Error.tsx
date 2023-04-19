import React from "react";
import classes from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <>
            <section className={classes.errorPage}>
                <div className={classes.errorPageText}>
                    <h3>404</h3>
                    <Link to="/" className={classes.errorPageButton}>
                        Back to home
                    </Link>
                </div>
                <span className={classes.errorPageTempleweedContainer}>
                    <img
                        src="https://i.ibb.co/mTg87G2/tembleweed.png"
                        className={classes.errorPageTembleweed}
                    />
                </span>
            </section>
        </>
    );
};

export default Error;
