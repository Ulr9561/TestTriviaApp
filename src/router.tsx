import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./components/App/Auth/Login";
import Register from "./components/App/Auth/Register";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./components/App/Home";
import QuizList from "./components/App/Quizzes/QuizList";
import QuizPage from "./components/App/Quizzes/QuizPage";
import ProfilePage from "./components/App/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/quizzes",
                element: <QuizList />,
            },
            {
                path: "/quiz/:id",
                element: <QuizPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
        ],
    },
]);

export default router;

