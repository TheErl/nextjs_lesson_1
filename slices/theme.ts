import { CaseReducer, createSlice } from "@reduxjs/toolkit";
import { Theme } from "types/theme";

const initialState = 'light' as Theme;

const toggleThemeReducer: CaseReducer<typeof initialState> = (state) => { 
    return state === 'light' ? 'dark' : 'light';
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: toggleThemeReducer,
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;