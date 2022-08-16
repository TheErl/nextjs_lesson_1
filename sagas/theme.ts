
import { PayloadAction } from "@reduxjs/toolkit";
import { SagaIterator } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { toggleTheme } from "slices/theme";
import { Theme } from "types/theme";


function* handleThemeChange(action: PayloadAction<Theme>): SagaIterator{
    console.log('theme changed');
}

function* themeSaga() {
    yield takeEvery(toggleTheme.toString(), handleThemeChange);
}

export default themeSaga;
