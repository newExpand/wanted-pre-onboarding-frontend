import React, { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./SignIn.module.css";

interface Props {
    isActive: boolean;
}

const SignIn = (props: Props) => {
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
            className={`${classes.formContainer} ${classes.signInContainer} ${
                props.isActive && classes.active
            }`}
        >
            <Form method="post">
                <h1>이메일 로그인</h1>
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
                <button disabled={!isDisabled} data-testid="signin-button">
                    로그인
                </button>
            </Form>
        </div>
    );
};

export default SignIn;
