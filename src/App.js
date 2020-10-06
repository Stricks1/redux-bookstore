import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import reducer from './reducers/books';

const bookTest = {
  books: [
    {
      id: 2,
      title: 'something',
      category: 'Action',
    },
  ],
};

const store = createStore(reducer, bookTest);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksList />
      </div>
    </Provider>
  );
}

export default App;
