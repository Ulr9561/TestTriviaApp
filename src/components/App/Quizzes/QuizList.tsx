import { useAppSelector } from "../../../app/hooks";
import { useGetQuizzesQuery } from "../../../features/quizzes/quizzesApiSlice";
import QuizCard from "../../Cards/QuizCard";


function QuizList() {
    const darkMode = useAppSelector((state) => state.darkMode.value);
    const initialMode = darkMode ? "dark" : "light"; // Determine initial mode
    const mode = initialMode;
    const { data, isLoading } = useGetQuizzesQuery();

    console.log("data :", data?.data);
    data?.data.map((quizData) => {
        console.log(quizData);
    });
    console.log("isLoading :", isLoading);
    return (
        <>
            {data?.data.map((quizData) => (
                <div className="flex flex-col gap-3 min-h-screen bg-white dark:bg-gray-900 pt-[80px]">
                    <div className="flex flex-wrap ml-12">
                        <div className="flex p-[5px] no-underline">
                            <h2 className="dark:text-white translate-x-[15%]">
                                Sciences →
                            </h2>
                        </div>
                        <hr className="w-[90%] m-[30px] mt-3" />
                        <div className="flex flex-wrap gap-6 px-4">
                            <>
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                                <QuizCard
                                    mode={mode}
                                    quiz={quizData}
                                    isLoading={isLoading}
                                />
                            </>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 px-4 ml-12">
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                    </div>
                    <div className="flex flex-wrap gap-6 px-4 ml-12">
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                        <QuizCard
                            mode={mode}
                            quiz={quizData}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}

export default QuizList;
