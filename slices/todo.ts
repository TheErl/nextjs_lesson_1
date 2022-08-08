import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from 'lodash';
import { fetchTodos } from "services/todo";
import { Todo } from "types/todo";


const initialState: Todo[] = [];

const addTodoReducer: CaseReducer<typeof initialState, PayloadAction<string>> = (state, action) => { 
    const newTodo = {
        id: uniqueId(),
        title: action.payload,
    };
    return [...state, newTodo];
};

const deleteTodoReducer: CaseReducer<typeof initialState, PayloadAction<string>> = (state, action) => { 
    return state.filter((item: any) => item.id !== action.payload);
};

const fetchTodosReducer: CaseReducer<typeof initialState, PayloadAction<Todo[]>> = (state, action) => {
    return [...action.payload];
};

export const fetchTodosThunk = createAsyncThunk(
    'todos/fetchTodos',
    fetchTodos,
);


export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: addTodoReducer,
        deleteTodo: deleteTodoReducer,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodosThunk.fulfilled, fetchTodosReducer);
    },
});

export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;