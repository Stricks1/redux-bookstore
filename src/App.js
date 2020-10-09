import React from 'react';
import BooksList from './components/booksList';
import BooksForm from './components/booksForm';
import './index.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <hr className="line" />
      <BooksForm />
    </div>
  );
}

export default App;
