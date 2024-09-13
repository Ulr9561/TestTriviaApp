import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice, { DarkModeState } from "../features/darkMode/darkModeSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import authSlice from "../features/auth/authSlice";
import { PersistPartial } from "redux-persist/lib/persistReducer";
import { AuthState } from "../features/auth/authInterfaces";
import { apiSlice } from "./api/apiSlice";

const persistConfig = {
    key: "root",
    storage,
};

export interface RootState {
    darkMode: DarkModeState & PersistPartial;
    auth: AuthState;
}
const persistedReducer = persistReducer(persistConfig, darkModeSlice.reducer);
const persistedAuth = persistReducer(persistConfig, authSlice.reducer);


export const store = configureStore({
    reducer: {
        darkMode: persistedReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedAuth,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(apiSlice.middleware),
    devTools: true,
});


export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);
