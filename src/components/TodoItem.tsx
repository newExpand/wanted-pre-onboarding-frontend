import React, { useState, useEffect } from "react";
import { Link, json, useNavigate, Form, redirect } from "react-router-dom";
import classes from "./TodoItem.module.css";
import { getAuthToken } from "../util/auth";
import axios from "axios";

interface TodoDataType {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
    onCheckbox: (changeId: number) => (e: React.ChangeEvent) => void;
}

const TodoItem = (props: TodoDataType) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isShowPutMarkup, setIsShowPutMarkup] = useState(false);

    const putMarkupHandler = (e: React.MouseEvent) => {
        const tartget = e.target as HTMLButtonElement;

        switch (tartget.dataset.testid) {
            case "cancel-button":
                setIsShowPutMarkup(false);
                break;
            case "modify-button":
                setIsShowPutMarkup(true);
                break;
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        props.onCheckbox(props.id)(e);
    };

    useEffect(() => {
        const checkboxIds = JSON.parse(localStorage.getItem("checkboxIds") || "[]");
        setIsChecked(checkboxIds.includes(props.id));
    }, [props.id]);

    return (
        <>
            <li className={classes.todoList}>
                <label>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    {!isShowPutMarkup && <span>{props.todo}</span>}
                </label>
                {!isShowPutMarkup && (
                    <Form method="delete" className={classes.btnWrap}>
                        <button type="button" data-testid="modify-button" onClick={putMarkupHandler}>
                            수정
                        </button>
                        <Link to={`${props.id}`} data-testid="delete-button">
                            삭제
                        </Link>
                    </Form>
                )}
                {isShowPutMarkup && (
                    <Form method="put" className={`${classes.btnWrap} ${classes.putStaus}`}>
                        <input data-testid="modify-input" defaultValue={props.todo} />
                        <div className={classes.btnWrap}>
                            <button data-testid="submit-button">제출</button>
                            <button type="button" data-testid="cancel-button" onClick={putMarkupHandler}>
                                취소
                            </button>
                        </div>
                    </Form>
                )}
            </li>
        </>
    );
};

export default TodoItem;

export const loader = async ({ params }: { request: Request; params: any }) => {
    const curTodoId = params.todoId;
    const token = getAuthToken();

    const response = await axios({
        url: process.env.REACT_APP_TODO_API + `todos/${curTodoId}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        method: "DELETE",
    });
    if (response.status === 400 || response.status === 404)
        throw json({ message: "요청에 실패하였습니다." }, { status: 400 });

    return redirect("/todo");
};
