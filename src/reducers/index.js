import { combineReducers } from 'redux';
import books from './books';

const combinedReducer = combineReducers({
  books,
});

export default combinedReducer;
