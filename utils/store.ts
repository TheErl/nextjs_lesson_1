// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todo";

// const store = configureStore({ reducer: todoReducer });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "slices/todo";


const store = configureStore({
    reducer:{
        todos: todoReducer,
    },
});

export default store;
