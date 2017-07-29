import { CURRENCY_SWAP, CURRENCY_VALUE_CHANGE } from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENCY_SWAP:
            return {
                ...state,
                baseCurrency: state.quoteCurrency,
                quoteCurrency: state.baseCurrency
            };
        break;
        case CURRENCY_VALUE_CHANGE:
            return {
                ...state,
            };
            break;
        default:
            return state
    }
};

export default reducer;