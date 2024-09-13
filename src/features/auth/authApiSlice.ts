import { apiSlice } from "../../app/api/apiSlice";
import { LoginResponse } from "./authInterfaces";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, { email: string, password: string }>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials },
            }),
        })
    })
})

export const { useLoginMutation } = authApiSlice;
