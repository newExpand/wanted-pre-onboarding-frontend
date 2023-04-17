import React from "react";
import classes from "./SignIn.module.css";

interface Props {
    isActive: boolean;
}

const SignIn = (props: Props) => {
    return (
        <div
            className={`${classes.formContainer} ${classes.signInContainer} ${
                props.isActive && classes.active
            }`}
        >
            <form>
                <h1>이메일 로그인</h1>
                <input type="email" data-testid="email-input" placeholder="Email" />
                <input type="password" data-testid="password-input" placeholder="Password" />
                <button data-testid="signin-button">로그인</button>
            </form>
        </div>
    );
};

export default SignIn;
