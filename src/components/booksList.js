import React from 'react';
import { connect } from 'react-redux';
import { RemoveBook } from '../actions';
import Book from './book';

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(RemoveBook(book)),
});

const booksList = ({ books, removeBook }) => {
  const removeClick = book => {
    removeBook(book);
  };

  return (
    <table>
      <tbody>
        {
          books.map(book => (<Book key={book.id} book={book} remove={removeClick} />))
        }
      </tbody>
    </table>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(booksList);
