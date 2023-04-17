import React from "react";
import classes from "./SignIn.module.css";

const SignIn = () => {
    return (
        <div className={`${classes.formContainer} ${classes.signInContainer}`}>
            <form>
                <h1>이메일 로그인</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>로그인</button>
            </form>
        </div>
    );
};

export default SignIn;
