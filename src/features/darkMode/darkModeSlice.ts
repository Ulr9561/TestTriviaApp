import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface DarkModeState {
    value: boolean;
}

const initialState: DarkModeState = {
    value: false,
};

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const selectValue = (state: RootState) => state.darkMode.value;
export default darkModeSlice;
