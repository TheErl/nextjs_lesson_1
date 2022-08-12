import { createListenerMiddleware, Dispatch, ForkedTaskAPI, ListenerEffectAPI, PayloadAction } from "@reduxjs/toolkit";
import { addTodo, fetchTodosThunk } from "slices/todo";
const listenerMiddleware = createListenerMiddleware();

const addTodoHandler = async (action:PayloadAction<string>, listenerApi: ListenerEffectAPI<any, Dispatch>) => {
    console.log('Todo added: ', action.payload);
    const task = listenerApi.fork(async (forkApi: ForkedTaskAPI) => {
        await forkApi.delay(3000);
        listenerApi.dispatch(fetchTodosThunk() as never);
        return 'todosFetched';
    });
    console.log(await task.result);
};

const fetchTodosHandler = (action: PayloadAction<string>, listenerApi: any) => {
    console.log('fetch todos handler', action.payload);
    // listenerApi.unsubscribe();
};

listenerMiddleware.startListening({
  actionCreator : addTodo,
  effect: addTodoHandler
});

listenerMiddleware.startListening({
    actionCreator : fetchTodosThunk.fulfilled,
    effect: fetchTodosHandler
});

export default listenerMiddleware;