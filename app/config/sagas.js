import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
    CURRENCY_MAIN_SELECT,
    CURRENCY_SWAP,
    CURRENCY_INITIAL_UPDATE,
    CONVERSION_REQ_RESULT,
    CONVERSION_REQ_ERROR
} from '../actions/currencies';

const getLatestConversionRate = currency => fetch(`https://api.fixer.io/latest?base=${currency}`);

function* updateConversionRates(action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }

        const response = yield call(getLatestConversionRate, currency);
        const result = yield response.json();


        if (result.error) {
            yield put({type: CONVERSION_REQ_ERROR, error: result.error})
        } else {
            yield put({type: CONVERSION_REQ_RESULT, result})
        }

    } catch (e) {
        yield put({type: CONVERSION_REQ_ERROR, error: e.message})
    }
}

export default function* rootSaga() {
    yield takeEvery(CURRENCY_INITIAL_UPDATE, updateConversionRates);
    yield takeEvery(CURRENCY_SWAP, updateConversionRates);
    yield takeEvery(CURRENCY_MAIN_SELECT, updateConversionRates);
}