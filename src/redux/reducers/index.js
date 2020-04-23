import { combineReducers } from 'redux';
import todo from './todo';

// only one reducer for now - recklessly breaking all YAGNI wisdom
export default combineReducers({ todo });
