import React, { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./SignUp.module.css";

interface Props {
    isActive: boolean;
}

const SignUp = (props: Props) => {
    const [emailValid, setEmailValid] = useState("");
    const [passwordValid, setPasswordValid] = useState("");

    const emailValidHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setEmailValid(target.value);
    };

    const passwordValidHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setPasswordValid(target.value);
    };

    const isEmailError = !emailValid.includes("@");
    const isPasswordError = !(passwordValid.length > 7);
    const isEmailBlurError = !(emailValid.trim().length === 0);
    const isPasswordBlurError = !(passwordValid.trim().length === 0);
    const isDisabled = !isEmailError && !isPasswordError && isEmailBlurError && isPasswordBlurError;

    return (
        <div
            className={`${classes.formContainer} ${classes.signUpContainer} ${
                props.isActive && classes.active
            }`}
        >
            <Form method="post">
                <h1>계정 생성하기</h1>
                <input
                    type="email"
                    data-testid="email-input"
                    placeholder="Email"
                    name="email"
                    onChange={emailValidHandler}
                />
                {isEmailError && isEmailBlurError && <p>@가 포함되어 있지 않습니다.</p>}
                <input
                    type="password"
                    data-testid="password-input"
                    placeholder="Password"
                    name="password"
                    onChange={passwordValidHandler}
                />
                {isPasswordError && isPasswordBlurError && <p>비밀번호가 8글자 미만 입니다.</p>}
                <button disabled={!isDisabled} data-testid="signup-button">
                    회원가입
                </button>
            </Form>
        </div>
    );
};

export default SignUp;
