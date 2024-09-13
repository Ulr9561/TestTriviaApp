import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarItem {
    path: string;
    label: string;
}

interface NavbarProps {
    items: NavbarItem[];
    isLogin: boolean;
    isAll: boolean;
    isQuizPage: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
    items,
    isLogin,
    isAll,
    isQuizPage = false,
}) => {
    const [onMenu, setMenu] = useState(false);
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector((state) => state.darkMode.value);
    const darkModeHandler = () => {
        dispatch({ type: "darkMode/toggleDarkMode" });
    };

    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleMenu = () => {
        setMenu(!onMenu);
    };

    return (
        <nav>
            <motion.div
                className="gap-3 w-full rtl:space-x-reverse justify-between z-10 fixed flex items-center pl-2 pr-6 h-[70px] top-0 bg-sky-500 dark:bg-slate-950 dark:text-white"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
                <motion.div
                    onClick={darkModeHandler}
                    className="focus:outline-none"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {darkMode == true ? (
                        <svg width="30" height="30">
                            <path
                                fill="currentColor"
                                d="
                                M 23, 5
                                A 12 12 0 1 0 23, 25
                                A 12 12 0 0 1 23, 5"
                            />
                        </svg>
                    ) : (
                        <svg width="30" height="30">
                            <circle cx="15" cy="15" r="6" fill="currentColor" />

                            <line
                                id="ray"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                x1="15"
                                y1="1"
                                x2="15"
                                y2="4"
                            ></line>
                            <use href="#ray" transform="rotate(45 15 15)" />
                            <use href="#ray" transform="rotate(90 15 15)" />
                            <use href="#ray" transform="rotate(135 15 15)" />
                            <use href="#ray" transform="rotate(180 15 15)" />
                            <use href="#ray" transform="rotate(225 15 15)" />
                            <use href="#ray" transform="rotate(270 15 15)" />
                            <use href="#ray" transform="rotate(315 15 15)" />
                        </svg>
                    )}
                </motion.div>
                <motion.div
                    className="flex items-center flex-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {isQuizPage ? (
                        <h1 className="text-3xl font-bold">Quiz</h1>
                    ) : (
                        <h1 className="text-3xl font-bold">Trivial Game</h1>
                    )}
                </motion.div>
                {isQuizPage ? null : (
                    <motion.div
                        className="flex-grow flex justify-center items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {items.length > 0 ? (
                            items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="border-none rounded-xl p-2 flex items-center justify-center bg-transparent no-underline dark:text-white text-black"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                            <div className="w-full hidden border-none rounded-xl p-2 items-center justify-center bg-transparent no-underline dark:text-white text-black"></div>
                        )}
                        {isAll ? (
                            <motion.div
                                className="relative w-[300px] left-[60px] h-[35px]"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 20,
                                    delay: 0.6,
                                }}
                            >
                                <div className="flex gap-1 w-full items-center h-full border border-gray-300 bg-slate-100 rounded-md p-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#e8eaed"
                                        className="fill-black"
                                    >
                                        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                                    </svg>
                                    <input
                                        type="search"
                                        className="w-full h-full border-none outline-none placeholder-gray-400 bg-transparent text-black"
                                        placeholder="Rechercher..."
                                    />
                                </div>
                            </motion.div>
                        ) : null}
                    </motion.div>
                )}

                <motion.div
                    className="flex-none flex gap-2"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                        delay: 0.8,
                    }}
                >
                    {!isLogin ? (
                        <>
                            <motion.button
                                className="border-none rounded-xl p-4 flex items-center justify-center h-[20px] bg-transparent dark:bg-slate-700"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={"/login"}
                                    className="no-underline font-semibold dark:text-white text-black"
                                >
                                    Login →
                                </Link>
                            </motion.button>
                            <motion.button
                                className="border-none rounded-xl p-4 flex items-center justify-center h-[20px] bg-transparent bg-slate-700"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to={"/register"}
                                    className="no-underline font-semibold dark:text-white text-white"
                                >
                                    Sign Up
                                </Link>
                            </motion.button>
                        </>
                    ) : (
                        <>
                            <motion.div
                                className="flex justify-center items-center"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img
                                    src={images.user}
                                    alt=""
                                    className="w-[40px] cursor-pointer ml-[30px]"
                                    onClick={toggleMenu}
                                />
                            </motion.div>
                            <AnimatePresence>
                                {onMenu && (
                                    <motion.div
                                        className="absolute top-full right-[2%] w-[300px] max-h-[400px] overflow-hidden"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="bg-slate-400 dark:bg-slate-800 p-[20px] m-[10px]">
                                            <div className="flex items-center">
                                                <img
                                                    src={images.user}
                                                    className="w-[60px] rounded-[50%] mr-[15px]"
                                                />
                                                <h2 className="font-bold">
                                                    Username
                                                </h2>
                                            </div>
                                            <hr
                                                className="border-0 h-[1px] w-full bg-slate-300 "
                                                style={{
                                                    margin: "15px 0 10px",
                                                }}
                                            />

                                            <Link
                                                to={"#"}
                                                className="flex items-center no-underline text-[#525252] hover:font-extrabold hover:translate-x-2 transition-[transform] duration-300"
                                                style={{ margin: "12px 0" }}
                                            >
                                                <img
                                                    src={images.profile}
                                                    className="w-[40px] bg-slate-300 rounded-[50%] p-[8px] mr-[15px]"
                                                />
                                                <p className="w-full dark:text-slate-200">
                                                    Edit Profile
                                                </p>
                                                <span className="text-[22px]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="18px"
                                                        viewBox="0 -960 960 960"
                                                        width="18px"
                                                        fill="#e8eaed"
                                                    >
                                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link
                                                to={"#"}
                                                className="flex items-center no-underline text-[#525252] hover:font-extrabold hover:translate-x-2 transition-[transform] duration-300"
                                                style={{ margin: "12px 0" }}
                                            >
                                                <img
                                                    src={images.setting}
                                                    className="w-[40px] bg-slate-300 rounded-[50%] p-[8px] mr-[15px]"
                                                />
                                                <p className="w-full dark:text-slate-200">
                                                    Settings & Privacy
                                                </p>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="18px"
                                                        viewBox="0 -960 960 960"
                                                        width="18px"
                                                        fill="#e8eaed"
                                                        className="group-hover:translate-x-10"
                                                    >
                                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link
                                                to={"#"}
                                                className="flex items-center no-underline text-[#525252] hover:font-extrabold hover:translate-x-2 transition-[transform] duration-300"
                                                style={{ margin: "12px 0" }}
                                            >
                                                <img
                                                    src={images.help}
                                                    className="w-[40px] bg-slate-300 rounded-[50%] p-[8px] mr-[15px]"
                                                />
                                                <p className="w-full dark:text-slate-200">
                                                    Help & Support
                                                </p>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="18px"
                                                        viewBox="0 -960 960 960"
                                                        width="18px"
                                                        fill="#e8eaed"
                                                    >
                                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                            <Link
                                                to={"#"}
                                                className="flex items-center no-underline text-[#525252] hover:font-extrabold hover:translate-x-2 transition-[transform] duration-300"
                                                style={{ margin: "12px 0" }}
                                            >
                                                <img
                                                    src={images.logout}
                                                    className="w-[40px] bg-slate-300 rounded-[50%] p-[8px] mr-[15px]"
                                                />
                                                <p className="w-full dark:text-slate-200">
                                                    Logout
                                                </p>
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        height="18px"
                                                        viewBox="0 -960 960 960"
                                                        width="18px"
                                                        fill="#e8eaed"
                                                    >
                                                        <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
