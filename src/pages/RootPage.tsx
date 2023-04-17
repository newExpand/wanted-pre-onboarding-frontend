import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const RootPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/signup");
    }, [navigate]);

    return (
        <>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootPage;
