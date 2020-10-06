import React from 'react';
import Book from './book';

/*
Implement the BooksList component
It should display the books as an html table.
Each row should contain Book ID, title and category.
It should connect to the Redux store and fetch the books from the state.
*/

const booksList = () => {
  const { books } = this.state;

  let listOfBooks;

  return (
    <table>
      {books.forEach(book => {
        <tr>
          <Book book={book} />
        </tr>;
      })}
    </table>
  );
};

export default booksList;
