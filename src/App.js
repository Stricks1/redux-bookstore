import React from 'react';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="d-flex-column-center">
        <BooksList />
        <hr className="line" />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
