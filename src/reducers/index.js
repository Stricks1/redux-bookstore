import { combineReducers, createStore } from 'redux';
import books from './books';

const combinedReducer = combineReducers({
  books,
});

const store = createStore(combinedReducer);

export default store;
