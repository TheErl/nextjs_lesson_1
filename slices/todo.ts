import { CaseReducer, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqueId } from 'lodash';
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

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      return response.json();
    }
);

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: addTodoReducer,
        deleteTodo: deleteTodoReducer,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.fulfilled, fetchTodosReducer);
    },
});

export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;