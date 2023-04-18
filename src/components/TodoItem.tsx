import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = () => {
    return (
        <>
            <li className={classes.todoList}>
                <label>
                    <input type="checkbox" />
                    <span>asdfasdf sadfasdfasdf</span>
                </label>
                <div className={classes.btnWrap}>
                    <button data-testid="modify-button">수정</button>
                    <button data-testid="delete-button">삭제</button>
                </div>
            </li>
        </>
    );
};

export default TodoItem;
