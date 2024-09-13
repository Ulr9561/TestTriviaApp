import { useEffect, useState } from "react";
import {
    matchPath,
    Navigate,
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logout, selectIsAuthenticated } from "../features/auth/authSlice";
import { getCookie } from "../utils/cookieUtils";

const items = [
    {
        path: "/home",
        label: "Home",
    },
    {
        path: "/quizzes",
        label: "Quizzes",
    },
    {
        path: "/profile",
        label: "Profile",
    }
];
const DefaultLayout = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const publicPaths = ["/login", "/register", "/"];
    const isPublicPath = publicPaths.some((path) =>
        matchPath(path, location.pathname),
    );

    console.log(isAuthenticated);
    useEffect(() => {
        const token = getCookie("jwt");
        if (!token) {
            navigate('/login')
        }
        setLoading(false);
    }, [dispatch, navigate]);

    if (loading) {
        return <div>Loading...</div>; // Vous pouvez remplacer ceci par un vrai indicateur de chargement
    }

    if (!isAuthenticated && !isPublicPath) {
        console.log(
            "User is not authenticated and is trying to access a protected route.",
            dispatch(logout())
        );
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return (
        <div>
            <Navbar
                items={items}
                isLogin={isAuthenticated}
                isAll={false}
                isQuizPage={false}
            />
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
