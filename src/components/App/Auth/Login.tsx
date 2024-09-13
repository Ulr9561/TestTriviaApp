import { Alert, Link, Snackbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { EMAIL_REGEX, PWD_REGEX } from "../../../constants/const";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import { selectjwt, setCredentials } from "../../../features/auth/authSlice";
import { setCookie } from "../../../utils/cookieUtils";
import { useLocation, useNavigate } from "react-router-dom";
import { formVariants, itemVariants } from "../../motion";

function Login() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectjwt);
    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        console.log(token);
    })
    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [err, setErr] = useState<string>("");
    const [password, setPassword] = useState("");
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState("");

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const message = params.get("message");
        if (message) {
            setMsg(decodeURIComponent(message));
            navigate(location.pathname, { replace: true });
        }
    }, [location, navigate]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ email, password }).unwrap();
            const { user, jwt, expiresIn, profile } = response;
            setCookie("jwt", jwt, expiresIn * 60);
            setOpen(true);
            dispatch(setCredentials({ user, jwt, expiresIn, profile }));
            navigate('/home')
        } catch (error: unknown) {
            if ((error as Response).status === 401) {
                setErr("Unauthorized: Please check your credentials.");
            } else {
                setErr("An error occurred. Please try again later.");
            }
            console.error("Login error:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
            <div className="flex-grow flex items-center justify-center p-4">
                <motion.div
                    className="w-full max-w-md"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-4xl font-bold mb-8 text-center text-indigo-400"
                        variants={itemVariants}
                    >
                        Login
                    </motion.h1>

                    {msg && (
                        <motion.p
                            className="text-red-500 text-center mb-4"
                            variants={itemVariants}
                        >
                            {msg}
                        </motion.p>
                    )}

                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        className=""
                    >
                        <Alert
                            severity={`${err ? "error" : "success"}`}
                            variant="filled"
                            sx={{ width: "100%" }}
                        >
                            {err ? err : "Login successful!"}
                        </Alert>
                    </Snackbar>

                    <motion.form
                        className="bg-gray-800 p-8 rounded-lg shadow-xl"
                        variants={formVariants}
                        onSubmit={handleLogin}
                    >
                        <motion.div className="mb-6" variants={itemVariants}>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2 text-indigo-300"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                aria-invalid={validEmail ? "true" : "false"}
                                aria-describedby="emailnote"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                            />
                            <p
                                id="emailnote"
                                className={`${emailFocus && email.trim() !== "" && !validEmail ? "bg-gray-300 text-red-500 font-bold text-base mt-3 flex items-center justify-center rounded-sm p-1" : "hidden"}`}
                            >
                                Invalid email address
                            </p>
                        </motion.div>

                        <motion.div className="mb-6" variants={itemVariants}>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium mb-2 text-indigo-300"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setPasswordFocus(true)}
                                onBlur={() => setPasswordFocus(false)}
                                aria-invalid={validPassword ? "true" : "false"}
                                aria-describedby="pwdnote"
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                            />
                            <p
                                id="pwdnote"
                                className={`${passwordFocus && password.trim() !== "" && !validPassword ? "bg-gray-300 text-red-500 font-medium mt-3 flex items-center justify-center rounded-sm p-1" : "hidden"}`}
                            >
                                Must have at least 8 characters included
                                uppercase letters, numbers and special
                                characters
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex items-center mb-6"
                            variants={itemVariants}
                        >
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 block text-sm text-gray-300"
                            >
                                Remember me
                            </label>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-between"
                            variants={itemVariants}
                        >
                            <Link
                                href="#"
                                className="text-sm text-indigo-400 hover:text-indigo-300 mb-4 sm:mb-0"
                            >
                                Forgot your password?
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 border-none text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    "Login"
                                )}
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="mt-6 text-center"
                            variants={itemVariants}
                        >
                            <Link
                                href="/register"
                                className="text-sm text-indigo-400 hover:text-indigo-300"
                            >
                                Don't have an account? Register here
                            </Link>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>
        </div>
    );
}

export default Login;
