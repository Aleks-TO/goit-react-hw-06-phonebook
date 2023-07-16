import { combineReducers } from 'redux';
import { phonebookReducer } from './phonebook/phonebooSlice';

export const reducer = combineReducers({
  phonebook: phonebookReducer,
});
