import axios from "axios";

export const getTodo = async (token) => {
    const response = await axios({
        url: process.env.REACT_APP_TODO_API + "todos",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
    });

    const resData = response.data;
    return resData;
};
