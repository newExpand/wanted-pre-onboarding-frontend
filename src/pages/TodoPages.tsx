import React from "react";
import Main from "../components/Main";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPages = () => {
    return (
        <Main className="blackBg">
            <TodoForm />
            <TodoList />
        </Main>
    );
};

export default TodoPages;
