import React from "react";
import { Form } from "react-router-dom";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
    return (
        <>
            <h1 className={classes.todoTitle}>Todo List</h1>
            <Form method="post" className={classes.todoForm}>
                <input data-testid="new-todo-input" name="todo" aria-label="오늘의 할 일 입력칸" required />
                <button data-testid="new-todo-add-button">추가</button>
            </Form>
        </>
    );
};

export default TodoForm;
