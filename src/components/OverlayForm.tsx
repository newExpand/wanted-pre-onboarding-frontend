import React from "react";
import { Link } from "react-router-dom";
import classes from "./OverlayForm.module.css";

interface ActiveProps {
    onActive: () => void;
    offActive: () => void;
    isActive: boolean;
}

const OverlayForm = (props: ActiveProps) => {
    return (
        <div className={`${classes.overlayContainer} ${props.isActive && classes.active}`}>
            <div className={`${classes.overlay} ${props.isActive && classes.active}`}>
                <div
                    className={`${classes.overlayPanel} ${classes.overlayLeft} ${
                        props.isActive && classes.active
                    }`}
                >
                    <h1>오신것을 환영합니다</h1>
                    <p>계속 이용하시려면 로그인후 이용 가능합니다.</p>
                    <Link to="/signin" className={classes.ghost} onClick={props.offActive}>
                        로그인
                    </Link>
                </div>
                <div
                    className={`${classes.overlayPanel} ${classes.overlayRight} ${
                        props.isActive && classes.active
                    }`}
                >
                    <h1>고민하시나요?</h1>
                    <p>회원가입을 하시면 회원님의 모든 일정을 함께 관리해드리겠습니다.</p>
                    <Link to="/signup" className={classes.ghost} onClick={props.onActive}>
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OverlayForm;
