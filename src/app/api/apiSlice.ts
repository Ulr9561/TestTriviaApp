/* eslint-disable @typescript-eslint/no-unused-vars */
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.jwt;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
        }
        return headers;
    },
})

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        console.log('Logout');
        console.log(result.error);
    } else if (result?.error) {
        console.log('Error', result);
        console.log('Error result', result.error);
    }
    return result;
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (_builder) => ({})
})
