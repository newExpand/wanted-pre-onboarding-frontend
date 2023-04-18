import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const RootPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/signin");
    }, [navigate]);

    return <></>;
};

export default RootPage;
