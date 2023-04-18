import React, { useState, useEffect } from "react";
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
    const [idsArr, setIdsArr] = useState<number[]>(() => {
        const parseIds: number[] = JSON.parse(localStorage.getItem("checkboxIds") || "[]");
        return parseIds;
    });

    useEffect(() => {
        localStorage.setItem("checkboxIds", JSON.stringify(idsArr));
    }, [idsArr]);

    const checkboxValueHandler = (changeId: number) => (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const checking = target.checked;
        if (checking) {
            setIdsArr([...idsArr, changeId]);
        } else {
            setIdsArr(idsArr.filter((id) => id !== changeId));
        }
    };

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
                        onCheckbox={checkboxValueHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
