import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Alert, AlertColor, AlertTitle } from "@mui/material";
import { Color, getRandomColors } from "../../../constants/getRandomColors";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Question } from "../../../utils/Quiz";

function QuizPage() {
    const location = useLocation();
    const darkMode = useAppSelector((state) => state.darkMode.value);
    const mode = darkMode ? "dark" : "light";
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [color, setColor] = useState<Color>({ bg: "", text: "" });
    const [alert, setAlert] = useState<{
        type: AlertColor;
        message: string;
    } | null>(null);

    useEffect(() => {
        const colorsFromLocation = location.state.colors as Color | null;
        const randomColors = getRandomColors(mode);
        setColor(colorsFromLocation || randomColors);
    }, [location.state, mode]);

    const questions = location.state.questions as Question[];
    console.log("Questions: ", questions);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        if (option === questions[currentQuestionIndex].answer) {
            setAlert({ type: "success", message: "Correct answer!" });
        } else {
            setAlert({ type: "error", message: "Wrong answer!" });
        }
    };

    useEffect(() => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            console.log("Correct answer!");
        }
    }, [currentQuestionIndex, questions, selectedOption]);

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAlert(null);
    };

    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
            {isStarted ? (
                <div
                    className="w-full max-w-[600px] h-full p-6 rounded-lg gap-4 shadow-md transition-all duration-500 ease-in-out"
                    style={{
                        backgroundColor: color.bg,
                        color: color.text,
                    }}
                >
                    {alert && (
                        <Alert severity={alert.type} className="mb-4">
                            <AlertTitle>
                                {alert.type === "success" ? "Success" : "Error"}
                            </AlertTitle>
                            {alert.message}
                        </Alert>
                    )}
                    {questions.map((question, index) => (
                        <Transition
                            key={question._id}
                            as={Fragment}
                            show={index === currentQuestionIndex}
                            appear
                            enter="transition ease-out duration-500 transform"
                            enterFrom="opacity-0 translate-y-0"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-500 transform"
                            leaveFrom="opacity-100 translate-z-0"
                            leaveTo="opacity-0 translate-z-0"
                        >
                            <div>
                                <div className="flex gap-3 items-center">
                                    <span className="w-[35px] h-[35px] mr-2 dark:bg-green-700 bg-green-500 rounded-md flex justify-center items-center">
                                        {index + 1}
                                    </span>
                                    <h3>{question.description}</h3>
                                </div>
                                <div className="mb-4 mt-8">
                                    {question.options.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() =>
                                                handleOptionChange(option)
                                            }
                                            className={`mb-2 items-center flex mt-5 p-4 rounded-md cursor-pointer transition-colors duration-200 ${
                                                selectedOption === option
                                                    ? option ===
                                                      questions[
                                                          currentQuestionIndex
                                                      ].answer
                                                        ? "bg-green-500 text-white"
                                                        : "bg-red-500 text-white"
                                                    : selectedOption &&
                                                        option ===
                                                            questions[
                                                                currentQuestionIndex
                                                            ].answer
                                                      ? "bg-green-500 text-white"
                                                      : "bg-gray-200 dark:bg-gray-700"
                                            } ${selectedOption ? "pointer-events-none" : ""}`}
                                        >
                                            <span className="ml-2">
                                                {option}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className={`px-4 w-[100px] h-[40px] flex justify-center items-center py-2 rounded-md focus:outline-none transition-colors duration-200 border-none ${
                                            selectedOption
                                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                                : "bg-gray-400 text-gray-700 cursor-not-allowed"
                                        }`}
                                        onClick={handleNextQuestion}
                                        disabled={!selectedOption}
                                    >
                                        Suivant
                                    </button>
                                </div>
                            </div>
                        </Transition>
                    ))}
                </div>
            ) : (
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-200 will-change-auto whitespace-nowrap w-[150px] h-[50px] border-none transparent"
                    onClick={() => setIsStarted(true)}
                >
                    Start
                </button>
            )}
        </div>
    );
}

export default QuizPage;
