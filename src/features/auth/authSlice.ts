import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User, { Profile } from "../../utils/User";
import { RootState } from "../../app/store";
import { AuthState } from "./authInterfaces";


const initialState: AuthState = {
    user: null,
    jwt: null,
    expiresIn: null,
    profile: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{
                user: User;
                jwt: string;
                expiresIn: number;
                profile: Profile;
            }>,
        ) => {
            state.user = action.payload.user;
            state.jwt = action.payload.jwt;
            state.expiresIn = Date.now() + action.payload.expiresIn * 1000;
            state.profile = action.payload.profile;
        },
        logout: (state) => {
            state.user = null;
            state.jwt = null;
            state.expiresIn = null;
        },

    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice;


export const selectUser = (state: RootState) => state.auth.user;
export const selectjwt = (state: RootState) => state.auth.jwt;
export const selectExpiresIn = (state: RootState) => state.auth.expiresIn;
export const selectProfile = (state: RootState) => state.auth.profile;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.jwt;
