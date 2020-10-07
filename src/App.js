import React from 'react';
import { Provider } from 'react-redux';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import store from './reducers';

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
