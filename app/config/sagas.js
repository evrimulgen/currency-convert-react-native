import { takeEvery } from 'redux-saga/effects';
import {
    CURRENCY_MAIN_SELECT,
    CURRENCY_SWAP,
    CURRENCY_INITIAL_UPDATE
} from '../actions/currencies';

function* updateConversionRates(action) {
    yield;
}

export default function* rootSaga() {
    yield takeEvery(CURRENCY_INITIAL_UPDATE, updateConversionRates);
    yield takeEvery(CURRENCY_SWAP, updateConversionRates);
    yield takeEvery(CURRENCY_MAIN_SELECT, updateConversionRates);
}