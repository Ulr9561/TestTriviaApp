import { apiSlice } from "../../app/api/apiSlice";
import { QuizzesResponse } from "./quizzesInterfaces";

export const quizzesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizzes: builder.query<QuizzesResponse, void>({
            query: () => ("/v1/quizzes"),
        }),
    }),
});

export const { useGetQuizzesQuery } = quizzesApiSlice;

