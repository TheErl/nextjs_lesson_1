import { fork } from 'redux-saga/effects';
import todoSaga from 'sagas/todo';
import themeSaga from 'sagas/theme';
export default function* rootSaga() {
    yield fork(todoSaga);
    yield fork(themeSaga);

}