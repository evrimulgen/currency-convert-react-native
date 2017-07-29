export const CURRENCY_SWAP = 'CURRENCY_SWAP';
export const CURRENCY_VALUE_CHANGE = 'CURRENCY_VALUE_CHANGE';

export const currencySwap = () => ({
    type: CURRENCY_SWAP
});

export const currencyValueChange = (amount) => ({
    type: CURRENCY_VALUE_CHANGE,
    amount
});

