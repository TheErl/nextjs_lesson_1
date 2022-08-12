import { configureStore } from "@reduxjs/toolkit";
// import createSagaMiddleware from "redux-saga";
import todoReducer from "slices/todo";
import ListenerMiddleware from '../listeners';
import rootSaga from "./saga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(ListenerMiddleware.middleware),
});

// sagaMiddleware.run(rootSaga);

export default store;
