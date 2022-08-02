import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from 'lodash';
import { Todo } from "types/todo";


const initialState: Todo[] = [];

const addTodoReducer: CaseReducer<typeof initialState, PayloadAction<string>> = (state, action) => { 
    const newTodo = {
        id: uniqueId(),
        text: action.payload,
    };
    return [...state, newTodo];
};

const deleteTodoReducer : CaseReducer<typeof initialState, PayloadAction<string>> = (state, action) => { 
    return state.filter((item: any) => item.id !== action.payload);
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: addTodoReducer,
        deleteTodo: deleteTodoReducer,
    }
});

export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;