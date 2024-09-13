import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { Rating } from "@mui/material";
import React from "react";
import { Fragment } from "react";
import { Color } from "../../constants/getRandomColors";
import { Link } from "react-router-dom";
import { Quiz } from "../../utils/Quiz";

interface QuizDialogProps {
    open: boolean;
    handleClose: () => void;
    colors: Color;
    quiz: Quiz;
}

function QuizDialog({ open, handleClose, colors, quiz }: QuizDialogProps) {
    const [value, setValue] = React.useState<number | null>(2);
    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl dark:bg-indigo-900 bg-indigo-200 p-6 text-left align-middle shadow-xl transition-all">
                                <DialogTitle
                                    as="h3"
                                    className="text-2xl justify-center items-center flex font-medium leading-6 text-gray-900 dark:text-gray-200"
                                >
                                    {quiz.name}
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400">
                                            Duration :
                                        </strong>{" "}
                                        {quiz.duration}
                                    </p>
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400 ">
                                            Category:
                                        </strong>{" "}
                                        {quiz.category}
                                    </p>
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400">
                                            Solves:
                                        </strong>{" "}
                                        40 solves
                                    </p>
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400">
                                            Rating:
                                        </strong>{" "}
                                        <Rating
                                            className=" fill-blue-50 text-blue-50"
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(_event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </p>
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400">
                                            Difficulty:
                                        </strong>{" "}
                                        {quiz.level}
                                    </p>
                                    <p className="flex gap-2 items-center m-2 dark:text-blue-50">
                                        <strong className="mr-2 dark:text-green-400">
                                            Questions Count:
                                        </strong>{" "}
                                        {quiz.questions_number}
                                    </p>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </button>
                                    <Link
                                        to={"/quiz/1"}
                                        state={{
                                            colors: {
                                                bg: colors.bg,
                                                text: colors.text,
                                            },
                                            isQuiz: true,
                                            questions: quiz.questions,
                                        }}
                                        type="button"
                                        className="inline-flex no-underline justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={handleClose}
                                    >
                                        Start Quiz
                                    </Link>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default QuizDialog;
