import { Link } from "react-router-dom";
import QuizCard from "../../Cards/QuizCard";
import { useAppSelector } from "../../../app/hooks";
import { motion } from "framer-motion";
import { containerVariants, itemVariantsD } from "../../motion";
import { useGetQuizzesQuery } from "../../../features/quizzes/quizzesApiSlice";

function Home() {
    const darkMode = useAppSelector((state) => state.darkMode.value);
    const initialMode = darkMode ? "dark" : "light";
    const mode = initialMode;
    const { data, isLoading } = useGetQuizzesQuery();

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 pt-[80px]">
            <motion.div
                className="flex p-[10px] pl-4 no-underline"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Link to={"/quizzes"} className="no-underline">
                    <motion.h2
                        className="dark:text-white translate-x-[15%]"
                        variants={itemVariantsD}
                    >
                        Quizzes →
                    </motion.h2>
                </Link>
            </motion.div>
            <motion.hr
                className="w-[90%] translate-x-[4%] mb-7"
                variants={itemVariantsD}
            />
            <motion.div
                className="flex flex-wrap gap-6 px-4 ml-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {data?.data.map((quiz) => (
                    <motion.div key={quiz.id} variants={itemVariantsD}>
                        <QuizCard
                            mode={mode}
                            quiz={quiz}
                            isLoading={isLoading}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default Home;
