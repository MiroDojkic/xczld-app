import { combineReducers } from 'redux';
import appNavigation from './appNavigation';
import tabNavigation from './tabNavigation';
import races from './races';
import clubs from './clubs';

const reducer = combineReducers({ appNavigation, tabNavigation, races, clubs });

export default reducer;
