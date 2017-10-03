import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import client from '../utils/apiClient';
import apiMiddleware from './middlewares/apiMiddleware';
import appNavigation from './modules/appNavigation';
import races from './modules/races';

const reducer = combineReducers({ appNavigation, races });
const store = createStore(
  reducer,
  applyMiddleware(thunk, apiMiddleware(client))
);

export default store;
