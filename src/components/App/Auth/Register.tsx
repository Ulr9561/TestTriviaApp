import { Link } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EMAIL_REGEX, PWD_REGEX, USER_REGEX } from "../../../constants/const";
import { formVariants, itemVariants } from "../../motion";

/*interface AnimatedDialogProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const AnimatedDialog = ({ open, onClose, children }: AnimatedDialogProps) => (
    <AnimatePresence>
        {open && (
            <Dialog
                open={open}
                onClose={onClose}
                PaperProps={{
                    component: motion.div,
                    initial: { opacity: 0, y: -50 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 50 },
                    transition: { duration: 0.3 },
                }}
            >
                {children}
            </Dialog>
        )}
    </AnimatePresence>
);*/

function Register() {
    const [username, setUsername] = useState("");
    const [usernameFocus, setUsernameFocus] = useState(false);
    const [validUsername, setValidUsername] = useState(false);

    const [email, setEmail] = useState("");
    const [emailFocus, setEmailFocus] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
    }, [password]);

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username]);

    // const [showSuccessDialog, setShowSuccessDialog] = useState(true);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // setShowSuccessDialog(true);
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
                        Register
                    </motion.h1>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-8 rounded-lg shadow-xl"
                        variants={formVariants}
                    >
                        <motion.div className="mb-6" variants={itemVariants}>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium mb-2 text-indigo-300"
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                required
                                type="text"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setUsernameFocus(true)}
                                onBlur={() => setUsernameFocus(false)}
                                aria-invalid={validUsername ? "true" : "false"}
                                aria-describedby="uidnote"
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                            />
                            <p
                                id="uidnote"
                                className={`${usernameFocus && username.trim() !== "" && !validUsername ? "bg-gray-300 text-red-500 font-bold text-base mt-3 flex items-center justify-center rounded-sm p-1" : "hidden"}`}
                            >
                                Username must be at least 4 characters long and
                                contain only letters and numbers
                            </p>
                        </motion.div>
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
                                autoComplete="password"
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
                            className="flex flex-col sm:flex-row items-center justify-between mt-8"
                            variants={itemVariants}
                        >
                            <Link
                                href="/login"
                                className="text-sm text-indigo-400 hover:text-indigo-300 mb-4 sm:mb-0"
                            >
                                Already registered?
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 border-none text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Register
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </div>

            {/*<AnimatedDialog
                open={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
            >
                <DialogTitle className="text-center text-indigo-600">
                    Registration Successful
                </DialogTitle>
                <DialogContent className="flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                    >
                        <CheckCircleIcon className="text-green-500 text-[100px] mb-4" />
                    </motion.div>
                    <motion.p
                        className="text-center text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Your registration was successful. Please check your
                        email to activate your account.
                    </motion.p>
                </DialogContent>
            </AnimatedDialog>*/}
        </div>
    );
}

export default Register;
