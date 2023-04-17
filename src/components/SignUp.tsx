import React from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
    return (
        <div className={`${classes.formContainer} ${classes.signUpContainer} ${classes.rightPanelActive}`}>
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
