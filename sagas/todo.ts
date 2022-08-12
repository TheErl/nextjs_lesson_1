
import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { postTodo } from "services/todo";
import { addTodo, fetchTodosThunk } from "slices/todo";
import { Todo } from "types/todo";

function* addTodoHandler(action: PayloadAction<string>): SagaIterator {
    console.log(action.payload);
    const result = yield call(postTodo,action.payload);
    yield delay(5000);
    yield put(fetchTodosThunk() as never);
    console.log(result);
}

function* fetchTodosHandler(action: PayloadAction<Todo[]>): SagaIterator{
    console.log('fetch todos handler', action.payload);
}

function* todoSaga() {
    yield takeEvery(addTodo.toString(), addTodoHandler);
    yield takeEvery(fetchTodosThunk.fulfilled, fetchTodosHandler);
}

export default todoSaga;
