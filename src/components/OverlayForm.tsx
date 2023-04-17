import React from "react";
import { Form } from "react-router-dom";
import classes from "./OverlayForm.module.css";

const OverlayForm = () => {
    return (
        <div className={classes.overlayContainer}>
            <div className={classes.overlay}>
                <div className={`${classes.overlayPanel} ${classes.overlayLeft}`}>
                    <h1>오신것을 환영합니다</h1>
                    <p>계속 이용하시려면 로그인후 이용 가능합니다.</p>
                    <button className={classes.ghost}>로그인</button>
                </div>
                <div className={`${classes.overlayPanel} ${classes.overlayRight}`}>
                    <h1>고민하시나요?</h1>
                    <p>회원가입을 하시면 회원님의 모든 일정을 함께 관리해드리겠습니다.</p>
                    <button className={classes.ghost}>회원가입</button>
                </div>
            </div>
        </div>
    );
};

export default OverlayForm;

// {
//     /* // <Form method="post">
// //     <input data-testid="email-input" />
// //     <input data-testid="password-input" />
// //     <button data-testid="signup-button">회원가입</button>
// // </Form> */
// }
