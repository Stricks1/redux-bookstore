import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import reducer from './reducers/books';

const store = createStore(reducer);

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
