import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

function App() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
            <Navbar
                items={[]}
                isLogin={false}
                isAll={false}
                isQuizPage={false}
            />
            <motion.div
                className="flex-grow flex flex-col items-center justify-center p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-5xl text-center mb-6 font-bold"
                    variants={itemVariants}
                >
                    Learn 10x{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                        Faster!
                    </span>
                    <br />
                    and enjoy this trivial game
                </motion.h1>
                <motion.p
                    className="text-xl text-center mb-8 max-w-2xl"
                    variants={itemVariants}
                >
                    Unlock your knowledge and your potential with personalized
                    quizzes!
                </motion.p>
                <motion.button
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Get Started
                </motion.button>
            </motion.div>
        </div>
    );
}

export default App;
