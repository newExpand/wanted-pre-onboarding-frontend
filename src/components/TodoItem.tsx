import React, { useState, useEffect } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import classes from "./TodoItem.module.css";
import { getAuthToken } from "../util/auth";
import axios from "axios";

interface TodoDataType {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

const TodoItem = (props: TodoDataType) => {
    const token = getAuthToken();
    const navigate = useNavigate();
    const [deleted, setDeleted] = useState(false);

    const startDeleteHandler = async () => {
        const response = await axios({
            url: process.env.REACT_APP_TODO_API + `todos/${props.id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            method: "DELETE",
        });

        if (response.status === 400 || response.status === 404)
            throw json({ message: "요청에 실패하였습니다." }, { status: 400 });

        setDeleted(true);
        navigate("/todo");
    };

    useEffect(() => {
        setDeleted(false);
    }, []);

    if (deleted) return null;

    return (
        <>
            <li className={classes.todoList}>
                <label>
                    <input type="checkbox" />
                    <span>{props.todo}</span>
                </label>
                <div className={classes.btnWrap}>
                    <button data-testid="modify-button">수정</button>
                    <Link to={`${props.id}`} data-testid="delete-button" onClick={startDeleteHandler}>
                        삭제
                    </Link>
                </div>
            </li>
        </>
    );
};

export default TodoItem;
