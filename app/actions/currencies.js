export const CURRENCY_SWAP = 'CURRENCY_SWAP';
export const CURRENCY_VALUE_CHANGE = 'CURRENCY_VALUE_CHANGE';
export const CURRENCY_MAIN_SELECT = 'CURRENCY_MAIN_SELECT';
export const CURRENCY_QUOTE_SELECT = 'CURRENCY_QUOTE_SELECT';

export const CONVERSION_INITIAL_UPDATE = 'CONVERSION_INITIAL_UPDATE';
export const CONVERSION_REQ_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_REQ_ERROR = 'CONVERSION_REQ_ERROR';

export const currencySwap = () => ({
    type: CURRENCY_SWAP
});

export const currencyValueChange = (amount) => ({
    type: CURRENCY_VALUE_CHANGE,
    amount: parseFloat(amount)
});

export const selectMainCurrency = (currency) => ({
    type: CURRENCY_MAIN_SELECT,
    currency
});

export const selectQuoteCurrency = (currency) => ({
    type: CURRENCY_QUOTE_SELECT,
    currency
});

export const initialCurrencyUpdate = () => ({
    type: CONVERSION_INITIAL_UPDATE
});

export const conersionReqResult = () => ({
    type: CONVERSION_REQ_RESULT,
});

export const conversionReqError = () => ({
    type: CONVERSION_REQ_ERROR,
});