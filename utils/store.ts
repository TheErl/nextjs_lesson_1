// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../reducers/todo";

// const store = configureStore({ reducer: todoReducer });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "slices/todo";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
