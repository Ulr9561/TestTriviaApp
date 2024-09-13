import { Navigate, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import React from "react";
import { logout, selectjwt } from "../features/auth/authSlice";
import { getCookie } from "../utils/cookieUtils";

function GuestLayout() {
    const token = useAppSelector(selectjwt);
    const cookie = getCookie("jwt");
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.darkMode.value);
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    React.useEffect(() => {
        if (cookie == null) {
            dispatch(logout());
        }
    }, [cookie, dispatch]);

    if (token) {
        <Navigate to="/home" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default GuestLayout;
