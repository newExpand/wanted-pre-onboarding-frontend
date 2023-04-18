import React from "react";
import { useLoaderData } from "react-router-dom";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

interface TodoDataType {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
}

const TodoList = () => {
    const data = useLoaderData() as TodoDataType[];

    return (
        <div className={classes.todoListWarp}>
            <ul>
                {data.map((listData) => (
                    <TodoItem
                        key={listData.id}
                        id={listData.id}
                        todo={listData.todo}
                        isCompleted={listData.isCompleted}
                        userId={listData.userId}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
