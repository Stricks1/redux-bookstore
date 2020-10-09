import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const combinedReducer = combineReducers({
  books,
  filter,
});

export default combinedReducer;
