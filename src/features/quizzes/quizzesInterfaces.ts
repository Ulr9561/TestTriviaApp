import { Quiz } from "../../utils/Quiz";

export interface QuizzesState {
    quizzes: Quiz[] | null;
}

export interface QuizzesResponse {
    status: string;
    data: Quiz[];
    message: string;
}
