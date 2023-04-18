import React from "react";
import { redirect, Form, json } from "react-router-dom";
import axios from "axios";
import classes from "./TodoForm.module.css";
import { getAuthToken } from "../util/auth";

const TodoForm = () => {
    return (
        <>
            <h1 className={classes.todoTitle}>Todo List</h1>
            <Form method="post" className={classes.todoForm}>
                <input data-testid="new-todo-input" name="todo" />
                <button data-testid="new-todo-add-button">추가</button>
            </Form>
        </>
    );
};

export default TodoForm;

export const action = async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const token = getAuthToken();
    const todoData = {
        todo: data.get("todo"),
    };

    const response = await axios({
        url: process.env.REACT_APP_TODO_API + "todos",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        method: request.method,
        data: todoData,
    });

    if (response.status === 400 || response.status === 404)
        throw json({ message: "요청에 실패하였습니다." }, { status: 400 });

    return redirect("/todo");
};
