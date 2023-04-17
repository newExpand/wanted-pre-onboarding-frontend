import React from "react";
import classes from "./SignUp.module.css";

interface Props {
    isActive: boolean;
}

const SignUp = (props: Props) => {
    return (
        <div
            className={`${classes.formContainer} ${classes.signUpContainer} ${
                props.isActive && classes.active
            }`}
        >
            <form action="#">
                <h1>계정 생성하기</h1>
                <input type="email" data-testid="email-input" placeholder="Email" />
                <input type="password" data-testid="password-input" placeholder="Password" />
                <button data-testid="signup-button">회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
