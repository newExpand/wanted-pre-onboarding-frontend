import React from "react";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
    return (
        <>
            <h1 className={classes.todoTitle}>Todo List</h1>
            <form className={classes.todoForm}>
                <input data-testid="new-todo-input" />
                <button data-testid="new-todo-add-button">추가</button>
            </form>
        </>
    );
};

export default TodoForm;
