import React, { useState, useEffect } from "react";
import { json, redirect, useNavigate } from "react-router-dom";
import classes from "./TodoItem.module.css";
import axios from "axios";
import { getAuthToken } from "../util/auth";

interface TodoDataType {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
    onCheckbox: (changeId: number) => (e: React.ChangeEvent) => void;
    onUpdate: (id: number, updateTodo: TodoDataType) => void;
}

const TodoItem = (props: TodoDataType) => {
    const token = getAuthToken();
    const navigate = useNavigate();
    const [deleted, setDeleted] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isShowPutMarkup, setIsShowPutMarkup] = useState(false);
    const [inputValue, setInputValue] = useState(`${props.todo}`);

    const inputChangeHandler = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setInputValue(target.value);
    };

    const putDeleteHandler = async (type: string) => {
        const todoData = {
            todo: inputValue,
            isCompleted: true,
        };
        const response = await axios({
            url: process.env.REACT_APP_TODO_API + `todos/${props.id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            method: type,
            data: todoData,
        });

        if (response.status === 400 || response.status === 404)
            throw json({ message: "요청에 실패하였습니다." }, { status: 400 });

        const updatedTodo = response.data;
        props.onUpdate(props.id, updatedTodo);
        setIsShowPutMarkup(false);
        navigate("/todo");
    };

    const putMarkupHandler = (e: React.MouseEvent) => {
        const tartget = e.target as HTMLButtonElement;

        switch (tartget.dataset.testid) {
            case "cancel-button":
                setIsShowPutMarkup(false);
                navigate("/todo");
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

    useEffect(() => {
        setDeleted(false);
    }, []);

    if (deleted) return null;

    return (
        <>
            <li className={classes.todoList}>
                <label>
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    {!isShowPutMarkup && <span>{props.todo}</span>}
                </label>
                {!isShowPutMarkup && (
                    <div className={classes.btnWrap}>
                        <button data-testid="modify-button" onClick={putMarkupHandler}>
                            수정
                        </button>
                        <button data-testid="delete-button" onClick={putDeleteHandler.bind(null, "DELETE")}>
                            삭제
                        </button>
                    </div>
                )}
                {isShowPutMarkup && (
                    <div className={`${classes.btnWrap} ${classes.putStaus}`}>
                        <input
                            data-testid="modify-input"
                            name="putInput"
                            defaultValue={props.todo}
                            onChange={inputChangeHandler}
                        />
                        <div className={classes.btnWrap}>
                            <button data-testid="submit-button" onClick={putDeleteHandler.bind(null, "PUT")}>
                                제출
                            </button>
                            <button type="button" data-testid="cancel-button" onClick={putMarkupHandler}>
                                취소
                            </button>
                        </div>
                    </div>
                )}
            </li>
        </>
    );
};

export default TodoItem;
