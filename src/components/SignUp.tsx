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
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>회원가입</button>
            </form>
        </div>
    );
};

export default SignUp;
