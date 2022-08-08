import { fork } from 'redux-saga/effects';
import todoSaga from 'sagas/todo';

export default function* rootSaga() {
    console.log('started RootSaga');
    yield fork(todoSaga);
    // code after fork-effect
}