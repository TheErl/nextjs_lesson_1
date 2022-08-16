import { fork } from 'redux-saga/effects';
import todoSaga from 'sagas/todo';
import themeSaga from 'sagas/theme';
export default function* rootSaga() {
    console.log('started RootSaga');
    yield fork(todoSaga);
    yield fork(themeSaga);

}