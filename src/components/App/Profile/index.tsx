import { useEffect } from "react";
import {
    faTrophy,
    faCheckCircle,
    faStar,
    faMedal,
    faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../../constants/images";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { motion } from "framer-motion";
import Skeleton from "../../Skeleton";
import { selectProfile, selectUser } from "../../../features/auth/authSlice";
import { containerVariants, itemVariantsD } from "../../motion";

interface Quiz {
    title: string;
    score?: number;
    date?: string;
}
const recentQuizzes: Quiz[] = [
    { title: "History Quiz", score: 85, date: "2023-06-10" },
    { title: "Science Quiz", score: 78, date: "2023-06-08" },
    { title: "Geography Quiz", score: 92, date: "2023-06-05" },
];
function ProfilePage() {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector(selectUser);
    const currentProfile = useAppSelector(selectProfile);

    useEffect(() => {
        setTimeout(() => {}, 100);
    }, [dispatch]);

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-white dark:bg-gray-900 pt-[40px]">
            <motion.div
                className="w-full p-8 rounded-lg shadow-lg"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {currentUser && currentProfile ? (
                    <div>
                        <motion.h2
                            className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white"
                            variants={itemVariantsD}
                        >
                            Bienvenue, {currentUser.name}!
                        </motion.h2>
                        <motion.div
                            className="flex items-center mb-8"
                            variants={itemVariantsD}
                        >
                            <img
                                src={images.user}
                                className="w-16 h-16 text-gray-900 dark:text-white mr-4 rounded-full"
                            />
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {currentUser.name}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {currentUser.email}
                                </p>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                className="col-span-1 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-800 dark:to-blue-800 p-6 rounded-lg shadow-md text-white"
                                variants={itemVariantsD}
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Statistiques
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className="dark:text-yellow-300 text-yellow-700"
                                        />
                                        <p className="text-lg">
                                            <strong>Score: </strong>
                                            {currentProfile.score}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FontAwesomeIcon
                                            icon={faMedal}
                                            className="dark:text-yellow-300 text-yellow-700"
                                        />
                                        <p className="text-lg">
                                            <strong>Rang: </strong>
                                            {currentProfile.rank}
                                        </p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FontAwesomeIcon
                                            icon={faChartLine}
                                            className="text-blue-400"
                                        />
                                        <p className="text-lg">
                                            <strong>Quizzes Résolus: </strong>
                                            {currentProfile.solved_quizzes}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="col-span-1 bg-gradient-to-r from-pink-400 to-red-500 dark:from-pink-700 dark:to-red-800 p-6 rounded-lg shadow-md text-white"
                                variants={itemVariantsD}
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Succès
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {currentProfile.achievements.map(
                                        (achievement, index) => (
                                            <motion.div
                                                key={index}
                                                className="bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md flex items-center"
                                                variants={itemVariantsD}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTrophy}
                                                    className="mr-2 text-yellow-500"
                                                />
                                                {achievement}
                                            </motion.div>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        </div>
                        {/* <motion.div
                            className="bg-gradient-to-r md:relative left-[25%] h-min from-indigo-400 to-purple-500 dark:from-indigo-700 dark:to-purple-800 p-6 mt-6 rounded-lg flex flex-col justify-center items-center shadow-md text-white md:w-[50%]"
                            variants={itemVariantsD}
                        >
                            <h3 className="text-2xl font-bold">
                                Statistiques par Catégorie
                            </h3>
                            <div className="w-[50%] text-black">
                                <PlayerEvolutionChart />
                            </div>
                        </motion.div>*/}
                        <motion.div
                            className="bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-teal-800 dark:to-cyan-800 p-6 mt-6 rounded-lg shadow-md"
                            variants={itemVariantsD}
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Quiz Récents
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {recentQuizzes.map((quiz, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex justify-between items-center bg-white text-gray-900 p-4 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:scale-105"
                                        variants={itemVariantsD}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                className="text-green-500"
                                            />
                                            <span className="font-semibold">
                                                {quiz.title}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-green-500 font-bold">
                                                {quiz.score}%
                                            </span>
                                            <br />
                                            <span className="text-gray-500">
                                                {quiz.date}
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                ) : (
                    <div>
                        <Skeleton width="200px" height="40px" borderRadius="" />
                        <div className="flex items-center mb-8 mt-4">
                            <Skeleton
                                width="64px"
                                height="64px"
                                    borderRadius="50%"
                                    className="bg-gradient-to-r "
                            />
                            <div className="ml-4">
                                <Skeleton
                                    width="200px"
                                    height="24px"
                                    borderRadius=""
                                />
                                <Skeleton
                                    width="150px"
                                    height="20px"
                                    borderRadius=""
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-800 dark:to-blue-800 p-6 rounded-lg shadow-md text-white">
                                <Skeleton
                                    width="100px"
                                    height="24px"
                                    borderRadius=""
                                />
                                <div className="space-y-2 mt-4">
                                    <Skeleton
                                        width="150px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                    <Skeleton
                                        width="100px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                    <Skeleton
                                        width="200px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 bg-gradient-to-r from-pink-400 to-red-500 dark:from-pink-700 dark:to-red-800 p-6 rounded-lg shadow-md text-white">
                                <Skeleton
                                    width="100px"
                                    height="24px"
                                    borderRadius=""
                                />
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <Skeleton
                                        width="80px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                    <Skeleton
                                        width="80px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                    <Skeleton
                                        width="80px"
                                        height="20px"
                                        borderRadius=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-teal-400 to-cyan-500 dark:from-teal-800 dark:to-cyan-800 p-6 mt-6 rounded-lg shadow-md">
                            <Skeleton
                                width="150px"
                                height="24px"
                                borderRadius=""
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <Skeleton
                                    width="100%"
                                    height="50px"
                                    borderRadius=""
                                />
                                <Skeleton
                                    width="100%"
                                    height="50px"
                                    borderRadius=""
                                />
                                <Skeleton
                                    width="100%"
                                    height="50px"
                                    borderRadius=""
                                />
                                <Skeleton
                                    width="100%"
                                    height="50px"
                                    borderRadius=""
                                />
                            </div>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default ProfilePage;
