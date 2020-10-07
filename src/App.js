import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import reducer from './reducers/books';

const bookTest = {
  books: [
    {
      id: 1,
      title: 'some Book',
      category: 'Action',
    },
    {
      id: 2,
      title: 'another Book',
      category: 'another Action',
    },
  ],
};

const store = createStore(reducer, bookTest);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BooksList />
        <BooksForm />
      </div>
    </Provider>
  );
}

export default App;
