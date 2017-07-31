import {
    CURRENCY_SWAP,
    CURRENCY_VALUE_CHANGE,
    CURRENCY_MAIN_SELECT,
    CURRENCY_QUOTE_SELECT,
    CONVERSION_REQ_RESULT,
    CONVERSION_REQ_ERROR
} from '../actions/currencies';

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
};

const setConversions = (state, action) => {
    let conversion = {
        isFetching: true,
        date: '',
        rates: {}
    };

    if (state.conversions[action.currency]) {
        conversion = state.conversions[action.currency];
    }

    return {
        ...state.conversions,
        [action.currency]: conversion
    }
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
                amount: action.amount
            };
            break;
        case CURRENCY_MAIN_SELECT:
            return {
                ...state,
                baseCurrency: action.currency,
                conversions:  setConversions(state, action)
            };
            break;
        case CURRENCY_QUOTE_SELECT:
            return {
                ...state,
                quoteCurrency: action.currency,
                conversions: setConversions(state, action)
            };
            break;

        default:
            return state
    }
};

export default reducer;