import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import logger from 'redux-logger';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export default createStore(reducers, applyMiddleware(...middlewares));