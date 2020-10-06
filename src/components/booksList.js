import React from 'react';
import { connect } from 'react-redux';
import Book from './book';

const mapStateToProps = state => ({
  state,
});

const booksList = ({ state }) => {
  console.log(state);
  const { books } = this.state;

  return (
    <table>
      {
        books.forEach(book => (<Book key={book.id} book={book} />))
      }
    </table>
  );
};

export default connect(mapStateToProps)(booksList);
