import React from "react";
import { json, redirect } from "react-router-dom";
import axios from "axios";
import Main from "../components/Main";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { getAuthToken } from "../util/auth";

const TodoPages = () => {
    return (
        <Main className="blackBg">
            <TodoForm />
            <TodoList />
        </Main>
    );
};

export default TodoPages;

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
