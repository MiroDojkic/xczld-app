import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './modules/root';
import apiMiddleware from './middlewares/apiMiddleware';
import client from '../utils/apiClient';

const middlewares = [thunk, apiMiddleware(client)];

if (__DEV__) {
  const logger = createLogger();
  middlewares.unshift(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
