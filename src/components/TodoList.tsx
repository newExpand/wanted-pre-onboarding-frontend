import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
    return (
        <div className={classes.todoListWarp}>
            <ul>
                <TodoItem />
            </ul>
        </div>
    );
};

export default TodoList;
