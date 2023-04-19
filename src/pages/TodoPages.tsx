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

export const action = async ({ request, params }: { request: Request; params: any }) => {
    const data = await request.formData();
    const token = getAuthToken();
    const todoData = {
        todo: data.get("todo"),
    };

    try {
        const response = await axios({
            url: process.env.REACT_APP_TODO_API + "todos",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            method: request.method,
            data: todoData,
        });

        return redirect("/todo");
    } catch (err) {
        return redirect("/error");
    }
};
